
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxDividerProps {
  title: string;
  variant?: 'premium' | 'neural' | 'geometric' | 'developer' | 'terminal';
  className?: string;
}

const ParallaxDivider: React.FC<ParallaxDividerProps> = ({
  title,
  variant = 'premium',
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress when element is in view
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - elementTop) / (windowHeight + elementHeight)
        ));
        
        setScrollY(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVariantConfig = () => {
    switch (variant) {
      case 'premium':
        return {
          bgGradient: 'from-purple-900/20 via-pink-900/20 to-amber-900/20',
          textGradient: 'from-purple-400 to-pink-400',
          particles: '🌟✨💎',
          animation: 'premium-flow'
        };
      case 'neural':
        return {
          bgGradient: 'from-cyan-900/20 via-blue-900/20 to-indigo-900/20',
          textGradient: 'from-cyan-400 to-blue-400',
          particles: '⚡🧠🔬',
          animation: 'neural-pulse'
        };
      case 'geometric':
        return {
          bgGradient: 'from-emerald-900/20 via-teal-900/20 to-green-900/20',
          textGradient: 'from-emerald-400 to-teal-400',
          particles: '◆◇△▲',
          animation: 'geometric-spin'
        };
      case 'developer':
        return {
          bgGradient: 'from-orange-900/20 via-red-900/20 to-yellow-900/20',
          textGradient: 'from-orange-400 to-red-400',
          particles: '</>{}</>',
          animation: 'code-matrix'
        };
      case 'terminal':
        return {
          bgGradient: 'from-slate-900/20 via-gray-900/20 to-zinc-900/20',
          textGradient: 'from-green-400 to-lime-400',
          particles: '01◉▓',
          animation: 'terminal-flow'
        };
      default:
        return {
          bgGradient: 'from-purple-900/20 to-pink-900/20',
          textGradient: 'from-purple-400 to-pink-400',
          particles: '✨',
          animation: 'default-flow'
        };
    }
  };

  const config = getVariantConfig();
  
  // Calculate parallax offsets based on scroll progress
  const backgroundOffset = scrollY * 100;
  const foregroundOffset = scrollY * 50;
  const textOffset = scrollY * 25;

  return (
    <div 
      ref={containerRef}
      className={cn(
        'relative h-96 overflow-hidden flex items-center justify-center',
        `bg-gradient-to-r ${config.bgGradient}`,
        className
      )}
    >
      {/* Parallax Background Layer 1 - Slowest */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${backgroundOffset * 0.5}px) scale(${1 + scrollY * 0.1})`,
        }}
      >
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            >
              {config.particles.charAt(Math.floor(Math.random() * config.particles.length))}
            </div>
          ))}
        </div>
      </div>

      {/* Parallax Background Layer 2 - Medium */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${backgroundOffset * 0.3}px) rotateX(${scrollY * 10}deg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        ></div>
      </div>

      {/* Foreground Content */}
      <div 
        className="relative z-10 text-center"
        style={{
          transform: `translateY(${foregroundOffset}px) scale(${1 - scrollY * 0.1})`,
        }}
      >
        {/* Main Title */}
        <h2 
          className={cn(
            'text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r bg-clip-text text-transparent',
            `${config.textGradient}`,
            'drop-shadow-2xl'
          )}
          style={{
            transform: `translateY(${textOffset}px) rotateX(${scrollY * 5}deg)`,
          }}
        >
          {title}
        </h2>

        {/* Animated Border */}
        <div 
          className="w-96 h-1 mx-auto bg-gradient-to-r from-transparent via-current to-transparent opacity-60"
          style={{
            transform: `scaleX(${1 + scrollY * 0.5}) translateY(${textOffset * 0.5}px)`,
          }}
        ></div>

        {/* Floating Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-radial from-current/20 to-transparent rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-gradient-radial from-current/30 to-transparent rounded-full blur-lg animate-pulse animation-delay-1000"></div>
      </div>

      {/* Moving Particles Layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${foregroundOffset * 0.7}px)`,
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-current rounded-full opacity-40 animate-ping"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + Math.sin(i) * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Depth Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30"
            style={{
              top: `${20 + i * 15}%`,
              left: '10%',
              right: '10%',
              transform: `translateY(${backgroundOffset * (0.2 + i * 0.1)}px) scaleX(${0.5 + scrollY * 0.5})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxDivider;
