
import React from 'react';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

const ParallaxBackground: React.FC = () => {
  const { getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: true,
    friction: 0.92,
    momentum: 2.2,
    sensitivity: 3.0,
    minVelocity: 0.05
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep space background layer with orange/amber base */}
      <div 
        className="absolute inset-0 opacity-70"
        style={getParallaxStyle(0.05)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-amber-950 to-yellow-950"></div>
        <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-gradient-to-r from-orange-800/20 via-amber-800/15 to-yellow-800/12 blur-3xl rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-emerald-800/15 via-teal-800/12 to-cyan-800/10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
      </div>

      {/* Aurora-like flowing gradients with vibrant oranges and yellows */}
      <div 
        className="absolute inset-0 opacity-50"
        style={getParallaxStyle(0.12)}
      >
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[1400px] h-[800px] bg-gradient-to-r from-orange-700/12 via-amber-600/18 to-yellow-600/15 blur-3xl rounded-full animate-pulse" style={{animationDuration: '12s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-[900px] h-[600px] bg-gradient-to-l from-emerald-700/15 via-teal-600/12 to-blue-700/10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s', animationDuration: '14s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-yellow-700/12 via-orange-600/10 to-amber-700/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '9s'}}></div>
      </div>

      {/* Mid-layer cosmic energy with bright accents */}
      <div 
        className="absolute inset-0 opacity-40"
        style={getParallaxStyle(0.25)}
      >
        <div className="absolute top-1/6 right-1/4 w-[600px] h-[400px] bg-gradient-to-r from-amber-600/15 via-yellow-500/12 to-orange-600/10 blur-2xl rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-teal-600/12 via-emerald-500/10 to-cyan-600/8 blur-2xl rounded-full animate-pulse" style={{animationDelay: '5s', animationDuration: '11s'}}></div>
        <div className="absolute center-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-orange-600/10 via-amber-500/12 to-yellow-600/8 blur-2xl rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
      </div>

      {/* Dynamic energy fields with vibrant colors */}
      <div 
        className="absolute inset-0 opacity-35"
        style={getParallaxStyle(0.4)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-yellow-500/12 via-orange-400/10 to-amber-500/8 blur-2xl rounded-full animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/10 via-teal-400/12 to-cyan-500/8 blur-xl rounded-full animate-pulse" style={{animationDelay: '2.5s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-[350px] h-[350px] bg-gradient-to-r from-orange-500/12 via-amber-400/10 to-yellow-500/8 blur-xl rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
      </div>

      {/* Fast-moving energy particles with bright accents */}
      <div 
        className="absolute inset-0 opacity-25"
        style={getParallaxStyle(0.6)}
      >
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-yellow-400/30 blur-sm animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-orange-400/35 blur-sm animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-4 h-4 bg-emerald-400/40 blur-sm animate-pulse" style={{animationDelay: '2s', animationDuration: '2s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-10 h-10 bg-amber-400/25 blur-sm animate-pulse" style={{animationDelay: '3s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-5 h-5 bg-teal-400/30 blur-sm animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      </div>

      {/* Subtle grid overlay with futuristic orange tint */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={getParallaxStyle(0.08)}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Ultra-fast floating tech elements with vibrant colors */}
      <div 
        className="absolute inset-0 opacity-20"
        style={getParallaxStyle(0.8)}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${1.5 + Math.random() * 3}s`
            }}
          >
            {i % 3 === 0 ? (
              <div className="w-1 h-1 bg-yellow-400/50 rounded-full"></div>
            ) : i % 3 === 1 ? (
              <div className="w-0.5 h-0.5 bg-orange-400/60 rounded-full"></div>
            ) : (
              <div className="w-1.5 h-1.5 bg-emerald-400/40 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* Depth enhancement with warm vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-orange-950/30 opacity-60"></div>
    </div>
  );
};

export default ParallaxBackground;
