import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap, Play, Download, Users, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const terminalLines = [
    '> initializing_jblinx_studio...',
    '> loading_premium_content_library...',
    '> STATUS: 50+ Products Ready ⬡'
  ];

  const showcaseTabs = [
    {
      title: "GAMES",
      icon: Gamepad2,
      count: "15+",
      items: ["Horror Survival", "RTS Strategy", "Adventure RPG", "Multiplayer FPS"],
      color: "purple"
    },
    {
      title: "DEV TOOLS",
      icon: Code,
      count: "25+",
      items: ["React Templates", "FastAPI Kits", "Mobile Apps", "Dev Resources"],
      color: "cyan"
    },
    {
      title: "CONTENT",
      icon: Book,
      count: "30+",
      items: ["Game Dev eBooks", "Video Tutorials", "Dev Blogs", "Code Guides"],
      color: "orange"
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
    }, 1200);

    return () => clearInterval(interval);
  }, [currentLine]);

  // Auto-rotate tabs
  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % showcaseTabs.length);
    }, 3000);
    return () => clearInterval(tabInterval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Compact Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-500/10 blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 blur-3xl"></div>
        
        {/* Compact Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute border border-cyan-500/20"
              style={{
                width: `${20 + (i % 3) * 10}px`,
                height: `${20 + (i % 3) * 10}px`,
                left: `${(i * 15) % 90}%`,
                top: `${(i * 12) % 80}%`,
                animation: `pulse ${2 + i * 0.3}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 w-full">
          {/* Main Content - More Compact */}
          <div className="lg:col-span-7 space-y-6">
            {/* Compact Brand Badge */}
            <div className="inline-flex items-center bg-slate-800/80 border border-cyan-500/30 px-4 py-2 backdrop-blur-sm">
              <Hexagon className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-bold text-sm font-mono">PREMIUM STUDIO</span>
            </div>

            {/* Compact Title */}
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono">
                <span className="text-cyan-400">JBLinx</span>
                <span className="text-white">Studio</span>
              </h1>
              
              <div className="text-lg lg:text-xl font-medium text-slate-300">
                Games • Web Apps • Dev Resources
              </div>
              <div className="text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400">
                Everything Premium. Everything Ready.
              </div>
            </div>

            {/* Compact Description */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Professional games, development tools, educational content, and premium applications - all in one place.
            </p>
            
            {/* Compact Stats Grid */}
            <div className="grid grid-cols-4 gap-3 max-w-lg">
              {[
                { value: "50+", label: "Products", icon: Trophy, color: "text-cyan-400" },
                { value: "15+", label: "Games", icon: Gamepad2, color: "text-purple-400" },
                { value: "25k+", label: "Users", icon: Users, color: "text-orange-400" },
                { value: "4.9★", label: "Rating", icon: Star, color: "text-yellow-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/50 border border-slate-700 p-3 text-center backdrop-blur-sm">
                    <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                    <div className={`text-lg font-black ${stat.color} font-mono`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Compact Action Buttons */}
            <div className="flex gap-3">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 font-bold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 px-6 py-3 font-bold transition-all duration-300 flex items-center space-x-2"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Compact Terminal + Showcase */}
          <div className="lg:col-span-5 space-y-4">
            {/* Compact Terminal */}
            <div className="bg-slate-900/80 border border-slate-700 p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-red-500"></div>
                  <div className="w-2 h-2 bg-yellow-500"></div>
                  <div className="w-2 h-2 bg-green-500"></div>
                </div>
                <Terminal className="w-3 h-3 text-slate-500" />
              </div>
              
              <div className="font-mono text-xs min-h-[80px]">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {terminalText}
                </pre>
                <div className="flex items-center">
                  <span className="text-green-400">⬡ </span>
                  <div className="w-1 h-3 bg-green-400 ml-1 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Compact Interactive Showcase */}
            <div className="bg-slate-800/60 border border-slate-700 p-4 backdrop-blur-sm">
              <div className="flex mb-3">
                {showcaseTabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  const colorClass = tab.color === 'purple' ? 'bg-purple-500' : tab.color === 'cyan' ? 'bg-cyan-500' : 'bg-orange-500';
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 flex items-center justify-center space-x-1 py-2 px-2 text-xs font-bold transition-all duration-300 ${
                        activeTab === index 
                          ? `${colorClass} text-white` 
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      <IconComponent className="w-3 h-3" />
                      <span>{tab.title}</span>
                    </button>
                  );
                })}
              </div>
              
              <div className="min-h-[80px]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-black text-sm font-mono">
                    {showcaseTabs[activeTab].title}
                  </h4>
                  <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                    {showcaseTabs[activeTab].count}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-1">
                  {showcaseTabs[activeTab].items.map((item, index) => (
                    <div key={index} className="bg-slate-700/50 border border-slate-600 p-2 text-slate-300 text-xs">
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
