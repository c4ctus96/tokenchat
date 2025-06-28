import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./Firebase";
import { useUser } from "./UserContext";
import { IoSend, IoCard } from "react-icons/io5";
import { TransactionData } from "./SendTransactionModal";

interface ChatBottomBarProps {
  selectedChatId?: string;
  onSendTransaction?: (recipientUser: { id: string; name: string; wallet: string }) => void;
  recipientUser?: { id: string; name: string; wallet: string };
}

const SendMessage = async (txt: string, from: string, chatId: string, messageType: 'text' | 'transaction' = 'text', transactionData?: TransactionData) => {
  try {
    const chatMessagesCollectionRef = collection(
      firestore,
      "privateChats",
      chatId,
      "msg"
    );
    
    const messageData: any = {
      txt: txt,
      from: from,
      ts: new Date(),
      type: messageType,
    };

    // Add transaction data if it's a transaction message
    if (messageType === 'transaction' && transactionData) {
      messageData.transactionData = transactionData;
    }

    await addDoc(chatMessagesCollectionRef, messageData);
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

const ChatBottomBar: React.FC<ChatBottomBarProps> = ({ 
  selectedChatId, 
  onSendTransaction,
  recipientUser 
}) => {
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

  const handleSendTransaction = () => {
    if (!recipientUser || !onSendTransaction) {
      console.error("Missing recipient data for transaction");
      return;
    }
    onSendTransaction(recipientUser);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Handle transaction completion
  const handleTransactionSent = async (transactionData: TransactionData) => {
    if (!selectedChatId || !currentUser) return;

    // Create a transaction message in the chat
    const transactionMessage = `Sent ${transactionData.amount} ${getTokenSymbol(transactionData.chainId)} to ${transactionData.recipientName}`;
    
    await SendMessage(
      transactionMessage,
      currentUser.id,
      selectedChatId,
      'transaction',
      transactionData
    );
  };

  // Helper function to get token symbol based on chain
  const getTokenSymbol = (chainId: number): string => {
    switch (chainId) {
      case 1: return 'ETH';
      case 137: return 'MATIC';
      case 42161: return 'ETH';
      case 10: return 'ETH';
      case 8453: return 'ETH';
      default: return 'ETH';
    }
  };

  return (
    <div className="chatBottomBar">
      <input
        type="text"
        className="messageInput"
        placeholder="Type your message"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      
      {/* Transaction Button */}
      <button
        className="transactionButton"
        onClick={handleSendTransaction}
        disabled={!selectedChatId || !currentUser || !recipientUser}
        title="Send crypto"
      >
        <IoCard size={20} />
      </button>

      {/* Send Message Button */}
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

// Export both the component and the helper function for external use
export { SendMessage };
export default ChatBottomBar;