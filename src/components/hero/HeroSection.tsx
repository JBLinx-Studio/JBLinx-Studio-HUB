
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, Monitor, Server, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    activeUsers: 2847,
    githubStars: 1623,
    totalProjects: 47,
    satisfaction: 98.7
  });

  const [selectedCategory, setSelectedCategory] = useState('products');

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

  const showcaseData = {
    products: [
      { name: 'CodeFusion', icon: Code, color: 'text-emerald-400', status: 'ACTIVE' },
      { name: 'VitalitySync', icon: Heart, color: 'text-red-400', status: 'BETA' },
      { name: 'MindMate', icon: Gamepad2, color: 'text-purple-400', status: 'LIVE' },
      { name: 'NestCore', icon: Building2, color: 'text-orange-400', status: 'PRO' }
    ],
    services: [
      { name: 'Cloud Deploy', icon: Server, color: 'text-cyan-400', status: '24/7' },
      { name: 'Database Pro', icon: Database, color: 'text-green-400', status: 'SCALE' },
      { name: 'Web Platform', icon: Globe, color: 'text-blue-400', status: 'READY' },
      { name: 'Dev Tools', icon: Monitor, color: 'text-yellow-400', status: 'PLUS' }
    ]
  };

  return (
    <section className="py-8 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-t border-zinc-700">
      <div className="container mx-auto px-4">
        {/* Header Badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-zinc-800/90 border border-orange-500/40 px-4 py-2 mb-4 backdrop-blur-sm">
            <Trophy className="w-4 h-4 mr-2 text-orange-400" />
            <span className="text-orange-400 font-black text-sm font-mono tracking-widest">JBLINX STUDIO HQ</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-3">
            PROFESSIONAL <span className="text-orange-400">SOLUTIONS</span><br/>
            + <span className="text-cyan-400">REAL INNOVATION</span>
          </h1>
          
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-cyan-400 mx-auto mb-4"></div>
          
          <p className="text-zinc-300 max-w-2xl mx-auto mb-6 text-lg">
            Elite development ecosystem creating flagship products across web, mobile, gaming, and enterprise solutions
          </p>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          {/* Terminal Panel */}
          <div className="lg:col-span-2 bg-zinc-800/90 border border-zinc-600 backdrop-blur-sm">
            <div className="p-3 border-b border-zinc-600">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-zinc-400 font-mono text-sm">STUDIO TERMINAL</span>
              </div>
            </div>
            <div className="p-4">
              <ProfessionalTerminal />
            </div>
          </div>

          {/* Stats & Status Panel */}
          <div className="bg-zinc-800/90 border border-zinc-600 backdrop-blur-sm">
            <div className="p-3 border-b border-zinc-600">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-400 font-black text-sm font-mono">LIVE STATUS</span>
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              {/* Live Stats */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Users, value: liveStats.activeUsers.toLocaleString(), label: 'USERS', color: 'cyan' },
                  { icon: Star, value: liveStats.githubStars.toLocaleString(), label: 'STARS', color: 'yellow' },
                  { icon: Trophy, value: '47', label: 'APPS', color: 'green' },
                  { icon: Award, value: `${liveStats.satisfaction.toFixed(1)}%`, label: 'UPTIME', color: 'purple' }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  const colorClasses = {
                    cyan: 'text-cyan-400 border-cyan-400/30',
                    yellow: 'text-yellow-400 border-yellow-400/30',
                    green: 'text-green-400 border-green-400/30',
                    purple: 'text-purple-400 border-purple-400/30'
                  };
                  return (
                    <div key={index} className={`bg-zinc-900/60 border ${colorClasses[stat.color]} p-2 text-center`}>
                      <IconComponent className={`w-3 h-3 mx-auto mb-1 ${colorClasses[stat.color].split(' ')[0]}`} />
                      <div className="text-white font-black text-xs">{stat.value}</div>
                      <div className="text-zinc-400 text-xs">{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* System Status */}
              <div className="space-y-2">
                <div className="bg-zinc-900/50 border border-green-400/30 p-2">
                  <div className="text-green-400 font-bold text-xs mb-1">SYSTEM STATUS</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-zinc-300 text-xs">All systems operational</span>
                  </div>
                </div>
                
                <div className="bg-zinc-900/50 border border-orange-400/30 p-2">
                  <div className="text-orange-400 font-bold text-xs mb-1">DEPLOYMENT</div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                    <span className="text-zinc-300 text-xs">Continuous delivery active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase Categories */}
        <div className="grid lg:grid-cols-2 gap-4 mb-6">
          {/* Category Selector */}
          <div className="bg-zinc-800/90 border border-zinc-600 backdrop-blur-sm">
            <div className="p-3 border-b border-zinc-600">
              <div className="flex space-x-1">
                {[
                  { key: 'products', label: 'PRODUCTS', icon: Rocket },
                  { key: 'services', label: 'SERVICES', icon: Server }
                ].map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setSelectedCategory(tab.key)}
                      className={`flex items-center space-x-2 px-3 py-2 font-bold text-sm transition-all ${
                        selectedCategory === tab.key
                          ? 'bg-orange-400 text-black'
                          : 'text-zinc-300 hover:text-white hover:bg-zinc-700/50'
                      }`}
                    >
                      <IconComponent className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-2 gap-2">
                {showcaseData[selectedCategory].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="bg-zinc-900/60 border border-zinc-600 p-3 hover:border-orange-400/50 transition-colors cursor-pointer group">
                      <div className="flex items-center space-x-2 mb-2">
                        <IconComponent className={`w-4 h-4 ${item.color} group-hover:scale-110 transition-transform`} />
                        <span className="text-white font-bold text-sm">{item.name}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`${item.color} text-xs font-bold px-2 py-1 bg-zinc-800 border border-current/30`}>
                          {item.status}
                        </span>
                        <ArrowRight className="w-3 h-3 text-zinc-500 group-hover:text-orange-400 transition-colors" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-zinc-800/90 border border-zinc-600 backdrop-blur-sm">
            <div className="p-3 border-b border-zinc-600">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-black text-sm font-mono">QUICK ACCESS</span>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <Link 
                to="/blog" 
                className="block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black px-4 py-3 font-black text-sm transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Rocket className="w-4 h-4" />
                    <span>EXPLORE ECOSYSTEM</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block border border-cyan-400/60 text-cyan-400 hover:border-cyan-300 hover:text-cyan-300 hover:bg-cyan-400/10 px-4 py-3 font-black text-sm transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE CODE</span>
                  </div>
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </div>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <Link 
                  to="/game-development" 
                  className="bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-2 font-bold text-sm transition-all border border-zinc-600 hover:border-purple-400/50 text-center"
                >
                  GAMES
                </Link>
                <Link 
                  to="/web-applications" 
                  className="bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-2 font-bold text-sm transition-all border border-zinc-600 hover:border-green-400/50 text-center"
                >
                  APPS
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 font-black text-lg transition-all duration-300 space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Hexagon className="w-5 h-5" />
            <span>DISCOVER ALL SOLUTIONS</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
