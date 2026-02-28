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
import ParallaxBackground from '../components/effects/ParallaxBackground';

interface SectionBridgeProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionBridge: React.FC<SectionBridgeProps> = ({ eyebrow, title, description }) => (
  <section className="relative z-20 border-y border-zinc-700/40 bg-gradient-to-b from-zinc-900/90 via-zinc-900/85 to-zinc-950/90 py-14">
    <div className="container mx-auto px-4">
      <div className="panel-dark panel-glow mx-auto max-w-4xl border-zinc-700/60 px-6 py-8 text-center md:px-10">
        <p className="mb-2 font-mono text-xs font-black tracking-[0.25em] text-glow-orange">{eyebrow}</p>
        <h2 className="font-mono text-2xl font-black text-cream md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-cream-dark md:text-base">{description}</p>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-gradient-dark">
      <ParallaxBackground />

      <div className="relative z-20">
        <Header />

        <main className="relative z-20">
          <Hero />
          <Services />

          <SectionBridge
            eyebrow="GAME SYSTEMS"
            title="From prototype to shipped worlds"
            description="Production pipelines, balancing, and post-launch updates are handled with clear roadmap ownership and measurable velocity."
          />
          <GamesSection />

          <SectionBridge
            eyebrow="PRODUCT STACK"
            title="Software products that users actually keep"
            description="We prioritize utility, retention, and maintainability over visual noise—each release is built for daily use, not a demo screenshot."
          />
          <ProductsShowcase />

          <SectionBridge
            eyebrow="WEB PLATFORMS"
            title="Real operations, real reliability"
            description="Every platform is designed with clear system status, practical workflows, and production-ready architecture."
          />
          <WebAppsSection />

          <SectionBridge
            eyebrow="DEVELOPER EXPERIENCE"
            title="Tools for shipping faster with confidence"
            description="Documented patterns, practical guides, and transparent metrics help teams move from idea to deployment without guesswork."
          />
          <DeveloperTools />

          <SectionBridge
            eyebrow="LET’S BUILD"
            title="Direct collaboration, no simulation"
            description="Tell us what to change and we iterate in the open—feature by feature, with full visibility into the implementation."
          />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
