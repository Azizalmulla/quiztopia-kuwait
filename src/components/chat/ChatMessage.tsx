
import React from 'react';
import { format } from 'date-fns';

interface ChatMessageProps {
  text: string;
  isUser: boolean;
  timestamp: Date;
  image?: string;
  showImage?: boolean;
  isOption?: boolean;
}

export function ChatMessage({ text, isUser, timestamp, image, showImage = true, isOption = false }: ChatMessageProps) {
  const words = text.split('     ');
  const [keyword, ...rest] = words;
  const remainingText = rest.join('     ');

  return (
    <div 
      className={`flex mb-2 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`relative max-w-[85%] px-4 py-2 rounded-2xl
          ${isUser 
            ? 'bg-[#e7fedd]' 
            : isOption ? 'bg-white' : 'bg-white'
          }
        `}
      >
        {showImage && image && (
          <div className="mb-2 -mx-4 -mt-2">
            <img 
              src={image} 
              alt="Question"
              className="w-full max-h-[200px] object-cover rounded-t-2xl"
            />
          </div>
        )}
        <p className="text-[15px] leading-5 text-[#111B21]">
          {isOption ? (
            <>
              <span className="text-[#00A884] ml-2">{keyword}</span>
              {remainingText}
            </>
          ) : (
            text
          )}
        </p>
        <div className="flex justify-end mt-1">
          <span className="text-[11px] text-[#8696a0]">
            {format(timestamp, 'HH:mm')}
          </span>
        </div>
      </div>
    </div>
  );
}
