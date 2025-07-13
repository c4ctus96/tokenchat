import React, { useState, useEffect, useRef, useCallback } from "react";
import { firestore } from "./Firebase";
import { collection, onSnapshot, query, orderBy, limit, getDocs, Unsubscribe } from "firebase/firestore";
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
  selectedChatId?: string | null;
}

function ChatSelector({ setSelectedChatId, users, getWalletById, selectedChatId }: ChatSelectorProps) {
  const { address } = useAccount();
  const [chatrooms, setChatrooms] = useState<Chatroom[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // Refs for managing listeners and state
  const unsubscribeRef = useRef<Unsubscribe | null>(null);
  const messageUnsubscribersRef = useRef<Map<string, Unsubscribe>>(new Map());
  const isPageVisibleRef = useRef(true);
  const reconnectTimeoutRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number>(0);

  // Cleanup function to remove all listeners
  const cleanupListeners = useCallback(() => {
    console.log("Cleaning up ChatSelector listeners");
    
    // Clean up main chat listener
    if (unsubscribeRef.current) {
      unsubscribeRef.current();
      unsubscribeRef.current = null;
    }
    
    // Clean up message listeners
    messageUnsubscribersRef.current.forEach((unsubscribe, chatId) => {
      try {
        unsubscribe();
      } catch (error) {
        console.warn(`Error unsubscribing from chat ${chatId}:`, error);
      }
    });
    messageUnsubscribersRef.current.clear();
    
    // Clear reconnect timeout
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
  }, []);

  // Function to set up chat listeners
  const setupChatListeners = useCallback(async () => {
    if (!address) {
      console.log("No address available, skipping chat listener setup");
      return;
    }

    try {
      console.log("Setting up chat listeners for address:", address);
      
      // Clean up existing listeners first
      cleanupListeners();

      // Set up real-time listener for privateChats collection
      const privateChatsRef = collection(firestore, "privateChats");
      
      const unsubscribe = onSnapshot(
        privateChatsRef,
        async (snapshot) => {
          try {
            console.log("Chat snapshot received, processing...");
            lastUpdateTimeRef.current = Date.now();
            
            const privateChatsData: Chatroom[] = [];
            
            // Clean up existing message listeners
            messageUnsubscribersRef.current.forEach((unsub) => {
              try {
                unsub();
              } catch (error) {
                console.warn("Error cleaning up message listener:", error);
              }
            });
            messageUnsubscribersRef.current.clear();
            
            // Process each chat document
            for (const doc of snapshot.docs) {
              const data = doc.data();
              const chatroom: Chatroom = {
                id: doc.id,
                pid: data.pid || []
              };
              
              // Set up real-time listener for this chat's messages
              try {
                const messagesRef = collection(firestore, "privateChats", doc.id, "msg");
                const messagesQuery = query(messagesRef, orderBy("ts", "desc"), limit(1));
                
                const messageUnsubscribe = onSnapshot(messagesQuery, (messagesSnapshot) => {
                  try {
                    if (!messagesSnapshot.empty) {
                      const latestMessage = messagesSnapshot.docs[0].data();
                      
                      // Update the chatroom in the state
                      setChatrooms(prevChatrooms => {
                        const updatedChatrooms = prevChatrooms.map(room => {
                          if (room.id === doc.id) {
                            return {
                              ...room,
                              lastMessage: latestMessage.txt || "",
                              lastMessageTime: latestMessage.ts?.toDate() || new Date()
                            };
                          }
                          return room;
                        });
                        
                        // Sort by last message time
                        return updatedChatrooms.sort((a, b) => {
                          const timeA = a.lastMessageTime?.getTime() || 0;
                          const timeB = b.lastMessageTime?.getTime() || 0;
                          return timeB - timeA;
                        });
                      });
                      
                      // Show notification if this is a new message from someone else
                      const currentUser = users.find(user => user.wallet === address);
                      if (currentUser && 
                          latestMessage.from !== currentUser.id && 
                          doc.id !== selectedChatId &&
                          isPageVisibleRef.current === false) {
                        
                        const senderName = getUserNameById(latestMessage.from);
                        showNotification(senderName, latestMessage.txt);
                      }
                    } else {
                      // No messages yet
                      setChatrooms(prevChatrooms => {
                        const updatedChatrooms = prevChatrooms.map(room => {
                          if (room.id === doc.id) {
                            return {
                              ...room,
                              lastMessage: "No messages yet",
                              lastMessageTime: new Date(0)
                            };
                          }
                          return room;
                        });
                        
                        return updatedChatrooms.sort((a, b) => {
                          const timeA = a.lastMessageTime?.getTime() || 0;
                          const timeB = b.lastMessageTime?.getTime() || 0;
                          return timeB - timeA;
                        });
                      });
                    }
                  } catch (msgError) {
                    console.error(`Error processing message snapshot for chat ${doc.id}:`, msgError);
                  }
                }, (error) => {
                  console.error(`Error in message listener for chat ${doc.id}:`, error);
                });
                
                messageUnsubscribersRef.current.set(doc.id, messageUnsubscribe);
              } catch (msgError) {
                console.error(`Error setting up message listener for chat ${doc.id}:`, msgError);
                chatroom.lastMessage = "Failed to load";
                chatroom.lastMessageTime = new Date(0);
              }
              
              privateChatsData.push(chatroom);
            }
            
            // Initial sort by creation time or ID
            privateChatsData.sort((a, b) => a.id.localeCompare(b.id));
            
            console.log("Real-time chatrooms update:", privateChatsData);
            setChatrooms(privateChatsData);
            setError(null);
          } catch (err) {
            setError("Failed to fetch chat data. Please check your internet connection.");
            console.error("Snapshot processing error:", err);
          }
        },
        (error) => {
          setError("Failed to fetch data. Please check your internet connection.");
          console.error("Chat listener error:", error);
          
          // Attempt to reconnect after a delay
          if (isPageVisibleRef.current) {
            console.log("Attempting to reconnect chat listeners in 5 seconds...");
            reconnectTimeoutRef.current = window.setTimeout(() => {
              setupChatListeners();
            }, 5000);
          }
        }
      );
      
      unsubscribeRef.current = unsubscribe;
      
    } catch (error) {
      console.error("Error setting up chat listeners:", error);
      setError("Failed to initialize chat data.");
    }
  }, [address, users, selectedChatId]);

  // Initial setup
  useEffect(() => {
    if (address) {
      setupChatListeners();
    } else {
      cleanupListeners();
      setChatrooms([]);
    }
    
    return cleanupListeners;
  }, [address, setupChatListeners]);

  // Handle page visibility changes to restart listeners when page becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === 'visible';
      isPageVisibleRef.current = isVisible;
      
      console.log(`Page visibility changed: ${isVisible ? 'visible' : 'hidden'}`);
      
      if (isVisible && address) {
        // Check if listeners might have stopped working
        const timeSinceLastUpdate = Date.now() - lastUpdateTimeRef.current;
        const shouldReconnect = timeSinceLastUpdate > 30000; // 30 seconds
        
        if (shouldReconnect) {
          console.log("Page became visible and listeners may be stale, reconnecting...");
          setTimeout(() => {
            setupChatListeners();
          }, 1000); // Small delay to ensure page is fully active
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [address, setupChatListeners]);

  // Request notification permission when component mounts
  useEffect(() => {
    const requestNotificationPermission = async () => {
      if ("Notification" in window && Notification.permission === "default") {
        try {
          const permission = await Notification.requestPermission();
          console.log("Notification permission:", permission);
        } catch (error) {
          console.warn("Error requesting notification permission:", error);
        }
      }
    };
    
    requestNotificationPermission();
  }, []);

  // Show notification for new messages
  const showNotification = useCallback((senderName: string, messageText: string) => {
    if ("Notification" in window && Notification.permission === "granted") {
      try {
        const truncatedText = messageText.length > 50 
          ? messageText.substring(0, 50) + "..." 
          : messageText;
        
        const notification = new Notification(`New message from ${senderName}`, {
          body: truncatedText,
          icon: "/favicon.ico",
          badge: "/favicon.ico",
          tag: "new-message",
          requireInteraction: false,
        });

        // Auto-close notification after 5 seconds
        setTimeout(() => {
          notification.close();
        }, 5000);
        
      } catch (error) {
        console.warn("Error showing notification:", error);
      }
    }
  }, []);

  // Determine the current user based on wallet address
  const currentUser = users.find(user => user.wallet === address);

  // Filter chatrooms to only those that the current user participates in
  const filteredChatrooms = currentUser
    ? chatrooms.filter(chat => chat.pid.includes(currentUser.id))
    : [];

  const getUserNameById = useCallback((id: string) => {
    const user = users.find(user => user.id === id);
    return user ? user.name : id;
  }, [users]);

  // For a valid chatroom, return the participant's id that doesn't match the current user
  const getOtherParticipantId = useCallback((pid: string[]) => {
    return currentUser ? pid.find(id => id !== currentUser.id) || '' : '';
  }, [currentUser]);

  const getOtherParticipantName = useCallback((pid: string[]) => {
    const otherParticipantId = getOtherParticipantId(pid);
    return getUserNameById(otherParticipantId);
  }, [getOtherParticipantId, getUserNameById]);

  // Truncate message text for display
  const truncateMessage = useCallback((text: string, maxLength: number = 40) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }, []);

  const handleChatClick = useCallback((id: string) => {
    setSelectedChatId(id);
  }, [setSelectedChatId]);

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