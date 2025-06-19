import React, { useEffect } from "react";
import { useAccount } from "wagmi";
import "../styles.css";

// Using built-in Web3Modal types

// Named function component with explicit type
function ConnectButton(): JSX.Element {
    const { address, isConnected } = useAccount();

    // Log connection events in this component
    useEffect(() => {
        if (isConnected) {
            console.log("ConnectButton: Wallet connected", address);
        } else {
            console.log("ConnectButton: Not connected");
        }
    }, [isConnected, address]);

    return (
        <w3m-connect-button label="Sign in with your wallet" />
    );
}

// Make sure to export the component as default
export default ConnectButton;
