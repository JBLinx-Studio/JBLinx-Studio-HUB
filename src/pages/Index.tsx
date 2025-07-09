
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

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Header />
      <main className="relative">
        <Hero />
        
        {/* Enhanced Services Overview */}
        <Services />
        
        {/* PREMIUM VISUAL BREAK SECTION 1 - Quantum Field Effect */}
        <div className="py-40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700/30 relative overflow-hidden">
          {/* Quantum Field Background */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-15" viewBox="0 0 1200 800">
              <defs>
                <radialGradient id="quantumGlow1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="quantumGlow2" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </radialGradient>
                <filter id="quantumBlur">
                  <feGaussianBlur stdDeviation="2" />
                </filter>
              </defs>
              
              {/* Quantum Particles */}
              {Array.from({ length: 50 }).map((_, i) => (
                <circle
                  key={i}
                  cx={Math.random() * 1200}
                  cy={Math.random() * 800}
                  r={Math.random() * 3 + 1}
                  fill={i % 3 === 0 ? "url(#quantumGlow1)" : "url(#quantumGlow2)"}
                  className="animate-pulse"
                  style={{ 
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 2 + 2}s`
                  }}
                />
              ))}
              
              {/* Quantum Field Lines */}
              <g stroke="url(#quantumGlow1)" strokeWidth="0.5" fill="none" opacity="0.4">
                <path d="M0,200 Q300,100 600,200 T1200,200" className="animate-pulse" />
                <path d="M0,400 Q300,300 600,400 T1200,400" className="animate-pulse" style={{animationDelay: '1s'}} />
                <path d="M0,600 Q300,500 600,600 T1200,600" className="animate-pulse" style={{animationDelay: '2s'}} />
              </g>
            </svg>
          </div>
          
          {/* Floating Orbs */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/8 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-cyan-500/8 blur-3xl rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-3xl rounded-full animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Enhanced Header */}
            <div className="flex justify-center items-center space-x-12 mb-16">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse"></div>
              <div className="px-6 py-3 bg-slate-800/95 border border-purple-500/30 backdrop-blur-sm rounded-lg shadow-2xl">
                <div className="text-purple-400 font-mono text-sm font-black tracking-widest">
                  QUANTUM FIELD MATRIX
                </div>
              </div>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse delay-500"></div>
            </div>
            
            {/* Quantum Pattern Grid */}
            <div className="grid grid-cols-8 gap-4 max-w-2xl mx-auto mb-12">
              {Array.from({ length: 32 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`${
                    index % 4 === 0 ? 'w-3 h-3 bg-purple-400/40 rounded-full' : 
                    index % 4 === 1 ? 'w-2 h-2 bg-cyan-400/40 rounded-sm' : 
                    index % 4 === 2 ? 'w-4 h-1 bg-emerald-400/40' : 'w-1 h-4 bg-pink-400/40'
                  } animate-pulse mx-auto`}
                  style={{ animationDelay: `${index * 100}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
        
        {/* PRIORITY 1: GAMERS */}
        <div className="animate-fade-in">
          <GamesSection />
        </div>
        
        {/* NEURAL NETWORK TRANSITION - Enhanced Vertices */}
        <div className="py-48 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
          {/* Advanced Neural Network */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-20" viewBox="0 0 1000 600">
              <defs>
                <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
                <filter id="neuralGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Neural Connections */}
              <g stroke="url(#neuralGradient)" strokeWidth="2" fill="none" filter="url(#neuralGlow)">
                <line x1="100" y1="100" x2="300" y2="150" className="animate-pulse" />
                <line x1="300" y1="150" x2="500" y2="120" className="animate-pulse" style={{animationDelay: '300ms'}} />
                <line x1="500" y1="120" x2="700" y2="200" className="animate-pulse" style={{animationDelay: '600ms'}} />
                <line x1="700" y1="200" x2="850" y2="140" className="animate-pulse" style={{animationDelay: '900ms'}} />
                <line x1="200" y1="300" x2="400" y2="280" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                <line x1="400" y1="280" x2="600" y2="350" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                <line x1="600" y1="350" x2="800" y2="320" className="animate-pulse" style={{animationDelay: '1800ms'}} />
                
                {/* Cross connections */}
                <line x1="300" y1="150" x2="400" y2="280" className="animate-pulse" style={{animationDelay: '400ms'}} />
                <line x1="500" y1="120" x2="600" y2="350" className="animate-pulse" style={{animationDelay: '700ms'}} />
                <line x1="700" y1="200" x2="400" y2="280" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                
                {/* Secondary layer */}
                <line x1="150" y1="450" x2="350" y2="420" className="animate-pulse" style={{animationDelay: '200ms'}} />
                <line x1="350" y1="420" x2="550" y2="480" className="animate-pulse" style={{animationDelay: '500ms'}} />
                <line x1="550" y1="480" x2="750" y2="450" className="animate-pulse" style={{animationDelay: '800ms'}} />
              </g>
              
              {/* Neural Nodes */}
              <g fill="url(#neuralGradient)" filter="url(#neuralGlow)">
                <circle cx="100" cy="100" r="6" className="animate-pulse" />
                <circle cx="300" cy="150" r="8" className="animate-pulse" style={{animationDelay: '200ms'}} />
                <circle cx="500" cy="120" r="6" className="animate-pulse" style={{animationDelay: '400ms'}} />
                <circle cx="700" cy="200" r="10" className="animate-pulse" style={{animationDelay: '600ms'}} />
                <circle cx="850" cy="140" r="6" className="animate-pulse" style={{animationDelay: '800ms'}} />
                <circle cx="200" cy="300" r="8" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                <circle cx="400" cy="280" r="12" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                <circle cx="600" cy="350" r="6" className="animate-pulse" style={{animationDelay: '1400ms'}} />
                <circle cx="800" cy="320" r="8" className="animate-pulse" style={{animationDelay: '1600ms'}} />
                <circle cx="150" cy="450" r="7" className="animate-pulse" style={{animationDelay: '1800ms'}} />
                <circle cx="350" cy="420" r="9" className="animate-pulse" style={{animationDelay: '2000ms'}} />
                <circle cx="550" cy="480" r="6" className="animate-pulse" style={{animationDelay: '2200ms'}} />
                <circle cx="750" cy="450" r="8" className="animate-pulse" style={{animationDelay: '2400ms'}} />
              </g>
              
              {/* Data packets */}
              <g fill="#3b82f6" opacity="0.6">
                <circle cx="200" cy="125" r="2" className="animate-pulse" style={{animationDelay: '100ms'}} />
                <circle cx="400" cy="135" r="2" className="animate-pulse" style={{animationDelay: '300ms'}} />
                <circle cx="600" cy="160" r="2" className="animate-pulse" style={{animationDelay: '500ms'}} />
                <circle cx="300" cy="290" r="2" className="animate-pulse" style={{animationDelay: '700ms'}} />
                <circle cx="500" cy="315" r="2" className="animate-pulse" style={{animationDelay: '900ms'}} />
                <circle cx="700" cy="385" r="2" className="animate-pulse" style={{animationDelay: '1100ms'}} />
              </g>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="flex justify-center items-center space-x-16 mb-16">
              <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse"></div>
              <div className="px-8 py-4 bg-slate-800/95 border border-blue-500/30 backdrop-blur-sm rounded-lg shadow-2xl">
                <div className="text-blue-400 font-mono text-sm font-black tracking-widest">
                  NEURAL NETWORK BRIDGE
                </div>
              </div>
              <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* PRIORITY 2: GENERAL PRODUCTS */}
        <div className="animate-fade-in">
          <ProductsShowcase />
        </div>
        
        {/* HOLOGRAPHIC MATRIX SPACE */}
        <div className="py-52 bg-gradient-to-b from-slate-950 via-black to-slate-950 relative overflow-hidden">
          {/* Holographic Grid */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-12" viewBox="0 0 800 600">
              <defs>
                <pattern id="holographicGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                  <rect width="60" height="60" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                  <circle cx="30" cy="30" r="3" fill="#06b6d4" opacity="0.6" />
                  <circle cx="30" cy="30" r="8" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
                </pattern>
                <linearGradient id="holographicShine" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
                <filter id="holographicGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <rect width="100%" height="100%" fill="url(#holographicGrid)" />
              
              {/* Holographic shapes */}
              <g fill="url(#holographicShine)" stroke="#10b981" strokeWidth="2" opacity="0.4" filter="url(#holographicGlow)">
                <polygon points="150,100 200,150 150,200 100,150" className="animate-pulse" />
                <polygon points="550,120 600,170 550,220 500,170" className="animate-pulse" style={{animationDelay: '700ms'}} />
                <polygon points="300,350 350,400 300,450 250,400" className="animate-pulse" style={{animationDelay: '1400ms'}} />
                
                {/* Floating hexagons */}
                <polygon points="400,80 430,95 430,125 400,140 370,125 370,95" className="animate-pulse" style={{animationDelay: '300ms'}} />
                <polygon points="200,300 230,315 230,345 200,360 170,345 170,315" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                <polygon points="600,380 630,395 630,425 600,440 570,425 570,395" className="animate-pulse" style={{animationDelay: '1700ms'}} />
              </g>
              
              {/* Scanning lines */}
              <g stroke="url(#holographicShine)" strokeWidth="1" opacity="0.3">
                <line x1="0" y1="150" x2="800" y2="150" className="animate-pulse" style={{animationDelay: '200ms'}} />
                <line x1="0" y1="300" x2="800" y2="300" className="animate-pulse" style={{animationDelay: '800ms'}} />
                <line x1="0" y1="450" x2="800" y2="450" className="animate-pulse" style={{animationDelay: '1400ms'}} />
              </g>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="flex justify-center items-center space-x-20 mb-20">
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-green-400/70 to-transparent animate-pulse"></div>
              <div className="px-8 py-4 bg-slate-800/95 border border-green-500/30 backdrop-blur-sm rounded-lg shadow-2xl">
                <div className="text-green-400 font-mono text-sm font-black tracking-widest">
                  HOLOGRAPHIC MATRIX SPACE
                </div>
              </div>
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-green-400/70 to-transparent animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* PRIORITY 3: APP USERS */}
        <div className="animate-fade-in">
          <WebAppsSection />
        </div>
        
        {/* CYBERPUNK CIRCUIT REALM */}
        <div className="py-56 bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden">
          {/* Advanced Circuit Board */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-15" viewBox="0 0 1000 700">
              <defs>
                <linearGradient id="cyberpunkCircuit" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="30%" stopColor="#10b981" stopOpacity="0.6" />
                  <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
                </linearGradient>
                <filter id="cyberpunkGlow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="none" stroke="url(#cyberpunkCircuit)" strokeWidth="0.5" opacity="0.2" />
                  <circle cx="50" cy="50" r="2" fill="url(#cyberpunkCircuit)" opacity="0.4" />
                </pattern>
              </defs>
              
              <rect width="100%" height="100%" fill="url(#circuitPattern)" />
              
              {/* Main circuit pathways */}
              <g stroke="url(#cyberpunkCircuit)" strokeWidth="3" fill="none" filter="url(#cyberpunkGlow)">
                <line x1="100" y1="150" x2="400" y2="150" className="animate-pulse" />
                <line x1="420" y1="150" x2="700" y2="150" className="animate-pulse" style={{animationDelay: '300ms'}} />
                <line x1="720" y1="150" x2="900" y2="150" className="animate-pulse" style={{animationDelay: '600ms'}} />
                
                <line x1="150" y1="300" x2="450" y2="300" className="animate-pulse" style={{animationDelay: '900ms'}} />
                <line x1="470" y1="300" x2="750" y2="300" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                <line x1="770" y1="300" x2="950" y2="300" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                
                <line x1="120" y1="450" x2="420" y2="450" className="animate-pulse" style={{animationDelay: '1800ms'}} />
                <line x1="440" y1="450" x2="720" y2="450" className="animate-pulse" style={{animationDelay: '2100ms'}} />
                <line x1="740" y1="450" x2="920" y2="450" className="animate-pulse" style={{animationDelay: '2400ms'}} />
                
                {/* Vertical connections */}
                <line x1="250" y1="130" x2="250" y2="470" className="animate-pulse" style={{animationDelay: '400ms'}} />
                <line x1="500" y1="130" x2="500" y2="470" className="animate-pulse" style={{animationDelay: '800ms'}} />
                <line x1="750" y1="130" x2="750" y2="470" className="animate-pulse" style={{animationDelay: '1200ms'}} />
              </g>
              
              {/* Circuit nodes and processors */}
              <g fill="url(#cyberpunkCircuit)" filter="url(#cyberpunkGlow)">
                <rect x="240" y="140" width="20" height="20" rx="4" className="animate-pulse" />
                <rect x="490" y="140" width="20" height="20" rx="4" className="animate-pulse" style={{animationDelay: '300ms'}} />
                <rect x="740" y="140" width="20" height="20" rx="4" className="animate-pulse" style={{animationDelay: '600ms'}} />
                <rect x="240" y="290" width="20" height="20" rx="4" className="animate-pulse" style={{animationDelay: '900ms'}} />
                <rect x="490" y="290" width="20" height="20" rx="4" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                <rect x="740" y="290" width="20" height="20" rx="4" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                <rect x="240" y="440" width="20" height="20" rx="4" className="animate-pulse" style={{animationDelay: '1800ms'}} />
                <rect x="490" y="440" width="20" height="20" rx="4" className="animate-pulse" style={{animationDelay: '2100ms'}} />
                <rect x="740" y="440" width="20" height="20" rx="4" className="animate-pulse" style={{animationDelay: '2400ms'}} />
                
                {/* Main processors */}
                <rect x="200" y="200" width="40" height="40" rx="6" className="animate-pulse" style={{animationDelay: '500ms'}} />
                <rect x="450" y="350" width="40" height="40" rx="6" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                <rect x="700" y="200" width="40" height="40" rx="6" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                
                {/* Data flow indicators */}
                <circle cx="150" cy="150" r="4" className="animate-pulse" style={{animationDelay: '200ms'}} />
                <circle cx="350" cy="150" r="4" className="animate-pulse" style={{animationDelay: '700ms'}} />
                <circle cx="550" cy="150" r="4" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                <circle cx="200" cy="300" r="4" className="animate-pulse" style={{animationDelay: '1700ms'}} />
                <circle cx="400" cy="300" r="4" className="animate-pulse" style={{animationDelay: '2200ms'}} />
                <circle cx="600" cy="300" r="4" className="animate-pulse" style={{animationDelay: '2700ms'}} />
              </g>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="flex justify-center items-center space-x-24 mb-24">
              <div className="w-56 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-pulse"></div>
              <div className="px-10 py-5 bg-slate-800/95 border border-cyan-500/30 backdrop-blur-sm rounded-lg shadow-2xl">
                <div className="text-cyan-400 font-mono text-sm font-black tracking-widest">
                  CYBERPUNK CIRCUIT REALM
                </div>
              </div>
              <div className="w-56 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* PRIORITY 4: DEVELOPERS */}
        <div className="animate-fade-in">
          <DeveloperTools />
        </div>
        
        {/* FINAL DATA STREAM TERMINAL */}
        <div className="py-44 bg-gradient-to-b from-black via-slate-950 to-slate-900 relative overflow-hidden">
          {/* Advanced Data Flow */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full opacity-10" viewBox="0 0 1200 500">
              <defs>
                <linearGradient id="dataStreamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
                  <stop offset="30%" stopColor="#64748b" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#64748b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
                </linearGradient>
                <filter id="dataGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Data streams */}
              <g stroke="url(#dataStreamGradient)" strokeWidth="2" fill="none" filter="url(#dataGlow)">
                {Array.from({ length: 12 }).map((_, i) => (
                  <g key={i}>
                    <line 
                      x1="0" 
                      y1={40 + i * 35} 
                      x2="1200" 
                      y2={40 + i * 35} 
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 200}ms`}} 
                    />
                    {/* Enhanced data packets */}
                    <circle 
                      cx={120 + (i * 100)} 
                      cy={40 + i * 35} 
                      r="3" 
                      fill="#64748b" 
                      opacity="0.8"
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 250}ms`}} 
                    />
                    <circle 
                      cx={280 + (i * 80)} 
                      cy={40 + i * 35} 
                      r="2" 
                      fill="#64748b" 
                      opacity="0.6"
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 350}ms`}} 
                    />
                    <circle 
                      cx={450 + (i * 60)} 
                      cy={40 + i * 35} 
                      r="4" 
                      fill="#64748b" 
                      opacity="0.7"
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 450}ms`}} 
                    />
                    <rect 
                      x={600 + (i * 40)} 
                      y={37 + i * 35} 
                      width="6" 
                      height="6" 
                      fill="#64748b" 
                      opacity="0.5"
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 550}ms`}} 
                    />
                  </g>
                ))}
              </g>
              
              {/* Data terminals */}
              <g fill="#64748b" opacity="0.6">
                <rect x="0" y="30" width="8" height="380" rx="2" className="animate-pulse" />
                <rect x="1192" y="30" width="8" height="380" rx="2" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                <rect x="300" y="10" width="4" height="420" rx="1" className="animate-pulse" style={{animationDelay: '500ms'}} />
                <rect x="600" y="10" width="4" height="420" rx="1" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                <rect x="900" y="10" width="4" height="420" rx="1" className="animate-pulse" style={{animationDelay: '2000ms'}} />
              </g>
            </svg>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="flex justify-center items-center space-x-20 mb-20">
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-slate-400/80 to-transparent animate-pulse"></div>
              <div className="px-12 py-6 bg-slate-800/95 border border-slate-500/30 backdrop-blur-sm rounded-lg shadow-2xl">
                <div className="text-slate-400 font-mono text-sm font-black tracking-widest">
                  DATA STREAM TERMINAL
                </div>
              </div>
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-slate-400/80 to-transparent animate-pulse delay-500"></div>
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
  );
};

export default Index;
