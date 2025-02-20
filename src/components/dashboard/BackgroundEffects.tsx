
import React from 'react';

export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[20%] right-[15%] w-40 h-40 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-300"></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-bounce delay-150"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl animate-bounce delay-500"></div>
    </div>
  );
};
