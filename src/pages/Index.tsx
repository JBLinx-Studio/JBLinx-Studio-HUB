
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
        
        {/* Large Divider Section */}
        <div className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700">
          <div className="container mx-auto px-4 text-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 1: GAMERS */}
        <GamesSection />
        
        {/* Spacer with background transition */}
        <div className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 2: GENERAL PRODUCTS */}
        <ProductsShowcase />
        
        {/* Spacer with background transition */}
        <div className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 3: APP USERS */}
        <WebAppsSection />
        
        {/* Spacer with background transition */}
        <div className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>
        </div>
        
        {/* PRIORITY 4: DEVELOPERS */}
        <DeveloperTools />
        
        {/* Final spacer before contact */}
        <div className="py-16 bg-gradient-to-b from-black to-slate-950">
          <div className="container mx-auto px-4 text-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto"></div>
          </div>
        </div>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
