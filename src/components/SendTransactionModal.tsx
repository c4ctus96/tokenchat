import React, { useState, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { IoSend } from "react-icons/io5";
import { useAccount, useBalance, useSendTransaction, useWaitForTransactionReceipt, useChainId, useEstimateGas, useGasPrice, usePublicClient } from "wagmi";
import { parseEther, isAddress, formatEther } from "viem";
import { useUser } from "./UserContext";
import EthProfilePic from "./EthProfilePic";
import "../styles.css";

interface SendTransactionModalProps {
  onClose: () => void;
  recipientUser?: {
    id: string;
    name: string;
    wallet: string;
  };
  onTransactionSent?: (transactionData: TransactionData) => void;
}

export interface TransactionData {
  hash: string;
  to: string;
  amount: string;
  chainId: number;
  timestamp: Date;
  from: string;
  recipientName: string;
  senderName: string;
  status: 'pending' | 'confirmed' | 'failed';
  comment?: string;
  gasUsed?: string;
  gasFee?: string;
}

const SendTransactionModal: React.FC<SendTransactionModalProps> = ({ 
  onClose, 
  recipientUser,
  onTransactionSent 
}) => {
  const { address } = useAccount();
  const { currentUser } = useUser();
  const chainId = useChainId();
  const publicClient = usePublicClient();
  
  // Transaction form state
  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState(recipientUser?.wallet || "");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<'form' | 'confirming' | 'pending' | 'success' | 'error'>('form');
  const [error, setError] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  // Helper functions (declared early to avoid hoisting issues)
  const isValidAddress = () => {
    return isAddress(recipientAddress);
  };

  const isValidAmount = () => {
    try {
      const parsedAmount = parseFloat(amount);
      if (parsedAmount <= 0) return false;
      if (!balance) return false;
      
      // Check if user has enough balance including gas fees
      const total = totalCost ? parseFloat(totalCost) : parsedAmount;
      return total <= parseFloat(balance.formatted);
    } catch {
      return false;
    }
  };

  // Get user's balance for current chain
  const { data: balance, isLoading: balanceLoading, error: balanceError, refetch: refetchBalance } = useBalance({
    address: address,
    chainId: chainId,
    query: {
      retry: 3,
      retryDelay: 1000,
    }
  });

  // Gas estimation
  const { data: gasEstimate, isLoading: gasLoading } = useEstimateGas({
    to: recipientAddress as `0x${string}`,
    value: amount ? parseEther(amount) : undefined,
    query: {
      enabled: isValidAddress() && !!amount && parseFloat(amount) > 0,
      retry: 2,
    }
  });

  const { data: gasPrice } = useGasPrice({
    chainId: chainId,
    query: {
      retry: 2,
    }
  });

  // Calculate estimated gas fee
  const estimatedGasFee = gasEstimate && gasPrice 
    ? formatEther(gasEstimate * gasPrice)
    : null;

  // Calculate total cost (amount + gas fee)
  const totalCost = amount && estimatedGasFee 
    ? (parseFloat(amount) + parseFloat(estimatedGasFee)).toString()
    : null;

  // Transaction hooks
  const { 
    sendTransaction, 
    data: hash, 
    error: sendError, 
    isPending: isSending,
    reset: resetSendTransaction
  } = useSendTransaction();

  const { 
    isLoading: isConfirming, 
    isSuccess: isConfirmed,
    isError: isConfirmError,
    error: confirmError
  } = useWaitForTransactionReceipt({
    hash,
    timeout: 60000, // 60 second timeout
    query: {
      enabled: !!hash,
      retry: 5,
      retryDelay: 2000,
    }
  });

  // Reset transaction state when modal opens
  useEffect(() => {
    resetSendTransaction();
    setStep('form');
    setError(null);
    
    // Try to refetch balance when modal opens
    if (refetchBalance) {
      refetchBalance();
    }
  }, [resetSendTransaction, refetchBalance]);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  // Handle transaction lifecycle
  useEffect(() => {
    if (isSending) {
      setStep('confirming');
      setError(null);
      
      // Set a timeout for confirming state (in case user never confirms/rejects)
      const timeout = setTimeout(() => {
        if (step === 'confirming') {
          setError('Transaction confirmation timed out. Please try again.');
          setStep('error');
        }
      }, 60000) as number; // 60 seconds
      
      setTimeoutId(timeout);
    }
  }, [isSending]);

  useEffect(() => {
    if (hash) {
      // Clear the confirming timeout since we have a hash
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
      
      if (!isConfirming && !isConfirmed && !isConfirmError) {
        setStep('pending');
      }
    }
  }, [hash, isConfirming, isConfirmed, isConfirmError, timeoutId]);

  useEffect(() => {
    if (isConfirmed && hash) {
      setStep('success');
      
      // Create transaction data for chat integration
      const transactionData: TransactionData = {
        hash,
        to: recipientAddress,
        amount,
        chainId,
        timestamp: new Date(),
        from: address!,
        recipientName: recipientUser?.name || 'Unknown',
        senderName: currentUser?.name || 'You',
        status: 'confirmed',
        comment: message.trim() || undefined,
        gasUsed: gasEstimate?.toString(),
        gasFee: estimatedGasFee || undefined,
      };

      if (onTransactionSent) {
        onTransactionSent(transactionData);
      }

      // Auto-close after success
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [isConfirmed, hash, recipientAddress, amount, chainId, address, recipientUser, currentUser, onTransactionSent, onClose, message, gasEstimate, estimatedGasFee]);

  useEffect(() => {
    if (sendError || isConfirmError) {
      setStep('error');
      const errorMessage = sendError?.message || confirmError?.message || 'Transaction failed';
      
      // Parse common error messages
      if (errorMessage.includes('insufficient funds')) {
        setError('Insufficient funds for this transaction');
      } else if (errorMessage.includes('user rejected') || errorMessage.includes('User denied')) {
        setError('Transaction was cancelled by user');
      } else if (errorMessage.includes('gas')) {
        setError('Transaction failed due to gas issues');
      } else if (errorMessage.includes('network')) {
        setError('Network error. Please check your connection and try again.');
      } else {
        // Simplify complex error messages
        setError('Transaction failed. Please try again.');
      }
      
      // Clear any pending timeouts
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    }
  }, [sendError, isConfirmError, confirmError, timeoutId]);

  // Network information
  const getNetworkInfo = (chainId: number) => {
    switch (chainId) {
      case 1: return { 
        name: 'Ethereum Mainnet', 
        symbol: 'ETH', 
        color: '#627EEA',
        explorerUrl: 'https://etherscan.io'
      };
      case 56: return { 
        name: 'BNB Smart Chain', 
        symbol: 'BNB', 
        color: '#F3BA2F',
        explorerUrl: 'https://bscscan.com'
      };
      case 137: return { 
        name: 'Polygon', 
        symbol: 'MATIC', 
        color: '#8247E5',
        explorerUrl: 'https://polygonscan.com'
      };
      case 42161: return { 
        name: 'Arbitrum One', 
        symbol: 'ETH', 
        color: '#28A0F0',
        explorerUrl: 'https://arbiscan.io'
      };
      case 10: return { 
        name: 'Optimism', 
        symbol: 'ETH', 
        color: '#FF0420',
        explorerUrl: 'https://optimistic.etherscan.io'
      };
      case 8453: return { 
        name: 'Base', 
        symbol: 'ETH', 
        color: '#0052FF',
        explorerUrl: 'https://basescan.org'
      };
      case 43114: return { 
        name: 'Avalanche C-Chain', 
        symbol: 'AVAX', 
        color: '#E84142',
        explorerUrl: 'https://snowtrace.io'
      };
      case 250: return { 
        name: 'Fantom Opera', 
        symbol: 'FTM', 
        color: '#1969FF',
        explorerUrl: 'https://ftmscan.com'
      };
      default: return { 
        name: `Chain ${chainId}`, 
        symbol: 'ETH', 
        color: '#666',
        explorerUrl: null
      };
    }
  };

  const networkInfo = getNetworkInfo(chainId);

  const canSubmit = () => {
    return isValidAmount() && isValidAddress() && !isSending && !balanceLoading && balance;
  };

  // Handle form submission
  const handleSend = async () => {
    if (!canSubmit()) return;

    try {
      setError(null);
      console.log('Sending transaction:', {
        to: recipientAddress,
        value: parseEther(amount),
        chainId
      });
      
      sendTransaction({
        to: recipientAddress as `0x${string}`,
        value: parseEther(amount),
      });
    } catch (err) {
      console.error('Transaction error:', err);
      setError('Failed to initiate transaction');
      setStep('error');
    }
  };

  // Quick amount buttons
  const quickAmounts = ['0.001', '0.01', '0.1'];

  const handleQuickAmount = (quickAmount: string) => {
    setAmount(quickAmount);
  };

  // Handle max amount with proper gas calculation + safety buffer (MetaMask approach)
  const handleMaxAmount = async () => {
    if (!balance || !address || !publicClient) return;
    
    const balanceValue = parseFloat(balance.formatted);

    try {
      // Step 1: Get current gas price
      const currentGasPrice = gasPrice;
      if (!currentGasPrice) {
        alert('Unable to fetch gas price. Please try again in a moment.');
        return;
      }

      // Step 2: Estimate gas for a small transaction
      // Use a very small amount or 1% of balance, whichever is smaller
      const testAmountValue = Math.min(0.0001, balanceValue * 0.01);
      const testAmount = parseEther(testAmountValue.toString());
      
      const gasEstimate = await publicClient.estimateGas({
        account: address,
        to: recipientAddress as `0x${string}`,
        value: testAmount,
      });

      // Step 3: Apply MetaMask-style safety buffer  
      // GitHub issue shows MetaMask uses 1.5x the estimate (50% increase)
      const gasWithBuffer = gasEstimate * BigInt(150) / BigInt(100); // 50% increase (1.5x)
      
      // Step 4: Calculate transaction fee with buffer
      const txFee = gasWithBuffer * currentGasPrice;
      const txFeeInEther = formatEther(txFee);
      const txFeeValue = parseFloat(txFeeInEther);

      // Step 5: Calculate max sendable amount
      const maxSendableAmount = balanceValue - txFeeValue;

      // Check if there's enough left after gas
      if (maxSendableAmount <= 0) {
        alert(`Insufficient balance for transaction.\n\nBalance: ${balanceValue} ${networkInfo.symbol}\nEstimated gas fee (with buffer): ${txFeeValue.toFixed(8)} ${networkInfo.symbol}\n\nYou need more ${networkInfo.symbol} to cover gas fees.`);
        return;
      }

      // Additional safety check: ensure result doesn't exceed balance
      const finalAmount = Math.min(maxSendableAmount, balanceValue * 0.99); // Never use more than 99% of balance

      // Use higher precision for small amounts
      const precision = finalAmount < 0.01 ? 8 : 6;
      setAmount(finalAmount.toFixed(precision));

      console.log('Max calculation with MetaMask 1.5x approach:', {
        balance: balanceValue,
        gasEstimate: gasEstimate.toString(),
        gasWithBuffer: gasWithBuffer.toString(),
        gasPrice: currentGasPrice.toString(),
        txFee: txFeeValue,
        maxSendable: maxSendableAmount,
        finalAmount: finalAmount
      });

    } catch (error) {
      console.error('Error calculating max amount:', error);
      alert('Unable to calculate max amount. Please enter amount manually.');
    }
  };

  // Retry balance fetch
  const retryBalance = () => {
    if (refetchBalance) {
      refetchBalance();
    }
  };

  // Create block explorer URL
  const getExplorerUrl = () => {
    if (!hash || !networkInfo.explorerUrl) return null;
    return `${networkInfo.explorerUrl}/tx/${hash}`;
  };

  // Handle close with confirmation if transaction is in progress
  const handleClose = () => {
    if (step === 'confirming') {
      const shouldClose = window.confirm(
        'Are you sure you want to close? The transaction request may still be pending in your wallet.'
      );
      if (!shouldClose) return;
    }
    
    if (step === 'pending') {
      const shouldClose = window.confirm(
        'Transaction is being processed on the blockchain. Are you sure you want to close? You can check the status using the transaction hash.'
      );
      if (!shouldClose) return;
    }
    
    // Clear any timeouts
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    onClose();
  };

  // Render different steps
  const renderContent = () => {
    switch (step) {
      case 'form':
        return (
          <>
            <div className="transaction-form">
              {/* Recipient Info */}
              {recipientUser && (
                <div className="recipient-info">
                  <EthProfilePic eth={recipientUser.wallet} />
                  <div className="recipient-details">
                    <h4>{recipientUser.name}</h4>
                    <p className="recipient-address">
                      {recipientUser.wallet.slice(0, 6)}...{recipientUser.wallet.slice(-4)}
                    </p>
                  </div>
                </div>
              )}

              {/* Balance Error */}
              {balanceError && (
                <div className="error-message">
                  Failed to load balance. 
                  <button 
                    onClick={retryBalance}
                    style={{ 
                      marginLeft: '10px', 
                      background: '#50b458', 
                      border: 'none', 
                      color: 'white', 
                      padding: '4px 8px', 
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Amount Input */}
              <div className="form-group">
                <label>Amount ({networkInfo.symbol})</label>
                <div className="amount-input-group">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.0"
                    step="0.0001"
                    min="0"
                    max={balance?.formatted || '0'}
                    className={amount && !isValidAmount() ? 'error' : ''}
                  />
                  <div className="quick-amounts">
                    {quickAmounts.map((quickAmount) => (
                      <button
                        key={quickAmount}
                        type="button"
                        className="quick-amount-btn"
                        onClick={() => handleQuickAmount(quickAmount)}
                      >
                        {quickAmount}
                      </button>
                    ))}
                    <button
                      type="button"
                      className="quick-amount-btn"
                      onClick={handleMaxAmount}
                      disabled={!balance}
                    >
                      Max
                    </button>
                  </div>
                </div>
                <div className="balance-info">
                  {balanceLoading ? (
                    <span>Loading balance...</span>
                  ) : balance ? (
                    <span>
                      Balance: {parseFloat(balance.formatted).toFixed(6)} {balance.symbol}
                    </span>
                  ) : (
                    <span>Balance unavailable</span>
                  )}
                </div>
                {amount && !isValidAmount() && (
                  <span className="error-text">
                    {parseFloat(amount) <= 0 
                      ? 'Amount must be greater than 0' 
                      : totalCost && parseFloat(totalCost) > parseFloat(balance?.formatted || '0')
                        ? 'Insufficient balance (including gas fees)'
                        : 'Insufficient balance'
                    }
                  </span>
                )}
              </div>

              {/* Recipient Address (if not pre-filled) */}
              {!recipientUser && (
                <div className="form-group">
                  <label>Recipient Address</label>
                  <input
                    type="text"
                    value={recipientAddress}
                    onChange={(e) => setRecipientAddress(e.target.value)}
                    placeholder="0x..."
                    className={!isValidAddress() && recipientAddress ? 'error' : ''}
                  />
                  {recipientAddress && !isValidAddress() && (
                    <span className="error-text">Invalid address</span>
                  )}
                </div>
              )}

              {/* Message (optional) */}
              <div className="form-group">
                <label>Comment (optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's this transaction for?"
                  maxLength={200}
                  rows={3}
                />
                <div style={{ fontSize: '12px', color: '#ccc', textAlign: 'right', marginTop: '4px' }}>
                  {message.length}/200
                </div>
              </div>

              {/* Transaction Summary */}
              {amount && parseFloat(amount) > 0 && (
                <div className="transaction-summary">
                  <h4>Transaction Summary</h4>
                  <div className="summary-row">
                    <span>Amount to send:</span>
                    <span>{amount} {networkInfo.symbol}</span>
                  </div>
                  {estimatedGasFee && (
                    <div className="summary-row">
                      <span>Estimated gas fee:</span>
                      <span className="gas-fee">
                        {parseFloat(estimatedGasFee).toFixed(6)} {networkInfo.symbol}
                      </span>
                    </div>
                  )}
                  {gasLoading && (
                    <div className="summary-row">
                      <span>Estimating gas fee...</span>
                      <span className="gas-loading">⏳</span>
                    </div>
                  )}
                  {totalCost && (
                    <div className="summary-row total">
                      <span><strong>Total cost:</strong></span>
                      <span><strong>{parseFloat(totalCost).toFixed(6)} {networkInfo.symbol}</strong></span>
                    </div>
                  )}
                  {amount && !isValidAmount() && totalCost && (
                    <div className="summary-warning">
                      ⚠️ Insufficient balance for total cost including gas fees
                    </div>
                  )}
                </div>
              )}

              {/* Network Info */}
              <div className="network-info">
                <span>Sending on {networkInfo.name}</span>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={handleClose}>
                Cancel
              </button>
              <button 
                className="send-btn"
                onClick={handleSend}
                disabled={!canSubmit()}
              >
                <IoSend size={18} />
                Send
              </button>
            </div>
          </>
        );

      case 'confirming':
        return (
          <div className="transaction-status">
            <div className="status-icon confirming">
              <div className="spinner" />
            </div>
            <h3>Confirm in Wallet</h3>
            <p>Please confirm the transaction in your wallet to continue.</p>
            <p>Network: {networkInfo.name}</p>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={handleClose}>
                Cancel
              </button>
            </div>
          </div>
        );

      case 'pending':
        return (
          <div className="transaction-status">
            <div className="status-icon pending">
              <div className="spinner" />
            </div>
            <h3>Transaction Pending</h3>
            <p>Your transaction is being processed on {networkInfo.name}.</p>
            {hash && (
              <div className="transaction-hash">
                <p>Transaction Hash:</p>
                <code>{hash.slice(0, 10)}...{hash.slice(-8)}</code>
              </div>
            )}
            {getExplorerUrl() && (
              <div className="transaction-explorer">
                <a 
                  href={getExplorerUrl()!} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="explorer-link"
                >
                  View on {networkInfo.name} Explorer →
                </a>
              </div>
            )}
            <div className="modal-footer">
              <button className="cancel-btn" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="transaction-status">
            <div className="status-icon success">
              ✓
            </div>
            <h3>Transaction Sent!</h3>
            <p>
              Successfully sent {amount} {networkInfo.symbol} to {recipientUser?.name || 'recipient'}
            </p>
            {hash && (
              <div className="transaction-hash">
                <p>Transaction Hash:</p>
                <code>{hash.slice(0, 10)}...{hash.slice(-8)}</code>
              </div>
            )}
            {getExplorerUrl() && (
              <div className="transaction-explorer">
                <a 
                  href={getExplorerUrl()!} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="explorer-link"
                >
                  View on {networkInfo.name} Explorer →
                </a>
              </div>
            )}
            <p className="auto-close">This window will close automatically...</p>
          </div>
        );

      case 'error':
        return (
          <div className="transaction-status">
            <div className="status-icon error">
              ✕
            </div>
            <h3>Transaction Failed</h3>
            <div className="error-message">{error}</div>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={onClose}>
                Close
              </button>
              <button className="retry-btn" onClick={() => {
                setStep('form');
                setError(null);
                resetSendTransaction();
                if (timeoutId) {
                  clearTimeout(timeoutId);
                  setTimeoutId(null);
                }
              }}>
                Try Again
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent transaction-modal">
        <div className="modal-header">
          <h2>Send {networkInfo.symbol}</h2>
          {(step === 'form' || step === 'error') && (
            <button 
              className="closeButton" 
              onClick={handleClose}
            >
              <SlClose size={20} />
            </button>
          )}
        </div>

        {renderContent()}
      </div>
    </div>
  );
};

export default SendTransactionModal;