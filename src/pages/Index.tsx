
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
import ParallaxDivider from '../components/effects/ParallaxDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Header />
      <main className="relative">
        <Hero />
        
        {/* Enhanced Services Overview */}
        <Services />
        
        {/* Premium Visual Break Section with Parallax */}
        <ParallaxDivider
          title="PREMIUM CONTENT SECTORS"
          theme="premium"
          backgroundElements={
            <>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/3 blur-3xl animate-pulse delay-500"></div>
            </>
          }
        />
        
        {/* PRIORITY 1: GAMERS - Enhanced Entry Animation */}
        <div className="animate-fade-in">
          <GamesSection />
        </div>
        
        {/* Neural Network Transition with Parallax */}
        <ParallaxDivider
          title="NEURAL NETWORK TRANSITION"
          theme="neural"
          backgroundElements={
            <>
              <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-purple-500/4 blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 right-1/6 w-80 h-80 bg-blue-500/4 blur-3xl animate-pulse delay-700"></div>
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/3 blur-3xl animate-pulse delay-300"></div>
            </>
          }
          patternElements={
            <svg className="w-full h-full opacity-10" viewBox="0 0 800 400">
              <defs>
                <linearGradient id="vertexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              <g stroke="url(#vertexGradient1)" strokeWidth="1" fill="none">
                <line x1="100" y1="80" x2="200" y2="150" className="animate-pulse" />
                <line x1="200" y1="150" x2="350" y2="120" className="animate-pulse" style={{animationDelay: '300ms'}} />
                <line x1="350" y1="120" x2="500" y2="200" className="animate-pulse" style={{animationDelay: '600ms'}} />
                <line x1="500" y1="200" x2="650" y2="140" className="animate-pulse" style={{animationDelay: '900ms'}} />
                <line x1="150" y1="250" x2="300" y2="280" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                <line x1="300" y1="280" x2="450" y2="250" className="animate-pulse" style={{animationDelay: '1500ms'}} />
                <line x1="450" y1="250" x2="600" y2="320" className="animate-pulse" style={{animationDelay: '1800ms'}} />
                
                <line x1="200" y1="150" x2="300" y2="280" className="animate-pulse" style={{animationDelay: '400ms'}} />
                <line x1="350" y1="120" x2="450" y2="250" className="animate-pulse" style={{animationDelay: '700ms'}} />
                <line x1="500" y1="200" x2="300" y2="280" className="animate-pulse" style={{animationDelay: '1000ms'}} />
              </g>
              
              <g fill="url(#vertexGradient1)">
                <circle cx="100" cy="80" r="3" className="animate-pulse" />
                <circle cx="200" cy="150" r="4" className="animate-pulse" style={{animationDelay: '200ms'}} />
                <circle cx="350" cy="120" r="3" className="animate-pulse" style={{animationDelay: '400ms'}} />
                <circle cx="500" cy="200" r="5" className="animate-pulse" style={{animationDelay: '600ms'}} />
                <circle cx="650" cy="140" r="3" className="animate-pulse" style={{animationDelay: '800ms'}} />
                <circle cx="150" cy="250" r="4" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                <circle cx="300" cy="280" r="6" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                <circle cx="450" cy="250" r="3" className="animate-pulse" style={{animationDelay: '1400ms'}} />
                <circle cx="600" cy="320" r="4" className="animate-pulse" style={{animationDelay: '1600ms'}} />
              </g>
            </svg>
          }
        />
        
        {/* PRIORITY 2: GENERAL PRODUCTS - Enhanced */}
        <div className="animate-fade-in">
          <ProductsShowcase />
        </div>
        
        {/* Geometric Matrix Space with Parallax */}
        <ParallaxDivider
          title="GEOMETRIC MATRIX SPACE"
          theme="geometric"
          backgroundElements={
            <>
              <div className="absolute top-1/5 left-1/4 w-64 h-64 bg-green-500/3 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/5 right-1/4 w-88 h-88 bg-cyan-500/3 blur-3xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/2 blur-3xl animate-pulse delay-500"></div>
            </>
          }
          patternElements={
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
              
              <g fill="url(#geometricGradient)" stroke="#10b981" strokeWidth="1" opacity="0.3">
                <polygon points="100,50 150,100 100,150 50,100" className="animate-pulse" />
                <polygon points="300,80 340,120 300,160 260,120" className="animate-pulse" style={{animationDelay: '500ms'}} />
                <polygon points="180,250 220,290 180,330 140,290" className="animate-pulse" style={{animationDelay: '1000ms'}} />
              </g>
            </svg>
          }
        />
        
        {/* PRIORITY 3: APP USERS - Enhanced */}
        <div className="animate-fade-in">
          <WebAppsSection />
        </div>
        
        {/* Developer Matrix with Parallax */}
        <ParallaxDivider
          title="ENTERING DEVELOPER MATRIX"
          theme="developer"
          backgroundElements={
            <>
              <div className="absolute top-1/6 left-1/5 w-72 h-72 bg-blue-500/3 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/6 right-1/5 w-88 h-88 bg-green-500/3 blur-3xl animate-pulse delay-800"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/2 blur-3xl animate-pulse delay-400"></div>
              <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-cyan-500/3 blur-3xl animate-pulse delay-1200"></div>
            </>
          }
          patternElements={
            <svg className="w-full h-full opacity-8" viewBox="0 0 800 600">
              <defs>
                <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none">
                <line x1="50" y1="100" x2="300" y2="100" className="animate-pulse" />
                <line x1="320" y1="100" x2="600" y2="100" className="animate-pulse" style={{animationDelay: '200ms'}} />
                <line x1="100" y1="200" x2="400" y2="200" className="animate-pulse" style={{animationDelay: '400ms'}} />
                <line x1="420" y1="200" x2="700" y2="200" className="animate-pulse" style={{animationDelay: '600ms'}} />
                <line x1="80" y1="300" x2="350" y2="300" className="animate-pulse" style={{animationDelay: '800ms'}} />
                <line x1="370" y1="300" x2="650" y2="300" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                
                <line x1="150" y1="80" x2="150" y2="320" className="animate-pulse" style={{animationDelay: '300ms'}} />
                <line x1="300" y1="80" x2="300" y2="220" className="animate-pulse" style={{animationDelay: '500ms'}} />
                <line x1="450" y1="90" x2="450" y2="320" className="animate-pulse" style={{animationDelay: '700ms'}} />
                <line x1="600" y1="80" x2="600" y2="320" className="animate-pulse" style={{animationDelay: '900ms'}} />
              </g>
              
              <g fill="url(#circuitGradient)">
                <rect x="145" y="95" width="10" height="10" rx="2" className="animate-pulse" />
                <rect x="295" y="95" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '200ms'}} />
                <rect x="445" y="95" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '400ms'}} />
                <rect x="595" y="95" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '600ms'}} />
                <rect x="145" y="195" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '800ms'}} />
                <rect x="295" y="195" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '1000ms'}} />
                <rect x="445" y="195" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '1200ms'}} />
                <rect x="595" y="195" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '1400ms'}} />
                <rect x="145" y="295" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '1600ms'}} />
                <rect x="445" y="295" width="10" height="10" rx="2" className="animate-pulse" style={{animationDelay: '1800ms'}} />
                
                <rect x="140" y="140" width="20" height="20" rx="3" className="animate-pulse" style={{animationDelay: '500ms'}} />
                <rect x="440" y="240" width="20" height="20" rx="3" className="animate-pulse" style={{animationDelay: '1000ms'}} />
              </g>
            </svg>
          }
        />
        
        {/* PRIORITY 4: DEVELOPERS - Enhanced */}
        <div className="animate-fade-in">
          <DeveloperTools />
        </div>
        
        {/* Data Stream Terminal with Parallax */}
        <ParallaxDivider
          title="DATA STREAM TERMINAL"
          theme="terminal"
          backgroundElements={
            <>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-500/1 blur-3xl animate-pulse"></div>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/2 blur-3xl animate-pulse delay-600"></div>
              <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/2 blur-3xl animate-pulse delay-1000"></div>
            </>
          }
          patternElements={
            <svg className="w-full h-full opacity-6" viewBox="0 0 1000 400">
              <defs>
                <linearGradient id="dataFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
                  <stop offset="50%" stopColor="#64748b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              <g stroke="url(#dataFlowGradient)" strokeWidth="1" fill="none">
                {Array.from({ length: 8 }).map((_, i) => (
                  <g key={i}>
                    <line 
                      x1="0" 
                      y1={50 + i * 40} 
                      x2="1000" 
                      y2={50 + i * 40} 
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 200}ms`}} 
                    />
                    <circle 
                      cx={100 + (i * 120)} 
                      cy={50 + i * 40} 
                      r="2" 
                      fill="#64748b" 
                      opacity="0.6"
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 300}ms`}} 
                    />
                    <circle 
                      cx={300 + (i * 80)} 
                      cy={50 + i * 40} 
                      r="1.5" 
                      fill="#64748b" 
                      opacity="0.4"
                      className="animate-pulse" 
                      style={{animationDelay: `${i * 400}ms`}} 
                    />
                  </g>
                ))}
              </g>
            </svg>
          }
        />
        
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
