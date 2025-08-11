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
        <main className="relative bg-transparent">
          <Hero />
          
          {/* Enhanced Services Overview */}
          <Services />
          
          {/* Premium Visual Break Section with Animated Elements */}
          <div className="py-32 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 border-y border-slate-700/50 relative overflow-hidden backdrop-blur-sm">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/3 blur-3xl animate-pulse delay-500"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Elements */}
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent animate-pulse"></div>
                <div className="px-4 py-2 bg-slate-800/95 border border-slate-600 backdrop-blur-sm">
                  <div className="text-slate-500 font-mono text-xs font-black tracking-widest">
                    PREMIUM CONTENT SECTORS
                  </div>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent animate-pulse delay-500"></div>
              </div>
              
              {/* Animated Dots Pattern */}
              <div className="grid grid-cols-5 gap-4 max-w-sm mx-auto mb-8">
                {Array.from({
                length: 15
              }).map((_, index) => <div key={index} className="w-2 h-2 bg-slate-600/50 animate-pulse" style={{
                animationDelay: `${index * 100}ms`
              }}></div>)}
              </div>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS - Enhanced Entry Animation */}
          <div className="animate-fade-in">
            <GamesSection />
          </div>
          
          {/* Enhanced Transition Zone with Connected Vertices Background */}
          <div className="py-40 bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-900/95 relative overflow-hidden backdrop-blur-sm">
            {/* Connected Vertices Background */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-10" viewBox="0 0 800 400">
                <defs>
                  <linearGradient id="vertexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Animated connecting lines */}
                <g stroke="url(#vertexGradient1)" strokeWidth="1" fill="none">
                  <line x1="100" y1="80" x2="200" y2="150" className="animate-pulse" />
                  <line x1="200" y1="150" x2="350" y2="120" className="animate-pulse" style={{
                  animationDelay: '300ms'
                }} />
                  <line x1="350" y1="120" x2="500" y2="200" className="animate-pulse" style={{
                  animationDelay: '600ms'
                }} />
                  <line x1="500" y1="200" x2="650" y2="140" className="animate-pulse" style={{
                  animationDelay: '900ms'
                }} />
                  <line x1="150" y1="250" x2="300" y2="280" className="animate-pulse" style={{
                  animationDelay: '1200ms'
                }} />
                  <line x1="300" y1="280" x2="450" y2="250" className="animate-pulse" style={{
                  animationDelay: '1500ms'
                }} />
                  <line x1="450" y1="250" x2="600" y2="320" className="animate-pulse" style={{
                  animationDelay: '1800ms'
                }} />
                  
                  {/* Cross connections */}
                  <line x1="200" y1="150" x2="300" y2="280" className="animate-pulse" style={{
                  animationDelay: '400ms'
                }} />
                  <line x1="350" y1="120" x2="450" y2="250" className="animate-pulse" style={{
                  animationDelay: '700ms'
                }} />
                  <line x1="500" y1="200" x2="300" y2="280" className="animate-pulse" style={{
                  animationDelay: '1000ms'
                }} />
                </g>
                
                {/* Animated vertices */}
                <g fill="url(#vertexGradient1)">
                  <circle cx="100" cy="80" r="3" className="animate-pulse" />
                  <circle cx="200" cy="150" r="4" className="animate-pulse" style={{
                  animationDelay: '200ms'
                }} />
                  <circle cx="350" cy="120" r="3" className="animate-pulse" style={{
                  animationDelay: '400ms'
                }} />
                  <circle cx="500" cy="200" r="5" className="animate-pulse" style={{
                  animationDelay: '600ms'
                }} />
                  <circle cx="650" cy="140" r="3" className="animate-pulse" style={{
                  animationDelay: '800ms'
                }} />
                  <circle cx="150" cy="250" r="4" className="animate-pulse" style={{
                  animationDelay: '1000ms'
                }} />
                  <circle cx="300" cy="280" r="6" className="animate-pulse" style={{
                  animationDelay: '1200ms'
                }} />
                  <circle cx="450" cy="250" r="3" className="animate-pulse" style={{
                  animationDelay: '1400ms'
                }} />
                  <circle cx="600" cy="320" r="4" className="animate-pulse" style={{
                  animationDelay: '1600ms'
                }} />
                </g>
              </svg>
            </div>
            
            {/* Multi-layer Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-purple-500/4 blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 right-1/6 w-80 h-80 bg-blue-500/4 blur-3xl animate-pulse delay-700"></div>
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/3 blur-3xl animate-pulse delay-300"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Break */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              {/* Interactive Transition Elements */}
              <div className="flex justify-center items-center space-x-12 mb-12">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-3 h-3 bg-purple-400/60 animate-pulse"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400/30 to-transparent"></div>
                </div>
                
                <div className="px-4 py-2 bg-slate-800/95 border border-slate-600 backdrop-blur-sm">
                  <div className="text-slate-600 font-mono text-xs font-black tracking-widest">
                    NEURAL NETWORK TRANSITION
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-3 h-3 bg-blue-400/60 animate-pulse delay-500"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-blue-400/30 to-transparent"></div>
                </div>
              </div>
              
              {/* Enhanced Pattern Grid */}
              <div className="grid grid-cols-7 gap-3 max-w-lg mx-auto mb-16">
                {Array.from({
                length: 21
              }).map((_, index) => <div key={index} className={`w-2 h-2 ${index % 3 === 0 ? 'bg-purple-400/40' : index % 3 === 1 ? 'bg-blue-400/40' : 'bg-cyan-400/40'} animate-pulse`} style={{
                animationDelay: `${index * 50}ms`
              }}></div>)}
              </div>
              
              <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS - Enhanced */}
          <div className="animate-fade-in">
            <ProductsShowcase />
          </div>
          
          {/* Premium Breathing Space with Geometric Patterns */}
          <div className="py-44 bg-gradient-to-b from-slate-950/95 via-black/95 to-slate-950/95 relative overflow-hidden backdrop-blur-sm">
            {/* Geometric Grid Background */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-5" viewBox="0 0 400 400">
                <defs>
                  <pattern id="geometricGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />
                    <circle cx="20" cy="20" r="2" fill="#06b6d4" opacity="0.4" />
                  </pattern>
                  <linearGradient id="geometricGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#geometricGrid)" />
                
                {/* Animated geometric shapes */}
                <g fill="url(#geometricGradient)" stroke="#10b981" strokeWidth="1" opacity="0.3">
                  <polygon points="100,50 150,100 100,150 50,100" className="animate-pulse" />
                  <polygon points="300,80 340,120 300,160 260,120" className="animate-pulse" style={{
                  animationDelay: '500ms'
                }} />
                  <polygon points="180,250 220,290 180,330 140,290" className="animate-pulse" style={{
                  animationDelay: '1000ms'
                }} />
                </g>
              </svg>
            </div>
            
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/5 left-1/4 w-64 h-64 bg-green-500/3 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/5 right-1/4 w-88 h-88 bg-cyan-500/3 blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/2 blur-3xl animate-pulse delay-500"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Header */}
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto mb-20 animate-pulse"></div>
              
              {/* Advanced Visual Break Elements */}
              <div className="flex justify-center items-center space-x-16 mb-20">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-4 h-4 bg-green-400/60 animate-pulse"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-green-400/30 to-transparent"></div>
                  <div className="w-2 h-2 bg-green-400/40 animate-pulse delay-300"></div>
                </div>
                
                <div className="px-6 py-3 bg-slate-800/95 border border-slate-600 backdrop-blur-sm">
                  <div className="text-slate-600 font-mono text-xs font-black tracking-widest">
                    GEOMETRIC MATRIX SPACE
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-4 h-4 bg-blue-400/60 animate-pulse delay-500"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-l from-blue-400/30 to-transparent"></div>
                  <div className="w-2 h-2 bg-blue-400/40 animate-pulse delay-700"></div>
                </div>
              </div>
              
              {/* Enhanced Geometric Pattern */}
              <div className="grid grid-cols-6 gap-4 max-w-md mx-auto mb-20">
                {Array.from({
                length: 18
              }).map((_, index) => <div key={index} className={`${index % 4 === 0 ? 'w-3 h-3 bg-green-400/30' : index % 4 === 1 ? 'w-2 h-2 bg-blue-400/30' : index % 4 === 2 ? 'w-4 h-4 bg-cyan-400/30' : 'w-2 h-2 bg-purple-400/30'} animate-pulse`} style={{
                animationDelay: `${index * 75}ms`
              }}></div>)}
              </div>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 3: APP USERS - Enhanced */}
          <div className="animate-fade-in">
            <WebAppsSection />
          </div>
          
          {/* Ultimate Breathing Space with Circuit Board Background */}
          <div className="py-48 bg-gradient-to-b from-slate-950/95 via-slate-900/95 to-black/95 relative overflow-hidden backdrop-blur-sm">
            {/* Circuit Board Background */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-8" viewBox="0 0 800 600">
                <defs>
                  <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                
                {/* Circuit pathways */}
                <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
                  {/* Horizontal lines */}
                  <line x1="50" y1="100" x2="300" y2="100" className="animate-pulse" />
                  <line x1="320" y1="100" x2="600" y2="100" className="animate-pulse" style={{
                  animationDelay: '200ms'
                }} />
                  <line x1="100" y1="200" x2="400" y2="200" className="animate-pulse" style={{
                  animationDelay: '400ms'
                }} />
                  <line x1="420" y1="200" x2="700" y2="200" className="animate-pulse" style={{
                  animationDelay: '600ms'
                }} />
                  <line x1="80" y1="300" x2="350" y2="300" className="animate-pulse" style={{
                  animationDelay: '800ms'
                }} />
                  <line x1="370" y1="300" x2="650" y2="300" className="animate-pulse" style={{
                  animationDelay: '1000ms'
                }} />
                  
                  {/* Vertical connections */}
                  <line x1="150" y1="80" x2="150" y2="320" className="animate-pulse" style={{
                  animationDelay: '300ms'
                }} />
                  <line x1="300" y1="80" x2="300" y2="220" className="animate-pulse" style={{
                  animationDelay: '500ms'
                }} />
                  <line x1="450" y1="90" x2="450" y2="320" className="animate-pulse" style={{
                  animationDelay: '700ms'
                }} />
                  <line x1="600" y1="80" x2="600" y2="320" className="animate-pulse" style={{
                  animationDelay: '900ms'
                }} />
                </g>
                
                {/* Circuit nodes */}
                <g fill="url(#circuitGradient)">
                  <rect x="145" y="95" width="10" height="10" rx="2" className="animate-pulse" />
                  <rect x="295" y="95" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '200ms'
                }} />
                  <rect x="445" y="95" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '400ms'
                }} />
                  <rect x="595" y="95" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '600ms'
                }} />
                  <rect x="145" y="195" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '800ms'
                }} />
                  <rect x="295" y="195" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '1000ms'
                }} />
                  <rect x="445" y="195" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '1200ms'
                }} />
                  <rect x="595" y="195" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '1400ms'
                }} />
                  <rect x="145" y="295" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '1600ms'
                }} />
                  <rect x="445" y="295" width="10" height="10" rx="2" className="animate-pulse" style={{
                  animationDelay: '1800ms'
                }} />
                  
                  {/* Processor chips */}
                  <rect x="140" y="140" width="20" height="20" rx="3" className="animate-pulse" style={{
                  animationDelay: '500ms'
                }} />
                  <rect x="440" y="240" width="20" height="20" rx="3" className="animate-pulse" style={{
                  animationDelay: '1000ms'
                }} />
                </g>
              </svg>
            </div>
            
            {/* Complex Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/6 left-1/5 w-72 h-72 bg-blue-500/3 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/6 right-1/5 w-88 h-88 bg-green-500/3 blur-3xl animate-pulse delay-800"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/2 blur-3xl animate-pulse delay-400"></div>
              <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-cyan-500/3 blur-3xl animate-pulse delay-1200"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Header */}
              <div className="w-56 h-1 bg-gradient-to-r from-transparent via-slate-400/60 to-transparent mx-auto mb-24 animate-pulse"></div>
              
              {/* Advanced Tech Grid Visual Break */}
              <div className="grid grid-cols-5 gap-6 max-w-lg mx-auto mb-24">
                {[{
                color: "bg-blue-400/30",
                size: "w-4 h-4",
                delay: "0ms"
              }, {
                color: "bg-green-400/30",
                size: "w-3 h-3",
                delay: "100ms"
              }, {
                color: "bg-purple-400/30",
                size: "w-5 h-5",
                delay: "200ms"
              }, {
                color: "bg-cyan-400/30",
                size: "w-3 h-3",
                delay: "300ms"
              }, {
                color: "bg-pink-400/30",
                size: "w-4 h-4",
                delay: "400ms"
              }, {
                color: "bg-yellow-400/30",
                size: "w-2 h-2",
                delay: "500ms"
              }, {
                color: "bg-orange-400/30",
                size: "w-4 h-4",
                delay: "600ms"
              }, {
                color: "bg-red-400/30",
                size: "w-3 h-3",
                delay: "700ms"
              }, {
                color: "bg-indigo-400/30",
                size: "w-3 h-3",
                delay: "800ms"
              }, {
                color: "bg-teal-400/30",
                size: "w-4 h-4",
                delay: "900ms"
              }, {
                color: "bg-slate-400/40",
                size: "w-6 h-6",
                delay: "1000ms"
              }, {
                color: "bg-emerald-400/30",
                size: "w-3 h-3",
                delay: "1100ms"
              }, {
                color: "bg-violet-400/30",
                size: "w-4 h-4",
                delay: "1200ms"
              }, {
                color: "bg-rose-400/30",
                size: "w-3 h-3",
                delay: "1300ms"
              }, {
                color: "bg-sky-400/30",
                size: "w-2 h-2",
                delay: "1400ms"
              }, {
                color: "bg-amber-400/30",
                size: "w-4 h-4",
                delay: "1500ms"
              }, {
                color: "bg-lime-400/30",
                size: "w-3 h-3",
                delay: "1600ms"
              }, {
                color: "bg-fuchsia-400/30",
                size: "w-3 h-3",
                delay: "1700ms"
              }, {
                color: "bg-blue-500/30",
                size: "w-4 h-4",
                delay: "1800ms"
              }, {
                color: "bg-green-500/30",
                size: "w-3 h-3",
                delay: "1900ms"
              }, {
                color: "bg-purple-500/30",
                size: "w-2 h-2",
                delay: "2000ms"
              }, {
                color: "bg-cyan-500/30",
                size: "w-4 h-4",
                delay: "2100ms"
              }, {
                color: "bg-pink-500/30",
                size: "w-3 h-3",
                delay: "2200ms"
              }, {
                color: "bg-yellow-500/30",
                size: "w-3 h-3",
                delay: "2300ms"
              }, {
                color: "bg-orange-500/30",
                size: "w-2 h-2",
                delay: "2400ms"
              }].map((dot, index) => <div key={index} className="flex justify-center items-center">
                    <div className={`${dot.color} ${dot.size} animate-pulse`} style={{
                  animationDelay: dot.delay
                }}></div>
                  </div>)}
              </div>
              
              {/* Enhanced Zone Label */}
              <div className="px-6 py-3 bg-slate-800/95 border border-slate-600 backdrop-blur-sm mb-12 inline-block">
                <div className="text-slate-600 font-mono text-xs font-black tracking-widest">
                  ENTERING DEVELOPER MATRIX
                </div>
              </div>
              
              <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 4: DEVELOPERS - Enhanced */}
          <div className="animate-fade-in">
            <DeveloperTools />
          </div>
          
          {/* Final Premium Breathing Space with Data Flow Background */}
          <div className="py-36 bg-gradient-to-b from-black/95 via-slate-950/95 to-slate-900/95 relative overflow-hidden backdrop-blur-sm">
            {/* Data Flow Background */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-6" viewBox="0 0 1000 400">
                <defs>
                  <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
                    <stop offset="50%" stopColor="#64748b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Data streams */}
                <g stroke="url(#dataFlowGradient)" strokeWidth="1" fill="none">
                  {Array.from({
                  length: 8
                }).map((_, i) => <g key={i}>
                      <line x1="0" y1={50 + i * 40} x2="1000" y2={50 + i * 40} className="animate-pulse" style={{
                    animationDelay: `${i * 200}ms`
                  }} />
                      {/* Data packets */}
                      <circle cx={100 + i * 120} cy={50 + i * 40} r="2" fill="#64748b" opacity="0.6" className="animate-pulse" style={{
                    animationDelay: `${i * 300}ms`
                  }} />
                      <circle cx={300 + i * 80} cy={50 + i * 40} r="1.5" fill="#64748b" opacity="0.4" className="animate-pulse" style={{
                    animationDelay: `${i * 400}ms`
                  }} />
                    </g>)}
                </g>
              </svg>
            </div>
            
            {/* Sophisticated Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-500/1 blur-3xl animate-pulse"></div>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/2 blur-3xl animate-pulse delay-600"></div>
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/2 blur-3xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              {/* Enhanced Visual Header */}
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-slate-500/70 to-transparent mx-auto mb-20 animate-pulse"></div>
              
              {/* Advanced Contact Transition Elements */}
              <div className="flex justify-center items-center space-x-16 mb-20">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-slate-400/50 animate-pulse"></div>
                  <div className="w-3 h-3 bg-slate-400/50 animate-pulse delay-200"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-slate-400/40 animate-pulse delay-400"></div>
                </div>
                
                <div className="px-8 py-4 bg-slate-800/95 border border-slate-600 backdrop-blur-sm">
                  <div className="text-slate-500 font-mono text-xs font-black tracking-widest">
                    DATA STREAM TERMINAL
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-slate-400/50 animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-slate-400/50 animate-pulse delay-500"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-slate-400/40 animate-pulse delay-700"></div>
                </div>
              </div>
              
              {/* Enhanced Final Pattern */}
              <div className="grid grid-cols-8 gap-2 max-w-2xl mx-auto mb-20">
                {Array.from({
                length: 32
              }).map((_, index) => <div key={index} className={`w-1 h-1 ${index % 5 === 0 ? 'bg-slate-400/40' : index % 5 === 1 ? 'bg-slate-500/40' : index % 5 === 2 ? 'bg-slate-600/40' : index % 5 === 3 ? 'bg-slate-400/30' : 'bg-slate-500/30'} animate-pulse`} style={{
                animationDelay: `${index * 25}ms`
              }}></div>)}
              </div>
              
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-slate-600/60 to-transparent mx-auto"></div>
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