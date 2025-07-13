import React, { useState, useEffect, useCallback } from "react";
import ConnectButton from "./ConnectButton";
import "../styles.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { useNavigate } from "react-router-dom";
import ProceedButton from "./ProceedButton";
import WalletMenu from "./WalletMenu";
import { useResponsive } from "./useResponsive";

function HomePage() {
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [connected, setConnected] = useState(isConnected);
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  // Enhanced reconnection logic with better persistence handling
  const attemptReconnection = useCallback(async () => {
    const wasConnected = localStorage.getItem('walletConnected') === 'true';
    const lastConnectedAddress = localStorage.getItem('lastConnectedAddress');
    
    // Only attempt reconnection if we have clear evidence of a previous connection
    if (!wasConnected || !lastConnectedAddress || isConnected) {
      console.log("No previous connection or already connected, skipping reconnection");
      return;
    }

    console.log("Attempting to reconnect wallet automatically...");
    console.log("Last connected address:", lastConnectedAddress);
    
    try {
      // Find the right connector
      const savedConnectorId = localStorage.getItem('connectorId');
      console.log("Last used connector:", savedConnectorId);
      
      if (savedConnectorId) {
        const matchingConnector = connectors.find(c => c.id === savedConnectorId);
        if (matchingConnector) {
          console.log("Reconnecting with saved connector:", savedConnectorId);
          
          // Set a reasonable timeout for the connection attempt
          const connectionPromise = connect({ connector: matchingConnector });
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Connection timeout')), 15000)
          );
          
          try {
            await Promise.race([connectionPromise, timeoutPromise]);
            console.log("Reconnection successful");
          } catch (error) {
            console.error("Failed to reconnect with saved connector:", error);
            
            // Only clear the saved connector if it's a permanent failure
            if (error instanceof Error && error.message.includes('timeout')) {
              console.log("Connection timed out, keeping connector for retry");
            } else {
              localStorage.removeItem('connectorId');
              localStorage.removeItem('walletConnected');
              localStorage.removeItem('lastConnectedAddress');
            }
          }
        } else {
          console.log("Saved connector not found in available connectors");
          localStorage.removeItem('connectorId');
        }
      } else {
        // Only try injected connector if there are no saved preferences
        const injectedConnector = connectors.find(c => c.id === 'injected');
        if (injectedConnector && typeof window !== 'undefined' && window.ethereum) {
          console.log("No saved connector, trying injected...");
          try {
            const connectionPromise = connect({ connector: injectedConnector });
            const timeoutPromise = new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Connection timeout')), 10000)
            );
            
            await Promise.race([connectionPromise, timeoutPromise]);
            console.log("Injected connector reconnection successful");
          } catch (error) {
            console.error("Failed to connect with injected connector:", error);
            // Don't clear localStorage for injected connector failures
          }
        }
      }
    } catch (error) {
      console.error("Error during reconnection attempt:", error);
      // Only clear on serious errors, not connection failures
      if (error instanceof Error && error.message.includes('network')) {
        console.log("Network error during reconnection, will retry later");
      }
    }
  }, [connect, connectors, isConnected]);

  // Try to automatically reconnect on page load with delay
  useEffect(() => {
    // Longer delay to ensure connectors are ready and avoid conflicts
    const reconnectTimer = setTimeout(() => {
      attemptReconnection();
    }, 1500);

    return () => clearTimeout(reconnectTimer);
  }, [attemptReconnection]);

  // Listen for connection changes with improved persistence handling
  useEffect(() => {
    console.log("Connection state changed:", isConnected ? "connected" : "disconnected");
    console.log("Current connector:", connector?.id);
    console.log("Address:", address);
    
    // Update local state
    setConnected(isConnected);
    
    // Handle new connections (preserve persistence)
    if (isConnected && !connected && address) {
      console.log("Wallet newly connected:", address);
      
      // Save connection state for persistence
      localStorage.setItem('walletConnected', 'true');
      localStorage.setItem('lastConnectedAddress', address);
      localStorage.setItem('connectorId', connector?.id || '');
      
      console.log("Saved connection state for persistence");
    }
    
    // Handle disconnections (but preserve manual disconnect intent)
    if (!isConnected && connected) {
      console.log("Wallet disconnected");
      
      // Check if this was a manual disconnect
      const manualDisconnect = localStorage.getItem('manualDisconnect') === 'true';
      
      if (manualDisconnect) {
        // Clear all connection data for manual disconnects
        localStorage.removeItem('walletConnected');
        localStorage.removeItem('lastConnectedAddress');
        localStorage.removeItem('connectorId');
        localStorage.removeItem('manualDisconnect');
        console.log("Manual disconnect - cleared all connection data");
      } else {
        // For automatic disconnects, keep some data for potential reconnection
        console.log("Automatic disconnect - keeping connection data for potential reconnection");
        // Don't clear walletConnected to allow reconnection attempts
      }
    }
  }, [isConnected, address, connected, connector]);

  // Enhanced focus handling with better persistence
  useEffect(() => {
    const handleFocus = async () => {
      console.log("Page gained focus, checking connection state");
      
      // Check if the connection state is consistent
      if (connected && !isConnected) {
        console.log("Connection lost while page was inactive, updating UI");
        setConnected(false);
        
        // Don't immediately clear storage - might be temporary
        const shouldReconnect = localStorage.getItem('walletConnected') === 'true';
        if (shouldReconnect) {
          console.log("Attempting reconnection after focus");
          setTimeout(() => {
            attemptReconnection();
          }, 1000);
        }
      }
      
      // If we should be connected but aren't, try to reconnect
      const shouldBeConnected = localStorage.getItem('walletConnected') === 'true';
      const timeSinceLastTry = Date.now() - (parseInt(localStorage.getItem('lastReconnectAttempt') || '0'));
      
      if (shouldBeConnected && !isConnected && timeSinceLastTry > 30000) { // 30 second cooldown
        console.log("Should be connected but aren't, attempting reconnection");
        localStorage.setItem('lastReconnectAttempt', Date.now().toString());
        await attemptReconnection();
      }
    };

    window.addEventListener('focus', handleFocus);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
    };
  }, [connected, isConnected, attemptReconnection]);

  // Manual disconnect handler with clear intent marking
  const handleDisconnect = useCallback(async () => {
    try {
      console.log("Manual disconnect initiated by user");
      
      // Mark this as a manual disconnect
      localStorage.setItem('manualDisconnect', 'true');
      
      // Update UI state immediately
      setConnected(false);
      
      // Clear all persistence data immediately for manual disconnects
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('lastConnectedAddress');
      localStorage.removeItem('connectorId');
      localStorage.removeItem('lastReconnectAttempt');
      
      console.log("Manual disconnect - cleared all persistence data");
      
      // Disconnect via wagmi
      disconnect();
      
      // Clear the manual disconnect flag after a delay
      setTimeout(() => {
        localStorage.removeItem('manualDisconnect');
      }, 2000);
      
    } catch (error) {
      console.error("Error during manual disconnect:", error);
      
      // Force clear state even if there's an error
      setConnected(false);
      
      // Clear all storage as fallback
      try {
        const keysToRemove = Object.keys(localStorage).filter(key => 
          key.includes('wallet') || 
          key.includes('w3m') || 
          key.includes('wagmi') ||
          key.includes('connector') ||
          key.includes('Reconnect')
        );
        
        keysToRemove.forEach(key => localStorage.removeItem(key));
        console.log("Cleared all wallet-related storage");
      } catch (clearError) {
        console.error("Failed to clear storage:", clearError);
      }
    }
  }, [disconnect]);

  // Handle connection errors without being too aggressive
  useEffect(() => {
    const handleConnectorError = (data: { error: Error } & { uid: string }) => {
      console.error("Connector error:", data.error);
      
      // Only clear state for serious errors, not temporary ones
      if (data.error.message.includes('User rejected') || 
          data.error.message.includes('User denied') ||
          data.error.message.includes('user cancelled')) {
        console.log("User rejected connection, clearing state");
        localStorage.removeItem('walletConnected');
        localStorage.removeItem('connectorId');
        setConnected(false);
      } else {
        console.log("Temporary connector error, not clearing state");
      }
    };

    // Listen for connector errors if available
    if (connector?.emitter) {
      connector.emitter.on('error', handleConnectorError);
      
      return () => {
        connector.emitter?.off('error', handleConnectorError);
      };
    }
  }, [connector]);

  // Periodic reconnection attempt for persistent connections
  useEffect(() => {
    if (!isConnected) {
      const shouldReconnect = localStorage.getItem('walletConnected') === 'true';
      
      if (shouldReconnect) {
        const interval = setInterval(() => {
          const lastAttempt = parseInt(localStorage.getItem('lastReconnectAttempt') || '0');
          const timeSinceLastTry = Date.now() - lastAttempt;
          
          // Try reconnecting every 2 minutes if we should be connected
          if (timeSinceLastTry > 120000) {
            console.log("Periodic reconnection attempt");
            localStorage.setItem('lastReconnectAttempt', Date.now().toString());
            attemptReconnection();
          }
        }, 60000); // Check every minute
        
        return () => clearInterval(interval);
      }
    }
  }, [isConnected, attemptReconnection]);

  return (
    <div className={`homepage ${isMobile ? 'mobile-homepage' : 'desktop-homepage'}`}>
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