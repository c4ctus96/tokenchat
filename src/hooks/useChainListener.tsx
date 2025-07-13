import { useEffect, useState, useRef } from 'react';
import { useChainId } from 'wagmi';

/**
 * Custom hook that combines wagmi's useChainId with direct MetaMask chain change events
 * This ensures we always get the most up-to-date chain ID even when wagmi is slow to update
 */
export function useChainListener() {
  const wagmiChainId = useChainId();
  const [currentChainId, setCurrentChainId] = useState(wagmiChainId);
  const lastDirectChainIdRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);

  // Update when wagmi chain ID changes, but only if we haven't received a direct update recently
  useEffect(() => {
    const now = Date.now();
    const timeSinceLastDirectUpdate = now - lastUpdateTimeRef.current;
    
    // If we got a direct chain change within the last 2 seconds, ignore wagmi updates
    if (lastDirectChainIdRef.current !== null && timeSinceLastDirectUpdate < 2000) {
      console.log('useChainListener: Ignoring wagmi update', wagmiChainId, 'due to recent direct update to', lastDirectChainIdRef.current);
      return;
    }
    
    setCurrentChainId(wagmiChainId);
    console.log('useChainListener: wagmi chain ID updated to', wagmiChainId);
  }, [wagmiChainId]);

  // Listen directly to MetaMask chain changes for immediate updates (PRIORITY)
  useEffect(() => {
    const handleChainChanged = (chainIdHex: string) => {
      const newChainId = parseInt(chainIdHex, 16);
      console.log('useChainListener: Direct chain change detected:', newChainId, '(PRIORITY UPDATE)');
      
      // Store the direct chain ID and timestamp
      lastDirectChainIdRef.current = newChainId;
      lastUpdateTimeRef.current = Date.now();
      
      // Update immediately, this takes priority over wagmi
      setCurrentChainId(newChainId);
    };

    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on?.('chainChanged', handleChainChanged);
      
      return () => {
        window.ethereum.removeListener?.('chainChanged', handleChainChanged);
      };
    }
  }, []);

  // Also get the initial chain ID directly from MetaMask on mount
  useEffect(() => {
    const getInitialChainId = async () => {
      if (typeof window !== 'undefined' && window.ethereum) {
        try {
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          const chainIdNumber = parseInt(chainId, 16);
          console.log('useChainListener: Initial chain ID from MetaMask:', chainIdNumber);
          
          // Only update if it's different from wagmi's current value
          if (chainIdNumber !== wagmiChainId) {
            console.log('useChainListener: MetaMask chain ID differs from wagmi, using MetaMask value');
            lastDirectChainIdRef.current = chainIdNumber;
            lastUpdateTimeRef.current = Date.now();
            setCurrentChainId(chainIdNumber);
          }
        } catch (error) {
          console.warn('useChainListener: Failed to get initial chain ID:', error);
        }
      }
    };

    getInitialChainId();
  }, []); // Only run once on mount

  return currentChainId;
}