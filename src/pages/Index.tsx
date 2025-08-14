
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
          
          {/* Professional Page Break 1 - Services to Games - Portal Effect */}
          <div className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Deep Portal Background with Parallax */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Deep hole effect with multiple layers */}
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-900/60 to-zinc-950"></div>
              <div className="absolute inset-0 bg-gradient-radial from-emerald-950/20 via-transparent to-transparent" style={{transform: 'translateZ(-100px)'}}></div>
              
              {/* Animated depth rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[800px] h-[800px] border border-emerald-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 border border-emerald-400/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute inset-8 border border-emerald-300/10 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Floating particles in the portal */}
              {Array.from({length: 20}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400/60 rounded-full animate-pulse"
                  style={{
                    left: `${40 + Math.random() * 20}%`,
                    top: `${40 + Math.random() * 20}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    transform: `translateZ(-${Math.random() * 200}px)`
                  }}
                />
              ))}
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse"></div>
                <div className="px-6 py-3 bg-zinc-800/95 border border-emerald-500/30 backdrop-blur-sm rounded-sm">
                  <div className="text-emerald-400 font-mono text-sm font-black tracking-widest">
                    GAMING UNIVERSE
                  </div>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse delay-500"></div>
              </div>
              
              <div className="grid grid-cols-8 gap-2 max-w-md mx-auto mb-8">
                {Array.from({length: 16}).map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-emerald-400/40 animate-pulse" style={{animationDelay: `${index * 100}ms`}}></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS */}
          <div className="animate-fade-in">
            <GamesSection />
          </div>
          
          {/* Professional Page Break 2 - Games to Products - Vortex Effect */}
          <div className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Vortex Portal Background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-conic from-blue-950/30 via-transparent to-cyan-950/30"></div>
              <div className="absolute inset-0 bg-gradient-radial from-transparent via-zinc-900/70 to-zinc-950"></div>
              
              {/* Rotating vortex rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[700px] h-[700px] border-2 border-blue-500/25 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                <div className="absolute inset-6 border border-cyan-400/20 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
                <div className="absolute inset-12 border border-blue-300/15 rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
              </div>
              
              {/* Spiral particles */}
              {Array.from({length: 25}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-pulse"
                  style={{
                    left: `${45 + Math.cos(i * 0.5) * 15}%`,
                    top: `${45 + Math.sin(i * 0.5) * 15}%`,
                    animationDelay: `${i * 0.2}s`
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
                    PRODUCT SHOWCASE
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
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS */}
          <div className="animate-fade-in">
            <ProductsShowcase />
          </div>
          
          {/* Professional Page Break 3 - Products to Web Apps - Matrix Portal */}
          <div className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Matrix-style Portal */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-green-950/20 via-transparent to-zinc-950"></div>
              
              {/* Hexagonal portal frame */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[600px] h-[600px] border border-green-500/30 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                </div>
                <div className="absolute inset-8 border border-green-400/25 animate-pulse" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1s'}}>
                </div>
              </div>
              
              {/* Matrix rain effect */}
              {Array.from({length: 30}).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-8 bg-gradient-to-b from-green-400/60 to-transparent animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    transform: `rotate(${Math.random() * 20 - 10}deg)`
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
                    WEB APPLICATIONS
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
          </div>
          
          {/* PRIORITY 3: APP USERS */}
          <div className="animate-fade-in">
            <WebAppsSection />
          </div>
          
          {/* Professional Page Break 4 - Web Apps to Developer Tools - Fire Portal */}
          <div className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Fire/Energy Portal */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-orange-950/30 via-red-950/20 to-zinc-950"></div>
              
              {/* Flame-like portal rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[750px] h-[750px] border-2 border-orange-500/30 rounded-full animate-pulse" style={{borderRadius: '60% 40% 40% 60% / 60% 30% 70% 40%'}}></div>
                <div className="absolute inset-6 border border-red-400/25 rounded-full animate-pulse" style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%', animationDelay: '1s'}}></div>
                <div className="absolute inset-12 border border-amber-400/20 rounded-full animate-pulse" style={{borderRadius: '70% 30% 30% 70% / 30% 60% 40% 70%', animationDelay: '2s'}}></div>
              </div>
              
              {/* Energy sparks */}
              {Array.from({length: 35}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse ${i % 3 === 0 ? 'w-2 h-2 bg-orange-400/60' : i % 3 === 1 ? 'w-1.5 h-1.5 bg-red-400/60' : 'w-1 h-1 bg-amber-400/60'}`}
                  style={{
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    clipPath: i % 4 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'circle(50%)'
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
                    DEVELOPER MATRIX
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
          </div>
          
          {/* PRIORITY 4: DEVELOPERS */}
          <div className="animate-fade-in">
            <DeveloperTools />
          </div>
          
          {/* Professional Page Break 5 - Developer Tools to Contact - Cosmic Portal */}
          <div className="py-32 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden border-y border-zinc-800/50">
            {/* Cosmic Portal with Galaxy Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-radial from-purple-950/20 via-indigo-950/15 to-zinc-950"></div>
              
              {/* Galaxy spiral */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[650px] h-[650px] border border-purple-500/25 rounded-full animate-spin" style={{animationDuration: '30s', background: 'conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.1), transparent)'}}></div>
                <div className="absolute inset-8 border border-indigo-400/20 rounded-full animate-spin" style={{animationDuration: '20s', animationDirection: 'reverse', background: 'conic-gradient(from 180deg, transparent, rgba(99, 102, 241, 0.1), transparent)'}}></div>
              </div>
              
              {/* Cosmic stars */}
              {Array.from({length: 50}).map((_, i) => (
                <div
                  key={i}
                  className={`absolute animate-pulse ${Math.random() > 0.7 ? 'w-1.5 h-1.5 bg-purple-300/70' : Math.random() > 0.4 ? 'w-1 h-1 bg-indigo-300/60' : 'w-0.5 h-0.5 bg-violet-300/50'}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
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
                    CONTACT TERMINAL
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
