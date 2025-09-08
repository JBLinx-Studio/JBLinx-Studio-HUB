
import React, { useRef, Suspense, lazy } from 'react';
import { useParallaxScroll } from '@/hooks/useParallaxScroll';
import InteractiveParticles from '@/components/effects/InteractiveParticles';
import LazyLoader from '@/components/common/LazyLoader';

// Lazy load heavy components
const Hero = lazy(() => import('@/components/Hero'));
const Services = lazy(() => import('@/components/Services'));
const Portfolio = lazy(() => import('@/components/Portfolio'));
const About = lazy(() => import('@/components/About'));
const ProductsShowcase = lazy(() => import('@/components/ProductsShowcase'));
const Stats = lazy(() => import('@/components/Stats'));
const Newsletter = lazy(() => import('@/components/Newsletter'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  const { scrollY, getParallaxStyle } = useParallaxScroll({
    enableMouseDrag: true,
    friction: 0.95,
    momentum: 1.2
  });

  // Refs for particle containers
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-x-hidden">
      {/* Hero Section with Enhanced Particles */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center cursor-crosshair"
        style={getParallaxStyle(-0.1)}
      >
        <InteractiveParticles 
          theme="blue" 
          particleCount={15}
          containerRef={heroRef}
        />
        <Suspense fallback={<div className="animate-pulse h-screen bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg" />}>
          <LazyLoader>
            <Hero />
          </LazyLoader>
        </Suspense>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="relative py-20 cursor-grab active:cursor-grabbing"
        style={getParallaxStyle(-0.05)}
      >
        <InteractiveParticles 
          theme="emerald" 
          particleCount={12}
          containerRef={servicesRef}
        />
        <Suspense fallback={<div className="animate-pulse h-96 bg-emerald-600/10 rounded-lg mx-4" />}>
          <LazyLoader>
            <Services />
          </LazyLoader>
        </Suspense>
      </section>

      {/* Portfolio Section */}
      <section 
        ref={portfolioRef}
        className="relative py-20 cursor-pointer"
        style={getParallaxStyle(-0.03)}
      >
        <InteractiveParticles 
          theme="purple" 
          particleCount={10}
          containerRef={portfolioRef}
        />
        <Suspense fallback={<div className="animate-pulse h-96 bg-purple-600/10 rounded-lg mx-4" />}>
          <LazyLoader>
            <Portfolio />
          </LazyLoader>
        </Suspense>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="relative py-20 cursor-help"
        style={getParallaxStyle(-0.02)}
      >
        <InteractiveParticles 
          theme="orange" 
          particleCount={8}
          containerRef={aboutRef}
        />
        <Suspense fallback={<div className="animate-pulse h-96 bg-orange-600/10 rounded-lg mx-4" />}>
          <LazyLoader>
            <About />
          </LazyLoader>
        </Suspense>
      </section>

      {/* Products Showcase */}
      <LazyLoader>
        <Suspense fallback={<div className="animate-pulse h-96 bg-green-600/10 rounded-lg mx-4" />}>
          <ProductsShowcase />
        </Suspense>
      </LazyLoader>

      {/* Stats Section */}
      <LazyLoader>
        <Suspense fallback={<div className="animate-pulse h-64 bg-blue-600/10 rounded-lg mx-4" />}>
          <Stats />
        </Suspense>
      </LazyLoader>

      {/* Newsletter */}
      <LazyLoader>
        <Suspense fallback={<div className="animate-pulse h-48 bg-indigo-600/10 rounded-lg mx-4" />}>
          <Newsletter />
        </Suspense>
      </LazyLoader>

      {/* Footer */}
      <LazyLoader>
        <Suspense fallback={<div className="animate-pulse h-64 bg-gray-800 rounded-lg mx-4" />}>
          <Footer />
        </Suspense>
      </LazyLoader>
    </div>
  );
};

export default Index;
