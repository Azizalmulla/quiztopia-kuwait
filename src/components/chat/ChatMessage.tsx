
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

  const [label, ...textParts] = text.split(' ');
  const remainingText = textParts.join(' ');

  if (isOption) {
    return (
      <div className="flex mb-2 justify-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          className="flex items-center justify-between w-full max-w-[80%] px-4 py-3 bg-white rounded-xl cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          <span className="text-[#111B21] text-[15px] leading-5 flex-1 text-right" dir="rtl">
            {remainingText}
          </span>
          <span className="text-[#00A884] font-medium min-w-[24px] ml-3">
            {label}
          </span>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`flex mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <motion.div 
        initial={{ opacity: 0, x: isUser ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "relative max-w-[80%] px-4 py-2 rounded-xl",
          isUser ? "bg-[#e7fedd] rounded-tr-none" : "bg-white rounded-tl-none",
          image && "overflow-hidden"
        )}
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
        <div className="flex items-center gap-3">
          <span className={`text-[15px] leading-5 text-[#111B21] flex-1 ${isUser ? 'text-right' : 'text-left'}`} dir={isUser ? 'rtl' : 'ltr'}>
            {text}
          </span>
        </div>
        <div className="flex justify-end mt-1">
          <span className="text-[10px] text-[#8696a0]">
            {format(timestamp, 'hh:mm a')}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
