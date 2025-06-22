
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Network, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    '> initializing_development_environment...',
    '> loading_creative_systems...',
    '> STATUS: Ready for innovation ⬡'
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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <Hexagon 
            key={i}
            className="absolute text-cyan-500/10 animate-pulse"
            style={{
              width: `${20 + (i % 3) * 10}px`,
              height: `${20 + (i % 3) * 10}px`,
              left: `${(i * 20) % 100}%`,
              top: `${(i * 15) % 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-6 py-3">
              <Network className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-white/90 font-medium">Development Studio</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 leading-tight">
                JBLinx
              </h1>
              
              <div className="space-y-2">
                <div className="text-2xl lg:text-3xl font-light text-white/90">
                  We craft digital experiences
                </div>
                <div className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  that inspire innovation.
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
                <Zap className="w-5 h-5" />
                <span className="font-medium">Quality Focused</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/blog" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span>Explore Our Work</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
