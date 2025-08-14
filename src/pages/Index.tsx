
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GamesSection from '../components/GamesSection';
import ProductsShowcase from '../components/ProductsShowcase';
import WebAppsSection from '../components/WebAppsSection';
import DeveloperTools from '../components/DeveloperTools';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParallaxBackground from '../components/effects/ParallaxBackground';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';

const Index = () => {
  const { getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: true,
    friction: 0.96,
    momentum: 1.25
  });

  return <div className="min-h-screen bg-slate-950 overflow-x-hidden relative">
      {/* Parallax Background Layer */}
      <ParallaxBackground />
      
      {/* Main Content - positioned above parallax background */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          
          {/* NEW Page Break 1 - Hero to Services - Deep Portal Window */}
          <div className="h-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Deep Window Background - Layer 1 (Slowest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.1)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/40 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-blue-950/30 via-transparent to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-500/20 rounded-full animate-pulse"></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={getParallaxStyle(0.2)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-blue-900/20 via-transparent to-cyan-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-cyan-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              {Array.from({length: 12}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/50 rounded-full animate-pulse"
                  style={{
                    left: `${45 + Math.cos(i * 0.5) * 10}%`,
                    top: `${45 + Math.sin(i * 0.5) * 10}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={getParallaxStyle(0.4)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-blue-300/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10 py-16">
              <div className="px-6 py-2 bg-zinc-800/90 border border-blue-500/30 backdrop-blur-sm rounded-sm inline-block">
                <div className="text-blue-400 font-mono text-xs font-black tracking-widest">
                  TECHNOLOGY PORTAL
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Services Overview */}
          <Services />
          
          {/* Page Break 2 - Services to Games - Gaming Portal Window */}
          <div className="h-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Deep Window Background - Layer 1 (Slowest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.1)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/40 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-emerald-950/30 via-transparent to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-emerald-500/20 rounded-full animate-pulse"></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={getParallaxStyle(0.25)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-emerald-900/20 via-transparent to-green-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-emerald-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              {Array.from({length: 16}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-pulse"
                  style={{
                    left: `${40 + Math.random() * 20}%`,
                    top: `${40 + Math.random() * 20}%`,
                    animationDelay: `${Math.random() * 4}s`
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={getParallaxStyle(0.45)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-emerald-300/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-emerald-400/10 via-transparent to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10 py-16">
              <div className="px-6 py-2 bg-zinc-800/90 border border-emerald-500/30 backdrop-blur-sm rounded-sm inline-block">
                <div className="text-emerald-400 font-mono text-xs font-black tracking-widest">
                  GAMING UNIVERSE
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS */}
          <div className="animate-fade-in">
            <GamesSection />
          </div>
          
          {/* Page Break 3 - Games to Products - Products Portal Window */}
          <div className="h-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Deep Window Background - Layer 1 (Slowest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.12)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/40 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-violet-950/30 via-transparent to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-violet-500/20 rounded-full animate-pulse"></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={getParallaxStyle(0.28)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-violet-900/20 via-transparent to-purple-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-violet-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              {Array.from({length: 18}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-violet-400/50 rounded-full animate-pulse"
                  style={{
                    left: `${45 + Math.cos(i * 0.4) * 12}%`,
                    top: `${45 + Math.sin(i * 0.4) * 12}%`,
                    animationDelay: `${i * 0.25}s`
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={getParallaxStyle(0.5)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-violet-300/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-violet-400/10 via-transparent to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10 py-16">
              <div className="px-6 py-2 bg-zinc-800/90 border border-violet-500/30 backdrop-blur-sm rounded-sm inline-block">
                <div className="text-violet-400 font-mono text-xs font-black tracking-widest">
                  PRODUCT SHOWCASE
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS */}
          <div className="animate-fade-in">
            <ProductsShowcase />
          </div>
          
          {/* Page Break 4 - Products to Web Apps - Web Apps Portal Window */}
          <div className="h-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Deep Window Background - Layer 1 (Slowest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.08)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/40 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-cyan-950/30 via-transparent to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] border border-cyan-500/20 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={getParallaxStyle(0.22)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-cyan-900/20 via-transparent to-teal-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-cyan-400/15 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s'}}></div>
              {Array.from({length: 20}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-6 bg-gradient-to-b from-cyan-400/60 to-transparent animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 20 - 10}deg)`
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={getParallaxStyle(0.42)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] border border-cyan-300/10 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '2s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10 py-16">
              <div className="px-6 py-2 bg-zinc-800/90 border border-cyan-500/30 backdrop-blur-sm rounded-sm inline-block">
                <div className="text-cyan-400 font-mono text-xs font-black tracking-widest">
                  WEB APPLICATIONS
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 3: APP USERS */}
          <div className="animate-fade-in">
            <WebAppsSection />
          </div>
          
          {/* Page Break 5 - Web Apps to Developer Tools - Developer Portal Window */}
          <div className="h-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Deep Window Background - Layer 1 (Slowest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.15)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/40 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-amber-950/30 via-transparent to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] border-2 border-amber-500/20 rounded-full animate-pulse" style={{borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%'}}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={getParallaxStyle(0.32)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-amber-900/20 via-transparent to-orange-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-amber-400/15 rounded-full animate-pulse" style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%', animationDelay: '1s'}}></div>
              {Array.from({length: 25}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse ${i % 3 === 0 ? 'w-1.5 h-1.5 bg-amber-400/60' : i % 3 === 1 ? 'w-1 h-1 bg-orange-400/60' : 'w-0.5 h-0.5 bg-amber-300/60'}`}
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    clipPath: i % 4 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'circle(50%)'
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={getParallaxStyle(0.48)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border border-amber-300/10 rounded-full animate-pulse" style={{borderRadius: '70% 30% 30% 70% / 30% 60% 40% 70%', animationDelay: '2s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-amber-400/10 via-transparent to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10 py-16">
              <div className="px-6 py-2 bg-zinc-800/90 border border-amber-500/30 backdrop-blur-sm rounded-sm inline-block">
                <div className="text-amber-400 font-mono text-xs font-black tracking-widest">
                  DEVELOPER MATRIX
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 4: DEVELOPERS */}
          <div className="animate-fade-in">
            <DeveloperTools />
          </div>
          
          {/* Page Break 6 - Developer Tools to Contact - Contact Portal Window */}
          <div className="h-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Deep Window Background - Layer 1 (Slowest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.09)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/40 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-indigo-950/30 via-transparent to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/20 rounded-full animate-spin" style={{animationDuration: '20s', background: 'conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.1), transparent)'}}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40"
              style={getParallaxStyle(0.26)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-indigo-900/20 via-transparent to-purple-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-indigo-400/15 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse', background: 'conic-gradient(from 180deg, transparent, rgba(129, 140, 248, 0.1), transparent)'}}></div>
              {Array.from({length: 30}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse ${Math.random() > 0.7 ? 'w-1 h-1 bg-indigo-300/70' : Math.random() > 0.4 ? 'w-0.5 h-0.5 bg-purple-300/60' : 'w-0.5 h-0.5 bg-indigo-400/50'}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={getParallaxStyle(0.44)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] border border-indigo-300/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-indigo-400/10 via-transparent to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10 py-16">
              <div className="px-6 py-2 bg-zinc-800/90 border border-indigo-500/30 backdrop-blur-sm rounded-sm inline-block">
                <div className="text-indigo-400 font-mono text-xs font-black tracking-widest">
                  CONTACT TERMINAL
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="animate-fade-in">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>;
};

export default Index;
