import React, { useState, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { IoSend } from "react-icons/io5";
import { useAccount, useBalance, useSendTransaction, useWaitForTransactionReceipt, useEstimateGas, useGasPrice, usePublicClient } from "wagmi";
import { parseEther, isAddress, formatEther } from "viem";
import { useUser } from "./UserContext";
import EthProfilePic from "./EthProfilePic";
import { getNetworkInfo, NetworkInfo } from "../utils/networks";
import { useChainListener } from "../hooks/useChainListener";
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
  const chainId = useChainListener();
  const publicClient = usePublicClient();
  
  // Network information state with loading indicator
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    name: 'Loading...',
    symbol: 'ETH',
    color: '#666666',
    explorerUrl: null,
    decimals: 18
  });
  const [networkLoading, setNetworkLoading] = useState(true);
  
  // Transaction form state
  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState(recipientUser?.wallet || "");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<'form' | 'confirming' | 'pending' | 'success' | 'error'>('form');
  const [error, setError] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  // Helper functions
  const isValidAddress = () => {
    return isAddress(recipientAddress);
  };

  const isValidAmount = () => {
    try {
      const parsedAmount = parseFloat(amount);
      if (parsedAmount <= 0) return false;
      if (!balance || balance.value === 0n) return false;
      
      // Check if user has enough balance including gas fees
      const total = totalCost ? parseFloat(totalCost) : parsedAmount;
      return total <= parseFloat(balance.formatted);
    } catch {
      return false;
    }
  };

  // Enhanced balance hook with better error handling
  const { 
    data: balance, 
    isLoading: balanceLoading, 
    error: balanceError, 
    refetch: refetchBalance,
    isRefetching: balanceRefetching 
  } = useBalance({
    address: address,
    chainId: chainId,
    query: {
      retry: (failureCount, error) => {
        console.log(`Balance fetch attempt ${failureCount + 1} for chain ${chainId}:`, error?.message);
        // Only retry network errors, not "unsupported chain" errors
        if (error?.message?.includes('unsupported') || error?.message?.includes('chain')) {
          return false;
        }
        return failureCount < 2;
      },
      retryDelay: 1000,
      refetchOnWindowFocus: false,
    }
  });

  // Gas estimation with better error handling
  const { 
    data: gasEstimate, 
    isLoading: gasLoading, 
    error: gasError,
    refetch: refetchGasEstimate 
  } = useEstimateGas({
    to: recipientAddress as `0x${string}`,
    value: amount ? parseEther(amount) : undefined,
    chainId: chainId,
    query: {
      enabled: isValidAddress() && !!amount && parseFloat(amount) > 0,
      retry: (failureCount, error) => {
        console.log(`Gas estimation attempt ${failureCount + 1}:`, error?.message);
        if (error?.message?.includes('unsupported') || error?.message?.includes('chain')) {
          return false;
        }
        return failureCount < 1;
      },
    }
  });

  const { 
    data: gasPrice, 
    error: gasPriceError,
    refetch: refetchGasPrice 
  } = useGasPrice({
    chainId: chainId,
    query: {
      retry: (failureCount, error) => {
        console.log(`Gas price fetch attempt ${failureCount + 1}:`, error?.message);
        if (error?.message?.includes('unsupported') || error?.message?.includes('chain')) {
          return false;
        }
        return failureCount < 1;
      },
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
    timeout: 60000,
    query: {
      enabled: !!hash,
      retry: 5,
      retryDelay: 2000,
    }
  });

  // Load network information when chain changes
  useEffect(() => {
    let isMounted = true;
    
    const loadNetworkInfo = async () => {
      console.log("SendTransactionModal: Loading network info for chain ID:", chainId);
      setNetworkLoading(true);
      
      try {
        const info = await getNetworkInfo(chainId);
        
        if (isMounted) {
          console.log("SendTransactionModal: Network info loaded:", info);
          setNetworkInfo(info);
        }
      } catch (error) {
        console.error("SendTransactionModal: Failed to load network info for chain", chainId, ":", error);
        
        if (isMounted) {
          // Enhanced fallback network info
          const fallbackInfo = getFallbackNetworkInfo(chainId);
          console.log("SendTransactionModal: Using fallback network info:", fallbackInfo);
          setNetworkInfo(fallbackInfo);
        }
      } finally {
        if (isMounted) {
          setNetworkLoading(false);
        }
      }
    };

    loadNetworkInfo();
    
    return () => {
      isMounted = false;
    };
  }, [chainId]);

  // Enhanced fallback function
  const getFallbackNetworkInfo = (chainId: number): NetworkInfo => {
    const fallbacks: Record<number, NetworkInfo> = {
      1: {
        name: 'Ethereum',
        symbol: 'ETH',
        color: '#627EEA',
        explorerUrl: 'https://etherscan.io',
        decimals: 18
      },
      56: {
        name: 'BNB Smart Chain',
        symbol: 'BNB',
        color: '#F3BA2F',
        explorerUrl: 'https://bscscan.com',
        decimals: 18
      },
      137: {
        name: 'Polygon',
        symbol: 'MATIC',
        color: '#8247E5',
        explorerUrl: 'https://polygonscan.com',
        decimals: 18
      },
      43114: {
        name: 'Avalanche',
        symbol: 'AVAX',
        color: '#E84142',
        explorerUrl: 'https://snowscan.xyz',
        decimals: 18
      },
      42161: {
        name: 'Arbitrum One',
        symbol: 'ETH',
        color: '#28A0F0',
        explorerUrl: 'https://arbiscan.io',
        decimals: 18
      },
      10: {
        name: 'Optimism',
        symbol: 'ETH',
        color: '#FF0420',
        explorerUrl: 'https://optimistic.etherscan.io',
        decimals: 18
      },
      8453: {
        name: 'Base',
        symbol: 'ETH',
        color: '#0052FF',
        explorerUrl: 'https://basescan.org',
        decimals: 18
      },
      250: {
        name: 'Fantom',
        symbol: 'FTM',
        color: '#1969FF',
        explorerUrl: 'https://ftmscan.com',
        decimals: 18
      }
    };

    return fallbacks[chainId] || {
      name: `Chain ${chainId}`,
      symbol: 'ETH',
      color: '#666666',
      explorerUrl: null,
      decimals: 18
    };
  };

  // Force refresh wagmi hooks when chainId changes
  useEffect(() => {
    console.log("SendTransactionModal: chainId changed to", chainId, "- refreshing wagmi hooks");
    
    // Small delay to allow for chain switch to complete
    const refreshTimer = setTimeout(() => {
      if (refetchBalance) {
        console.log("SendTransactionModal: Refetching balance for chain", chainId);
        refetchBalance().catch(error => {
          console.warn("Balance refetch failed:", error?.message);
        });
      }
      if (refetchGasPrice) {
        console.log("SendTransactionModal: Refetching gas price for chain", chainId);
        refetchGasPrice().catch(error => {
          console.warn("Gas price refetch failed:", error?.message);
        });
      }
    }, 500);

    return () => clearTimeout(refreshTimer);
  }, [chainId, refetchBalance, refetchGasPrice]);

  // Listen for network changes and force refresh
  useEffect(() => {
    const handleChainChanged = (newChainId: string) => {
      const newChainIdNumber = parseInt(newChainId, 16);
      console.log("SendTransactionModal: Chain changed event detected, new chain:", newChainIdNumber);
      
      // Force refresh network info immediately
      setNetworkLoading(true);
      
      // Delay the wagmi hook refresh to allow chain switch to complete
      setTimeout(() => {
        console.log("SendTransactionModal: Refreshing wagmi hooks after chain change");
        
        if (refetchBalance) {
          refetchBalance().catch(console.warn);
        }
        if (refetchGasEstimate) {
          refetchGasEstimate().catch(console.warn);
        }
        if (refetchGasPrice) {
          refetchGasPrice().catch(console.warn);
        }
        
        // Load network info for new chain
        getNetworkInfo(newChainIdNumber).then(info => {
          console.log("SendTransactionModal: Network info refreshed after chain change:", info);
          setNetworkInfo(info);
          setNetworkLoading(false);
        }).catch(error => {
          console.error("SendTransactionModal: Failed to refresh network info after chain change:", error);
          const fallbackInfo = getFallbackNetworkInfo(newChainIdNumber);
          setNetworkInfo(fallbackInfo);
          setNetworkLoading(false);
        });
      }, 1000);
    };

    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on?.('chainChanged', handleChainChanged);
      
      return () => {
        window.ethereum.removeListener?.('chainChanged', handleChainChanged);
      };
    }
  }, [refetchBalance, refetchGasEstimate, refetchGasPrice]);

  // Reset transaction state when modal opens
  useEffect(() => {
    resetSendTransaction();
    setStep('form');
    setError(null);
    
    // Initial balance fetch
    if (refetchBalance) {
      refetchBalance().catch(error => {
        console.warn("Initial balance fetch failed:", error?.message);
      });
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
      
      const timeout = setTimeout(() => {
        if (step === 'confirming') {
          setError('Transaction confirmation timed out. Please try again.');
          setStep('error');
        }
      }, 60000) as number;
      
      setTimeoutId(timeout);
    }
  }, [isSending]);

  useEffect(() => {
    if (hash) {
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

      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }, [isConfirmed, hash, recipientAddress, amount, chainId, address, recipientUser, currentUser, onTransactionSent, onClose, message, gasEstimate, estimatedGasFee]);

  useEffect(() => {
    if (sendError || isConfirmError) {
      setStep('error');
      const errorMessage = sendError?.message || confirmError?.message || 'Transaction failed';
      
      if (errorMessage.includes('insufficient funds')) {
        setError('Insufficient funds for this transaction');
      } else if (errorMessage.includes('user rejected') || errorMessage.includes('User denied')) {
        setError('Transaction was cancelled by user');
      } else if (errorMessage.includes('gas')) {
        setError('Transaction failed due to gas issues');
      } else if (errorMessage.includes('network')) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError('Transaction failed. Please try again.');
      }
      
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    }
  }, [sendError, isConfirmError, confirmError, timeoutId]);

  const canSubmit = () => {
    return isValidAmount() && isValidAddress() && !isSending && !balanceLoading && !balanceRefetching && !networkLoading;
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

  // Enhanced max amount calculation
  const handleMaxAmount = async () => {
    if (!balance || !address || !publicClient) {
      console.warn("Missing requirements for max calculation:", { balance: !!balance, address: !!address, publicClient: !!publicClient });
      return;
    }
    
    const balanceValue = parseFloat(balance.formatted);
    
    if (balanceValue <= 0) {
      alert(`No balance available on ${networkInfo.name}.\n\nCurrent balance: ${balanceValue} ${networkInfo.symbol}`);
      return;
    }

    try {
      const currentGasPrice = gasPrice;
      if (!currentGasPrice) {
        // Use fallback for max calculation
        const fallbackGasFee = 0.001; // Conservative estimate
        const maxSendableAmount = Math.max(0, balanceValue - fallbackGasFee);
        
        if (maxSendableAmount <= 0) {
          alert(`Insufficient balance for transaction.\n\nBalance: ${balanceValue} ${networkInfo.symbol}\nEstimated gas fee: ${fallbackGasFee} ${networkInfo.symbol}`);
          return;
        }
        
        const finalAmount = Math.min(maxSendableAmount, balanceValue * 0.95);
        const precision = finalAmount < 0.01 ? 8 : 6;
        setAmount(finalAmount.toFixed(precision));
        return;
      }

      // Estimate gas for a small transaction
      const testAmountValue = Math.min(0.0001, balanceValue * 0.01);
      const testAmount = parseEther(testAmountValue.toString());
      
      let gasEstimate: bigint;
      try {
        gasEstimate = await publicClient.estimateGas({
          account: address,
          to: recipientAddress as `0x${string}`,
          value: testAmount,
        });
      } catch (gasError) {
        console.warn("Gas estimation failed, using fallback:", gasError);
        // Use fallback gas estimate
        gasEstimate = BigInt(21000); // Standard transfer gas
      }

      // Apply safety buffer
      const gasWithBuffer = gasEstimate * BigInt(150) / BigInt(100);
      
      // Calculate transaction fee
      const txFee = gasWithBuffer * currentGasPrice;
      const txFeeInEther = formatEther(txFee);
      const txFeeValue = parseFloat(txFeeInEther);

      // Calculate max sendable amount
      const maxSendableAmount = balanceValue - txFeeValue;

      if (maxSendableAmount <= 0) {
        alert(`Insufficient balance for transaction.\n\nBalance: ${balanceValue} ${networkInfo.symbol}\nEstimated gas fee: ${txFeeValue.toFixed(8)} ${networkInfo.symbol}\n\nYou need more ${networkInfo.symbol} to cover gas fees.`);
        return;
      }

      const finalAmount = Math.min(maxSendableAmount, balanceValue * 0.99);
      const precision = finalAmount < 0.01 ? 8 : 6;
      setAmount(finalAmount.toFixed(precision));

      console.log('Max calculation completed:', {
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
      // Use simple fallback
      const fallbackAmount = balanceValue * 0.95; // Use 95% of balance as safe fallback
      const precision = fallbackAmount < 0.01 ? 8 : 6;
      setAmount(fallbackAmount.toFixed(precision));
    }
  };

  // Retry balance fetch
  const retryBalance = () => {
    if (refetchBalance) {
      refetchBalance().catch(error => {
        console.warn("Balance retry failed:", error?.message);
      });
    }
  };

  // Create block explorer URL
  const getExplorerUrl = () => {
    if (!hash || !networkInfo.explorerUrl) return null;
    return `${networkInfo.explorerUrl}/tx/${hash}`;
  };

  // Handle close with confirmation
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
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    onClose();
  };

  // Enhanced balance display with error handling
  const renderBalanceInfo = () => {
    if (balanceLoading || balanceRefetching) {
      return <span>Loading balance...</span>;
    }
    
    if (balanceError) {
      console.warn("Balance error:", balanceError.message);
      // Check if it's an unsupported network error
      if (balanceError.message?.includes('unsupported') || 
          balanceError.message?.includes('chain')) {
        return (
          <span style={{ color: '#ffc107' }}>
            Unsupported network - Please switch to a supported chain
          </span>
        );
      }
      return (
        <span style={{ color: '#ff4444' }}>
          Failed to load balance
          <button 
            onClick={retryBalance}
            style={{ 
              marginLeft: '8px', 
              background: '#50b458', 
              border: 'none', 
              color: 'white', 
              padding: '2px 6px', 
              borderRadius: '3px',
              cursor: 'pointer',
              fontSize: '10px'
            }}
          >
            Retry
          </button>
        </span>
      );
    }
    
    if (balance) {
      return (
        <span>
          Balance: {parseFloat(balance.formatted).toFixed(6)} {balance.symbol}
        </span>
      );
    }
    
    return <span>Balance: 0.000000 {networkInfo.symbol}</span>;
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

              {/* Network Status */}
              {(balanceError?.message?.includes('unsupported') || 
                gasError?.message?.includes('unsupported') ||
                gasPriceError?.message?.includes('unsupported')) && (
                <div className="error-message">
                  This network may not be fully supported. Some features may not work correctly.
                </div>
              )}

              {/* Amount Input */}
              <div className="form-group">
                <label>Amount ({networkLoading ? 'Loading...' : networkInfo.symbol})</label>
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
                      disabled={!balance || !!balanceError || balanceLoading}
                    >
                      Max
                    </button>
                  </div>
                </div>
                <div className="balance-info">
                  {renderBalanceInfo()}
                </div>
                {amount && !isValidAmount() && (
                  <span className="error-text">
                    {parseFloat(amount) <= 0 
                      ? 'Amount must be greater than 0' 
                      : totalCost && balance && parseFloat(totalCost) > parseFloat(balance.formatted)
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
                    <span>{amount} {networkLoading ? 'Loading...' : networkInfo.symbol}</span>
                  </div>
                  {estimatedGasFee && !gasError && (
                    <div className="summary-row">
                      <span>Estimated gas fee:</span>
                      <span className="gas-fee">
                        {parseFloat(estimatedGasFee).toFixed(6)} {networkLoading ? 'Loading...' : networkInfo.symbol}
                      </span>
                    </div>
                  )}
                  {gasLoading && (
                    <div className="summary-row">
                      <span>Estimating gas fee...</span>
                      <span className="gas-loading">⏳</span>
                    </div>
                  )}
                  {gasError && (
                    <div className="summary-row">
                      <span>Gas estimation:</span>
                      <span className="gas-fee" style={{ color: '#ffc107' }}>
                        Unable to estimate
                      </span>
                    </div>
                  )}
                  {totalCost && !gasError && (
                    <div className="summary-row total">
                      <span><strong>Total cost:</strong></span>
                      <span><strong>{parseFloat(totalCost).toFixed(6)} {networkLoading ? 'Loading...' : networkInfo.symbol}</strong></span>
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
                <span>
                  Sending on {networkLoading ? 'Loading network...' : networkInfo.name}
                  {chainId && !networkLoading && (
                    <span style={{ opacity: 0.7, fontSize: '12px', marginLeft: '8px' }}>
                      (Chain {chainId})
                    </span>
                  )}
                </span>
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
          <h2>Send {networkLoading ? 'Loading...' : networkInfo.symbol}</h2>
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