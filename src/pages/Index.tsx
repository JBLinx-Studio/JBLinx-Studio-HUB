
import React from 'react';
import ProfessionalLayout from '@/components/layout/ProfessionalLayout';
import ProfessionalHeader from '@/components/common/ProfessionalHeader';
import HeroSection from '@/components/hero/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import GamesSection from '@/components/GamesSection';
import WebAppsSection from '@/components/WebAppsSection';
import ProductsShowcase from '@/components/ProductsShowcase';
import DeveloperTools from '@/components/DeveloperTools';
import ProfessionalTerminal from '@/components/terminal/ProfessionalTerminal';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import FeaturedBlogCycle from '@/components/FeaturedBlogCycle';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParallaxDivider from '@/components/effects/ParallaxDivider';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <ProfessionalHeader />
      <HeroSection />
      
      <ProfessionalLayout background="gradient" padding="xl">
        <ServicesSection />
      </ProfessionalLayout>

      {/* Premium Content Divider */}
      <ParallaxDivider 
        title="PREMIUM CONTENT SECTORS" 
        variant="premium"
      />

      <ProfessionalLayout background="dark" padding="xl">
        <GamesSection />
      </ProfessionalLayout>

      {/* Neural Network Transition */}
      <ParallaxDivider 
        title="NEURAL NETWORK TRANSITION" 
        variant="neural"
      />

      <ProfessionalLayout background="gradient" padding="xl">
        <WebAppsSection />
      </ProfessionalLayout>

      {/* Geometric Matrix Space */}
      <ParallaxDivider 
        title="GEOMETRIC MATRIX SPACE" 
        variant="geometric"
      />

      <ProfessionalLayout background="default" padding="xl">
        <ProductsShowcase />
      </ProfessionalLayout>

      {/* Entering Developer Matrix */}
      <ParallaxDivider 
        title="ENTERING DEVELOPER MATRIX" 
        variant="developer"
      />

      <ProfessionalLayout background="dark" padding="xl">
        <DeveloperTools />
      </ProfessionalLayout>

      {/* Data Stream Terminal */}
      <ParallaxDivider 
        title="DATA STREAM TERMINAL" 
        variant="terminal"
      />

      <ProfessionalLayout background="gradient" padding="lg">
        <ProfessionalTerminal />
      </ProfessionalLayout>

      <ProfessionalLayout background="default" padding="xl">
        <Stats />
        <About />
        <Portfolio />
        <FeaturedBlogCycle />
        <Newsletter />
        <Contact />
      </ProfessionalLayout>

      <Footer />
    </div>
  );
};

export default Index;
