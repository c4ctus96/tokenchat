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

const SendMessage = async (
  txt: string, 
  from: string, 
  chatId: string, 
  messageType: 'text' | 'transaction' = 'text', 
  transactionData?: TransactionData
) => {
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
    throw error;
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

  const handleSend = async () => {
    if (!selectedChatId || !currentUser || !inputValue.trim()) {
      console.error("Missing required data:", { selectedChatId, currentUser, inputValue });
      return;
    }

    try {
      await SendMessage(inputValue.trim(), currentUser.id, selectedChatId);
      setInputValue(""); // Clear input after sending
    } catch (error) {
      console.error("Failed to send message:", error);
      // Optionally show error to user
    }
  };

  const handleSendTransaction = () => {
    if (!recipientUser || !onSendTransaction) {
      console.error("Missing recipient data for transaction");
      return;
    }
    onSendTransaction(recipientUser);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatBottomBar">
      <input
        type="text"
        className="messageInput"
        placeholder="Type your message..."
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
        disabled={!selectedChatId || !currentUser || !inputValue.trim()}
        title="Send message"
      >
        <IoSend size={20} />
      </button>
    </div>
  );
};

// Helper function to send transaction messages to chat
export const SendTransactionMessage = async (
  transactionData: TransactionData,
  chatId: string,
  senderId: string
) => {
  try {
    // Create a descriptive message text with comment if available
    let messageText = `Sent ${transactionData.amount} ${getTokenSymbol(transactionData.chainId)} to ${transactionData.recipientName}`;
    
    if (transactionData.comment) {
      messageText += ` - ${transactionData.comment}`;
    }
    
    await SendMessage(
      messageText,
      senderId,
      chatId,
      'transaction',
      transactionData
    );
    
    console.log("Transaction message sent to chat");
  } catch (error) {
    console.error("Failed to send transaction message:", error);
    throw error;
  }
};

// Helper function to get token symbol based on chain
const getTokenSymbol = (chainId: number): string => {
  switch (chainId) {
    case 1: return 'ETH';
    case 56: return 'BNB';
    case 137: return 'MATIC';
    case 42161: return 'ETH';
    case 10: return 'ETH';
    case 8453: return 'ETH';
    case 43114: return 'AVAX';
    case 250: return 'FTM';
    default: return 'ETH';
  }
};

// Export both the component and the helper functions for external use
export { SendMessage };
export default ChatBottomBar;