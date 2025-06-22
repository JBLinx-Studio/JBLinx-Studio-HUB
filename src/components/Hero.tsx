
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Code, Zap, Play, Pause, Hexagon, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    '> initializing_development_environment...',
    '> loading_creative_systems...',
    '> connecting_to_project_database...',
    '> STATUS: Ready for development ⬡'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLine < terminalLines.length && isTyping) {
        const line = terminalLines[currentLine];
        setTerminalText(prev => {
          const newText = prev + line + '\n';
          if (prev.split('\n').length - 1 === currentLine) {
            setCurrentLine(currentLine + 1);
          }
          return newText;
        });
      } else if (currentLine >= terminalLines.length) {
        setIsTyping(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLine, isTyping]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <Hexagon 
              key={i}
              className="absolute text-cyan-500/10 animate-pulse"
              style={{
                width: `${20 + (i % 3) * 10}px`,
                height: `${20 + (i % 3) * 10}px`,
                left: `${(i * 15) % 100}%`,
                top: `${(i * 12) % 100}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3">
              <Hexagon className="w-5 h-5 text-emerald-400 animate-pulse mr-3" />
              <Network className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-white/90 font-medium">Development Studio Active</span>
            </div>

            {/* Title */}
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 leading-tight">
                JBLinx
              </h1>
              
              <div className="space-y-3">
                <div className="text-3xl lg:text-4xl font-light text-white/90">
                  We don't build applications.
                </div>
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  We craft digital experiences.
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Professional development studio specializing in games, web applications, 
              mobile apps, and backend systems.
            </p>
            
            <div className="flex items-center gap-6 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Hexagon className="w-5 h-5" />
                <span className="font-medium">15+ Projects</span>
              </div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5" />
                <span className="font-medium">Professional Quality</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/blog" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span>View Our Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-cyan-400/50 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Github className="w-5 h-5" />
                  <span>Source Code</span>
                </div>
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-gray-900/70 backdrop-blur-2xl border-2 border-cyan-500/30 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm font-mono">~/jblinx-studio</span>
                    <button 
                      onClick={() => setIsTyping(!isTyping)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {isTyping ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="font-mono text-sm min-h-[180px]">
                  <pre className="text-green-400 whitespace-pre-wrap">
                    {terminalText}
                  </pre>
                  {isTyping && (
                    <div className="flex items-center">
                      <span className="text-green-400">⬡ </span>
                      <div className="w-2 h-5 bg-green-400 ml-2 animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">99.9%</div>
                  <div className="text-xs text-gray-300">Uptime</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-white">24/7</div>
                  <div className="text-xs text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
