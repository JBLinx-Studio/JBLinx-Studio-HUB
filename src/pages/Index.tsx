
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
    <div className="min-h-screen bg-slate-950 overflow-x-hidden parallax-container">
      <Header />
      <main className="relative">
        <Hero />
        
        <Services />
        
        {/* Parallax Dividers with subtle background effects */}
        <ParallaxDivider 
          theme="premium" 
          title="PREMIUM CONTENT SECTORS" 
          height="lg"
        />
        
        <div className="animate-fade-in">
          <GamesSection />
        </div>
        
        <ParallaxDivider 
          theme="neural" 
          title="NEURAL NETWORK TRANSITION" 
          height="lg"
        />
        
        <div className="animate-fade-in">
          <ProductsShowcase />
        </div>
        
        <ParallaxDivider 
          theme="geometric" 
          title="GEOMETRIC MATRIX SPACE" 
          height="lg"
        />
        
        <div className="animate-fade-in">
          <WebAppsSection />
        </div>
        
        <ParallaxDivider 
          theme="developer" 
          title="ENTERING DEVELOPER MATRIX" 
          height="lg"
        />
        
        <div className="animate-fade-in">
          <DeveloperTools />
        </div>
        
        <ParallaxDivider 
          theme="terminal" 
          title="DATA STREAM TERMINAL" 
          height="lg"
        />
        
        <div className="animate-fade-in">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
