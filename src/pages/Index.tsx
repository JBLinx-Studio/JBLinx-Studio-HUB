
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import InteractiveShowcase from '../components/InteractiveShowcase';
import ProductCarousel from '../components/ProductCarousel';
import TechShowcase from '../components/TechShowcase';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        <InteractiveShowcase />
        <ProductCarousel />
        <TechShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
