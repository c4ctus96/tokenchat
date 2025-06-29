import React from "react";
import { IoSend, IoCheckmark, IoClose, IoTime } from "react-icons/io5";
import { TransactionData } from "./SendTransactionModal";
import "../styles.css";

interface TransactionMessageProps {
  transaction: TransactionData;
  own: boolean;
  timeStamp: number;
}

const TransactionMessage: React.FC<TransactionMessageProps> = ({ 
  transaction, 
  own, 
  timeStamp 
}) => {
  // Get network name and symbol
  const getNetworkInfo = (chainId: number) => {
    switch (chainId) {
      case 1: return { 
        name: 'Ethereum', 
        symbol: 'ETH', 
        color: '#627EEA',
        explorerUrl: 'https://etherscan.io'
      };
      case 56: return { 
        name: 'BSC', 
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
        name: 'Arbitrum', 
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
        name: 'Avalanche', 
        symbol: 'AVAX', 
        color: '#E84142',
        explorerUrl: 'https://snowtrace.io'
      };
      case 250: return { 
        name: 'Fantom', 
        symbol: 'FTM', 
        color: '#1969FF',
        explorerUrl: 'https://ftmscan.com'
      };
      default: return { 
        name: 'Unknown', 
        symbol: 'ETH', 
        color: '#666',
        explorerUrl: null
      };
    }
  };

  const networkInfo = getNetworkInfo(transaction.chainId);

  // Status icon and text
  const getStatusInfo = () => {
    switch (transaction.status) {
      case 'pending':
        return {
          icon: <IoTime size={16} />,
          text: 'Pending',
          className: 'pending'
        };
      case 'confirmed':
        return {
          icon: <IoCheckmark size={16} />,
          text: 'Confirmed',
          className: 'confirmed'
        };
      case 'failed':
        return {
          icon: <IoClose size={16} />,
          text: 'Failed',
          className: 'failed'
        };
      default:
        return {
          icon: <IoTime size={16} />,
          text: 'Unknown',
          className: 'unknown'
        };
    }
  };

  const statusInfo = getStatusInfo();

  // Format amount for display
  const formatAmount = (amount: string) => {
    const num = parseFloat(amount);
    if (num < 0.0001) return num.toExponential(2);
    if (num < 1) return num.toFixed(6);
    if (num < 1000) return num.toFixed(4);
    return num.toFixed(2);
  };

  // Create block explorer URL
  const getExplorerUrl = () => {
    if (!networkInfo.explorerUrl) return null;
    return `${networkInfo.explorerUrl}/tx/${transaction.hash}`;
  };

  const explorerUrl = getExplorerUrl();

  return (
    <div className="messageBox">
      <div className={`message transaction-message ${own ? 'own' : ''}`}>
        {/* Transaction Header */}
        <div className="transaction-header">
          <div className="transaction-icon">
            <IoSend size={20} />
          </div>
          <div className="transaction-title">
            <span>
              {own ? `Sent to ${transaction.recipientName}` : `Received from ${transaction.senderName}`}
            </span>
          </div>
          <div className={`transaction-status ${statusInfo.className}`}>
            {statusInfo.icon}
            <span>{statusInfo.text}</span>
          </div>
        </div>

        {/* Transaction Amount */}
        <div className="transaction-amount">
          <span className="amount">
            {own ? '-' : '+'}{formatAmount(transaction.amount)}
          </span>
          <span className="currency">{networkInfo.symbol}</span>
        </div>

        {/* Comment */}
        {transaction.comment && transaction.comment.trim() && (
          <div className="transaction-comment">
            <div className="comment-label">Comment:</div>
            {transaction.comment}
          </div>
        )}

        {/* Network Badge */}
        <div className="transaction-network">
          <div 
            className="network-badge"
            style={{ backgroundColor: networkInfo.color }}
          >
            {networkInfo.name}
          </div>
        </div>

        {/* Transaction Details */}
        <div className="transaction-details">
          <div className="detail-row">
            <span className="label">Hash:</span>
            <span className="value hash">
              {transaction.hash.slice(0, 8)}...{transaction.hash.slice(-6)}
            </span>
          </div>
          
          {transaction.gasFee && parseFloat(transaction.gasFee) > 0 && (
            <div className="detail-row">
              <span className="label">Gas Fee:</span>
              <span className="value">
                {parseFloat(transaction.gasFee).toFixed(6)} {networkInfo.symbol}
              </span>
            </div>
          )}
          
          {explorerUrl && (
            <div className="transaction-explorer">
              <a 
                href={explorerUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="explorer-link"
              >
                View on Explorer →
              </a>
            </div>
          )}
        </div>

        {/* Timestamp */}
        <div className="message-timestamp">
          {new Date(timeStamp).toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default TransactionMessage;