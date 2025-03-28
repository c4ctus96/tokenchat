import React, { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainComponent from './components/main';
import "./styles.css";
import { WagmiProvider, useAccount } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http } from "wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { walletConnect, coinbaseWallet, injected } from "wagmi/connectors";
import { authConnector } from "@web3modal/wagmi";
import Signup from "./components/Signup";
import Chat from "./components/Chat";
import { UserProvider, useUser } from "./components/UserContext";

const queryClient = new QueryClient();
const projectId = '02ee764d5cc25cff6387d6d3f7943fd6';
if (!projectId) throw new Error("Project ID is undefined");


const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum] as const;

const connectors = [
  walletConnect({ projectId, metadata, showQrModal: false }),
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
});

function PrivateRoute({ children }: { children: ReactNode }) {
  const { isConnected } = useAccount();
  return isConnected ? <>{children}</> : <Navigate to="/" />;
}

function App() {
  return (
    <React.StrictMode>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainComponent />} />
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

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<App />);
