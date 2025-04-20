import React, { ReactNode, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './components/HomePage';
import "./styles.css";
import { WagmiProvider, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http } from "wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { walletConnect, coinbaseWallet, injected } from "wagmi/connectors";
import { authConnector } from "@web3modal/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import { UserProvider, useUser } from "./components/UserContext";
import ConnectionListener from "./components/ConnectionListener";

// Custom type for Web3Modal HTML element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'w3m-connect-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string;
      };
      'w3m-account-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        balance?: string;
      };
    }
  }
}

const queryClient = new QueryClient();
const projectId = import.meta.env.VITE_WAGMI_PROJECTID; // .env is gitignored

if (!projectId) throw new Error("Project ID is undefined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;

const connectors = [
  walletConnect({
    projectId,
    metadata,
    showQrModal: false,
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
];

const wagmiConfig = createConfig({
  chains,
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
  },
  connectors,
  // Add better event handling
  syncConnectedChain: true,
});

// Initialize Web3Modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: 'dark',
  enableAnalytics: true,
  enableOnramp: false,
  themeVariables: {
    '--w3m-accent': '#50b458',
    '--w3m-border-radius-master': "5px",
  },
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
  }, [isConnected]);
  
  return null;
}

// Main App component
function App() {
  return (
    <React.StrictMode>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ConnectionListener />
            <ConnectionManager />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/chat"
                element={
                  <PrivateRoute>
                    <UserProvider>
                      <Chat />
                    </UserProvider>
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
    </React.StrictMode>
  );
}

// Export the App component as default
export default App;
