import React, { useState, useEffect } from "react";
import ConnectButton from "./ConnectButton";
import "../styles.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useNavigate } from "react-router-dom";
import ProceedButton from "./ProceedButton";
import WalletMenu from "./WalletMenu";

// Define type for custom web3modal elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-account-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        balance?: string;
      };
    }
  }
}

function HomePage() {
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [connected, setConnected] = useState(isConnected);
  const navigate = useNavigate();

  // Try to automatically reconnect on page load
  useEffect(() => {
    const wasConnected = localStorage.getItem('walletConnected') === 'true';
    if (wasConnected && !isConnected) {
      console.log("Attempting to reconnect wallet automatically...");
      
      // Find the right connector
      const savedConnectorId = localStorage.getItem('connectorId');
      console.log("Last used connector:", savedConnectorId);
      
      if (savedConnectorId) {
        const matchingConnector = connectors.find(c => c.id === savedConnectorId);
        if (matchingConnector) {
          console.log("Reconnecting with saved connector:", savedConnectorId);
          connect({ connector: matchingConnector });
        }
      } else {
        // Fallback to injected
        const injectedConnector = connectors.find(c => c.id === 'injected');
        if (injectedConnector) {
          console.log("No saved connector, trying injected...");
          connect({ connector: injectedConnector });
        }
      }
    }
  }, [connect, connectors, isConnected]);

  // Listen for connection changes
  useEffect(() => {
    console.log("Connection state changed:", isConnected ? "connected" : "disconnected");
    console.log("Current connector:", connector?.id);
    setConnected(isConnected);
    
    // If connection is established and was previously not connected
    if (isConnected && !connected) {
      console.log("Wallet newly connected:", address);
    }
    
    // If disconnected and was previously connected
    if (!isConnected && connected) {
      console.log("Wallet disconnected");
    }
  }, [isConnected, address, connected, connector]);

  // Handle wallet connection events more robustly
  useEffect(() => {
    // This helps handle disconnection events - we check state on focus
    const handleFocus = () => {
      // Force check connection status when tab gets focus
      if (connected && !isConnected) {
        console.log("Connection lost while page was inactive, updating UI");
        setConnected(false);
      }
    };

    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [connected, isConnected]);

  const handleDisconnect = () => {
    try {
      // First update our app state to show disconnected UI immediately
      setConnected(false);
      
      // Clear localStorage on manual disconnect
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('lastConnectedAddress');
      localStorage.removeItem('connectorId');
      
      console.log("Manual disconnect triggered, state cleared");
      
      // Then try to disconnect via wagmi
      disconnect();
    } catch (error) {
      console.error("Error during disconnect:", error);
    }
  };

  return (
    <div className="homepage">
      <div className="title">
        <h1>Chat 3.0 is here.</h1>
        <h2>Your personal web3 companion.</h2>
      </div>
      <div>
        <div className="login">
          <h3>
            {connected 
              ? `Connected ${connector?.id ? `(${connector.id})` : ""}` 
              : "Connect your wallet"}
          </h3>
          <WalletMenu />
          {connected && <ProceedButton />}
        </div>
      </div>
    </div>
  );
}

export default HomePage; 