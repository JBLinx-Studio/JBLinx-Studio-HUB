
import React from 'react';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

const ParallaxBackground: React.FC = () => {
  const { getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: true,
    friction: 0.94,
    momentum: 1.5
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep space background layer */}
      <div 
        className="absolute inset-0 opacity-60"
        style={getParallaxStyle(0.05)}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-gradient-to-r from-purple-900/15 via-blue-900/10 to-cyan-900/8 blur-3xl rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-emerald-900/12 via-teal-900/8 to-blue-900/10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
      </div>

      {/* Aurora-like flowing gradients */}
      <div 
        className="absolute inset-0 opacity-40"
        style={getParallaxStyle(0.12)}
      >
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[1400px] h-[800px] bg-gradient-to-r from-purple-800/8 via-blue-700/12 to-cyan-600/8 blur-3xl rounded-full animate-pulse" style={{animationDuration: '12s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-[900px] h-[600px] bg-gradient-to-l from-indigo-800/10 via-purple-700/8 to-pink-800/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s', animationDuration: '14s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-teal-800/8 via-emerald-700/6 to-green-800/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '9s'}}></div>
      </div>

      {/* Mid-layer cosmic dust */}
      <div 
        className="absolute inset-0 opacity-30"
        style={getParallaxStyle(0.25)}
      >
        <div className="absolute top-1/6 right-1/4 w-[600px] h-[400px] bg-gradient-to-r from-cyan-700/10 via-blue-600/8 to-indigo-700/6 blur-2xl rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-purple-700/8 via-pink-600/6 to-rose-700/4 blur-2xl rounded-full animate-pulse" style={{animationDelay: '5s', animationDuration: '11s'}}></div>
        <div className="absolute center-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-emerald-700/6 via-teal-600/8 to-cyan-700/5 blur-2xl rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
      </div>

      {/* Dynamic energy fields */}
      <div 
        className="absolute inset-0 opacity-25"
        style={getParallaxStyle(0.4)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-600/8 via-purple-500/6 to-cyan-600/4 blur-2xl rounded-full animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] bg-gradient-to-r from-indigo-600/6 via-purple-500/8 to-pink-600/4 blur-xl rounded-full animate-pulse" style={{animationDelay: '2.5s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-[350px] h-[350px] bg-gradient-to-r from-teal-600/8 via-emerald-500/6 to-green-600/4 blur-xl rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
      </div>

      {/* Fast-moving energy particles */}
      <div 
        className="absolute inset-0 opacity-20"
        style={getParallaxStyle(0.6)}
      >
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-cyan-400/20 blur-sm animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-purple-400/25 blur-sm animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-4 h-4 bg-blue-400/30 blur-sm animate-pulse" style={{animationDelay: '2s', animationDuration: '2s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-10 h-10 bg-emerald-400/15 blur-sm animate-pulse" style={{animationDelay: '3s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-5 h-5 bg-pink-400/20 blur-sm animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      </div>

      {/* Subtle grid overlay with tech feel */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={getParallaxStyle(0.08)}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Ultra-fast floating tech elements */}
      <div 
        className="absolute inset-0 opacity-15"
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
              <div className="w-1 h-1 bg-cyan-400/40 rounded-full"></div>
            ) : i % 3 === 1 ? (
              <div className="w-0.5 h-0.5 bg-purple-400/50 rounded-full"></div>
            ) : (
              <div className="w-1.5 h-1.5 bg-blue-400/30 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* Depth enhancement with subtle vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 opacity-60"></div>
    </div>
  );
};

export default ParallaxBackground;
