
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, Terminal, Monitor, Database, Cloud } from 'lucide-react';
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
    { name: 'CodeFusion', icon: Code, color: 'text-emerald-400', category: 'Development' },
    { name: 'VitalitySync', icon: Heart, color: 'text-red-400', category: 'Health Tech' },
    { name: 'MindMate', icon: Gamepad2, color: 'text-purple-400', category: 'Gaming' },
    { name: 'NestCore', icon: Building2, color: 'text-orange-400', category: 'PropTech' }
  ];

  const services = [
    { name: 'Web Development', icon: Monitor, count: '15+', color: 'text-blue-400' },
    { name: 'Game Development', icon: Gamepad2, count: '8+', color: 'text-purple-400' },
    { name: 'Backend Systems', icon: Database, count: '12+', color: 'text-emerald-400' },
    { name: 'Cloud Solutions', icon: Cloud, count: '10+', color: 'text-cyan-400' }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Enhanced Studio Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/95 border border-emerald-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Trophy className="w-4 h-4 mr-2 text-emerald-400" />
            <span className="text-emerald-400 font-black text-sm font-mono tracking-widest">JBLINX STUDIO HQ</span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-2">
            PROFESSIONAL <span className="text-emerald-400">SOLUTIONS</span> + <span className="text-cyan-400">REAL INNOVATION</span>
          </h1>
          
          <div className="w-20 h-0.5 bg-emerald-400 mx-auto mb-4"></div>
          
          <p className="text-base text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Elite development ecosystem creating flagship products across web, mobile, gaming, and enterprise solutions. 
            Transforming ideas into industry-leading digital experiences.
          </p>

          {/* Enhanced Product Showcase */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="bg-slate-800/80 border border-slate-700/50 p-4 hover:border-emerald-400/50 transition-all duration-300 group backdrop-blur-sm">
                  <IconComponent className={`w-6 h-6 ${product.color} mx-auto mb-2 group-hover:scale-125 transition-transform duration-300`} />
                  <div className={`${product.color} text-sm font-bold mb-1 group-hover:text-white transition-colors duration-300`}>
                    {product.name}
                  </div>
                  <div className="text-slate-500 text-xs font-mono">{product.category}</div>
                </div>
              );
            })}
          </div>

          {/* Live Stats - Enhanced */}
          <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto mb-8">
            {[
              { icon: Trophy, value: "5", label: "FLAGSHIP", color: "emerald" },
              { icon: Users, value: liveStats.activeUsers.toLocaleString(), label: "ACTIVE", color: "cyan", live: true },
              { icon: Star, value: liveStats.githubStars.toLocaleString(), label: "STARS", color: "yellow", live: true },
              { icon: Award, value: `${liveStats.satisfaction.toFixed(1)}%`, label: "RATING", color: "purple" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = {
                emerald: "border-emerald-400/40 bg-emerald-500/10 text-emerald-400",
                cyan: "border-cyan-400/40 bg-cyan-500/10 text-cyan-400",
                yellow: "border-yellow-400/40 bg-yellow-500/10 text-yellow-400",
                purple: "border-purple-400/40 bg-purple-500/10 text-purple-400"
              };
              return (
                <div key={index} className={`${colorClasses[stat.color]} border-2 backdrop-blur-sm p-3 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}>
                  <IconComponent className="w-4 h-4 mx-auto mb-1 group-hover:scale-125 transition-transform duration-300" />
                  <div className="text-sm font-black flex items-center justify-center space-x-1 font-mono">
                    <span>{stat.value}</span>
                    {stat.live && <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>}
                  </div>
                  <div className="text-xs font-bold mt-1 opacity-80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Left Panel - Terminal */}
          <div className="lg:col-span-2 bg-slate-800/95 border border-slate-700/50 p-4">
            <ProfessionalTerminal />
          </div>

          {/* Right Panel - Enhanced Action Center */}
          <div className="bg-slate-800/95 border border-slate-700/50 p-6 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-black text-base font-mono">MISSION CONTROL</span>
            </div>

            {/* System Status */}
            <div className="space-y-3 mb-6">
              <div className="bg-slate-700/50 p-3 border-l-2 border-emerald-400">
                <div className="text-white font-bold text-sm font-mono mb-1">SYSTEM STATUS</div>
                <div className="text-emerald-400 text-xs">All systems operational • 99.9% uptime</div>
              </div>

              <div className="bg-slate-700/50 p-3 border-l-2 border-cyan-400">
                <div className="text-white font-bold text-sm font-mono mb-1">ACTIVE PROJECTS</div>
                <div className="text-cyan-400 text-xs">47 flagship products • 150k+ users served</div>
              </div>

              <div className="bg-slate-700/50 p-3 border-l-2 border-purple-400">
                <div className="text-white font-bold text-sm font-mono mb-1">DEVELOPMENT CYCLE</div>
                <div className="text-purple-400 text-xs">Continuous deployment • Weekly releases</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link to="/blog" className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-4 py-3 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2">
                <Rocket className="w-4 h-4" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a href="https://github.com/orgs/JBLinx-Studio/repositories" target="_blank" rel="noopener noreferrer" className="w-full border border-emerald-400/60 text-emerald-400 hover:border-emerald-300 hover:text-emerald-300 hover:bg-emerald-400/10 px-4 py-3 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2">
                <Github className="w-4 h-4" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-slate-800/80 border border-slate-700/50 p-4 text-center hover:border-orange-400/50 transition-all duration-300 group backdrop-blur-sm">
                <IconComponent className={`w-6 h-6 ${service.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                <div className="text-white font-bold text-sm font-mono mb-1">{service.name}</div>
                <div className={`${service.color} text-xs font-bold`}>{service.count} PROJECTS</div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/blog" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-6 py-3 font-black transition-all duration-300 space-x-2 shadow-lg">
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
