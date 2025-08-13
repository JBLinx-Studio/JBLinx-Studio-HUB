
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, Shield, Database, Globe, Cpu, Smartphone, Monitor, Cloud, Brain, Settings, Layers, TrendingUp, Target, CheckCircle, Bolt, Sparkles, LineChart, BarChart3, Wifi, Signal, Battery, Server, Lock, Gauge, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    activeUsers: 18500,
    githubStars: 2847,
    totalProjects: 47,
    satisfaction: 99.7,
    revenue: 2.3,
    uptime: 99.97,
    deployments: 1247,
    satisfactionScore: 4.94
  });

  // Enhanced live stats animation with more realistic increments
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 8) + 2,
        githubStars: prev.githubStars + (Math.random() > 0.7 ? 1 : 0),
        totalProjects: prev.totalProjects + (Math.random() > 0.95 ? 1 : 0),
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.03),
        revenue: prev.revenue + (Math.random() > 0.85 ? 0.1 : 0),
        uptime: Math.min(99.99, prev.uptime + (Math.random() - 0.5) * 0.01),
        deployments: prev.deployments + Math.floor(Math.random() * 3) + 1,
        satisfactionScore: Math.min(5.0, prev.satisfactionScore + (Math.random() - 0.5) * 0.01)
      }));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const flagshipProducts = [
    { name: 'CodeFusion', icon: Code, color: 'text-emerald-400', category: 'DEV TOOLS', users: '12.5k', status: 'ACTIVE', description: 'Professional Web IDE' },
    { name: 'VitalitySync', icon: Heart, color: 'text-red-400', category: 'HEALTH TECH', users: '8.9k', status: 'SCALING', description: 'Wellness Platform' },
    { name: 'MindMate', icon: Brain, color: 'text-purple-400', category: 'AI GAMING', users: '15.2k', status: 'TRENDING', description: 'AI Gaming Engine' },
    { name: 'NestCore', icon: Building2, color: 'text-orange-400', category: 'ENTERPRISE', users: '6.1k', status: 'ENTERPRISE', description: 'Property Management' },
    { name: 'CloudSync', icon: Cloud, color: 'text-blue-400', category: 'CLOUD SaaS', users: '22.3k', status: 'GROWING', description: 'Multi-Cloud Platform' },
    { name: 'SecureShield', icon: Shield, color: 'text-cyan-400', category: 'SECURITY', users: '4.7k', status: 'CRITICAL', description: 'Cybersecurity Suite' },
    { name: 'DataFlow', icon: Database, color: 'text-yellow-400', category: 'ANALYTICS', users: '9.8k', status: 'STABLE', description: 'Data Intelligence' },
    { name: 'MobileCore', icon: Smartphone, color: 'text-pink-400', category: 'MOBILE', users: '13.6k', status: 'INNOVATIVE', description: 'Cross-Platform SDK' },
    { name: 'GameEngine', icon: Gamepad2, color: 'text-green-400', category: 'GAMING', users: '11.2k', status: 'BETA', description: 'Unity Extensions' },
    { name: 'AIAssist', icon: Cpu, color: 'text-indigo-400', category: 'AI/ML', users: '7.3k', status: 'EXPERIMENTAL', description: 'ML Automation' },
    { name: 'WebPortal', icon: Globe, color: 'text-teal-400', category: 'WEB PLATFORM', users: '16.8k', status: 'PRODUCTION', description: 'Enterprise Portal' },
    { name: 'DevOps Hub', icon: Settings, color: 'text-violet-400', category: 'DEVOPS', users: '5.4k', status: 'MATURE', description: 'CI/CD Pipeline' }
  ];

  const companyValues = [
    { icon: TrendingUp, label: "Innovation First", desc: "Cutting-edge technology solutions", color: "emerald" },
    { icon: Target, label: "Client Success", desc: "99.7% satisfaction guarantee", color: "blue" },
    { icon: CheckCircle, label: "Quality Assurance", desc: "Enterprise-grade reliability", color: "purple" },
    { icon: Bolt, label: "Speed & Efficiency", desc: "Rapid deployment & scaling", color: "orange" },
    { icon: Lock, label: "Security Focus", desc: "Zero-breach track record", color: "red" },
    { icon: Sparkles, label: "Future Ready", desc: "AI-powered architecture", color: "cyan" }
  ];

  const technologyStack = [
    { name: 'React/Next.js', proficiency: 98, color: 'bg-emerald-500', category: 'Frontend' },
    { name: 'TypeScript', proficiency: 96, color: 'bg-blue-500', category: 'Language' },
    { name: 'Node.js/Python', proficiency: 94, color: 'bg-green-500', category: 'Backend' },
    { name: 'Cloud Infrastructure', proficiency: 97, color: 'bg-purple-500', category: 'DevOps' },
    { name: 'AI/ML Integration', proficiency: 92, color: 'bg-orange-500', category: 'Intelligence' },
    { name: 'DevOps/CI-CD', proficiency: 95, color: 'bg-cyan-500', category: 'Automation' },
    { name: 'Mobile Development', proficiency: 89, color: 'bg-pink-500', category: 'Mobile' },
    { name: 'Database Systems', proficiency: 93, color: 'bg-yellow-500', category: 'Data' }
  ];

  const performanceMetrics = [
    { label: "Response Time", value: "< 200ms", icon: Gauge, color: "emerald" },
    { label: "Uptime SLA", value: `${liveStats.uptime.toFixed(2)}%`, icon: Signal, color: "green" },
    { label: "Deployments", value: `${liveStats.deployments}+`, icon: Rocket, color: "blue" },
    { label: "Security Score", value: "A+", icon: Lock, color: "red" }
  ];

  return (
    <section className="py-12 bg-slate-900 relative overflow-hidden min-h-screen">
      {/* Enhanced Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic gradient orbs with enhanced animations */}
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-gradient-to-r from-emerald-500/25 via-cyan-500/20 to-blue-500/15 blur-3xl rounded-full animate-pulse opacity-70" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-r from-purple-500/25 via-pink-500/20 to-orange-500/15 blur-3xl rounded-full animate-pulse opacity-60" style={{animationDelay: '2s', animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-orange-500/20 via-yellow-500/15 to-red-500/10 blur-3xl rounded-full animate-pulse opacity-50" style={{animationDelay: '4s', animationDuration: '10s'}}></div>
        
        {/* Enhanced animated grid with multiple layers */}
        <div className="absolute inset-0 opacity-[0.15]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.5) 1px, transparent 1px),
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px, 60px 60px, 100px 100px, 120px 120px, 80px 80px'
          }}></div>
        </div>

        {/* Enhanced tech particles with improved animations */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 rounded-full border-2 animate-pulse shadow-lg`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: [
                'rgba(16, 185, 129, 0.8)', 'rgba(6, 182, 212, 0.8)', 
                'rgba(139, 92, 246, 0.8)', 'rgba(245, 158, 11, 0.8)',
                'rgba(239, 68, 68, 0.8)', 'rgba(59, 130, 246, 0.8)',
                'rgba(236, 72, 153, 0.8)', 'rgba(34, 197, 94, 0.8)'
              ][Math.floor(Math.random() * 8)],
              borderColor: 'rgba(255, 255, 255, 0.3)',
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: `0 0 20px ${[
                'rgba(16, 185, 129, 0.6)', 'rgba(6, 182, 212, 0.6)', 
                'rgba(139, 92, 246, 0.6)', 'rgba(245, 158, 11, 0.6)',
                'rgba(239, 68, 68, 0.6)', 'rgba(59, 130, 246, 0.6)',
                'rgba(236, 72, 153, 0.6)', 'rgba(34, 197, 94, 0.6)'
              ][Math.floor(Math.random() * 8)]}`
            }}
          />
        ))}

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute animate-pulse opacity-20`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          >
            {i % 3 === 0 ? (
              <Hexagon className="w-8 h-8 text-emerald-400" />
            ) : i % 3 === 1 ? (
              <div className="w-6 h-6 border-2 border-purple-400 transform rotate-45"></div>
            ) : (
              <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Company Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-emerald-500/70 px-10 py-5 mb-10 backdrop-blur-lg hover:bg-slate-700/95 hover:border-emerald-400/90 transition-all duration-500 shadow-2xl shadow-emerald-500/30 group cursor-pointer">
            <Hexagon className="w-8 h-8 mr-5 text-emerald-400 animate-spin group-hover:animate-pulse" style={{animationDuration: '8s'}} />
            <span className="text-emerald-400 font-black text-xl font-mono tracking-widest">JBLINX STUDIO ENTERPRISE HQ</span>
            <div className="ml-5 flex items-center space-x-3">
              <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <span className="text-emerald-400 text-base font-mono font-bold">LIVE OPERATIONS</span>
            </div>
            <Sparkles className="w-6 h-6 ml-4 text-emerald-400 group-hover:animate-pulse transition-all duration-300" />
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white leading-tight font-mono mb-8">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              ENTERPRISE-GRADE
            </span>
            <br />
            <span className="text-white drop-shadow-2xl">TECHNOLOGY</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-pulse" style={{animationDelay: '1s'}}>
              SOLUTIONS
            </span>
          </h1>
          
          <div className="flex items-center justify-center space-x-8 mb-10">
            <div className="w-40 h-1.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-pulse"></div>
            <div className="flex items-center space-x-4 bg-slate-800/70 px-8 py-4 border border-emerald-400/50 backdrop-blur-sm hover:bg-slate-700/70 hover:border-emerald-400/70 transition-all duration-300 group cursor-pointer">
              <Trophy className="w-7 h-7 text-emerald-400 animate-bounce group-hover:scale-125 transition-transform duration-300" style={{animationDuration: '2s'}} />
              <span className="text-emerald-400 font-black text-lg font-mono tracking-wide">INDUSTRY PIONEER</span>
              <Trophy className="w-7 h-7 text-emerald-400 animate-bounce group-hover:scale-125 transition-transform duration-300" style={{animationDuration: '2s', animationDelay: '1s'}} />
            </div>
            <div className="w-40 h-1.5 bg-gradient-to-l from-transparent via-emerald-400 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <p className="text-2xl text-slate-300 max-w-5xl mx-auto mb-12 leading-relaxed">
            <span className="text-emerald-400 font-bold text-3xl">JBLinx Studio</span> is a cutting-edge technology company specializing in 
            <span className="text-cyan-400 font-semibold"> full-stack web development</span>, 
            <span className="text-purple-400 font-semibold"> mobile applications</span>, 
            <span className="text-orange-400 font-semibold"> AI-powered gaming platforms</span>, 
            <span className="text-blue-400 font-semibold"> healthcare technology solutions</span>, and 
            <span className="text-pink-400 font-semibold"> enterprise software systems</span>.
            <br /><br />
            Serving <span className="text-yellow-400 font-bold text-2xl animate-pulse">{(liveStats.activeUsers / 1000).toFixed(1)}k+ active users</span> globally with 
            <span className="text-emerald-400 font-bold animate-pulse"> {liveStats.satisfaction.toFixed(1)}% client satisfaction</span> and 
            <span className="text-cyan-400 font-bold animate-pulse"> {liveStats.uptime}% uptime guarantee</span>.
          </p>

          {/* Company Values Grid with Enhanced Interactivity */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto mb-12">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              const colorClasses = {
                emerald: "border-emerald-500/60 bg-slate-800/95 text-emerald-400 hover:bg-emerald-500/25 hover:shadow-emerald-500/40 hover:border-emerald-400",
                blue: "border-blue-500/60 bg-slate-800/95 text-blue-400 hover:bg-blue-500/25 hover:shadow-blue-500/40 hover:border-blue-400",
                purple: "border-purple-500/60 bg-slate-800/95 text-purple-400 hover:bg-purple-500/25 hover:shadow-purple-500/40 hover:border-purple-400",
                orange: "border-orange-500/60 bg-slate-800/95 text-orange-400 hover:bg-orange-500/25 hover:shadow-orange-500/40 hover:border-orange-400",
                red: "border-red-500/60 bg-slate-800/95 text-red-400 hover:bg-red-500/25 hover:shadow-red-500/40 hover:border-red-400",
                cyan: "border-cyan-500/60 bg-slate-800/95 text-cyan-400 hover:bg-cyan-500/25 hover:shadow-cyan-500/40 hover:border-cyan-400"
              };
              return (
                <div key={index} className={`${colorClasses[value.color]} border backdrop-blur-sm p-6 transition-all duration-500 hover:scale-110 hover:shadow-2xl group cursor-pointer transform hover:-translate-y-2`}>
                  <IconComponent className="w-8 h-8 mx-auto mb-4 group-hover:scale-150 transition-transform duration-500" />
                  <div className="text-base font-black mb-3 font-mono group-hover:text-white transition-colors duration-300">{value.label}</div>
                  <div className="text-sm opacity-80 leading-tight group-hover:opacity-100 transition-opacity duration-300">{value.desc}</div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Flagship Products Showcase */}
          <div className="mb-12">
            <div className="text-slate-400 text-lg font-mono font-bold tracking-widest mb-8 flex items-center justify-center space-x-4">
              <Layers className="w-6 h-6 text-emerald-400 animate-pulse" />
              <span>FLAGSHIP PRODUCT ECOSYSTEM</span>
              <Layers className="w-6 h-6 text-emerald-400 animate-pulse" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-8xl mx-auto">
              {flagshipProducts.map((product, index) => {
                const IconComponent = product.icon;
                const statusColors = {
                  'ACTIVE': 'bg-green-500 shadow-green-500/50', 'SCALING': 'bg-blue-500 shadow-blue-500/50', 'TRENDING': 'bg-purple-500 shadow-purple-500/50',
                  'ENTERPRISE': 'bg-orange-500 shadow-orange-500/50', 'GROWING': 'bg-cyan-500 shadow-cyan-500/50', 'CRITICAL': 'bg-red-500 shadow-red-500/50',
                  'STABLE': 'bg-yellow-500 shadow-yellow-500/50', 'INNOVATIVE': 'bg-pink-500 shadow-pink-500/50', 'BETA': 'bg-indigo-500 shadow-indigo-500/50',
                  'EXPERIMENTAL': 'bg-violet-500 shadow-violet-500/50', 'PRODUCTION': 'bg-teal-500 shadow-teal-500/50', 'MATURE': 'bg-slate-500 shadow-slate-500/50'
                };
                return (
                  <div key={index} className="group bg-slate-800/95 border border-slate-700/80 p-5 hover:bg-slate-700/95 hover:border-emerald-400/70 transition-all duration-500 backdrop-blur-sm hover:scale-105 hover:shadow-2xl cursor-pointer transform hover:-translate-y-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <IconComponent className={`w-6 h-6 ${product.color} group-hover:scale-125 transition-transform duration-500`} />
                      <div className="flex-1 text-left">
                        <div className={`${product.color} text-lg font-bold group-hover:text-white transition-colors duration-500`}>
                          {product.name}
                        </div>
                        <div className="text-slate-500 text-xs font-mono">{product.category}</div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-400 mb-4 font-medium group-hover:text-slate-300 transition-colors duration-300">{product.description}</div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-400 font-mono font-bold group-hover:text-slate-300 transition-colors duration-300">{product.users} users</span>
                      <span className={`${statusColors[product.status]} text-black px-3 py-1.5 font-bold text-xs transition-all duration-500 shadow-lg`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Live Performance Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto mb-12">
            {[
              { icon: Users, value: `${(liveStats.activeUsers / 1000).toFixed(1)}k`, label: "ACTIVE USERS", color: "cyan", live: true, desc: "Global Community" },
              { icon: Star, value: `${(liveStats.githubStars / 1000).toFixed(1)}k`, label: "GITHUB STARS", color: "yellow", live: true, desc: "Open Source" },
              { icon: Rocket, value: liveStats.totalProjects.toString(), label: "LIVE PRODUCTS", color: "purple", desc: "Active Portfolio" },
              { icon: Award, value: `${liveStats.satisfaction.toFixed(1)}%`, label: "SATISFACTION", color: "emerald", desc: "Client Rating" },
              { icon: TrendingUp, value: `$${liveStats.revenue.toFixed(1)}M`, label: "PORTFOLIO VALUE", color: "orange", desc: "Market Value" },
              { icon: BarChart3, value: `${liveStats.satisfactionScore.toFixed(1)}/5`, label: "USER RATING", color: "blue", desc: "App Store Average" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              const colorClasses = {
                emerald: "border-emerald-500/70 bg-slate-800/95 text-emerald-400 hover:bg-emerald-500/25 hover:shadow-emerald-500/50",
                cyan: "border-cyan-500/70 bg-slate-800/95 text-cyan-400 hover:bg-cyan-500/25 hover:shadow-cyan-500/50",
                yellow: "border-yellow-500/70 bg-slate-800/95 text-yellow-400 hover:bg-yellow-500/25 hover:shadow-yellow-500/50",
                purple: "border-purple-500/70 bg-slate-800/95 text-purple-400 hover:bg-purple-500/25 hover:shadow-purple-500/50",
                orange: "border-orange-500/70 bg-slate-800/95 text-orange-400 hover:bg-orange-500/25 hover:shadow-orange-500/50",
                blue: "border-blue-500/70 bg-slate-800/95 text-blue-400 hover:bg-blue-500/25 hover:shadow-blue-500/50"
              };
              return (
                <div key={index} className={`${colorClasses[stat.color]} border backdrop-blur-sm p-5 text-center transition-all duration-500 hover:scale-115 hover:shadow-2xl group cursor-pointer transform hover:-translate-y-2`}>
                  <IconComponent className="w-8 h-8 mx-auto mb-4 group-hover:scale-125 transition-transform duration-500" />
                  <div className="text-xl font-black flex items-center justify-center space-x-2 font-mono mb-3">
                    <span>{stat.value}</span>
                    {stat.live && <div className="w-3 h-3 bg-current rounded-full animate-pulse shadow-lg"></div>}
                  </div>
                  <div className="text-sm font-bold opacity-90 mb-2">{stat.label}</div>
                  <div className="text-xs opacity-70">{stat.desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Left Panel - Enhanced Development Console */}
          <div className="bg-slate-800/95 border border-slate-700/90 backdrop-blur-sm p-8 hover:bg-slate-800/98 hover:border-slate-600/90 transition-all duration-500 group shadow-2xl hover:shadow-emerald-500/20">
            <div className="flex items-center space-x-4 mb-8">
              <Terminal className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
              <span className="text-emerald-400 font-black text-xl font-mono tracking-wide">ENTERPRISE DEVELOPMENT CONSOLE</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/70 to-transparent"></div>
              <div className="text-emerald-400 text-sm font-mono bg-slate-700/70 px-4 py-2 border border-emerald-400/40 hover:bg-emerald-500/20 transition-all duration-300 cursor-pointer">
                LIVE DEMO
              </div>
            </div>
            <ProfessionalTerminal />
            <div className="mt-6 text-base text-slate-400 font-mono bg-slate-700/50 p-6 border border-slate-600/50 backdrop-blur-sm hover:bg-slate-700/70 hover:border-emerald-400/30 transition-all duration-300">
              <div className="text-emerald-400 font-bold mb-3 flex items-center space-x-3">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span>Real-time Development Environment</span>
              </div>
              <div className="text-sm leading-relaxed">Interactive showcase of our enterprise-grade technical capabilities, real-time deployment metrics, system architecture, and live operational status across all flagship products and services.</div>
            </div>
          </div>

          {/* Right Panel - Enhanced Technology Stack & Mission Control */}
          <div className="space-y-8">
            {/* Technology Mastery */}
            <div className="bg-slate-800/95 border border-slate-700/90 backdrop-blur-sm p-8 hover:bg-slate-800/98 hover:border-slate-600/90 transition-all duration-500 group shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <Settings className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-emerald-400 font-black text-lg font-mono tracking-wide">TECHNOLOGY STACK MASTERY</span>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/70 to-transparent"></div>
              </div>

              <div className="space-y-5">
                {technologyStack.map((tech, index) => (
                  <div key={index} className="bg-slate-700/70 p-5 border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-500 backdrop-blur-sm hover:bg-slate-700/90 group cursor-pointer">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-white font-mono text-base font-bold group-hover:text-emerald-400 transition-colors duration-300">{tech.name}</span>
                        <div className="text-slate-400 text-sm font-mono">{tech.category}</div>
                      </div>
                      <span className="text-emerald-400 font-bold text-lg">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-slate-600/70 h-3 rounded-full overflow-hidden">
                      <div 
                        className={`${tech.color} h-3 transition-all duration-1000 ease-out relative overflow-hidden rounded-full`}
                        style={{ width: `${tech.proficiency}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-slate-800/95 border border-slate-700/90 backdrop-blur-sm p-8 hover:bg-slate-800/98 hover:border-slate-600/90 transition-all duration-500 group shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <Activity className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500" />
                <span className="text-emerald-400 font-black text-lg font-mono tracking-wide">PERFORMANCE METRICS</span>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/70 to-transparent"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {performanceMetrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  const colorClasses = {
                    emerald: "border-emerald-400/60 bg-slate-700/80 text-emerald-400 hover:bg-emerald-500/15",
                    green: "border-green-400/60 bg-slate-700/80 text-green-400 hover:bg-green-500/15",
                    blue: "border-blue-400/60 bg-slate-700/80 text-blue-400 hover:bg-blue-500/15",
                    red: "border-red-400/60 bg-slate-700/80 text-red-400 hover:bg-red-500/15"
                  };
                  return (
                    <div key={index} className={`${colorClasses[metric.color]} border p-4 hover:scale-105 transition-all duration-500 text-center group cursor-pointer`}>
                      <IconComponent className="w-6 h-6 mx-auto mb-3 group-hover:scale-125 transition-transform duration-300" />
                      <div className="font-bold text-base mb-2">{metric.value}</div>
                      <div className="text-xs opacity-80">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center bg-slate-800/95 border border-slate-700/70 p-12 backdrop-blur-sm shadow-2xl hover:bg-slate-800/98 hover:border-emerald-400/30 transition-all duration-500 group">
          <div className="mb-10">
            <div className="text-emerald-400 text-2xl font-mono font-bold tracking-widest mb-6 flex items-center justify-center space-x-4">
              <Zap className="w-8 h-8 animate-pulse group-hover:scale-125 transition-transform duration-300" />
              <span>READY TO TRANSFORM YOUR BUSINESS?</span>
              <Zap className="w-8 h-8 animate-pulse group-hover:scale-125 transition-transform duration-300" />
            </div>
            <p className="text-slate-300 text-xl max-w-6xl mx-auto leading-relaxed">
              Join <span className="text-emerald-400 font-bold text-2xl animate-pulse">{(liveStats.activeUsers / 1000).toFixed(0)}k+ satisfied clients</span> who trust JBLinx Studio for their most critical technology needs. 
              From initial concept to enterprise deployment, we deliver <span className="text-emerald-400 font-bold">professional-grade solutions</span> that drive measurable business results 
              with <span className="text-purple-400 font-bold">{liveStats.satisfaction.toFixed(1)}% client satisfaction</span>, <span className="text-cyan-400 font-bold">{liveStats.uptime}% uptime</span>, 
              and <span className="text-orange-400 font-bold">{liveStats.deployments}+ successful deployments</span>.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <Link to="/blog" className="inline-flex items-center bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 hover:from-emerald-400 hover:via-cyan-400 hover:to-blue-400 text-black px-12 py-6 font-black transition-all duration-500 space-x-4 shadow-2xl text-xl hover:scale-110 hover:shadow-emerald-500/50 group transform hover:-translate-y-1">
              <Zap className="w-7 h-7 group-hover:animate-pulse" />
              <span>EXPLORE COMPLETE PORTFOLIO</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            
            <a href="https://github.com/orgs/JBLinx-Studio/repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-slate-700/95 border border-emerald-400/90 text-emerald-400 hover:bg-slate-600/95 hover:border-emerald-300 hover:text-emerald-300 px-12 py-6 font-black text-xl transition-all duration-500 space-x-4 hover:scale-110 shadow-2xl hover:shadow-emerald-500/40 transform hover:-translate-y-1">
              <Github className="w-7 h-7" />
              <span>VIEW OPEN SOURCE CODE</span>
              <ExternalLink className="w-7 h-7" />
            </a>
          </div>
          
          <div className="mt-10 text-lg text-slate-500 font-mono animate-pulse">
            🏆 Professional • Reliable • Innovative • Results-Driven • Enterprise-Grade • Future-Ready
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
