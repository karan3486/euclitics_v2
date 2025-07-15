'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { Chatbot } from './index';

// Create context for chatbot
const ChatbotContext = createContext<null>(null);

interface ChatbotProviderProps {
  children?: React.ReactNode;
}

export const ChatbotProvider: React.FC<ChatbotProviderProps> = ({
  children,
}) => {
  // Handle page reload to clear chat session
  useEffect(() => {
    // This effect runs only on client-side
    const clearChatSessionOnReload = async () => {
      // Get session ID from local storage if it exists
      const sessionId = localStorage.getItem('euclitics_chat_session_id');
      
      if (sessionId) {
        try {
          const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://eucliticsapi-8d00a0c4f606.herokuapp.com';
          const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
          
          // Clear the chat session
          await fetch(`${apiUrl}/api/v1/chatbot/session/${sessionId}`, {
            method: 'DELETE',
            headers: {
              'accept': 'application/json',
              'X-API-Key': apiKey,
            },
          });
          
          // Remove session ID from local storage
          localStorage.removeItem('euclitics_chat_session_id');
        } catch (error) {
          console.error('Error clearing chat session on reload:', error);
        }
      }
    };

    // Clear chat session when page is loaded (not on hot reloads during development)
    if (typeof window !== 'undefined') {
      // Check if this is an actual page load, not a hot module reload
      const isPageReload = !window.performance
        .getEntriesByType('navigation')
        .map((nav) => (nav as PerformanceNavigationTiming).type)
        .includes('reload');

      if (isPageReload) {
        clearChatSessionOnReload();
      }
    }
  }, []);

  return (
    <ChatbotContext.Provider value={null}>
      {children}
      <Chatbot />
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => useContext(ChatbotContext);

// Default export
export default ChatbotProvider;
