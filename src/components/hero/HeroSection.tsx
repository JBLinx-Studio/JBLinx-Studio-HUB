import React from 'react';
import {
  ArrowRight,
  Award,
  Brain,
  Building2,
  Cloud,
  Code,
  Github,
  Globe,
  Heart,
  Layers,
  Monitor,
  Rocket,
  Shield,
  Star,
  Trophy,
  Users,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  const studioStats = [
    { icon: Trophy, value: '10', label: 'Products', note: 'Shipping now', tone: 'border-emerald-500/50 text-emerald-400' },
    { icon: Users, value: '2,847', label: 'Active users', note: 'Across platforms', tone: 'border-cyan-500/50 text-cyan-400' },
    { icon: Star, value: '1,623', label: 'GitHub stars', note: 'Open source trust', tone: 'border-amber-500/50 text-amber-400' },
    { icon: Award, value: '98.7%', label: 'Satisfaction', note: 'Client feedback', tone: 'border-purple-500/50 text-purple-400' }
  ];

  const productRows = [
    { name: 'CodeFusion', icon: Code, category: 'Dev tools', accent: 'text-emerald-400' },
    { name: 'MindMate', icon: Brain, category: 'AI assistant', accent: 'text-purple-400' },
    { name: 'VitalitySync', icon: Heart, category: 'Health tech', accent: 'text-rose-400' },
    { name: 'NestCore', icon: Building2, category: 'Enterprise', accent: 'text-orange-400' },
    { name: 'CloudSync', icon: Cloud, category: 'Cloud services', accent: 'text-cyan-400' }
  ];

  const principles = [
    { icon: Rocket, title: 'Ship fast', subtitle: 'Weekly production releases' },
    { icon: Shield, title: 'Built secure', subtitle: 'Enterprise delivery standards' },
    { icon: Globe, title: 'Scale globally', subtitle: 'Reliable multi-region architecture' },
    { icon: Zap, title: 'Stay performant', subtitle: 'Measured and optimized workflows' }
  ];

  return (
    <section className="relative z-20 min-h-screen overflow-hidden bg-gradient-to-b from-zinc-950/90 via-zinc-900/85 to-zinc-950/90 py-16">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-gradient-to-br from-orange-500/12 to-amber-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-gradient-to-br from-emerald-500/12 to-teal-500/8 blur-3xl" />
      </div>

      <div className="container relative z-20 mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 border border-emerald-500/40 bg-zinc-900/85 px-4 py-2 backdrop-blur-sm">
            <Layers className="h-4 w-4 text-emerald-400" />
            <span className="font-mono text-xs font-black tracking-[0.2em] text-emerald-400">JBLINX STUDIO HQ</span>
          </div>

          <h1 className="font-mono text-3xl font-black leading-tight text-cream md:text-5xl">
            Real products. Real users. <span className="text-glow-emerald">Real execution.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-cream-dark md:text-lg">
            We build and operate production-grade software across web, game, mobile, and cloud verticals with clear ownership and measurable outcomes.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="panel-dark border-zinc-700/70 p-4 text-left">
                  <Icon className="mb-2 h-4 w-4 text-glow-orange" />
                  <p className="text-sm font-bold text-cream">{item.title}</p>
                  <p className="text-xs text-cream-dark">{item.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="panel-dark border-zinc-700/70 p-4">
            <div className="mb-4 flex items-center gap-2">
              <Monitor className="h-4 w-4 text-glow-emerald" />
              <span className="font-mono text-sm font-black tracking-wide text-glow-emerald">DEVELOPMENT CONSOLE</span>
            </div>
            <ProfessionalTerminal />

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Link to="/blog" className="btn-primary text-center text-sm">
                Explore work
              </Link>
              <a
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center text-sm"
              >
                <span className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  View source
                </span>
              </a>
            </div>
          </div>

          <div className="panel-dark border-zinc-700/70 p-4">
            <div className="mb-4 flex items-center gap-2">
              <Rocket className="h-4 w-4 text-glow-orange" />
              <span className="font-mono text-sm font-black tracking-wide text-glow-orange">FLAGSHIP PRODUCTS</span>
            </div>

            <div className="space-y-2">
              {productRows.map((product) => {
                const Icon = product.icon;
                return (
                  <div key={product.name} className="flex items-center justify-between border border-zinc-700/70 bg-zinc-800/70 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Icon className={`h-4 w-4 ${product.accent}`} />
                      <span className="text-sm font-bold text-cream">{product.name}</span>
                    </div>
                    <span className="text-xs text-cream-dark">{product.category}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/pricing" className="btn-primary inline-flex items-center gap-2 text-sm">
                Start project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/support" className="btn-ghost text-sm">
                Talk to team
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {studioStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={`border bg-zinc-900/90 p-4 text-center ${stat.tone}`}>
                <Icon className="mx-auto mb-2 h-4 w-4" />
                <p className="font-mono text-lg font-black">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-cream">{stat.label}</p>
                <p className="text-xs text-cream-dark">{stat.note}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

