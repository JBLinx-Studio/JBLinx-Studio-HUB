
import React from 'react';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

const ParallaxBackground: React.FC = () => {
  const { getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: true,
    friction: 0.96,
    momentum: 1.25
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Solid base background with enhanced zinc theme */}
      <div className="absolute inset-0 bg-gradient-radial from-zinc-950 via-zinc-950 to-black"></div>

      {/* Slowest parallax layer - enhanced background gradients with new colors */}
      <div 
        className="absolute inset-0 opacity-40"
        style={getParallaxStyle(0.06)}
      >
        <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-gradient-to-r from-orange-500/15 to-amber-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-emerald-500/12 to-teal-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-to-r from-amber-500/10 to-orange-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Medium speed parallax layer with enhanced colors */}
      <div 
        className="absolute inset-0 opacity-35"
        style={getParallaxStyle(0.12)}
      >
        <div className="absolute top-1/3 right-1/3 w-[800px] h-[800px] bg-gradient-to-r from-orange-400/12 to-amber-400/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-[900px] h-[900px] bg-gradient-to-r from-emerald-400/10 to-teal-400/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/10 to-orange-400/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '8s'}}></div>
      </div>

      {/* Fast parallax layer with sophisticated gradients */}
      <div 
        className="absolute inset-0 opacity-30"
        style={getParallaxStyle(0.20)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-orange-300/10 to-emerald-300/8 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/6 left-1/6 w-[700px] h-[700px] bg-gradient-to-r from-amber-300/8 to-teal-300/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300/8 to-orange-300/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '7s'}}></div>
      </div>

      {/* Enhanced floating geometric shapes with premium feel */}
      <div 
        className="absolute inset-0 opacity-25"
        style={getParallaxStyle(0.35)}
      >
        <div className="absolute top-1/4 left-1/6 w-12 h-12 bg-orange-400/30 transform rotate-45 animate-pulse border border-orange-400/20"></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-emerald-400/30 rounded-full animate-pulse border border-emerald-400/20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-amber-400/30 animate-pulse border border-amber-400/20" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-14 h-14 bg-teal-400/25 transform rotate-12 animate-pulse border border-teal-400/20" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-2/3 left-2/3 w-10 h-10 bg-orange-300/25 transform rotate-45 animate-pulse border border-orange-300/20" style={{animationDelay: '8s'}}></div>
        <div className="absolute top-1/5 right-1/3 w-7 h-7 bg-emerald-300/25 rounded-full animate-pulse border border-emerald-300/20" style={{animationDelay: '10s'}}></div>
      </div>

      {/* Enhanced premium grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06]"
        style={getParallaxStyle(0.04)}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      {/* Fastest moving enhanced particles with premium feel */}
      <div 
        className="absolute inset-0 opacity-20"
        style={getParallaxStyle(0.5)}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 animate-pulse ${
              i % 4 === 0 ? 'bg-orange-400/40 shadow-orange-400/20' : 
              i % 4 === 1 ? 'bg-emerald-400/40 shadow-emerald-400/20' : 
              i % 4 === 2 ? 'bg-amber-400/40 shadow-amber-400/20' : 'bg-teal-400/40 shadow-teal-400/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
              boxShadow: '0 0 6px currentColor'
            }}
          />
        ))}
      </div>

      {/* Premium tech-style accent lines with enhanced colors */}
      <div 
        className="absolute inset-0 opacity-15"
        style={getParallaxStyle(0.25)}
      >
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400/40 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400/40 to-transparent"></div>
        
        {/* Additional diagonal lines for premium feel */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/25 to-transparent transform rotate-1"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent transform -rotate-1"></div>
        </div>
      </div>

      {/* Ambient lighting effects */}
      <div 
        className="absolute inset-0 opacity-10"
        style={getParallaxStyle(0.08)}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-b from-orange-400/20 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-full h-32 bg-gradient-to-t from-emerald-400/20 to-transparent blur-2xl"></div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
