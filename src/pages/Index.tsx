
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
        
        {/* Large Spacing with Divider */}
        <div className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          </div>
        </div>
        
        {/* PRIORITY 1: GAMERS - Dark Purple Theme */}
        <div className="bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900">
          <GamesSection />
        </div>
        
        {/* Large Spacing with Divider */}
        <div className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="container mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mb-8"></div>
            <div className="text-center">
              <div className="w-2 h-2 bg-slate-500 rounded-full mx-auto mb-4"></div>
              <div className="w-16 h-px bg-slate-600 mx-auto"></div>
            </div>
          </div>
        </div>
        
        {/* PRIORITY 2: GENERAL PRODUCTS - Dark Blue Theme */}
        <div className="bg-gradient-to-b from-slate-800 via-blue-950/20 to-slate-800">
          <ProductsShowcase />
        </div>
        
        {/* Large Spacing with Divider */}
        <div className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mb-8"></div>
            <div className="text-center">
              <div className="w-2 h-2 bg-slate-500 rounded-full mx-auto mb-4"></div>
              <div className="w-16 h-px bg-slate-600 mx-auto"></div>
            </div>
          </div>
        </div>
        
        {/* PRIORITY 3: APP USERS - Dark Green Theme */}
        <div className="bg-gradient-to-b from-slate-900 via-green-950/20 to-slate-900">
          <WebAppsSection />
        </div>
        
        {/* Large Spacing with Divider */}
        <div className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mb-8"></div>
            <div className="text-center">
              <div className="w-2 h-2 bg-slate-500 rounded-full mx-auto mb-4"></div>
              <div className="w-16 h-px bg-slate-600 mx-auto"></div>
            </div>
          </div>
        </div>
        
        {/* PRIORITY 4: DEVELOPERS - Dark Cyan Theme */}
        <div className="bg-gradient-to-b from-slate-950 via-cyan-950/20 to-slate-950">
          <DeveloperTools />
        </div>
        
        {/* Final Large Spacing */}
        <div className="py-16 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
          </div>
        </div>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
