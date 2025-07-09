
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl rounded-full animate-pulse delay-1000"></div>
        
        {/* Dynamic grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.15) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.15) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 w-full items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Studio Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 backdrop-blur-sm px-8 py-4 rounded-2xl transition-all duration-500 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-400/25 group">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-4 animate-pulse"></div>
              <Hexagon className="w-6 h-6 text-emerald-400 mr-4 group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-emerald-400 font-bold text-lg font-mono tracking-wider">JBLINX STUDIO</span>
              <div className="ml-6 flex items-center space-x-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400/70 text-sm font-medium">LIVE</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 animate-pulse">
                  JBLinx
                </span>
                <br />
                <span className="text-white/90">Studio</span>
              </h1>
              
              {/* Product Showcase */}
              <div className="flex flex-wrap items-center gap-4 text-xl font-bold">
                {products.map((product, index) => {
                  const IconComponent = product.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2 group">
                      <IconComponent className={`w-6 h-6 ${product.color} group-hover:scale-125 transition-transform duration-300`} />
                      <span className={`${product.color} group-hover:text-white transition-colors duration-300`}>
                        {product.name}
                      </span>
                      {index < products.length - 1 && <span className="text-slate-600 mx-2">•</span>}
                    </div>
                  );
                })}
              </div>
              
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-slate-100">
                Professional Solutions. Real Innovation. Premium Quality.
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Elite development ecosystem creating flagship products across development tools, 
              health tech, gaming platforms, and property management solutions.
            </p>
            
            {/* Live Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl">
              {[
                { value: "5", label: "FLAGSHIP", icon: Trophy, color: "emerald" },
                { value: liveStats.activeUsers.toLocaleString(), label: "ACTIVE USERS", icon: Users, color: "cyan", live: true },
                { value: liveStats.githubStars.toLocaleString(), label: "GITHUB STARS", icon: Star, color: "yellow", live: true },
                { value: `${liveStats.satisfaction.toFixed(1)}%`, label: "SATISFACTION", icon: Award, color: "purple" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                const colorClasses = {
                  emerald: "border-emerald-400/40 bg-emerald-500/10 text-emerald-400",
                  cyan: "border-cyan-400/40 bg-cyan-500/10 text-cyan-400",
                  yellow: "border-yellow-400/40 bg-yellow-500/10 text-yellow-400",
                  purple: "border-purple-400/40 bg-purple-500/10 text-purple-400"
                };
                
                return (
                  <div key={index} className={`${colorClasses[stat.color]} border-2 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-2xl group cursor-pointer`}>
                    <IconComponent className={`w-8 h-8 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300`} />
                    <div className="text-2xl font-black flex items-center justify-center space-x-2">
                      <span>{stat.value}</span>
                      {stat.live && <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>}
                    </div>
                    <div className="text-sm font-bold mt-2 opacity-80">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <Link 
                to="/blog" 
                className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black px-10 py-5 font-black text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/40 flex items-center space-x-4 hover:scale-105 transform rounded-2xl border-2 border-white/20"
              >
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-3 border-emerald-400/60 text-emerald-400 hover:border-emerald-300 hover:text-emerald-300 hover:bg-emerald-400/10 px-10 py-5 font-black text-xl transition-all duration-300 flex items-center space-x-4 hover:scale-105 transform rounded-2xl backdrop-blur-sm"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Panel - Terminal */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl">
              <ProfessionalTerminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
