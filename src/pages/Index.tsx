
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import GamesSection from '../components/GamesSection';
import ProductsShowcase from '../components/ProductsShowcase';
import WebAppsSection from '../components/WebAppsSection';
import DeveloperTools from '../components/DeveloperTools';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        
        {/* PRIORITY 1: GAMERS - Games first to capture gaming audience */}
        <GamesSection />
        
        {/* PRIORITY 2: GENERAL PRODUCTS - Templates, tools, ebooks for broader audience */}
        <ProductsShowcase />
        
        {/* PRIORITY 3: APP USERS - Web and mobile apps for end users */}
        <WebAppsSection />
        
        {/* PRIORITY 4: DEVELOPERS - Dev tools and resources moved to bottom, more compact */}
        <DeveloperTools />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
