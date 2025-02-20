
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Brain, ChevronRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#0A0F1E] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/10 to-slate-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                backgroundColor: '#4B0082',
                borderRadius: '50%',
                animation: `pulse ${Math.random() * 4 + 2}s infinite`,
                filter: 'blur(1px)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center gap-12 text-center p-4 animate-fade-in">
        {/* Logo/Title Area */}
        <div className="relative">
          <Brain className="w-24 h-24 md:w-32 md:h-32 text-violet-300 animate-float mb-8 drop-shadow-[0_0_15px_rgba(139,92,246,0.15)]" />
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300">
            AI والله
          </h1>
          <Sparkles className="absolute -top-4 -right-4 text-violet-200 animate-spin-slow w-8 h-8" />
        </div>
        
        {/* Subtitle with glass effect */}
        <div className="relative glass rounded-2xl px-8 py-4 backdrop-blur-md bg-white/[0.02]">
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            Learn AI concepts through mini-games
          </p>
          <div className="absolute -inset-[1px] -z-10 rounded-2xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 blur-sm" />
        </div>

        {/* CTA Button */}
        <button
          onClick={() => navigate('/game')}
          className="mt-8 group relative flex items-center gap-3 px-10 py-4 
          bg-gradient-to-r from-violet-600 to-fuchsia-600
          text-white text-xl font-bold
          rounded-2xl
          shadow-lg shadow-violet-950/50
          transition-all duration-300 ease-out
          hover:shadow-xl hover:shadow-violet-950/60
          hover:-translate-y-1
          active:translate-y-0
          focus:outline-none
          animate-fade-in
          overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            ها نلعب؟
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Kuwaiti-inspired decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007A3D] via-[#FFFFFF] to-[#CE1126] opacity-20 blur-sm" />
      </div>
    </div>
  );
};

export default Index;
