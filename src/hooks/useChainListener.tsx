import { useEffect, useState, useRef } from 'react';
import { useChainId } from 'wagmi';

/**
 * Enhanced hook that combines wagmi's useChainId with direct MetaMask chain change events
 * This ensures we always get the most up-to-date chain ID even when wagmi is slow to update
 * and provides better debugging for network switch issues
 */
export function useChainListener() {
  const wagmiChainId = useChainId();
  const [currentChainId, setCurrentChainId] = useState(wagmiChainId);
  const lastDirectChainIdRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);
  const lastWagmiChainIdRef = useRef<number | null>(null);

  // Enhanced logging for debugging
  const logChainChange = (source: string, chainId: number, extra?: any) => {
    console.log(`useChainListener [${source}]: Chain ID ${chainId}`, {
      timestamp: new Date().toISOString(),
      source,
      chainId,
      extra
    });
  };

  // Update when wagmi chain ID changes, but with improved logic
  useEffect(() => {
    const now = Date.now();
    const timeSinceLastDirectUpdate = now - lastUpdateTimeRef.current;
    
    // Check if this is actually a new chain ID from wagmi
    if (lastWagmiChainIdRef.current === wagmiChainId) {
      // No actual change in wagmi, skip
      return;
    }
    
    lastWagmiChainIdRef.current = wagmiChainId;
    
    // If we got a direct chain change within the last 3 seconds, ignore wagmi updates
    if (lastDirectChainIdRef.current !== null && 
        timeSinceLastDirectUpdate < 3000 && 
        lastDirectChainIdRef.current !== wagmiChainId) {
      logChainChange('wagmi-ignored', wagmiChainId, {
        reason: 'recent_direct_update',
        directChainId: lastDirectChainIdRef.current,
        timeSinceLastDirect: timeSinceLastDirectUpdate
      });
      return;
    }
    
    setCurrentChainId(wagmiChainId);
    logChainChange('wagmi', wagmiChainId, {
      timeSinceLastDirect: timeSinceLastDirectUpdate,
      wasIgnored: false
    });
  }, [wagmiChainId]);

  // Listen directly to MetaMask chain changes for immediate updates (PRIORITY)
  useEffect(() => {
    const handleChainChanged = (chainIdHex: string) => {
      try {
        const newChainId = parseInt(chainIdHex, 16);
        
        // Validate the chain ID
        if (isNaN(newChainId) || newChainId <= 0) {
          console.warn('useChainListener: Invalid chain ID received:', chainIdHex);
          return;
        }
        
        logChainChange('direct', newChainId, {
          hexValue: chainIdHex,
          priority: true
        });
        
        // Store the direct chain ID and timestamp
        lastDirectChainIdRef.current = newChainId;
        lastUpdateTimeRef.current = Date.now();
        
        // Update immediately, this takes priority over wagmi
        setCurrentChainId(newChainId);
        
        // Clear any cached network data
        if (typeof window !== 'undefined' && window.localStorage) {
          try {
            localStorage.setItem('lastNetworkSwitch', JSON.stringify({
              chainId: newChainId,
              timestamp: Date.now(),
              source: 'direct'
            }));
          } catch (error) {
            console.warn('Failed to store network switch info:', error);
          }
        }
        
      } catch (error) {
        console.error('useChainListener: Error processing chain change:', error, { chainIdHex });
      }
    };

    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on?.('chainChanged', handleChainChanged);
      
      return () => {
        window.ethereum.removeListener?.('chainChanged', handleChainChanged);
      };
    }
  }, []);

  // Enhanced initial chain ID detection
  useEffect(() => {
    const getInitialChainId = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          const chainIdNumber = parseInt(chainId, 16);
          
          // Validate the chain ID
          if (isNaN(chainIdNumber) || chainIdNumber <= 0) {
            console.warn('useChainListener: Invalid initial chain ID:', chainId);
            return;
          }
          
          logChainChange('initial', chainIdNumber, {
            hexValue: chainId,
            wagmiChainId: wagmiChainId
          });
          
          // Only update if it's different from wagmi's current value
          if (chainIdNumber !== wagmiChainId) {
            logChainChange('initial-override', chainIdNumber, {
              wagmiValue: wagmiChainId,
              reason: 'different_from_wagmi'
            });
            lastDirectChainIdRef.current = chainIdNumber;
            lastUpdateTimeRef.current = Date.now();
            setCurrentChainId(chainIdNumber);
          }
        } catch (error) {
          console.warn('useChainListener: Failed to get initial chain ID:', error);
        }
      }
    };

    // Only run once on mount, with a small delay to ensure ethereum object is ready
    const timer = setTimeout(getInitialChainId, 100);
    
    return () => clearTimeout(timer);
  }, []); // Only run once on mount

  // Enhanced network change validation
  useEffect(() => {
    const validateChainId = async () => {
      if (typeof window !== 'undefined' && window.ethereum && currentChainId) {
        try {
          const actualChainId = await window.ethereum.request({ method: 'eth_chainId' });
          const actualChainIdNumber = parseInt(actualChainId, 16);
          
          if (actualChainIdNumber !== currentChainId) {
            console.warn('useChainListener: Chain ID mismatch detected', {
              current: currentChainId,
              actual: actualChainIdNumber,
              actualHex: actualChainId
            });
            
            // Update to the actual chain ID
            lastDirectChainIdRef.current = actualChainIdNumber;
            lastUpdateTimeRef.current = Date.now();
            setCurrentChainId(actualChainIdNumber);
            
            logChainChange('validation-correction', actualChainIdNumber, {
              previousValue: currentChainId,
              reason: 'mismatch_correction'
            });
          }
        } catch (error) {
          console.warn('useChainListener: Chain validation failed:', error);
        }
      }
    };

    // Validate every 30 seconds, but only if we have a current chain ID
    if (currentChainId) {
      const interval = setInterval(validateChainId, 30000);
      return () => clearInterval(interval);
    }
  }, [currentChainId]);

  // Debug information (remove in production)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('useChainListener state:', {
        currentChainId,
        wagmiChainId,
        lastDirect: lastDirectChainIdRef.current,
        lastUpdate: new Date(lastUpdateTimeRef.current).toISOString()
      });
    }
  }, [currentChainId, wagmiChainId]);

  return currentChainId;
}