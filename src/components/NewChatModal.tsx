import React from "react";
import { SlClose } from "react-icons/sl";

const NewChatModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>
          <SlClose size={20} />
        </button>
        <h2>Create a New Chat</h2>
        <p>To start a new chat, please select a contact from your list.</p>
        {/* Modal content here */}
      </div>
    </div>
  );
};

export default NewChatModal;