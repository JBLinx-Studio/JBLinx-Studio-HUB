
import React from 'react';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

const ParallaxBackground: React.FC = () => {
  const { getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: true,
    friction: 0.94,
    momentum: 1.35
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Solid base background with zinc theme */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-950 via-zinc-950 to-black"></div>

      {/* Slowest parallax layer - enhanced background gradients */}
      <div 
        className="absolute inset-0 opacity-50"
        style={getParallaxStyle(0.08)}
      >
        <div className="absolute top-1/4 left-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-orange-500/12 to-amber-500/8 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 to-cyan-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-teal-500/8 to-orange-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Medium speed parallax layer */}
      <div 
        className="absolute inset-0 opacity-40"
        style={getParallaxStyle(0.15)}
      >
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-amber-500/8 to-orange-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/8 to-emerald-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-500/8 to-amber-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Fast parallax layer */}
      <div 
        className="absolute inset-0 opacity-30"
        style={getParallaxStyle(0.25)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/8 to-cyan-500/6 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/6 left-1/6 w-96 h-96 bg-gradient-to-r from-emerald-500/8 to-amber-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-80 h-80 bg-gradient-to-r from-teal-500/8 to-orange-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4.5s'}}></div>
      </div>

      {/* Enhanced floating geometric shapes with strong parallax */}
      <div 
        className="absolute inset-0 opacity-20"
        style={getParallaxStyle(0.4)}
      >
        <div className="absolute top-1/4 left-1/6 w-8 h-8 bg-orange-400/40 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-emerald-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-amber-400/40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-10 h-10 bg-cyan-400/40 transform rotate-12 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-7 h-7 bg-teal-400/40 transform rotate-45 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/5 right-1/3 w-5 h-5 bg-orange-400/30 rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute bottom-2/3 left-1/5 w-6 h-6 bg-emerald-400/30 transform rotate-30 animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Enhanced grid overlay with subtle parallax */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={getParallaxStyle(0.05)}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Fastest moving enhanced particles */}
      <div 
        className="absolute inset-0 opacity-15"
        style={getParallaxStyle(0.6)}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 animate-pulse ${
              i % 3 === 0 ? 'bg-orange-400/30' : 
              i % 3 === 1 ? 'bg-emerald-400/30' : 'bg-cyan-400/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Additional tech-style accent lines */}
      <div 
        className="absolute inset-0 opacity-10"
        style={getParallaxStyle(0.3)}
      >
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
