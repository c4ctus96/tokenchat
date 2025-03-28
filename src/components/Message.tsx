import React from "react";

interface MessageProps {
  text: string;
  timeStamp: number; // Expecting timeStamp as a number in milliseconds
  from: string;
  own: boolean;
}

const Message: React.FC<MessageProps> = ({ text, timeStamp, from, own }) => {
  return (
    <div className="messageBox">
      <div className={`message ${own ? 'own' : ''}`}>
        <p className="message-text">{text}</p>
        <p className="message-timestamp">{new Date(timeStamp).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Message;
