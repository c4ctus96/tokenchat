import React, { ReactNode } from "react";
import "../styles.css";
import ChatBottomBar from "./ChatBottomBar";

interface ChatWindowProps {
  children?: ReactNode; // Allow ChatWindow to accept children
}

function ChatWindow({ children }: ChatWindowProps) {
  return (
    <div className="chatWindow">
      <div className="chatContent">{children}</div> {/* Render children here */}
      <ChatBottomBar />
    </div>
  );
}

export default ChatWindow;
