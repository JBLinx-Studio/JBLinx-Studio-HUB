
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap, Play, Download, Users, Trophy, Star, Shield, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const terminalLines = [
    '> initializing_jblinx_premium_studio...',
    '> loading_content_library: 200+ assets...',
    '> STATUS: All Systems Ready ⬡ ONLINE'
  ];

  const showcaseTabs = [
    {
      title: "GAMES",
      icon: Gamepad2,
      count: "25+",
      items: ["Horror Survival", "Strategy RTS", "Adventure RPG", "Multiplayer FPS"],
      color: "purple",
      accent: "from-purple-500 to-pink-600"
    },
    {
      title: "DEV TOOLS",
      icon: Code,
      count: "40+",
      items: ["React Kits", "FastAPI Templates", "Mobile Apps", "CLI Tools"],
      color: "cyan",
      accent: "from-cyan-500 to-blue-600"
    },
    {
      title: "ENTERPRISE",
      icon: Database,
      count: "15+",
      items: ["SaaS Platforms", "E-commerce", "Analytics", "CRM Systems"],
      color: "orange",
      accent: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < terminalLines.length) {
        const line = terminalLines[currentLine];
        setTerminalText(prev => {
          const newText = prev + line + '\n';
          if (prev.split('\n').length - 1 === currentLine) {
            setCurrentLine(currentLine + 1);
          }
          return newText;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLine]);

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % showcaseTabs.length);
    }, 3500);
    return () => clearInterval(tabInterval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/15 to-orange-500/15 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute border border-cyan-500/30"
              style={{
                width: `${12 + (i % 4) * 6}px`,
                height: `${12 + (i % 4) * 6}px`,
                left: `${(i * 15) % 90}%`,
                top: `${(i * 12) % 80}%`,
                animation: `pulse ${2 + i * 0.3}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-6">
        <div className="grid lg:grid-cols-12 gap-5 w-full">
          {/* Ultra Compact Main Content */}
          <div className="lg:col-span-7 space-y-3">
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-slate-800/95 border border-cyan-400/50 px-3 py-1 backdrop-blur-sm">
              <Hexagon className="w-3 h-3 text-cyan-400 mr-1" />
              <span className="text-cyan-400 font-black text-xs font-mono tracking-widest">PREMIUM STUDIO</span>
              <div className="w-1 h-1 bg-green-400 rounded-full ml-2 animate-pulse"></div>
            </div>

            {/* Compact Title */}
            <div className="space-y-1">
              <h1 className="text-3xl lg:text-4xl font-black text-white leading-none font-mono">
                <span className="text-cyan-400">JBLinx</span>
                <span className="text-white">Studio</span>
              </h1>
              
              <div className="text-sm lg:text-base font-bold text-slate-300 font-mono">
                Games • Dev Tools • Enterprise Apps
              </div>
              <div className="text-base lg:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400">
                Everything Premium. Everything Ready. Everything Professional.
              </div>
            </div>

            {/* Compact Description */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
              Professional games, development frameworks, enterprise applications, and premium content library for serious creators.
            </p>
            
            {/* Ultra Compact Stats Grid */}
            <div className="grid grid-cols-4 gap-1 max-w-md">
              {[
                { value: "80+", label: "Products", icon: Trophy, color: "text-cyan-400" },
                { value: "25+", label: "Games", icon: Gamepad2, color: "text-purple-400" },
                { value: "50k+", label: "Users", icon: Users, color: "text-orange-400" },
                { value: "4.9★", label: "Rating", icon: Star, color: "text-yellow-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/70 border border-slate-700 p-1.5 text-center backdrop-blur-sm">
                    <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                    <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Compact Action Buttons */}
            <div className="flex gap-2">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 font-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-1 text-sm"
              >
                <Play className="w-3 h-3" />
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 px-4 py-2 font-black transition-all duration-300 flex items-center space-x-1 text-sm"
              >
                <Github className="w-3 h-3" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Enhanced Terminal + Showcase */}
          <div className="lg:col-span-5 space-y-2">
            {/* Enhanced Terminal */}
            <div className="bg-slate-900/95 border border-slate-700 p-3 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                </div>
                <Terminal className="w-3 h-3 text-slate-500" />
              </div>
              
              <div className="font-mono text-xs min-h-[50px]">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {terminalText}
                </pre>
                <div className="flex items-center">
                  <span className="text-green-400">⬡ </span>
                  <div className="w-1 h-2 bg-green-400 ml-1 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Interactive Showcase */}
            <div className="bg-slate-800/80 border border-slate-700 p-3 backdrop-blur-sm">
              <div className="flex mb-2">
                {showcaseTabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 flex items-center justify-center space-x-1 py-1 px-1 text-xs font-black transition-all duration-300 ${
                        activeTab === index 
                          ? `bg-gradient-to-r ${tab.accent} text-white shadow-lg` 
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      <IconComponent className="w-2.5 h-2.5" />
                      <span>{tab.title}</span>
                    </button>
                  );
                })}
              </div>
              
              <div className="min-h-[55px]">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-white font-black text-xs font-mono">
                    {showcaseTabs[activeTab].title}
                  </h4>
                  <span className="bg-slate-700 text-cyan-400 px-1.5 py-0.5 text-xs font-black">
                    {showcaseTabs[activeTab].count}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-1">
                  {showcaseTabs[activeTab].items.map((item, index) => (
                    <div key={index} className="bg-slate-700/60 border border-slate-600 p-1 text-slate-300 text-xs">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
