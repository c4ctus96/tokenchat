import React, { ReactNode } from "react";
import "../styles.css";

interface ChatWindowProps {
  children?: ReactNode; // Allow ChatWindow to accept children
}

function ChatWindow({ children }: ChatWindowProps) {
  return (
    <div className="chatWindow">
      <div className="chatContent">{children}</div> {/* Render children here */}
      <div className="chatBottomBar">
        <input
          type="text"
          className="messageInput"
          placeholder="Type your message"
        />
        <button className="sendMessageButton">Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
