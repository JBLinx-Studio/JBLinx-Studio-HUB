import React from 'react';
import { ArrowRight, Github, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Globe, Cloud, Brain, Monitor, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  const products = [
    { name: 'CodeFusion', icon: Code, color: 'text-emerald-400', category: 'DEV TOOLS' },
    { name: 'VitalitySync', icon: Heart, color: 'text-red-400', category: 'HEALTH TECH' },
    { name: 'MindMate', icon: Brain, color: 'text-purple-400', category: 'AI ASSISTANT' },
    { name: 'NestCore', icon: Building2, color: 'text-orange-400', category: 'ENTERPRISE' },
    { name: 'CloudSync', icon: Cloud, color: 'text-blue-400', category: 'CLOUD SERVICES' }
  ];

  const companyValues = [
    { icon: Rocket, label: "Innovation First", desc: "Cutting-edge solutions" },
    { icon: Globe, label: "Global Impact", desc: "Worldwide reach" },
    { icon: Zap, label: "Performance", desc: "Lightning fast delivery" }
  ];

  const stats = [
    { icon: Trophy, value: "10", label: "PRODUCTS", color: "text-emerald-400" },
    { icon: Users, value: "2,847", label: "USERS", color: "text-cyan-400" },
    { icon: Star, value: "1,623", label: "STARS", color: "text-yellow-400" },
    { icon: Award, value: "98.7%", label: "SATISFACTION", color: "text-purple-400" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-section section-padding overflow-hidden">
      {/* Ambient Background */}
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Badge */}
        <div className="text-center mb-8">
          <div className="badge-emerald mb-4">
            <Gamepad2 className="w-4 h-4" />
            <span>STUDIO HUB</span>
          </div>
          
          <h1 className="text-page-title text-foreground mb-4">
            PROFESSIONAL <span className="text-emerald-400">TECHNOLOGY</span> SOLUTIONS
          </h1>
          
          <div className="section-divider bg-emerald-400" />
          
          <p className="text-body max-w-2xl mx-auto mb-6">
            Products across web, mobile, gaming, and enterprise solutions
          </p>

          {/* Company Values */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="panel panel-padding flex items-center gap-3 hover:border-primary/40 transition-all">
                  <IconComponent className="w-4 h-4 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-card-title text-foreground">{value.label}</div>
                    <div className="text-small">{value.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Product Ecosystem */}
          <div className="mb-8">
            <div className="text-label text-muted-foreground mb-3">FLAGSHIP ECOSYSTEM</div>
            <div className="flex flex-wrap justify-center gap-3">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <div key={index} className="panel panel-padding flex items-center gap-3 hover:border-primary/40 transition-all">
                    <IconComponent className={`w-4 h-4 ${product.color}`} />
                    <div className="text-left">
                      <div className={`text-card-title ${product.color}`}>{product.name}</div>
                      <div className="text-small">{product.category}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="stat-card">
                  <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                  <div className={`stat-value ${stat.color}`}>{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Development Console */}
          <div className="panel card-padding">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-5 h-5 text-emerald-400" />
              <span className="text-panel-title text-emerald-400">DEVELOPMENT CONSOLE</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />
            </div>
            <ProfessionalTerminal />
            <div className="mt-3 text-small">
              Real-time development environment
            </div>
          </div>

          {/* Mission Control */}
          <div className="panel card-padding">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span className="text-panel-title text-emerald-400">MISSION CONTROL</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />
            </div>

            <div className="space-y-3">
              <div className="panel-hover panel-padding">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span className="text-card-title text-foreground">GLOBAL OPS</span>
                  </div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                </div>
                <div className="text-small text-emerald-400">All systems operational • 99.9% uptime</div>
              </div>

              <div className="panel-hover panel-padding">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-card-title text-foreground">PORTFOLIO</span>
                  </div>
                  <div className="text-label text-cyan-400">47 PRODUCTS</div>
                </div>
                <div className="text-small text-cyan-400">Multi-platform • 150k+ users • Enterprise grade</div>
              </div>

              <div className="panel-hover panel-padding">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-purple-400" />
                    <span className="text-card-title text-foreground">INNOVATION</span>
                  </div>
                  <div className="text-label text-purple-400">CONTINUOUS</div>
                </div>
                <div className="text-small text-purple-400">Agile development • Weekly releases</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-border mt-4">
              <Link to="/blog" className="btn-primary">
                <Rocket className="w-4 h-4" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a href="https://github.com/orgs/JBLinx-Studio/repositories" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github className="w-4 h-4" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="text-label text-muted-foreground mb-2">READY FOR EXCELLENCE?</div>
          <p className="text-body max-w-2xl mx-auto mb-4">
            Join thousands who trust JBLinx Studio for critical technology needs.
            <span className="text-emerald-400 font-bold"> Professional-grade solutions</span> that drive results.
          </p>
          
          <Link to="/blog" className="btn-primary">
            <Zap className="w-4 h-4" />
            <span>DISCOVER PORTFOLIO</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <div className="mt-3 text-small">
            Professional • Reliable • Innovative • Results-Driven
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
