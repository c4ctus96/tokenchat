import React, { useEffect } from 'react';
import { useAccount, useBalance, useChainId } from 'wagmi';
import { useChainListener } from './useChainListener';
import { getNetworkInfo, getNetworkCacheStatus, clearNetworkCache } from '../utils/networks';

/**
 * Hook for debugging network and balance issues
 */
export function useNetworkDebugger() {
  const { address, isConnected, connector } = useAccount();
  const wagmiChainId = useChainId();
  const enhancedChainId = useChainListener();
  
  const { data: balance, error: balanceError, isLoading: balanceLoading } = useBalance({
    address,
    chainId: enhancedChainId,
    query: {
      enabled: !!address && !!enhancedChainId,
      retry: false, // Don't retry for debugging
    }
  });

  const debugInfo = {
    // Connection status
    connection: {
      isConnected,
      address,
      connector: connector?.id
    },
    
    // Chain information
    chains: {
      wagmi: wagmiChainId,
      enhanced: enhancedChainId,
      mismatch: wagmiChainId !== enhancedChainId
    },
    
    // Balance information
    balance: {
      data: balance,
      error: balanceError?.message,
      loading: balanceLoading,
      hasError: !!balanceError
    },
    
    // Cache status
    cache: getNetworkCacheStatus(),
    
    // Browser ethereum object
    ethereum: typeof window !== 'undefined' && window.ethereum ? {
      isMetaMask: window.ethereum.isMetaMask,
      chainId: window.ethereum.chainId,
      networkVersion: window.ethereum.networkVersion,
      selectedAddress: window.ethereum.selectedAddress
    } : null
  };

  return debugInfo;
}

/**
 * Function to test network connectivity and balance loading
 */
export async function runNetworkDiagnostics(chainId: number, address?: string) {
  console.log(`🔧 Running network diagnostics for chain ${chainId}${address ? ` and address ${address}` : ''}`);
  
  const results = {
    chainId,
    address,
    timestamp: new Date().toISOString(),
    tests: {} as Record<string, any>
  };

  // Test 1: Network info retrieval
  try {
    const networkInfo = await getNetworkInfo(chainId);
    results.tests.networkInfo = {
      success: true,
      data: networkInfo
    };
    console.log(`✅ Network info: ${networkInfo.name} (${networkInfo.symbol})`);
  } catch (error) {
    results.tests.networkInfo = {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
    console.log(`❌ Network info failed:`, error);
  }

  // Test 2: Direct RPC connectivity (if RPC URL available)
  const networkInfo = results.tests.networkInfo?.data;
  if (networkInfo?.rpcUrl) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const response = await fetch(networkInfo.rpcUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'eth_chainId',
          params: [],
          id: 1
        }),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      const rpcResult = await response.json();
      const rpcChainId = parseInt(rpcResult.result, 16);
      
      results.tests.rpcConnectivity = {
        success: true,
        rpcChainId,
        matches: rpcChainId === chainId,
        responseTime: Date.now()
      };
      console.log(`✅ RPC connectivity: Chain ${rpcChainId} (${rpcChainId === chainId ? 'matches' : 'mismatch'})`);
    } catch (error) {
      results.tests.rpcConnectivity = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      console.log(`❌ RPC connectivity failed:`, error);
    }
  }

  // Test 3: MetaMask chain detection
  if (typeof window !== 'undefined' && window.ethereum) {
    try {
      const metamaskChainId = await window.ethereum.request({ method: 'eth_chainId' });
      const parsedChainId = parseInt(metamaskChainId, 16);
      
      results.tests.metamaskChain = {
        success: true,
        metamaskChainId: parsedChainId,
        matches: parsedChainId === chainId
      };
      console.log(`✅ MetaMask chain: ${parsedChainId} (${parsedChainId === chainId ? 'matches' : 'mismatch'})`);
    } catch (error) {
      results.tests.metamaskChain = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      console.log(`❌ MetaMask chain detection failed:`, error);
    }
  }

  // Test 4: Balance loading simulation (if address provided)
  if (address) {
    try {
      // This simulates what wagmi does internally
      const balanceRpcCall = {
        jsonrpc: '2.0',
        method: 'eth_getBalance',
        params: [address, 'latest'],
        id: 2
      };

      if (networkInfo?.rpcUrl) {
        const response = await fetch(networkInfo.rpcUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(balanceRpcCall),
          signal: AbortSignal.timeout(10000)
        });
        
        const balanceResult = await response.json();
        
        if (balanceResult.error) {
          results.tests.balanceRpc = {
            success: false,
            error: balanceResult.error.message || 'RPC error'
          };
          console.log(`❌ Balance RPC failed:`, balanceResult.error);
        } else {
          const balanceHex = balanceResult.result;
          const balanceWei = BigInt(balanceHex);
          const balanceEth = Number(balanceWei) / Math.pow(10, 18);
          
          results.tests.balanceRpc = {
            success: true,
            balanceWei: balanceWei.toString(),
            balanceEth: balanceEth.toString(),
            balanceHex
          };
          console.log(`✅ Balance RPC: ${balanceEth} ${networkInfo.symbol}`);
        }
      }
    } catch (error) {
      results.tests.balanceRpc = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      console.log(`❌ Balance RPC failed:`, error);
    }
  }

  // Test 5: Wagmi config compatibility
  try {
    // Check if the chain is supported in wagmi config
    const supportedChains = [1, 56, 137, 42161, 10, 8453, 43114, 250]; // From your App.tsx
    const isSupported = supportedChains.includes(chainId);
    
    results.tests.wagmiSupport = {
      success: true,
      isSupported,
      supportedChains
    };
    console.log(`${isSupported ? '✅' : '⚠️'} Wagmi support: ${isSupported ? 'Supported' : 'Not in wagmi config'}`);
  } catch (error) {
    results.tests.wagmiSupport = {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }

  // Summary
  const passedTests = Object.values(results.tests).filter(test => test.success).length;
  const totalTests = Object.keys(results.tests).length;
  
  console.log(`🔧 Diagnostics complete: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log(`✅ All tests passed! Network should be working correctly.`);
  } else {
    console.log(`❌ Some tests failed. Check the detailed results above.`);
  }

  return results;
}

/**
 * Function to log comprehensive network state for debugging
 */
export function logNetworkState() {
  console.group('🔧 Network State Debug');
  
  // Basic browser environment
  console.log('Environment:', {
    userAgent: navigator.userAgent,
    url: window.location.href,
    timestamp: new Date().toISOString()
  });
  
  // Ethereum provider info
  if (window.ethereum) {
    console.log('Ethereum Provider:', {
      isMetaMask: window.ethereum.isMetaMask,
      chainId: window.ethereum.chainId,
      networkVersion: window.ethereum.networkVersion,
      selectedAddress: window.ethereum.selectedAddress,
      isConnected: window.ethereum.isConnected?.()
    });
  } else {
    console.log('❌ No ethereum provider detected');
  }
  
  // LocalStorage relevant data
  const relevantKeys = ['walletConnected', 'connectorId', 'lastConnectedAddress', 'lastNetworkChange'];
  const storageData: Record<string, any> = {};
  
  relevantKeys.forEach(key => {
    const value = localStorage.getItem(key);
    if (value) {
      try {
        storageData[key] = JSON.parse(value);
      } catch {
        storageData[key] = value;
      }
    }
  });
  
  console.log('Relevant localStorage:', storageData);
  
  // Network cache status
  console.log('Network Cache:', getNetworkCacheStatus());
  
  console.groupEnd();
}

/**
 * Utility to clear all network-related caches and storage
 */
export function clearAllNetworkData() {
  console.log('🧹 Clearing all network-related data...');
  
  // Clear network cache
  clearNetworkCache();
  
  // Clear relevant localStorage
  const keysToRemove = [
    'walletConnected',
    'connectorId', 
    'lastConnectedAddress',
    'lastNetworkChange',
    'lastKnownChainId',
    'lastNetworkSwitch',
    'lastReconnectAttempt'
  ];
  
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
    console.log(`Removed: ${key}`);
  });
  
  // Clear wagmi cache
  const wagmiKeys = Object.keys(localStorage).filter(key => 
    key.startsWith('wagmi.') || 
    key.startsWith('w3m-') ||
    key.startsWith('wc@2:')
  );
  
  wagmiKeys.forEach(key => {
    localStorage.removeItem(key);
    console.log(`Removed wagmi key: ${key}`);
  });
  
  console.log('✅ Network data cleared. Consider refreshing the page.');
}

/**
 * Automatic network issue detector
 */
export function useNetworkIssueDetector() {
  const debugInfo = useNetworkDebugger();
  
  useEffect(() => {
    // Detect common issues and provide solutions
    const issues = [];
    
    if (debugInfo.chains.mismatch) {
      issues.push({
        type: 'chain_mismatch',
        message: 'Chain ID mismatch detected between wagmi and direct detection',
        solution: 'This usually resolves automatically. If not, try switching networks in your wallet.'
      });
    }
    
    if (debugInfo.balance.hasError && debugInfo.balance.error?.includes('unsupported')) {
      issues.push({
        type: 'unsupported_network',
        message: 'Current network is not supported by wagmi configuration',
        solution: 'Switch to a supported network (Ethereum, BSC, Polygon, Arbitrum, Optimism, Base, Avalanche, Fantom)'
      });
    }
    
    if (debugInfo.balance.hasError && debugInfo.balance.error?.includes('network')) {
      issues.push({
        type: 'network_error',
        message: 'Network connectivity issue detected',
        solution: 'Check your internet connection and try again'
      });
    }
    
    if (debugInfo.cache.failed.length > 0) {
      issues.push({
        type: 'cache_failures',
        message: `Network cache has ${debugInfo.cache.failed.length} failed entries`,
        solution: 'Try clearing the network cache using the debug panel'
      });
    }
    
    if (issues.length > 0) {
      console.group('🚨 Network Issues Detected');
      issues.forEach(issue => {
        console.warn(`${issue.type}: ${issue.message}`);
        console.log(`💡 Solution: ${issue.solution}`);
      });
      console.groupEnd();
    }
    
  }, [debugInfo]);
  
  return debugInfo;
}