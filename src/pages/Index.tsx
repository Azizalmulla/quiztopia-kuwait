
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Spline viewer container */}
      <div className="absolute inset-0 z-0 w-full h-screen">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center text-white">
            Loading 3D Scene...
          </div>
        )}
        <spline-viewer 
          url="https://prod.spline.design/AMfQfn2IbJjCAbao/scene.splinecode"
          loading-anim="true"
          events-target="global"
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center p-8">
        </div>
        
        {/* Modern Gradient Button */}
        <div className="absolute bottom-16 z-20">
          <button
            onClick={() => navigate('/game')}
            className="px-10 py-4 
            bg-gradient-to-r from-black to-zinc-800
            text-white text-xl font-medium tracking-wide
            rounded-full
            border border-white/20
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            backdrop-blur-md
            transition-all duration-300 ease-out
            hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)]
            hover:scale-105 hover:border-white/30
            active:scale-98
            focus:outline-none focus:ring-2 focus:ring-black/50 focus:ring-offset-2 focus:ring-offset-black"
          >
            ها نلعب؟
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
