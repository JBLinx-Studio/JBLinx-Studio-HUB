
import React from 'react';
import { useParallax, useMultiLayerParallax } from '../../hooks/useParallax';
import { cn } from '../../lib/utils';

interface ParallaxDividerProps {
  theme: 'premium' | 'neural' | 'geometric' | 'developer' | 'terminal';
  title: string;
  height?: 'sm' | 'md' | 'lg' | 'xl';
}

const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ 
  theme, 
  title, 
  height = 'lg' 
}) => {
  const { background, midground, foreground } = useMultiLayerParallax();
  const titleParallax = useParallax({ speed: 0.1, direction: 'up' });

  const heightClasses = {
    sm: 'py-16',
    md: 'py-20',
    lg: 'py-24',
    xl: 'py-28'
  };

  return (
    <div className={cn(
      'relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700/30',
      heightClasses[height]
    )}>
      {/* Background Layer - Subtle Data Streams */}
      <div 
        ref={background.elementRef}
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-20"
        style={{
          transform: `translateY(${background.offset}px)`,
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id={`dataFlowGradient-${theme}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
              <stop offset="25%" stopColor="#64748b" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#64748b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <g stroke={`url(#dataFlowGradient-${theme})`} strokeWidth="1" fill="none">
            {Array.from({ length: 8 }).map((_, i) => (
              <g key={i}>
                <line 
                  x1="0" 
                  y1={60 + i * 60} 
                  x2="1400" 
                  y2={60 + i * 60} 
                  className="animate-pulse" 
                  style={{animationDelay: `${i * 200}ms`}} 
                />
                <circle 
                  cx={200 + (i * 150)} 
                  cy={60 + i * 60} 
                  r="2" 
                  fill="#64748b" 
                  opacity="0.5"
                  className="animate-pulse" 
                  style={{animationDelay: `${i * 300}ms`}} 
                />
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Midground Layer - Subtle Matrix Points */}
      <div 
        ref={midground.elementRef}
        className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-15"
        style={{
          transform: `translateY(${midground.offset}px)`,
        }}
      >
        <div className="grid grid-cols-12 gap-6 max-w-6xl">
          {Array.from({ length: 48 }).map((_, index) => (
            <div 
              key={index} 
              className="w-1 h-1 bg-slate-400 animate-pulse"
              style={{ animationDelay: `${index * 100}ms` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Foreground Layer - Subtle Accent Lines */}
      <div 
        ref={foreground.elementRef}
        className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-25"
        style={{
          transform: `translateY(${foreground.offset}px)`,
        }}
      >
        <div className="flex items-center space-x-8">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
          <div className="w-2 h-2 border border-slate-400/50"></div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent via-slate-400 to-transparent"></div>
        </div>
      </div>
      
      {/* Title with Subtle Parallax */}
      <div 
        ref={titleParallax.elementRef}
        className="container mx-auto px-4 text-center relative z-10"
        style={{
          transform: `translateY(${titleParallax.offset}px)`,
        }}
      >
        <div className="px-8 py-4 bg-slate-800/90 border border-slate-600/50 backdrop-blur-sm inline-block">
          <div className="text-slate-400 font-mono text-sm font-black tracking-widest">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxDivider;
