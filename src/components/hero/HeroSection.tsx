import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, Shield, Database, Globe, Cpu, Smartphone, Monitor, Cloud } from 'lucide-react';
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
    { name: 'CodeFusion', icon: Code, color: 'text-emerald-400' },
    { name: 'VitalitySync', icon: Heart, color: 'text-red-400' },
    { name: 'MindMate', icon: Gamepad2, color: 'text-purple-400' },
    { name: 'NestCore', icon: Building2, color: 'text-orange-400' },
    { name: 'CloudSync', icon: Cloud, color: 'text-blue-400' },
    { name: 'SecureShield', icon: Shield, color: 'text-cyan-400' },
    { name: 'DataFlow', icon: Database, color: 'text-yellow-400' },
    { name: 'MobileCore', icon: Smartphone, color: 'text-pink-400' }
  ];

  return (
    <section className="py-8 bg-zinc-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ambient lighting effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/8 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-amber-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-cyan-400/40 transform rotate-45 animate-pulse border border-cyan-400/30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-orange-400/40 rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Studio Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-zinc-800/90 border border-emerald-500/50 px-3 py-1 mb-3 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">JBLINX STUDIO HQ</span>
          </div>
          
          <h1 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-2">
            PROFESSIONAL <span className="text-emerald-400">SOLUTIONS</span> + <span className="text-cyan-400">REAL INNOVATION</span>
          </h1>
          
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-zinc-400 max-w-xl mx-auto mb-4">
            Elite development ecosystem creating flagship products across web, mobile, gaming, and enterprise solutions
          </p>

          {/* Enhanced Product Showcase - Keep compact but add more products */}
          <div className="flex flex-wrap justify-center gap-1 mb-4">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="flex items-center space-x-1 group bg-zinc-800/90 border border-zinc-700/60 px-2 py-1 hover:bg-zinc-700/60 hover:border-emerald-400/40 transition-all duration-300">
                  <IconComponent className={`w-3 h-3 ${product.color} group-hover:scale-125 transition-transform duration-300`} />
                  <span className={`${product.color} text-xs font-bold group-hover:text-white transition-colors duration-300`}>
                    {product.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Enhanced Live Stats - Keep intact but improve styling */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-5">
            {[
              { icon: Trophy, value: "8", label: "FLAGSHIP", color: "emerald" },
              { icon: Users, value: liveStats.activeUsers.toLocaleString(), label: "ACTIVE", color: "cyan", live: true },
              { icon: Star, value: liveStats.githubStars.toLocaleString(), label: "STARS", color: "yellow", live: true },
              { icon: Award, value: `${liveStats.satisfaction.toFixed(1)}%`, label: "RATING", color: "purple" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = {
                emerald: "border-emerald-400/50 bg-zinc-800/90 text-emerald-400 hover:bg-emerald-500/20",
                cyan: "border-cyan-400/50 bg-zinc-800/90 text-cyan-400 hover:bg-cyan-500/20",
                yellow: "border-yellow-400/50 bg-zinc-800/90 text-yellow-400 hover:bg-yellow-500/20",
                purple: "border-purple-400/50 bg-zinc-800/90 text-purple-400 hover:bg-purple-500/20"
              };
              return (
                <div key={index} className={`${colorClasses[stat.color]} border backdrop-blur-sm p-2 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}>
                  <IconComponent className={`w-3 h-3 mx-auto mb-1 group-hover:scale-125 transition-transform duration-300`} />
                  <div className="text-xs font-black flex items-center justify-center space-x-1 font-mono">
                    <span>{stat.value}</span>
                    {stat.live && <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>}
                  </div>
                  <div className="text-xs font-bold mt-0.5 opacity-80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          {/* Left Panel - Terminal */}
          <div className="bg-zinc-800/90 border border-zinc-700/60 backdrop-blur-sm p-4 hover:bg-zinc-800/95 hover:border-zinc-600/60 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-3">
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-black text-sm font-mono">DEVELOPMENT CONSOLE</span>
            </div>
            <ProfessionalTerminal />
          </div>

          {/* Right Panel - Enhanced Mission Control */}
          <div className="bg-zinc-800/90 border border-zinc-700/60 backdrop-blur-sm p-4 space-y-3 hover:bg-zinc-800/95 hover:border-zinc-600/60 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-3">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-black text-sm font-mono">MISSION CONTROL</span>
            </div>

            <div className="space-y-2">
              <div className="bg-zinc-700/60 border border-emerald-400/30 p-3 hover:bg-zinc-700/80 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-1">
                  <Globe className="w-3 h-3 text-emerald-400" />
                  <span className="text-white font-bold text-sm font-mono">SYSTEM STATUS</span>
                </div>
                <div className="text-emerald-400 text-xs">All systems operational • 99.9% uptime</div>
              </div>

              <div className="bg-zinc-700/60 border border-cyan-400/30 p-3 hover:bg-zinc-700/80 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-1">
                  <Cpu className="w-3 h-3 text-cyan-400" />
                  <span className="text-white font-bold text-sm font-mono">ACTIVE PROJECTS</span>
                </div>
                <div className="text-cyan-400 text-xs">47 flagship products • 150k+ users served</div>
              </div>

              <div className="bg-zinc-700/60 border border-purple-400/30 p-3 hover:bg-zinc-700/80 transition-all duration-300">
                <div className="flex items-center space-x-2 mb-1">
                  <Rocket className="w-3 h-3 text-purple-400" />
                  <span className="text-white font-bold text-sm font-mono">DEVELOPMENT CYCLE</span>
                </div>
                <div className="text-purple-400 text-xs">Continuous deployment • Weekly releases</div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/blog" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-4 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                <Rocket className="w-4 h-4" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a href="https://github.com/orgs/JBLinx-Studio/repositories" target="_blank" rel="noopener noreferrer" className="bg-zinc-700/60 border border-emerald-400/60 text-emerald-400 hover:bg-zinc-600/60 hover:border-emerald-300 hover:text-emerald-300 px-4 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2">
                <Github className="w-4 h-4" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <Link to="/blog" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-6 py-3 font-black transition-all duration-300 space-x-2 shadow-lg text-sm hover:scale-105 hover:shadow-emerald-500/25">
            <Zap className="w-4 h-4" />
            <span>DISCOVER ALL PRODUCTS & SERVICES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
