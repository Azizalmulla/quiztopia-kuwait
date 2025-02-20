
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white overflow-hidden">
      {/* Mascot Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <img
          src="/lovable-uploads/24d532d7-e4f2-4b93-a8b9-e37b26d3e741.png"
          alt="AiWalla Mascot"
          className="w-[80%] max-w-[800px] object-contain"
        />
      </div>

      {/* Button */}
      <div className="relative z-10 flex items-end justify-center min-h-screen pb-32">
        <button
          onClick={() => navigate('/game')}
          className="group relative px-12 py-5 
          bg-black
          text-white text-2xl font-bold tracking-wide
          rounded-full
          shadow-[0_8px_32px_rgba(0,0,0,0.2)]
          transition-all duration-300 ease-out
          hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
          hover:scale-105
          hover:rotate-1
          active:scale-98
          focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 focus:ring-offset-white"
        >
          <span className="flex items-center gap-3">
            ها نلعب؟
            <Coffee className="w-6 h-6" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Index;
