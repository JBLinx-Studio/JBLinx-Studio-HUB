
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
        
        {/* Premium Visual Break Section with Animated Elements */}
        <div className="py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700/50 relative overflow-hidden">
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
              {Array.from({ length: 15 }).map((_, index) => (
                <div 
                  key={index} 
                  className="w-2 h-2 bg-slate-600/50 animate-pulse"
                  style={{ animationDelay: `${index * 100}ms` }}
                ></div>
              ))}
            </div>
            
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 1: GAMERS - Enhanced Entry Animation */}
        <div className="animate-fade-in">
          <GamesSection />
        </div>
        
        {/* Enhanced Transition Zone with Interactive Elements */}
        <div className="py-40 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
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
                  SECTOR TRANSITION ZONE
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-2">
                <div className="w-3 h-3 bg-blue-400/60 animate-pulse delay-500"></div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-blue-400/30 to-transparent"></div>
              </div>
            </div>
            
            {/* Enhanced Pattern Grid */}
            <div className="grid grid-cols-7 gap-3 max-w-lg mx-auto mb-16">
              {Array.from({ length: 21 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`w-2 h-2 ${
                    index % 3 === 0 ? 'bg-purple-400/40' : 
                    index % 3 === 1 ? 'bg-blue-400/40' : 'bg-cyan-400/40'
                  } animate-pulse`}
                  style={{ animationDelay: `${index * 50}ms` }}
                ></div>
              ))}
            </div>
            
            <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 2: GENERAL PRODUCTS - Enhanced */}
        <div className="animate-fade-in">
          <ProductsShowcase />
        </div>
        
        {/* Premium Breathing Space with Dynamic Effects */}
        <div className="py-44 bg-gradient-to-b from-slate-950 via-black to-slate-950 relative overflow-hidden">
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
                  PREMIUM SECTOR BREAK
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
              {Array.from({ length: 18 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`${
                    index % 4 === 0 ? 'w-3 h-3 bg-green-400/30' : 
                    index % 4 === 1 ? 'w-2 h-2 bg-blue-400/30' : 
                    index % 4 === 2 ? 'w-4 h-4 bg-cyan-400/30' : 'w-2 h-2 bg-purple-400/30'
                  } animate-pulse`}
                  style={{ animationDelay: `${index * 75}ms` }}
                ></div>
              ))}
            </div>
            
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 3: APP USERS - Enhanced */}
        <div className="animate-fade-in">
          <WebAppsSection />
        </div>
        
        {/* Ultimate Breathing Space with Tech Grid Enhancement */}
        <div className="py-48 bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden">
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
              {[
                { color: "bg-blue-400/30", size: "w-4 h-4", delay: "0ms" },
                { color: "bg-green-400/30", size: "w-3 h-3", delay: "100ms" },
                { color: "bg-purple-400/30", size: "w-5 h-5", delay: "200ms" },
                { color: "bg-cyan-400/30", size: "w-3 h-3", delay: "300ms" },
                { color: "bg-pink-400/30", size: "w-4 h-4", delay: "400ms" },
                { color: "bg-yellow-400/30", size: "w-2 h-2", delay: "500ms" },
                { color: "bg-orange-400/30", size: "w-4 h-4", delay: "600ms" },
                { color: "bg-red-400/30", size: "w-3 h-3", delay: "700ms" },
                { color: "bg-indigo-400/30", size: "w-3 h-3", delay: "800ms" },
                { color: "bg-teal-400/30", size: "w-4 h-4", delay: "900ms" },
                { color: "bg-slate-400/40", size: "w-6 h-6", delay: "1000ms" },
                { color: "bg-emerald-400/30", size: "w-3 h-3", delay: "1100ms" },
                { color: "bg-violet-400/30", size: "w-4 h-4", delay: "1200ms" },
                { color: "bg-rose-400/30", size: "w-3 h-3", delay: "1300ms" },
                { color: "bg-sky-400/30", size: "w-2 h-2", delay: "1400ms" },
                { color: "bg-amber-400/30", size: "w-4 h-4", delay: "1500ms" },
                { color: "bg-lime-400/30", size: "w-3 h-3", delay: "1600ms" },
                { color: "bg-fuchsia-400/30", size: "w-3 h-3", delay: "1700ms" },
                { color: "bg-blue-500/30", size: "w-4 h-4", delay: "1800ms" },
                { color: "bg-green-500/30", size: "w-3 h-3", delay: "1900ms" },
                { color: "bg-purple-500/30", size: "w-2 h-2", delay: "2000ms" },
                { color: "bg-cyan-500/30", size: "w-4 h-4", delay: "2100ms" },
                { color: "bg-pink-500/30", size: "w-3 h-3", delay: "2200ms" },
                { color: "bg-yellow-500/30", size: "w-3 h-3", delay: "2300ms" },
                { color: "bg-orange-500/30", size: "w-2 h-2", delay: "2400ms" }
              ].map((dot, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div 
                    className={`${dot.color} ${dot.size} animate-pulse`}
                    style={{ animationDelay: dot.delay }}
                  ></div>
                </div>
              ))}
            </div>
            
            {/* Enhanced Zone Label */}
            <div className="px-6 py-3 bg-slate-800/95 border border-slate-600 backdrop-blur-sm mb-12 inline-block">
              <div className="text-slate-600 font-mono text-xs font-black tracking-widest">
                ENTERING DEVELOPER ZONE
              </div>
            </div>
            
            <div className="w-40 h-0.5 bg-gradient-to-r from-transparent via-green-400/60 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 4: DEVELOPERS - Enhanced */}
        <div className="animate-fade-in">
          <DeveloperTools />
        </div>
        
        {/* Final Premium Breathing Space with Contact Preparation */}
        <div className="py-36 bg-gradient-to-b from-black via-slate-950 to-slate-900 relative overflow-hidden">
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
                  READY TO CONNECT
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
              {Array.from({ length: 32 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`w-1 h-1 ${
                    index % 5 === 0 ? 'bg-slate-400/40' : 
                    index % 5 === 1 ? 'bg-slate-500/40' : 
                    index % 5 === 2 ? 'bg-slate-600/40' : 
                    index % 5 === 3 ? 'bg-slate-400/30' : 'bg-slate-500/30'
                  } animate-pulse`}
                  style={{ animationDelay: `${index * 25}ms` }}
                ></div>
              ))}
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
  );
};

export default Index;
