'use client';

import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isUser }) => {
  return (
    <div
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} relative z-10`}
    >
      <div
        className={`flex max-w-[85%] ${
          isUser
            ? 'flex-row-reverse'
            : 'flex-row'
        }`}
      >
        {/* Avatar */}
        <div
          className={`flex-shrink-0 flex items-start justify-center w-8 h-8 rounded-full ${
            isUser
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 ml-2'
              : 'bg-accent-700 dark:bg-accent-800 mr-2'
          }`}
        >
          {isUser ? (
            <User size={16} className="text-white mt-1.5" />
          ) : (
            <Bot size={16} className="text-white mt-1.5" />
          )}
        </div>

        {/* Message Content */}
        <div
          className={`py-2 px-3 rounded-2xl ${
            isUser
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
              : 'bg-accent-100 dark:bg-accent-700 text-accent-900 dark:text-white'
          }`}
        >
          <p className="text-sm whitespace-pre-wrap">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
