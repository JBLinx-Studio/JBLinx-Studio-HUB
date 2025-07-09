
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, Terminal, Cpu, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    activeUsers: 2847,
    githubStars: 1623,
    totalProjects: 47,
    satisfaction: 98.7
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [glitchText, setGlitchText] = useState(false);

  // Live stats animation with more realistic updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) - 2,
        githubStars: prev.githubStars + (Math.random() > 0.8 ? 1 : 0),
        totalProjects: prev.totalProjects,
        satisfaction: Math.min(99.9, Math.max(98.0, prev.satisfaction + (Math.random() - 0.5) * 0.1))
      }));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Real-time clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Glitch effect for text
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchText(true);
      setTimeout(() => setGlitchText(false), 200);
    }, 8000);
    return () => clearInterval(glitchInterval);
  }, []);

  const products = [
    { name: 'CodeFusion', icon: Code, color: 'text-emerald-400', status: 'LIVE' },
    { name: 'VitalitySync', icon: Heart, color: 'text-red-400', status: 'BETA' },
    { name: 'MindMate', icon: Gamepad2, color: 'text-purple-400', status: 'DEV' },
    { name: 'NestCore', icon: Building2, color: 'text-orange-400', status: 'LIVE' }
  ];

  const systemStatus = [
    { label: 'API', status: 'OPERATIONAL', color: 'text-emerald-400', pulse: true },
    { label: 'CDN', status: 'HEALTHY', color: 'text-emerald-400', pulse: false },
    { label: 'DB', status: 'OPTIMAL', color: 'text-emerald-400', pulse: true },
    { label: 'CACHE', status: 'ACTIVE', color: 'text-cyan-400', pulse: false }
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Studio Header with Clock */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="inline-flex items-center bg-slate-800/95 border border-emerald-500/50 px-3 py-1 backdrop-blur-sm hover:border-emerald-400 transition-all duration-300">
              <Trophy className="w-3 h-3 mr-1 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">JBLINX STUDIO HQ</span>
            </div>
            
            <div className="inline-flex items-center bg-slate-900/95 border border-cyan-500/30 px-3 py-1 backdrop-blur-sm">
              <Terminal className="w-3 h-3 mr-1 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-xs font-mono">
                {currentTime.toLocaleTimeString('en-US', { hour12: false })}
              </span>
            </div>
          </div>
          
          <h1 className={`text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-2 transition-all duration-200 ${glitchText ? 'animate-pulse text-emerald-400' : ''}`}>
            PROFESSIONAL <span className="text-emerald-400">SOLUTIONS</span> + <span className="text-cyan-400">REAL INNOVATION</span>
          </h1>
          
          <div className="w-20 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-3 animate-pulse"></div>
          
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            Elite development ecosystem creating flagship products across web, mobile, gaming, and enterprise solutions
          </p>

          {/* Enhanced Product Showcase with Status */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="group relative bg-slate-800/80 px-3 py-2 border border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <IconComponent className={`w-4 h-4 ${product.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className={`${product.color} text-xs font-bold group-hover:text-white transition-colors duration-300`}>
                      {product.name}
                    </span>
                    <span className={`text-xs px-1 py-0.5 ${product.status === 'LIVE' ? 'bg-emerald-500/20 text-emerald-400' : product.status === 'BETA' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-purple-500/20 text-purple-400'}`}>
                      {product.status}
                    </span>
                  </div>
                  {product.status === 'LIVE' && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Enhanced Live Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto mb-5">
            {[
              { icon: Trophy, value: "5", label: "FLAGSHIP", color: "emerald", description: "Active Products" },
              { icon: Users, value: liveStats.activeUsers.toLocaleString(), label: "ACTIVE", color: "cyan", live: true, description: "Live Users" },
              { icon: Star, value: liveStats.githubStars.toLocaleString(), label: "STARS", color: "yellow", live: true, description: "GitHub Stars" },
              { icon: Award, value: `${liveStats.satisfaction.toFixed(1)}%`, label: "RATING", color: "purple", description: "Satisfaction" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = {
                emerald: "border-emerald-400/40 bg-emerald-500/10 text-emerald-400 hover:border-emerald-400",
                cyan: "border-cyan-400/40 bg-cyan-500/10 text-cyan-400 hover:border-cyan-400",
                yellow: "border-yellow-400/40 bg-yellow-500/10 text-yellow-400 hover:border-yellow-400",
                purple: "border-purple-400/40 bg-purple-500/10 text-purple-400 hover:border-purple-400"
              };
              
              return (
                <div key={index} className={`${colorClasses[stat.color]} border-2 backdrop-blur-sm p-2 text-center transition-all duration-300 hover:scale-110 hover:shadow-xl group cursor-pointer relative`}>
                  <IconComponent className={`w-4 h-4 mx-auto mb-1 group-hover:scale-125 transition-transform duration-300`} />
                  <div className="text-xs font-black flex items-center justify-center space-x-1 font-mono">
                    <span>{stat.value}</span>
                    {stat.live && <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>}
                  </div>
                  <div className="text-xs font-bold mt-0.5 opacity-80">{stat.label}</div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          {/* Left Panel - Terminal */}
          <div className="lg:col-span-2 bg-slate-800/95 border border-slate-700 p-4 hover:border-emerald-400/30 transition-all duration-300">
            <ProfessionalTerminal />
          </div>

          {/* Right Panel - Enhanced Control Center */}
          <div className="bg-slate-800/95 border border-slate-700 p-4 space-y-4 hover:border-emerald-400/30 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-3">
              <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-black text-sm font-mono">MISSION CONTROL</span>
            </div>

            {/* System Status */}
            <div className="space-y-2">
              <div className="bg-slate-700/50 p-3 border-l-2 border-emerald-400">
                <div className="text-white font-bold text-sm font-mono mb-2">SYSTEM STATUS</div>
                <div className="grid grid-cols-2 gap-2">
                  {systemStatus.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">{item.label}</span>
                      <div className="flex items-center space-x-1">
                        <span className={item.color}>{item.status}</span>
                        {item.pulse && <div className={`w-1 h-1 ${item.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>}
                      </div>
                    </div>
                  ))}
                </div>
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

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-4 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-lg group"
              >
                <Rocket className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-emerald-400/60 text-emerald-400 hover:border-emerald-300 hover:text-emerald-300 hover:bg-emerald-400/10 px-4 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 group"
              >
                <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA with Sparkles */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-black px-6 py-3 font-black transition-all duration-500 space-x-2 shadow-lg text-sm hover:scale-105 hover:shadow-xl group animate-gradient-x"
            style={{
              backgroundSize: '200% 100%',
              animation: 'gradient-x 3s ease infinite'
            }}
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            <span>DISCOVER ALL PRODUCTS & SERVICES</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
