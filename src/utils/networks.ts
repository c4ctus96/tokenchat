// Debug version with enhanced logging to see what's happening

export interface NetworkInfo {
  name: string;
  symbol: string;
  color: string;
  explorerUrl: string | null;
  rpcUrl?: string;
  decimals: number;
  source?: 'local' | 'api' | 'wallet' | 'fallback';
}

// Keep popular networks local for instant access
const POPULAR_NETWORKS: Record<number, NetworkInfo> = {
  1: { name: 'Ethereum', symbol: 'ETH', color: '#627EEA', explorerUrl: 'https://etherscan.io', rpcUrl: 'https://ethereum-rpc.publicnode.com', decimals: 18, source: 'local' },
  56: { name: 'BNB Smart Chain', symbol: 'BNB', color: '#F3BA2F', explorerUrl: 'https://bscscan.com', rpcUrl: 'https://bsc-dataseed1.defibit.io', decimals: 18, source: 'local' },
  137: { name: 'Polygon', symbol: 'MATIC', color: '#8247E5', explorerUrl: 'https://polygonscan.com', rpcUrl: 'https://polygon-rpc.com', decimals: 18, source: 'local' },
  42161: { name: 'Arbitrum One', symbol: 'ETH', color: '#28A0F0', explorerUrl: 'https://arbiscan.io', rpcUrl: 'https://arbitrum-one-rpc.publicnode.com', decimals: 18, source: 'local' },
  10: { name: 'Optimism', symbol: 'ETH', color: '#FF0420', explorerUrl: 'https://optimistic.etherscan.io', rpcUrl: 'https://optimism-rpc.publicnode.com', decimals: 18, source: 'local' },
  8453: { name: 'Base', symbol: 'ETH', color: '#0052FF', explorerUrl: 'https://basescan.org', rpcUrl: 'https://base-rpc.publicnode.com', decimals: 18, source: 'local' },
  43114: { name: 'Avalanche', symbol: 'AVAX', color: '#E84142', explorerUrl: 'https://snowscan.xyz', rpcUrl: 'https://avalanche-c-chain-rpc.publicnode.com', decimals: 18, source: 'local' },
  250: { name: 'Fantom', symbol: 'FTM', color: '#1969FF', explorerUrl: 'https://ftmscan.com', rpcUrl: 'https://fantom-rpc.publicnode.com', decimals: 18, source: 'local' },
  25: { name: 'Cronos', symbol: 'CRO', color: '#002D74', explorerUrl: 'https://cronoscan.com', rpcUrl: 'https://evm.cronos.org', decimals: 18, source: 'local' },
  100: { name: 'Gnosis', symbol: 'xDAI', color: '#04795B', explorerUrl: 'https://gnosisscan.io', rpcUrl: 'https://rpc.gnosischain.com', decimals: 18, source: 'local' },
  // NOTE: zkSync Era (324) is NOT in popular networks, so it should trigger API calls
};

// Cache and failure tracking
const networkCache = new Map<number, NetworkInfo>();
const cacheExpiration = new Map<number, number>();
const apiFailures = new Map<number, { count: number; lastAttempt: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

/**
 * Enhanced getNetworkInfo with detailed logging
 */
export async function getNetworkInfo(chainId: number): Promise<NetworkInfo> {
  console.log(`🔍 [NETWORKS] Getting network info for chain ID: ${chainId}`);
  
  // Step 1: Popular networks (instant)
  if (POPULAR_NETWORKS[chainId]) {
    console.log(`⚡ [NETWORKS] Found popular network: ${POPULAR_NETWORKS[chainId].name}`);
    return POPULAR_NETWORKS[chainId];
  }
  console.log(`📋 [NETWORKS] Chain ${chainId} not in popular networks, proceeding to cache check...`);
  
  // Step 2: Cache check
  const cached = getCachedNetwork(chainId);
  if (cached) {
    console.log(`💾 [NETWORKS] Found cached network: ${cached.name} (source: ${cached.source})`);
    return cached;
  }
  console.log(`📋 [NETWORKS] Chain ${chainId} not in cache, proceeding to wallet detection...`);
  
  // Step 3: Try wallet detection first (often fastest and most accurate)
  console.log(`🦊 [NETWORKS] Attempting wallet detection for chain ${chainId}...`);
  try {
    const walletInfo = await getNetworkFromWallet(chainId);
    if (walletInfo) {
      console.log(`✅ [NETWORKS] Got network from wallet: ${walletInfo.name}`);
      cacheNetwork(chainId, walletInfo);
      return walletInfo;
    }
    console.log(`⚠️ [NETWORKS] Wallet detection returned null for chain ${chainId}`);
  } catch (error) {
    console.log(`❌ [NETWORKS] Wallet detection failed for chain ${chainId}:`, error);
  }
  
  // Step 4: Primary API (ChainList - most comprehensive)
  console.log(`🌐 [NETWORKS] Attempting ChainList API for chain ${chainId}...`);
  try {
    const apiInfo = await fetchFromChainListAPI(chainId);
    if (apiInfo) {
      console.log(`✅ [NETWORKS] Got network from API: ${apiInfo.name}`);
      cacheNetwork(chainId, apiInfo);
      return apiInfo;
    }
    console.log(`⚠️ [NETWORKS] API returned null for chain ${chainId}`);
  } catch (error) {
    console.log(`❌ [NETWORKS] API failed for chain ${chainId}:`, error);
    recordAPIFailure(chainId);
  }
  
  // Step 5: Smart fallback (pattern recognition)
  console.log(`🧠 [NETWORKS] Using smart fallback for chain ${chainId}...`);
  const fallback = getSmartFallback(chainId);
  console.log(`🔧 [NETWORKS] Smart fallback result: ${fallback.name} (source: ${fallback.source})`);
  cacheNetwork(chainId, fallback);
  return fallback;
}

/**
 * Enhanced wallet detection with detailed logging
 */
async function getNetworkFromWallet(chainId: number): Promise<NetworkInfo | null> {
  console.log(`🔍 [WALLET] Starting wallet detection for chain ${chainId}...`);
  
  if (typeof window === 'undefined' || !window.ethereum) {
    console.log(`❌ [WALLET] No window.ethereum available`);
    return null;
  }
  
  try {
    // Check if wallet is on the right network
    const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
    const currentChainIdNumber = parseInt(currentChainId, 16);
    console.log(`📋 [WALLET] Current wallet chain: ${currentChainIdNumber}, target: ${chainId}`);
    
    if (currentChainIdNumber !== chainId) {
      console.log(`🔄 [WALLET] Need to switch from ${currentChainIdNumber} to ${chainId}`);
      
      // DON'T actually try to switch - this is disruptive!
      // Just return null and let API handle it
      console.log(`⚠️ [WALLET] Skipping wallet switch to avoid disruption`);
      return null;
      
      // Original code that tries to switch:
      // try {
      //   await window.ethereum.request({
      //     method: 'wallet_switchEthereumChain',
      //     params: [{ chainId: `0x${chainId.toString(16)}` }],
      //   });
      //   const networkName = await getNetworkNameFromWallet();
      //   return {
      //     name: networkName || `Chain ${chainId}`,
      //     symbol: 'ETH',
      //     color: generateColorFromChainId(chainId),
      //     explorerUrl: null,
      //     decimals: 18,
      //     source: 'wallet'
      //   };
      // } catch (switchError) {
      //   console.log(`❌ [WALLET] Switch failed or user rejected:`, switchError);
      //   return null;
      // }
    }
    
    // Already on the network, try to get info
    console.log(`✅ [WALLET] Already on correct network ${chainId}`);
    const networkName = await getNetworkNameFromWallet();
    const walletInfo = {
      name: networkName || `Chain ${chainId}`,
      symbol: 'ETH',
      color: generateColorFromChainId(chainId),
      explorerUrl: null,
      decimals: 18,
      source: 'wallet' as const
    };
    console.log(`🦊 [WALLET] Created wallet info:`, walletInfo);
    return walletInfo;
    
  } catch (error) {
    console.log(`❌ [WALLET] Wallet detection error:`, error);
    return null;
  }
}

/**
 * Get network name from wallet (if possible)
 */
async function getNetworkNameFromWallet(): Promise<string | null> {
  console.log(`🔍 [WALLET] Attempting to get network name from wallet...`);
  try {
    // Some wallets expose network name, most don't
    // This is a best-effort attempt
    console.log(`⚠️ [WALLET] Network name extraction not implemented`);
    return null;
  } catch {
    console.log(`❌ [WALLET] Failed to get network name`);
    return null;
  }
}

/**
 * Enhanced ChainList API with detailed logging
 */
async function fetchFromChainListAPI(chainId: number): Promise<NetworkInfo | null> {
  console.log(`📡 [API] Starting ChainList API fetch for chain ${chainId}...`);
  
  // Check if we recently failed
  const failure = apiFailures.get(chainId);
  if (failure && failure.count >= 3) {
    const timeSinceLastAttempt = Date.now() - failure.lastAttempt;
    const cooldownTime = 5 * 60 * 1000; // 5 minutes
    if (timeSinceLastAttempt < cooldownTime) {
      console.log(`⏭️ [API] Skipping API for chain ${chainId} due to cooldown (${failure.count} failures)`);
      throw new Error('Too many recent failures');
    }
  }
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  
  try {
    console.log(`🌐 [API] Fetching chains.json from ChainList...`);
    
    const response = await fetch('https://chainid.network/chains.json', {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
      }
    });
    
    clearTimeout(timeoutId);
    console.log(`📥 [API] Received response: ${response.status} ${response.statusText}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    
    const chains = await response.json();
    console.log(`📊 [API] Parsed JSON, got ${Array.isArray(chains) ? chains.length : 'invalid'} chains`);
    
    if (!Array.isArray(chains)) {
      throw new Error('Invalid API response format');
    }
    
    const chain = chains.find((c: any) => c.chainId === chainId);
    console.log(`🔍 [API] Searching for chain ${chainId}... ${chain ? 'FOUND' : 'NOT FOUND'}`);
    
    if (!chain) {
      throw new Error(`Chain ${chainId} not found`);
    }
    
    const networkInfo: NetworkInfo = {
      name: chain.name || `Chain ${chainId}`,
      symbol: chain.nativeCurrency?.symbol || 'ETH',
      color: generateColorFromName(chain.name) || generateColorFromChainId(chainId),
      explorerUrl: chain.explorers?.[0]?.url || null,
      rpcUrl: chain.rpc?.[0] || undefined,
      decimals: chain.nativeCurrency?.decimals || 18,
      source: 'api'
    };
    
    console.log(`✅ [API] Successfully parsed chain data:`, networkInfo);
    return networkInfo;
    
  } catch (error) {
    clearTimeout(timeoutId);
    console.log(`❌ [API] ChainList API error:`, error);
    throw error;
  }
}

/**
 * Cache management with logging
 */
function getCachedNetwork(chainId: number): NetworkInfo | null {
  const cached = networkCache.get(chainId);
  const expiration = cacheExpiration.get(chainId);
  
  if (cached && expiration && Date.now() < expiration) {
    console.log(`💾 [CACHE] Hit for chain ${chainId}: ${cached.name}`);
    return cached;
  }
  
  if (cached) {
    console.log(`⏰ [CACHE] Expired entry for chain ${chainId}, removing...`);
    networkCache.delete(chainId);
    cacheExpiration.delete(chainId);
  }
  
  console.log(`❌ [CACHE] Miss for chain ${chainId}`);
  return null;
}

function cacheNetwork(chainId: number, info: NetworkInfo): void {
  console.log(`💾 [CACHE] Storing chain ${chainId}: ${info.name} (source: ${info.source})`);
  networkCache.set(chainId, info);
  cacheExpiration.set(chainId, Date.now() + CACHE_DURATION);
  // Clear any failure record on successful fetch
  apiFailures.delete(chainId);
}

function recordAPIFailure(chainId: number): void {
  const current = apiFailures.get(chainId) || { count: 0, lastAttempt: 0 };
  const newFailure = {
    count: current.count + 1,
    lastAttempt: Date.now()
  };
  apiFailures.set(chainId, newFailure);
  console.log(`📊 [FAILURES] Recorded failure for chain ${chainId} (attempt ${newFailure.count})`);
}

/**
 * Smart fallback with enhanced pattern recognition
 */
function getSmartFallback(chainId: number): NetworkInfo {
  console.log(`🤖 [FALLBACK] Generating smart fallback for chain ${chainId}...`);
  
  // Pattern-based inference
  let name = `Chain ${chainId}`;
  let symbol = 'ETH';
  let color = generateColorFromChainId(chainId);
  
  // Enhanced patterns
  if (chainId === 324) {
    name = 'zkSync Era';
    symbol = 'ETH';
    color = '#8C8DFC';
  } else if (chainId === 280) {
    name = 'zkSync Era Testnet';
    symbol = 'ETH';
    color = '#8C8DFC';
  } else if (chainId >= 40000 && chainId <= 50000) {
    name = `Ethereum L2 ${chainId}`;
    symbol = 'ETH';
    color = '#627EEA';
  } else if (chainId >= 43100 && chainId <= 43200) {
    name = `Avalanche Subnet ${chainId}`;
    symbol = 'AVAX';
    color = '#E84142';
  } else if (chainId.toString().includes('test') || chainId > 1000000) {
    name = `Testnet ${chainId}`;
    color = '#888888';
  }
  
  const fallbackInfo = {
    name,
    symbol,
    color,
    explorerUrl: null,
    decimals: 18,
    source: 'fallback' as const
  };
  
  console.log(`🔧 [FALLBACK] Generated fallback:`, fallbackInfo);
  return fallbackInfo;
}

/**
 * Generate consistent colors
 */
function generateColorFromChainId(chainId: number): string {
  const hue = (chainId * 137.508) % 360;
  return `hsl(${hue}, 70%, 45%)`;
}

function generateColorFromName(name?: string): string | null {
  if (!name) return null;
  
  const nameLower = name.toLowerCase();
  
  // Known network colors
  if (nameLower.includes('ethereum')) return '#627EEA';
  if (nameLower.includes('binance') || nameLower.includes('bsc')) return '#F3BA2F';
  if (nameLower.includes('polygon')) return '#8247E5';
  if (nameLower.includes('avalanche')) return '#E84142';
  if (nameLower.includes('fantom')) return '#1969FF';
  if (nameLower.includes('arbitrum')) return '#28A0F0';
  if (nameLower.includes('optimism')) return '#FF0420';
  if (nameLower.includes('base')) return '#0052FF';
  if (nameLower.includes('zksync')) return '#8C8DFC';
  
  return null;
}

// Export cache management functions
export function clearNetworkCache(chainId?: number): void {
  if (chainId) {
    console.log(`🧹 [CACHE] Clearing cache for chain ${chainId}`);
    networkCache.delete(chainId);
    cacheExpiration.delete(chainId);
    apiFailures.delete(chainId);
  } else {
    console.log(`🧹 [CACHE] Clearing all network cache`);
    networkCache.clear();
    cacheExpiration.clear();
    apiFailures.clear();
  }
}

export function getNetworkCacheStatus() {
  const status = {
    cached: Array.from(networkCache.keys()),
    failed: Array.from(apiFailures.keys()),
    cacheSize: networkCache.size,
    apiFailures: Array.from(apiFailures.entries()).map(([chainId, info]) => ({
      chainId,
      attempts: info.count,
      lastAttempt: new Date(info.lastAttempt)
    }))
  };
  
  console.log(`📊 [CACHE] Current cache status:`, status);
  return status;
}

// Additional debugging functions
export function getNetworkSymbol(chainId: number): string {
  console.log(`🔍 [SYMBOL] Getting symbol for chain ${chainId}`);
  const localData = POPULAR_NETWORKS[chainId];
  if (localData) {
    console.log(`⚡ [SYMBOL] Found local symbol: ${localData.symbol}`);
    return localData.symbol;
  }
  
  const cachedData = networkCache.get(chainId);
  if (cachedData) {
    console.log(`💾 [SYMBOL] Found cached symbol: ${cachedData.symbol}`);
    return cachedData.symbol;
  }
  
  console.log(`🔧 [SYMBOL] Using fallback symbol: ETH`);
  return 'ETH';
}

export function isTestnet(chainId: number): boolean {
  const testnets = [3, 4, 5, 11155111, 97, 80001, 421614, 11155420, 84532, 43113, 4002, 280];
  const isTestnet = testnets.includes(chainId) || 
                   chainId.toString().includes('test') || 
                   chainId > 1000000;
  console.log(`🧪 [TESTNET] Chain ${chainId} is ${isTestnet ? 'a testnet' : 'mainnet'}`);
  return isTestnet;
}

export function getExplorerUrl(chainId: number, txHash: string): string | null {
  const networkInfo = POPULAR_NETWORKS[chainId] || networkCache.get(chainId);
  const url = networkInfo?.explorerUrl ? `${networkInfo.explorerUrl}/tx/${txHash}` : null;
  console.log(`🔍 [EXPLORER] Explorer URL for chain ${chainId}: ${url || 'none'}`);
  return url;
}

// Initialize with logging
console.log('🚀 [NETWORKS] Debug network utility initialized');
console.log(`📋 [NETWORKS] Popular networks loaded: ${Object.keys(POPULAR_NETWORKS).join(', ')}`);