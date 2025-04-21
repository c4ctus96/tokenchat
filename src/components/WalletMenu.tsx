import React from 'react';
import { SlClose } from 'react-icons/sl';
import { useAccount, useDisconnect } from 'wagmi';

function WalletMenu() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  
  const handleDisconnect = async () => {
    // Clean up localStorage
    localStorage.removeItem('walletconnect');
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('connectorId');
    
    // Wagmi disconnect
    disconnect();
  }
  
  return (
    <div className="wallet-button">
      {isConnected && address ? (
        <div className='walletBubble'>
          <div className="address">
            {address.slice(0, 6)}...{address.slice(-4)}
          </div>
          <button onClick={handleDisconnect}><SlClose size={25} /></button>
        </div>
      ) : (
        // Directly use the web3modal button
        <w3m-connect-button />
      )}
    </div>
  );
}

export default WalletMenu;
