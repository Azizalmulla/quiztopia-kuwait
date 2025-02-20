
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Moon, Stars } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-[#111] overflow-hidden">
      {/* Mascot Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/lovable-uploads/a9eb7d1f-f816-4a90-9609-4afa0cbd18df.png"
          alt="AiWalla Mascot"
          className="absolute w-[100%] h-[100%] object-contain opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        
        {/* Arabic Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-gradient-to-r from-white/20 to-white/30 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] right-[15%] w-40 h-40 bg-gradient-to-r from-white/30 to-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[25%] w-36 h-36 bg-gradient-to-r from-white/20 to-white/30 rounded-full blur-3xl"></div>
        </div>

        {/* Stars */}
        <div className="absolute top-20 left-[20%]">
          <Stars className="w-8 h-8 text-white opacity-30" />
        </div>
        <div className="absolute top-40 right-[25%]">
          <Moon className="w-6 h-6 text-white opacity-30" />
        </div>
        <div className="absolute bottom-32 left-[30%]">
          <Stars className="w-5 h-5 text-white opacity-30" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Content */}
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          {/* Brand Name */}
          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-white/20 via-white/30 to-white/20"></div>
            <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/80 relative">
              AiWalla
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-white/80 font-medium">
            اختبر معلوماتك
          </p>

          {/* Digital Lines */}
          <div className="flex gap-4 justify-center my-12 relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-white/10 to-white/20 opacity-75 blur-xl"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-white/20 to-white/30 opacity-75 blur-xl"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-white/30 to-white/10 opacity-75 blur-xl"></div>
          </div>

          {/* Main CTA Button */}
          <div className="pt-8">
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
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-white/60 text-sm flex items-center gap-2">
          <Moon className="w-4 h-4" />
          © 2024 AiWalla. All rights reserved.
          <Moon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Index;
