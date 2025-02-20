
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-zinc-900">
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Main Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            AiWalla
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            اختبر معرفتك بالكويت من خلال مجموعة متنوعة من الأسئلة الشيقة
          </p>

          {/* Decorative elements */}
          <div className="flex gap-4 justify-center my-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-75 blur-xl"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 blur-xl"></div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-75 blur-xl"></div>
          </div>

          {/* Main CTA Button */}
          <div className="pt-8">
            <button
              onClick={() => navigate('/game')}
              className="px-10 py-4 
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
              ها نلعب؟
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-gray-500 text-sm">
          © 2024 AiWalla. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Index;
