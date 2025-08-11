
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
      {/* Advanced Parallax Background Layer */}
      <ParallaxBackground />
      
      {/* Main Content - positioned above parallax background */}
      <div className="relative z-10">
        <Header />
        <main className="relative bg-transparent">
          {/* ELITE HERO SECTION - Enhanced with Premium Professional Effects */}
          <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 backdrop-blur-xl py-16 overflow-hidden border-b border-zinc-800/30">
            {/* Advanced Professional Hero Background System */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Primary Ambient Lighting Matrix */}
              <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-orange-500/12 via-amber-500/8 to-transparent blur-3xl animate-pulse opacity-80"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-radial from-emerald-500/12 via-teal-500/8 to-transparent blur-3xl animate-pulse opacity-80" style={{animationDelay: '3s'}}></div>
              
              {/* Secondary Elite Lighting Layers */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-conic from-amber-400/8 via-orange-400/6 to-emerald-400/8 blur-3xl animate-pulse opacity-70" style={{animationDelay: '6s'}}></div>
              
              {/* Premium Hexagonal Tech Grid */}
              <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="heroHexGrid" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                      <polygon points="50,1 85,25 85,62 50,86 15,62 15,25" fill="none" stroke="url(#heroGradient)" strokeWidth="0.5" opacity="0.6"/>
                      <circle cx="50" cy="43.5" r="2" fill="url(#heroGradient)" opacity="0.8"/>
                    </pattern>
                    <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(25 100% 58%)" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="hsl(43 96% 56%)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(158 64% 52%)" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#heroHexGrid)" />
                </svg>
              </div>

              {/* Elite Floating Tech Elements */}
              <div className="absolute top-1/6 left-1/6 w-6 h-6 bg-gradient-to-br from-orange-400/50 to-amber-400/40 transform rotate-45 animate-pulse border border-orange-400/30 shadow-lg shadow-orange-400/20"></div>
              <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-gradient-to-br from-emerald-400/50 to-teal-400/40 rounded-full animate-pulse border border-emerald-400/30 shadow-lg shadow-emerald-400/20" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-gradient-to-br from-amber-400/40 to-orange-400/30 animate-pulse border border-amber-400/20 shadow-lg shadow-amber-400/15 transform rotate-12" style={{animationDelay: '4s'}}></div>
              <div className="absolute bottom-1/6 right-1/6 w-5 h-5 bg-gradient-to-br from-teal-400/40 to-emerald-400/30 transform rotate-12 animate-pulse border border-teal-400/20 shadow-lg shadow-teal-400/15" style={{animationDelay: '6s'}}></div>

              {/* Premium Accent Lines System */}
              <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent"></div>
              <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
              <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>
              <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-teal-400/30 to-transparent"></div>
            </div>

            <Hero />
          </section>
          
          {/* ELITE SERVICES SECTION - Enhanced Professional Background */}
          <section className="relative py-24 bg-gradient-to-br from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 backdrop-blur-xl overflow-hidden border-b border-zinc-800/30">
            {/* Professional Services Background System */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Elite Ambient Lighting */}
              <div className="absolute top-1/3 left-1/5 w-[750px] h-[750px] bg-gradient-radial from-cyan-500/10 via-blue-500/7 to-transparent blur-3xl animate-pulse opacity-70"></div>
              <div className="absolute bottom-1/3 right-1/5 w-[650px] h-[650px] bg-gradient-radial from-indigo-500/10 via-purple-500/7 to-transparent blur-3xl animate-pulse opacity-70" style={{animationDelay: '4s'}}></div>
              
              {/* Advanced Circuit Pattern */}
              <div className="absolute inset-0 opacity-12">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="circuitPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                      <rect width="120" height="120" fill="none"/>
                      <path d="M20,20 L100,20 L100,40 L80,40 L80,60 L40,60 L40,80 L20,80 Z" stroke="url(#circuitGradient)" strokeWidth="1" fill="none" opacity="0.6"/>
                      <circle cx="20" cy="20" r="3" fill="url(#circuitGradient)" opacity="0.8"/>
                      <circle cx="100" cy="40" r="2" fill="url(#circuitGradient)" opacity="0.6"/>
                      <circle cx="40" cy="80" r="2.5" fill="url(#circuitGradient)" opacity="0.7"/>
                    </pattern>
                    <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(197 71% 73%)" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="hsl(271 81% 56%)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="hsl(215 89% 61%)" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#circuitPattern)" />
                </svg>
              </div>

              {/* Elite Tech Elements */}
              <div className="absolute top-1/4 left-1/3 w-5 h-5 bg-gradient-to-br from-cyan-400/50 to-blue-400/40 transform rotate-45 animate-pulse border border-cyan-400/30 shadow-lg shadow-cyan-400/20"></div>
              <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-gradient-to-br from-indigo-400/50 to-purple-400/40 rounded-full animate-pulse border border-indigo-400/30 shadow-lg shadow-indigo-400/20" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/4 left-1/5 w-4 h-4 bg-gradient-to-br from-purple-400/40 to-blue-400/30 animate-pulse border border-purple-400/20 shadow-lg shadow-purple-400/15 transform rotate-12" style={{animationDelay: '3s'}}></div>
            </div>

            <Services />
          </section>
          
          {/* PREMIUM VISUAL BREAK - Hexagonal Matrix Zone */}
          <div className="py-40 bg-gradient-to-r from-zinc-950/99 via-zinc-900/96 to-zinc-950/99 border-y border-zinc-800/40 relative overflow-hidden backdrop-blur-sm">
            {/* Advanced Hexagonal Background System */}
            <div className="absolute inset-0 pointer-events-none opacity-18">
              <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <pattern id="eliteHexGrid" x="0" y="0" width="80" height="70" patternUnits="userSpaceOnUse">
                    <polygon points="40,2 65,18 65,42 40,58 15,42 15,18" fill="none" stroke="url(#eliteHexGradient)" strokeWidth="0.8" opacity="0.7"/>
                    <circle cx="40" cy="30" r="1.5" fill="url(#eliteHexGradient)" opacity="0.9">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
                    </circle>
                  </pattern>
                  <linearGradient id="eliteHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(25 100% 58%)" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="hsl(43 96% 56%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(158 64% 52%)" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#eliteHexGrid)" />
                
                {/* Elite animated hexagonal highlights */}
                <g fill="url(#eliteHexGradient)">
                  <polygon points="200,70 225,86 225,110 200,126 175,110 175,86" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                  </polygon>
                  <polygon points="400,140 425,156 425,180 400,196 375,180 375,156" opacity="0.6">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
                  </polygon>
                  <polygon points="600,210 625,226 625,250 600,266 575,250 575,226" opacity="0.7">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" begin="1s"/>
                  </polygon>
                </g>
              </svg>
            </div>

            {/* Elite floating energy orbs */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-orange-500/8 to-transparent blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-emerald-500/7 to-transparent blur-3xl animate-pulse delay-1000 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-amber-500/6 to-transparent blur-3xl animate-pulse delay-500 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Elite Visual Header */}
              <div className="flex justify-center items-center space-x-12 mb-16">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-orange-400/70 to-transparent animate-pulse"></div>
                <div className="px-8 py-4 bg-zinc-800/95 border border-orange-500/40 backdrop-blur-sm shadow-2xl shadow-orange-500/20">
                  <div className="text-orange-400 font-mono text-sm font-black tracking-widest">
                    ◇ HEXAGONAL MATRIX NEXUS ◇
                  </div>
                </div>
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent animate-pulse delay-500"></div>
              </div>
              
              {/* Elite Diamond Pattern */}
              <div className="grid grid-cols-7 gap-6 max-w-lg mx-auto mb-12">
                {Array.from({ length: 21 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-4 h-4 ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-orange-400/60 to-amber-400/40 shadow-lg shadow-orange-400/30' : 
                      index % 3 === 1 ? 'bg-gradient-to-br from-emerald-400/60 to-teal-400/40 shadow-lg shadow-emerald-400/30' : 
                      'bg-gradient-to-br from-amber-400/60 to-orange-400/40 shadow-lg shadow-amber-400/30'
                    } transform rotate-45 animate-pulse border border-current/30`} 
                    style={{ animationDelay: `${index * 150}ms` }}
                  ></div>
                ))}
              </div>
              
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* ELITE GAMING SECTION - Enhanced with Premium Gaming Background */}
          <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 backdrop-blur-xl py-24 overflow-hidden border-b border-zinc-800/30">
            {/* Premium Gaming Background System */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Elite Gaming Ambient Lighting */}
              <div className="absolute top-1/3 left-1/5 w-[800px] h-[800px] bg-gradient-radial from-purple-500/12 via-pink-500/8 to-transparent blur-3xl animate-pulse opacity-80"></div>
              <div className="absolute bottom-1/3 right-1/5 w-[700px] h-[700px] bg-gradient-radial from-blue-500/12 via-purple-500/8 to-transparent blur-3xl animate-pulse opacity-80" style={{animationDelay: '4s'}}></div>
              
              {/* Advanced Gaming Grid System */}
              <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="gamingGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <rect width="100" height="100" fill="none"/>
                      <rect x="10" y="10" width="80" height="80" fill="none" stroke="url(#gamingGradient)" strokeWidth="1" opacity="0.6"/>
                      <circle cx="25" cy="25" r="2" fill="url(#gamingGradient)" opacity="0.8"/>
                      <circle cx="75" cy="75" r="3" fill="url(#gamingGradient)" opacity="0.7"/>
                      <path d="M50,10 L90,50 L50,90 L10,50 Z" stroke="url(#gamingGradient)" strokeWidth="0.5" fill="none" opacity="0.4"/>
                    </pattern>
                    <linearGradient id="gamingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(280 100% 70%)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="hsl(320 100% 75%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(240 100% 80%)" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gamingGrid)" />
                </svg>
              </div>

              {/* Elite Gaming Elements */}
              <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-gradient-to-br from-purple-400/50 to-pink-400/40 transform rotate-45 animate-pulse border border-purple-400/30 shadow-xl shadow-purple-400/30"></div>
              <div className="absolute top-2/3 right-1/4 w-6 h-6 bg-gradient-to-br from-pink-400/50 to-blue-400/40 rounded-full animate-pulse border border-pink-400/30 shadow-xl shadow-pink-400/30" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-1/4 left-1/6 w-10 h-10 bg-gradient-to-br from-blue-400/40 to-purple-400/30 animate-pulse border border-blue-400/20 shadow-xl shadow-blue-400/25 transform rotate-12" style={{animationDelay: '3s'}}></div>
            </div>

            {/* Elite Content Container */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-2xl shadow-zinc-900/50 p-8 md:p-12">
                <GamesSection />
              </div>
            </div>
          </section>
          
          {/* ELITE NEURAL NETWORK BREAK */}
          <div className="py-48 bg-gradient-to-b from-zinc-900/99 via-zinc-950/96 to-zinc-900/99 relative overflow-hidden backdrop-blur-sm border-y border-zinc-800/40">
            {/* Advanced Neural Network Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <radialGradient id="neuralGradient" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="hsl(158 64% 52%)" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="hsl(197 71% 73%)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="hsl(158 64% 52%)" stopOpacity="0.2" />
                  </radialGradient>
                </defs>
                
                {/* Elite neural connections */}
                <g stroke="url(#neuralGradient)" strokeWidth="1.5" fill="none">
                  <path d="M150,100 Q300,150 450,120 T750,160" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M200,250 Q350,200 500,230 T800,250" opacity="0.7">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" begin="0.5s"/>
                  </path>
                  <path d="M120,350 Q270,300 420,330 T720,370" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" begin="1s"/>
                  </path>
                  
                  {/* Cross connections */}
                  <line x1="200" y1="150" x2="420" y2="250" opacity="0.5">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" begin="0.75s"/>
                  </line>
                  <line x1="450" y1="200" x2="720" y2="300" opacity="0.6">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin="1.25s"/>
                  </line>
                </g>
                
                {/* Elite neural nodes */}
                <g fill="url(#neuralGradient)">
                  <circle cx="150" cy="100" r="5" opacity="0.9">
                    <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="450" cy="120" r="7" opacity="0.8">
                    <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" begin="0.3s"/>
                  </circle>
                  <circle cx="750" cy="160" r="6" opacity="0.7">
                    <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" begin="0.6s"/>
                  </circle>
                </g>
              </svg>
            </div>
            
            {/* Elite Multi-layer Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-radial from-emerald-500/8 to-transparent blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute top-1/2 right-1/6 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/6 to-transparent blur-3xl animate-pulse delay-700 rounded-full"></div>
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-teal-500/5 to-transparent blur-3xl animate-pulse delay-300 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Elite Neural Header */}
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent mx-auto mb-20 animate-pulse"></div>
              
              {/* Elite Interactive Elements */}
              <div className="flex justify-center items-center space-x-16 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-400/70 to-teal-400/50 rounded-full animate-pulse shadow-lg shadow-emerald-400/30"></div>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-emerald-400/40 to-transparent"></div>
                </div>
                
                <div className="px-10 py-5 bg-zinc-800/95 border border-emerald-500/50 backdrop-blur-sm shadow-2xl shadow-emerald-500/20">
                  <div className="text-emerald-400 font-mono text-sm font-black tracking-widest">
                    ⬢ NEURAL SYNAPTIC NEXUS ⬢
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-cyan-400/70 to-emerald-400/50 rounded-full animate-pulse delay-500 shadow-lg shadow-cyan-400/30"></div>
                  <div className="w-24 h-0.5 bg-gradient-to-l from-cyan-400/40 to-transparent"></div>
                </div>
              </div>
              
              {/* Elite Pattern Grid */}
              <div className="grid grid-cols-9 gap-4 max-w-2xl mx-auto mb-20">
                {Array.from({ length: 27 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-3 h-3 rounded-full ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-emerald-400/50 to-teal-400/30 shadow-md shadow-emerald-400/20' : 
                      index % 3 === 1 ? 'bg-gradient-to-br from-cyan-400/50 to-blue-400/30 shadow-md shadow-cyan-400/20' : 
                      'bg-gradient-to-br from-teal-400/50 to-emerald-400/30 shadow-md shadow-teal-400/20'
                    } animate-pulse`} 
                    style={{ animationDelay: `${index * 100}ms` }}
                  ></div>
                ))}
              </div>
              
              <div className="w-36 h-0.5 bg-gradient-to-r from-transparent via-teal-400/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* ELITE PRODUCTS SECTION - Enhanced with Premium Tech Background */}
          <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 backdrop-blur-xl py-24 overflow-hidden border-b border-zinc-800/30">
            {/* Premium Tech Background System */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Elite Tech Ambient Lighting */}
              <div className="absolute top-1/5 left-1/4 w-[750px] h-[750px] bg-gradient-radial from-cyan-500/12 via-blue-500/8 to-transparent blur-3xl animate-pulse opacity-80"></div>
              <div className="absolute bottom-1/5 right-1/4 w-[650px] h-[650px] bg-gradient-radial from-indigo-500/12 via-cyan-500/8 to-transparent blur-3xl animate-pulse opacity-80" style={{animationDelay: '3s'}}></div>
              
              {/* Advanced Circuit Pattern */}
              <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="techCircuit" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
                      <rect width="140" height="140" fill="none"/>
                      <path d="M20,20 L120,20 L120,50 L90,50 L90,80 L50,80 L50,110 L20,110 Z" stroke="url(#techGradient)" strokeWidth="1.5" fill="none" opacity="0.7"/>
                      <circle cx="20" cy="20" r="4" fill="url(#techGradient)" opacity="0.9"/>
                      <circle cx="120" cy="50" r="3" fill="url(#techGradient)" opacity="0.7"/>
                      <circle cx="50" cy="110" r="3.5" fill="url(#techGradient)" opacity="0.8"/>
                      <rect x="85" y="45" width="10" height="10" fill="url(#techGradient)" opacity="0.6"/>
                    </pattern>
                    <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(197 71% 73%)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="hsl(271 81% 56%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(215 89% 61%)" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#techCircuit)" />
                </svg>
              </div>

              {/* Elite Tech Elements */}
              <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-gradient-to-br from-cyan-400/50 to-blue-400/40 transform rotate-45 animate-pulse border border-cyan-400/30 shadow-xl shadow-cyan-400/30"></div>
              <div className="absolute top-1/6 right-1/3 w-4 h-4 bg-gradient-to-br from-blue-400/50 to-indigo-400/40 rounded-full animate-pulse border border-blue-400/30 shadow-xl shadow-blue-400/30" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-br from-indigo-400/40 to-cyan-400/30 animate-pulse border border-indigo-400/20 shadow-xl shadow-indigo-400/25" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Elite Content Container */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-2xl shadow-zinc-900/50 p-8 md:p-12">
                <ProductsShowcase />
              </div>
            </div>
          </section>
          
          {/* ELITE CRYSTALLINE BREAK */}
          <div className="py-52 bg-gradient-to-b from-zinc-950/99 via-black/96 to-zinc-950/99 relative overflow-hidden backdrop-blur-sm border-y border-zinc-800/40">
            {/* Advanced Crystalline Background */}
            <div className="absolute inset-0 pointer-events-none opacity-18">
              <svg className="w-full h-full" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(25 100% 58%)" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="hsl(43 96% 56%)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(158 64% 52%)" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                {/* Elite crystal formations */}
                <g stroke="url(#crystalGradient)" strokeWidth="2" fill="none">
                  {/* Main crystal structure */}
                  <polygon points="250,120 320,150 380,120 350,200 280,200" opacity="0.8">
                    <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                  </polygon>
                  <polygon points="500,180 570,210 630,180 600,260 530,260" opacity="0.7">
                    <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
                  </polygon>
                  <polygon points="350,350 420,380 480,350 450,430 380,430" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="4s" repeatCount="indefinite" begin="1.6s"/>
                  </polygon>
                  
                  {/* Connecting crystal veins */}
                  <line x1="320" y1="200" x2="380" y2="250" opacity="0.5">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="2.5s" repeatCount="indefinite" begin="0.4s"/>
                  </line>
                  <line x1="570" y1="260" x2="520" y2="300" opacity="0.6">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" begin="1.2s"/>
                  </line>
                </g>
                
                {/* Elite crystal cores */}
                <g fill="url(#crystalGradient)">
                  <circle cx="315" cy="160" r="4" opacity="0.9">
                    <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="565" cy="220" r="5" opacity="0.8">
                    <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" begin="0.6s"/>
                  </circle>
                  <circle cx="415" cy="390" r="4" opacity="0.7">
                    <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" begin="1.4s"/>
                  </circle>
                </g>
              </svg>
            </div>
            
            {/* Elite Complex Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/5 left-1/4 w-96 h-96 bg-gradient-radial from-orange-500/6 to-transparent blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute bottom-1/5 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-amber-500/5 to-transparent blur-3xl animate-pulse delay-1000 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-emerald-500/4 to-transparent blur-3xl animate-pulse delay-500 rounded-full"></div>
              <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-teal-500/5 to-transparent blur-3xl animate-pulse delay-1200 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Elite Visual Header */}
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-orange-500/80 to-transparent mx-auto mb-28 animate-pulse"></div>
              
              {/* Elite Advanced Grid Visual Break */}
              <div className="grid grid-cols-10 gap-4 max-w-4xl mx-auto mb-28">
                {Array.from({ length: 40 }).map((_, index) => {
                  const colors = [
                    'bg-gradient-to-br from-orange-400/40 to-amber-400/30 shadow-lg shadow-orange-400/20', 
                    'bg-gradient-to-br from-emerald-400/40 to-teal-400/30 shadow-lg shadow-emerald-400/20', 
                    'bg-gradient-to-br from-amber-400/40 to-orange-400/30 shadow-lg shadow-amber-400/20', 
                    'bg-gradient-to-br from-teal-400/40 to-emerald-400/30 shadow-lg shadow-teal-400/20'
                  ];
                  const sizes = ['w-3 h-3', 'w-4 h-4', 'w-5 h-5'];
                  return (
                    <div key={index} className="flex justify-center items-center">
                      <div 
                        className={`${colors[index % 4]} ${sizes[index % 3]} rounded-full animate-pulse border border-current/30`} 
                        style={{ animationDelay: `${index * 60}ms` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              
              {/* Elite Zone Label */}
              <div className="px-10 py-5 bg-zinc-800/95 border border-amber-500/50 backdrop-blur-sm mb-16 inline-block shadow-2xl shadow-amber-500/20">
                <div className="text-amber-400 font-mono text-sm font-black tracking-widest">
                  ◆ CRYSTALLINE MATRIX RESONANCE ◆
                </div>
              </div>
              
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* ELITE WEB APPS SECTION - Enhanced with Premium Mobile Background */}
          <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 backdrop-blur-xl py-24 overflow-hidden border-b border-zinc-800/30">
            {/* Premium Mobile Background System */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Elite Mobile Ambient Lighting */}
              <div className="absolute top-1/4 left-1/6 w-[700px] h-[700px] bg-gradient-radial from-green-500/12 via-emerald-500/8 to-transparent blur-3xl animate-pulse opacity-80"></div>
              <div className="absolute bottom-1/4 right-1/6 w-[600px] h-[600px] bg-gradient-radial from-teal-500/12 via-green-500/8 to-transparent blur-3xl animate-pulse opacity-80" style={{animationDelay: '2s'}}></div>
              
              {/* Advanced App Grid */}
              <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="appGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                      <rect width="80" height="80" fill="none"/>
                      <rect x="10" y="10" width="60" height="60" rx="8" fill="none" stroke="url(#appGradient)" strokeWidth="1" opacity="0.6"/>
                      <circle cx="25" cy="25" r="2" fill="url(#appGradient)" opacity="0.8"/>
                      <circle cx="55" cy="25" r="1.5" fill="url(#appGradient)" opacity="0.7"/>
                      <rect x="20" y="35" width="40" height="2" fill="url(#appGradient)" opacity="0.5"/>
                      <rect x="20" y="40" width="30" height="2" fill="url(#appGradient)" opacity="0.4"/>
                    </pattern>
                    <linearGradient id="appGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(142 76% 36%)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="hsl(158 64% 52%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(173 80% 40%)" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#appGrid)" />
                </svg>
              </div>

              {/* Elite Mobile Elements */}
              <div className="absolute top-1/5 left-1/4 w-5 h-5 bg-gradient-to-br from-green-400/50 to-emerald-400/40 transform rotate-45 animate-pulse border border-green-400/30 shadow-xl shadow-green-400/30"></div>
              <div className="absolute top-3/4 right-1/5 w-4 h-4 bg-gradient-to-br from-emerald-400/50 to-teal-400/40 rounded-full animate-pulse border border-emerald-400/30 shadow-xl shadow-emerald-400/30" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/5 left-1/5 w-7 h-7 bg-gradient-to-br from-teal-400/40 to-green-400/30 animate-pulse border border-teal-400/20 shadow-xl shadow-teal-400/25" style={{animationDelay: '1.5s'}}></div>
            </div>

            {/* Elite Content Container */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-2xl shadow-zinc-900/50 p-8 md:p-12">
                <WebAppsSection />
              </div>
            </div>
          </section>
          
          {/* ELITE QUANTUM FIELD BREAK */}
          <div className="py-56 bg-gradient-to-b from-zinc-950/99 via-zinc-900/96 to-black/96 relative overflow-hidden backdrop-blur-sm border-y border-zinc-800/40">
            {/* Advanced Quantum Field Background */}
            <div className="absolute inset-0 pointer-events-none opacity-15">
              <svg className="w-full h-full" viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <radialGradient id="quantumGradient" cx="50%" cy="50%" r="80%">
                    <stop offset="0%" stopColor="hsl(158 64% 52%)" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="hsl(197 71% 73%)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="hsl(173 80% 40%)" stopOpacity="0.2" />
                  </radialGradient>
                </defs>
                
                {/* Elite quantum field waves */}
                <g stroke="url(#quantumGradient)" strokeWidth="1.5" fill="none">
                  {/* Sine wave patterns */}
                  <path d="M0,120 Q150,70 300,120 T600,120 T900,120 T1200,120 T1400,120" opacity="0.8">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="4s" repeatCount="indefinite"/>
                  </path>
                  <path d="M0,240 Q150,290 300,240 T600,240 T900,240 T1200,240 T1400,240" opacity="0.7">
                    <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4.5s" repeatCount="indefinite" begin="0.5s"/>
                  </path>
                  <path d="M0,360 Q150,310 300,360 T600,360 T900,360 T1200,360 T1400,360" opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" begin="1s"/>
                  </path>
                  <path d="M0,480 Q150,530 300,480 T600,480 T900,480 T1200,480 T1400,480" opacity="0.5">
                    <animate attributeName="opacity" values="0.2;0.5;0.2" dur="5.5s" repeatCount="indefinite" begin="1.5s"/>
                  </path>
                  
                  {/* Interference patterns */}
                  <circle cx="300" cy="180" r="40" opacity="0.6">
                    <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite" begin="0.3s"/>
                  </circle>
                  <circle cx="700" cy="300" r="50" opacity="0.5">
                    <animate attributeName="r" values="40;50;40" dur="3.5s" repeatCount="indefinite" begin="0.8s"/>
                  </circle>
                  <circle cx="1100" cy="420" r="45" opacity="0.4">
                    <animate attributeName="r" values="35;45;35" dur="4s" repeatCount="indefinite" begin="1.3s"/>
                  </circle>
                </g>
                
                {/* Elite quantum particles */}
                <g fill="url(#quantumGradient)">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <circle 
                      key={i}
                      cx={120 + i * 80} 
                      cy={140 + Math.sin(i) * 60} 
                      r="2.5" 
                      opacity="0.7">
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 200}ms`}/>
                    </circle>
                  ))}
                </g>
              </svg>
            </div>
            
            {/* Elite Complex Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/6 left-1/5 w-96 h-96 bg-gradient-radial from-emerald-500/5 to-transparent blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute bottom-1/6 right-1/5 w-[500px] h-[500px] bg-gradient-radial from-cyan-500/5 to-transparent blur-3xl animate-pulse delay-800 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-teal-500/4 to-transparent blur-3xl animate-pulse delay-400 rounded-full"></div>
              <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-radial from-blue-500/5 to-transparent blur-3xl animate-pulse delay-1200 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Elite Visual Header */}
              <div className="w-72 h-1 bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent mx-auto mb-32 animate-pulse"></div>
              
              {/* Elite Advanced Tech Grid Visual Break */}
              <div className="grid grid-cols-12 gap-3 max-w-6xl mx-auto mb-32">
                {Array.from({ length: 48 }).map((_, index) => {
                  const colors = [
                    'bg-gradient-to-br from-emerald-400/40 to-teal-400/30 shadow-lg shadow-emerald-400/20', 
                    'bg-gradient-to-br from-cyan-400/40 to-blue-400/30 shadow-lg shadow-cyan-400/20', 
                    'bg-gradient-to-br from-teal-400/40 to-emerald-400/30 shadow-lg shadow-teal-400/20', 
                    'bg-gradient-to-br from-blue-400/40 to-cyan-400/30 shadow-lg shadow-blue-400/20'
                  ];
                  const sizes = ['w-2 h-2', 'w-3 h-3', 'w-4 h-4'];
                  return (
                    <div key={index} className="flex justify-center items-center">
                      <div 
                        className={`${colors[index % 4]} ${sizes[index % 3]} rounded-full animate-pulse border border-current/30`} 
                        style={{ animationDelay: `${index * 40}ms` }}
                      ></div>
                    </div>
                  );
                })}
              </div>
              
              {/* Elite Zone Label */}
              <div className="px-12 py-6 bg-zinc-800/95 border border-emerald-500/50 backdrop-blur-sm mb-16 inline-block shadow-2xl shadow-emerald-500/20">
                <div className="text-emerald-400 font-mono text-sm font-black tracking-widest">
                  ⬡ QUANTUM FIELD RESONANCE NEXUS ⬡
                </div>
              </div>
              
              <div className="w-56 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* ELITE DEVELOPER TOOLS SECTION - Enhanced with Premium Code Background */}
          <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 backdrop-blur-xl py-24 overflow-hidden border-b border-zinc-800/30">
            {/* Premium Developer Background System */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Elite Code Ambient Lighting */}
              <div className="absolute top-1/3 left-1/4 w-[750px] h-[750px] bg-gradient-radial from-amber-500/12 via-orange-500/8 to-transparent blur-3xl animate-pulse opacity-80"></div>
              <div className="absolute bottom-1/3 right-1/4 w-[650px] h-[650px] bg-gradient-radial from-orange-500/12 via-red-500/8 to-transparent blur-3xl animate-pulse opacity-80" style={{animationDelay: '3s'}}></div>
              
              {/* Advanced Code Pattern */}
              <div className="absolute inset-0 opacity-12">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="codePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                      <rect width="60" height="60" fill="none"/>
                      <rect x="5" y="5" width="50" height="2" fill="url(#codeGradient)" opacity="0.6"/>
                      <rect x="5" y="10" width="30" height="2" fill="url(#codeGradient)" opacity="0.5"/>
                      <rect x="5" y="15" width="40" height="2" fill="url(#codeGradient)" opacity="0.4"/>
                      <rect x="15" y="20" width="25" height="2" fill="url(#codeGradient)" opacity="0.5"/>
                      <rect x="5" y="25" width="35" height="2" fill="url(#codeGradient)" opacity="0.6"/>
                      <circle cx="10" cy="6" r="1" fill="url(#codeGradient)" opacity="0.8"/>
                      <circle cx="20" cy="21" r="1" fill="url(#codeGradient)" opacity="0.7"/>
                    </pattern>
                    <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(43 96% 56%)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="hsl(25 100% 58%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(15 100% 60%)" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#codePattern)" />
                </svg>
              </div>

              {/* Elite Developer Elements */}
              <div className="absolute top-1/4 left-1/5 w-6 h-6 bg-gradient-to-br from-amber-400/50 to-orange-400/40 transform rotate-45 animate-pulse border border-amber-400/30 shadow-xl shadow-amber-400/30"></div>
              <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-gradient-to-br from-orange-400/50 to-red-400/40 rounded-full animate-pulse border border-orange-400/30 shadow-xl shadow-orange-400/30" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/4 left-1/3 w-7 h-7 bg-gradient-to-br from-red-400/40 to-amber-400/30 animate-pulse border border-red-400/20 shadow-xl shadow-red-400/25 transform rotate-12" style={{animationDelay: '2s'}}></div>
            </div>

            {/* Elite Content Container */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-2xl shadow-zinc-900/50 p-8 md:p-12">
                <DeveloperTools />
              </div>
            </div>
          </section>
          
          {/* ELITE DATA STREAM BREAK */}
          <div className="py-44 bg-gradient-to-b from-black/99 via-zinc-950/96 to-zinc-900/96 relative overflow-hidden backdrop-blur-sm border-y border-zinc-800/40">
            {/* Advanced Data Stream Background */}
            <div className="absolute inset-0 pointer-events-none opacity-12">
              <svg className="w-full h-full" viewBox="0 0 1400 500" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="dataStreamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(25 100% 58%)" stopOpacity="0" />
                    <stop offset="30%" stopColor="hsl(25 100% 58%)" stopOpacity="0.6" />
                    <stop offset="70%" stopColor="hsl(43 96% 56%)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="hsl(43 96% 56%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Elite data streams */}
                <g stroke="url(#dataStreamGradient)" strokeWidth="1.5" fill="none">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <g key={i}>
                      <line 
                        x1="0" 
                        y1={60 + i * 40} 
                        x2="1400" 
                        y2={60 + i * 40} 
                        opacity="0.8">
                        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" begin={`${i * 200}ms`}/>
                      </line>
                      {/* Elite data packets */}
                      <circle 
                        cx={120 + i * 140} 
                        cy={60 + i * 40} 
                        r="3" 
                        fill="hsl(25 100% 58%)" 
                        opacity="0.7">
                        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" begin={`${i * 300}ms`}/>
                      </circle>
                      <circle 
                        cx={350 + i * 100} 
                        cy={60 + i * 40} 
                        r="2" 
                        fill="hsl(43 96% 56%)" 
                        opacity="0.6">
                        <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" begin={`${i * 400}ms`}/>
                      </circle>
                    </g>
                  ))}
                </g>
              </svg>
            </div>
            
            {/* Elite Sophisticated Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-orange-500/4 to-transparent blur-3xl animate-pulse rounded-full"></div>
              <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-amber-500/5 to-transparent blur-3xl animate-pulse delay-600 rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-orange-400/4 to-transparent blur-3xl animate-pulse delay-1000 rounded-full"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Elite Visual Header */}
              <div className="w-80 h-1 bg-gradient-to-r from-transparent via-orange-500/90 to-transparent mx-auto mb-24 animate-pulse"></div>
              
              {/* Elite Advanced Contact Transition Elements */}
              <div className="flex justify-center items-center space-x-20 mb-24">
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-orange-400/60 animate-pulse"></div>
                  <div className="w-5 h-5 bg-gradient-to-br from-orange-400/60 to-amber-400/50 transform rotate-45 animate-pulse delay-200 shadow-lg shadow-orange-400/30"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-amber-400/50 animate-pulse delay-400"></div>
                </div>
                
                <div className="px-12 py-6 bg-zinc-800/95 border border-orange-500/50 backdrop-blur-sm shadow-2xl shadow-orange-500/20">
                  <div className="text-orange-400 font-mono text-sm font-black tracking-widest">
                    ◈ DATA STREAM CONVERGENCE MATRIX ◈
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-6">
                  <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-amber-400/60 animate-pulse delay-300"></div>
                  <div className="w-5 h-5 bg-gradient-to-br from-amber-400/60 to-orange-400/50 transform rotate-45 animate-pulse delay-500 shadow-lg shadow-amber-400/30"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-orange-400/50 animate-pulse delay-700"></div>
                </div>
              </div>
              
              {/* Elite Final Pattern */}
              <div className="grid grid-cols-16 gap-2 max-w-7xl mx-auto mb-24">
                {Array.from({ length: 64 }).map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-1.5 h-1.5 ${
                      index % 8 === 0 ? 'bg-gradient-to-br from-orange-400/50 to-amber-400/40 shadow-sm shadow-orange-400/20' : 
                      index % 8 === 1 ? 'bg-gradient-to-br from-amber-400/50 to-orange-500/40 shadow-sm shadow-amber-400/20' : 
                      index % 8 === 2 ? 'bg-gradient-to-br from-orange-500/50 to-amber-500/40 shadow-sm shadow-orange-500/20' : 
                      index % 8 === 3 ? 'bg-gradient-to-br from-amber-500/50 to-orange-400/40 shadow-sm shadow-amber-500/20' : 
                      index % 8 === 4 ? 'bg-gradient-to-br from-orange-300/50 to-amber-300/40 shadow-sm shadow-orange-300/20' : 
                      index % 8 === 5 ? 'bg-gradient-to-br from-amber-300/50 to-orange-300/40 shadow-sm shadow-amber-300/20' : 
                      index % 8 === 6 ? 'bg-gradient-to-br from-orange-600/50 to-amber-600/40 shadow-sm shadow-orange-600/20' : 
                      'bg-gradient-to-br from-amber-600/50 to-orange-600/40 shadow-sm shadow-amber-600/20'
                    } animate-pulse`} 
                    style={{ animationDelay: `${index * 25}ms` }}
                  ></div>
                ))}
              </div>
              
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-amber-600/80 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* ELITE CONTACT SECTION - Enhanced with Premium Professional Background */}
          <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/98 via-zinc-900/95 to-zinc-950/98 backdrop-blur-xl py-24 overflow-hidden">
            {/* Premium Contact Background System */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Elite Contact Ambient Lighting */}
              <div className="absolute top-1/4 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-emerald-500/12 via-cyan-500/8 to-transparent blur-3xl animate-pulse opacity-80"></div>
              <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/12 via-blue-500/8 to-transparent blur-3xl animate-pulse opacity-80" style={{animationDelay: '2s'}}></div>
              
              {/* Advanced Communication Pattern */}
              <div className="absolute inset-0 opacity-15">
                <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="commPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                      <rect width="150" height="150" fill="none"/>
                      <circle cx="75" cy="75" r="30" fill="none" stroke="url(#commGradient)" strokeWidth="1" opacity="0.6"/>
                      <circle cx="75" cy="75" r="20" fill="none" stroke="url(#commGradient)" strokeWidth="0.5" opacity="0.5"/>
                      <circle cx="75" cy="75" r="10" fill="url(#commGradient)" opacity="0.7"/>
                      <path d="M45,45 L105,105 M105,45 L45,105" stroke="url(#commGradient)" strokeWidth="0.5" opacity="0.4"/>
                      <circle cx="30" cy="30" r="3" fill="url(#commGradient)" opacity="0.8"/>
                      <circle cx="120" cy="120" r="2" fill="url(#commGradient)" opacity="0.6"/>
                    </pattern>
                    <linearGradient id="commGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(158 64% 52%)" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="hsl(197 71% 73%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(215 89% 61%)" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#commPattern)" />
                </svg>
              </div>

              {/* Elite Contact Elements */}
              <div className="absolute top-1/5 left-1/6 w-5 h-5 bg-gradient-to-br from-emerald-400/50 to-cyan-400/40 transform rotate-45 animate-pulse border border-emerald-400/30 shadow-xl shadow-emerald-400/30"></div>
              <div className="absolute top-3/4 right-1/6 w-4 h-4 bg-gradient-to-br from-cyan-400/50 to-blue-400/40 rounded-full animate-pulse border border-cyan-400/30 shadow-xl shadow-cyan-400/30" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/6 left-1/4 w-6 h-6 bg-gradient-to-br from-blue-400/40 to-emerald-400/30 animate-pulse border border-blue-400/20 shadow-xl shadow-blue-400/25" style={{animationDelay: '1.5s'}}></div>
            </div>

            {/* Elite Content Container */}
            <div className="container mx-auto px-4 relative z-10">
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-2xl shadow-zinc-900/50 p-8 md:p-12">
                <Contact />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
