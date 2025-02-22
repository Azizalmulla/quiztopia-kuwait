
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface QuizOptionsProps {
  options: { label: string; text: string }[];
  onSelect: (label: string) => void;
  disabled?: boolean;
}

export const QuizOptions = ({ options, onSelect, disabled = false }: QuizOptionsProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 w-full max-w-md mx-auto mt-4" dir="rtl">
      {options.map((option, index) => (
        <motion.button
          key={option.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          onClick={() => !disabled && onSelect(option.label)}
          className={cn(
            "p-3 rounded-lg text-right flex items-center justify-between",
            "bg-white/90 backdrop-blur-sm shadow-sm",
            "hover:bg-gray-50 transition-colors duration-200",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          disabled={disabled}
        >
          <span className="text-[#00A884] font-semibold">{option.label}</span>
          <span className="text-gray-700">{option.text}</span>
        </motion.button>
      ))}
    </div>
  );
};
