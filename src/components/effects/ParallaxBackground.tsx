import React from 'react';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

const ParallaxBackground: React.FC = () => {
  const { getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: false,
    friction: 0.96,
    momentum: 1.25
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep base */}
      <div className="absolute inset-0 bg-background"></div>

      {/* Slowest parallax - large ambient gradients */}
      <div className="absolute inset-0 opacity-50" style={getParallaxStyle(0.06)}>
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/8 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/8 to-amber-500/6 blur-[120px] rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Medium parallax */}
      <div className="absolute inset-0 opacity-30" style={getParallaxStyle(0.12)}>
        <div className="absolute top-1/3 right-1/3 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/8 to-pink-500/6 blur-[100px] rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/8 to-cyan-500/6 blur-[100px] rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={getParallaxStyle(0.04)}>
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Fast floating particles */}
      <div className="absolute inset-0 opacity-15" style={getParallaxStyle(0.5)}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse ${
              i % 3 === 0 ? 'bg-emerald-400/50' : 
              i % 3 === 1 ? 'bg-orange-400/50' : 'bg-blue-400/50'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Accent lines */}
      <div className="absolute inset-0 opacity-10" style={getParallaxStyle(0.25)}>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
