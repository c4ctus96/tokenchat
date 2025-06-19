import React, { ReactNode, useEffect } from 'react';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { mainnet, arbitrum } from 'viem/chains';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { walletConnect, injected, coinbaseWallet } from 'wagmi/connectors';
import { authConnector } from '@web3modal/wagmi';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Chat from "./components/Chat";
import HomePage from "./components/HomePage";
import { UserProvider } from "./components/UserContext";

const queryClient = new QueryClient();
const projectId = import.meta.env.VITE_WAGMI_PROJECTID;

if (!projectId) throw new Error("Project ID is undefined");

const metadata = {
  name: "TokenChat",
  description: "Web3 Chat Application",
  url: "https://c4ctus96.github.io/tokenchat",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;

// Create the wagmi config first
const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/demo'),
    [arbitrum.id]: http('https://arb-mainnet.g.alchemy.com/v2/demo'),
  },
  connectors: [
    walletConnect({
      projectId,
      metadata,
      showQrModal: false
    }),
    injected({ shimDisconnect: true }),
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
});

// Initialize Web3Modal with the wagmi config
createWeb3Modal({
  wagmiConfig,
  projectId,
  defaultChain: mainnet,
  themeMode: 'dark',
  enableAnalytics: true,
  enableOnramp: false,
});

function PrivateRoute({ children }: { children: ReactNode }) {
  const { isConnected } = useAccount();
  return isConnected ? <>{children}</> : <Navigate to="/" />;
}

// Component to handle initial connection check
function ConnectionManager() {
  const { isConnected } = useAccount();
  
  useEffect(() => {
    console.log("App initialized, connection status:", isConnected);
    // Add error handling for MetaMask detection
    if (typeof window.ethereum === 'undefined') {
      console.log("MetaMask not detected, but WalletConnect can still be used");
    }
  }, [isConnected]);
  
  return null;
}

// Main App component
function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <Router basename="/tokenchat">
            <ConnectionManager />
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
            </Routes>
          </Router>
        </UserProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// Export the App component as default
export default App;
