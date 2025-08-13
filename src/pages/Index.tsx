
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
    <div className="min-h-screen bg-slate-950 overflow-x-hidden relative">
      {/* Parallax Background Layer */}
      <ParallaxBackground />
      
      {/* Main Content - positioned above parallax background */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          
          {/* Enhanced Services Overview */}
          <Services />
          
          {/* Compact Visual Break Section */}
          <div className="py-8 bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-y border-zinc-800/50 relative overflow-hidden">
            {/* Enhanced paradoxical background effects */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
              {/* Primary ambient lighting with paradoxical movement */}
              <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-orange-500/12 to-amber-500/8 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-emerald-500/12 to-teal-500/8 blur-3xl rounded-full animate-pulse transform rotate-45" style={{animationDelay: '2s'}}></div>
              
              {/* Enhanced paradoxical grid overlay */}
              <div className="absolute inset-0 opacity-[0.12]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '100px 100px'
                }}></div>
              </div>

              {/* Floating geometric paradoxical shapes */}
              <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-orange-400/40 transform rotate-45 animate-pulse border border-orange-400/30"></div>
              <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-emerald-400/40 transform rotate-12 animate-pulse border border-emerald-400/30" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="px-3 py-1 bg-zinc-800/95 border border-emerald-500/50 backdrop-blur-sm inline-block">
                <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">PREMIUM CONTENT</span>
              </div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS - Compact */}
          <div className="relative bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 py-12">
            {/* Background effects similar to Services */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
              <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/12 to-pink-500/8 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-blue-500/12 to-cyan-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
              
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '80px 80px'
                }}></div>
              </div>
            </div>
            
            <div className="relative z-10">
              <GamesSection />
            </div>
          </div>
          
          {/* Compact Transition */}
          <div className="py-6 bg-gradient-to-b from-zinc-950/95 to-zinc-900/95 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-orange-400/8 to-emerald-400/6 blur-3xl rounded-full animate-pulse"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-16 h-0.5 bg-emerald-400 mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS - Compact */}
          <div className="relative bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 py-12">
            {/* Background effects similar to Services */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/12 to-cyan-500/8 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-green-500/12 to-emerald-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
              
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '80px 80px'
                }}></div>
              </div>
              
              <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-blue-400/40 transform rotate-45 animate-pulse border border-blue-400/30"></div>
              <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-emerald-400/40 rounded-full animate-pulse border border-emerald-400/30" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10">
              <ProductsShowcase />
            </div>
          </div>
          
          {/* Compact Breathing Space */}
          <div className="py-6 bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-green-400/8 to-blue-400/6 blur-3xl rounded-full animate-pulse"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 3: WEB APPS - Compact */}
          <div className="relative bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 py-12">
            {/* Background effects similar to Services */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-green-500/12 to-emerald-500/8 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-teal-500/12 to-cyan-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
              
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '80px 80px'
                }}></div>
              </div>
              
              <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-green-400/40 transform rotate-45 animate-pulse border border-green-400/30"></div>
              <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-teal-400/40 animate-pulse border border-teal-400/30" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10">
              <WebAppsSection />
            </div>
          </div>
          
          {/* Compact Transition */}
          <div className="py-6 bg-gradient-to-b from-zinc-950/95 to-zinc-900/95 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-orange-400/8 to-red-400/6 blur-3xl rounded-full animate-pulse"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-16 h-0.5 bg-orange-400 mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 4: DEVELOPERS - Compact */}
          <div className="relative bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 py-12">
            {/* Background effects similar to Services */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/12 to-red-500/8 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-amber-500/12 to-yellow-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
              
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '80px 80px'
                }}></div>
              </div>
              
              <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-orange-400/40 animate-pulse border border-orange-400/30"></div>
              <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-amber-400/40 transform rotate-45 animate-pulse border border-amber-400/30" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10">
              <DeveloperTools />
            </div>
          </div>
          
          {/* Compact Final Transition */}
          <div className="py-6 bg-gradient-to-b from-zinc-900/95 to-zinc-950/95 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-emerald-400/8 to-teal-400/6 blur-3xl rounded-full animate-pulse"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-16 h-0.5 bg-emerald-400 mx-auto"></div>
            </div>
          </div>
          
          {/* Contact Section - Compact */}
          <div className="relative bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl py-12">
            {/* Background effects similar to Services */}
            <div className="absolute inset-0 pointer-events-none opacity-60">
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/12 to-teal-500/8 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/12 to-blue-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
              
              <div className="absolute inset-0 opacity-[0.08]">
                <div className="w-full h-full" style={{
                  backgroundImage: `
                    linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: '80px 80px'
                }}></div>
              </div>
              
              <div className="absolute top-1/3 left-1/6 w-4 h-4 bg-emerald-400/40 rounded-full animate-pulse border border-emerald-400/30"></div>
              <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-teal-400/40 transform rotate-12 animate-pulse border border-teal-400/30" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="relative z-10">
              <Contact />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
