'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled = false }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Auto resize textarea based on content
  const handleInput = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-end border rounded-lg overflow-hidden bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 focus-within:ring-2 focus-within:ring-cyan-400">
        <textarea
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          placeholder="Type your message..."
          disabled={disabled}
          rows={1}
          className="w-full py-3 px-4 resize-none focus:outline-none bg-transparent text-blue-900 dark:text-blue-50 placeholder-blue-500 dark:placeholder-blue-300"
        />
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className={`p-3 mr-1 mb-1 rounded-full ${
            message.trim() && !disabled
              ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500'
              : 'bg-blue-300 dark:bg-blue-700 cursor-not-allowed'
          } text-white transition-colors`}
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
