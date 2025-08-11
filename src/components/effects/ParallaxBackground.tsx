
import React, { useEffect, useState } from 'react';

const ParallaxBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary parallax layer - slowest movement */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-orange-500/5 blur-3xl rounded-full"></div>
      </div>

      {/* Secondary parallax layer - medium movement */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/4 to-pink-500/4 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-r from-yellow-500/4 to-red-500/4 blur-3xl rounded-full"></div>
      </div>

      {/* Tertiary parallax layer - fastest movement */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/3 to-teal-500/3 blur-3xl rounded-full"></div>
      </div>

      {/* Floating geometric shapes with parallax */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.01}deg)`,
        }}
      >
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-400/20 transform rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-green-400/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-5 h-5 bg-cyan-400/20 transform rotate-12"></div>
      </div>

      {/* Subtle grid overlay with parallax */}
      <div 
        className="absolute inset-0 opacity-[0.01]"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
    </div>
  );
};

export default ParallaxBackground;
