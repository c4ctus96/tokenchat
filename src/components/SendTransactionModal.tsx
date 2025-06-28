import React, { useState, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { IoSend } from "react-icons/io5";
import { useAccount, useBalance, useSendTransaction, useWaitForTransactionReceipt, useChainId, useSwitchChain } from "wagmi";
import { parseEther, formatEther, isAddress } from "viem";
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
}

const SendTransactionModal: React.FC<SendTransactionModalProps> = ({ 
  onClose, 
  recipientUser,
  onTransactionSent 
}) => {
  const { address } = useAccount();
  const { currentUser } = useUser();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  
  // Transaction form state
  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState(recipientUser?.wallet || "");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<'form' | 'confirming' | 'pending' | 'success' | 'error'>('form');
  const [error, setError] = useState<string | null>(null);

  // Get user's balance for current chain
  const { data: balance, isLoading: balanceLoading, error: balanceError } = useBalance({
    address: address,
    chainId: chainId,
  });

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
  });

  // Reset transaction state when modal opens
  useEffect(() => {
    resetSendTransaction();
    setStep('form');
    setError(null);
  }, [resetSendTransaction]);

  // Handle transaction lifecycle
  useEffect(() => {
    if (isSending) {
      setStep('confirming');
      setError(null);
    }
  }, [isSending]);

  useEffect(() => {
    if (hash && !isConfirming && !isConfirmed && !isConfirmError) {
      setStep('pending');
    }
  }, [hash, isConfirming, isConfirmed, isConfirmError]);

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
        status: 'confirmed'
      };

      if (onTransactionSent) {
        onTransactionSent(transactionData);
      }

      // Auto-close after success
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [isConfirmed, hash, recipientAddress, amount, chainId, address, recipientUser, currentUser, onTransactionSent, onClose]);

  useEffect(() => {
    if (sendError || isConfirmError) {
      setStep('error');
      const errorMessage = sendError?.message || confirmError?.message || 'Transaction failed';
      
      // Parse common error messages
      if (errorMessage.includes('insufficient funds')) {
        setError('Insufficient funds for this transaction');
      } else if (errorMessage.includes('user rejected')) {
        setError('Transaction was cancelled');
      } else if (errorMessage.includes('gas')) {
        setError('Transaction failed due to gas issues');
      } else {
        setError(errorMessage);
      }
    }
  }, [sendError, isConfirmError, confirmError]);

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

  // Validation
  const isValidAmount = () => {
    try {
      const parsedAmount = parseFloat(amount);
      if (parsedAmount <= 0) return false;
      if (!balance) return false;
      return parsedAmount <= parseFloat(balance.formatted);
    } catch {
      return false;
    }
  };

  const isValidAddress = () => {
    return isAddress(recipientAddress);
  };

  const canSubmit = () => {
    return isValidAmount() && isValidAddress() && !isSending && !balanceLoading;
  };

  // Handle form submission
  const handleSend = async () => {
    if (!canSubmit()) return;

    try {
      setError(null);
      sendTransaction({
        to: recipientAddress as `0x${string}`,
        value: parseEther(amount),
      });
    } catch (err) {
      console.error('Transaction error:', err);
      setError('Failed to send transaction');
      setStep('error');
    }
  };

  // Quick amount buttons
  const quickAmounts = ['0.001', '0.01', '0.1'];

  const handleQuickAmount = (quickAmount: string) => {
    setAmount(quickAmount);
  };

  // Handle max amount
  const handleMaxAmount = () => {
    if (balance) {
      // Leave some gas for the transaction (approximate)
      const maxAmount = Math.max(0, parseFloat(balance.formatted) - 0.001);
      setAmount(maxAmount.toString());
    }
  };

  // Create block explorer URL
  const getExplorerUrl = () => {
    if (!hash || !networkInfo.explorerUrl) return null;
    return `${networkInfo.explorerUrl}/tx/${hash}`;
  };

  // Handle close with confirmation if transaction is in progress
  const handleClose = () => {
    if (step === 'confirming' || step === 'pending') {
      const shouldClose = window.confirm(
        'Transaction is in progress. Are you sure you want to close this window? You can check the transaction status in your wallet.'
      );
      if (!shouldClose) return;
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
                  Failed to load balance. Please check your network connection.
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
                    {parseFloat(amount) <= 0 ? 'Amount must be greater than 0' : 'Insufficient balance'}
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
                <label>Message (optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What's this for?"
                  maxLength={200}
                  rows={3}
                />
              </div>

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
                Send {amount || '0'} {networkInfo.symbol}
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