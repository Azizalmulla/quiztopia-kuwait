
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Rocket, PartyPopper } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-zinc-900 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] right-[15%] w-40 h-40 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[25%] w-36 h-36 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
        </div>

        {/* Animated Particles */}
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
        <div className="text-center space-y-8 max-w-3xl mx-auto animate-fade-in">
          {/* Mascot Image */}
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <img
              src="/lovable-uploads/a9eb7d1f-f816-4a90-9609-4afa0cbd18df.png"
              alt="AiWalla Mascot"
              className="relative w-full h-full object-contain drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            />
          </div>
          
          {/* Brand Name */}
          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400"></div>
            <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 animate-pulse relative">
              AiWalla
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-300 font-medium">
            اختبر معلوماتك
          </p>

          {/* Digital Lines */}
          <div className="flex gap-4 justify-center my-12 relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-75 blur-xl animate-pulse"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 blur-xl animate-pulse delay-100"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-75 blur-xl animate-pulse delay-200"></div>
          </div>

          {/* Main CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => navigate('/game')}
              className="group relative px-12 py-5 
              bg-gradient-to-r from-emerald-500 to-teal-500
              text-white text-2xl font-medium tracking-wide
              rounded-full
              shadow-[0_8px_32px_rgba(16,185,129,0.3)]
              transition-all duration-300 ease-out
              hover:shadow-[0_12px_40px_rgba(16,185,129,0.45)]
              hover:scale-105
              hover:rotate-1
              active:scale-98
              focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-black
              glass-morphism"
            >
              <span className="flex items-center gap-3">
                ها نلعب؟
                <Rocket className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-rotate-12" />
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-gray-400 text-sm flex items-center gap-2 animate-pulse">
          <PartyPopper className="w-4 h-4" />
          © 2024 AiWalla. All rights reserved.
          <PartyPopper className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Index;
