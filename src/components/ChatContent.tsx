import React, { useState, useEffect, useRef } from "react";
import { firestore } from "./Firebase";
import { collection, query, orderBy, onSnapshot, Timestamp } from "firebase/firestore";
import Message from "./Message";
import TransactionMessage from "./TransactionMessage";
import { useAccount } from "wagmi";
import { useUser } from "./UserContext";
import { TransactionData } from "./SendTransactionModal";

interface ChatMessage {
  txt: string;
  ts: Timestamp;
  from: string;
  type?: 'text' | 'transaction';
  transactionData?: TransactionData;
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
  onSendTransaction?: (recipientUser: User) => void;
  recipientUser?: User | null;
}

function ChatContent({ 
  selectedChatId, 
  users, 
  getWalletById, 
  onSendTransaction,
  recipientUser 
}: ChatContentProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const { address } = useAccount();
  const { currentUser } = useUser();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom function
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        
        // Render transaction messages differently
        if (message.type === 'transaction' && message.transactionData) {
          return (
            <TransactionMessage
              key={index}
              transaction={message.transactionData}
              own={isOwnMessage}
              timeStamp={message.ts.toMillis()}
            />
          );
        }

        // Render regular text messages
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
      <div ref={messagesEndRef} /> {/* Invisible element to scroll to */}
    </div>
  );
}

export default ChatContent;