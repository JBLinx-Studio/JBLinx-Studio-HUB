
import React from 'react';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

const ParallaxBackground: React.FC = () => {
  const { getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: true,
    friction: 0.92,
    momentum: 1.2
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Slowest parallax layer - background gradients */}
      <div 
        className="absolute inset-0 opacity-40"
        style={getParallaxStyle(0.1)}
      >
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/8 to-blue-500/8 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/8 to-orange-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-cyan-500/6 to-pink-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Medium speed parallax layer */}
      <div 
        className="absolute inset-0 opacity-30"
        style={getParallaxStyle(0.2)}
      >
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/6 to-pink-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/6 to-red-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-72 h-72 bg-gradient-to-r from-violet-500/6 to-indigo-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Fast parallax layer */}
      <div 
        className="absolute inset-0 opacity-20"
        style={getParallaxStyle(0.35)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-indigo-500/5 to-teal-500/5 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/6 left-1/6 w-80 h-80 bg-gradient-to-r from-rose-500/5 to-amber-500/5 blur-3xl rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-64 h-64 bg-gradient-to-r from-lime-500/5 to-sky-500/5 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4.5s'}}></div>
      </div>

      {/* Floating geometric shapes with strong parallax */}
      <div 
        className="absolute inset-0 opacity-15"
        style={getParallaxStyle(0.5)}
      >
        <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-blue-400/30 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-green-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-400/30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-8 h-8 bg-cyan-400/30 transform rotate-12 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-5 h-5 bg-pink-400/30 transform rotate-45 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid overlay with subtle parallax */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={getParallaxStyle(0.08)}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Fastest moving particles */}
      <div 
        className="absolute inset-0 opacity-10"
        style={getParallaxStyle(0.7)}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallaxBackground;
