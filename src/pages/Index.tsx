
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductsShowcase from '../components/ProductsShowcase';
import GamesSection from '../components/GamesSection';
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
        <ProductsShowcase />
        <GamesSection />
        <WebAppsSection />
        <DeveloperTools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
