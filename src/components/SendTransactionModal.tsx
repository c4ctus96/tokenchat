import React, { useState, useEffect } from "react";
import { SlClose } from "react-icons/sl";
import { IoSend } from "react-icons/io5";
import { useAccount, useBalance, useSendTransaction, useWaitForTransactionReceipt, useChainId } from "wagmi";
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
  
  // Transaction form state
  const [amount, setAmount] = useState("");
  const [recipientAddress, setRecipientAddress] = useState(recipientUser?.wallet || "");
  const [message, setMessage] = useState("");
  const [step, setStep] = useState<'form' | 'confirming' | 'pending' | 'success' | 'error'>('form');
  const [error, setError] = useState<string | null>(null);

  // Get user's balance
  const { data: balance, isLoading: balanceLoading } = useBalance({
    address: address,
    chainId: chainId,
  });

  // Transaction hooks
  const { 
    sendTransaction, 
    data: hash, 
    error: sendError, 
    isPending: isSending 
  } = useSendTransaction();

  const { 
    isLoading: isConfirming, 
    isSuccess: isConfirmed,
    isError: isConfirmError 
  } = useWaitForTransactionReceipt({
    hash,
  });

  // Handle transaction lifecycle
  useEffect(() => {
    if (isSending) {
      setStep('confirming');
      setError(null);
    }
  }, [isSending]);

  useEffect(() => {
    if (hash && !isConfirming && !isConfirmed) {
      setStep('pending');
    }
  }, [hash, isConfirming, isConfirmed]);

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
      setError(sendError?.message || 'Transaction failed');
    }
  }, [sendError, isConfirmError]);

  // Get network name
  const getNetworkName = (chainId: number) => {
    switch (chainId) {
      case 1: return 'Ethereum';
      case 137: return 'Polygon';
      case 42161: return 'Arbitrum';
      case 10: return 'Optimism';
      case 8453: return 'Base';
      default: return 'Unknown Network';
    }
  };

  // Validation
  const isValidAmount = () => {
    try {
      const parsedAmount = parseFloat(amount);
      return parsedAmount > 0 && parsedAmount <= parseFloat(balance?.formatted || '0');
    } catch {
      return false;
    }
  };

  const isValidAddress = () => {
    return isAddress(recipientAddress);
  };

  const canSubmit = () => {
    return isValidAmount() && isValidAddress() && !isSending;
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

              {/* Amount Input */}
              <div className="form-group">
                <label>Amount ({balance?.symbol || 'ETH'})</label>
                <div className="amount-input-group">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.0"
                    step="0.0001"
                    min="0"
                    max={balance?.formatted || '0'}
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
                  </div>
                </div>
                <div className="balance-info">
                  {balanceLoading ? (
                    <span>Loading balance...</span>
                  ) : (
                    <span>
                      Balance: {balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : '0'}
                    </span>
                  )}
                </div>
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
                <span>Sending on {getNetworkName(chainId)}</span>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button 
                className="send-btn"
                onClick={handleSend}
                disabled={!canSubmit()}
              >
                <IoSend size={18} />
                Send {amount || '0'} {balance?.symbol || 'ETH'}
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
          </div>
        );

      case 'pending':
        return (
          <div className="transaction-status">
            <div className="status-icon pending">
              <div className="spinner" />
            </div>
            <h3>Transaction Pending</h3>
            <p>Your transaction is being processed on the blockchain.</p>
            {hash && (
              <div className="transaction-hash">
                <p>Transaction Hash:</p>
                <code>{hash.slice(0, 10)}...{hash.slice(-8)}</code>
              </div>
            )}
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
              Successfully sent {amount} {balance?.symbol || 'ETH'} to {recipientUser?.name || 'recipient'}
            </p>
            {hash && (
              <div className="transaction-hash">
                <p>Transaction Hash:</p>
                <code>{hash.slice(0, 10)}...{hash.slice(-8)}</code>
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
            <p className="error-message">{error}</p>
            <div className="modal-footer">
              <button className="cancel-btn" onClick={onClose}>
                Close
              </button>
              <button className="retry-btn" onClick={() => setStep('form')}>
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
          <h2>Send Crypto</h2>
          {step === 'form' && (
            <button 
              className="closeButton" 
              onClick={onClose}
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