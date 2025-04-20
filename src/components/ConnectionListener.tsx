import React, { useEffect, useRef } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

// Define a basic type for WalletConnect provider
interface WalletConnectProvider {
  session?: unknown;
}

// This component doesn't render anything visible
// It just listens for connection events and handles them
const ConnectionListener: React.FC = () => {
  const { address, isConnected, status, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const prevConnectedRef = useRef(isConnected);
  const checkIntervalRef = useRef<number | null>(null);

  // Main connection status handler
  useEffect(() => {
    console.log("Connection status changed:", status);
    console.log("Is connected:", isConnected);
    console.log("Current connector:", connector?.id);
    
    // Detect disconnection
    if (prevConnectedRef.current && !isConnected) {
      console.log("Detected disconnection, updating app state");
      // Force clear localStorage to ensure proper disconnect handling
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('lastConnectedAddress');
    }
    
    // Update localStorage based on connection state
    if (isConnected && address) {
      localStorage.setItem('walletConnected', 'true');
      localStorage.setItem('lastConnectedAddress', address);
      localStorage.setItem('connectorId', connector?.id || '');
      console.log("Saved connection state to localStorage");
    } else if (!isConnected) {
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('lastConnectedAddress');
      localStorage.removeItem('connectorId');
      console.log("Removed connection state from localStorage");
    }
    
    prevConnectedRef.current = isConnected;
  }, [isConnected, address, status, connector]);

  // Actively check connection status periodically
  useEffect(() => {
    // Function to verify wallet connection is still valid
    const checkConnectionStatus = async () => {
      try {
        // If app thinks we're connected but we may not actually be
        if (isConnected) {
          const walletConnected = localStorage.getItem('walletConnected') === 'true';
          
          // Check for mobile wallet case - if we can't verify the connection
          if (connector?.id === 'walletConnect') {
            // Try to check the actual WalletConnect connection status
            const provider = await connector.getProvider() as WalletConnectProvider;
            
            // If we should be connected but the provider shows disconnection,
            // force disconnection in the app
            if (!provider.session && isConnected) {
              console.log("WalletConnect session lost, disconnecting in app");
              disconnect();
            }
          }
        }
      } catch (error) {
        console.error("Error checking connection status:", error);
        
        // If we get an error trying to check connection, assume disconnected
        if (isConnected) {
          console.log("Error verifying connection, force disconnecting");
          disconnect();
        }
      }
    };

    // Start periodic connection check
    if (!checkIntervalRef.current) {
      checkConnectionStatus(); // Check immediately
      checkIntervalRef.current = window.setInterval(checkConnectionStatus, 5000);
    }
    
    return () => {
      if (checkIntervalRef.current) {
        window.clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
    };
  }, [isConnected, disconnect, connector]);

  // Enhanced visibility change handler
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        console.log("Page is now visible, verifying wallet connection");
        
        // If we think we're connected, verify it immediately
        if (isConnected) {
          const checkConnection = async () => {
            try {
              // For WalletConnect, verify the session is still valid
              if (connector?.id === 'walletConnect') {
                const provider = await connector.getProvider() as WalletConnectProvider;
                if (!provider.session) {
                  console.log("WalletConnect session lost while page was inactive");
                  disconnect();
                }
              }
            } catch (error) {
              console.error("Error checking connection on visibility change:", error);
              disconnect();
            }
          };
          
          checkConnection();
        }
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isConnected, disconnect, connector]);

  return null; // This component doesn't render anything
};

export default ConnectionListener; 