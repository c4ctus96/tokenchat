import React, { useEffect, useRef, useCallback } from 'react';
import { useAccount, useDisconnect } from 'wagmi';

// Define a basic type for WalletConnect provider
interface WalletConnectProvider {
  session?: unknown;
  connected?: boolean;
  disconnect?: () => Promise<void>;
}

// This component doesn't render anything visible
// It just listens for connection events and handles them
const ConnectionListener: React.FC = () => {
  const { address, isConnected, status, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const prevConnectedRef = useRef(isConnected);
  const checkIntervalRef = useRef<number | null>(null);
  const isManualDisconnectRef = useRef(false);
  const lastValidationTimeRef = useRef(0);

  // Less aggressive connection validation - only check for obvious failures
  const validateConnection = useCallback(async (): Promise<boolean> => {
    // Throttle validation calls to prevent excessive checks
    const now = Date.now();
    if (now - lastValidationTimeRef.current < 5000) { // 5 second throttle (increased)
      return isConnected;
    }
    lastValidationTimeRef.current = now;

    try {
      if (!isConnected || !connector) {
        return false;
      }

      // Check if we're in the middle of manual disconnecting
      if (isManualDisconnectRef.current) {
        return false;
      }

      // Only validate for specific, clear failure cases
      if (connector.id === 'walletConnect') {
        try {
          const provider = await connector.getProvider();
          const wcProvider = provider as WalletConnectProvider;
          
          // Only disconnect if session is explicitly null/undefined and connected is false
          if (wcProvider.session === null && wcProvider.connected === false) {
            console.log("WalletConnect session explicitly ended");
            return false;
          }
        } catch (error) {
          // Don't force disconnect on provider errors - might be temporary
          console.warn("WalletConnect provider check error (not disconnecting):", error);
          return true; // Assume connection is still valid
        }
      }

      // For injected providers, only check if explicitly disconnected
      if (connector.id === 'injected' && typeof window !== 'undefined' && window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (!accounts || accounts.length === 0) {
            console.log("No accounts available from injected provider");
            return false;
          }
        } catch (error) {
          // Don't force disconnect on errors - might be temporary network issues
          console.warn("Injected provider check error (not disconnecting):", error);
          return true; // Assume connection is still valid
        }
      }

      return true;
    } catch (error) {
      console.warn("Error validating connection (assuming valid):", error);
      return true; // Default to assuming connection is valid
    }
  }, [isConnected, connector]);

  // Force disconnect only in clear failure cases
  const forceDisconnect = useCallback(async () => {
    if (isManualDisconnectRef.current) {
      return; // Already disconnecting
    }

    // Set flag to prevent validation during disconnect
    isManualDisconnectRef.current = true;
    
    try {
      console.log("Forcing disconnect due to clear connection failure");
      
      // Clear localStorage
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('lastConnectedAddress');
      localStorage.removeItem('connectorId');
      
      // Disconnect via wagmi
      disconnect();
      
    } catch (error) {
      console.error("Error during force disconnect:", error);
    } finally {
      setTimeout(() => {
        isManualDisconnectRef.current = false;
      }, 3000);
    }
  }, [disconnect]);

  // Main connection status handler
  useEffect(() => {
    console.log("Connection status changed:", status);
    console.log("Is connected:", isConnected);
    console.log("Current connector:", connector?.id);
    
    // Detect disconnection
    if (prevConnectedRef.current && !isConnected && !isManualDisconnectRef.current) {
      console.log("Detected disconnection, cleaning up state");
      
      // Clear localStorage
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('lastConnectedAddress');
      localStorage.removeItem('connectorId');
    }
    
    // Update localStorage based on connection state
    if (isConnected && address && !isManualDisconnectRef.current) {
      localStorage.setItem('walletConnected', 'true');
      localStorage.setItem('lastConnectedAddress', address);
      localStorage.setItem('connectorId', connector?.id || '');
      console.log("Saved connection state to localStorage");
    } else if (!isConnected && !isManualDisconnectRef.current) {
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('lastConnectedAddress');
      localStorage.removeItem('connectorId');
      console.log("Removed connection state from localStorage");
    }
    
    prevConnectedRef.current = isConnected;
  }, [isConnected, address, status, connector]);

  // Much less aggressive periodic validation - only for obvious failures
  useEffect(() => {
    const startPeriodicCheck = () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }

      const checkConnection = async () => {
        try {
          if (isConnected && !isManualDisconnectRef.current) {
            const isValid = await validateConnection();
            
            // Only force disconnect for clear, obvious failures
            if (!isValid) {
              console.log("Clear connection failure detected, forcing disconnect");
              await forceDisconnect();
            }
          }
        } catch (error) {
          console.warn("Error in periodic connection check (not disconnecting):", error);
          // Don't force disconnect on check errors
        }
      };

      // Much longer interval - only check every 30 seconds
      checkIntervalRef.current = window.setInterval(checkConnection, 30000);
    };

    if (isConnected) {
      startPeriodicCheck();
    } else if (checkIntervalRef.current) {
      clearInterval(checkIntervalRef.current);
      checkIntervalRef.current = null;
    }
    
    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = null;
      }
    };
  }, [isConnected, validateConnection, forceDisconnect]);

  // Enhanced visibility change handler - but less aggressive
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible') {
        console.log("Page is now visible, gentle connection check");
        
        // Wait longer for the page to fully load
        setTimeout(async () => {
          if (isConnected && !isManualDisconnectRef.current) {
            try {
              const isValid = await validateConnection();
              
              // Only disconnect for clear failures
              if (!isValid) {
                console.log("Clear connection failure after page became visible");
                await forceDisconnect();
              }
            } catch (error) {
              console.warn("Error checking connection on visibility change (ignoring):", error);
              // Don't force disconnect on errors
            }
          }
        }, 2000); // Longer delay
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isConnected, validateConnection, forceDisconnect]);

  // Network change detection with manual disconnect tracking
  useEffect(() => {
    const handleNetworkChange = (chainId: string) => {
      console.log("Network change detected to chain:", chainId);
      // Reset validation timer to trigger immediate check, but don't force disconnect
      lastValidationTimeRef.current = 0;
    };

    const handleAccountsChanged = (accounts: string[]) => {
      console.log("Accounts changed:", accounts);
      if (accounts.length === 0 && isConnected && !isManualDisconnectRef.current) {
        console.log("All accounts removed by user, forcing disconnect");
        forceDisconnect();
      }
    };

    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on?.('chainChanged', handleNetworkChange);
      window.ethereum.on?.('accountsChanged', handleAccountsChanged);
      
      return () => {
        window.ethereum.removeListener?.('chainChanged', handleNetworkChange);
        window.ethereum.removeListener?.('accountsChanged', handleAccountsChanged);
      };
    }
  }, [isConnected, forceDisconnect]);

  // Track manual disconnects from WalletMenu
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'manualDisconnect' && e.newValue === 'true') {
        console.log("Manual disconnect detected");
        isManualDisconnectRef.current = true;
        
        // Reset flag after a delay
        setTimeout(() => {
          isManualDisconnectRef.current = false;
        }, 5000);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ConnectionListener;