
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Stats from '../components/Stats';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProductsShowcase from '../components/ProductsShowcase';
import GamesSection from '../components/GamesSection';
import WebAppsSection from '../components/WebAppsSection';
import DeveloperTools from '../components/DeveloperTools';
import ServicesSection from '../components/services/ServicesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Hero />
      
      {/* Enhanced Visual Break 1 - Hexagonal Grid */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-gradient-to-r from-orange-500/15 to-amber-500/10 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-r from-emerald-500/15 to-teal-500/10 blur-3xl rounded-full animate-pulse transform rotate-45" style={{animationDelay: '2s'}}></div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(251, 146, 60, 0.4) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.3) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px, 80px 80px'
            }}></div>
          </div>
          
          <div className="absolute top-1/6 left-1/6 w-12 h-12 border-2 border-orange-400/30 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/6 w-8 h-8 border-2 border-emerald-400/30 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <About />
      </section>

      {/* Enhanced Services Section */}
      <ServicesSection />

      {/* Enhanced Visual Break 2 - Neural Network */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-35">
          <div className="absolute top-1/3 left-1/3 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/12 to-blue-500/8 blur-3xl rounded-full animate-pulse transform rotate-12"></div>
          <div className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/12 to-purple-500/8 blur-3xl rounded-full animate-pulse transform -rotate-12" style={{animationDelay: '3s'}}></div>
          
          <div className="absolute inset-0 opacity-25">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px),
                linear-gradient(-45deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px, 40px 40px'
            }}></div>
          </div>
          
          <div className="absolute top-1/4 right-1/5 w-6 h-6 bg-purple-400/40 transform rotate-45 animate-pulse border border-purple-400/30"></div>
          <div className="absolute bottom-1/4 left-1/5 w-10 h-10 bg-blue-400/30 rounded-full animate-pulse border border-blue-400/20" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Enhanced ProductsShowcase */}
        <div className="relative z-10">
          <div className="bg-zinc-800/80 border border-zinc-700/50 backdrop-blur-sm mx-4 p-8 shadow-2xl">
            <ProductsShowcase />
          </div>
        </div>
      </section>

      {/* Enhanced Visual Break 3 - Crystalline Patterns */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/5 left-1/5 w-[1000px] h-[1000px] bg-gradient-to-r from-orange-500/10 to-red-500/6 blur-3xl rounded-full animate-pulse transform rotate-30"></div>
          <div className="absolute bottom-1/5 right-1/5 w-[800px] h-[800px] bg-gradient-to-r from-yellow-500/10 to-orange-500/6 blur-3xl rounded-full animate-pulse transform -rotate-30" style={{animationDelay: '2.5s'}}></div>
          
          <div className="absolute inset-0 opacity-15">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(60deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px),
                linear-gradient(120deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px),
                linear-gradient(0deg, rgba(239, 68, 68, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '70px 70px, 70px 70px, 35px 35px'
            }}></div>
          </div>
          
          <div className="absolute top-1/3 left-1/4 w-14 h-14 border-2 border-orange-400/25 transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-16 h-16 border-2 border-yellow-400/25 transform rotate-12 animate-pulse" style={{animationDelay: '5s'}}></div>
        </div>
        
        {/* Enhanced GamesSection */}
        <div className="relative z-10">
          <div className="bg-zinc-800/85 border border-zinc-700/50 backdrop-blur-sm mx-4 p-8 shadow-2xl">
            <GamesSection />
          </div>
        </div>
      </section>

      {/* Enhanced Visual Break 4 - Quantum Field */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/6 left-1/2 transform -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-emerald-500/8 to-green-500/5 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/6 left-1/6 w-[900px] h-[900px] bg-gradient-to-r from-teal-500/8 to-emerald-500/5 blur-3xl rounded-full animate-pulse transform rotate-45" style={{animationDelay: '4s'}}></div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(ellipse at 50% 20%, rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                radial-gradient(ellipse at 80% 80%, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 75px 75px'
            }}></div>
          </div>
          
          <div className="absolute top-1/5 right-1/3 w-8 h-8 bg-emerald-400/30 rounded-full animate-pulse border border-emerald-400/20"></div>
          <div className="absolute bottom-1/5 left-1/3 w-12 h-12 bg-green-400/25 transform rotate-45 animate-pulse border border-green-400/15" style={{animationDelay: '6s'}}></div>
        </div>
        
        {/* Enhanced WebAppsSection */}
        <div className="relative z-10">
          <div className="bg-zinc-800/85 border border-zinc-700/50 backdrop-blur-sm mx-4 p-8 shadow-2xl">
            <WebAppsSection />
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-35">
          <div className="absolute top-1/4 right-1/4 w-[850px] h-[850px] bg-gradient-to-r from-indigo-500/12 to-purple-500/8 blur-3xl rounded-full animate-pulse transform -rotate-30"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[650px] h-[650px] bg-gradient-to-r from-violet-500/12 to-indigo-500/8 blur-3xl rounded-full animate-pulse transform rotate-30" style={{animationDelay: '3.5s'}}></div>
          
          <div className="absolute inset-0 opacity-15">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(30deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px),
                linear-gradient(150deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '45px 45px, 65px 65px'
            }}></div>
          </div>
          
          <div className="absolute top-1/3 left-1/5 w-10 h-10 border-2 border-indigo-400/30 transform rotate-12 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/5 w-6 h-6 bg-purple-400/40 rounded-full animate-pulse border border-purple-400/25" style={{animationDelay: '7s'}}></div>
        </div>
        
        {/* Enhanced Portfolio */}
        <div className="relative z-10">
          <div className="bg-zinc-800/80 border border-zinc-700/50 backdrop-blur-sm mx-4 p-8 shadow-2xl">
            <Portfolio />
          </div>
        </div>
      </section>

      {/* Enhanced Visual Break 5 - Data Stream */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/3 left-1/6 w-[1100px] h-[1100px] bg-gradient-to-r from-cyan-500/10 to-blue-500/6 blur-3xl rounded-full animate-pulse transform rotate-60"></div>
          <div className="absolute bottom-1/3 right-1/6 w-[750px] h-[750px] bg-gradient-to-r from-sky-500/10 to-cyan-500/6 blur-3xl rounded-full animate-pulse transform -rotate-60" style={{animationDelay: '2.8s'}}></div>
          
          <div className="absolute inset-0 opacity-25">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                linear-gradient(0deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px, 60px 60px'
            }}></div>
          </div>
          
          <div className="absolute top-1/4 left-1/3 w-7 h-7 bg-cyan-400/35 transform rotate-45 animate-pulse border border-cyan-400/25"></div>
          <div className="absolute bottom-1/4 right-1/3 w-11 h-11 bg-blue-400/30 rounded-full animate-pulse border border-blue-400/20" style={{animationDelay: '8s'}}></div>
        </div>
        
        {/* Enhanced DeveloperTools */}
        <div className="relative z-10">
          <div className="bg-zinc-800/85 border border-zinc-700/50 backdrop-blur-sm mx-4 p-8 shadow-2xl">
            <DeveloperTools />
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/5 right-1/5 w-[950px] h-[950px] bg-gradient-to-r from-rose-500/10 to-pink-500/6 blur-3xl rounded-full animate-pulse transform rotate-75"></div>
          <div className="absolute bottom-1/5 left-1/5 w-[700px] h-[700px] bg-gradient-to-r from-red-500/10 to-rose-500/6 blur-3xl rounded-full animate-pulse transform -rotate-75" style={{animationDelay: '4.2s'}}></div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                radial-gradient(circle at 30% 70%, rgba(244, 63, 94, 0.3) 2px, transparent 2px),
                radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.2) 2px, transparent 2px)
              `,
              backgroundSize: '55px 55px, 75px 75px'
            }}></div>
          </div>
          
          <div className="absolute top-1/6 left-1/4 w-9 h-9 border-2 border-rose-400/30 transform rotate-30 animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/4 w-13 h-13 bg-pink-400/30 rounded-full animate-pulse border border-pink-400/20" style={{animationDelay: '9s'}}></div>
        </div>
        
        {/* Enhanced Stats */}
        <div className="relative z-10">
          <div className="bg-zinc-800/80 border border-zinc-700/50 backdrop-blur-sm mx-4 p-8 shadow-2xl">
            <Stats />
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-amber-500/8 to-yellow-500/5 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/8 to-amber-500/5 blur-3xl rounded-full animate-pulse transform rotate-90" style={{animationDelay: '5.5s'}}></div>
          
          <div className="absolute inset-0 opacity-15">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(135deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px),
                linear-gradient(45deg, rgba(251, 191, 36, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px, 60px 60px'
            }}></div>
          </div>
          
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-amber-400/35 transform rotate-45 animate-pulse border border-amber-400/25"></div>
          <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-yellow-400/30 rounded-full animate-pulse border border-yellow-400/20" style={{animationDelay: '10s'}}></div>
        </div>
        
        {/* Enhanced Newsletter */}
        <div className="relative z-10">
          <div className="bg-zinc-800/85 border border-zinc-700/50 backdrop-blur-sm mx-4 p-8 shadow-2xl">
            <Newsletter />
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95">
        <div className="absolute inset-0 pointer-events-none opacity-35">
          <div className="absolute top-1/6 right-1/6 w-[900px] h-[900px] bg-gradient-to-r from-emerald-500/12 to-green-500/8 blur-3xl rounded-full animate-pulse transform rotate-45"></div>
          <div className="absolute bottom-1/6 left-1/6 w-[700px] h-[700px] bg-gradient-to-r from-teal-500/12 to-emerald-500/8 blur-3xl rounded-full animate-pulse transform -rotate-45" style={{animationDelay: '3.8s'}}></div>
          
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(60deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                linear-gradient(120deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px, 70px 70px'
            }}></div>
          </div>
          
          <div className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-emerald-400/30 transform rotate-60 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-green-400/40 rounded-full animate-pulse border border-green-400/25" style={{animationDelay: '11s'}}></div>
        </div>
        
        {/* Enhanced Contact */}
        <div className="relative z-10">
          <div className="bg-zinc-800/90 border border-zinc-700/50 backdrop-blur-sm mx-4 p-8 shadow-2xl">
            <Contact />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
