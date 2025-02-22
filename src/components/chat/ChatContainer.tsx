
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubble } from "./ChatBubble";
import { QuizOptions } from "./QuizOptions";

interface Message {
  id: string;
  text: string;
  isSent: boolean;
  type: "message" | "options" | "image";
  options?: { label: string; text: string }[];
  imageUrl?: string;
}

interface ChatContainerProps {
  messages: Message[];
  onOptionSelect: (label: string) => void;
  isWaitingForResponse?: boolean;
}

export const ChatContainer = ({ messages, onOptionSelect, isWaitingForResponse = false }: ChatContainerProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    console.log("Current messages:", messages);
  }, [messages]);

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#EFE7DE]">
      <div className="flex-1 overflow-y-auto p-4" dir="rtl">
        <AnimatePresence initial={false}>
          {messages && messages.map((message) => {
            if (!message || !message.type) {
              console.error("Invalid message:", message);
              return null;
            }
            
            return (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {message.type === "message" ? (
                  <ChatBubble message={message.text} isSent={message.isSent} />
                ) : message.type === "options" && message.options ? (
                  <QuizOptions
                    options={message.options}
                    onSelect={onOptionSelect}
                    disabled={isWaitingForResponse}
                  />
                ) : message.type === "image" && message.imageUrl ? (
                  <div className="max-w-sm mx-auto my-4">
                    <img 
                      src={message.imageUrl} 
                      alt="Question illustration"
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                      onError={(e) => {
                        console.error("Image failed to load:", message.imageUrl);
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoad={() => console.log("Image loaded successfully:", message.imageUrl)}
                    />
                  </div>
                ) : null}
              </motion.div>
            );
          })}
        </AnimatePresence>
        {isWaitingForResponse && (
          <div className="flex items-center space-x-2 p-2">
            <div className="animate-bounce w-2 h-2 bg-gray-500 rounded-full" />
            <div className="animate-bounce w-2 h-2 bg-gray-500 rounded-full delay-100" />
            <div className="animate-bounce w-2 h-2 bg-gray-500 rounded-full delay-200" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
