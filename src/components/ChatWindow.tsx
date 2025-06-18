import React, { ReactNode } from "react";
import "../styles.css";
import ChatBottomBar from "./ChatBottomBar";

interface ChatWindowProps {
  children?: ReactNode; // Allow ChatWindow to accept children
  selectedChatId?: string; // Add this prop
}

function ChatWindow({ children, selectedChatId }: ChatWindowProps) {
  return (
    <div className="chatWindow">
      <div className="chatContent">{children}</div> {/* Render children here */}
      <ChatBottomBar selectedChatId={selectedChatId} />
    </div>
  );
}

export default ChatWindow;
