
import React from 'react';
import { format } from 'date-fns';

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
  const words = text.split('     ');
  const [keyword, ...rest] = words;
  const remainingText = rest.join('     ');

  const handleClick = () => {
    if (isOption && onOptionClick) {
      onOptionClick(keyword);
    }
  };

  return (
    <div 
      className={`flex mb-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`relative max-w-[85%] px-3 py-2 rounded-[18px]
          ${isUser 
            ? 'bg-[#e7fedd]' 
            : isOption 
              ? 'bg-white hover:bg-gray-50 cursor-pointer transition-colors' 
              : 'bg-white'
          }
          ${image ? '-mb-1' : ''}
        `}
        onClick={handleClick}
      >
        {showImage && image && (
          <div className="mb-1.5 -mx-3 -mt-2">
            <img 
              src={image} 
              alt="Question"
              className="w-full max-h-[200px] object-cover rounded-t-[18px]"
            />
          </div>
        )}
        <p className={`text-[15px] leading-[20px] text-[#111B21] ${isOption ? 'flex items-center justify-between' : ''}`}>
          {isOption ? (
            <>
              <span className="text-[#00A884] text-[15px] min-w-[20px]">{keyword}</span>
              <span className="flex-1 text-right">{remainingText}</span>
            </>
          ) : (
            text
          )}
        </p>
        <div className="flex justify-end mt-0.5">
          <span className="text-[11px] leading-[15px] text-[#667781]">
            {format(timestamp, 'HH:mm')}
          </span>
        </div>
      </div>
    </div>
  );
}
