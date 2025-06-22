import React, { useState, useEffect } from "react";
import { firestore } from "./Firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { useAccount } from "wagmi";
import EthProfilePic from "./EthProfilePic";

interface Chatroom {
  id: string;
  pid: string[];
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
}

function ChatSelector({ setSelectedChatId, users, getWalletById }: ChatSelectorProps) {
  const { address } = useAccount();
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address) return;

    // Set up real-time listener for privateChats collection
    const privateChatsRef = collection(firestore, "privateChats");
    
    const unsubscribe = onSnapshot(
      privateChatsRef,
      (snapshot) => {
        try {
          const privateChatsData: Chatroom[] = snapshot.docs.map(doc => {
            const data = doc.data();
            return {
              id: doc.id,
              pid: data.pid || []
            };
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
          >
            <EthProfilePic eth={getWalletById(getOtherParticipantId(chatroom.pid))} />
            <div className="contactTextBox">
              <h3>{getOtherParticipantName(chatroom.pid)}</h3>
              <h3>latest message</h3>
            </div>
          </div>
        ))
      ) : (
        <p>No chatrooms available</p>
      )}
    </div>
  );
}

export default ChatSelector;