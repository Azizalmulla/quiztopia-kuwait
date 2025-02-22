
import React from 'react';
import { format } from 'date-fns';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  text: string;
  isUser: boolean;
  timestamp: Date;
  image?: string;
  showImage?: boolean;
  isOption?: boolean;
  onOptionClick?: (text: string) => void;
}

export function ChatMessage({ 
  text, 
  isUser, 
  timestamp, 
  image, 
  showImage = true, 
  isOption = false,
  onOptionClick 
}: ChatMessageProps) {
  const handleClick = () => {
    if (isOption && onOptionClick) {
      onOptionClick(text);
    }
  };

  const MessageContainer = isOption ? motion.div : 'div';
  const messageProps = isOption ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  } : {};

  return (
    <div 
      className={`flex mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}
      dir="rtl"
    >
      <MessageContainer 
        className={cn(
          "relative max-w-[85%] px-4 py-2 rounded-xl",
          isUser ? "bg-[#e7fedd]" : "bg-white",
          isOption && "hover:bg-gray-50 cursor-pointer active:bg-gray-100 transition-colors",
          image && "overflow-hidden"
        )}
        onClick={handleClick}
        {...messageProps}
      >
        {showImage && image && (
          <div className="mb-2 -mx-4 -mt-2">
            <img 
              src={image} 
              alt="Question"
              className="w-full max-h-[200px] object-cover"
            />
          </div>
        )}
        <div className="flex items-center justify-between gap-3">
          {isOption && (
            <span className="text-[#00A884] font-medium min-w-[24px]">
              {text.split(' ')[0]}
            </span>
          )}
          <span className="text-[15px] leading-5 text-[#111B21] flex-1">
            {isOption ? text.split(' ').slice(1).join(' ') : text}
          </span>
        </div>
        <div className="flex justify-end mt-1">
          <span className="text-[11px] text-[#8696a0]">
            {format(timestamp, 'HH:mm')}
          </span>
        </div>
      </MessageContainer>
    </div>
  );
}
