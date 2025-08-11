
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
  return (
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden relative">
      {/* Parallax Background Layer */}
      <ParallaxBackground />
      
      {/* Main Content - positioned above parallax background */}
      <div className="relative z-10">
        <Header />
        <main className="relative bg-transparent">
          <Hero />
          
          {/* Enhanced Services Overview */}
          <Services />
          
          {/* Premium Visual Break Section with Hexagonal Grid Pattern */}
          <div className="py-32 bg-gradient-to-r from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 border-y border-zinc-800/40 relative overflow-hidden backdrop-blur-sm">
            {/* Hexagonal Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-15">
              <svg className="w-full h-full" viewBox="0 0 800 400">
                <defs>
                  <pattern id="hexGrid" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                    <polygon points="30,2 50,15 50,37 30,50 10,37 10,15" fill="none" stroke="hsl(var(--orange-glow))" strokeWidth="0.5" opacity="0.3"/>
                  </pattern>
                  <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--orange-glow))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--emerald-glow))" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#hexGrid)" />
                
                {/* Animated hexagonal highlights */}
                <g fill="url(#hexGradient)">
                  <polygon points="150,52 170,65 170,87 150,100 130,87 130,65" className="animate-pulse" />
                  <polygon points="330,102 350,115 350,137 330,150 310,137 310,115" className="animate-pulse" style={{animationDelay: '1s'}} />
                  <polygon points="510,152 530,165 530,187 510,200 490,187 490,165" className="animate-pulse" style={{animationDelay: '2s'}} />
                </g>
              </svg>
            </div>

            {/* Floating energy orbs */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/6 blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 blur-3xl animate-pulse delay-1000 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/4 blur-3xl animate-pulse delay-500 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Elements */}
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent animate-pulse"></div>
                <div className="px-4 py-2 bg-zinc-900/95 border border-orange-500/30 backdrop-blur-sm">
                  <div className="text-orange-400 font-mono text-xs font-black tracking-widest">
                    HEXAGONAL MATRIX ZONE
                  </div>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse delay-500"></div>
              </div>
              
              {/* Animated Diamond Pattern */}
              <div className="grid grid-cols-5 gap-4 max-w-sm mx-auto mb-8">
                {Array.from({ length: 15 }).map((_, index) => (
                  <div 
                    key={index} 
                    className="w-3 h-3 bg-orange-400/40 transform rotate-45 animate-pulse border border-orange-400/30" 
                    style={{ animationDelay: `${index * 150}ms` }}
                  ></div>
                ))}
              </div>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS - Enhanced Entry Animation */}
          <div className="animate-fade-in">
            <GamesSection />
          </div>
          
          {/* Enhanced Transition Zone with Neural Network Background */}
          <div className="py-40 bg-gradient-to-b from-zinc-900/98 via-zinc-950/95 to-zinc-900/98 relative overflow-hidden backdrop-blur-sm">
            {/* Neural Network Background */}
            <div className="absolute inset-0 pointer-events-none opacity-12">
              <svg className="w-full h-full" viewBox="0 0 800 400">
                <defs>
                  <radialGradient id="neuralGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--emerald-glow))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--emerald-glow))" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
                
                {/* Neural connections */}
                <g stroke="hsl(var(--emerald-glow))" strokeWidth="1" fill="none" opacity="0.6">
                  <path d="M100,80 Q200,120 300,100 T500,140" className="animate-pulse" />
                  <path d="M150,200 Q250,160 350,180 T550,200" className="animate-pulse" style={{animationDelay: '500ms'}} />
                  <path d="M80,250 Q180,210 280,230 T480,270" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                  <path d="M200,320 Q300,280 400,300 T600,340" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                  
                  {/* Cross connections */}
                  <line x1="150" y1="120" x2="280" y2="200" className="animate-pulse" style={{animationDelay: '750ms'}} />
                  <line x1="350" y1="160" x2="480" y2="240" className="animate-pulse" style={{animationDelay: '1250ms'}} />
                </g>
                
                {/* Neural nodes */}
                <g fill="url(#neuralGradient)">
                  <circle cx="100" cy="80" r="4" className="animate-pulse" />
                  <circle cx="300" cy="100" r="6" className="animate-pulse" style={{animationDelay: '300ms'}} />
                  <circle cx="500" cy="140" r="5" className="animate-pulse" style={{animationDelay: '600ms'}} />
                  <circle cx="150" cy="200" r="4" className="animate-pulse" style={{animationDelay: '900ms'}} />
                  <circle cx="350" cy="180" r="7" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                  <circle cx="550" cy="200" r="4" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                </g>
              </svg>
            </div>
            
            {/* Multi-layer Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-emerald-500/5 blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute top-1/2 right-1/6 w-80 h-80 bg-cyan-500/4 blur-3xl animate-pulse delay-700 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-500/3 blur-3xl animate-pulse delay-300 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Break */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              {/* Interactive Transition Elements */}
              <div className="flex justify-center items-center space-x-12 mb-12">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-4 h-4 bg-emerald-400/60 rounded-full animate-pulse"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-400/30 to-transparent"></div>
                </div>
                
                <div className="px-4 py-2 bg-zinc-900/95 border border-emerald-500/40 backdrop-blur-sm">
                  <div className="text-emerald-400 font-mono text-xs font-black tracking-widest">
                    NEURAL SYNAPTIC BRIDGE
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-4 h-4 bg-cyan-400/60 rounded-full animate-pulse delay-500"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-cyan-400/30 to-transparent"></div>
                </div>
              </div>
              
              {/* Enhanced Pattern Grid */}
              <div className="grid grid-cols-7 gap-3 max-w-lg mx-auto mb-16">
                {Array.from({ length: 21 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${
                      index % 3 === 0 ? 'bg-emerald-400/40' : 
                      index % 3 === 1 ? 'bg-cyan-400/40' : 'bg-teal-400/40'
                    } animate-pulse`} 
                    style={{ animationDelay: `${index * 100}ms` }}
                  ></div>
                ))}
              </div>
              
              <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS - Enhanced */}
          <div className="animate-fade-in">
            <ProductsShowcase />
          </div>
          
          {/* Premium Breathing Space with Crystalline Patterns */}
          <div className="py-44 bg-gradient-to-b from-zinc-950/98 via-black/95 to-zinc-950/98 relative overflow-hidden backdrop-blur-sm">
            {/* Crystalline Structure Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg className="w-full h-full" viewBox="0 0 800 600">
                <defs>
                  <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--orange-glow))" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="hsl(var(--amber-glow))" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="hsl(var(--emerald-glow))" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Crystal formations */}
                <g stroke="url(#crystalGradient)" strokeWidth="1.5" fill="none">
                  {/* Main crystal structure */}
                  <polygon points="200,100 250,120 300,100 280,160 220,160" className="animate-pulse" />
                  <polygon points="450,150 500,170 550,150 530,210 470,210" className="animate-pulse" style={{animationDelay: '800ms'}} />
                  <polygon points="300,300 350,320 400,300 380,360 320,360" className="animate-pulse" style={{animationDelay: '1600ms'}} />
                  
                  {/* Connecting crystal veins */}
                  <line x1="250" y1="160" x2="300" y2="200" className="animate-pulse" style={{animationDelay: '400ms'}} />
                  <line x1="500" y1="210" x2="450" y2="250" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                  <line x1="350" y1="300" x2="400" y2="260" className="animate-pulse" style={{animationDelay: '2000ms'}} />
                </g>
                
                {/* Crystal cores */}
                <g fill="url(#crystalGradient)">
                  <circle cx="250" cy="130" r="3" className="animate-pulse" />
                  <circle cx="500" cy="180" r="4" className="animate-pulse" style={{animationDelay: '600ms'}} />
                  <circle cx="350" cy="330" r="3" className="animate-pulse" style={{animationDelay: '1400ms'}} />
                </g>
              </svg>
            </div>
            
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/5 left-1/4 w-64 h-64 bg-orange-500/4 blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute bottom-1/5 right-1/4 w-88 h-88 bg-amber-500/3 blur-3xl animate-pulse delay-1000 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/2 blur-3xl animate-pulse delay-500 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Header */}
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mx-auto mb-20 animate-pulse"></div>
              
              {/* Advanced Visual Break Elements */}
              <div className="flex justify-center items-center space-x-16 mb-20">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-6 h-6 bg-orange-400/60 transform rotate-45 animate-pulse"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-orange-400/30 to-transparent"></div>
                  <div className="w-3 h-3 bg-orange-400/40 rounded-full animate-pulse delay-300"></div>
                </div>
                
                <div className="px-6 py-3 bg-zinc-900/95 border border-amber-500/40 backdrop-blur-sm">
                  <div className="text-amber-400 font-mono text-xs font-black tracking-widest">
                    CRYSTALLINE MATRIX FORMATION
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-6 h-6 bg-emerald-400/60 transform rotate-45 animate-pulse delay-500"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-l from-emerald-400/30 to-transparent"></div>
                  <div className="w-3 h-3 bg-emerald-400/40 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
              
              {/* Enhanced Geometric Pattern */}
              <div className="grid grid-cols-6 gap-4 max-w-md mx-auto mb-20">
                {Array.from({ length: 18 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`${
                      index % 4 === 0 ? 'w-4 h-4 bg-orange-400/30 transform rotate-45' : 
                      index % 4 === 1 ? 'w-3 h-3 bg-amber-400/30 rounded-full' : 
                      index % 4 === 2 ? 'w-5 h-5 bg-emerald-400/30 transform rotate-12' : 
                      'w-2 h-2 bg-teal-400/30'
                    } animate-pulse`} 
                    style={{ animationDelay: `${index * 125}ms` }}
                  ></div>
                ))}
              </div>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 3: APP USERS - Enhanced */}
          <div className="animate-fade-in">
            <WebAppsSection />
          </div>
          
          {/* Ultimate Breathing Space with Quantum Field Background */}
          <div className="py-48 bg-gradient-to-b from-zinc-950/98 via-zinc-900/95 to-black/95 relative overflow-hidden backdrop-blur-sm">
            {/* Quantum Field Background */}
            <div className="absolute inset-0 pointer-events-none opacity-8">
              <svg className="w-full h-full" viewBox="0 0 1000 600">
                <defs>
                  <radialGradient id="quantumGradient" cx="50%" cy="50%" r="70%">
                    <stop offset="0%" stopColor="hsl(var(--emerald-glow))" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="hsl(var(--cyan-glow))" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="hsl(var(--teal-glow))" stopOpacity="0.1" />
                  </radialGradient>
                </defs>
                
                {/* Quantum field waves */}
                <g stroke="url(#quantumGradient)" strokeWidth="1" fill="none">
                  {/* Sine wave patterns */}
                  <path d="M0,100 Q100,50 200,100 T400,100 T600,100 T800,100 T1000,100" className="animate-pulse" />
                  <path d="M0,200 Q100,250 200,200 T400,200 T600,200 T800,200 T1000,200" className="animate-pulse" style={{animationDelay: '500ms'}} />
                  <path d="M0,300 Q100,250 200,300 T400,300 T600,300 T800,300 T1000,300" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                  <path d="M0,400 Q100,450 200,400 T400,400 T600,400 T800,400 T1000,400" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                  
                  {/* Interference patterns */}
                  <circle cx="200" cy="150" r="30" className="animate-pulse" style={{animationDelay: '300ms'}} />
                  <circle cx="500" cy="250" r="40" className="animate-pulse" style={{animationDelay: '800ms'}} />
                  <circle cx="800" cy="350" r="35" className="animate-pulse" style={{animationDelay: '1300ms'}} />
                </g>
                
                {/* Quantum particles */}
                <g fill="url(#quantumGradient)">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <circle 
                      key={i}
                      cx={100 + i * 80} 
                      cy={120 + Math.sin(i) * 50} 
                      r="2" 
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 200}ms`}} 
                    />
                  ))}
                </g>
              </svg>
            </div>
            
            {/* Complex Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/6 left-1/5 w-72 h-72 bg-emerald-500/3 blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute bottom-1/6 right-1/5 w-88 h-88 bg-cyan-500/3 blur-3xl animate-pulse delay-800 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/2 blur-3xl animate-pulse delay-400 rounded-full"></div>
              <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-blue-500/3 blur-3xl animate-pulse delay-1200 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Header */}
              <div className="w-56 h-1 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent mx-auto mb-24 animate-pulse"></div>
              
              {/* Advanced Tech Grid Visual Break */}
              <div className="grid grid-cols-8 gap-3 max-w-2xl mx-auto mb-24">
                {Array.from({ length: 32 }).map((_, index) => {
                  const colors = [
                    'bg-emerald-400/30', 'bg-cyan-400/30', 'bg-teal-400/30', 'bg-blue-400/30'
                  ];
                  const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4'];
                  return (
                    <div key={index} className="flex justify-center items-center">
                      <div 
                        className={`${colors[index % 4]} ${sizes[index % 3]} rounded-full animate-pulse`} 
                        style={{ animationDelay: `${index * 50}ms` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              
              {/* Enhanced Zone Label */}
              <div className="px-6 py-3 bg-zinc-900/95 border border-emerald-500/40 backdrop-blur-sm mb-12 inline-block">
                <div className="text-emerald-400 font-mono text-xs font-black tracking-widest">
                  QUANTUM FIELD RESONANCE CHAMBER
                </div>
              </div>
              
              <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 4: DEVELOPERS - Enhanced */}
          <div className="animate-fade-in">
            <DeveloperTools />
          </div>
          
          {/* Final Premium Breathing Space with Data Stream Background */}
          <div className="py-36 bg-gradient-to-b from-black/98 via-zinc-950/95 to-zinc-900/95 relative overflow-hidden backdrop-blur-sm">
            {/* Data Stream Background */}
            <div className="absolute inset-0 pointer-events-none opacity-8">
              <svg className="w-full h-full" viewBox="0 0 1000 400">
                <defs>
                  <linearGradient id="dataStreamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--orange-glow))" stopOpacity="0" />
                    <stop offset="50%" stopColor="hsl(var(--orange-glow))" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(var(--orange-glow))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Data streams */}
                <g stroke="url(#dataStreamGradient)" strokeWidth="1" fill="none">
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
                      {/* Data packets */}
                      <circle 
                        cx={100 + i * 120} 
                        cy={50 + i * 40} 
                        r="2.5" 
                        fill="hsl(var(--orange-glow))" 
                        opacity="0.6" 
                        className="animate-pulse" 
                        style={{ animationDelay: `${i * 300}ms` }} 
                      />
                      <circle 
                        cx={300 + i * 80} 
                        cy={50 + i * 40} 
                        r="1.5" 
                        fill="hsl(var(--amber-glow))" 
                        opacity="0.4" 
                        className="animate-pulse" 
                        style={{ animationDelay: `${i * 400}ms` }} 
                      />
                    </g>
                  ))}
                </g>
              </svg>
            </div>
            
            {/* Sophisticated Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/2 blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/3 blur-3xl animate-pulse delay-600 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-400/2 blur-3xl animate-pulse delay-1000 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Header */}
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-orange-500/70 to-transparent mx-auto mb-20 animate-pulse"></div>
              
              {/* Advanced Contact Transition Elements */}
              <div className="flex justify-center items-center space-x-16 mb-20">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400/50 animate-pulse"></div>
                  <div className="w-4 h-4 bg-orange-400/50 transform rotate-45 animate-pulse delay-200"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400/40 animate-pulse delay-400"></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-900/95 border border-orange-500/40 backdrop-blur-sm">
                  <div className="text-orange-400 font-mono text-xs font-black tracking-widest">
                    DATA STREAM CONVERGENCE POINT
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400/50 animate-pulse delay-300"></div>
                  <div className="w-4 h-4 bg-amber-400/50 transform rotate-45 animate-pulse delay-500"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-orange-400/40 animate-pulse delay-700"></div>
                </div>
              </div>
              
              {/* Enhanced Final Pattern */}
              <div className="grid grid-cols-12 gap-2 max-w-3xl mx-auto mb-20">
                {Array.from({ length: 48 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-1.5 h-1.5 ${
                      index % 6 === 0 ? 'bg-orange-400/40' : 
                      index % 6 === 1 ? 'bg-amber-400/40' : 
                      index % 6 === 2 ? 'bg-orange-500/40' : 
                      index % 6 === 3 ? 'bg-amber-500/40' : 
                      index % 6 === 4 ? 'bg-orange-300/40' : 'bg-amber-300/40'
                    } animate-pulse`} 
                    style={{ animationDelay: `${index * 30}ms` }}
                  ></div>
                ))}
              </div>
              
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-amber-600/60 to-transparent mx-auto"></div>
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
