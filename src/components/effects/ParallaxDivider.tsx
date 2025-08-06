
import React from 'react';
import { useParallaxTransform } from '../../hooks/useParallax';

interface ParallaxDividerProps {
  title: string;
  theme: 'premium' | 'neural' | 'geometric' | 'developer' | 'terminal';
  children?: React.ReactNode;
}

const ParallaxDivider: React.FC<ParallaxDividerProps> = ({ title, theme, children }) => {
  const backgroundTransform = useParallaxTransform(0.3);
  const foregroundTransform = useParallaxTransform(0.1);
  const contentTransform = useParallaxTransform(-0.2);

  const getThemeConfig = () => {
    switch (theme) {
      case 'premium':
        return {
          bgGradient: 'from-slate-900 via-slate-800 to-slate-900',
          accentColor: 'purple-500',
          secondaryColor: 'blue-500',
          tertiaryColor: 'emerald-500',
          patternCount: 15,
          shapeType: 'circles'
        };
      case 'neural':
        return {
          bgGradient: 'from-slate-900 via-slate-950 to-slate-900',
          accentColor: 'purple-400',
          secondaryColor: 'blue-400',
          tertiaryColor: 'cyan-400',
          patternCount: 21,
          shapeType: 'vertices'
        };
      case 'geometric':
        return {
          bgGradient: 'from-slate-950 via-black to-slate-950',
          accentColor: 'green-400',
          secondaryColor: 'cyan-400',
          tertiaryColor: 'blue-400',
          patternCount: 18,
          shapeType: 'geometric'
        };
      case 'developer':
        return {
          bgGradient: 'from-slate-950 via-slate-900 to-black',
          accentColor: 'blue-400',
          secondaryColor: 'green-400',
          tertiaryColor: 'purple-400',
          patternCount: 25,
          shapeType: 'circuit'
        };
      case 'terminal':
        return {
          bgGradient: 'from-black via-slate-950 to-slate-900',
          accentColor: 'slate-400',
          secondaryColor: 'emerald-500',
          tertiaryColor: 'blue-500',
          patternCount: 32,
          shapeType: 'dataflow'
        };
      default:
        return {
          bgGradient: 'from-slate-900 via-slate-800 to-slate-900',
          accentColor: 'purple-500',
          secondaryColor: 'blue-500',
          tertiaryColor: 'emerald-500',
          patternCount: 15,
          shapeType: 'circles'
        };
    }
  };

  const config = getThemeConfig();
  const paddingClass = theme === 'developer' ? 'py-48' : theme === 'terminal' ? 'py-36' : theme === 'geometric' ? 'py-44' : 'py-40';

  return (
    <div className={`${paddingClass} bg-gradient-to-b ${config.bgGradient} relative overflow-hidden`}>
      {/* Parallax Background Layer 1 - Slowest */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: backgroundTransform }}
      >
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-${config.accentColor}/5 blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 bg-${config.secondaryColor}/5 blur-3xl animate-pulse`} style={{ animationDelay: '1000ms' }}></div>
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-${config.tertiaryColor}/3 blur-3xl animate-pulse`} style={{ animationDelay: '500ms' }}></div>
      </div>

      {/* Parallax Background Layer 2 - Medium Speed */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ transform: foregroundTransform }}
      >
        {config.shapeType === 'vertices' && (
          <svg className="w-full h-full opacity-10" viewBox="0 0 800 400">
            <defs>
              <linearGradient id={`vertexGradient-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={`#8b5cf6`} stopOpacity="0.6" />
                <stop offset="100%" stopColor={`#06b6d4`} stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <g stroke={`url(#vertexGradient-${theme})`} strokeWidth="1" fill="none">
              <line x1="100" y1="80" x2="200" y2="150" className="animate-pulse" />
              <line x1="200" y1="150" x2="350" y2="120" className="animate-pulse" style={{ animationDelay: '300ms' }} />
              <line x1="350" y1="120" x2="500" y2="200" className="animate-pulse" style={{ animationDelay: '600ms' }} />
              <circle cx="200" cy="150" r="4" fill={`url(#vertexGradient-${theme})`} className="animate-pulse" />
              <circle cx="350" cy="120" r="3" fill={`url(#vertexGradient-${theme})`} className="animate-pulse" />
            </g>
          </svg>
        )}

        {config.shapeType === 'geometric' && (
          <svg className="w-full h-full opacity-5" viewBox="0 0 400 400">
            <defs>
              <pattern id={`geometricGrid-${theme}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />
                <circle cx="20" cy="20" r="2" fill="#06b6d4" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#geometricGrid-${theme})`} />
            <polygon points="100,50 150,100 100,150 50,100" fill="#10b981" fillOpacity="0.1" className="animate-pulse" />
          </svg>
        )}

        {config.shapeType === 'circuit' && (
          <svg className="w-full h-full opacity-8" viewBox="0 0 800 600">
            <g stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3">
              <line x1="50" y1="100" x2="300" y2="100" className="animate-pulse" />
              <line x1="320" y1="100" x2="600" y2="100" className="animate-pulse" style={{ animationDelay: '200ms' }} />
              <line x1="150" y1="80" x2="150" y2="320" className="animate-pulse" style={{ animationDelay: '300ms' }} />
            </g>
            <g fill="#3b82f6" fillOpacity="0.3">
              <rect x="145" y="95" width="10" height="10" rx="2" className="animate-pulse" />
              <rect x="295" y="95" width="10" height="10" rx="2" className="animate-pulse" style={{ animationDelay: '200ms' }} />
            </g>
          </svg>
        )}

        {config.shapeType === 'dataflow' && (
          <svg className="w-full h-full opacity-6" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id={`dataFlowGradient-${theme}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
                <stop offset="50%" stopColor="#64748b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g stroke={`url(#dataFlowGradient-${theme})`} strokeWidth="1" fill="none">
              {Array.from({ length: 8 }).map((_, i) => (
                <g key={i}>
                  <line 
                    x1="0" 
                    y1={50 + i * 40} 
                    x2="1000" 
                    y2={50 + i * 40} 
                    className="animate-pulse" 
                    style={{ animationDelay: `${i * 200}ms` }} 
                  />
                  <circle 
                    cx={100 + (i * 120)} 
                    cy={50 + i * 40} 
                    r="2" 
                    fill="#64748b" 
                    opacity="0.6"
                    className="animate-pulse" 
                    style={{ animationDelay: `${i * 300}ms` }} 
                  />
                </g>
              ))}
            </g>
          </svg>
        )}
      </div>

      {/* Parallax Content Layer - Reverse Movement */}
      <div 
        className="container mx-auto px-4 text-center relative z-10"
        style={{ transform: contentTransform }}
      >
        {/* Enhanced Visual Elements */}
        <div className="flex justify-center items-center space-x-8 mb-12">
          <div className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-${config.accentColor.replace('-500', '-400')}/60 to-transparent animate-pulse`}></div>
          <div className="px-4 py-2 bg-slate-800/95 border border-slate-600 backdrop-blur-sm">
            <div className="text-slate-500 font-mono text-xs font-black tracking-widest">
              {title}
            </div>
          </div>
          <div className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-${config.accentColor.replace('-500', '-400')}/60 to-transparent animate-pulse`} style={{ animationDelay: '500ms' }}></div>
        </div>

        {/* Dynamic Pattern Grid */}
        <div className={`grid grid-cols-${Math.min(config.patternCount <= 15 ? 5 : config.patternCount <= 21 ? 7 : config.patternCount <= 25 ? 5 : 8, 8)} gap-4 max-w-lg mx-auto mb-8`}>
          {Array.from({ length: config.patternCount }).map((_, index) => (
            <div 
              key={index} 
              className={`w-2 h-2 bg-${
                index % 4 === 0 ? config.accentColor.replace('-500', '-400') : 
                index % 4 === 1 ? config.secondaryColor.replace('-500', '-400') : 
                index % 4 === 2 ? config.tertiaryColor.replace('-500', '-400') : 'slate-600'
              }/50 animate-pulse`}
              style={{ animationDelay: `${index * 100}ms` }}
            ></div>
          ))}
        </div>

        <div className={`w-16 h-0.5 bg-gradient-to-r from-transparent via-${config.secondaryColor.replace('-500', '-500')}/50 to-transparent mx-auto`}></div>

        {children}
      </div>
    </div>
  );
};

export default ParallaxDivider;
