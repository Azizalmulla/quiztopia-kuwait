
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Brain, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    console.log("Navigate to quiz/general");
    navigate('/quiz/general');
  };

  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Animation - Reduced particle count and size */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/5 to-slate-950/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10" />
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                backgroundColor: '#064e3b',
                borderRadius: '50%',
                animation: `pulse ${Math.random() * 4 + 2}s infinite`,
                filter: 'blur(1px)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 relative animate-fade-in">
        {/* Left Section - Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 space-y-8">
          {/* Title Area */}
          <div className="relative">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200/90 via-emerald-200/80 to-green-200/70 font-plus-jakarta tracking-tight">
              AI والله
            </h1>
            <Sparkles className="absolute -top-6 -right-6 text-teal-200/60 animate-spin-slow w-10 h-10" />
          </div>

          {/* Tagline with glass effect */}
          <div className="relative glass rounded-2xl px-8 py-4 backdrop-blur-md bg-white/[0.03] border border-white/5">
            <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide">
              Challenge yourself with autonomous trivia quizzes
            </p>
            <p className="mt-2 text-base md:text-lg text-white/60">
              Test your knowledge across various topics and compete with friends!
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            {/* Primary CTA */}
            <Button
              onClick={handlePlayClick}
              className="group relative flex items-center gap-3 px-10 py-4 
                bg-gradient-to-r from-teal-600 to-emerald-600
                text-white text-xl font-bold
                rounded-2xl
                shadow-lg shadow-teal-950/30
                transition-all duration-300 ease-out
                hover:shadow-xl hover:shadow-teal-950/40
                hover:-translate-y-1
                active:translate-y-0
                focus:outline-none focus:ring-2 focus:ring-teal-500/50
                animate-fade-in
                overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                ها نلعب؟
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        {/* Right Section - Stylized Brain Icon */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-2xl" />
            <Brain className="w-full h-full text-teal-300/80 animate-float drop-shadow-[0_0_15px_rgba(20,184,166,0.15)]" />
          </div>
        </div>
      </div>

      {/* Kuwaiti-inspired decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#007A3D] via-[#FFFFFF] to-[#CE1126] opacity-10" />
    </div>
  );
};

export default Index;
