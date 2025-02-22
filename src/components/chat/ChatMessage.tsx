
import React from 'react';
import { format } from 'date-fns';
import { Check } from 'lucide-react';

interface ChatMessageProps {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatMessage({ text, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`rounded-lg px-4 py-2 max-w-[80%] relative ${
        isUser ? 'bg-[#DCF8C6]' : 'bg-white'
      }`}>
        <p className={`text-sm ${isUser ? 'text-[#303030]' : 'text-[#303030]'}`}>{text}</p>
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-xs text-gray-500">
            {format(timestamp, 'HH:mm')}
          </span>
          {isUser && (
            <div className="flex">
              <Check className="w-3 h-3 text-[#4FC3F7]" />
              <Check className="w-3 h-3 -ml-1 text-[#4FC3F7]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
