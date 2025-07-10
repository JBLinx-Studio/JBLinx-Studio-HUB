
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, ChevronLeft, ChevronRight, Sparkles, Cpu, Database, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';

const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    activeUsers: 2847,
    githubStars: 1623,
    totalProjects: 47,
    satisfaction: 98.7
  });

  const [currentPanel, setCurrentPanel] = useState(0);

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

  // Enhanced sliding panels data
  const solutionPanels = [
    {
      id: 'main',
      title: 'PROFESSIONAL SOLUTIONS + REAL INNOVATION',
      subtitle: 'Elite development ecosystem creating flagship products',
      content: {
        highlights: [
          { icon: Code, text: 'Advanced Development Stack', color: 'emerald' },
          { icon: Rocket, text: '99.9% System Uptime', color: 'blue' },
          { icon: Shield, text: 'Enterprise Security', color: 'purple' },
          { icon: Globe, text: 'Global Deployment', color: 'cyan' }
        ],
        metrics: [
          { label: 'ACTIVE PROJECTS', value: '47+', icon: Trophy },
          { label: 'USERS SERVED', value: '150K+', icon: Users },
          { label: 'SATISFACTION', value: '98.7%', icon: Star },
          { label: 'UPTIME', value: '99.9%', icon: Activity }
        ]
      }
    },
    {
      id: 'tech-stack',
      title: 'TECHNOLOGY STACK',
      subtitle: 'Cutting-edge technologies powering innovation',
      content: {
        highlights: [
          { icon: Cpu, text: 'React + TypeScript', color: 'blue' },
          { icon: Database, text: 'Advanced Backend Systems', color: 'green' },
          { icon: Sparkles, text: 'AI-Powered Solutions', color: 'purple' },
          { icon: Shield, text: 'Cybersecurity Framework', color: 'red' }
        ],
        metrics: [
          { label: 'FRAMEWORKS', value: '12+', icon: Code },
          { label: 'LANGUAGES', value: '8+', icon: Hexagon },
          { label: 'DATABASES', value: '6+', icon: Database },
          { label: 'CLOUD PROVIDERS', value: '4+', icon: Globe }
        ]
      }
    },
    {
      id: 'products',
      title: 'FLAGSHIP PRODUCTS',
      subtitle: 'Revolutionary applications changing industries',
      content: {
        highlights: [
          { icon: Code, text: 'CodeFusion IDE', color: 'emerald' },
          { icon: Heart, text: 'VitalitySync Health', color: 'red' },
          { icon: Gamepad2, text: 'MindMate Gaming', color: 'purple' },
          { icon: Building2, text: 'NestCore Enterprise', color: 'orange' }
        ],
        metrics: [
          { label: 'ACTIVE USERS', value: liveStats.activeUsers.toLocaleString(), icon: Users },
          { label: 'GITHUB STARS', value: liveStats.githubStars.toLocaleString(), icon: Star },
          { label: 'DOWNLOADS', value: '2.4M+', icon: Rocket },
          { label: 'COUNTRIES', value: '87+', icon: Globe }
        ]
      }
    },
    {
      id: 'services',
      title: 'PROFESSIONAL SERVICES',
      subtitle: 'End-to-end solutions for enterprise clients',
      content: {
        highlights: [
          { icon: Rocket, text: 'Custom Development', color: 'blue' },
          { icon: Shield, text: 'Security Auditing', color: 'red' },
          { icon: Database, text: 'System Architecture', color: 'green' },
          { icon: Sparkles, text: 'AI Integration', color: 'purple' }
        ],
        metrics: [
          { label: 'ENTERPRISE CLIENTS', value: '50+', icon: Building2 },
          { label: 'SUCCESS RATE', value: '100%', icon: Trophy },
          { label: 'AVG PROJECT SIZE', value: '$2.5M', icon: Award },
          { label: 'TEAM SIZE', value: '25+', icon: Users }
        ]
      }
    }
  ];

  const nextPanel = () => {
    setCurrentPanel((prev) => (prev + 1) % solutionPanels.length);
  };

  const prevPanel = () => {
    setCurrentPanel((prev) => (prev - 1 + solutionPanels.length) % solutionPanels.length);
  };

  const currentPanelData = solutionPanels[currentPanel];

  return (
    <section className="py-6 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Enhanced Sliding Panel Section */}
        <div className="relative mb-8">
          {/* Panel Navigation */}
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevPanel}
              className="p-2 bg-slate-800/80 border border-slate-700 hover:bg-slate-700/80 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-emerald-400" />
            </button>
            
            <div className="flex space-x-1">
              {solutionPanels.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPanel(index)}
                  className={`w-2 h-2 transition-all duration-300 ${
                    index === currentPanel ? 'bg-emerald-400' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPanel}
              className="p-2 bg-slate-800/80 border border-slate-700 hover:bg-slate-700/80 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5 text-emerald-400" />
            </button>
          </div>

          {/* Main Sliding Panel */}
          <div className="relative overflow-hidden bg-slate-800/95 border border-slate-700 p-6">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPanel * 100}%)` }}
            >
              {solutionPanels.map((panel, index) => (
                <div key={panel.id} className="w-full flex-shrink-0">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center bg-slate-700/95 border border-emerald-500/50 px-4 py-2 mb-3 backdrop-blur-sm">
                      <Trophy className="w-4 h-4 mr-2 text-emerald-400" />
                      <span className="text-emerald-400 font-black text-sm font-mono tracking-widest">
                        PANEL {index + 1} / {solutionPanels.length}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-2">
                      {panel.title}
                    </h2>
                    
                    <div className="w-20 h-0.5 bg-emerald-400 mx-auto mb-3"></div>
                    
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-6">
                      {panel.subtitle}
                    </p>
                  </div>

                  {/* Panel Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Highlights Section */}
                    <div className="bg-slate-700/60 p-4 border border-slate-600">
                      <h3 className="text-emerald-400 font-black text-sm font-mono mb-4 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        KEY HIGHLIGHTS
                      </h3>
                      <div className="space-y-3">
                        {panel.content.highlights.map((highlight, idx) => {
                          const IconComponent = highlight.icon;
                          const colorClasses = {
                            emerald: "text-emerald-400 border-emerald-400/30",
                            blue: "text-blue-400 border-blue-400/30",
                            purple: "text-purple-400 border-purple-400/30",
                            red: "text-red-400 border-red-400/30",
                            green: "text-green-400 border-green-400/30",
                            orange: "text-orange-400 border-orange-400/30",
                            cyan: "text-cyan-400 border-cyan-400/30"
                          };
                          
                          return (
                            <div key={idx} className={`flex items-center space-x-3 p-2 border-l-2 ${colorClasses[highlight.color]} bg-slate-800/40`}>
                              <IconComponent className={`w-4 h-4 ${colorClasses[highlight.color].split(' ')[0]}`} />
                              <span className="text-white text-sm font-medium">{highlight.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Metrics Section */}
                    <div className="bg-slate-700/60 p-4 border border-slate-600">
                      <h3 className="text-cyan-400 font-black text-sm font-mono mb-4 flex items-center">
                        <Activity className="w-4 h-4 mr-2" />
                        LIVE METRICS
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {panel.content.metrics.map((metric, idx) => {
                          const IconComponent = metric.icon;
                          return (
                            <div key={idx} className="bg-slate-800/60 p-3 border border-slate-600 text-center">
                              <IconComponent className="w-5 h-5 mx-auto mb-2 text-cyan-400" />
                              <div className="text-white font-black text-lg font-mono">{metric.value}</div>
                              <div className="text-slate-400 text-xs font-bold">{metric.label}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Showcase - Compact */}
        <div className="flex flex-wrap justify-center gap-1 mb-4">
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
        <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-6">
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-3 mb-5">
          {/* Left Panel - Terminal */}
          <div className="bg-slate-800/95 border border-slate-700 p-3">
            <ProfessionalTerminal />
          </div>

          {/* Right Panel - Action Center */}
          <div className="bg-slate-800/95 border border-slate-700 p-4 space-y-3">
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
