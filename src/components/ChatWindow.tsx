import React, { ReactNode } from "react";
import "../styles.css";
import ChatBottomBar from "./ChatBottomBar";

interface User {
  id: string;
  name: string;
  wallet: string;
}

interface ChatWindowProps {
  children?: ReactNode;
  selectedChatId?: string;
  onSendTransaction?: (recipientUser: User) => void;
  recipientUser?: User | null;
}

function ChatWindow({ 
  children, 
  selectedChatId, 
  onSendTransaction,
  recipientUser 
}: ChatWindowProps) {
  return (
    <div className="chatWindow">
      <div className="chatContent">{children}</div>
      <ChatBottomBar 
        selectedChatId={selectedChatId} 
        onSendTransaction={onSendTransaction}
        recipientUser={recipientUser || undefined}
      />
    </div>
  );
}

export default ChatWindow;