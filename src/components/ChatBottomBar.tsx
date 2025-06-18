import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./Firebase";
import { useUser } from "./UserContext";
import { IoSend } from "react-icons/io5";

interface ChatBottomBarProps {
  selectedChatId?: string;
}

const SendMessage = async (txt: string, from: string, chatId: string) => {
  try {
    const chatMessagesCollectionRef = collection(
      firestore,
      "privateChats",
      chatId,
      "msg"
    );
    await addDoc(chatMessagesCollectionRef, {
      txt: txt,
      from: from,
      ts: new Date(),
    });
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

const ChatBottomBar: React.FC<ChatBottomBarProps> = ({ selectedChatId }) => {
  const [inputValue, setInputValue] = React.useState("");
  const { currentUser } = useUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (!selectedChatId || !currentUser || !inputValue.trim()) {
      console.error("Missing required data:", { selectedChatId, currentUser, inputValue });
      return;
    }
    
    SendMessage(inputValue, currentUser.id, selectedChatId);
    setInputValue(""); // Clear input after sending
  };

  return (
    <div className="chatBottomBar">
      <input
        type="text"
        className="messageInput"
        placeholder="Type your message"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className="sendMessageButton"
        onClick={handleSend}
        disabled={!selectedChatId || !currentUser}
        title="Send message"
      >
        <IoSend size={20} />
      </button>
    </div>
  );
};

export default ChatBottomBar;