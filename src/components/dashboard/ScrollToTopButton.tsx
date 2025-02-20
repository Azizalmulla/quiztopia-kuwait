
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const ScrollToTopButton = () => {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200 z-50"
    >
      <ArrowLeft className="w-6 h-6 transform rotate-90" />
    </button>
  );
};
