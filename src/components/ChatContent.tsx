import React, { useState, useEffect } from "react";
import { firestore } from "./Firebase";
import { collection, getDocs, Timestamp } from "firebase/firestore";
import Message from "./Message";
import { useAccount } from "wagmi";
import { useUser } from "./UserContext";

interface ChatMessage {
  txt: string;     // Updated field name
  ts: Timestamp;   // Updated field name
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
  const { address } = useAccount(); // Current user's address from wagmi
  const { currentUser } = useUser();  // Get currentUser from context

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestore, "privateChats", selectedChatId, "msg")
        );
        const fetchedMessages: ChatMessage[] = [];
        querySnapshot.forEach((doc) => {
          const messageData = doc.data() as ChatMessage;
          console.log(doc.id, " => ", messageData);
          if (messageData.txt && messageData.ts && messageData.from) {
            fetchedMessages.push(messageData);
          } else {
            console.log("Missing fields in document:", doc.id);
          }
        });
        console.log("Fetched Messages:", fetchedMessages);
        setMessages(fetchedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    fetchMessages();
  }, [selectedChatId]);

  return (
    <div className="chatContent">
      {[...messages].reverse().map((message, index) => {
        console.log(
          "message from id:",
          message.from,
          "current user id:",
          currentUser?.id,
          "current user wallet:",
          currentUser?.wallet,
          "ownership:",
          message.from === currentUser?.id  // Changed comparison here
        );
        return (
          <Message
            key={index}
            text={message.txt} // Using 'txt' field
            timeStamp={message.ts.toMillis()} // Convert timestamp to milliseconds
            from={message.from}
            own={message.from === currentUser?.id}  // Compare with wallet instead of id
          />
        );
      })}
    </div>
  );
}

export default ChatContent;
