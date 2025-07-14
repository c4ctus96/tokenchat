import React, { ReactNode, useEffect } from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { mainnet, arbitrum, bsc, polygon, optimism, base, avalanche, fantom } from 'viem/chains';
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
      retry: (failureCount, error) => {
        // Don't retry on network switch errors
        if (error?.message?.includes('network') || error?.message?.includes('chain')) {
          return failureCount < 1;
        }
        return failureCount < 3;
      },
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

// Include all major chains including Avalanche and Fantom
const chains = [mainnet, bsc, polygon, arbitrum, optimism, base, avalanche, fantom] as const;

// Enhanced RPC configuration with multiple fallbacks
const createRpcTransport = (urls: string[]) => {
  return http(urls[0], {
    batch: true,
    retryCount: 2,
    retryDelay: 1000,
  });
};

// Create the wagmi config with comprehensive chain support and fallback RPCs
const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: createRpcTransport([
      'https://ethereum-rpc.publicnode.com',
      'https://eth.llamarpc.com',
      'https://rpc.ankr.com/eth'
    ]),
    [bsc.id]: createRpcTransport([
      'https://bsc-dataseed1.defibit.io',
      'https://bsc-rpc.publicnode.com',
      'https://rpc.ankr.com/bsc'
    ]),
    [polygon.id]: createRpcTransport([
      'https://polygon-rpc.com',
      'https://polygon-rpc.publicnode.com',
      'https://rpc.ankr.com/polygon'
    ]),
    [arbitrum.id]: createRpcTransport([
      'https://arbitrum-one-rpc.publicnode.com',
      'https://arb1.arbitrum.io/rpc',
      'https://rpc.ankr.com/arbitrum'
    ]),
    [optimism.id]: createRpcTransport([
      'https://optimism-rpc.publicnode.com',
      'https://mainnet.optimism.io',
      'https://rpc.ankr.com/optimism'
    ]),
    [base.id]: createRpcTransport([
      'https://base-rpc.publicnode.com',
      'https://mainnet.base.org',
      'https://rpc.ankr.com/base'
    ]),
    [avalanche.id]: createRpcTransport([
      'https://avalanche-c-chain-rpc.publicnode.com',
      'https://api.avax.network/ext/bc/C/rpc',
      'https://rpc.ankr.com/avalanche'
    ]),
    [fantom.id]: createRpcTransport([
      'https://fantom-rpc.publicnode.com',
      'https://rpc.ftm.tools',
      'https://rpc.ankr.com/fantom'
    ]),
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
  ssr: false,
});

// Initialize Web3Modal with enhanced network support
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
  },
  featuredWalletIds: [
    'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
    '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0', // WalletConnect
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa', // Coinbase Wallet
  ],
});

function PrivateRoute({ children }: { children: ReactNode }) {
  const { isConnected } = useAccount();
  return isConnected ? <>{children}</> : <Navigate to="/" />;
}

// Enhanced connection manager with better network handling
function ConnectionManager() {
  const { isConnected, address, connector, chainId } = useAccount();
  
  useEffect(() => {
    console.log("App initialized with connection status:", isConnected);
    console.log("Current address:", address);
    console.log("Current connector:", connector?.id);
    console.log("Current chain ID:", chainId);
    
    // Enhanced error handling for wallet detection
    if (typeof window.ethereum === 'undefined') {
      console.log("MetaMask not detected, but WalletConnect and other wallets can still be used");
    } else {
      console.log("Ethereum provider detected:", window.ethereum.isMetaMask ? 'MetaMask' : 'Other');
    }

    // Store chain information for debugging
    if (chainId) {
      localStorage.setItem('lastKnownChainId', chainId.toString());
    }

  }, [isConnected, address, connector, chainId]);

  // Enhanced network change handling
  useEffect(() => {
    const handleNetworkChange = (chainIdHex: string) => {
      const newChainId = parseInt(chainIdHex, 16);
      console.log("Network change detected in ConnectionManager - Chain ID:", newChainId);
      
      // Store the network change for debugging
      localStorage.setItem('lastNetworkChange', JSON.stringify({
        chainId: newChainId,
        timestamp: Date.now(),
        address: address
      }));

      // Clear any cached balance data to force refresh
      queryClient.invalidateQueries({ queryKey: ['balance'] });
      
      // Small delay to ensure wagmi state is updated
      setTimeout(() => {
        console.log("Forcing balance refresh after network change");
        queryClient.refetchQueries({ queryKey: ['balance'] });
      }, 1000);
    };

    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on?.('chainChanged', handleNetworkChange);
      
      return () => {
        window.ethereum.removeListener?.('chainChanged', handleNetworkChange);
      };
    }
  }, [address, queryClient]);

  // Global error handler for network-related errors
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      
      // Handle network-related errors gracefully
      if (event.reason?.message?.includes('network') || 
          event.reason?.message?.includes('chain') ||
          event.reason?.message?.includes('NETWORK_ERROR')) {
        console.log("Network error detected, invalidating queries");
        queryClient.invalidateQueries();
      } else if (event.reason?.message?.includes('User rejected') || 
          event.reason?.message?.includes('User denied') ||
          event.reason?.message?.includes('user cancelled')) {
        console.log("User rejected wallet action");
      }
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [queryClient]);
  
  return null;
}

// Enhanced error boundary with network error handling
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
    
    // Handle network-related errors without clearing wallet state
    if (error.message?.includes('network') || 
        error.message?.includes('chain') ||
        error.message?.includes('NETWORK_ERROR')) {
      console.log("Network-related error caught, not clearing wallet state");
    } else if (error.message?.includes('User rejected') || 
              error.message?.includes('User denied') ||
              error.message?.includes('user cancelled')) {
      console.log("User rejection error caught");
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('connectorId');
      localStorage.removeItem('lastConnectedAddress');
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
                // Clear only problematic storage, preserve wallet connection
                try {
                  const keysToRemove = Object.keys(localStorage).filter(key => 
                    key.includes('w3m-') || 
                    key.includes('wagmi.cache') ||
                    key.includes('wc@2:client')
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
              {/* Network debugger - show in development or when needed */}
              {(process.env.NODE_ENV === 'development' || 
                localStorage.getItem('showNetworkDebugger') === 'true') && 
                <NetworkDebugger />}
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
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Router>
          </UserProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ErrorBoundary>
  );
}

export default App;