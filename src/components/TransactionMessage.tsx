import React, { useState, useEffect } from "react";
import { IoSend, IoCheckmark, IoClose, IoTime } from "react-icons/io5";
import { TransactionData } from "./SendTransactionModal";
import { getNetworkInfo, NetworkInfo } from "../utils/networks";
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
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    name: 'Loading...',
    symbol: 'ETH',
    color: '#666666',
    explorerUrl: null,
    decimals: 18
  });
  const [networkLoading, setNetworkLoading] = useState(true);

  // Load network information when component mounts or transaction changes
  useEffect(() => {
    let isMounted = true;
    
    const loadNetworkInfo = async () => {
      console.log("TransactionMessage: Loading network info for chain", transaction.chainId);
      setNetworkLoading(true);
      
      try {
        const info = await getNetworkInfo(transaction.chainId);
        
        if (isMounted) {
          console.log("TransactionMessage: Network info loaded:", info);
          setNetworkInfo(info);
        }
      } catch (error) {
        console.error("TransactionMessage: Failed to load network info:", error);
        
        if (isMounted) {
          // Use fallback based on chainId
          let fallbackInfo: NetworkInfo = {
            name: `Chain ${transaction.chainId}`,
            symbol: 'ETH',
            color: '#666666',
            explorerUrl: null,
            decimals: 18
          };

          // Enhanced fallback for common chains
          switch (transaction.chainId) {
            case 1:
              fallbackInfo = {
                name: 'Ethereum',
                symbol: 'ETH',
                color: '#627EEA',
                explorerUrl: 'https://etherscan.io',
                decimals: 18
              };
              break;
            case 56:
              fallbackInfo = {
                name: 'BNB Smart Chain',
                symbol: 'BNB',
                color: '#F3BA2F',
                explorerUrl: 'https://bscscan.com',
                decimals: 18
              };
              break;
            case 137:
              fallbackInfo = {
                name: 'Polygon',
                symbol: 'MATIC',
                color: '#8247E5',
                explorerUrl: 'https://polygonscan.com',
                decimals: 18
              };
              break;
            case 43114:
              fallbackInfo = {
                name: 'Avalanche',
                symbol: 'AVAX',
                color: '#E84142',
                explorerUrl: 'https://snowscan.xyz',
                decimals: 18
              };
              break;
            case 42161:
              fallbackInfo = {
                name: 'Arbitrum One',
                symbol: 'ETH',
                color: '#28A0F0',
                explorerUrl: 'https://arbiscan.io',
                decimals: 18
              };
              break;
            case 10:
              fallbackInfo = {
                name: 'Optimism',
                symbol: 'ETH',
                color: '#FF0420',
                explorerUrl: 'https://optimistic.etherscan.io',
                decimals: 18
              };
              break;
            case 8453:
              fallbackInfo = {
                name: 'Base',
                symbol: 'ETH',
                color: '#0052FF',
                explorerUrl: 'https://basescan.org',
                decimals: 18
              };
              break;
            case 250:
              fallbackInfo = {
                name: 'Fantom',
                symbol: 'FTM',
                color: '#1969FF',
                explorerUrl: 'https://ftmscan.com',
                decimals: 18
              };
              break;
          }
          
          console.log("TransactionMessage: Using fallback network info:", fallbackInfo);
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
  }, [transaction.chainId]);

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
          <span className="currency">
            {networkLoading ? '...' : networkInfo.symbol}
          </span>
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
            {networkLoading ? 'Loading...' : networkInfo.name}
            {transaction.chainId && !networkLoading && (
              <span style={{ opacity: 0.7, fontSize: '10px', marginLeft: '4px' }}>
                ({transaction.chainId})
              </span>
            )}
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
                {parseFloat(transaction.gasFee).toFixed(6)} {networkLoading ? '...' : networkInfo.symbol}
              </span>
            </div>
          )}
          
          {explorerUrl && !networkLoading && (
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