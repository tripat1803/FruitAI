// ChatPopup.jsx
import React, { useState } from 'react';
import { useChatHook } from './useChatHook';

function ChatPopup() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { isInitialized, error } = useChatHook("7823827825");

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  if (!isInitialized) {
    return <div>Loading chatbot...</div>;
  }

  if (error) {
    return <div>Error initializing chatbot: {error.message}</div>;
  }

  return (
    <div className={`chat-popup ${isChatOpen ? 'open' : ''}`}>
      <button onClick={handleChatToggle}>Open Chat</button>
      <div id="chat-container" />
    </div>
  );
}

export default ChatPopup;
