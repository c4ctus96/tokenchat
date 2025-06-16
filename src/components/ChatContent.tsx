import React, { useState, useEffect } from "react";
import { firestore } from "./Firebase";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import Message from "./Message";
import { useAccount } from "wagmi";
import { useUser } from "./UserContext";

interface ChatMessage {
  txt: string;
  ts: Timestamp;
  from: string;
}

interface User {
  id: string;
  name: string;
  wallet: string;
}

interface ChatContentProps {
  selectedChatId: string;
  users: User[];
  getWalletById: (id: string) => string;
}

function ChatContent({ selectedChatId, users, getWalletById }: ChatContentProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const { address } = useAccount();
  const { currentUser } = useUser();

  useEffect(() => {
    if (!selectedChatId) return;

    // Create a query with ordering
    const messagesRef = collection(firestore, "privateChats", selectedChatId, "msg");
    const messagesQuery = query(messagesRef, orderBy("ts", "asc"));

    // Set up real-time listener
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const fetchedMessages: ChatMessage[] = [];
      snapshot.forEach((doc) => {
        const messageData = doc.data() as ChatMessage;
        if (messageData.txt && messageData.ts && messageData.from) {
          fetchedMessages.push(messageData);
        } else {
          console.log("Missing fields in document:", doc.id);
        }
      });
      console.log("Real-time Messages Update:", fetchedMessages);
      setMessages(fetchedMessages);
    }, (error) => {
      console.error("Error fetching messages:", error);
    });

    // Cleanup subscription on unmount or when selectedChatId changes
    return () => unsubscribe();
  }, [selectedChatId]);

  return (
    <div className="chatContent">
      {messages.map((message, index) => {
        const isOwnMessage = currentUser?.id ? message.from === currentUser.id : false;
        
        return (
          <Message
            key={index}
            text={message.txt}
            timeStamp={message.ts.toMillis()}
            from={message.from}
            own={isOwnMessage}
          />
        );
      })}
    </div>
  );
}

export default ChatContent;
