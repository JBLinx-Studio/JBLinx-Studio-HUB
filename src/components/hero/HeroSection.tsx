import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity } from 'lucide-react';
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
    { name: 'NestCore', icon: Building2, color: 'text-orange-400' }
  ];

  return (
    <section className="py-6 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 full-width-cinematic">
      <div className="w-full max-w-none px-4 lg:px-8">
        {/* Compact Studio Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-slate-800/95 border border-emerald-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">JBLINX STUDIO HQ</span>
          </div>
          
          <h1 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PROFESSIONAL <span className="text-emerald-400">SOLUTIONS</span> + <span className="text-cyan-400">REAL INNOVATION</span>
          </h1>
          
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-4xl mx-auto mb-3">
            Elite development ecosystem creating flagship products across web, mobile, gaming, and enterprise solutions
          </p>

          {/* Product Showcase - Compact */}
          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="flex items-center space-x-1 group bg-slate-800/80 px-2 py-1 border border-slate-700">
                  <IconComponent className={`w-3 h-3 ${product.color} group-hover:scale-125 transition-transform duration-300`} />
                  <span className={`${product.color} text-xs font-bold group-hover:text-white transition-colors duration-300`}>
                    {product.name}
                  </span>
                  {index < products.length - 1 && <span className="text-slate-600 mx-1">•</span>}
                </div>
              );
            })}
          </div>

          {/* Live Stats - Gaming Style */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
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
                <div key={index} className={`${colorClasses[stat.color]} border-2 backdrop-blur-sm p-1.5 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}>
                  <IconComponent className={`w-3 h-3 mx-auto mb-0.5 group-hover:scale-125 transition-transform duration-300`} />
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

        {/* Main Content Grid - Full Width */}
        <div className="grid lg:grid-cols-2 gap-6 mb-5 w-full">
          {/* Left Panel - Terminal */}
          <div className="bg-slate-800/95 border border-slate-700 p-4 w-full">
            <ProfessionalTerminal />
          </div>

          {/* Right Panel - Action Center */}
          <div className="bg-slate-800/95 border border-slate-700 p-4 space-y-3 w-full">
            <div className="flex items-center space-x-2 mb-3">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-black text-sm font-mono">MISSION CONTROL</span>
            </div>

            <div className="space-y-2">
              <div className="bg-slate-700/50 p-2 border-l-2 border-emerald-400">
                <div className="text-white font-bold text-sm font-mono mb-1">SYSTEM STATUS</div>
                <div className="text-emerald-400 text-xs">All systems operational • 99.9% uptime</div>
              </div>

              <div className="bg-slate-700/50 p-2 border-l-2 border-cyan-400">
                <div className="text-white font-bold text-sm font-mono mb-1">ACTIVE PROJECTS</div>
                <div className="text-cyan-400 text-xs">47 flagship products • 150k+ users served</div>
              </div>

              <div className="bg-slate-700/50 p-2 border-l-2 border-purple-400">
                <div className="text-white font-bold text-sm font-mono mb-1">DEVELOPMENT CYCLE</div>
                <div className="text-purple-400 text-xs">Continuous deployment • Weekly releases</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-4 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Rocket className="w-4 h-4" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-emerald-400/60 text-emerald-400 hover:border-emerald-300 hover:text-emerald-300 hover:bg-emerald-400/10 px-4 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Zap className="w-3 h-3" />
            <span>DISCOVER ALL PRODUCTS & SERVICES</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
