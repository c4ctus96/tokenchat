import React from "react";
import { useAccount } from "wagmi";
import { IoArrowBack } from "react-icons/io5";
import EthProfilePic from "./EthProfilePic";
import "../styles.css";

interface ChatHeaderProps {
  chatName: string;
  onBack: () => void;
  showBackButton: boolean;
  showProfilePic?: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  chatName, 
  onBack, 
  showBackButton,
  showProfilePic = false 
}) => {
  const { address } = useAccount();

  return (
    <div className="chat-header">
      <div className="chat-header-left">
        {showBackButton && (
          <button 
            className="back-button"
            onClick={onBack}
            title="Go back"
          >
            <IoArrowBack size={24} />
          </button>
        )}
        <div className="chat-header-info">
          <h2 className="chat-header-title">{chatName}</h2>
        </div>
      </div>
      
      <div className="chat-header-right">
        {(showProfilePic || !showBackButton) && address && (
          <div className="header-profile-pic">
            <EthProfilePic eth={address} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;