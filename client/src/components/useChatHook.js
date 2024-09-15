// useChatHook.js
import { useState, useEffect } from 'react';

export function useChatHook(chatbotId) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadChatlingScript = () => {
      const script = document.createElement('script');
      script.id = 'chatling-embed-script';
      script.type = 'text/javascript';
      script.src = 'https://chatling.ai/js/embed.js';
      script.async = true;
      script.defer = true;

      script.onload = () => {
        if (typeof window.chatbotInit === 'function') {
          try {
            window.chatbotInit({
              chatbotId,
              display: "popup"
            });
            setIsInitialized(true);
          } catch (initError) {
            setError(initError);
          }
        } else {
          setError(new Error('chatbotInit is not a function'));
        }
      };

      script.onerror = () => {
        setError(new Error('Failed to load Chatling script'));
      };

      document.body.appendChild(script);

      return () => {
        if (document.getElementById('chatling-embed-script')) {
          document.body.removeChild(document.getElementById('chatling-embed-script'));
        }
      };
    };

    loadChatlingScript();
  }, [chatbotId]);

  return { isInitialized, error };
}
