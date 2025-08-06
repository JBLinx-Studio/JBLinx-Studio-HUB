
import React from 'react';
import { useParallax } from '../../hooks/useParallax';

interface ParallaxDividerProps {
  title: string;
  theme: 'premium' | 'neural' | 'geometric' | 'developer' | 'terminal';
  backgroundElements: React.ReactNode;
  patternElements?: React.ReactNode;
}

const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ 
  title, 
  theme, 
  backgroundElements,
  patternElements 
}) => {
  const { backgroundY, foregroundY, opacity } = useParallax();

  const getThemeClasses = () => {
    switch (theme) {
      case 'premium':
        return 'bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900';
      case 'neural':
        return 'bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900';
      case 'geometric':
        return 'bg-gradient-to-b from-slate-950 via-black to-slate-950';
      case 'developer':
        return 'bg-gradient-to-b from-slate-950 via-slate-900 to-black';
      case 'terminal':
        return 'bg-gradient-to-b from-black via-slate-950 to-slate-900';
      default:
        return 'bg-slate-900';
    }
  };

  const getPaddingClasses = () => {
    switch (theme) {
      case 'premium':
        return 'py-32';
      case 'neural':
        return 'py-40';
      case 'geometric':
        return 'py-44';
      case 'developer':
        return 'py-48';
      case 'terminal':
        return 'py-36';
      default:
        return 'py-32';
    }
  };

  return (
    <div className={`${getPaddingClasses()} ${getThemeClasses()} border-y border-slate-700/50 relative overflow-hidden`}>
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${backgroundY}px)`,
          opacity: opacity
        }}
      >
        {backgroundElements}
      </div>

      {/* Pattern Layer (if provided) */}
      {patternElements && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translateY(${backgroundY * 0.7}px)`,
            opacity: opacity * 0.8
          }}
        >
          {patternElements}
        </div>
      )}
      
      {/* Foreground Content Layer */}
      <div 
        className="container mx-auto px-4 text-center relative z-10"
        style={{
          transform: `translateY(${foregroundY}px)`
        }}
      >
        {/* Enhanced Visual Elements */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent animate-pulse"></div>
          <div className="px-4 py-2 bg-slate-800/95 border border-slate-600 backdrop-blur-sm">
            <div className="text-slate-500 font-mono text-xs font-black tracking-widest">
              {title}
            </div>
          </div>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent animate-pulse delay-500"></div>
        </div>
        
        {/* Animated Dots Pattern */}
        <div className="grid grid-cols-5 gap-4 max-w-sm mx-auto mb-8">
          {Array.from({ length: 15 }).map((_, index) => (
            <div 
              key={index} 
              className="w-2 h-2 bg-slate-600/50 animate-pulse"
              style={{ animationDelay: `${index * 100}ms` }}
            ></div>
          ))}
        </div>
        
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto"></div>
      </div>
    </div>
  );
};

export default ParallaxDivider;
