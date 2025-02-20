
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Spline viewer container */}
      <div className="absolute inset-0 z-0">
        <spline-viewer url="https://prod.spline.design/AMfQfn2IbJjCAbao/scene.splinecode" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold text-white mb-6">
            Global Quiz Hub
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Experience quizzes in Kuwaiti dialect with our interactive 3D platform
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
