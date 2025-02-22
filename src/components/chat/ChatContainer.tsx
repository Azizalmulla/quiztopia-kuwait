
import React, { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatMessageType } from '@/types/game';

interface ChatContainerProps {
  messages: ChatMessageType[];
  onOptionClick?: (text: string) => void;
}

export const ChatContainer = ({ messages, onOptionClick }: ChatContainerProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-3 py-2">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          text={message.text}
          isUser={message.isUser}
          timestamp={message.timestamp}
          image={message.image}
          isOption={message.isOption}
          onOptionClick={message.isOption ? onOptionClick : undefined}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
