import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import "../styles.css";
import ChatSidebar from "./ChatSidebar";
import ChatSelector from "./ChatSelector";
import ChatWindow from "./ChatWindow";
import ChatContent from "./ChatContent";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./Firebase";
import { useUser } from "./UserContext";
import NewChatModal from "./NewChatModal";
import { LuMessageCirclePlus } from "react-icons/lu";

interface User {
  id: string;
  name: string;
  wallet: string;
}

function Chat() {
  const { address } = useAccount(); // Get the current user's wallet address
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const { setCurrentUser } = useUser(); // Get the setCurrentUser function from context
  const [showNewChatModal, setShowNewChatModal] = useState(false);

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

  // Update currentUser in context whenever users or address changes
  useEffect(() => {
    if (users.length > 0 && address) {
      const currentUser = users.find(user => user.wallet === address);
      console.log("Current User:", currentUser);
      setCurrentUser(currentUser);
    }
  }, [users, address, setCurrentUser]);

  // Handler for selecting a chat room
  const handleChatSelect = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  // Handler for when a new chat is created
  const handleChatCreated = (chatId: string) => {
    console.log("New chat created with ID:", chatId);
    // Automatically select the newly created chat
    setSelectedChatId(chatId);
    // You might want to refresh the chat list here if needed
    // For now, the ChatSelector should automatically pick up the new chat
    // since it listens to Firestore changes
  };

  // Helper function to get wallet by user ID
  const getWalletById = (id: string) => {
    const user = users.find((user) => user.id === id);
    return user ? user.wallet : "";
  };

  return (
    <div className="chat">
      <ChatSidebar />
      <ChatSelector
        setSelectedChatId={handleChatSelect}
        users={users}
        getWalletById={getWalletById}
        selectedChatId={selectedChatId}
      />
      <ChatWindow selectedChatId={selectedChatId || undefined}>
        {selectedChatId && (
          <ChatContent
            selectedChatId={selectedChatId}
            users={users}
            getWalletById={getWalletById}
          />
        )}
      </ChatWindow>
      <button 
        className="createChatButton" 
        onClick={() => setShowNewChatModal(true)}
        title="Start new chat"
      >
        <LuMessageCirclePlus size={32} />
      </button>
      {showNewChatModal && (
        <NewChatModal 
          onClose={() => setShowNewChatModal(false)} 
          onChatCreated={handleChatCreated}
        />
      )}
    </div>
  );
}

export default Chat;