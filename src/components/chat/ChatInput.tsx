
import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isProcessing: boolean;
}

export const ChatInput = ({ value, onChange, onSubmit, isProcessing }: ChatInputProps) => {
  return (
    <form onSubmit={onSubmit} className="sticky bottom-0 z-10">
      <div className="flex items-center gap-2 p-2 bg-[#F0F2F5]">
        <button 
          type="submit"
          className="p-2 rounded-full bg-[#00A884] hover:bg-[#017561] transition-colors"
          disabled={isProcessing}
        >
          <Send className="w-6 h-6 text-white" />
        </button>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="اكتب رسالتك هنا..."
          className="flex-1 rounded-full px-4 py-2 text-right bg-white border-0 focus:ring-0 focus:outline-none text-[15px]"
          dir="rtl"
          disabled={isProcessing}
        />
      </div>
    </form>
  );
};
