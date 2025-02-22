import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Brain, ChevronRight, Rabbit, Cat } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  // Array of random Arabic questions
  const arabicQuestions = [
    "كم عدد كواكب المجموعة الشمسية؟",
    "ما هي عاصمة الكويت؟",
    "متى تأسست دولة الكويت؟",
    "من هو مؤسس دولة الكويت؟",
    "ما هو أكبر مسجد في الكويت؟",
    "كم برجاً في أبراج الكويت؟"
  ];

  const handlePlayClick = () => {
    console.log("Navigate to dashboard");
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-950/10 to-slate-950/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: '#064e3b',
              borderRadius: '50%',
              filter: 'blur(1px)',
              animation: `float ${Math.random() * 4 + 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 relative animate-fade-in">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 space-y-8">
          {/* Title with enhanced animation */}
          <div className="relative group">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-200 to-green-200 font-plus-jakarta tracking-tight">
              AI والله
            </h1>
            <Sparkles className="absolute -top-6 -right-6 text-teal-200/60 animate-spin-slow w-10 h-10" />
            <Cat className="absolute -bottom-6 -left-6 text-emerald-300/60 animate-bounce w-8 h-8" />
          </div>

          {/* Enhanced glass effect container */}
          <div className="relative glass rounded-2xl px-8 py-6 backdrop-blur-xl bg-white/[0.03] border border-white/5 transform hover:scale-105 transition-all duration-300">
            <Rabbit className="absolute -top-4 -right-4 text-white/20 w-8 h-8 animate-float" />
            <p className="text-xl md:text-2xl text-white/90 font-medium tracking-wide">
              Challenge yourself with autonomous trivia quizzes
            </p>
            <p className="mt-2 text-base md:text-lg text-white/60">
              Test your knowledge across various topics and compete with friends!
            </p>
          </div>

          {/* Enhanced CTA Button */}
          <Button
            onClick={handlePlayClick}
            className="group relative flex items-center gap-3 px-10 py-6 
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

        {/* Right Section - Brain Icon with Connected Questions */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-[400px] md:h-[400px] flex items-center justify-center">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-2xl animate-float" />
            
            {/* Brain Icon */}
            <div className="relative z-10">
              <Brain className="w-32 h-32 md:w-40 md:h-40 text-teal-300/80 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]" />
            </div>

            {/* Connected Questions with Lines */}
            {arabicQuestions.map((question, index) => {
              const angle = (360 / arabicQuestions.length) * index;
              const radius = 140; // Distance from brain to question
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              
              return (
                <div key={index} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  {/* Line */}
                  <div
                    className="absolute h-px bg-gradient-to-r from-teal-500/50 to-teal-300/10"
                    style={{
                      width: `${radius}px`,
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: '0 0',
                      animation: `pulse 3s infinite ${index * 0.5}s`,
                    }}
                  />
                  
                  {/* Question Text */}
                  <div
                    className="absolute whitespace-nowrap text-sm text-teal-300/70"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      width: 'max-content',
                      maxWidth: '160px',
                    }}
                  >
                    {question}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Kuwaiti-inspired decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#007A3D] via-[#FFFFFF] to-[#CE1126] opacity-20" />

      {/* Add animation keyframes via style tag */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Index;
