
import React, { useEffect, useState } from 'react';

interface QuizTimerProps {
  duration: number;
  onTimeUp: () => void;
  isActive: boolean;
}

export function QuizTimer({ duration, onTimeUp, isActive }: QuizTimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (!isActive) return;
    
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp, isActive]);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-700">{timeLeft}</span>
      </div>
    </div>
  );
}
