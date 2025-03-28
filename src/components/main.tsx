import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import ConnectButton from "./ConnectButton"; // Adjust the path as necessary
import "../styles.css";
import { WagmiProvider, useAccount, useConnect, useDisconnect } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http } from "wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { walletConnect, coinbaseWallet, injected } from "wagmi/connectors";
import { authConnector } from "@web3modal/wagmi";
import { BrowserRouter } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import ProceedButton from "./ProceedButton"


// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '02ee764d5cc25cff6387d6d3f7943fd6';
if (!projectId) throw new Error("Project ID is undefined");

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Define chains
const chains = [mainnet, arbitrum] as const;

// create the connectors
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

function MainComponent() {
  const [username, setUsername] = useState('');
  const { address, isConnected } = useAccount();
  const [connected, setConnected] = useState(isConnected);

  useEffect(() => {
    setConnected(isConnected);
    console.log("isConnected state changed:", isConnected);
  }, [isConnected]);

  useEffect(() => {
    if (isConnected) {
      console.log("Wallet connected:", address);
    } else {
      console.log("Wallet disconnected");
    }
  }, [isConnected, address]);

  

  return (
    <div className="homepage">
      <div className="title">
        <h1>Chat 3.0 is here.</h1>
        <h2>Your personal web3 companion.</h2>
      </div>
      <div>
        {connected ? (
          <div className="login">
            <h3>Connected</h3>
            <w3m-account-button balance="hide" />
            <ProceedButton />
          </div>
        ) : (
          <div className="login">
            <h3>Connect your wallet</h3>
            <ConnectButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;