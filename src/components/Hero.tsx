
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

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % showcaseTabs.length);
    }, 3000);
    return () => clearInterval(tabInterval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-24 h-24 bg-cyan-500/10 blur-xl"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-purple-500/10 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 blur-2xl"></div>
        
        <div className="absolute inset-0 opacity-15">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute border border-cyan-500/20"
              style={{
                width: `${16 + (i % 3) * 8}px`,
                height: `${16 + (i % 3) * 8}px`,
                left: `${(i * 12) % 85}%`,
                top: `${(i * 10) % 75}%`,
                animation: `pulse ${2.5 + i * 0.2}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-8">
        <div className="grid lg:grid-cols-12 gap-6 w-full">
          {/* Main Content - Ultra Compact */}
          <div className="lg:col-span-7 space-y-4">
            {/* Ultra Compact Brand Badge */}
            <div className="inline-flex items-center bg-slate-800/90 border border-cyan-500/40 px-3 py-1.5 backdrop-blur-sm">
              <Hexagon className="w-3 h-3 text-cyan-400 mr-1.5" />
              <span className="text-cyan-400 font-black text-xs font-mono tracking-wider">PREMIUM STUDIO</span>
            </div>

            {/* Ultra Compact Title */}
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-5xl font-black text-white leading-none font-mono">
                <span className="text-cyan-400">JBLinx</span>
                <span className="text-white">Studio</span>
              </h1>
              
              <div className="text-base lg:text-lg font-bold text-slate-300">
                Games • Web Apps • Dev Resources
              </div>
              <div className="text-lg lg:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400">
                Everything Premium. Everything Ready.
              </div>
            </div>

            {/* Ultra Compact Description */}
            <p className="text-base text-slate-400 leading-relaxed max-w-lg">
              Professional games, development tools, educational content, and premium applications.
            </p>
            
            {/* Ultra Compact Stats Grid */}
            <div className="grid grid-cols-4 gap-2 max-w-md">
              {[
                { value: "50+", label: "Products", icon: Trophy, color: "text-cyan-400" },
                { value: "15+", label: "Games", icon: Gamepad2, color: "text-purple-400" },
                { value: "25k+", label: "Users", icon: Users, color: "text-orange-400" },
                { value: "4.9★", label: "Rating", icon: Star, color: "text-yellow-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/60 border border-slate-700 p-2 text-center backdrop-blur-sm">
                    <IconComponent className={`w-4 h-4 ${stat.color} mx-auto mb-0.5`} />
                    <div className={`text-sm font-black ${stat.color} font-mono`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Ultra Compact Action Buttons */}
            <div className="flex gap-2">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-5 py-2.5 font-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-1.5 text-sm"
              >
                <Play className="w-3.5 h-3.5" />
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 px-5 py-2.5 font-black transition-all duration-300 flex items-center space-x-1.5 text-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Ultra Compact Terminal + Showcase */}
          <div className="lg:col-span-5 space-y-3">
            {/* Ultra Compact Terminal */}
            <div className="bg-slate-900/90 border border-slate-700 p-3 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-red-500"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-500"></div>
                  <div className="w-1.5 h-1.5 bg-green-500"></div>
                </div>
                <Terminal className="w-3 h-3 text-slate-500" />
              </div>
              
              <div className="font-mono text-xs min-h-[60px]">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {terminalText}
                </pre>
                <div className="flex items-center">
                  <span className="text-green-400">⬡ </span>
                  <div className="w-1 h-2.5 bg-green-400 ml-1 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Ultra Compact Interactive Showcase */}
            <div className="bg-slate-800/70 border border-slate-700 p-3 backdrop-blur-sm">
              <div className="flex mb-2">
                {showcaseTabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  const colorClass = tab.color === 'purple' ? 'bg-purple-500' : tab.color === 'cyan' ? 'bg-cyan-500' : 'bg-orange-500';
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 flex items-center justify-center space-x-1 py-1.5 px-1.5 text-xs font-black transition-all duration-300 ${
                        activeTab === index 
                          ? `${colorClass} text-white` 
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      <IconComponent className="w-2.5 h-2.5" />
                      <span>{tab.title}</span>
                    </button>
                  );
                })}
              </div>
              
              <div className="min-h-[60px]">
                <div className="flex items-center justify-between mb-1.5">
                  <h4 className="text-white font-black text-xs font-mono">
                    {showcaseTabs[activeTab].title}
                  </h4>
                  <span className="bg-slate-700 text-cyan-400 px-1.5 py-0.5 text-xs font-black">
                    {showcaseTabs[activeTab].count}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-1">
                  {showcaseTabs[activeTab].items.map((item, index) => (
                    <div key={index} className="bg-slate-700/60 border border-slate-600 p-1.5 text-slate-300 text-xs">
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
