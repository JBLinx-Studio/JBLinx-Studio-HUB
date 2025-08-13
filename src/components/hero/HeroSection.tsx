
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, Shield, Database, Globe, Cpu, Smartphone, Monitor, Cloud, Brain, Settings, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    activeUsers: 2847,
    githubStars: 1623,
    totalProjects: 47,
    satisfaction: 98.7
  });

  // Live stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        githubStars: prev.githubStars + (Math.random() > 0.7 ? 1 : 0),
        totalProjects: prev.totalProjects,
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.03)
      }));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    { name: 'CodeFusion', icon: Code, color: 'text-emerald-400', category: 'DEV TOOLS' },
    { name: 'VitalitySync', icon: Heart, color: 'text-red-400', category: 'HEALTH TECH' },
    { name: 'MindMate', icon: Brain, color: 'text-purple-400', category: 'AI ASSISTANT' },
    { name: 'NestCore', icon: Building2, color: 'text-orange-400', category: 'ENTERPRISE' },
    { name: 'CloudSync', icon: Cloud, color: 'text-blue-400', category: 'CLOUD SERVICES' },
    { name: 'SecureShield', icon: Shield, color: 'text-cyan-400', category: 'SECURITY' },
    { name: 'DataFlow', icon: Database, color: 'text-yellow-400', category: 'ANALYTICS' },
    { name: 'MobileCore', icon: Smartphone, color: 'text-pink-400', category: 'MOBILE APPS' },
    { name: 'GameEngine', icon: Gamepad2, color: 'text-violet-400', category: 'GAMING' },
    { name: 'SystemOpt', icon: Settings, color: 'text-indigo-400', category: 'OPTIMIZATION' }
  ];

  const companyValues = [
    { icon: Rocket, label: "Innovation First", desc: "Cutting-edge solutions" },
    { icon: Shield, label: "Enterprise Grade", desc: "Professional quality" },
    { icon: Globe, label: "Global Impact", desc: "Worldwide reach" },
    { icon: Zap, label: "Performance", desc: "Lightning fast delivery" }
  ];

  return (
    <section className="py-12 bg-zinc-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Premium ambient lighting effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/12 to-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-orange-500/12 to-amber-500/10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/8 to-blue-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Floating tech elements */}
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-emerald-400/50 rounded-full animate-pulse border border-emerald-400/30"></div>
        <div className="absolute top-1/3 right-1/5 w-4 h-4 bg-cyan-400/50 transform rotate-45 animate-pulse border border-cyan-400/30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-orange-400/50 rounded-full animate-pulse border border-orange-400/20" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-purple-400/50 transform rotate-12 animate-pulse border border-purple-400/20" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Studio Header with Company Identity */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-zinc-800/95 border border-emerald-500/60 px-4 py-2 mb-4 backdrop-blur-sm hover:bg-zinc-700/95 hover:border-emerald-400/80 transition-all duration-300">
            <Hexagon className="w-4 h-4 mr-2 text-emerald-400" />
            <span className="text-emerald-400 font-black text-sm font-mono tracking-widest">JBLINX STUDIO HQ</span>
            <div className="ml-2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            PROFESSIONAL <span className="text-emerald-400 glow-text">TECHNOLOGY</span> SOLUTIONS
          </h1>
          
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-20 h-0.5 bg-emerald-400/60"></div>
            <Trophy className="w-5 h-5 text-emerald-400" />
            <div className="w-20 h-0.5 bg-emerald-400/60"></div>
          </div>
          
          <p className="text-base text-zinc-300 max-w-2xl mx-auto mb-6 leading-relaxed">
            <span className="text-emerald-400 font-bold">Elite development ecosystem</span> creating flagship products across 
            <span className="text-cyan-400 font-semibold"> web applications</span>, 
            <span className="text-purple-400 font-semibold"> mobile platforms</span>, 
            <span className="text-orange-400 font-semibold"> gaming experiences</span>, and 
            <span className="text-blue-400 font-semibold"> enterprise solutions</span>
          </p>

          {/* Enhanced Company Values Strip */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group bg-zinc-800/90 border border-zinc-700/60 px-3 py-2 hover:bg-zinc-700/90 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-3 h-3 text-emerald-400 group-hover:scale-125 transition-transform duration-300" />
                    <div>
                      <div className="text-white text-xs font-bold">{value.label}</div>
                      <div className="text-zinc-400 text-xs">{value.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Product Ecosystem Showcase */}
          <div className="mb-6">
            <div className="text-zinc-400 text-xs font-mono font-bold tracking-widest mb-3">FLAGSHIP PRODUCT ECOSYSTEM</div>
            <div className="flex flex-wrap justify-center gap-1">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <div key={index} className="group bg-zinc-800/95 border border-zinc-700/70 px-3 py-2 hover:bg-zinc-700/95 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`w-3 h-3 ${product.color} group-hover:scale-125 transition-transform duration-300`} />
                      <div className="text-left">
                        <div className={`${product.color} text-xs font-bold group-hover:text-white transition-colors duration-300`}>
                          {product.name}
                        </div>
                        <div className="text-zinc-500 text-xs font-mono">{product.category}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Live Performance Stats */}
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            {[
              { icon: Trophy, value: "10", label: "FLAGSHIP PRODUCTS", color: "emerald", desc: "Active Solutions" },
              { icon: Users, value: liveStats.activeUsers.toLocaleString(), label: "ACTIVE USERS", color: "cyan", live: true, desc: "Global Reach" },
              { icon: Star, value: liveStats.githubStars.toLocaleString(), label: "GITHUB STARS", color: "yellow", live: true, desc: "Community Love" },
              { icon: Award, value: `${liveStats.satisfaction.toFixed(1)}%`, label: "CLIENT SATISFACTION", color: "purple", desc: "Excellence Rating" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = {
                emerald: "border-emerald-500/60 bg-zinc-800/95 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-400/80",
                cyan: "border-cyan-500/60 bg-zinc-800/95 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/80",
                yellow: "border-yellow-500/60 bg-zinc-800/95 text-yellow-400 hover:bg-yellow-500/20 hover:border-yellow-400/80",
                purple: "border-purple-500/60 bg-zinc-800/95 text-purple-400 hover:bg-purple-500/20 hover:border-purple-400/80"
              };
              return (
                <div key={index} className={`${colorClasses[stat.color]} border backdrop-blur-sm p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}>
                  <IconComponent className="w-4 h-4 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                  <div className="text-sm font-black flex items-center justify-center space-x-1 font-mono mb-1">
                    <span>{stat.value}</span>
                    {stat.live && <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></div>}
                  </div>
                  <div className="text-xs font-bold opacity-90 mb-1">{stat.label}</div>
                  <div className="text-xs opacity-70">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Left Panel - Development Console */}
          <div className="bg-zinc-800/95 border border-zinc-700/70 backdrop-blur-sm p-5 hover:bg-zinc-800/100 hover:border-zinc-600/70 transition-all duration-300 group">
            <div className="flex items-center space-x-3 mb-4">
              <Monitor className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-emerald-400 font-black text-base font-mono tracking-wide">DEVELOPMENT CONSOLE</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
            </div>
            <ProfessionalTerminal />
            <div className="mt-4 text-xs text-zinc-400 font-mono">
              Real-time development environment showcasing our technical capabilities
            </div>
          </div>

          {/* Right Panel - Enhanced Mission Control */}
          <div className="bg-zinc-800/95 border border-zinc-700/70 backdrop-blur-sm p-5 hover:bg-zinc-800/100 hover:border-zinc-600/70 transition-all duration-300 group">
            <div className="flex items-center space-x-3 mb-4">
              <Activity className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-emerald-400 font-black text-base font-mono tracking-wide">MISSION CONTROL</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
            </div>

            <div className="space-y-3">
              <div className="bg-zinc-700/70 border border-emerald-400/40 p-4 hover:bg-zinc-700/90 hover:border-emerald-400/60 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    <span className="text-white font-bold text-sm font-mono">GLOBAL OPERATIONS</span>
                  </div>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-emerald-400 text-xs">All systems operational • 99.9% uptime • 24/7 monitoring</div>
              </div>

              <div className="bg-zinc-700/70 border border-cyan-400/40 p-4 hover:bg-zinc-700/90 hover:border-cyan-400/60 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <span className="text-white font-bold text-sm font-mono">ACTIVE PORTFOLIO</span>
                  </div>
                  <div className="text-cyan-400 text-xs font-bold">47 PRODUCTS</div>
                </div>
                <div className="text-cyan-400 text-xs">Multi-platform solutions • 150k+ global users • Enterprise grade</div>
              </div>

              <div className="bg-zinc-700/70 border border-purple-400/40 p-4 hover:bg-zinc-700/90 hover:border-purple-400/60 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Rocket className="w-4 h-4 text-purple-400" />
                    <span className="text-white font-bold text-sm font-mono">INNOVATION PIPELINE</span>
                  </div>
                  <div className="text-purple-400 text-xs font-bold">CONTINUOUS</div>
                </div>
                <div className="text-purple-400 text-xs">Agile development • Weekly releases • Future-ready tech stack</div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-600/50 mt-4">
              <Link to="/blog" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black px-5 py-3 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
                <Rocket className="w-4 h-4" />
                <span>EXPLORE FULL ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a href="https://github.com/orgs/JBLinx-Studio/repositories" target="_blank" rel="noopener noreferrer" className="bg-zinc-700/80 border border-emerald-400/70 text-emerald-400 hover:bg-zinc-600/80 hover:border-emerald-300 hover:text-emerald-300 px-5 py-3 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                <Github className="w-4 h-4" />
                <span>VIEW OPEN SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA with Company Mission */}
        <div className="text-center">
          <div className="mb-6">
            <div className="text-zinc-400 text-sm font-mono font-bold tracking-widest mb-2">READY TO EXPERIENCE EXCELLENCE?</div>
            <p className="text-zinc-300 text-sm max-w-3xl mx-auto">
              Join thousands of satisfied clients who trust JBLinx Studio for their most critical technology needs. 
              From concept to deployment, we deliver <span className="text-emerald-400 font-bold">professional-grade solutions</span> that drive real business results.
            </p>
          </div>
          
          <Link to="/blog" className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:via-cyan-400 hover:to-blue-400 text-black px-8 py-4 font-black transition-all duration-300 space-x-3 shadow-xl text-base hover:scale-105 hover:shadow-emerald-500/30 group">
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            <span>DISCOVER OUR COMPLETE PORTFOLIO</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          <div className="mt-4 text-xs text-zinc-500 font-mono">
            Professional • Reliable • Innovative • Results-Driven
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
