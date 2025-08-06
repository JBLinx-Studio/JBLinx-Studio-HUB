
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
  const titleParallax = useParallax({ speed: 0.2, direction: 'up' });

  const heightClasses = {
    sm: 'py-24',
    md: 'py-32',
    lg: 'py-40',
    xl: 'py-48'
  };

  const renderThemeContent = () => {
    switch (theme) {
      case 'premium':
        return (
          <>
            {/* Background Layer */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `translateY(${background.offset}px)`,
                opacity: background.isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Midground Layer - Pattern Grid */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px)`,
                opacity: midground.isVisible ? 0.6 : 0,
                transition: 'opacity 0.8s ease-out'
              }}
            >
              <div className="grid grid-cols-5 gap-4 max-w-sm">
                {Array.from({ length: 15 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-2 h-2 bg-slate-600/50 animate-pulse"
                    style={{ animationDelay: `${index * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Foreground Layer - Lines */}
            <div 
              ref={foreground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${foreground.offset}px)`,
                opacity: foreground.isVisible ? 1 : 0,
                transition: 'opacity 0.4s ease-out'
              }}
            >
              <div className="flex items-center space-x-8">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent animate-pulse"></div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent animate-pulse delay-500"></div>
              </div>
            </div>
          </>
        );

      case 'neural':
        return (
          <>
            {/* Background Layer - Connected Vertices */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `translateY(${background.offset}px) scale(${1 + background.offset * 0.001})`,
                opacity: background.isVisible ? 0.3 : 0,
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 800 400">
                <defs>
                  <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none">
                  <line x1="100" y1="80" x2="200" y2="150" className="animate-pulse" />
                  <line x1="200" y1="150" x2="350" y2="120" className="animate-pulse" style={{animationDelay: '300ms'}} />
                  <line x1="350" y1="120" x2="500" y2="200" className="animate-pulse" style={{animationDelay: '600ms'}} />
                </g>
                
                <g fill="url(#neuralGradient)">
                  <circle cx="200" cy="150" r="4" className="animate-pulse" style={{animationDelay: '200ms'}} />
                  <circle cx="350" cy="120" r="3" className="animate-pulse" style={{animationDelay: '400ms'}} />
                  <circle cx="500" cy="200" r="5" className="animate-pulse" style={{animationDelay: '600ms'}} />
                </g>
              </svg>
            </div>

            {/* Midground Layer - Floating Elements */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px) rotateZ(${midground.offset * 0.1}deg)`,
                opacity: midground.isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-out'
              }}
            >
              <div className="flex items-center space-x-12">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-3 h-3 bg-purple-400/60 animate-pulse"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent"></div>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-3 h-3 bg-blue-400/60 animate-pulse delay-500"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-blue-400/30 to-transparent"></div>
                </div>
              </div>
            </div>
          </>
        );

      case 'geometric':
        return (
          <>
            {/* Background Layer - Geometric Grid */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `translateY(${background.offset}px)`,
                opacity: background.isVisible ? 0.15 : 0,
                transition: 'opacity 0.7s ease-out'
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 400 400">
                <defs>
                  <pattern id="geometricGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="20" cy="20" r="2" fill="#06b6d4" opacity="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#geometricGrid)" />
              </svg>
            </div>

            {/* Midground Layer - Animated Shapes */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px) scale(${1 + midground.offset * 0.002})`,
                opacity: midground.isVisible ? 0.8 : 0,
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <div className="grid grid-cols-6 gap-4 max-w-md">
                {Array.from({ length: 18 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${
                      index % 4 === 0 ? 'w-3 h-3 bg-green-400/30' : 
                      index % 4 === 1 ? 'w-2 h-2 bg-blue-400/30' : 
                      index % 4 === 2 ? 'w-4 h-4 bg-cyan-400/30' : 'w-2 h-2 bg-purple-400/30'
                    } animate-pulse`}
                    style={{ animationDelay: `${index * 75}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </>
        );

      case 'developer':
        return (
          <>
            {/* Background Layer - Circuit Board */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `translateY(${background.offset}px)`,
                opacity: background.isVisible ? 0.2 : 0,
                transition: 'opacity 0.8s ease-out'
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 800 600">
                <defs>
                  <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
                  <line x1="50" y1="100" x2="300" y2="100" className="animate-pulse" />
                  <line x1="320" y1="100" x2="600" y2="100" className="animate-pulse" style={{animationDelay: '200ms'}} />
                  <line x1="150" y1="80" x2="150" y2="320" className="animate-pulse" style={{animationDelay: '300ms'}} />
                </g>
                
                <g fill="url(#circuitGradient)">
                  <rect x="145" y="95" width="10" height="10" rx="2" className="animate-pulse" />
                  <rect x="295" y="95" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '200ms'}} />
                </g>
              </svg>
            </div>

            {/* Midground Layer - Tech Grid */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px)`,
                opacity: midground.isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-out'
              }}
            >
              <div className="grid grid-cols-5 gap-6 max-w-lg">
                {[
                  { color: "bg-blue-400/30", size: "w-4 h-4", delay: "0ms" },
                  { color: "bg-green-400/30", size: "w-3 h-3", delay: "100ms" },
                  { color: "bg-purple-400/30", size: "w-5 h-5", delay: "200ms" },
                  { color: "bg-cyan-400/30", size: "w-3 h-3", delay: "300ms" },
                  { color: "bg-pink-400/30", size: "w-4 h-4", delay: "400ms" }
                ].map((dot, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <div 
                      className={`${dot.color} ${dot.size} animate-pulse`}
                      style={{ animationDelay: dot.delay }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'terminal':
        return (
          <>
            {/* Background Layer - Data Flow */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none"
              style={{
                transform: `translateY(${background.offset}px)`,
                opacity: background.isVisible ? 0.25 : 0,
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 1000 400">
                <defs>
                  <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
                    <stop offset="50%" stopColor="#64748b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <g stroke="url(#dataFlowGradient)" strokeWidth="1" fill="none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <g key={i}>
                      <line 
                        x1="0" 
                        y1={50 + i * 40} 
                        x2="1000" 
                        y2={50 + i * 40} 
                        className="animate-pulse" 
                        style={{animationDelay: `${i * 200}ms`}} 
                      />
                      <circle 
                        cx={100 + (i * 120)} 
                        cy={50 + i * 40} 
                        r="2" 
                        fill="#64748b" 
                        opacity="0.6"
                        className="animate-pulse" 
                        style={{animationDelay: `${i * 300}ms`}} 
                      />
                    </g>
                  ))}
                </g>
              </svg>
            </div>

            {/* Midground Layer - Terminal Grid */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px)`,
                opacity: midground.isVisible ? 0.8 : 0,
                transition: 'opacity 0.4s ease-out'
              }}
            >
              <div className="grid grid-cols-8 gap-2 max-w-2xl">
                {Array.from({ length: 32 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-1 h-1 ${
                      index % 5 === 0 ? 'bg-slate-400/40' : 
                      index % 5 === 1 ? 'bg-slate-500/40' : 
                      index % 5 === 2 ? 'bg-slate-600/40' : 
                      index % 5 === 3 ? 'bg-slate-400/30' : 'bg-slate-500/30'
                    } animate-pulse`}
                    style={{ animationDelay: `${index * 25}ms` }}
                  ></div>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className={cn(
      'relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700/50',
      heightClasses[height]
    )}>
      {renderThemeContent()}
      
      {/* Title with Parallax */}
      <div 
        ref={titleParallax.elementRef}
        className="container mx-auto px-4 text-center relative z-10"
        style={{
          transform: `translateY(${titleParallax.offset}px)`,
          opacity: titleParallax.isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <div className="px-6 py-3 bg-slate-800/95 border border-slate-600 backdrop-blur-sm inline-block">
          <div className="text-slate-500 font-mono text-xs font-black tracking-widest">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxDivider;
