import React, { ReactNode, useEffect } from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { mainnet, arbitrum, bsc, polygon, optimism, base } from 'viem/chains';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors';
import { authConnector } from '@web3modal/wagmi';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chat from "./components/Chat";
import HomePage from "./components/HomePage";
import { UserProvider } from "./components/UserContext";
import Signup from "./components/Signup";
import ConnectionListener from "./components/ConnectionListener";
import NetworkDebugger from "./components/NetworkDebugger";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  },
});

const projectId = import.meta.env.VITE_WAGMI_PROJECTID;

if (!projectId) throw new Error("Project ID is undefined");

const metadata = {
  name: "TokenChat",
  description: "Web3 Chat Application",
  url: "https://c4ctus96.github.io/tokenchat",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Include more chains including BSC
const chains = [mainnet, bsc, polygon, arbitrum, optimism, base] as const;

// Create the wagmi config with completely free public RPC endpoints
const wagmiConfig = createConfig({
  chains,
  transports: {
    // Use completely free public RPC endpoints that don't require API keys
    [mainnet.id]: http('https://ethereum-rpc.publicnode.com'),
    [bsc.id]: http('https://bsc-dataseed1.defibit.io'),
    [polygon.id]: http('https://polygon-rpc.com'),
    [arbitrum.id]: http('https://arbitrum-one-rpc.publicnode.com'),
    [optimism.id]: http('https://optimism-rpc.publicnode.com'),
    [base.id]: http('https://base-rpc.publicnode.com'),
  },
  connectors: [
    walletConnect({
      projectId,
      metadata,
      showQrModal: false
    }),
    injected({ 
      shimDisconnect: true,
      target: {
        id: 'injected',
        name: 'Injected',
        provider: typeof window !== 'undefined' ? window.ethereum : undefined,
      }
    }),
    coinbaseWallet({
      appName: metadata.name,
      appLogoUrl: metadata.icons[0],
    }),
    authConnector({
      options: { projectId },
      socials: ['google', 'x', 'github', 'discord', 'apple'],
      showWallets: true,
      email: true,
      walletFeatures: false,
    }),
  ],
  ssr: false, // Ensure this is false for proper hydration
});

// Initialize Web3Modal with the wagmi config
createWeb3Modal({
  wagmiConfig,
  projectId,
  defaultChain: mainnet,
  themeMode: 'dark',
  enableAnalytics: true,
  enableOnramp: false,
  themeVariables: {
    '--w3m-accent': '#50b458',
    '--w3m-color-mix': '#210059',
    '--w3m-color-mix-strength': 30
    // Do not add --w3m-background
  },
  // Enhanced configuration for better connection handling
  featuredWalletIds: [
    // MetaMask
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
    // WalletConnect
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
    // Coinbase Wallet  
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
  ],
  includeWalletIds: [
    // Add any specific wallet IDs you want to include
  ],
  excludeWalletIds: [
    // Add any wallet IDs you want to exclude
  ],
});

function PrivateRoute({ children }: { children: ReactNode }) {
  const { isConnected } = useAccount();
  return isConnected ? <>{children}</> : <Navigate to="/" />;
}

// Component to handle initial connection check and app-wide connection management
function ConnectionManager() {
  const { isConnected, address, connector } = useAccount();
  
  useEffect(() => {
    console.log("App initialized with connection status:", isConnected);
    console.log("Current address:", address);
    console.log("Current connector:", connector?.id);
    
    // Enhanced error handling for MetaMask detection
    if (typeof window.ethereum === 'undefined') {
      console.log("MetaMask not detected, but WalletConnect and other wallets can still be used");
    } else {
      console.log("Ethereum provider detected:", window.ethereum.isMetaMask ? 'MetaMask' : 'Other');
    }

    // Check for any persisted connection issues and clean them up
    const checkConnectionHealth = () => {
      const storedConnection = localStorage.getItem('walletConnected');
      const storedAddress = localStorage.getItem('lastConnectedAddress');
      const manualDisconnect = localStorage.getItem('manualDisconnect') === 'true';
      
      if (storedConnection === 'true' && storedAddress && !isConnected && !manualDisconnect) {
        console.log("Detected potential connection state mismatch");
        // Don't immediately clear - let the reconnection logic handle it
      }
    };

    // Run health check after a short delay
    const healthCheckTimer = setTimeout(checkConnectionHealth, 3000);
    
    return () => {
      clearTimeout(healthCheckTimer);
    };
  }, [isConnected, address, connector]);

  // Global error handler for unhandled promise rejections
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      
      // If it's a wallet-related error, only clear on serious errors
      if (event.reason?.message?.includes('User rejected') || 
          event.reason?.message?.includes('User denied') ||
          event.reason?.message?.includes('user cancelled')) {
        console.log("User rejected wallet action, clearing connection state");
        localStorage.removeItem('walletConnected');
        localStorage.removeItem('connectorId');
      } else if (event.reason?.message?.includes('wallet') || 
                event.reason?.message?.includes('connection') ||
                event.reason?.message?.includes('provider')) {
        console.log("Wallet-related error detected, but not clearing state automatically");
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Enhanced network change handling with debugging
  useEffect(() => {
    const handleNetworkChange = (chainId: string) => {
      const chainIdNumber = parseInt(chainId, 16);
      console.log("Network change detected in app - Chain ID:", chainIdNumber);
      
      // Store the network change for debugging
      localStorage.setItem('lastNetworkChange', JSON.stringify({
        chainId: chainIdNumber,
        timestamp: Date.now(),
        address: address
      }));
    };

    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on?.('chainChanged', handleNetworkChange);
      
      return () => {
        window.ethereum.removeListener?.('chainChanged', handleNetworkChange);
      };
    }
  }, [address]);
  
  return null;
}

// Enhanced error boundary for better error handling
class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
    
    // Only clear wallet state for wallet-related errors, and only if they're serious
    if (error.message?.includes('User rejected') || 
        error.message?.includes('User denied') ||
        error.message?.includes('user cancelled')) {
      console.log("Clearing wallet state due to user rejection error");
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('connectorId');
      localStorage.removeItem('lastConnectedAddress');
    } else if (error.message?.includes('wallet') || 
              error.message?.includes('connection') ||
              error.message?.includes('provider')) {
      console.log("Wallet-related error caught, but not clearing state automatically");
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#000',
          color: '#fff',
          textAlign: 'center'
        }}>
          <h1>Something went wrong</h1>
          <p>The application encountered an unexpected error.</p>
          <details style={{ marginTop: '20px', fontSize: '14px', opacity: 0.7 }}>
            <summary>Error Details</summary>
            <pre style={{ marginTop: '10px', textAlign: 'left' }}>
              {this.state.error?.message}
            </pre>
          </details>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button
              onClick={() => {
                this.setState({ hasError: false });
              }}
              style={{
                padding: '12px 24px',
                backgroundColor: '#50b458',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Try Again
            </button>
            <button
              onClick={() => {
                // Clear only problematic storage, not all
                try {
                  const keysToRemove = Object.keys(localStorage).filter(key => 
                    key.includes('w3m-') || 
                    key.includes('wagmi.') ||
                    key.includes('wc@2:')
                  );
                  keysToRemove.forEach(key => localStorage.removeItem(key));
                } catch (e) {
                  console.error("Error clearing storage:", e);
                }
                window.location.reload();
              }}
              style={{
                padding: '12px 24px',
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Reset & Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Main App component
function App() {
  return (
    <ErrorBoundary>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <Router basename="/tokenchat">
              <ConnectionManager />
              <ConnectionListener />
              {/* Network debugger - only show in development */}
              {process.env.NODE_ENV === 'development' && <NetworkDebugger />}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/chat"
                  element={
                    <PrivateRoute>
                      <Chat />
                    </PrivateRoute>
                  }
                />
                <Route path="/signup" element={<Signup />} />
                {/* Catch-all route for unknown paths */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Router>
          </UserProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ErrorBoundary>
  );
}

// Export the App component as default
export default App;