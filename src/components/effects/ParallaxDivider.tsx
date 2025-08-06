
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
            {/* Background Layer - Large Glowing Orbs */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                transform: `translateY(${background.offset}px) scale(${1 + background.offset * 0.001})`,
                opacity: background.isVisible ? 0.8 : 0,
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/25 blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/15 blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Midground Layer - Floating Elements */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px) rotateZ(${midground.offset * 0.05}deg)`,
                opacity: midground.isVisible ? 0.9 : 0,
                transition: 'opacity 0.8s ease-out'
              }}
            >
              <div className="grid grid-cols-7 gap-8 max-w-4xl">
                {Array.from({ length: 35 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${
                      index % 5 === 0 ? 'w-6 h-6 bg-purple-400/40' : 
                      index % 5 === 1 ? 'w-4 h-4 bg-blue-400/50' : 
                      index % 5 === 2 ? 'w-5 h-5 bg-pink-400/45' : 
                      index % 5 === 3 ? 'w-3 h-3 bg-cyan-400/40' : 'w-4 h-4 bg-violet-400/50'
                    } blur-sm animate-pulse`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Foreground Layer - Geometric Lines */}
            <div 
              ref={foreground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${foreground.offset}px)`,
                opacity: foreground.isVisible ? 1 : 0,
                transition: 'opacity 0.4s ease-out'
              }}
            >
              <div className="flex items-center space-x-12">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>
                <div className="w-8 h-8 border-2 border-blue-400/60 rotate-45 animate-pulse delay-300"></div>
                <div className="w-32 h-0.5 bg-gradient-to-l from-transparent via-pink-400 to-transparent animate-pulse delay-500"></div>
              </div>
            </div>
          </>
        );

      case 'neural':
        return (
          <>
            {/* Background Layer - Neural Network */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                transform: `translateY(${background.offset}px) scale(${1 + background.offset * 0.001})`,
                opacity: background.isVisible ? 0.6 : 0,
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.7" />
                  </linearGradient>
                </defs>
                
                <g stroke="url(#neuralGradient)" strokeWidth="2" fill="none">
                  <line x1="100" y1="100" x2="300" y2="200" className="animate-pulse" />
                  <line x1="300" y1="200" x2="500" y2="150" className="animate-pulse" style={{animationDelay: '300ms'}} />
                  <line x1="500" y1="150" x2="700" y2="250" className="animate-pulse" style={{animationDelay: '600ms'}} />
                  <line x1="700" y1="250" x2="900" y2="180" className="animate-pulse" style={{animationDelay: '900ms'}} />
                  <line x1="200" y1="300" x2="400" y2="400" className="animate-pulse" style={{animationDelay: '450ms'}} />
                  <line x1="400" y1="400" x2="600" y2="350" className="animate-pulse" style={{animationDelay: '750ms'}} />
                </g>
                
                <g fill="url(#neuralGradient)">
                  <circle cx="300" cy="200" r="8" className="animate-pulse" style={{animationDelay: '200ms'}} />
                  <circle cx="500" cy="150" r="6" className="animate-pulse" style={{animationDelay: '400ms'}} />
                  <circle cx="700" cy="250" r="10" className="animate-pulse" style={{animationDelay: '600ms'}} />
                  <circle cx="400" cy="400" r="7" className="animate-pulse" style={{animationDelay: '800ms'}} />
                </g>
              </svg>
            </div>

            {/* Midground Layer - Data Nodes */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px) rotateZ(${midground.offset * 0.1}deg)`,
                opacity: midground.isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-out'
              }}
            >
              <div className="grid grid-cols-6 gap-16 max-w-5xl">
                {Array.from({ length: 18 }).map((_, index) => (
                  <div key={index} className="flex flex-col items-center space-y-4">
                    <div className={`${
                      index % 3 === 0 ? 'w-6 h-6 bg-purple-400/70' : 
                      index % 3 === 1 ? 'w-5 h-5 bg-blue-400/70' : 'w-4 h-4 bg-pink-400/70'
                    } animate-pulse`} style={{animationDelay: `${index * 200}ms`}}></div>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-purple-400/40 to-cyan-400/40 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case 'geometric':
        return (
          <>
            {/* Background Layer - Geometric Patterns */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                transform: `translateY(${background.offset}px)`,
                opacity: background.isVisible ? 0.4 : 0,
                transition: 'opacity 0.7s ease-out'
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="geometricGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect width="80" height="80" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.5" />
                    <circle cx="40" cy="40" r="4" fill="#06b6d4" opacity="0.6" />
                    <polygon points="20,20 60,20 40,60" fill="#8b5cf6" opacity="0.4" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#geometricGrid)" />
              </svg>
            </div>

            {/* Midground Layer - Floating Shapes */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px) scale(${1 + midground.offset * 0.002})`,
                opacity: midground.isVisible ? 0.9 : 0,
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <div className="grid grid-cols-8 gap-6 max-w-6xl">
                {Array.from({ length: 40 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${
                      index % 6 === 0 ? 'w-8 h-8 bg-green-400/50 rotate-45' : 
                      index % 6 === 1 ? 'w-6 h-6 bg-blue-400/60 rotate-12' : 
                      index % 6 === 2 ? 'w-10 h-10 bg-cyan-400/45 rotate-90' : 
                      index % 6 === 3 ? 'w-5 h-5 bg-purple-400/55 rotate-30' : 
                      index % 6 === 4 ? 'w-7 h-7 bg-pink-400/50 rotate-60' : 'w-4 h-4 bg-yellow-400/60'
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
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                transform: `translateY(${background.offset}px)`,
                opacity: background.isVisible ? 0.5 : 0,
                transition: 'opacity 0.8s ease-out'
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                    <stop offset="33%" stopColor="#10b981" stopOpacity="0.6" />
                    <stop offset="66%" stopColor="#8b5cf6" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                
                <g stroke="url(#circuitGradient)" strokeWidth="3" fill="none">
                  <line x1="0" y1="150" x2="400" y2="150" className="animate-pulse" />
                  <line x1="450" y1="150" x2="800" y2="150" className="animate-pulse" style={{animationDelay: '200ms'}} />
                  <line x1="850" y1="150" x2="1200" y2="150" className="animate-pulse" style={{animationDelay: '400ms'}} />
                  <line x1="200" y1="0" x2="200" y2="400" className="animate-pulse" style={{animationDelay: '300ms'}} />
                  <line x1="600" y1="100" x2="600" y2="500" className="animate-pulse" style={{animationDelay: '500ms'}} />
                  <line x1="1000" y1="50" x2="1000" y2="450" className="animate-pulse" style={{animationDelay: '700ms'}} />
                </g>
                
                <g fill="url(#circuitGradient)">
                  <rect x="195" y="145" width="10" height="10" rx="2" className="animate-pulse" />
                  <rect x="395" y="145" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '200ms'}} />
                  <rect x="595" y="145" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '400ms'}} />
                  <rect x="995" y="145" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '600ms'}} />
                </g>
              </svg>
            </div>

            {/* Midground Layer - Tech Elements */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px)`,
                opacity: midground.isVisible ? 1 : 0,
                transition: 'opacity 0.5s ease-out'
              }}
            >
              <div className="grid grid-cols-7 gap-8 max-w-6xl">
                {[
                  { color: "bg-blue-400/60", size: "w-8 h-8", delay: "0ms" },
                  { color: "bg-green-400/70", size: "w-6 h-6", delay: "100ms" },
                  { color: "bg-purple-400/65", size: "w-10 h-10", delay: "200ms" },
                  { color: "bg-cyan-400/60", size: "w-7 h-7", delay: "300ms" },
                  { color: "bg-pink-400/65", size: "w-9 h-9", delay: "400ms" },
                  { color: "bg-yellow-400/70", size: "w-5 h-5", delay: "500ms" },
                  { color: "bg-indigo-400/60", size: "w-8 h-8", delay: "600ms" }
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
            {/* Background Layer - Data Streams */}
            <div 
              ref={background.elementRef}
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                transform: `translateY(${background.offset}px)`,
                opacity: background.isVisible ? 0.6 : 0,
                transition: 'opacity 0.6s ease-out'
              }}
            >
              <svg className="w-full h-full" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
                    <stop offset="25%" stopColor="#64748b" stopOpacity="0.8" />
                    <stop offset="75%" stopColor="#64748b" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                <g stroke="url(#dataFlowGradient)" strokeWidth="2" fill="none">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <g key={i}>
                      <line 
                        x1="0" 
                        y1={40 + i * 45} 
                        x2="1400" 
                        y2={40 + i * 45} 
                        className="animate-pulse" 
                        style={{animationDelay: `${i * 150}ms`}} 
                      />
                      <circle 
                        cx={150 + (i * 100)} 
                        cy={40 + i * 45} 
                        r="3" 
                        fill="#64748b" 
                        opacity="0.8"
                        className="animate-pulse" 
                        style={{animationDelay: `${i * 200}ms`}} 
                      />
                      <circle 
                        cx={800 + (i * 50)} 
                        cy={40 + i * 45} 
                        r="2" 
                        fill="#94a3b8" 
                        opacity="0.6"
                        className="animate-pulse" 
                        style={{animationDelay: `${i * 250}ms`}} 
                      />
                    </g>
                  ))}
                </g>
              </svg>
            </div>

            {/* Midground Layer - Terminal Matrix */}
            <div 
              ref={midground.elementRef}
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              style={{
                transform: `translateY(${midground.offset}px)`,
                opacity: midground.isVisible ? 0.9 : 0,
                transition: 'opacity 0.4s ease-out'
              }}
            >
              <div className="grid grid-cols-12 gap-3 max-w-7xl">
                {Array.from({ length: 60 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${
                      index % 7 === 0 ? 'w-3 h-3 bg-slate-400/60' : 
                      index % 7 === 1 ? 'w-2 h-2 bg-slate-500/70' : 
                      index % 7 === 2 ? 'w-4 h-4 bg-slate-600/50' : 
                      index % 7 === 3 ? 'w-2 h-2 bg-slate-400/80' : 
                      index % 7 === 4 ? 'w-3 h-3 bg-slate-500/60' :
                      index % 7 === 5 ? 'w-2 h-2 bg-slate-600/70' : 'w-3 h-3 bg-slate-400/50'
                    } animate-pulse`}
                    style={{ animationDelay: `${index * 50}ms` }}
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
        <div className="px-8 py-4 bg-slate-800/95 border border-slate-600 backdrop-blur-sm inline-block">
          <div className="text-slate-400 font-mono text-sm font-black tracking-widest">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxDivider;
