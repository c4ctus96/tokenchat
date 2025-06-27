import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import "../styles.css";
import ChatSelector from "./ChatSelector";
import ChatWindow from "./ChatWindow";
import ChatContent from "./ChatContent";
import ChatHeader from "./ChatHeader";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { firestore } from "./Firebase";
import { useUser } from "./UserContext";
import NewChatModal from "./NewChatModal";
import SendTransactionModal, { TransactionData } from "./SendTransactionModal";
import { LuMessageCirclePlus } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";
import { useResponsive } from "./useResponsive";

interface User {
  id: string;
  name: string;
  wallet: string;
}

interface ChatData {
  pid: string[];
  createdAt?: any;
  lastActivity?: any;
}

function Chat() {
  const { address } = useAccount();
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const { setCurrentUser } = useUser();
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [transactionRecipient, setTransactionRecipient] = useState<User | null>(null);
  const [currentChatData, setCurrentChatData] = useState<ChatData | null>(null);
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
      console.log("Fetched users:", usersData);
    };
    fetchUsers();
  }, []);

  // Fetch chat data when selectedChatId changes
  useEffect(() => {
    const fetchChatData = async () => {
      if (!selectedChatId) {
        setCurrentChatData(null);
        return;
      }

      try {
        const chatDoc = await getDoc(doc(firestore, "privateChats", selectedChatId));
        if (chatDoc.exists()) {
          const chatData = chatDoc.data() as ChatData;
          setCurrentChatData(chatData);
          console.log("Fetched chat data:", chatData);
        } else {
          console.error("Chat document not found:", selectedChatId);
          setCurrentChatData(null);
        }
      } catch (error) {
        console.error("Error fetching chat data:", error);
        setCurrentChatData(null);
      }
    };

    fetchChatData();
  }, [selectedChatId]);

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
    const recipientUser = getRecipientUser();
    return recipientUser ? recipientUser.name : "Chat";
  };

  // Get recipient user for the current chat - IMPROVED VERSION
  const getRecipientUser = (): User | null => {
    console.log("Getting recipient user...");
    console.log("Selected chat ID:", selectedChatId);
    console.log("Current chat data:", currentChatData);
    console.log("Current address:", address);
    console.log("Available users:", users);

    if (!selectedChatId || !currentChatData || !address || users.length === 0) {
      console.log("Missing required data for recipient detection");
      return null;
    }

    // Find the current user
    const currentUser = users.find(user => user.wallet === address);
    if (!currentUser) {
      console.log("Current user not found in users list");
      return null;
    }

    console.log("Current user found:", currentUser);

    // Get the other participant from the chat's pid array
    const otherParticipantId = currentChatData.pid.find(id => id !== currentUser.id);
    if (!otherParticipantId) {
      console.log("Other participant ID not found in chat data");
      return null;
    }

    console.log("Other participant ID:", otherParticipantId);

    // Find the other participant in the users list
    const recipientUser = users.find(user => user.id === otherParticipantId);
    console.log("Recipient user found:", recipientUser);

    return recipientUser || null;
  };

  // Handle sending transactions
  const handleSendTransaction = (recipientUser: User) => {
    console.log("Handle send transaction called with:", recipientUser);
    setTransactionRecipient(recipientUser);
    setShowTransactionModal(true);
  };

  // Handle successful transaction
  const handleTransactionSent = (transactionData: TransactionData) => {
    console.log("Transaction sent:", transactionData);
    setShowTransactionModal(false);
    setTransactionRecipient(null);
    // Transaction message will be automatically added to chat by ChatBottomBar
  };

  // Debug: Log recipient user whenever it changes
  useEffect(() => {
    const recipient = getRecipientUser();
    console.log("Recipient user updated:", recipient);
  }, [selectedChatId, currentChatData, users, address]);

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
              <ChatWindow 
                selectedChatId={selectedChatId}
                onSendTransaction={handleSendTransaction}
                recipientUser={getRecipientUser()}
              >
                <ChatContent
                  selectedChatId={selectedChatId}
                  users={users}
                  getWalletById={getWalletById}
                  onSendTransaction={handleSendTransaction}
                  recipientUser={getRecipientUser()}
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
            <ChatWindow 
              selectedChatId={selectedChatId}
              onSendTransaction={handleSendTransaction}
              recipientUser={getRecipientUser()}
            >
              <ChatContent
                selectedChatId={selectedChatId}
                users={users}
                getWalletById={getWalletById}
                onSendTransaction={handleSendTransaction}
                recipientUser={getRecipientUser()}
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

      {showTransactionModal && transactionRecipient && (
        <SendTransactionModal
          onClose={() => {
            setShowTransactionModal(false);
            setTransactionRecipient(null);
          }}
          recipientUser={transactionRecipient}
          onTransactionSent={handleTransactionSent}
        />
      )}
    </div>
  );
}

export default Chat;