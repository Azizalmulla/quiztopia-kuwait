
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Rocket, PartyPopper } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[20%] animate-bounce delay-100">
          <PartyPopper className="w-8 h-8 text-yellow-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-[25%] animate-bounce delay-300">
          <Sparkles className="w-6 h-6 text-purple-400 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-[30%] animate-bounce delay-500">
          <Sparkles className="w-5 h-5 text-emerald-400 opacity-60" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto animate-fade-in">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 animate-pulse">
              AiWalla
            </h1>
            <div className="absolute -top-8 -right-8 animate-spin-slow">
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            اختبر معرفتك بالكويت من خلال مجموعة متنوعة من الأسئلة الشيقة
          </p>

          {/* Animated Decorative elements */}
          <div className="flex gap-4 justify-center my-8 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-75 blur-xl animate-pulse"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 blur-xl animate-pulse delay-100"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-75 blur-xl animate-pulse delay-200"></div>
          </div>

          {/* Main CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => navigate('/game')}
              className="group relative px-10 py-4 
              bg-gradient-to-r from-emerald-500 to-teal-500
              text-white text-xl font-medium tracking-wide
              rounded-full
              shadow-[0_8px_32px_rgba(16,185,129,0.3)]
              transition-all duration-300 ease-out
              hover:shadow-[0_12px_40px_rgba(16,185,129,0.45)]
              hover:scale-105
              active:scale-98
              focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span className="flex items-center gap-2">
                ها نلعب؟
                <Rocket className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Fun Pattern */}
          <div className="absolute bottom-24 left-0 right-0 h-32 opacity-10 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 blur-3xl"></div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-gray-500 text-sm flex items-center gap-2">
          <PartyPopper className="w-4 h-4" />
          © 2024 AiWalla. All rights reserved.
          <PartyPopper className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Index;
