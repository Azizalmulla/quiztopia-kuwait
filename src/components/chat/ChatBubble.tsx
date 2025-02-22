
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ChatBubbleProps {
  message: string;
  isSent?: boolean;
  showTimestamp?: boolean;
}

export const ChatBubble = ({ message, isSent = false, showTimestamp = true }: ChatBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isSent ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "max-w-[80%] rounded-lg px-4 py-2 mb-2",
        isSent ? "ml-auto bg-[#e7fedd]" : "bg-white",
        isSent ? "rounded-tr-none" : "rounded-tl-none"
      )}
    >
      <p className="text-gray-800 text-sm">{message}</p>
      {showTimestamp && (
        <p className="text-[10px] text-gray-500 text-right mt-1">
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      )}
    </motion.div>
  );
};
