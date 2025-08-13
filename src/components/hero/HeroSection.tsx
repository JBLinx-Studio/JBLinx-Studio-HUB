
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, Shield, Database, Globe, Cpu, Smartphone, Monitor, Cloud, Brain, Settings, Layers, TrendingUp, Target, CheckCircle, Lightning } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    activeUsers: 18500,
    githubStars: 2847,
    totalProjects: 47,
    satisfaction: 99.7,
    revenue: 2.3
  });

  // Enhanced live stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) + 1,
        githubStars: prev.githubStars + (Math.random() > 0.8 ? 1 : 0),
        totalProjects: prev.totalProjects + (Math.random() > 0.95 ? 1 : 0),
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.02),
        revenue: prev.revenue + (Math.random() > 0.9 ? 0.1 : 0)
      }));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const flagshipProducts = [
    { name: 'CodeFusion', icon: Code, color: 'text-emerald-400', category: 'DEV TOOLS', users: '12.5k', status: 'ACTIVE' },
    { name: 'VitalitySync', icon: Heart, color: 'text-red-400', category: 'HEALTH TECH', users: '8.9k', status: 'SCALING' },
    { name: 'MindMate', icon: Brain, color: 'text-purple-400', category: 'AI GAMING', users: '15.2k', status: 'TRENDING' },
    { name: 'NestCore', icon: Building2, color: 'text-orange-400', category: 'ENTERPRISE', users: '6.1k', status: 'ENTERPRISE' },
    { name: 'CloudSync', icon: Cloud, color: 'text-blue-400', category: 'CLOUD SaaS', users: '22.3k', status: 'GROWING' },
    { name: 'SecureShield', icon: Shield, color: 'text-cyan-400', category: 'SECURITY', users: '4.7k', status: 'CRITICAL' },
    { name: 'DataFlow', icon: Database, color: 'text-yellow-400', category: 'ANALYTICS', users: '9.8k', status: 'STABLE' },
    { name: 'MobileCore', icon: Smartphone, color: 'text-pink-400', category: 'MOBILE', users: '13.6k', status: 'INNOVATIVE' }
  ];

  const companyAchievements = [
    { icon: TrendingUp, label: "Revenue Growth", desc: "380% YoY increase", color: "emerald" },
    { icon: Target, label: "Market Leader", desc: "Top 3 in 4 sectors", color: "blue" },
    { icon: CheckCircle, label: "Client Retention", desc: "97% satisfaction rate", color: "purple" },
    { icon: Lightning, label: "Innovation Speed", desc: "Weekly deployments", color: "orange" }
  ];

  const technologyStack = [
    { name: 'React/Next.js', proficiency: 98, color: 'bg-emerald-500' },
    { name: 'TypeScript', proficiency: 96, color: 'bg-blue-500' },
    { name: 'Node.js/Python', proficiency: 94, color: 'bg-green-500' },
    { name: 'Cloud Infrastructure', proficiency: 97, color: 'bg-purple-500' },
    { name: 'AI/ML Integration', proficiency: 92, color: 'bg-orange-500' },
    { name: 'DevOps/CI-CD', proficiency: 95, color: 'bg-cyan-500' }
  ];

  return (
    <section className="py-12 bg-slate-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/15 to-cyan-500/12 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/15 to-blue-500/12 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-orange-500/10 to-red-500/8 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>

        {/* Floating tech particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse border border-emerald-400/20`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Company Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/90 border border-emerald-500/50 px-6 py-3 mb-6 backdrop-blur-sm hover:bg-slate-700/90 hover:border-emerald-400/70 transition-all duration-300 shadow-lg shadow-emerald-500/10">
            <Hexagon className="w-5 h-5 mr-3 text-emerald-400 animate-pulse" />
            <span className="text-emerald-400 font-black text-base font-mono tracking-widest">JBLINX STUDIO ENTERPRISE HQ</span>
            <div className="ml-3 flex items-center space-x-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-xs font-mono">LIVE</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            ENTERPRISE-GRADE <span className="text-emerald-400 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">TECHNOLOGY</span>
            <br />
            <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">SOLUTIONS</span> COMPANY
          </h1>
          
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-emerald-400"></div>
            <Trophy className="w-6 h-6 text-emerald-400 animate-pulse" />
            <div className="text-emerald-400 font-black text-sm font-mono">INDUSTRY LEADER</div>
            <Trophy className="w-6 h-6 text-emerald-400 animate-pulse" />
            <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            <span className="text-emerald-400 font-bold">JBLinx Studio</span> delivers cutting-edge technology solutions across 
            <span className="text-cyan-400 font-semibold"> web development</span>, 
            <span className="text-purple-400 font-semibold"> mobile applications</span>, 
            <span className="text-orange-400 font-semibold"> gaming platforms</span>, 
            <span className="text-blue-400 font-semibold"> healthcare technology</span>, and 
            <span className="text-pink-400 font-semibold"> enterprise solutions</span> 
            — serving <span className="text-yellow-400 font-bold">18,500+ active users</span> globally with 
            <span className="text-emerald-400 font-bold">99.7% satisfaction</span> ratings.
          </p>

          {/* Company Achievements */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-8">
            {companyAchievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              const colorClasses = {
                emerald: "border-emerald-500/40 bg-slate-800/90 text-emerald-400 hover:bg-emerald-500/10",
                blue: "border-blue-500/40 bg-slate-800/90 text-blue-400 hover:bg-blue-500/10",
                purple: "border-purple-500/40 bg-slate-800/90 text-purple-400 hover:bg-purple-500/10",
                orange: "border-orange-500/40 bg-slate-800/90 text-orange-400 hover:bg-orange-500/10"
              };
              return (
                <div key={index} className={`${colorClasses[achievement.color]} border backdrop-blur-sm p-4 transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer`}>
                  <IconComponent className="w-5 h-5 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                  <div className="text-sm font-black mb-1 font-mono">{achievement.label}</div>
                  <div className="text-xs opacity-80">{achievement.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Flagship Products Showcase */}
          <div className="mb-8">
            <div className="text-slate-400 text-sm font-mono font-bold tracking-widest mb-4 flex items-center justify-center space-x-2">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>FLAGSHIP PRODUCT ECOSYSTEM</span>
              <Layers className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-5xl mx-auto">
              {flagshipProducts.map((product, index) => {
                const IconComponent = product.icon;
                const statusColors = {
                  'ACTIVE': 'bg-green-500',
                  'SCALING': 'bg-blue-500',
                  'TRENDING': 'bg-purple-500',
                  'ENTERPRISE': 'bg-orange-500',
                  'GROWING': 'bg-cyan-500',
                  'CRITICAL': 'bg-red-500',
                  'STABLE': 'bg-yellow-500',
                  'INNOVATIVE': 'bg-pink-500'
                };
                return (
                  <div key={index} className="group bg-slate-800/90 border border-slate-700/70 p-3 hover:bg-slate-700/90 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm hover:scale-105">
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent className={`w-4 h-4 ${product.color} group-hover:scale-125 transition-transform duration-300`} />
                      <div className="flex-1 text-left">
                        <div className={`${product.color} text-sm font-bold group-hover:text-white transition-colors duration-300`}>
                          {product.name}
                        </div>
                        <div className="text-slate-500 text-xs font-mono">{product.category}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-mono">{product.users} users</span>
                      <span className={`${statusColors[product.status]} text-black px-2 py-1 font-bold text-xs`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Live Performance Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 max-w-4xl mx-auto mb-8">
            {[
              { icon: Users, value: `${(liveStats.activeUsers / 1000).toFixed(1)}k`, label: "ACTIVE USERS", color: "cyan", live: true, desc: "Global Reach" },
              { icon: Star, value: `${(liveStats.githubStars / 1000).toFixed(1)}k`, label: "GITHUB STARS", color: "yellow", live: true, desc: "Community" },
              { icon: Rocket, value: liveStats.totalProjects.toString(), label: "LIVE PRODUCTS", color: "purple", desc: "Portfolio" },
              { icon: Award, value: `${liveStats.satisfaction.toFixed(1)}%`, label: "SATISFACTION", color: "emerald", desc: "Client Rating" },
              { icon: TrendingUp, value: `$${liveStats.revenue.toFixed(1)}M`, label: "PORTFOLIO VALUE", color: "orange", desc: "Revenue" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = {
                emerald: "border-emerald-500/50 bg-slate-800/90 text-emerald-400 hover:bg-emerald-500/20",
                cyan: "border-cyan-500/50 bg-slate-800/90 text-cyan-400 hover:bg-cyan-500/20",
                yellow: "border-yellow-500/50 bg-slate-800/90 text-yellow-400 hover:bg-yellow-500/20",
                purple: "border-purple-500/50 bg-slate-800/90 text-purple-400 hover:bg-purple-500/20",
                orange: "border-orange-500/50 bg-slate-800/90 text-orange-400 hover:bg-orange-500/20"
              };
              return (
                <div key={index} className={`${colorClasses[stat.color]} border backdrop-blur-sm p-3 text-center transition-all duration-300 hover:scale-110 hover:shadow-xl group cursor-pointer`}>
                  <IconComponent className="w-5 h-5 mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                  <div className="text-base font-black flex items-center justify-center space-x-1 font-mono mb-1">
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
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Left Panel - Enhanced Development Console */}
          <div className="bg-slate-800/90 border border-slate-700/70 backdrop-blur-sm p-6 hover:bg-slate-800/95 hover:border-slate-600/70 transition-all duration-300 group">
            <div className="flex items-center space-x-3 mb-5">
              <Monitor className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-emerald-400 font-black text-lg font-mono tracking-wide">ENTERPRISE DEVELOPMENT CONSOLE</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
              <div className="text-emerald-400 text-xs font-mono bg-slate-700/50 px-2 py-1 rounded">LIVE DEMO</div>
            </div>
            <ProfessionalTerminal />
            <div className="mt-4 text-sm text-slate-400 font-mono bg-slate-700/30 p-3 rounded border border-slate-600/30">
              <div className="text-emerald-400 font-bold mb-1">🚀 Real-time Development Environment</div>
              Showcasing our enterprise-grade technical capabilities, deployment metrics, and system architecture
            </div>
          </div>

          {/* Right Panel - Enhanced Technology Stack & Capabilities */}
          <div className="space-y-6">
            {/* Technology Proficiency */}
            <div className="bg-slate-800/90 border border-slate-700/70 backdrop-blur-sm p-6 hover:bg-slate-800/95 hover:border-slate-600/70 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-emerald-400 font-black text-base font-mono tracking-wide">TECHNOLOGY STACK MASTERY</span>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
              </div>

              <div className="space-y-3">
                {technologyStack.map((tech, index) => (
                  <div key={index} className="bg-slate-700/50 p-3 rounded border border-slate-600/30 hover:border-emerald-400/30 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-mono text-sm font-bold">{tech.name}</span>
                      <span className="text-emerald-400 font-bold text-sm">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-600/50 rounded-full h-2">
                      <div 
                        className={`${tech.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Control */}
            <div className="bg-slate-800/90 border border-slate-700/70 backdrop-blur-sm p-6 hover:bg-slate-800/95 hover:border-slate-600/70 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-emerald-400 font-black text-base font-mono tracking-wide">ENTERPRISE MISSION CONTROL</span>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
              </div>

              <div className="space-y-3">
                <div className="bg-slate-700/60 border border-emerald-400/40 p-4 hover:bg-slate-700/80 hover:border-emerald-400/60 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span className="text-white font-bold text-sm font-mono">GLOBAL OPERATIONS</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-400 text-xs font-bold">OPERATIONAL</span>
                    </div>
                  </div>
                  <div className="text-emerald-400 text-xs">6 continents • 99.97% uptime • 24/7 monitoring • Zero downtime deployments</div>
                </div>

                <div className="bg-slate-700/60 border border-cyan-400/40 p-4 hover:bg-slate-700/80 hover:border-cyan-400/60 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Layers className="w-4 h-4 text-cyan-400" />
                      <span className="text-white font-bold text-sm font-mono">ACTIVE PORTFOLIO</span>
                    </div>
                    <div className="text-cyan-400 text-xs font-bold">{liveStats.totalProjects} PRODUCTS</div>
                  </div>
                  <div className="text-cyan-400 text-xs">Multi-platform solutions • {(liveStats.activeUsers / 1000).toFixed(0)}k+ global users • Enterprise grade security</div>
                </div>

                <div className="bg-slate-700/60 border border-purple-400/40 p-4 hover:bg-slate-700/80 hover:border-purple-400/60 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Rocket className="w-4 h-4 text-purple-400" />
                      <span className="text-white font-bold text-sm font-mono">INNOVATION PIPELINE</span>
                    </div>
                    <div className="text-purple-400 text-xs font-bold">CONTINUOUS</div>
                  </div>
                  <div className="text-purple-400 text-xs">Agile development • Weekly releases • AI-powered deployment • Future-ready architecture</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-slate-800/80 border border-slate-700/50 p-8 backdrop-blur-sm">
          <div className="mb-6">
            <div className="text-emerald-400 text-lg font-mono font-bold tracking-widest mb-3 flex items-center justify-center space-x-2">
              <Lightning className="w-5 h-5" />
              <span>READY TO TRANSFORM YOUR BUSINESS?</span>
              <Lightning className="w-5 h-5" />
            </div>
            <p className="text-slate-300 text-base max-w-4xl mx-auto leading-relaxed">
              Join <span className="text-emerald-400 font-bold">{(liveStats.activeUsers / 1000).toFixed(0)}k+ satisfied clients</span> who trust JBLinx Studio for their most critical technology needs. 
              From initial concept to enterprise deployment, we deliver <span className="text-emerald-400 font-bold">professional-grade solutions</span> that drive measurable business results 
              with <span className="text-purple-400 font-bold">{liveStats.satisfaction.toFixed(1)}% client satisfaction</span> and <span className="text-cyan-400 font-bold">99.97% uptime guarantee</span>.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
            <Link to="/blog" className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:via-cyan-400 hover:to-blue-400 text-black px-8 py-4 font-black transition-all duration-300 space-x-3 shadow-xl text-base hover:scale-105 hover:shadow-emerald-500/30 group">
              <Zap className="w-5 h-5 group-hover:animate-pulse" />
              <span>EXPLORE COMPLETE PORTFOLIO</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <a href="https://github.com/orgs/JBLinx-Studio/repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-slate-700/80 border border-emerald-400/70 text-emerald-400 hover:bg-slate-600/80 hover:border-emerald-300 hover:text-emerald-300 px-8 py-4 font-black text-base transition-all duration-300 space-x-3 hover:scale-105 shadow-lg">
              <Github className="w-5 h-5" />
              <span>VIEW OPEN SOURCE CODE</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          <div className="mt-6 text-sm text-slate-500 font-mono">
            🏆 Professional • Reliable • Innovative • Results-Driven • Enterprise-Grade
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
