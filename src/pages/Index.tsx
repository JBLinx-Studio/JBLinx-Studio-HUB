
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
          
          {/* Professional Page Break 1 - Services to Games */}
          <div className="py-20 bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-y border-zinc-800/50 relative overflow-hidden">
            {/* Professional background effects */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/8 to-cyan-500/6 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-orange-500/8 to-amber-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-amber-400/6 to-emerald-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center items-center space-x-8 mb-8">
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse"></div>
                <div className="px-4 py-2 bg-zinc-800/95 border border-zinc-600 backdrop-blur-sm">
                  <div className="text-zinc-500 font-mono text-xs font-black tracking-widest">
                    GAMING UNIVERSE
                  </div>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent animate-pulse delay-500"></div>
              </div>
              
              <div className="grid grid-cols-5 gap-2 max-w-xs mx-auto mb-6">
                {Array.from({length: 10}).map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-emerald-400/40 animate-pulse" style={{animationDelay: `${index * 100}ms`}}></div>
                ))}
              </div>
              
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 1: GAMERS */}
          <div className="animate-fade-in">
            <GamesSection />
          </div>
          
          {/* Professional Page Break 2 - Games to Products */}
          <div className="py-24 bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/6 left-1/5 w-[350px] h-[350px] bg-gradient-to-r from-blue-500/8 to-purple-500/6 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/6 right-1/5 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/8 to-emerald-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-400/6 to-blue-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center items-center space-x-10 mb-10">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-3 h-3 bg-blue-400/60 animate-pulse"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400/30 to-transparent"></div>
                </div>
                
                <div className="px-6 py-3 bg-zinc-800/95 border border-zinc-600 backdrop-blur-sm">
                  <div className="text-zinc-600 font-mono text-xs font-black tracking-widest">
                    PRODUCT SHOWCASE
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-3 h-3 bg-cyan-400/60 animate-pulse delay-500"></div>
                  <div className="w-16 h-0.5 bg-gradient-to-l from-cyan-400/30 to-transparent"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-6 gap-3 max-w-md mx-auto mb-8">
                {Array.from({length: 12}).map((_, index) => (
                  <div key={index} className={`w-2 h-2 ${index % 3 === 0 ? 'bg-blue-400/40' : index % 3 === 1 ? 'bg-cyan-400/40' : 'bg-emerald-400/40'} animate-pulse`} style={{animationDelay: `${index * 75}ms`}}></div>
                ))}
              </div>
              
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 2: GENERAL PRODUCTS */}
          <div className="animate-fade-in">
            <ProductsShowcase />
          </div>
          
          {/* Professional Page Break 3 - Products to Web Apps */}
          <div className="py-28 bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/5 left-1/4 w-[300px] h-[300px] bg-gradient-to-r from-green-500/8 to-teal-500/6 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/5 right-1/4 w-[350px] h-[350px] bg-gradient-to-r from-purple-500/8 to-pink-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-teal-400/6 to-green-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-green-400/60 to-transparent mx-auto mb-12 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-12 mb-12">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-4 h-4 bg-green-400/60 animate-pulse"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-r from-green-400/30 to-transparent"></div>
                  <div className="w-2 h-2 bg-green-400/40 animate-pulse delay-300"></div>
                </div>
                
                <div className="px-6 py-3 bg-zinc-800/95 border border-zinc-600 backdrop-blur-sm">
                  <div className="text-zinc-600 font-mono text-xs font-black tracking-widest">
                    WEB APPLICATIONS
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-4 h-4 bg-teal-400/60 animate-pulse delay-500"></div>
                  <div className="w-20 h-0.5 bg-gradient-to-l from-teal-400/30 to-transparent"></div>
                  <div className="w-2 h-2 bg-teal-400/40 animate-pulse delay-700"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-8 gap-2 max-w-lg mx-auto mb-12">
                {Array.from({length: 16}).map((_, index) => (
                  <div key={index} className={`${index % 4 === 0 ? 'w-3 h-3 bg-green-400/30' : index % 4 === 1 ? 'w-2 h-2 bg-teal-400/30' : index % 4 === 2 ? 'w-4 h-4 bg-purple-400/30' : 'w-2 h-2 bg-pink-400/30'} animate-pulse`} style={{animationDelay: `${index * 50}ms`}}></div>
                ))}
              </div>
              
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 3: APP USERS */}
          <div className="animate-fade-in">
            <WebAppsSection />
          </div>
          
          {/* Professional Page Break 4 - Web Apps to Developer Tools */}
          <div className="py-32 bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute top-1/6 left-1/6 w-[350px] h-[350px] bg-gradient-to-r from-orange-500/8 to-red-500/6 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/6 right-1/6 w-[400px] h-[400px] bg-gradient-to-r from-amber-500/8 to-yellow-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-red-400/6 to-orange-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-14 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-orange-400/50 animate-pulse"></div>
                  <div className="w-3 h-3 bg-orange-400/50 animate-pulse delay-200"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400/40 animate-pulse delay-400"></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-800/95 border border-zinc-600 backdrop-blur-sm">
                  <div className="text-zinc-500 font-mono text-xs font-black tracking-widest">
                    DEVELOPER MATRIX
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-amber-400/50 animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-amber-400/50 animate-pulse delay-500"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400/40 animate-pulse delay-700"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-3 max-w-xl mx-auto mb-16">
                {[
                  { color: "bg-orange-400/30", size: "w-4 h-4", delay: "0ms" },
                  { color: "bg-red-400/30", size: "w-3 h-3", delay: "100ms" },
                  { color: "bg-amber-400/30", size: "w-5 h-5", delay: "200ms" },
                  { color: "bg-yellow-400/30", size: "w-3 h-3", delay: "300ms" },
                  { color: "bg-orange-500/30", size: "w-4 h-4", delay: "400ms" },
                  { color: "bg-red-500/30", size: "w-2 h-2", delay: "500ms" },
                  { color: "bg-amber-500/30", size: "w-4 h-4", delay: "600ms" },
                  { color: "bg-yellow-500/30", size: "w-3 h-3", delay: "700ms" },
                  { color: "bg-orange-600/30", size: "w-3 h-3", delay: "800ms" },
                  { color: "bg-red-600/30", size: "w-4 h-4", delay: "900ms" },
                  { color: "bg-amber-600/30", size: "w-6 h-6", delay: "1000ms" },
                  { color: "bg-yellow-600/30", size: "w-3 h-3", delay: "1100ms" },
                  { color: "bg-orange-300/30", size: "w-4 h-4", delay: "1200ms" },
                  { color: "bg-red-300/30", size: "w-3 h-3", delay: "1300ms" }
                ].map((dot, index) => (
                  <div key={index} className="flex justify-center items-center">
                    <div className={`${dot.color} ${dot.size} animate-pulse`} style={{animationDelay: dot.delay}}></div>
                  </div>
                ))}
              </div>
              
              <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-red-400/60 to-transparent mx-auto"></div>
            </div>
          </div>
          
          {/* PRIORITY 4: DEVELOPERS */}
          <div className="animate-fade-in">
            <DeveloperTools />
          </div>
          
          {/* Professional Page Break 5 - Developer Tools to Contact */}
          <div className="py-24 bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-zinc-500/4 to-slate-500/3 blur-3xl rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-gradient-to-r from-emerald-500/6 to-cyan-500/4 blur-3xl rounded-full animate-pulse delay-600"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-blue-500/6 to-purple-500/4 blur-3xl rounded-full animate-pulse delay-1000"></div>
            </div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="w-48 h-1 bg-gradient-to-r from-transparent via-zinc-500/70 to-transparent mx-auto mb-16 animate-pulse"></div>
              
              <div className="flex justify-center items-center space-x-16 mb-16">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-zinc-400/50 animate-pulse"></div>
                  <div className="w-3 h-3 bg-zinc-400/50 animate-pulse delay-200"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-zinc-400/40 animate-pulse delay-400"></div>
                </div>
                
                <div className="px-8 py-4 bg-zinc-800/95 border border-zinc-600 backdrop-blur-sm">
                  <div className="text-zinc-500 font-mono text-xs font-black tracking-widest">
                    CONTACT TERMINAL
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-zinc-400/50 animate-pulse delay-300"></div>
                  <div className="w-3 h-3 bg-zinc-400/50 animate-pulse delay-500"></div>
                  <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-zinc-400/40 animate-pulse delay-700"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-8 gap-2 max-w-2xl mx-auto mb-16">
                {Array.from({length: 24}).map((_, index) => (
                  <div key={index} className={`w-1 h-1 ${index % 5 === 0 ? 'bg-zinc-400/40' : index % 5 === 1 ? 'bg-zinc-500/40' : index % 5 === 2 ? 'bg-zinc-600/40' : index % 5 === 3 ? 'bg-zinc-400/30' : 'bg-zinc-500/30'} animate-pulse`} style={{animationDelay: `${index * 25}ms`}}></div>
                ))}
              </div>
              
              <div className="w-36 h-1 bg-gradient-to-r from-transparent via-zinc-600/60 to-transparent mx-auto"></div>
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
