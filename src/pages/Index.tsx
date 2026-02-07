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
    <div className="min-h-screen bg-zinc-950 overflow-x-hidden relative">
      {/* Parallax Background Layer */}
      <ParallaxBackground />
      
      {/* Main Content - positioned above parallax background */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          
          {/* Services Overview */}
          <Services />
          
          {/* Games Section */}
          <GamesSection />
          
          {/* Products Showcase */}
          <ProductsShowcase />
          
          {/* Web Applications */}
          <WebAppsSection />
          
          {/* Developer Tools */}
          <DeveloperTools />
          
          {/* Contact */}
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
