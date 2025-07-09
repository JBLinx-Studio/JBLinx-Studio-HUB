
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
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        
        {/* Enhanced Services Overview */}
        <Services />
        
        {/* Large Visual Break Section */}
        <div className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700/50">
          <div className="container mx-auto px-4 text-center">
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mb-8"></div>
            <div className="text-slate-500 font-mono text-xs font-bold tracking-widest">
              PREMIUM CONTENT SECTORS
            </div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto mt-8"></div>
          </div>
        </div>
        
        {/* PRIORITY 1: GAMERS */}
        <GamesSection />
        
        {/* Breathing Space with Gradient Transition */}
        <div className="py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/3 blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-500/3 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mx-auto mb-12"></div>
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="w-8 h-0.5 bg-purple-400/30"></div>
              <div className="text-slate-600 font-mono text-xs font-bold tracking-widest">
                TRANSITION ZONE
              </div>
              <div className="w-8 h-0.5 bg-blue-400/30"></div>
            </div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 2: GENERAL PRODUCTS */}
        <ProductsShowcase />
        
        {/* Enhanced Breathing Space */}
        <div className="py-36 bg-gradient-to-b from-slate-950 via-black to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-green-500/2 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-500/2 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-slate-500/50 to-transparent mx-auto mb-16"></div>
            
            {/* Visual Break Elements */}
            <div className="flex justify-center items-center space-x-8 mb-16">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-green-400/50 mb-2"></div>
                <div className="w-16 h-0.5 bg-green-400/20"></div>
              </div>
              <div className="text-slate-600 font-mono text-xs font-bold tracking-widest">
                SECTOR BREAK
              </div>
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 bg-blue-400/50 mb-2"></div>
                <div className="w-16 h-0.5 bg-blue-400/20"></div>
              </div>
            </div>
            
            <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 3: APP USERS */}
        <WebAppsSection />
        
        {/* Major Breathing Space with Tech Grid */}
        <div className="py-40 bg-gradient-to-b from-slate-950 via-slate-900 to-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-blue-500/2 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-green-500/2 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/1 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-48 h-1 bg-gradient-to-r from-transparent via-slate-400/50 to-transparent mx-auto mb-20"></div>
            
            {/* Tech Grid Visual Break */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-20">
              {[
                { color: "bg-blue-400/20", size: "w-3 h-3" },
                { color: "bg-green-400/20", size: "w-2 h-2" },
                { color: "bg-purple-400/20", size: "w-4 h-4" },
                { color: "bg-cyan-400/20", size: "w-2 h-2" },
                { color: "bg-slate-400/30", size: "w-5 h-5" },
                { color: "bg-pink-400/20", size: "w-3 h-3" },
                { color: "bg-yellow-400/20", size: "w-2 h-2" },
                { color: "bg-orange-400/20", size: "w-3 h-3" },
                { color: "bg-red-400/20", size: "w-2 h-2" }
              ].map((dot, index) => (
                <div key={index} className="flex justify-center items-center">
                  <div className={`${dot.color} ${dot.size}`}></div>
                </div>
              ))}
            </div>
            
            <div className="text-slate-600 font-mono text-xs font-bold tracking-widest mb-8">
              ENTERING DEVELOPER ZONE
            </div>
            <div className="w-36 h-0.5 bg-gradient-to-r from-transparent via-green-400/50 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 4: DEVELOPERS */}
        <DeveloperTools />
        
        {/* Final Breathing Space Before Contact */}
        <div className="py-28 bg-gradient-to-b from-black via-slate-950 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-slate-500/1 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="w-56 h-1 bg-gradient-to-r from-transparent via-slate-500/60 to-transparent mx-auto mb-16"></div>
            
            {/* Contact Transition Elements */}
            <div className="flex justify-center items-center space-x-12 mb-16">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-slate-400/40"></div>
              <div className="text-slate-500 font-mono text-xs font-bold tracking-widest">
                READY TO CONNECT
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-slate-400/40"></div>
            </div>
            
            <div className="w-40 h-1 bg-gradient-to-r from-transparent via-slate-600/50 to-transparent mx-auto"></div>
          </div>
        </div>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
