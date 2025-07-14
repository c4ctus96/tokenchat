import React from 'react';
import { NetworkDebugPanel } from './NetworkDebugPanel';
import { useNetworkIssueDetector } from '../hooks/useNetworkDebugger';

/**
 * Main network debugger component that includes automatic issue detection
 * and the debug panel. This replaces the old NetworkDebugger component.
 */
const NetworkDebugger: React.FC = () => {
  // Automatically detect and log network issues
  useNetworkIssueDetector();

  // Show the debug panel (it has its own visibility logic)
  return <NetworkDebugPanel />;
};

export default NetworkDebugger;