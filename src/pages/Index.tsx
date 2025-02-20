
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center gap-8 text-center p-4">
        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          AI والله
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400">
          Learn AI concepts through mini-games
        </p>

        {/* Button */}
        <button
          onClick={() => navigate('/game')}
          className="mt-8 flex items-center gap-2 px-8 py-3 
          bg-white
          text-black text-xl font-bold
          rounded-full
          shadow-lg
          transition-all duration-300 ease-out
          hover:shadow-xl
          hover:scale-105
          active:scale-98
          focus:outline-none"
        >
          ها نلعب؟
          <Coffee className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Index;
