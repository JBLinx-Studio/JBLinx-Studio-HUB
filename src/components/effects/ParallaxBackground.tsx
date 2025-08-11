
import React from 'react';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

const ParallaxBackground: React.FC = () => {
  const { getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: true,
    friction: 0.95,
    momentum: 3.5,
    sensitivity: 4.0,
    minVelocity: 0.02
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Futuristic orange base layer */}
      <div 
        className="absolute inset-0 opacity-80"
        style={getParallaxStyle(0.05)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-600 to-emerald-500"></div>
        <div className="absolute top-1/4 left-1/4 w-[1200px] h-[1200px] bg-gradient-to-r from-orange-400/30 via-yellow-400/25 to-amber-400/20 blur-3xl rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-emerald-400/25 via-teal-400/20 to-green-400/15 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
      </div>

      {/* Vibrant flowing gradients */}
      <div 
        className="absolute inset-0 opacity-60"
        style={getParallaxStyle(0.12)}
      >
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[1400px] h-[800px] bg-gradient-to-r from-yellow-300/20 via-orange-300/25 to-amber-300/20 blur-3xl rounded-full animate-pulse" style={{animationDuration: '12s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-[900px] h-[600px] bg-gradient-to-l from-green-300/20 via-emerald-300/15 to-teal-300/12 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s', animationDuration: '14s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-[700px] h-[700px] bg-gradient-to-r from-orange-300/15 via-yellow-400/12 to-lime-300/10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s', animationDuration: '9s'}}></div>
      </div>

      {/* Mid-layer energy with bright accent colors */}
      <div 
        className="absolute inset-0 opacity-50"
        style={getParallaxStyle(0.25)}
      >
        <div className="absolute top-1/6 right-1/4 w-[600px] h-[400px] bg-gradient-to-r from-yellow-200/20 via-orange-200/15 to-amber-200/12 blur-2xl rounded-full animate-pulse" style={{animationDelay: '2s', animationDuration: '7s'}}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-emerald-200/15 via-green-200/12 to-teal-200/10 blur-2xl rounded-full animate-pulse" style={{animationDelay: '5s', animationDuration: '11s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-orange-200/12 via-yellow-200/15 to-lime-200/10 blur-2xl rounded-full animate-pulse" style={{animationDelay: '1s', animationDuration: '6s'}}></div>
      </div>

      {/* Dynamic energy fields with vibrant highlights */}
      <div 
        className="absolute inset-0 opacity-40"
        style={getParallaxStyle(0.4)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-yellow-100/15 via-orange-100/12 to-amber-100/10 blur-2xl rounded-full animate-pulse" style={{animationDuration: '5s'}}></div>
        <div className="absolute top-1/4 left-1/6 w-[400px] h-[400px] bg-gradient-to-r from-green-100/12 via-emerald-100/15 to-teal-100/10 blur-xl rounded-full animate-pulse" style={{animationDelay: '2.5s', animationDuration: '8s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-[350px] h-[350px] bg-gradient-to-r from-orange-100/15 via-yellow-100/12 to-lime-100/8 blur-xl rounded-full animate-pulse" style={{animationDelay: '4s', animationDuration: '7s'}}></div>
      </div>

      {/* Bright energy particles */}
      <div 
        className="absolute inset-0 opacity-35"
        style={getParallaxStyle(0.6)}
      >
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-yellow-200/40 blur-sm animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-orange-200/45 blur-sm animate-pulse" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/3 left-2/3 w-4 h-4 bg-emerald-200/50 blur-sm animate-pulse" style={{animationDelay: '2s', animationDuration: '2s'}}></div>
        <div className="absolute top-1/6 right-1/6 w-10 h-10 bg-yellow-300/35 blur-sm animate-pulse" style={{animationDelay: '3s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-1/6 left-1/6 w-5 h-5 bg-green-200/40 blur-sm animate-pulse" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      </div>

      {/* Futuristic grid overlay with orange/yellow tint */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={getParallaxStyle(0.08)}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 165, 0, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 165, 0, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Ultra-fast floating elements with new colors */}
      <div 
        className="absolute inset-0 opacity-25"
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
              <div className="w-1 h-1 bg-yellow-200/60 rounded-full"></div>
            ) : i % 3 === 1 ? (
              <div className="w-0.5 h-0.5 bg-orange-200/70 rounded-full"></div>
            ) : (
              <div className="w-1.5 h-1.5 bg-emerald-200/50 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* Enhanced depth with warm orange vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-orange-400/5 to-orange-600/20 opacity-70"></div>
    </div>
  );
};

export default ParallaxBackground;
