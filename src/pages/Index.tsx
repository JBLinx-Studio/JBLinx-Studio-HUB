
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
        
        {/* PREMIUM CONTENT SECTORS - Parallax Divider */}
        <ParallaxDivider title="PREMIUM CONTENT SECTORS" theme="premium" />
        
        {/* PRIORITY 1: GAMERS - Enhanced Entry Animation */}
        <div className="animate-fade-in">
          <GamesSection />
        </div>
        
        {/* NEURAL NETWORK TRANSITION - Parallax Divider */}
        <ParallaxDivider title="NEURAL NETWORK TRANSITION" theme="neural" />
        
        {/* PRIORITY 2: GENERAL PRODUCTS - Enhanced */}
        <div className="animate-fade-in">
          <ProductsShowcase />
        </div>
        
        {/* GEOMETRIC MATRIX SPACE - Parallax Divider */}
        <ParallaxDivider title="GEOMETRIC MATRIX SPACE" theme="geometric" />
        
        {/* PRIORITY 3: APP USERS - Enhanced */}
        <div className="animate-fade-in">
          <WebAppsSection />
        </div>
        
        {/* ENTERING DEVELOPER MATRIX - Parallax Divider */}
        <ParallaxDivider title="ENTERING DEVELOPER MATRIX" theme="developer" />
        
        {/* PRIORITY 4: DEVELOPERS - Enhanced */}
        <div className="animate-fade-in">
          <DeveloperTools />
        </div>
        
        {/* DATA STREAM TERMINAL - Parallax Divider */}
        <ParallaxDivider title="DATA STREAM TERMINAL" theme="terminal" />
        
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
