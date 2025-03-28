import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import "../styles.css";
import ChatSidebar from "./ChatSidebar";
import ChatSelector from "./ChatSelector";
import ChatWindow from "./ChatWindow";
import ChatContent from "./ChatContent";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./Firebase";

interface User {
  id: string;
  name: string;
  wallet: string;
}

function Chat() {
  const { address } = useAccount(); // Get the current user's wallet address
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersRef = collection(firestore, "users");
      const usersSnapshot = await getDocs(usersRef);
      const usersData = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        wallet: doc.data().wallet,
      }));
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  // Handler for selecting a chat room
  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  // Helper function to get wallet by user ID
  const getWalletById = (id: string) => {
    const user = users.find((user) => user.id === id);
    return user ? user.wallet : "";
  };

  // NEW: Determine the current user logged in by matching the wallet address
  const currentUser = users.find(user => user.wallet === address);

  console.log("Current User:", currentUser); // For debugging and verification

  return (
    <div className="chat">
      <ChatSidebar />
      <ChatSelector
        setSelectedChatId={handleChatSelect}
        users={users}
        getWalletById={getWalletById}
      />
      <ChatWindow>
        {selectedChatId && (
          <ChatContent
            selectedChatId={selectedChatId}
            users={users}
            getWalletById={getWalletById}
          />
        )}
      </ChatWindow>
    </div>
  );
}

export default Chat;
