
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedBlogCycle from '../components/FeaturedBlogCycle';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      <main className="relative">
        <Hero />
        <Services />
        <FeaturedBlogCycle />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
