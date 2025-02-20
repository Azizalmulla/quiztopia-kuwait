
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden">
      {/* Mascot Image */}
      <div className="flex-1 flex items-center justify-center w-full max-w-[600px] mx-auto">
        <img
          src="/lovable-uploads/37fe5675-8e85-498e-a6dc-d8fbf86d8517.png"
          alt="Robot Mascot"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Button */}
      <div className="w-full flex justify-center pb-12">
        <button
          onClick={() => navigate('/game')}
          className="flex items-center gap-2 px-8 py-3 
          bg-black
          text-white text-xl font-bold
          rounded-full
          shadow-lg
          transition-all duration-300 ease-out
          hover:shadow-xl
          hover:scale-105
          active:scale-98"
        >
          ها نلعب؟
          <Coffee className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Index;
