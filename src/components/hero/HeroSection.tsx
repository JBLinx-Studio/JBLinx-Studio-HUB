import React from 'react';
import { ArrowRight, Github, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Globe, Cloud, Brain, Monitor, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';
import AnimatedSection from '../ui/AnimatedSection';

const HeroSection = () => {
  const products = [
    { name: 'CodeFusion', icon: Code, color: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-500/10', category: 'DEV TOOLS' },
    { name: 'VitalitySync', icon: Heart, color: 'text-red-400', border: 'border-red-500/40', bg: 'bg-red-500/10', category: 'HEALTH TECH' },
    { name: 'MindMate', icon: Brain, color: 'text-purple-400', border: 'border-purple-500/40', bg: 'bg-purple-500/10', category: 'AI ASSISTANT' },
    { name: 'NestCore', icon: Building2, color: 'text-orange-400', border: 'border-orange-500/40', bg: 'bg-orange-500/10', category: 'ENTERPRISE' },
    { name: 'CloudSync', icon: Cloud, color: 'text-blue-400', border: 'border-blue-500/40', bg: 'bg-blue-500/10', category: 'CLOUD SERVICES' }
  ];

  const stats = [
    { icon: Trophy, value: "10", label: "PRODUCTS", color: "text-emerald-400" },
    { icon: Users, value: "2,847", label: "USERS", color: "text-cyan-400" },
    { icon: Star, value: "1,623", label: "STARS", color: "text-yellow-400" },
    { icon: Award, value: "98.7%", label: "SATISFACTION", color: "text-purple-400" }
  ];

  return (
    <section className="relative min-h-screen section-padding overflow-hidden">
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <AnimatedSection className="text-center mb-12" delay={0.1}>
          <div className="badge-emerald mb-6">
            <Gamepad2 className="w-4 h-4" />
            <span>STUDIO HUB</span>
          </div>
          
          <h1 className="text-page-title text-foreground mb-5">
            PROFESSIONAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              TECHNOLOGY
            </span>{' '}
            SOLUTIONS
          </h1>
          
          <div className="section-divider bg-gradient-to-r from-emerald-400 to-cyan-400" />
          
          <p className="text-body text-base max-w-2xl mx-auto">
            Products across web, mobile, gaming, and enterprise solutions
          </p>
        </AnimatedSection>

        {/* Product Ecosystem */}
        <AnimatedSection className="mb-10" delay={0.2}>
          <div className="text-label text-muted-foreground text-center mb-4">FLAGSHIP ECOSYSTEM</div>
          <div className="flex flex-wrap justify-center gap-3">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <motion.div 
                  key={index} 
                  className={`panel card-padding flex items-center gap-3 ${product.border} hover:shadow-lg transition-all cursor-default`}
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-10 h-10 ${product.bg} ${product.border} border rounded-md flex items-center justify-center`}>
                    <IconComponent className={`w-5 h-5 ${product.color}`} />
                  </div>
                  <div className="text-left">
                    <div className={`text-card-title ${product.color}`}>{product.name}</div>
                    <div className="text-small">{product.category}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Stats Grid */}
        <AnimatedSection className="mb-12" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="stat-card"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                  <div className={`stat-value ${stat.color}`}>{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={0.4} direction="left">
            <div className="panel-elevated card-padding h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-emerald-500/15 border border-emerald-500/40 rounded-md flex items-center justify-center">
                  <Monitor className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-panel-title text-emerald-400">DEVELOPMENT CONSOLE</span>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />
              </div>
              <ProfessionalTerminal />
              <div className="mt-3 text-small">
                Real-time development environment
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5} direction="right">
            <div className="panel-elevated card-padding h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-emerald-500/15 border border-emerald-500/40 rounded-md flex items-center justify-center">
                  <Activity className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-panel-title text-emerald-400">MISSION CONTROL</span>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent" />
              </div>

              <div className="space-y-3">
                {[
                  { icon: Globe, title: "GLOBAL OPS", detail: "All systems operational • 99.9% uptime", color: "emerald", live: true },
                  { icon: Layers, title: "PORTFOLIO", detail: "Multi-platform • 150k+ users • Enterprise grade", color: "cyan", badge: "47 PRODUCTS" },
                  { icon: Rocket, title: "INNOVATION", detail: "Agile development • Weekly releases", color: "purple", badge: "CONTINUOUS" }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  const colorClass = `text-${item.color}-400`;
                  return (
                    <motion.div 
                      key={index}
                      className="panel panel-padding hover:border-primary/40 transition-all"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <IconComponent className={`w-4 h-4 ${colorClass}`} />
                          <span className="text-card-title text-foreground">{item.title}</span>
                        </div>
                        {item.live ? (
                          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />
                        ) : (
                          <div className={`text-label ${colorClass}`}>{item.badge}</div>
                        )}
                      </div>
                      <div className={`text-small ${colorClass}`}>{item.detail}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-5 border-t border-border mt-5">
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
          </AnimatedSection>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center" delay={0.6}>
          <div className="text-label text-muted-foreground mb-3">READY FOR EXCELLENCE?</div>
          <p className="text-body text-base max-w-2xl mx-auto mb-5">
            Join thousands who trust JBLinx Studio for critical technology needs.
            <span className="text-emerald-400 font-bold"> Professional-grade solutions</span> that drive results.
          </p>
          
          <Link to="/blog" className="btn-primary">
            <Zap className="w-4 h-4" />
            <span>DISCOVER PORTFOLIO</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
