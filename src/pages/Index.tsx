
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Brain, ChevronRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#1A1F2C] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                backgroundColor: '#fff',
                borderRadius: '50%',
                animation: `pulse ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center gap-8 text-center p-4 animate-fade-in">
        {/* Logo/Title Area */}
        <div className="relative">
          <Brain className="w-24 h-24 md:w-32 md:h-32 text-blue-400 animate-pulse mb-4" />
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFE29F] to-[#FFA99F]">
            AI والله
          </h1>
          <Sparkles className="absolute -top-4 right-0 text-yellow-400 animate-spin-slow w-8 h-8" />
        </div>
        
        {/* Subtitle with gradient underline */}
        <div className="relative">
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Learn AI concepts through mini-games
          </p>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/game')}
          className="mt-8 group flex items-center gap-3 px-8 py-4 
          bg-gradient-to-r from-blue-500 to-purple-500
          text-white text-xl font-bold
          rounded-full
          shadow-lg shadow-purple-500/25
          transition-all duration-300 ease-out
          hover:shadow-xl hover:shadow-purple-500/40
          hover:scale-105
          active:scale-98
          focus:outline-none
          animate-fade-in"
        >
          ها نلعب؟
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </button>

        {/* Kuwaiti-inspired decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#007A3D] via-[#FFFFFF] to-[#CE1126] opacity-50" />
      </div>
    </div>
  );
};

export default Index;
