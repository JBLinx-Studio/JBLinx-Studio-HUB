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
          
          {/* Premium Visual Break Section - Optimized */}
          <div className="py-32 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 border-y border-slate-700/50 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center items-center space-x-8 mb-12">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
                <div className="px-4 py-2 bg-slate-800/95 border border-slate-600">
                  <div className="text-slate-500 font-mono text-xs font-black tracking-widest">
                    PREMIUM CONTENT SECTORS
                  </div>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS - Enhanced Entry Animation */}
          <div className="animate-fade-in">
            <GamesSection />
          </div>
          
          {/* Enhanced Transition Zone - Optimized */}
          <div className="py-40 bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-900/95 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent mx-auto mb-16"></div>
              <div className="flex justify-center items-center space-x-12 mb-12">
                <div className="px-4 py-2 bg-slate-800/95 border border-slate-600">
                  <div className="text-slate-600 font-mono text-xs font-black tracking-widest">
                    NEURAL NETWORK TRANSITION
                  </div>
                </div>
              </div>
              <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS - Enhanced */}
          <div className="animate-fade-in">
            <ProductsShowcase />
          </div>
          
          {/* Premium Breathing Space - Optimized */}
          <div className="py-44 bg-gradient-to-b from-slate-950/95 via-black/95 to-slate-950/95 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto mb-20"></div>
              <div className="flex justify-center items-center space-x-16 mb-20">
                <div className="px-6 py-3 bg-slate-800/95 border border-slate-600">
                  <div className="text-slate-600 font-mono text-xs font-black tracking-widest">
                    GEOMETRIC MATRIX SPACE
                  </div>
                </div>
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
          
          {/* Final Premium Breathing Space - Optimized */}
          <div className="py-36 bg-gradient-to-b from-black/95 via-slate-950/95 to-slate-900/95 relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-64 h-1 bg-gradient-to-r from-transparent via-slate-500/70 to-transparent mx-auto mb-20"></div>
              <div className="flex justify-center items-center space-x-16 mb-20">
                <div className="px-8 py-4 bg-slate-800/95 border border-slate-600">
                  <div className="text-slate-500 font-mono text-xs font-black tracking-widest">
                    DATA STREAM TERMINAL
                  </div>
                </div>
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