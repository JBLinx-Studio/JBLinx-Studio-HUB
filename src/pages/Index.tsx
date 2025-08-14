
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

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden relative">
      {/* Parallax Background Layer */}
      <ParallaxBackground />
      
      {/* Main Content - positioned above parallax background */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          
          {/* NEW Page Break 1 - Hero to Services - Deep Portal Window */}
          <div className="h-[32rem] bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 relative overflow-hidden border-y border-zinc-800/50 backdrop-blur-sm">
            {/* Deep Window Background - Layer 1 (Slowest - Far Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-80"
              style={getParallaxStyle(0.05)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/30 to-zinc-950/60"></div>
              <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 via-transparent to-transparent"></div>
              
              {/* Far Background Geometric Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-2 border-blue-500/15 rounded-full animate-pulse backdrop-blur-[1px]" style={{animationDuration: '8s'}}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-cyan-400/10 rounded-full animate-pulse backdrop-blur-[1px]" style={{animationDelay: '4s', animationDuration: '12s'}}></div>
              
              {/* Far Background Grid */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px'
              }}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium - Mid Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-70"
              style={getParallaxStyle(0.15)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-blue-900/20 via-transparent to-cyan-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-blue-400/25 rounded-full animate-pulse backdrop-blur-[2px]" style={{animationDelay: '2s', animationDuration: '6s'}}></div>
              
              {/* Floating Tech Particles */}
              {Array.from({length: 24}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/40 animate-pulse backdrop-blur-[1px]"
                  style={{
                    left: `${20 + Math.cos(i * 0.3) * 30}%`,
                    top: `${20 + Math.sin(i * 0.3) * 30}%`,
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${3 + Math.random() * 3}s`,
                    clipPath: i % 3 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'circle(50%)',
                    transform: `rotate(${i * 15}deg) scale(${0.8 + Math.random() * 0.4})`,
                    boxShadow: '0 0 8px currentColor'
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest - Near Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.3)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-cyan-300/20 rounded-full animate-pulse backdrop-blur-[3px]" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent"></div>
              
              {/* Interactive Floating Tech Symbols */}
              {Array.from({length: 12}).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-blue-400/50 text-3xl animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer backdrop-blur-[1px]"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${15 + Math.random() * 70}%`,
                    animationDelay: `${Math.random() * 6}s`,
                    animationDuration: `${2 + Math.random() * 4}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    filter: 'drop-shadow(0 0 4px currentColor)'
                  }}
                >
                  {['⚡', '🔧', '⚙️', '💻', '🚀', '⭐', '🔮', '💎', '🎯', '🛡️', '⚔️', '🎪'][i]}
                </div>
              ))}
              
              {/* Interactive Depth Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[200px] h-[200px] border border-blue-300/30 rounded-full animate-spin backdrop-blur-[2px]" style={{animationDuration: '20s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] border border-cyan-300/40 rounded-full animate-spin backdrop-blur-[2px]" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
              </div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-20 py-40">
              <div className="px-8 py-6 bg-zinc-800/80 border border-blue-500/40 backdrop-blur-md rounded-lg inline-block shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-blue-400 font-mono text-lg font-black tracking-widest drop-shadow-lg">
                  TECHNOLOGY PORTAL
                </div>
                <div className="text-blue-300/70 font-mono text-xs mt-2 tracking-wider">
                  SYSTEM INITIALIZED
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Services Overview */}
          <Services />
          
          {/* Page Break 2 - Services to Games - Gaming Portal Window */}
          <div className="h-[32rem] bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 relative overflow-hidden border-y border-zinc-800/50 backdrop-blur-sm">
            {/* Deep Window Background - Layer 1 (Slowest - Far Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-80"
              style={getParallaxStyle(0.04)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/30 to-zinc-950/60"></div>
              <div className="absolute inset-0 bg-gradient-radial from-emerald-950/20 via-transparent to-transparent"></div>
              
              {/* Gaming Geometry */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border-2 border-emerald-500/15 animate-pulse backdrop-blur-[1px]" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', animationDuration: '10s'}}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-green-400/10 animate-pulse backdrop-blur-[1px]" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', animationDelay: '5s', animationDuration: '14s'}}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium - Mid Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-70"
              style={getParallaxStyle(0.18)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-emerald-900/20 via-transparent to-green-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-emerald-400/25 animate-pulse backdrop-blur-[2px]" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', animationDelay: '3s', animationDuration: '8s'}}></div>
              
              {/* Gaming Particles */}
              {Array.from({length: 28}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400/50 animate-pulse backdrop-blur-[1px]"
                  style={{
                    left: `${25 + Math.random() * 50}%`,
                    top: `${25 + Math.random() * 50}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${2 + Math.random() * 4}s`,
                    clipPath: i % 2 === 0 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' : 'circle(50%)',
                    transform: `rotate(${Math.random() * 360}deg) scale(${0.7 + Math.random() * 0.6})`,
                    boxShadow: '0 0 6px currentColor'
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest - Near Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.35)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] border border-emerald-300/25 animate-pulse backdrop-blur-[3px]" style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', animationDelay: '2s', animationDuration: '5s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-emerald-400/10 via-transparent to-transparent"></div>
              
              {/* Interactive Gaming Symbols */}
              {Array.from({length: 14}).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-emerald-400/60 text-4xl animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer backdrop-blur-[1px]"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 7}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    filter: 'drop-shadow(0 0 6px currentColor)'
                  }}
                >
                  {['🎮', '🕹️', '👾', '🎯', '🏆', '⚔️', '🛡️', '🎲', '🎪', '🎨', '🔥', '💫', '⭐', '🌟'][i]}
                </div>
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-20 py-40">
              <div className="px-8 py-6 bg-zinc-800/80 border border-emerald-500/40 backdrop-blur-md rounded-lg inline-block shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-emerald-400 font-mono text-lg font-black tracking-widest drop-shadow-lg">
                  GAMING UNIVERSE
                </div>
                <div className="text-emerald-300/70 font-mono text-xs mt-2 tracking-wider">
                  LEVEL UP INITIATED
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS */}
          <div className="animate-fade-in">
            <GamesSection />
          </div>
          
          {/* Page Break 3 - Games to Products - Products Portal Window */}
          <div className="h-[32rem] bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 relative overflow-hidden border-y border-zinc-800/50 backdrop-blur-sm">
            {/* Deep Window Background - Layer 1 (Slowest - Far Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-80"
              style={getParallaxStyle(0.06)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/30 to-zinc-950/60"></div>
              <div className="absolute inset-0 bg-gradient-radial from-violet-950/20 via-transparent to-transparent"></div>
              
              {/* Product Geometry */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border-2 border-violet-500/15 animate-pulse backdrop-blur-[1px]" style={{borderRadius: '50% 20% 50% 20%', animationDuration: '12s'}}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] border border-purple-400/10 animate-pulse backdrop-blur-[1px]" style={{borderRadius: '20% 50% 20% 50%', animationDelay: '6s', animationDuration: '16s'}}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium - Mid Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-70"
              style={getParallaxStyle(0.2)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-violet-900/20 via-transparent to-purple-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-violet-400/25 animate-pulse backdrop-blur-[2px]" style={{borderRadius: '50% 20% 50% 20%', animationDelay: '4s', animationDuration: '9s'}}></div>
              
              {/* Product Particles */}
              {Array.from({length: 32}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-violet-400/45 animate-pulse backdrop-blur-[1px]"
                  style={{
                    left: `${30 + Math.cos(i * 0.2) * 25}%`,
                    top: `${30 + Math.sin(i * 0.2) * 25}%`,
                    animationDelay: `${i * 0.15}s`,
                    animationDuration: `${2.5 + Math.random() * 3}s`,
                    borderRadius: i % 4 === 0 ? '50% 20% 50% 20%' : i % 4 === 1 ? '20% 50% 20% 50%' : '50%',
                    transform: `rotate(${i * 11}deg) scale(${0.8 + Math.random() * 0.4})`,
                    boxShadow: '0 0 5px currentColor'
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest - Near Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.4)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-violet-300/20 animate-pulse backdrop-blur-[3px]" style={{borderRadius: '50% 20% 50% 20%', animationDelay: '2s', animationDuration: '6s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-violet-400/10 via-transparent to-transparent"></div>
              
              {/* Interactive Product Symbols */}
              {Array.from({length: 16}).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-violet-400/55 text-3xl animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer backdrop-blur-[1px]"
                  style={{
                    left: `${5 + Math.random() * 90}%`,
                    top: `${5 + Math.random() * 90}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${2.5 + Math.random() * 5}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    filter: 'drop-shadow(0 0 5px currentColor)'
                  }}
                >
                  {['📦', '🛍️', '💼', '📱', '💻', '⌚', '🎧', '📷', '🖥️', '⌨️', '🖱️', '💾', '🔌', '💡', '🎁', '💎'][i]}
                </div>
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-20 py-40">
              <div className="px-8 py-6 bg-zinc-800/80 border border-violet-500/40 backdrop-blur-md rounded-lg inline-block shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-violet-400 font-mono text-lg font-black tracking-widest drop-shadow-lg">
                  PRODUCT SHOWCASE
                </div>
                <div className="text-violet-300/70 font-mono text-xs mt-2 tracking-wider">
                  PREMIUM COLLECTION
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS */}
          <div className="animate-fade-in">
            <ProductsShowcase />
          </div>
          
          {/* Page Break 4 - Products to Web Apps - Web Apps Portal Window */}
          <div className="h-[32rem] bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 relative overflow-hidden border-y border-zinc-800/50 backdrop-blur-sm">
            {/* Deep Window Background - Layer 1 (Slowest - Far Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-80"
              style={getParallaxStyle(0.03)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/30 to-zinc-950/60"></div>
              <div className="absolute inset-0 bg-gradient-radial from-cyan-950/20 via-transparent to-transparent"></div>
              
              {/* Web App Geometry */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[1050px] border-2 border-cyan-500/15 animate-pulse backdrop-blur-[1px]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '11s'}}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] border border-teal-400/10 animate-pulse backdrop-blur-[1px]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '5.5s', animationDuration: '15s'}}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium - Mid Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-70"
              style={getParallaxStyle(0.16)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-cyan-900/20 via-transparent to-teal-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-cyan-400/25 animate-pulse backdrop-blur-[2px]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '3s', animationDuration: '7s'}}></div>
              
              {/* Web Data Streams */}
              {Array.from({length: 36}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-12 bg-gradient-to-b from-cyan-400/60 to-transparent animate-pulse backdrop-blur-[1px]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 40 - 20}deg) scale(${0.6 + Math.random() * 0.8})`,
                    boxShadow: '0 0 4px currentColor'
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest - Near Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.32)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-cyan-300/20 animate-pulse backdrop-blur-[3px]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1.5s', animationDuration: '4s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-cyan-400/10 via-transparent to-transparent"></div>
              
              {/* Interactive Web App Symbols */}
              {Array.from({length: 18}).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-cyan-400/55 text-3xl animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer backdrop-blur-[1px]"
                  style={{
                    left: `${3 + Math.random() * 94}%`,
                    top: `${3 + Math.random() * 94}%`,
                    animationDelay: `${Math.random() * 9}s`,
                    animationDuration: `${2.5 + Math.random() * 6}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    filter: 'drop-shadow(0 0 4px currentColor)'
                  }}
                >
                  {['🌐', '📊', '💾', '⚡', '🔗', '📈', '🔧', '⚙️', '🖥️', '📱', '💻', '🚀', '⭐', '🔮', '💡', '🎯', '📡', '🛰️'][i]}
                </div>
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-20 py-40">
              <div className="px-8 py-6 bg-zinc-800/80 border border-cyan-500/40 backdrop-blur-md rounded-lg inline-block shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-cyan-400 font-mono text-lg font-black tracking-widest drop-shadow-lg">
                  WEB APPLICATIONS
                </div>
                <div className="text-cyan-300/70 font-mono text-xs mt-2 tracking-wider">
                  CLOUD CONNECTED
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 3: APP USERS */}
          <div className="animate-fade-in">
            <WebAppsSection />
          </div>
          
          {/* Page Break 5 - Web Apps to Developer Tools - Developer Portal Window */}
          <div className="h-[32rem] bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 relative overflow-hidden border-y border-zinc-800/50 backdrop-blur-sm">
            {/* Deep Window Background - Layer 1 (Slowest - Far Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-80"
              style={getParallaxStyle(0.07)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/30 to-zinc-950/60"></div>
              <div className="absolute inset-0 bg-gradient-radial from-amber-950/20 via-transparent to-transparent"></div>
              
              {/* Developer Geometry */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1150px] h-[1150px] border-2 border-amber-500/15 animate-pulse backdrop-blur-[1px]" style={{borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%', animationDuration: '13s'}}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-orange-400/10 animate-pulse backdrop-blur-[1px]" style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%', animationDelay: '6.5s', animationDuration: '17s'}}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium - Mid Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-70"
              style={getParallaxStyle(0.22)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-amber-900/20 via-transparent to-orange-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] border border-amber-400/25 animate-pulse backdrop-blur-[2px]" style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%', animationDelay: '4s', animationDuration: '10s'}}></div>
              
              {/* Code Particles */}
              {Array.from({length: 40}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse backdrop-blur-[1px] ${i % 3 === 0 ? 'w-2 h-2 bg-amber-400/60' : i % 3 === 1 ? 'w-1.5 h-1.5 bg-orange-400/60' : 'w-1 h-1 bg-amber-300/60'}`}
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 7}s`,
                    animationDuration: `${2 + Math.random() * 4}s`,
                    clipPath: i % 4 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : i % 4 === 1 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' : 'circle(50%)',
                    borderRadius: i % 6 === 0 ? '60% 40% 40% 60% / 60% 30% 70% 40%' : 'inherit',
                    transform: `rotate(${Math.random() * 360}deg) scale(${0.7 + Math.random() * 0.6})`,
                    boxShadow: '0 0 6px currentColor'
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest - Near Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.38)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-amber-300/20 animate-pulse backdrop-blur-[3px]" style={{borderRadius: '70% 30% 30% 70% / 30% 60% 40% 70%', animationDelay: '2s', animationDuration: '6s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-amber-400/10 via-transparent to-transparent"></div>
              
              {/* Interactive Developer Symbols */}
              {Array.from({length: 20}).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-amber-400/55 text-2xl animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer backdrop-blur-[1px] font-mono"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${3 + Math.random() * 5}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    filter: 'drop-shadow(0 0 4px currentColor)'
                  }}
                >
                  {['</>', '{}', '[]', '()', '<>', '&&', '||', '!=', '==', '++', '--', '=>', '/*', '*/', '##', '$$', 'fn', 'var', 'let', 'if'][i]}
                </div>
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-20 py-40">
              <div className="px-8 py-6 bg-zinc-800/80 border border-amber-500/40 backdrop-blur-md rounded-lg inline-block shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-amber-400 font-mono text-lg font-black tracking-widest drop-shadow-lg">
                  DEVELOPER MATRIX
                </div>
                <div className="text-amber-300/70 font-mono text-xs mt-2 tracking-wider">
                  CODE NEXUS ACTIVE
                </div>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 4: DEVELOPERS */}
          <div className="animate-fade-in">
            <DeveloperTools />
          </div>
          
          {/* Page Break 6 - Developer Tools to Contact - Contact Portal Window */}
          <div className="h-[32rem] bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 relative overflow-hidden border-y border-zinc-800/50 backdrop-blur-sm">
            {/* Deep Window Background - Layer 1 (Slowest - Far Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-80"
              style={getParallaxStyle(0.045)}
            >
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-800/30 to-zinc-950/60"></div>
              <div className="absolute inset-0 bg-gradient-radial from-indigo-950/20 via-transparent to-transparent"></div>
              
              {/* Contact Geometry - Spinning Portals */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] border-2 border-indigo-500/15 rounded-full animate-spin backdrop-blur-[1px]" style={{animationDuration: '25s', background: 'conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.08), transparent)'}}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-purple-400/10 rounded-full animate-spin backdrop-blur-[1px]" style={{animationDuration: '18s', animationDirection: 'reverse', background: 'conic-gradient(from 180deg, transparent, rgba(129, 140, 248, 0.06), transparent)'}}></div>
            </div>
            
            {/* Deep Window Background - Layer 2 (Medium - Mid Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-70"
              style={getParallaxStyle(0.19)}
            >
              <div className="absolute inset-0 bg-gradient-conic from-indigo-900/20 via-transparent to-purple-900/20"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-indigo-400/25 rounded-full animate-spin backdrop-blur-[2px]" style={{animationDuration: '15s', background: 'conic-gradient(from 90deg, transparent, rgba(99, 102, 241, 0.1), transparent)'}}></div>
              
              {/* Communication Particles */}
              {Array.from({length: 44}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse backdrop-blur-[1px] ${Math.random() > 0.7 ? 'w-1.5 h-1.5 bg-indigo-300/70' : Math.random() > 0.4 ? 'w-1 h-1 bg-purple-300/60' : 'w-0.5 h-0.5 bg-indigo-400/50'}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                    animationDuration: `${2.5 + Math.random() * 4}s`,
                    clipPath: i % 5 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'circle(50%)',
                    transform: `rotate(${Math.random() * 360}deg) scale(${0.6 + Math.random() * 0.8})`,
                    boxShadow: '0 0 4px currentColor'
                  }}
                />
              ))}
            </div>
            
            {/* Deep Window Background - Layer 3 (Fastest - Near Background) */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-60"
              style={getParallaxStyle(0.36)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-indigo-300/20 rounded-full animate-pulse backdrop-blur-[3px]" style={{animationDelay: '1s', animationDuration: '5s'}}></div>
              <div className="absolute inset-0 bg-gradient-radial from-indigo-400/10 via-transparent to-transparent"></div>
              
              {/* Interactive Contact Symbols */}
              {Array.from({length: 22}).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-indigo-400/55 text-2xl animate-pulse hover:scale-125 transition-transform duration-300 cursor-pointer backdrop-blur-[1px]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 11}s`,
                    animationDuration: `${3 + Math.random() * 6}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    filter: 'drop-shadow(0 0 3px currentColor)'
                  }}
                >
                  {['📧', '📱', '💬', '📞', '🌐', '📍', '💼', '🤝', '📝', '✉️', '📋', '📊', '🔔', '⚡', '🚀', '💫', '⭐', '🎯', '💎', '🔮', '🌟', '✨'][i]}
                </div>
              ))}
              
              {/* Spinning Communication Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[160px] h-[160px] border border-indigo-300/25 rounded-full animate-spin backdrop-blur-[2px]" style={{animationDuration: '12s'}}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] border border-purple-300/30 rounded-full animate-spin backdrop-blur-[2px]" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
              </div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-20 py-40">
              <div className="px-8 py-6 bg-zinc-800/80 border border-indigo-500/40 backdrop-blur-md rounded-lg inline-block shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-indigo-400 font-mono text-lg font-black tracking-widest drop-shadow-lg">
                  CONTACT TERMINAL
                </div>
                <div className="text-indigo-300/70 font-mono text-xs mt-2 tracking-wider">
                  COMMUNICATION BRIDGE
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
    </div>
  );
};

export default Index;
