
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import UnifiedShowcase from '../components/UnifiedShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        
        {/* Unified Showcase Hub - Replaces all scattered sections */}
        <UnifiedShowcase />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
