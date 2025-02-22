
import React from 'react';
import { format } from 'date-fns';

interface ChatMessageProps {
  text: string;
  isUser: boolean;
  timestamp: Date;
  image?: string;
}

export function ChatMessage({ text, isUser, timestamp, image }: ChatMessageProps) {
  return (
    <div 
      className={`flex mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`relative max-w-[85%] px-3 py-2 rounded-lg
          ${isUser 
            ? 'bg-[#F2FCE2] mr-1' 
            : 'bg-[#F1F1F1] ml-1'
          }
          ${image ? 'overflow-hidden' : ''}
        `}
      >
        {image && (
          <div className="mb-1 -mx-3 -mt-2">
            <img 
              src={image} 
              alt="Question"
              className="w-full max-h-[200px] object-cover"
            />
          </div>
        )}
        <p className="text-[15px] leading-5 text-[#111B21]">{text}</p>
        <div className="flex justify-end mt-1 -mb-1">
          <span className="text-[11px] text-[#667781]">
            {format(timestamp, 'HH:mm')}
          </span>
        </div>
      </div>
    </div>
  );
}
