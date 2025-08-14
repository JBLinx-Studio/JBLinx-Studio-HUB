
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

const Index = () => {
  return <div className="min-h-screen bg-slate-950 overflow-x-hidden relative">
      {/* Parallax Background Layer */}
      <ParallaxBackground />
      
      {/* Main Content - positioned above parallax background */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          
          {/* Enhanced Services Overview */}
          <Services />
          
          {/* NEW Professional Page Break 1 - Services to Games - Quantum Portal Effect */}
          <div className="py-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Quantum Portal Background with Multiple Depth Layers */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Deep hole effect with quantum layers */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-900/70 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-cyan-950/30 via-transparent to-transparent transform scale-75"></div>
              <div className="absolute inset-0 bg-gradient-radial from-blue-950/20 via-transparent to-transparent transform scale-50"></div>
              
              {/* Quantum Tunnel Rings with Enhanced Depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[900px] h-[900px] border-2 border-cyan-500/30 rounded-full animate-pulse transform perspective-1000 rotateX-10"></div>
                <div className="absolute inset-6 border-2 border-blue-400/25 rounded-full animate-pulse transform perspective-1000 rotateX-15" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-12 border border-cyan-300/20 rounded-full animate-pulse transform perspective-1000 rotateX-20" style={{animationDelay: '2s'}}></div>
                <div className="absolute inset-20 border border-blue-300/15 rounded-full animate-pulse transform perspective-1000 rotateX-25" style={{animationDelay: '3s'}}></div>
                <div className="absolute inset-28 border border-cyan-200/10 rounded-full animate-pulse transform perspective-1000 rotateX-30" style={{animationDelay: '4s'}}></div>
              </div>
              
              {/* Quantum Energy Particles */}
              {Array.from({length: 30}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/70 rounded-full animate-pulse"
                  style={{
                    left: `${35 + Math.random() * 30}%`,
                    top: `${35 + Math.random() * 30}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    transform: `translateZ(-${Math.random() * 300}px) scale(${0.5 + Math.random() * 0.8})`,
                    boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor'
                  }}
                />
              ))}
              
              {/* Quantum Data Streams */}
              {Array.from({length: 8}).map((_, i) => (
                <div
                  key={`stream-${i}`}
                  className="absolute w-0.5 h-32 bg-gradient-to-b from-cyan-400/60 to-transparent animate-pulse"
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`,
                    transform: `rotate(${Math.random() * 360}deg) translateZ(-${i * 20}px)`
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-pulse"></div>
                <div className="px-8 py-4 bg-zinc-800/95 border-2 border-cyan-500/40 backdrop-blur-sm rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
                  <div className="relative text-cyan-400 font-mono text-sm font-black tracking-widest">
                    QUANTUM GATEWAY
                  </div>
                </div>
                <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-pulse delay-500"></div>
              </div>
              
              <div className="grid grid-cols-12 gap-2 max-w-2xl mx-auto mb-8">
                {Array.from({length: 24}).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${index % 3 === 0 ? 'w-3 h-3 bg-cyan-400/50' : index % 3 === 1 ? 'w-2 h-2 bg-blue-400/40' : 'w-1 h-1 bg-cyan-300/30'} animate-pulse`} 
                    style={{
                      animationDelay: `${index * 100}ms`,
                      clipPath: index % 4 === 0 ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : 'circle(50%)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS */}
          <div className="animate-fade-in">
            <GamesSection />
          </div>
          
          {/* Enhanced Professional Page Break 2 - Games to Products - Cosmic Vortex Effect */}
          <div className="py-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Enhanced Vortex Portal Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-conic from-blue-950/40 via-transparent to-purple-950/40"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-900/80 to-zinc-950"></div>
              
              {/* Enhanced Rotating Vortex Rings with Depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[800px] h-[800px] border-3 border-blue-500/35 rounded-full animate-spin transform perspective-1000" style={{animationDuration: '25s'}}></div>
                <div className="absolute inset-8 border-2 border-purple-400/30 rounded-full animate-spin transform perspective-1000 rotateX-10" style={{animationDuration: '18s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-16 border-2 border-blue-300/25 rounded-full animate-spin transform perspective-1000 rotateX-20" style={{animationDuration: '12s'}}></div>
                <div className="absolute inset-24 border border-purple-300/20 rounded-full animate-spin transform perspective-1000 rotateX-30" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-32 border border-blue-200/15 rounded-full animate-spin transform perspective-1000 rotateX-40" style={{animationDuration: '5s'}}></div>
              </div>
              
              {/* Enhanced Spiral Energy Particles */}
              {Array.from({length: 35}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/60 rounded-full animate-pulse"
                  style={{
                    left: `${40 + Math.cos(i * 0.3) * 20}%`,
                    top: `${40 + Math.sin(i * 0.3) * 20}%`,
                    animationDelay: `${i * 0.15}s`,
                    transform: `translateZ(-${i * 8}px) scale(${0.6 + Math.random() * 0.6})`,
                    boxShadow: '0 0 8px currentColor, 0 0 16px currentColor'
                  }}
                />
              ))}
              
              {/* Vortex Energy Streams */}
              {Array.from({length: 12}).map((_, i) => (
                <div
                  key={`vortex-${i}`}
                  className="absolute w-1 h-24 bg-gradient-to-b from-blue-400/50 to-purple-400/30 animate-pulse"
                  style={{
                    left: `${30 + Math.cos(i * 0.5) * 25}%`,
                    top: `${30 + Math.sin(i * 0.5) * 25}%`,
                    animationDelay: `${i * 0.3}s`,
                    transform: `rotate(${i * 30}deg) translateZ(-${i * 15}px)`
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center items-center space-x-10 mb-12">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-5 h-5 bg-blue-400/70 rounded-full animate-pulse"></div>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent"></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-800/95 border-2 border-blue-500/40 backdrop-blur-sm rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
                  <div className="relative text-blue-400 font-mono text-sm font-black tracking-widest">
                    PRODUCT NEXUS
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-5 h-5 bg-purple-400/70 rounded-full animate-pulse delay-500"></div>
                  <div className="w-24 h-0.5 bg-gradient-to-l from-purple-400/40 to-transparent"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-8 gap-3 max-w-xl mx-auto mb-8">
                {Array.from({length: 16}).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${index % 4 === 0 ? 'w-4 h-4 bg-blue-400/50' : index % 4 === 1 ? 'w-3 h-3 bg-purple-400/40' : index % 4 === 2 ? 'w-2 h-2 bg-blue-300/40' : 'w-3 h-3 bg-purple-300/30'} animate-pulse`} 
                    style={{
                      animationDelay: `${index * 120}ms`,
                      clipPath: index % 3 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : 'circle(50%)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS */}
          <div className="animate-fade-in">
            <ProductsShowcase />
          </div>
          
          {/* Enhanced Professional Page Break 3 - Products to Web Apps - Matrix Portal */}
          <div className="py-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Enhanced Matrix-style Portal */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-green-950/30 via-transparent to-zinc-950"></div>
              
              {/* Enhanced Hexagonal Portal Frame with Depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[700px] h-[700px] border-2 border-green-500/40 animate-pulse transform perspective-1000" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                </div>
                <div className="absolute inset-8 border-2 border-green-400/35 animate-pulse transform perspective-1000 rotateX-10" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s'}}>
                </div>
                <div className="absolute inset-16 border border-green-300/30 animate-pulse transform perspective-1000 rotateX-20" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '2s'}}>
                </div>
                <div className="absolute inset-24 border border-green-200/25 animate-pulse transform perspective-1000 rotateX-30" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '3s'}}>
                </div>
              </div>
              
              {/* Enhanced Matrix Rain Effect */}
              {Array.from({length: 40}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-12 bg-gradient-to-b from-green-400/70 to-transparent animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    transform: `rotate(${Math.random() * 30 - 15}deg) translateZ(-${Math.random() * 200}px)`
                  }}
                />
              ))}
              
              {/* Matrix Code Symbols */}
              {Array.from({length: 20}).map((_, i) => (
                <div
                  key={`code-${i}`}
                  className="absolute text-green-400/60 font-mono text-xs animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    transform: `translateZ(-${Math.random() * 150}px)`
                  }}
                >
                  {String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))}
                </div>
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-green-400/70 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-12 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-green-400/60 animate-pulse"></div>
                  <div className="w-5 h-5 bg-green-400/60 animate-pulse delay-200" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-800/95 border-2 border-green-500/40 backdrop-blur-sm rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 animate-pulse"></div>
                  <div className="relative text-green-400 font-mono text-sm font-black tracking-widest">
                    WEB MATRIX
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-green-400/60 animate-pulse delay-300"></div>
                  <div className="w-5 h-5 bg-green-400/60 animate-pulse delay-500" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-10 gap-2 max-w-2xl mx-auto mb-16">
                {Array.from({length: 20}).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${index % 5 === 0 ? 'w-4 h-4 bg-green-400/40' : index % 5 === 1 ? 'w-3 h-3 bg-green-300/35' : index % 5 === 2 ? 'w-2 h-2 bg-green-500/40' : index % 5 === 3 ? 'w-3 h-3 bg-green-200/30' : 'w-2 h-2 bg-emerald-400/35'} animate-pulse`} 
                    style={{
                      animationDelay: `${index * 80}ms`,
                      clipPath: index % 3 === 0 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : index % 3 === 1 ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : 'circle(50%)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* PRIORITY 3: APP USERS */}
          <div className="animate-fade-in">
            <WebAppsSection />
          </div>
          
          {/* Enhanced Professional Page Break 4 - Web Apps to Developer Tools - Fire Portal */}
          <div className="py-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Enhanced Fire/Energy Portal */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-orange-950/40 via-red-950/30 to-zinc-950"></div>
              
              {/* Enhanced Flame-like Portal Rings with Depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[850px] h-[850px] border-3 border-orange-500/40 rounded-full animate-pulse transform perspective-1000" style={{borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%'}}></div>
                <div className="absolute inset-8 border-2 border-red-400/35 rounded-full animate-pulse transform perspective-1000 rotateX-15" style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%', animationDelay: '1s'}}></div>
                <div className="absolute inset-16 border-2 border-amber-400/30 rounded-full animate-pulse transform perspective-1000 rotateX-25" style={{borderRadius: '70% 30% 30% 70% / 30% 60% 40% 70%', animationDelay: '2s'}}></div>
                <div className="absolute inset-24 border border-orange-300/25 rounded-full animate-pulse transform perspective-1000 rotateX-35" style={{borderRadius: '50% 50% 50% 50% / 60% 40% 60% 40%', animationDelay: '3s'}}></div>
              </div>
              
              {/* Enhanced Energy Sparks and Flames */}
              {Array.from({length: 45}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse ${i % 4 === 0 ? 'w-3 h-3 bg-orange-400/70' : i % 4 === 1 ? 'w-2 h-2 bg-red-400/70' : i % 4 === 2 ? 'w-1.5 h-1.5 bg-amber-400/70' : 'w-2 h-2 bg-yellow-400/60'}`}
                  style={{
                    left: `${25 + Math.random() * 50}%`,
                    top: `${25 + Math.random() * 50}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    transform: `translateZ(-${Math.random() * 250}px) scale(${0.5 + Math.random() * 0.8})`,
                    clipPath: i % 5 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'circle(50%)',
                    boxShadow: '0 0 12px currentColor, 0 0 24px currentColor'
                  }}
                />
              ))}
              
              {/* Fire Energy Streams */}
              {Array.from({length: 15}).map((_, i) => (
                <div
                  key={`fire-${i}`}
                  className="absolute w-1 h-20 bg-gradient-to-b from-orange-400/60 to-red-400/40 animate-pulse"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.2}s`,
                    transform: `rotate(${Math.random() * 360}deg) translateZ(-${i * 12}px)`
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-56 h-1 bg-gradient-to-r from-transparent via-orange-400/70 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-14 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-orange-400/60 animate-pulse"></div>
                  <div className="w-6 h-6 bg-orange-400/60 animate-pulse delay-200" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-800/95 border-2 border-orange-500/40 backdrop-blur-sm rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 animate-pulse"></div>
                  <div className="relative text-orange-400 font-mono text-sm font-black tracking-widest">
                    DEV FORGE
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-red-400/60 animate-pulse delay-300"></div>
                  <div className="w-6 h-6 bg-red-400/60 animate-pulse delay-500" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-9 gap-3 max-w-3xl mx-auto mb-16">
                {Array.from({length: 27}).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${index % 5 === 0 ? 'w-4 h-4 bg-orange-400/40' : index % 5 === 1 ? 'w-3 h-3 bg-red-400/40' : index % 5 === 2 ? 'w-5 h-5 bg-amber-400/40' : index % 5 === 3 ? 'w-2 h-2 bg-orange-300/35' : 'w-3 h-3 bg-yellow-400/35'} animate-pulse`} 
                    style={{
                      animationDelay: `${index * 60}ms`,
                      clipPath: index % 4 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : index % 4 === 1 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : index % 4 === 2 ? 'circle(50%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* PRIORITY 4: DEVELOPERS */}
          <div className="animate-fade-in">
            <DeveloperTools />
          </div>
          
          {/* Enhanced Professional Page Break 5 - Developer Tools to Contact - Cosmic Portal */}
          <div className="py-40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Enhanced Cosmic Portal with Galaxy Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-purple-950/30 via-indigo-950/25 to-zinc-950"></div>
              
              {/* Enhanced Galaxy Spiral with Depth */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[750px] h-[750px] border-2 border-purple-500/35 rounded-full animate-spin transform perspective-1000" style={{animationDuration: '35s', background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.15), transparent, rgba(99, 102, 241, 0.1), transparent)'}}></div>
                <div className="absolute inset-8 border-2 border-indigo-400/30 rounded-full animate-spin transform perspective-1000 rotateX-15" style={{animationDuration: '25s', animationDirection: 'reverse', background: 'conic-gradient(from 180deg, transparent, rgba(99, 102, 241, 0.15), transparent, rgba(147, 51, 234, 0.1), transparent)'}}></div>
                <div className="absolute inset-16 border border-violet-400/25 rounded-full animate-spin transform perspective-1000 rotateX-30" style={{animationDuration: '15s', background: 'conic-gradient(from 90deg, transparent, rgba(139, 92, 246, 0.1), transparent)'}}></div>
                <div className="absolute inset-24 border border-purple-300/20 rounded-full animate-spin transform perspective-1000 rotateX-45" style={{animationDuration: '10s', animationDirection: 'reverse'}}></div>
              </div>
              
              {/* Enhanced Cosmic Stars and Nebulae */}
              {Array.from({length: 60}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse ${Math.random() > 0.8 ? 'w-2 h-2 bg-purple-300/80' : Math.random() > 0.6 ? 'w-1.5 h-1.5 bg-indigo-300/70' : Math.random() > 0.3 ? 'w-1 h-1 bg-violet-300/60' : 'w-0.5 h-0.5 bg-purple-200/50'}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 6}s`,
                    transform: `translateZ(-${Math.random() * 300}px) scale(${0.3 + Math.random() * 1.2})`,
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                    boxShadow: '0 0 8px currentColor, 0 0 16px currentColor'
                  }}
                />
              ))}
              
              {/* Cosmic Energy Streams */}
              {Array.from({length: 18}).map((_, i) => (
                <div
                  key={`cosmic-${i}`}
                  className="absolute w-0.5 h-16 bg-gradient-to-b from-purple-400/60 to-indigo-400/40 animate-pulse"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${i * 0.25}s`,
                    transform: `rotate(${Math.random() * 360}deg) translateZ(-${i * 10}px)`
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-16 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-28 h-0.5 bg-gradient-to-r from-transparent to-purple-400/60 animate-pulse"></div>
                  <div className="w-5 h-5 bg-purple-400/60 animate-pulse delay-200" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                </div>
                
                <div className="px-10 py-5 bg-zinc-800/95 border-2 border-purple-500/40 backdrop-blur-sm rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 animate-pulse"></div>
                  <div className="relative text-purple-400 font-mono text-sm font-black tracking-widest">
                    CONTACT NEXUS
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-28 h-0.5 bg-gradient-to-l from-transparent to-indigo-400/60 animate-pulse delay-300"></div>
                  <div className="w-5 h-5 bg-indigo-400/60 animate-pulse delay-500" style={{clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'}}></div>
                </div>
              </div>
              
              <div className="grid grid-cols-12 gap-2 max-w-4xl mx-auto mb-16">
                {Array.from({length: 36}).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${index % 6 === 0 ? 'w-2 h-2 bg-purple-400/50' : index % 6 === 1 ? 'w-1.5 h-1.5 bg-indigo-400/50' : index % 6 === 2 ? 'w-1 h-1 bg-violet-400/50' : index % 6 === 3 ? 'w-2 h-2 bg-purple-300/40' : index % 6 === 4 ? 'w-1 h-1 bg-indigo-300/40' : 'w-1.5 h-1.5 bg-violet-300/40'} animate-pulse`} 
                    style={{
                      animationDelay: `${index * 40}ms`,
                      clipPath: index % 5 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : index % 5 === 1 ? 'circle(50%)' : index % 5 === 2 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : index % 5 === 3 ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' : 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
                    }}
                  />
                ))}
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
