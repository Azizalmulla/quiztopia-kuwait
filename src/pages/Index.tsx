
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Moon, Stars } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#1a1a2e] to-[#16213e] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arabic Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-gradient-to-r from-[#c7a449] to-[#e2b742] rounded-full blur-3xl"></div>
          <div className="absolute top-[40%] right-[15%] w-40 h-40 bg-gradient-to-r from-[#e2b742] to-[#c7a449] rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[25%] w-36 h-36 bg-gradient-to-r from-[#b38728] to-[#e2b742] rounded-full blur-3xl"></div>
        </div>

        {/* Animated Stars */}
        <div className="absolute top-20 left-[20%] animate-pulse delay-100">
          <Stars className="w-8 h-8 text-[#e2b742] opacity-60" />
        </div>
        <div className="absolute top-40 right-[25%] animate-pulse delay-300">
          <Moon className="w-6 h-6 text-[#c7a449] opacity-60" />
        </div>
        <div className="absolute bottom-32 left-[30%] animate-pulse delay-500">
          <Stars className="w-5 h-5 text-[#b38728] opacity-60" />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Content */}
        <div className="text-center space-y-8 max-w-3xl mx-auto animate-fade-in">
          {/* Mascot Image */}
          <div className="relative w-72 h-72 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#b38728]/20 to-[#e2b742]/20 rounded-full blur-3xl"></div>
            <img
              src="/lovable-uploads/a9eb7d1f-f816-4a90-9609-4afa0cbd18df.png"
              alt="AiWalla Mascot"
              className="relative w-full h-full object-contain drop-shadow-[0_0_25px_rgba(226,183,66,0.3)]"
            />
          </div>
          
          {/* Brand Name */}
          <div className="relative">
            <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-[#b38728] via-[#c7a449] to-[#e2b742]"></div>
            <h1 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b38728] via-[#c7a449] to-[#e2b742] animate-pulse relative">
              AiWalla
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-[#e2b742] font-medium">
            اختبر معلوماتك
          </p>

          {/* Digital Lines */}
          <div className="flex gap-4 justify-center my-12 relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#b38728] to-[#c7a449] opacity-75 blur-xl animate-pulse"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#c7a449] to-[#e2b742] opacity-75 blur-xl animate-pulse delay-100"></div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#e2b742] to-[#b38728] opacity-75 blur-xl animate-pulse delay-200"></div>
          </div>

          {/* Main CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => navigate('/game')}
              className="group relative px-12 py-5 
              bg-gradient-to-r from-[#b38728] to-[#e2b742]
              text-[#1a1a2e] text-2xl font-bold tracking-wide
              rounded-full
              shadow-[0_8px_32px_rgba(226,183,66,0.3)]
              transition-all duration-300 ease-out
              hover:shadow-[0_12px_40px_rgba(226,183,66,0.45)]
              hover:scale-105
              hover:rotate-1
              active:scale-98
              focus:outline-none focus:ring-2 focus:ring-[#e2b742]/50 focus:ring-offset-2 focus:ring-offset-[#1a1a2e]
              glass-morphism"
            >
              <span className="flex items-center gap-3">
                ها نلعب؟
                <Coffee className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-rotate-12" />
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-[#c7a449] text-sm flex items-center gap-2 animate-pulse">
          <Moon className="w-4 h-4" />
          © 2024 AiWalla. All rights reserved.
          <Moon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Index;
