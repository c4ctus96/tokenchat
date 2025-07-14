import React, { useState } from 'react';
import { useNetworkDebugger, runNetworkDiagnostics, logNetworkState, clearAllNetworkData } from '../hooks/useNetworkDebugger';

/**
 * Enhanced component to display network debug information
 * Only shows in development or when explicitly enabled
 */
export function NetworkDebugPanel() {
  const debugInfo = useNetworkDebugger();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRunningTests, setIsRunningTests] = useState(false);
  
  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV === 'production' && 
      localStorage.getItem('showNetworkDebugger') !== 'true') {
    return null;
  }

  const handleRunTests = async () => {
    setIsRunningTests(true);
    try {
      await runNetworkDiagnostics(debugInfo.chains.enhanced, debugInfo.connection.address);
    } finally {
      setIsRunningTests(false);
    }
  };
  
  return (
    <div style={{
      position: 'fixed',
      bottom: '10px',
      left: '10px',
      background: 'rgba(0,0,0,0.9)',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '12px',
      maxWidth: isExpanded ? '400px' : '300px',
      zIndex: 9999,
      fontFamily: 'monospace',
      border: '1px solid #333',
      transition: 'max-width 0.3s ease'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '8px' 
      }}>
        <div style={{ fontWeight: 'bold' }}>
          🔧 Network Debug Panel
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: 'transparent',
            border: '1px solid #555',
            color: 'white',
            cursor: 'pointer',
            padding: '2px 6px',
            borderRadius: '3px',
            fontSize: '10px'
          }}
        >
          {isExpanded ? '◀' : '▶'}
        </button>
      </div>
      
      <div style={{ marginBottom: '4px' }}>
        <strong>Chain:</strong> {debugInfo.chains.enhanced} 
        {debugInfo.chains.mismatch && (
          <span style={{ color: '#ff4444' }}> (wagmi: {debugInfo.chains.wagmi})</span>
        )}
      </div>
      
      <div style={{ marginBottom: '4px' }}>
        <strong>Connected:</strong> {debugInfo.connection.isConnected ? '✅' : '❌'} 
        {debugInfo.connection.connector && ` (${debugInfo.connection.connector})`}
      </div>
      
      <div style={{ marginBottom: '4px' }}>
        <strong>Balance:</strong> 
        {debugInfo.balance.loading ? ' 🔄 Loading...' : 
         debugInfo.balance.hasError ? ` ❌ ${debugInfo.balance.error?.slice(0, 30)}...` :
         debugInfo.balance.data ? ` ✅ ${parseFloat(debugInfo.balance.data.formatted).toFixed(4)} ${debugInfo.balance.data.symbol}` :
         ' ⚪ No data'}
      </div>
      
      <div style={{ marginBottom: '8px' }}>
        <strong>Cache:</strong> {debugInfo.cache.cacheSize} cached
        {debugInfo.cache.failed && debugInfo.cache.failed.length > 0 && (
          <span style={{ color: '#ffc107' }}>, {debugInfo.cache.failed.length} failures</span>
        )}
      </div>
      
      {/* Show warnings for common issues */}
      {debugInfo.chains.mismatch && (
        <div style={{ 
          background: 'rgba(255, 193, 7, 0.2)', 
          color: '#ffc107', 
          padding: '4px', 
          borderRadius: '4px', 
          marginBottom: '8px',
          fontSize: '10px'
        }}>
          ⚠️ Chain mismatch detected
        </div>
      )}
      
      {debugInfo.balance.hasError && (
        <div style={{ 
          background: 'rgba(220, 53, 69, 0.2)', 
          color: '#dc3545', 
          padding: '4px', 
          borderRadius: '4px', 
          marginBottom: '8px',
          fontSize: '10px'
        }}>
          ❌ Balance loading error
        </div>
      )}
      
      {/* Cache Failures Warning */}
      {debugInfo.cache.failed && debugInfo.cache.failed.length > 0 && (
        <div style={{ 
          background: 'rgba(255, 193, 7, 0.2)', 
          color: '#ffc107', 
          padding: '4px', 
          borderRadius: '4px', 
          marginBottom: '8px',
          fontSize: '10px'
        }}>
          ⚠️ Some network fetches have failed (auto-retry enabled)
        </div>
      )}
      
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => logNetworkState()}
          style={{
            background: '#50b458',
            border: 'none',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '10px'
          }}
          title="Log detailed network state to console"
        >
          Log State
        </button>
        
        <button 
          onClick={handleRunTests}
          disabled={isRunningTests}
          style={{
            background: isRunningTests ? '#666' : '#007bff',
            border: 'none',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '3px',
            cursor: isRunningTests ? 'not-allowed' : 'pointer',
            fontSize: '10px'
          }}
          title="Run comprehensive network tests"
        >
          {isRunningTests ? '⏳' : 'Run Tests'}
        </button>
        
        <button 
          onClick={() => {
            if (window.confirm('This will clear all network cache and wallet connection data. Continue?')) {
              clearAllNetworkData();
            }
          }}
          style={{
            background: '#ff4444',
            border: 'none',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '10px'
          }}
          title="Clear all network-related cache and storage"
        >
          Clear All
        </button>
        
        <button 
          onClick={() => {
            localStorage.removeItem('showNetworkDebugger');
            window.location.reload();
          }}
          style={{
            background: '#6c757d',
            border: 'none',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '10px'
          }}
          title="Hide debug panel"
        >
          Hide
        </button>
      </div>
      
      <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '6px' }}>
        Press F12 → Console for detailed logs
      </div>
      
      {/* Enhanced enable/disable instructions */}
      {isExpanded && (
        <details style={{ fontSize: '10px', marginTop: '4px', opacity: 0.8 }}>
          <summary style={{ cursor: 'pointer' }}>Commands & Instructions</summary>
          <div style={{ marginTop: '4px', lineHeight: '1.3' }}>
            <strong>Show this panel:</strong><br/>
            <code>localStorage.setItem('showNetworkDebugger', 'true')</code>
            <br/><br/>
            <strong>Console commands:</strong><br/>
            <code>runNetworkDiagnostics(chainId)</code><br/>
            <code>logNetworkState()</code><br/>
            <code>clearAllNetworkData()</code>
          </div>
        </details>
      )}
    </div>
  );
}

export default NetworkDebugPanel;