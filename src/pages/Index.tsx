
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import PremiumServices from '../components/PremiumServices';
import GamePortfolio from '../components/GamePortfolio';
import FeaturedBlogCycle from '../components/FeaturedBlogCycle';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        <ProductShowcase />
        <PremiumServices />
        <GamePortfolio />
        <FeaturedBlogCycle />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
