'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/sheet';
import { X, Plus, Bot } from 'lucide-react';
import { useStickyHeader } from '@/src/layout/header/utils/use-sticky-header';
import { cn } from '@/src/utils/shadcn';
import Image from 'next/image';
// Import from same directory
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

interface Message {
  content: string;
  isUser: boolean;
}

// Constants for local storage keys
const SESSION_ID_KEY = 'euclitics_chat_session_id';
const MESSAGES_KEY = 'euclitics_chat_messages';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);
  
  // Use the same scroll detection as the scroll-to-top button
  const isScrolled = useStickyHeader(700);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load session and messages from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedSessionId = localStorage.getItem(SESSION_ID_KEY);
      const savedMessages = localStorage.getItem(MESSAGES_KEY);
      
      if (savedSessionId) {
        setSessionId(savedSessionId);
      }
      
      if (savedMessages) {
        try {
          const parsedMessages = JSON.parse(savedMessages);
          setMessages(parsedMessages);
        } catch (error) {
          console.error('Error parsing saved messages:', error);
        }
      }
    }
  }, []);

  // Save session ID and messages to localStorage when they change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (typeof window !== 'undefined') {
      if (sessionId) {
        localStorage.setItem(SESSION_ID_KEY, sessionId);
      } else {
        localStorage.removeItem(SESSION_ID_KEY);
      }
      
      if (messages.length > 0) {
        localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
      } else {
        localStorage.removeItem(MESSAGES_KEY);
      }
    }
  }, [sessionId, messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Start a new chat session
  const startChatSession = useCallback(async () => {
    setLoading(true);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://eucliticsapi-8d00a0c4f606.herokuapp.com';
      const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
      
      const response = await fetch(`${apiUrl}/api/v1/chatbot/session`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'X-API-Key': apiKey,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to start chat session');
      }

      const data = await response.json();
      setSessionId(data.session_id);
      
      // Add welcome message only if there are no existing messages
      if (messages.length === 0) {
        setMessages([
          {
            content: 'Hello! I am Euclitics AI assistant. How can I help you today?',
            isUser: false,
          },
        ]);
      }
    } catch (error) {
      console.error('Error starting chat session:', error);
    } finally {
      setLoading(false);
    }
  }, [messages.length]);

  // Start chat session when component mounts or when chatbot is opened
  useEffect(() => {
    if (isOpen && !sessionId) {
      startChatSession();
    }
  }, [isOpen, sessionId, startChatSession]);

  // Clear chat session when page is reloaded
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (sessionId) {
        // Clear session on server
        clearChatSession(sessionId);
        
        // Clear local storage
        localStorage.removeItem(SESSION_ID_KEY);
        localStorage.removeItem(MESSAGES_KEY);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [sessionId]);

  // This function has been moved up with useCallback

  // Clear chat session
  const clearChatSession = async (id: string) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://eucliticsapi-8d00a0c4f606.herokuapp.com';
      const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
      
      await fetch(`${apiUrl}/api/v1/chatbot/session/${id}`, {
        method: 'DELETE',
        headers: {
          'accept': 'application/json',
          'X-API-Key': apiKey,
        },
      });
      
      // Clear local storage
      localStorage.removeItem(SESSION_ID_KEY);
      localStorage.removeItem(MESSAGES_KEY);
    } catch (error) {
      console.error('Error clearing chat session:', error);
    }
  };

  // Start a new chat
  const handleNewChat = async () => {
    if (sessionId) {
      await clearChatSession(sessionId);
    }
    setSessionId(null);
    setMessages([]);
    
    // Add welcome message immediately to improve user experience
    setMessages([
      {
        content: "Hi there! How can I assist you with Euclitics' IT services today?",
        isUser: false,
      },
    ]);
    
    // Then start a new chat session
    startChatSession();
  };

  // Send message to API
  const sendMessage = async (message: string) => {
    if (!sessionId || !message.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { content: message, isUser: true }]);
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://eucliticsapi-8d00a0c4f606.herokuapp.com';
      const apiKey = process.env.NEXT_PUBLIC_X_API_Key || 'euclitics-1uBqXJ9sDg5a7Pq2LkzTnY3VrEw6ZmQa';
      
      const response = await fetch(`${apiUrl}/api/v1/chatbot/chat`, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'X-API-Key': apiKey,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_id: sessionId,
          query: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      // Add bot response to chat
      setMessages((prev) => [...prev, { content: data.response, isUser: false }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prev) => [
        ...prev,
        { content: 'Sorry, there was an error processing your request. Please try again.', isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };



return (
  <div className={cn(
    "fixed right-6 z-[9999] transition-all duration-300",
    isScrolled ? "bottom-24" : "bottom-6"
  )}>
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <Bot size={24} />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full sm:w-[400px] p-0 border-l border-accent-200 dark:border-accent-700 bg-white dark:bg-accent-900 z-[9999]"
      >
        <div className="flex flex-col h-full">
            {/* Chatbot Header */}
            <div className="flex items-center justify-between p-4 border-b border-accent-200 dark:border-accent-700 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <h3 className="font-semibold">Euclitics Chat</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleNewChat}
                  className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="New chat"
                >
                  <Plus size={18} />
                </button>
                <SheetTrigger asChild>
                  <button
                    className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Close chat"
                  >
                    <X size={18} />
                  </button>
                </SheetTrigger>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
              {/* Background Logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 z-0">
                <Image 
                  src="/assets/images/brand/linklogo.png" 
                  alt="Euclitics Logo" 
                  className="w-3/4 h-auto object-contain"
                  width={300}
                  height={300}
                />
              </div>
              {messages.map((message, index) => (
                <ChatMessage
                  key={index}
                  content={message.content}
                  isUser={message.isUser}
                />
              ))}
              {loading && (
                <div className="flex justify-center relative z-10">
                  <div className="animate-pulse flex space-x-1">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <div className="h-2 w-2 bg-primary rounded-full animation-delay-150"></div>
                    <div className="h-2 w-2 bg-primary rounded-full animation-delay-300"></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Chat Input */}
            <div className="border-t border-accent-200 dark:border-accent-700 p-4">
              <ChatInput onSendMessage={sendMessage} disabled={loading || !sessionId} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Chatbot;
