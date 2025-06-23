import React, { useState, useEffect } from "react";
import { SlClose, SlPlus } from "react-icons/sl";
import { collection, getDocs, addDoc, doc, updateDoc, arrayUnion, query, where } from "firebase/firestore";
import { firestore } from "./Firebase";
import { useUser } from "./UserContext";
import EthProfilePic from "./EthProfilePic";

interface User {
  id: string;
  name: string;
  wallet: string;
  chats?: string[];
}

interface NewChatModalProps {
  onClose: () => void;
  onChatCreated?: (chatId: string) => void; // Optional callback when chat is created
}

const NewChatModal: React.FC<NewChatModalProps> = ({ onClose, onChatCreated }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [creatingChat, setCreatingChat] = useState<string | null>(null); // Track which user we're creating chat with
  const [error, setError] = useState<string | null>(null);
  const { currentUser } = useUser();

  // Fetch all users except the current user
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const usersRef = collection(firestore, "users");
        const usersSnapshot = await getDocs(usersRef);
        
        const allUsers = usersSnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          wallet: doc.data().wallet,
          chats: doc.data().chats || []
        }));

        // Filter out the current user
        const filteredUsers = currentUser 
          ? allUsers.filter(user => user.id !== currentUser.id)
          : allUsers;

        setUsers(filteredUsers);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load users. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentUser]);

  // Check if a chat already exists between current user and target user
  const checkExistingChat = async (targetUserId: string): Promise<string | null> => {
    if (!currentUser) return null;

    try {
      const privateChatsRef = collection(firestore, "privateChats");
      const q = query(privateChatsRef);
      const snapshot = await getDocs(q);

      // Look for existing chat with both users
      for (const doc of snapshot.docs) {
        const chatData = doc.data();
        const participants = chatData.pid || [];
        
        if (participants.includes(currentUser.id) && participants.includes(targetUserId)) {
          return doc.id; // Return existing chat ID
        }
      }
      
      return null; // No existing chat found
    } catch (err) {
      console.error("Error checking existing chat:", err);
      return null;
    }
  };

  // Create a new chat between current user and target user
  const createChat = async (targetUser: User) => {
    if (!currentUser) {
      setError("You must be logged in to create a chat");
      return;
    }

    setCreatingChat(targetUser.id);
    setError(null);

    try {
      // Check if chat already exists
      const existingChatId = await checkExistingChat(targetUser.id);
      if (existingChatId) {
        console.log("Chat already exists:", existingChatId);
        if (onChatCreated) {
          onChatCreated(existingChatId);
        }
        onClose();
        return;
      }

      // Create new chat in privateChats collection
      const privateChatsRef = collection(firestore, "privateChats");
      const newChatDoc = await addDoc(privateChatsRef, {
        pid: [currentUser.id, targetUser.id],
        createdAt: new Date(),
        lastActivity: new Date()
      });

      console.log("Created new chat with ID:", newChatDoc.id);

      // Update both users' chats arrays
      const currentUserRef = doc(firestore, "users", currentUser.id);
      const targetUserRef = doc(firestore, "users", targetUser.id);

      await Promise.all([
        updateDoc(currentUserRef, {
          chats: arrayUnion(newChatDoc.id)
        }),
        updateDoc(targetUserRef, {
          chats: arrayUnion(newChatDoc.id)
        })
      ]);

      console.log("Updated users' chat lists");

      // Call callback if provided
      if (onChatCreated) {
        onChatCreated(newChatDoc.id);
      }

      // Close modal
      onClose();

    } catch (err) {
      console.error("Error creating chat:", err);
      setError("Failed to create chat. Please try again.");
    } finally {
      setCreatingChat(null);
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>Start New Chat</h2>
          <button 
            className="closeButton" 
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '5px'
            }}
          >
            <SlClose size={20} />
          </button>
        </div>

        {error && (
          <div style={{ 
            color: '#ff4444', 
            marginBottom: '15px', 
            padding: '10px', 
            background: 'rgba(255, 68, 68, 0.1)',
            borderRadius: '8px'
          }}>
            {error}
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>Loading users...</p>
          </div>
        ) : users.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>No other users found.</p>
          </div>
        ) : (
          <div style={{ 
            maxHeight: '60vh', 
            overflowY: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255, 255, 255, 0.2) transparent',
            paddingRight: '8px'
          }}
          className="modal-scroll-area"
          >
            <p style={{ marginBottom: '15px', color: '#ccc' }}>
              Select a user to start chatting:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {users.map((user) => (
                <div
                  key={user.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <EthProfilePic eth={user.wallet} />
                    <div>
                      <h4 style={{ margin: 0, fontSize: '16px' }}>{user.name}</h4>
                      <p style={{ 
                        margin: 0, 
                        fontSize: '12px', 
                        color: '#ccc',
                        fontFamily: 'monospace'
                      }}>
                        {user.wallet.slice(0, 6)}...{user.wallet.slice(-4)}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => createChat(user)}
                    disabled={creatingChat === user.id}
                    style={{
                      background: creatingChat === user.id ? '#666' : '#50b458',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: creatingChat === user.id ? 'not-allowed' : 'pointer',
                      color: '#fff',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (creatingChat !== user.id) {
                        (e.target as HTMLButtonElement).style.background = '#5bc464';
                        (e.target as HTMLButtonElement).style.transform = 'scale(1.05)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (creatingChat !== user.id) {
                        (e.target as HTMLButtonElement).style.background = '#50b458';
                        (e.target as HTMLButtonElement).style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {creatingChat === user.id ? (
                      <div style={{ 
                        width: '16px', 
                        height: '16px', 
                        border: '2px solid #fff',
                        borderTop: '2px solid transparent',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                    ) : (
                      <SlPlus size={18} />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .modal-scroll-area::-webkit-scrollbar {
            width: 6px;
          }
          
          .modal-scroll-area::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .modal-scroll-area::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default NewChatModal;