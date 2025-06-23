import React, { useState, useEffect } from "react";
import { firestore } from "./Firebase";
import { collection, onSnapshot, query, orderBy, limit, getDocs } from "firebase/firestore";
import { useAccount } from "wagmi";
import EthProfilePic from "./EthProfilePic";

interface Chatroom {
  id: string;
  pid: string[];
  lastMessage?: string;
  lastMessageTime?: Date;
}

interface User {
  id: string;
  name: string;
  wallet: string;
}

interface ChatSelectorProps {
  setSelectedChatId: (id: string) => void;
  users: User[];
  getWalletById: (id: string) => string;
  selectedChatId?: string | null; // Add this to track which chat is currently open
}

function ChatSelector({ setSelectedChatId, users, getWalletById, selectedChatId }: ChatSelectorProps) {
  const { address } = useAccount();
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address) return;

    // Set up real-time listener for privateChats collection
    const privateChatsRef = collection(firestore, "privateChats");
    
    const unsubscribe = onSnapshot(
      privateChatsRef,
      async (snapshot) => {
        try {
          const privateChatsData: Chatroom[] = [];
          
          // Process each chat document
          for (const doc of snapshot.docs) {
            const data = doc.data();
            const chatroom: Chatroom = {
              id: doc.id,
              pid: data.pid || []
            };
            
            // Fetch the latest message for this chat
            try {
              const messagesRef = collection(firestore, "privateChats", doc.id, "msg");
              const messagesQuery = query(messagesRef, orderBy("ts", "desc"), limit(1));
              const messagesSnapshot = await getDocs(messagesQuery);
              
              if (!messagesSnapshot.empty) {
                const latestMessage = messagesSnapshot.docs[0].data();
                chatroom.lastMessage = latestMessage.txt || "";
                chatroom.lastMessageTime = latestMessage.ts?.toDate() || new Date();
              } else {
                chatroom.lastMessage = "No messages yet";
                chatroom.lastMessageTime = new Date(0); // Use epoch for empty chats
              }
            } catch (msgError) {
              console.error(`Error fetching messages for chat ${doc.id}:`, msgError);
              chatroom.lastMessage = "Failed to load";
              chatroom.lastMessageTime = new Date(0);
            }
            
            privateChatsData.push(chatroom);
          }
          
          // Sort chats by last message time (most recent first)
          privateChatsData.sort((a, b) => {
            const timeA = a.lastMessageTime?.getTime() || 0;
            const timeB = b.lastMessageTime?.getTime() || 0;
            return timeB - timeA;
          });
          
          console.log("Real-time chatrooms update:", privateChatsData);
          setChatrooms(privateChatsData);
          setError(null);
        } catch (err) {
          setError("Failed to fetch chat data. Please check your internet connection.");
          console.error("Snapshot error:", err);
        }
      },
      (error) => {
        setError("Failed to fetch data. Please check your internet connection.");
        console.error("Fetch error:", error);
      }
    );
    
    // Cleanup subscription on unmount or when address changes
    return () => unsubscribe();
  }, [address]);

  // Request notification permission when component mounts
  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ("Notification" in window) {
        if (Notification.permission === "default") {
          const permission = await Notification.requestPermission();
          console.log("Notification permission:", permission);
        }
      }
    };
    
    requestNotificationPermission();
  }, []);

  // Listen for new messages to show notifications
  useEffect(() => {
    if (!address || chatrooms.length === 0) return;

    const currentUser = users.find(user => user.wallet === address);
    if (!currentUser) return;

    const unsubscribers: (() => void)[] = [];

    // Set up listeners for each chat the user is part of
    chatrooms.forEach(chatroom => {
      if (chatroom.pid.includes(currentUser.id)) {
        const messagesRef = collection(firestore, "privateChats", chatroom.id, "msg");
        const messagesQuery = query(messagesRef, orderBy("ts", "desc"), limit(1));
        
        const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
          if (!snapshot.empty && chatroom.id !== selectedChatId) {
            const latestMessage = snapshot.docs[0].data();
            
            // Check if this is a new message (not from current user)
            if (latestMessage.from !== currentUser.id) {
              const senderName = getUserNameById(latestMessage.from);
              showNotification(senderName, latestMessage.txt);
            }
          }
        });
        
        unsubscribers.push(unsubscribe);
      }
    });

    // Cleanup all listeners
    return () => {
      unsubscribers.forEach(unsubscribe => unsubscribe());
    };
  }, [chatrooms, address, users, selectedChatId]);

  // Show notification for new messages
  const showNotification = (senderName: string, messageText: string) => {
    if ("Notification" in window && Notification.permission === "granted") {
      const truncatedText = messageText.length > 50 
        ? messageText.substring(0, 50) + "..." 
        : messageText;
      
      new Notification(`New message from ${senderName}`, {
        body: truncatedText,
        icon: "/favicon.ico", // You can customize this icon
        badge: "/favicon.ico",
        tag: "new-message", // This prevents multiple notifications from stacking
      });
    }
  };

  // Determine the current user based on wallet address
  const currentUser = users.find(user => user.wallet === address);

  // Filter chatrooms to only those that the current user participates in
  const filteredChatrooms = currentUser
    ? chatrooms.filter(chat => chat.pid.includes(currentUser.id))
    : [];

  const getUserNameById = (id: string) => {
    const user = users.find(user => user.id === id);
    return user ? user.name : id;
  };

  // For a valid chatroom, return the participant's id that doesn't match the current user
  const getOtherParticipantId = (pid: string[]) => {
    return currentUser ? pid.find(id => id !== currentUser.id) || '' : '';
  };

  const getOtherParticipantName = (pid: string[]) => {
    const otherParticipantId = getOtherParticipantId(pid);
    return getUserNameById(otherParticipantId);
  };

  // Truncate message text for display
  const truncateMessage = (text: string, maxLength: number = 40) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const handleChatClick = (id: string) => {
    setSelectedChatId(id);
  };

  return (
    <div className="chatSelector">
      {error && <p className="error">{error}</p>}
      {filteredChatrooms.length > 0 ? (
        filteredChatrooms.map((chatroom) => (
          <div
            className="contactBox"
            key={chatroom.id}
            onClick={() => handleChatClick(chatroom.id)}
            style={{
              backgroundColor: chatroom.id === selectedChatId ? '#003344' : '#002233',
              cursor: 'pointer'
            }}
          >
            <EthProfilePic eth={getWalletById(getOtherParticipantId(chatroom.pid))} />
            <div className="contactTextBox">
              <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>
                {getOtherParticipantName(chatroom.pid)}
              </h3>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#ccc',
                opacity: 0.8,
                lineHeight: '1.2'
              }}>
                {truncateMessage(chatroom.lastMessage || "No messages yet")}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div style={{ padding: '20px', textAlign: 'center', color: '#ccc' }}>
          <p>No chats yet</p>
          <p style={{ fontSize: '14px', marginTop: '10px' }}>
            Click the + button to start a new conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatSelector;