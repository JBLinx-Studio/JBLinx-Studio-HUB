
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
        
        {/* Premium Content Sectors Parallax Divider */}
        <ParallaxDivider 
          theme="premium" 
          title="PREMIUM CONTENT SECTORS" 
          height="xl"
        />
        
        {/* PRIORITY 1: GAMERS - Enhanced Entry Animation */}
        <div className="animate-fade-in">
          <GamesSection />
        </div>
        
        {/* Neural Network Transition Parallax Divider */}
        <ParallaxDivider 
          theme="neural" 
          title="NEURAL NETWORK TRANSITION" 
          height="xl"
        />
        
        {/* PRIORITY 2: GENERAL PRODUCTS - Enhanced */}
        <div className="animate-fade-in">
          <ProductsShowcase />
        </div>
        
        {/* Geometric Matrix Space Parallax Divider */}
        <ParallaxDivider 
          theme="geometric" 
          title="GEOMETRIC MATRIX SPACE" 
          height="xl"
        />
        
        {/* PRIORITY 3: APP USERS - Enhanced */}
        <div className="animate-fade-in">
          <WebAppsSection />
        </div>
        
        {/* Entering Developer Matrix Parallax Divider */}
        <ParallaxDivider 
          theme="developer" 
          title="ENTERING DEVELOPER MATRIX" 
          height="xl"
        />
        
        {/* PRIORITY 4: DEVELOPERS - Enhanced */}
        <div className="animate-fade-in">
          <DeveloperTools />
        </div>
        
        {/* Data Stream Terminal Parallax Divider */}
        <ParallaxDivider 
          theme="terminal" 
          title="DATA STREAM TERMINAL" 
          height="xl"
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
