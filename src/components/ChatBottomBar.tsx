import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./Firebase";


// Updated SendMessage: correct collection name, field names, and error handling
const SendMessage = async (txt: string, from: string) => {
  try {
    const chatMessagesCollectionRef = collection(
      firestore,
      "privateChats",
      "hLzFtbmaVBgQ5k9SQUCV",
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

const ChatBottomBar: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
        onClick={() => SendMessage("message sent from a hardcoded function", "lv5U8K94q8WQAA1gtjES")}
      >
        Send
      </button>
    </div>
  );
};

export default ChatBottomBar;