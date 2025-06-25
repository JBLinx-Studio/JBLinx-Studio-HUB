
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import WebAppsShowcase from '../components/WebAppsShowcase';
import GamesPortfolio from '../components/GamesPortfolio';
import PricingSection from '../components/PricingSection';
import DeveloperHub from '../components/DeveloperHub';
import FeaturedBlogCycle from '../components/FeaturedBlogCycle';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <WebAppsShowcase />
        <GamesPortfolio />
        <PricingSection />
        <DeveloperHub />
        <FeaturedBlogCycle />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
