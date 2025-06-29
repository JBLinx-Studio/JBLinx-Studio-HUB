import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap, Play, Download, Users } from 'lucide-react';
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
      items: ["Survival Horror", "RTS Strategy", "Adventure RPG", "Multiplayer FPS"]
    },
    {
      title: "WEB APPS",
      icon: Code,
      count: "25+",
      items: ["SaaS Platforms", "E-commerce", "Analytics Tools", "Productivity Apps"]
    },
    {
      title: "RESOURCES",
      icon: Book,
      count: "30+",
      items: ["Game Dev eBooks", "Video Tutorials", "Code Templates", "Dev Blogs"]
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
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 blur-3xl animate-pulse"></div>
        
        {/* Animated Grid */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute border border-cyan-500/10 animate-pulse"
            style={{
              width: `${25 + (i % 4) * 15}px`,
              height: `${25 + (i % 4) * 15}px`,
              left: `${(i * 12) % 100}%`,
              top: `${(i * 8) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              borderRadius: '6px'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Content - Enhanced */}
          <div className="lg:col-span-7 space-y-8">
            {/* Brand Badge */}
            <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-3" style={{ borderRadius: '8px' }}>
              <Hexagon className="w-5 h-5 text-cyan-400 mr-3 animate-spin-slow" />
              <span className="text-white/90 font-bold font-mono">PREMIUM DIGITAL STUDIO</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight font-mono">
                <span className="text-cyan-400">JBLinx</span>
                <span className="text-white">Studio</span>
              </h1>
              
              <div className="space-y-2">
                <div className="text-2xl lg:text-3xl font-light text-white/90">
                  Games • Web Apps • Digital Content
                </div>
                <div className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400">
                  Everything you need to succeed.
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Your one-stop destination for premium games, professional web applications, 
                educational content, and development resources.
              </p>
              
              {/* What We Offer Pills */}
              <div className="flex flex-wrap gap-2">
                {["Unity Games", "React Apps", "FastAPI Templates", "Game Dev Tutorials", "eBooks", "Mobile Apps"].map((item, index) => (
                  <span 
                    key={index}
                    className="bg-slate-800/60 border border-slate-600 text-slate-300 px-3 py-1 text-sm font-medium"
                    style={{ borderRadius: '6px' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl">
              <div className="text-center p-3 bg-slate-800/30 border border-slate-700" style={{ borderRadius: '8px' }}>
                <div className="text-2xl font-black text-cyan-400 font-mono">50+</div>
                <div className="text-slate-400 text-xs font-medium">Total Products</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 border border-slate-700" style={{ borderRadius: '8px' }}>
                <div className="text-2xl font-black text-purple-400 font-mono">15+</div>
                <div className="text-slate-400 text-xs font-medium">Games Live</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 border border-slate-700" style={{ borderRadius: '8px' }}>
                <div className="text-2xl font-black text-yellow-400 font-mono">25k+</div>
                <div className="text-slate-400 text-xs font-medium">Downloads</div>
              </div>
              <div className="text-center p-3 bg-slate-800/30 border border-slate-700" style={{ borderRadius: '8px' }}>
                <div className="text-2xl font-black text-green-400 font-mono">4.9★</div>
                <div className="text-slate-400 text-xs font-medium">Avg Rating</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/blog" 
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-3"
                style={{ borderRadius: '8px' }}
              >
                <Play className="w-5 h-5" />
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-slate-600 text-white px-8 py-4 font-bold text-lg hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3"
                style={{ borderRadius: '8px' }}
              >
                <Github className="w-5 h-5" />
                <span>OPEN SOURCE</span>
              </a>
            </div>
          </div>

          {/* Enhanced Terminal + Showcase */}
          <div className="lg:col-span-5 space-y-6">
            {/* Terminal */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-xl" style={{ borderRadius: '12px' }}></div>
              
              <div className="relative bg-slate-900/70 backdrop-blur-2xl border-2 border-slate-700 p-6 shadow-xl" style={{ borderRadius: '12px' }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500" style={{ borderRadius: '2px' }}></div>
                    <div className="w-3 h-3 bg-yellow-500" style={{ borderRadius: '2px' }}></div>
                    <div className="w-3 h-3 bg-green-500" style={{ borderRadius: '2px' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm font-mono">~/jblinx-studio</span>
                    <Terminal className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="font-mono text-sm min-h-[120px]">
                  <pre className="text-green-400 whitespace-pre-wrap">
                    {terminalText}
                  </pre>
                  <div className="flex items-center">
                    <span className="text-green-400">⬡ </span>
                    <div className="w-2 h-5 bg-green-400 ml-2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Showcase Tabs */}
            <div className="bg-slate-800/50 border border-slate-700 p-4" style={{ borderRadius: '12px' }}>
              <div className="flex space-x-1 mb-4">
                {showcaseTabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 text-sm font-bold transition-all duration-300 ${
                        activeTab === index 
                          ? 'bg-cyan-500 text-white' 
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                      }`}
                      style={{ borderRadius: '6px' }}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{tab.title}</span>
                    </button>
                  );
                })}
              </div>
              
              <div className="min-h-[100px]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-white font-black font-mono">
                    {showcaseTabs[activeTab].title}
                  </h4>
                  <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold" style={{ borderRadius: '4px' }}>
                    {showcaseTabs[activeTab].count}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {showcaseTabs[activeTab].items.map((item, index) => (
                    <div key={index} className="bg-slate-700/50 border border-slate-600 p-2 text-slate-300 text-xs" style={{ borderRadius: '4px' }}>
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
