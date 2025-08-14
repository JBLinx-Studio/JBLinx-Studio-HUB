import React, { useRef, useMemo } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ParallaxBackground from '../components/effects/ParallaxBackground';
import InteractiveParticles from '../components/effects/InteractiveParticles';
import LazySection from '../components/common/LazySection';

// Lazy load heavy components with better chunking
const GamesSection = React.lazy(() => import('../components/GamesSection'));
const ProductsShowcase = React.lazy(() => import('../components/ProductsShowcase'));
const WebAppsSection = React.lazy(() => import('../components/WebAppsSection'));
const DeveloperTools = React.lazy(() => import('../components/DeveloperTools'));
const Services = React.lazy(() => import('../components/Services'));
const Contact = React.lazy(() => import('../components/Contact'));
const Footer = React.lazy(() => import('../components/Footer'));

// Optimized fallback component
const OptimizedFallback = React.memo(({ height = "h-96" }: { height?: string }) => (
  <div className={`${height} bg-slate-950/50 animate-pulse rounded-lg`} />
));

const Index = () => {
  // Memoized refs to prevent re-creation
  const portalRefs = useMemo(() => ({
    portal1: useRef<HTMLDivElement>(null),
    portal2: useRef<HTMLDivElement>(null),
    portal3: useRef<HTMLDivElement>(null),
    portal4: useRef<HTMLDivElement>(null),
    portal5: useRef<HTMLDivElement>(null),
  }), []);

  // Memoized portal configurations
  const portalConfigs = useMemo(() => [
    {
      theme: 'emerald' as const,
      particleCount: 25,
      ref: portalRefs.portal1,
      title: 'GAMING UNIVERSE',
      cursor: 'cursor-crosshair'
    },
    {
      theme: 'blue' as const,
      particleCount: 75,
      ref: portalRefs.portal2,
      title: 'PRODUCT SHOWCASE',
      cursor: 'cursor-move'
    },
    {
      theme: 'green' as const,
      particleCount: 90,
      ref: portalRefs.portal3,
      title: 'WEB APPLICATIONS',
      cursor: 'cursor-grab active:cursor-grabbing'
    },
    {
      theme: 'orange' as const,
      particleCount: 85,
      ref: portalRefs.portal4,
      title: 'DEVELOPER MATRIX',
      cursor: 'cursor-cell'
    },
    {
      theme: 'purple' as const,
      particleCount: 70,
      ref: portalRefs.portal5,
      title: 'CONTACT TERMINAL',
      cursor: 'cursor-zoom-in'
    }
  ], [portalRefs]);

  // Memoized portal break component to reduce duplication
  const PortalBreak = React.memo(({ 
    config, 
    index, 
    children 
  }: { 
    config: typeof portalConfigs[0]; 
    index: number; 
    children: React.ReactNode; 
  }) => (
    <div className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
      <div 
        ref={config.ref}
        className={`absolute inset-0 pointer-events-auto ${config.cursor}`}
      >
        <InteractiveParticles 
          theme={config.theme} 
          particleCount={config.particleCount}
          containerRef={config.ref}
        />
      </div>
      {children}
    </div>
  ));

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden relative">
      {/* Parallax Background Layer */}
      <ParallaxBackground />
      
      {/* Main Content - positioned above parallax background */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          
          {/* Enhanced Services Overview */}
          <React.Suspense fallback={<OptimizedFallback />}>
            <LazySection>
              <Services />
            </LazySection>
          </React.Suspense>
          
          {/* Portal Break 1 - Emerald Gaming */}
          <PortalBreak config={portalConfigs[0]} index={0}>
            {/* Enhanced Deep Portal Background with interactive elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Multi-layered depth effect */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-900/60 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-emerald-950/30 via-transparent to-transparent transform-gpu" style={{transform: 'translateZ(-100px)'}}></div>
              
              {/* Interactive depth rings with hover effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[800px] h-[800px] border border-emerald-500/30 rounded-full animate-pulse hover:border-emerald-400/50 transition-all duration-1000"></div>
                <div className="absolute inset-4 border border-emerald-400/20 rounded-full animate-pulse hover:border-emerald-300/40 transition-all duration-1000" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-8 border border-emerald-300/15 rounded-full animate-pulse hover:border-emerald-200/30 transition-all duration-1000" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Enhanced floating particles with interactive behavior */}
              {Array.from({length: 30}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-emerald-400/70 rounded-full animate-pulse hover:bg-emerald-300/90 hover:scale-150 transition-all duration-300 cursor-pointer"
                  style={{
                    left: `${35 + Math.random() * 30}%`,
                    top: `${35 + Math.random() * 30}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    transform: `translateZ(-${Math.random() * 200}px)`,
                    boxShadow: '0 0 15px rgba(16, 185, 129, 0.6)'
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse hover:via-emerald-300/80 transition-all duration-500"></div>
                <div className="px-6 py-3 bg-zinc-800/95 border border-emerald-500/30 backdrop-blur-sm rounded-sm hover:border-emerald-400/50 hover:bg-zinc-700/95 transition-all duration-300 cursor-pointer group">
                  <div className="text-emerald-400 font-mono text-sm font-black tracking-widest group-hover:text-emerald-300 transition-colors">
                    {portalConfigs[0].title}
                  </div>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse hover:via-emerald-300/80 transition-all duration-500 delay-500"></div>
              </div>
              
              <div className="grid grid-cols-8 gap-2 max-w-md mx-auto mb-8">
                {Array.from({length: 16}).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-2 h-2 bg-emerald-400/40 animate-pulse hover:bg-emerald-300/70 hover:scale-150 transition-all duration-300 cursor-pointer" 
                    style={{animationDelay: `${index * 100}ms`}}
                  ></div>
                ))}
              </div>
            </div>
          </PortalBreak>
          
          {/* PRIORITY 1: GAMERS */}
          <React.Suspense fallback={<OptimizedFallback height="h-[600px]" />}>
            <LazySection className="animate-fade-in">
              <GamesSection />
            </LazySection>
          </React.Suspense>
          
          {/* Portal Break 2 - Blue Products */}
          <PortalBreak config={portalConfigs[1]} index={1}>
            {/* Enhanced Vortex Portal Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-conic from-blue-950/40 via-transparent to-cyan-950/40"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-900/70 to-zinc-950"></div>
              
              {/* Interactive rotating vortex rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[700px] h-[700px] border-2 border-blue-500/30 rounded-full animate-spin hover:border-blue-400/50 transition-all duration-1000" style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-6 border border-cyan-400/25 rounded-full animate-spin hover:border-cyan-300/45 transition-all duration-1000" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-12 border border-blue-300/20 rounded-full animate-spin hover:border-blue-200/40 transition-all duration-1000" style={{animationDuration: '10s'}}></div>
              </div>
              
              {/* Enhanced spiral particles with interactivity */}
              {Array.from({length: 35}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/60 rounded-full animate-pulse hover:bg-blue-300/90 hover:scale-200 transition-all duration-300 cursor-pointer"
                  style={{
                    left: `${40 + Math.cos(i * 0.5) * 20}%`,
                    top: `${40 + Math.sin(i * 0.5) * 20}%`,
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center items-center space-x-10 mb-12">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-4 h-4 bg-blue-400/60 rounded-full animate-pulse"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-blue-400/30 to-transparent"></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-800/95 border border-blue-500/30 backdrop-blur-sm rounded-sm">
                  <div className="text-blue-400 font-mono text-sm font-black tracking-widest">
                    {portalConfigs[1].title}
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-4 h-4 bg-cyan-400/60 rounded-full animate-pulse delay-500"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-l from-cyan-400/30 to-transparent"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-6 gap-3 max-w-lg mx-auto mb-8">
                {Array.from({length: 12}).map((_, index) => (
                  <div key={index} className={`w-3 h-3 ${index % 3 === 0 ? 'bg-blue-400/40' : index % 3 === 1 ? 'bg-cyan-400/40' : 'bg-blue-300/40'} rounded-full animate-pulse`} style={{animationDelay: `${index * 150}ms`}}></div>
                ))}
              </div>
            </div>
          </PortalBreak>
          
          {/* PRIORITY 2: GENERAL PRODUCTS */}
          <React.Suspense fallback={<OptimizedFallback height="h-[600px]" />}>
            <LazySection className="animate-fade-in">
              <ProductsShowcase />
            </LazySection>
          </React.Suspense>
          
          {/* Portal Break 3 - Green Web Apps */}
          <PortalBreak config={portalConfigs[2]} index={2}>
            {/* Enhanced Matrix-style Portal */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-green-950/30 via-transparent to-zinc-950"></div>
              
              {/* Interactive hexagonal portal frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[600px] h-[600px] border border-green-500/40 animate-pulse hover:border-green-400/60 transition-all duration-1000" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                </div>
                <div className="absolute inset-8 border border-green-400/30 animate-pulse hover:border-green-300/50 transition-all duration-1000" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s'}}>
                </div>
              </div>
              
              {/* Enhanced matrix rain effect with interactivity */}
              {Array.from({length: 40}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-12 bg-gradient-to-b from-green-400/70 to-transparent animate-pulse hover:from-green-300/90 hover:w-2 transition-all duration-300 cursor-pointer"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 20 - 10}deg)`,
                    boxShadow: '0 0 8px rgba(34, 197, 94, 0.4)'
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-green-400/60 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-12 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-green-400/50 animate-pulse"></div>
                  <div className="w-4 h-4 bg-green-400/50 animate-pulse delay-200" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-800/95 border border-green-500/30 backdrop-blur-sm rounded-sm">
                  <div className="text-green-400 font-mono text-sm font-black tracking-widest">
                    {portalConfigs[2].title}
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-green-400/50 animate-pulse delay-300"></div>
                  <div className="w-4 h-4 bg-green-400/50 animate-pulse delay-500" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-8 gap-2 max-w-xl mx-auto mb-16">
                {Array.from({length: 16}).map((_, index) => (
                  <div key={index} className={`${index % 4 === 0 ? 'w-4 h-4 bg-green-400/30' : index % 4 === 1 ? 'w-3 h-3 bg-green-300/30' : index % 4 === 2 ? 'w-2 h-2 bg-green-500/30' : 'w-3 h-3 bg-green-200/30'} animate-pulse`} style={{animationDelay: `${index * 100}ms`, clipPath: index % 2 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'circle(50%)'}}></div>
                ))}
              </div>
            </div>
          </PortalBreak>
          
          {/* PRIORITY 3: APP USERS */}
          <React.Suspense fallback={<OptimizedFallback height="h-[600px]" />}>
            <LazySection className="animate-fade-in">
              <WebAppsSection />
            </LazySection>
          </React.Suspense>
          
          {/* Portal Break 4 - Orange Developer Tools */}
          <PortalBreak config={portalConfigs[3]} index={3}>
            {/* Enhanced Fire/Energy Portal */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-orange-950/40 via-red-950/30 to-zinc-950"></div>
              
              {/* Interactive flame-like portal rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[750px] h-[750px] border-2 border-orange-500/40 rounded-full animate-pulse hover:border-orange-400/60 transition-all duration-1000" style={{borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%'}}></div>
                <div className="absolute inset-6 border border-red-400/30 rounded-full animate-pulse hover:border-red-300/50 transition-all duration-1000" style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%', animationDelay: '1s'}}></div>
                <div className="absolute inset-12 border border-amber-400/25 rounded-full animate-pulse hover:border-amber-300/45 transition-all duration-1000" style={{borderRadius: '70% 30% 30% 70% / 30% 60% 40% 70%', animationDelay: '2s'}}></div>
              </div>
              
              {/* Enhanced energy sparks with interactivity */}
              {Array.from({length: 45}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse hover:scale-300 transition-all duration-300 cursor-pointer ${i % 3 === 0 ? 'w-2.5 h-2.5 bg-orange-400/70 hover:bg-orange-300/90' : i % 3 === 1 ? 'w-2 h-2 bg-red-400/70 hover:bg-red-300/90' : 'w-1.5 h-1.5 bg-amber-400/70 hover:bg-amber-300/90'}`}
                  style={{
                    left: `${25 + Math.random() * 50}%`,
                    top: `${25 + Math.random() * 50}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    clipPath: i % 4 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'circle(50%)',
                    boxShadow: i % 3 === 0 ? '0 0 15px rgba(249, 115, 22, 0.6)' : i % 3 === 1 ? '0 0 12px rgba(239, 68, 68, 0.6)' : '0 0 10px rgba(245, 158, 11, 0.6)'
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-14 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-orange-400/50 animate-pulse"></div>
                  <div className="w-5 h-5 bg-orange-400/50 animate-pulse delay-200" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-800/95 border border-orange-500/30 backdrop-blur-sm rounded-sm">
                  <div className="text-orange-400 font-mono text-sm font-black tracking-widest">
                    {portalConfigs[3].title}
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-red-400/50 animate-pulse delay-300"></div>
                  <div className="w-5 h-5 bg-red-400/50 animate-pulse delay-500" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-3 max-w-2xl mx-auto mb-16">
                {Array.from({length: 21}).map((_, index) => (
                  <div key={index} className={`${index % 4 === 0 ? 'w-4 h-4 bg-orange-400/30' : index % 4 === 1 ? 'w-3 h-3 bg-red-400/30' : index % 4 === 2 ? 'w-5 h-5 bg-amber-400/30' : 'w-2 h-2 bg-orange-300/30'} animate-pulse`} style={{animationDelay: `${index * 80}ms`, clipPath: index % 3 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : index % 3 === 1 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'circle(50%)'}}></div>
                ))}
              </div>
            </div>
          </PortalBreak>
          
          {/* PRIORITY 4: DEVELOPERS */}
          <React.Suspense fallback={<OptimizedFallback height="h-[600px]" />}>
            <LazySection className="animate-fade-in">
              <DeveloperTools />
            </LazySection>
          </React.Suspense>
          
          {/* Portal Break 5 - Purple Contact */}
          <PortalBreak config={portalConfigs[4]} index={4}>
            {/* Enhanced Cosmic Portal with Galaxy Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-purple-950/30 via-indigo-950/25 to-zinc-950"></div>
              
              {/* Interactive galaxy spiral */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[650px] h-[650px] border border-purple-500/35 rounded-full animate-spin hover:border-purple-400/55 transition-all duration-1000" style={{animationDuration: '30s', background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.15), transparent)'}}></div>
                <div className="absolute inset-8 border border-indigo-400/25 rounded-full animate-spin hover:border-indigo-300/45 transition-all duration-1000" style={{animationDuration: '20s', animationDirection: 'reverse', background: 'conic-gradient(from 180deg, transparent, rgba(99, 102, 241, 0.15), transparent)'}}></div>
              </div>
              
              {/* Enhanced cosmic stars with interactivity */}
              {Array.from({length: 60}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse hover:scale-300 transition-all duration-300 cursor-pointer ${Math.random() > 0.7 ? 'w-2 h-2 bg-purple-300/80 hover:bg-purple-200/95' : Math.random() > 0.4 ? 'w-1.5 h-1.5 bg-indigo-300/70 hover:bg-indigo-200/90' : 'w-1 h-1 bg-violet-300/60 hover:bg-violet-200/85'}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    boxShadow: Math.random() > 0.7 ? '0 0 15px rgba(196, 181, 253, 0.7)' : Math.random() > 0.4 ? '0 0 12px rgba(165, 180, 252, 0.6)' : '0 0 10px rgba(221, 214, 254, 0.5)'
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-56 h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-16 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-purple-400/50 animate-pulse"></div>
                  <div className="w-4 h-4 bg-purple-400/50 animate-pulse delay-200" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                </div>
                
                <div className="px-10 py-5 bg-zinc-800/95 border border-purple-500/30 backdrop-blur-sm rounded-sm">
                  <div className="text-purple-400 font-mono text-sm font-black tracking-widest">
                    {portalConfigs[4].title}
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-indigo-400/50 animate-pulse delay-300"></div>
                  <div className="w-4 h-4 bg-indigo-400/50 animate-pulse delay-500" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-10 gap-2 max-w-3xl mx-auto mb-16">
                {Array.from({length: 30}).map((_, index) => (
                  <div key={index} className={`${index % 5 === 0 ? 'w-2 h-2 bg-purple-400/40' : index % 5 === 1 ? 'w-1.5 h-1.5 bg-indigo-400/40' : index % 5 === 2 ? 'w-1 h-1 bg-violet-400/40' : index % 5 === 3 ? 'w-2 h-2 bg-purple-300/30' : 'w-1 h-1 bg-indigo-300/30'} animate-pulse`} style={{animationDelay: `${index * 50}ms`, clipPath: index % 4 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'circle(50%)'}}></div>
                ))}
              </div>
            </div>
          </PortalBreak>
          
          {/* Contact Section */}
          <React.Suspense fallback={<OptimizedFallback height="h-[400px]" />}>
            <LazySection className="animate-fade-in">
              <Contact />
            </LazySection>
          </React.Suspense>
        </main>
        <React.Suspense fallback={<OptimizedFallback height="h-32" />}>
          <Footer />
        </React.Suspense>
      </div>
    </div>
  );
};

export default Index;
