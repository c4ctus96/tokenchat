import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import "../styles.css";
import ChatSelector from "./ChatSelector";
import ChatWindow from "./ChatWindow";
import ChatContent from "./ChatContent";
import ChatHeader from "./ChatHeader";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "./Firebase";
import { useUser } from "./UserContext";
import NewChatModal from "./NewChatModal";
import { LuMessageCirclePlus } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";
import { useResponsive } from "./useResponsive";

interface User {
  id: string;
  name: string;
  wallet: string;
}

function Chat() {
  const { address } = useAccount();
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const { setCurrentUser } = useUser();
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const { isMobile } = useResponsive();
  
  // Mobile-specific state for view management
  const [mobileView, setMobileView] = useState<'list' | 'chat'>('list');

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
    // On mobile, switch to chat view when a chat is selected
    if (isMobile) {
      setMobileView('chat');
    }
  };

  // Handler for going back to chat list on mobile
  const handleBackToList = () => {
    if (isMobile) {
      setMobileView('list');
      setSelectedChatId(null);
    }
  };

  // Handler for when a new chat is created
  const handleChatCreated = (chatId: string) => {
    console.log("New chat created with ID:", chatId);
    setSelectedChatId(chatId);
    if (isMobile) {
      setMobileView('chat');
    }
  };

  // Helper function to get wallet by user ID
  const getWalletById = (id: string) => {
    const user = users.find((user) => user.id === id);
    return user ? user.wallet : "";
  };

  // Get the name of the currently selected chat participant
  const getCurrentChatName = () => {
    if (!selectedChatId || !users.length) return "";
    
    const currentUser = users.find(user => user.wallet === address);
    if (!currentUser) return "";

    // This is a simplified version - you might want to fetch this from your chat data
    return "Chat"; // You can enhance this to show the actual participant name
  };

  // Desktop Layout
  if (!isMobile) {
    return (
      <div className="chat desktop-chat">
        <ChatSelector
          setSelectedChatId={handleChatSelect}
          users={users}
          getWalletById={getWalletById}
          selectedChatId={selectedChatId}
        />
        <div className="desktop-chat-area">
          {selectedChatId ? (
            <>
              <ChatHeader 
                chatName={getCurrentChatName()}
                onBack={handleBackToList}
                showBackButton={false}
              />
              <ChatWindow selectedChatId={selectedChatId}>
                <ChatContent
                  selectedChatId={selectedChatId}
                  users={users}
                  getWalletById={getWalletById}
                />
              </ChatWindow>
            </>
          ) : (
            <div className="desktop-chat-placeholder">
              <h2>Select a chat to start messaging</h2>
              <p>Choose a conversation from the sidebar or create a new one</p>
            </div>
          )}
        </div>
        <button 
          className="createChatButton desktop-create-chat" 
          onClick={() => setShowNewChatModal(true)}
          title="Start new chat"
        >
          <LuMessageCirclePlus size={24} />
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

  // Mobile Layout
  return (
    <div className="chat mobile-chat">
      {mobileView === 'list' ? (
        // Mobile Chat List View
        <div className="mobile-chat-list">
          <ChatHeader 
            chatName="Chats"
            onBack={handleBackToList}
            showBackButton={false}
            showProfilePic={true}
          />
          <div className="mobile-chat-selector">
            <ChatSelector
              setSelectedChatId={handleChatSelect}
              users={users}
              getWalletById={getWalletById}
              selectedChatId={selectedChatId}
            />
          </div>
          <button 
            className="createChatButton mobile-create-chat" 
            onClick={() => setShowNewChatModal(true)}
            title="Start new chat"
          >
            <LuMessageCirclePlus size={28} />
          </button>
        </div>
      ) : (
        // Mobile Chat View
        <div className="mobile-chat-window">
          <ChatHeader 
            chatName={getCurrentChatName()}
            onBack={handleBackToList}
            showBackButton={true}
          />
          {selectedChatId && (
            <ChatWindow selectedChatId={selectedChatId}>
              <ChatContent
                selectedChatId={selectedChatId}
                users={users}
                getWalletById={getWalletById}
              />
            </ChatWindow>
          )}
        </div>
      )}
      
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