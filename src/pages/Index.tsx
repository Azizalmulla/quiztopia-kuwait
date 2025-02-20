
import React, { useEffect } from 'react';

const Index = () => {
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
      </div>
    </div>
  );
};

export default Index;
