
import React from 'react';
import Header from '../components/Header';
import EnhancedHero from '../components/EnhancedHero';
import InteractiveGamesShowcase from '../components/InteractiveGamesShowcase';
import ModernProductsCarousel from '../components/ModernProductsCarousel';
import WebAppsSection from '../components/WebAppsSection';
import DeveloperTools from '../components/DeveloperTools';
import FeaturedBlogCycle from '../components/FeaturedBlogCycle';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Header />
      <main className="relative">
        <EnhancedHero />
        <InteractiveGamesShowcase />
        <ModernProductsCarousel />
        <WebAppsSection />
        <DeveloperTools />
        <FeaturedBlogCycle />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
