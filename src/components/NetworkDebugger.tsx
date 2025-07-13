import React, { useState, useEffect } from 'react';
import { getNetworkInfo, getNetworkCacheStatus, clearNetworkCache } from '../utils/networks';
import { useChainListener } from '../hooks/useChainListener';

// Debug component to help monitor network detection issues
// Remove this component in production or add a flag to hide it
const NetworkDebugger: React.FC = () => {
  const chainId = useChainListener(); // Use our enhanced hook instead
  const [networkInfo, setNetworkInfo] = useState<any>(null);
  const [cacheStatus, setCacheStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showDebugger, setShowDebugger] = useState(false);

  // Update network info when chain changes
  useEffect(() => {
    const updateNetworkInfo = async () => {
      setLoading(true);
      try {
        const info = await getNetworkInfo(chainId);
        setNetworkInfo(info);
        console.log('NetworkDebugger: Updated network info for chain', chainId, info);
      } catch (error) {
        console.error('NetworkDebugger: Error getting network info:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        setNetworkInfo({ error: errorMessage });
      } finally {
        setLoading(false);
      }
    };

    updateNetworkInfo();
  }, [chainId]);

  // Update cache status periodically
  useEffect(() => {
    const updateCacheStatus = () => {
      const status = getNetworkCacheStatus();
      setCacheStatus(status);
    };

    updateCacheStatus();
    const interval = setInterval(updateCacheStatus, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Listen for network changes
  useEffect(() => {
    const handleChainChanged = (newChainId: string) => {
      const newChainIdNumber = parseInt(newChainId, 16);
      console.log('NetworkDebugger: Chain changed to', newChainIdNumber);
    };

    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on?.('chainChanged', handleChainChanged);
      
      return () => {
        window.ethereum.removeListener?.('chainChanged', handleChainChanged);
      };
    }
  }, []);

  const handleClearCache = () => {
    clearNetworkCache();
    setCacheStatus(getNetworkCacheStatus());
    console.log('NetworkDebugger: Cleared network cache');
  };

  const handleClearChainCache = () => {
    clearNetworkCache(chainId);
    setCacheStatus(getNetworkCacheStatus());
    console.log(`NetworkDebugger: Cleared cache for chain ${chainId}`);
  };

  const handleRefreshNetwork = async () => {
    clearNetworkCache(chainId);
    setLoading(true);
    try {
      const info = await getNetworkInfo(chainId);
      setNetworkInfo(info);
      setCacheStatus(getNetworkCacheStatus());
      console.log('NetworkDebugger: Refreshed network info for chain', chainId, info);
    } catch (error) {
      console.error('NetworkDebugger: Error refreshing network info:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setNetworkInfo({ error: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  // Only show in development or when specifically enabled
  if (!showDebugger && process.env.NODE_ENV === 'production') {
    return (
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        zIndex: 9999,
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '5px',
        borderRadius: '3px',
        fontSize: '12px',
        cursor: 'pointer'
      }}
      onClick={() => setShowDebugger(true)}>
        🔧
      </div>
    );
  }

  if (!showDebugger) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        zIndex: 9999,
        background: 'rgba(0,0,0,0.8)',
        color: 'white',
        padding: '8px',
        borderRadius: '5px',
        fontSize: '12px',
        cursor: 'pointer'
      }}
      onClick={() => setShowDebugger(true)}>
        Network Debug 🔧
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      zIndex: 9999,
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      maxWidth: '350px',
      border: '1px solid #333'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <strong>Network Debugger</strong>
        <button 
          onClick={() => setShowDebugger(false)}
          style={{ 
            background: 'transparent', 
            border: 'none', 
            color: 'white', 
            cursor: 'pointer',
            padding: '0'
          }}
        >
          ✕
        </button>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Current Chain:</strong> {chainId}
        {loading && <span style={{ color: 'yellow' }}> (Loading...)</span>}
      </div>
      
      {networkInfo && (
        <div style={{ marginBottom: '10px' }}>
          <strong>Network Info:</strong>
          <div style={{ marginLeft: '10px', fontSize: '11px' }}>
            {networkInfo.error ? (
              <span style={{ color: 'red' }}>Error: {networkInfo.error}</span>
            ) : (
              <>
                <div>Name: {networkInfo.name}</div>
                <div>Symbol: {networkInfo.symbol}</div>
                <div>Color: {networkInfo.color}</div>
                <div>Explorer: {networkInfo.explorerUrl || 'None'}</div>
              </>
            )}
          </div>
        </div>
      )}
      
      {cacheStatus && (
        <div style={{ marginBottom: '10px' }}>
          <strong>Cache Status:</strong>
          <div style={{ marginLeft: '10px', fontSize: '11px' }}>
            <div>Cached: {cacheStatus.cached.join(', ') || 'None'}</div>
            <div>Failed: {cacheStatus.failed.join(', ') || 'None'}</div>
            <div>Size: {cacheStatus.cacheSize}</div>
          </div>
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
        <button 
          onClick={handleRefreshNetwork}
          style={{ 
            background: '#50b458', 
            border: 'none', 
            color: 'white', 
            padding: '5px 8px', 
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '10px'
          }}
        >
          Refresh Current
        </button>
        <button 
          onClick={handleClearChainCache}
          style={{ 
            background: '#ff6b08', 
            border: 'none', 
            color: 'white', 
            padding: '5px 8px', 
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '10px'
          }}
        >
          Clear Chain Cache
        </button>
        <button 
          onClick={handleClearCache}
          style={{ 
            background: '#ff4444', 
            border: 'none', 
            color: 'white', 
            padding: '5px 8px', 
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '10px'
          }}
        >
          Clear All Cache
        </button>
      </div>
      
      <div style={{ marginTop: '10px', fontSize: '10px', opacity: 0.7 }}>
        Check console for detailed logs
      </div>
    </div>
  );
};

export default NetworkDebugger;