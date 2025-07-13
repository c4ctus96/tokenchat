import React, { useCallback } from 'react';
import { SlClose } from 'react-icons/sl';
import { useAccount, useDisconnect } from 'wagmi';

function WalletMenu() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  
  const handleDisconnect = useCallback(async () => {
    try {
      console.log("Starting disconnect process...");
      
      // Step 1: Clear localStorage immediately to prevent auto-reconnection
      localStorage.removeItem('walletconnect');
      localStorage.removeItem('walletConnected');
      localStorage.removeItem('connectorId');
      localStorage.removeItem('lastConnectedAddress');
      
      // Step 2: Clear any Web3Modal related storage
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (
          key.startsWith('w3m-') || 
          key.startsWith('wagmi.') ||
          key.startsWith('wc@2:') ||
          key.includes('walletconnect')
        )) {
          keysToRemove.push(key);
        }
      }
      
      keysToRemove.forEach(key => {
        try {
          localStorage.removeItem(key);
        } catch (error) {
          console.warn(`Failed to remove ${key}:`, error);
        }
      });
      
      // Step 3: Clear sessionStorage as well
      try {
        const sessionKeysToRemove = [];
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          if (key && (
            key.startsWith('w3m-') || 
            key.startsWith('wagmi.') ||
            key.startsWith('wc@2:') ||
            key.includes('walletconnect')
          )) {
            sessionKeysToRemove.push(key);
          }
        }
        
        sessionKeysToRemove.forEach(key => {
          try {
            sessionStorage.removeItem(key);
          } catch (error) {
            console.warn(`Failed to remove session ${key}:`, error);
          }
        });
      } catch (error) {
        console.warn("Error clearing sessionStorage:", error);
      }
      
      // Step 4: Clear IndexedDB for WalletConnect (if accessible)
      try {
        if ('indexedDB' in window) {
          const deleteDB = (dbName: string) => {
            return new Promise((resolve, reject) => {
              const deleteReq = indexedDB.deleteDatabase(dbName);
              deleteReq.onsuccess = () => resolve(true);
              deleteReq.onerror = () => reject(deleteReq.error);
              deleteReq.onblocked = () => {
                console.warn(`Database ${dbName} deletion blocked`);
                resolve(false);
              };
            });
          };
          
          // Common WalletConnect database names
          const dbNames = ['walletconnect-v2', 'keyvaluestorage'];
          await Promise.allSettled(dbNames.map(dbName => deleteDB(dbName)));
        }
      } catch (error) {
        console.warn("Error clearing IndexedDB:", error);
      }
      
      // Step 5: Disconnect via wagmi (this should be after clearing storage)
      disconnect();
      
      // Step 6: Force a small delay to ensure state is cleared
      await new Promise(resolve => setTimeout(resolve, 100));
      
      console.log("Disconnect process completed");
      
      // Step 7: Optional - reload page for complete reset (uncomment if needed)
      // setTimeout(() => {
      //   window.location.reload();
      // }, 500);
      
    } catch (error) {
      console.error("Error during disconnect:", error);
      
      // Force disconnect even if there's an error
      disconnect();
      
      // Clear critical localStorage items as fallback
      try {
        localStorage.clear();
        sessionStorage.clear();
      } catch (clearError) {
        console.error("Failed to clear storage:", clearError);
      }
      
      // Reload page as last resort
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [disconnect]);
  
  return (
    <div className="wallet-button">
      {isConnected && address ? (
        <div className='walletBubble'>
          <div className="address">
            {address.slice(0, 6)}...{address.slice(-4)}
          </div>
          <button 
            onClick={handleDisconnect}
            title="Disconnect wallet"
            aria-label="Disconnect wallet"
          >
            <SlClose size={25} />
          </button>
        </div>
      ) : (
        // Directly use the web3modal button
        <w3m-connect-button />
      )}
    </div>
  );
}

export default WalletMenu;