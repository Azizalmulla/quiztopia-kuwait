
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-[#111] flex items-center justify-center">
      <button
        onClick={() => navigate('/game')}
        className="group relative px-12 py-5 
        bg-white
        text-black text-2xl font-bold tracking-wide
        rounded-full
        shadow-[0_8px_32px_rgba(255,255,255,0.2)]
        transition-all duration-300 ease-out
        hover:shadow-[0_12px_40px_rgba(255,255,255,0.3)]
        hover:scale-105
        hover:rotate-1
        active:scale-98
        focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black
        glass-morphism"
      >
        <span className="flex items-center gap-3">
          ها نلعب؟
          <Coffee className="w-6 h-6" />
        </span>
      </button>
    </div>
  );
};

export default Index;
