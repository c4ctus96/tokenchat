// Network utility functions with comprehensive chain support

export interface NetworkInfo {
  name: string;
  symbol: string;
  color: string;
  explorerUrl: string | null;
  rpcUrl?: string;
  decimals: number;
}

// Comprehensive network data - covers most major chains
const NETWORK_DATA: Record<number, NetworkInfo> = {
  // Ethereum Mainnet
  1: {
    name: 'Ethereum',
    symbol: 'ETH',
    color: '#627EEA',
    explorerUrl: 'https://etherscan.io',
    decimals: 18
  },
  
  // Binance Smart Chain
  56: {
    name: 'BNB Smart Chain',
    symbol: 'BNB',
    color: '#F3BA2F',
    explorerUrl: 'https://bscscan.com',
    decimals: 18
  },
  
  // Polygon
  137: {
    name: 'Polygon',
    symbol: 'MATIC',
    color: '#8247E5',
    explorerUrl: 'https://polygonscan.com',
    decimals: 18
  },
  
  // Arbitrum One
  42161: {
    name: 'Arbitrum One',
    symbol: 'ETH',
    color: '#28A0F0',
    explorerUrl: 'https://arbiscan.io',
    decimals: 18
  },
  
  // Optimism
  10: {
    name: 'Optimism',
    symbol: 'ETH',
    color: '#FF0420',
    explorerUrl: 'https://optimistic.etherscan.io',
    decimals: 18
  },
  
  // Base
  8453: {
    name: 'Base',
    symbol: 'ETH',
    color: '#0052FF',
    explorerUrl: 'https://basescan.org',
    decimals: 18
  },
  
  // Avalanche C-Chain - Fixed configuration
  43114: {
    name: 'Avalanche',
    symbol: 'AVAX',
    color: '#E84142',
    explorerUrl: 'https://snowscan.xyz',
    decimals: 18
  },
  
  // Fantom Opera
  250: {
    name: 'Fantom',
    symbol: 'FTM',
    color: '#1969FF',
    explorerUrl: 'https://ftmscan.com',
    decimals: 18
  },
  
  // Cronos
  25: {
    name: 'Cronos',
    symbol: 'CRO',
    color: '#002D74',
    explorerUrl: 'https://cronoscan.com',
    decimals: 18
  },
  
  // Gnosis Chain
  100: {
    name: 'Gnosis',
    symbol: 'xDAI',
    color: '#04795B',
    explorerUrl: 'https://gnosisscan.io',
    decimals: 18
  },
  
  // Moonbeam
  1284: {
    name: 'Moonbeam',
    symbol: 'GLMR',
    color: '#53CBC9',
    explorerUrl: 'https://moonscan.io',
    decimals: 18
  },
  
  // Moonriver
  1285: {
    name: 'Moonriver',
    symbol: 'MOVR',
    color: '#53CBC9',
    explorerUrl: 'https://moonriver.moonscan.io',
    decimals: 18
  },
  
  // Harmony
  1666600000: {
    name: 'Harmony',
    symbol: 'ONE',
    color: '#00AEE9',
    explorerUrl: 'https://explorer.harmony.one',
    decimals: 18
  },
  
  // Celo
  42220: {
    name: 'Celo',
    symbol: 'CELO',
    color: '#35D07F',
    explorerUrl: 'https://celoscan.io',
    decimals: 18
  },
  
  // Aurora
  1313161554: {
    name: 'Aurora',
    symbol: 'ETH',
    color: '#70D44B',
    explorerUrl: 'https://aurorascan.dev',
    decimals: 18
  },
  
  // Metis Andromeda
  1088: {
    name: 'Metis',
    symbol: 'METIS',
    color: '#00DACC',
    explorerUrl: 'https://andromeda-explorer.metis.io',
    decimals: 18
  },
  
  // Boba Network
  288: {
    name: 'Boba',
    symbol: 'ETH',
    color: '#CBFF00',
    explorerUrl: 'https://bobascan.com',
    decimals: 18
  },
  
  // Milkomeda C1
  2001: {
    name: 'Milkomeda',
    symbol: 'milkADA',
    color: '#4E6FF1',
    explorerUrl: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com',
    decimals: 18
  },
  
  // KCC
  321: {
    name: 'KuCoin',
    symbol: 'KCS',
    color: '#049C85',
    explorerUrl: 'https://explorer.kcc.io',
    decimals: 18
  },
  
  // Huobi ECO Chain
  128: {
    name: 'HECO',
    symbol: 'HT',
    color: '#1253FC',
    explorerUrl: 'https://hecoinfo.com',
    decimals: 18
  },
  
  // OKExChain
  66: {
    name: 'OKC',
    symbol: 'OKT',
    color: '#000000',
    explorerUrl: 'https://www.oklink.com/en/okc',
    decimals: 18
  },
  
  // Velas EVM
  106: {
    name: 'Velas',
    symbol: 'VLX',
    color: '#0088FF',
    explorerUrl: 'https://evmexplorer.velas.com',
    decimals: 18
  },
  
  // Fuse
  122: {
    name: 'Fuse',
    symbol: 'FUSE',
    color: '#D2FF52',
    explorerUrl: 'https://explorer.fuse.io',
    decimals: 18
  },
  
  // NEAR Aurora Testnet
  1313161555: {
    name: 'Aurora Testnet',
    symbol: 'ETH',
    color: '#70D44B',
    explorerUrl: 'https://testnet.aurorascan.dev',
    decimals: 18
  },
  
  // Testnets
  3: {
    name: 'Ethereum Ropsten',
    symbol: 'ETH',
    color: '#627EEA',
    explorerUrl: 'https://ropsten.etherscan.io',
    decimals: 18
  },
  
  4: {
    name: 'Ethereum Rinkeby',
    symbol: 'ETH',
    color: '#627EEA',
    explorerUrl: 'https://rinkeby.etherscan.io',
    decimals: 18
  },
  
  5: {
    name: 'Ethereum Goerli',
    symbol: 'ETH',
    color: '#627EEA',
    explorerUrl: 'https://goerli.etherscan.io',
    decimals: 18
  },
  
  11155111: {
    name: 'Ethereum Sepolia',
    symbol: 'ETH',
    color: '#627EEA',
    explorerUrl: 'https://sepolia.etherscan.io',
    decimals: 18
  },
  
  97: {
    name: 'BSC Testnet',
    symbol: 'BNB',
    color: '#F3BA2F',
    explorerUrl: 'https://testnet.bscscan.com',
    decimals: 18
  },
  
  80001: {
    name: 'Polygon Mumbai',
    symbol: 'MATIC',
    color: '#8247E5',
    explorerUrl: 'https://mumbai.polygonscan.com',
    decimals: 18
  },
  
  421613: {
    name: 'Arbitrum Goerli',
    symbol: 'ETH',
    color: '#28A0F0',
    explorerUrl: 'https://goerli.arbiscan.io',
    decimals: 18
  },
  
  420: {
    name: 'Optimism Goerli',
    symbol: 'ETH',
    color: '#FF0420',
    explorerUrl: 'https://goerli-optimism.etherscan.io',
    decimals: 18
  },
  
  84531: {
    name: 'Base Goerli',
    symbol: 'ETH',
    color: '#0052FF',
    explorerUrl: 'https://goerli.basescan.org',
    decimals: 18
  },
  
  43113: {
    name: 'Avalanche Fuji',
    symbol: 'AVAX',
    color: '#E84142',
    explorerUrl: 'https://testnet.snowscan.xyz',
    decimals: 18
  },
  
  4002: {
    name: 'Fantom Testnet',
    symbol: 'FTM',
    color: '#1969FF',
    explorerUrl: 'https://testnet.ftmscan.com',
    decimals: 18
  }
};

// Enhanced cache for external API results with better debugging
const networkCache = new Map<number, NetworkInfo>();
const cacheExpiration = new Map<number, number>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Track API failures to avoid repeated failures
const failedFetches = new Map<number, number>();
const FAILURE_RETRY_DELAY = 5 * 60 * 1000; // 5 minutes

/**
 * Get network information by chain ID
 * First checks local data, then falls back to external API
 */
export async function getNetworkInfo(chainId: number): Promise<NetworkInfo> {
  console.log(`Getting network info for chain ID: ${chainId}`);
  
  // Check if we have local data for this chain
  if (NETWORK_DATA[chainId]) {
    console.log(`Found local network data for chain ${chainId}:`, NETWORK_DATA[chainId]);
    return NETWORK_DATA[chainId];
  }
  
  // Check cache first
  const cachedData = networkCache.get(chainId);
  const cacheTime = cacheExpiration.get(chainId);
  
  if (cachedData && cacheTime && Date.now() < cacheTime) {
    console.log(`Found cached network data for chain ${chainId}:`, cachedData);
    return cachedData;
  }
  
  // Check if we recently failed to fetch this chain
  const lastFailure = failedFetches.get(chainId);
  if (lastFailure && Date.now() - lastFailure < FAILURE_RETRY_DELAY) {
    console.log(`Recently failed to fetch chain ${chainId}, using fallback`);
    return getFallbackNetworkInfo(chainId);
  }
  
  // Try to fetch from external API
  try {
    console.log(`Fetching network info from API for chain ${chainId}`);
    const networkInfo = await fetchNetworkFromAPI(chainId);
    
    // Cache the result
    networkCache.set(chainId, networkInfo);
    cacheExpiration.set(chainId, Date.now() + CACHE_DURATION);
    
    // Clear any failure record
    failedFetches.delete(chainId);
    
    console.log(`Successfully fetched and cached network info for chain ${chainId}:`, networkInfo);
    return networkInfo;
  } catch (error) {
    console.warn(`Failed to fetch network info for chain ${chainId}:`, error);
    
    // Record the failure
    failedFetches.set(chainId, Date.now());
    
    // Return fallback data
    return getFallbackNetworkInfo(chainId);
  }
}

/**
 * Get fallback network information for unknown chains
 */
function getFallbackNetworkInfo(chainId: number): NetworkInfo {
  console.log(`Using fallback network info for chain ${chainId}`);
  
  // Special cases for known chains that might fail API lookup
  const specialCases: Record<number, NetworkInfo> = {
    43114: {
      name: 'Avalanche',
      symbol: 'AVAX',
      color: '#E84142',
      explorerUrl: 'https://snowscan.xyz',
      decimals: 18
    },
    56: {
      name: 'BNB Smart Chain',
      symbol: 'BNB',
      color: '#F3BA2F',
      explorerUrl: 'https://bscscan.com',
      decimals: 18
    },
    137: {
      name: 'Polygon',
      symbol: 'MATIC',
      color: '#8247E5',
      explorerUrl: 'https://polygonscan.com',
      decimals: 18
    }
  };
  
  if (specialCases[chainId]) {
    return specialCases[chainId];
  }
  
  // Generic fallback
  return {
    name: `Chain ${chainId}`,
    symbol: 'ETH',
    color: '#666666',
    explorerUrl: null,
    decimals: 18
  };
}

/**
 * Fetch network information from chainlist.org API with timeout
 */
async function fetchNetworkFromAPI(chainId: number): Promise<NetworkInfo> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
  
  try {
    const response = await fetch(`https://chainid.network/chains.json`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const chains = await response.json();
    const chain = chains.find((c: any) => c.chainId === chainId);
    
    if (!chain) {
      throw new Error(`Chain ${chainId} not found in API response`);
    }
    
    // Extract relevant information
    const networkInfo: NetworkInfo = {
      name: chain.name || `Chain ${chainId}`,
      symbol: chain.nativeCurrency?.symbol || 'ETH',
      color: '#666666', // Default color for unknown networks
      explorerUrl: chain.explorers?.[0]?.url || null,
      decimals: chain.nativeCurrency?.decimals || 18
    };
    
    return networkInfo;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * Get network symbol by chain ID (synchronous, uses local data only)
 */
export function getNetworkSymbol(chainId: number): string {
  console.log(`Getting network symbol for chain ID: ${chainId}`);
  
  const localData = NETWORK_DATA[chainId];
  if (localData) {
    console.log(`Found local symbol for chain ${chainId}: ${localData.symbol}`);
    return localData.symbol;
  }
  
  // Check cache
  const cachedData = networkCache.get(chainId);
  if (cachedData) {
    console.log(`Found cached symbol for chain ${chainId}: ${cachedData.symbol}`);
    return cachedData.symbol;
  }
  
  // Return default
  console.log(`No symbol found for chain ${chainId}, using default: ETH`);
  return 'ETH';
}

/**
 * Check if a chain ID is a known testnet
 */
export function isTestnet(chainId: number): boolean {
  const testnets = [3, 4, 5, 11155111, 97, 80001, 421613, 420, 84531, 43113, 4002, 1313161555];
  return testnets.includes(chainId);
}

/**
 * Get block explorer URL for a transaction
 */
export function getExplorerUrl(chainId: number, txHash: string): string | null {
  const networkInfo = NETWORK_DATA[chainId] || networkCache.get(chainId);
  
  if (!networkInfo?.explorerUrl) {
    return null;
  }
  
  return `${networkInfo.explorerUrl}/tx/${txHash}`;
}

/**
 * Clear cache for a specific chain (useful for debugging)
 */
export function clearNetworkCache(chainId?: number): void {
  if (chainId) {
    networkCache.delete(chainId);
    cacheExpiration.delete(chainId);
    failedFetches.delete(chainId);
    console.log(`Cleared cache for chain ${chainId}`);
  } else {
    networkCache.clear();
    cacheExpiration.clear();
    failedFetches.clear();
    console.log('Cleared all network cache');
  }
}

/**
 * Get cache status for debugging
 */
export function getNetworkCacheStatus(): {
  cached: number[];
  failed: number[];
  cacheSize: number;
} {
  return {
    cached: Array.from(networkCache.keys()),
    failed: Array.from(failedFetches.keys()),
    cacheSize: networkCache.size
  };
}

/**
 * Preload network information for common chains
 */
export async function preloadCommonNetworks(): Promise<void> {
  const commonChains = [1, 56, 137, 42161, 10, 8453, 43114, 250];
  
  console.log('Preloading common networks:', commonChains);
  
  const results = await Promise.allSettled(
    commonChains.map(async (chainId) => {
      try {
        const info = await getNetworkInfo(chainId);
        console.log(`Preloaded chain ${chainId}:`, info.name);
        return info;
      } catch (error) {
        console.warn(`Failed to preload chain ${chainId}:`, error);
        throw error;
      }
    })
  );
  
  const successful = results.filter(result => result.status === 'fulfilled').length;
  const failed = results.filter(result => result.status === 'rejected').length;
  
  console.log(`Preloading complete: ${successful} successful, ${failed} failed`);
}

// Initialize preloading of common networks
if (typeof window !== 'undefined') {
  // Small delay to not block initial page load
  setTimeout(() => {
    preloadCommonNetworks().catch(console.warn);
  }, 1000);
}