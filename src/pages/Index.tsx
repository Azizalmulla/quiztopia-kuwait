
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure the Spline viewer script is loaded
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.68/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen w-full">
      {/* Spline viewer container */}
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/AMfQfn2IbJjCAbao/scene.splinecode" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center p-8">
        </div>
        
        {/* Futuristic Button */}
        <div className="absolute bottom-16 z-20">
          <button
            onClick={() => navigate('/game')}
            className="px-8 py-4 bg-[#1A1F2C] text-white text-2xl font-bold rounded-lg
            border border-white/10 backdrop-blur-sm
            shadow-[0_0_15px_rgba(0,0,0,0.2)]
            transition-all duration-300
            hover:bg-[#2A2F3C] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,0,0,0.3)]
            active:transform active:scale-95
            hover:border-white/20"
          >
            ها نلعب؟
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
