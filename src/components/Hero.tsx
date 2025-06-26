
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);

  const terminalLines = [
    '> initializing_jblinx_studio...',
    '> loading_games_and_webapps...',
    '> STATUS: Ready to showcase ⬡'
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
    <section className="relative min-h-screen bg-slate-950 overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 blur-3xl"></div>
        
        {/* Geometric Pattern */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute border border-cyan-500/10 animate-pulse"
            style={{
              width: `${30 + (i % 3) * 20}px`,
              height: `${30 + (i % 3) * 20}px`,
              left: `${(i * 15) % 100}%`,
              top: `${(i * 12) % 100}%`,
              animationDelay: `${i * 0.7}s`,
              borderRadius: '8px'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Brand Badge */}
            <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-3" style={{ borderRadius: '8px' }}>
              <Hexagon className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-white/90 font-bold font-mono">GAME & WEB APP STUDIO</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight font-mono">
                <span className="text-cyan-400">JBLinx</span>
                <span className="text-white">Studio</span>
              </h1>
              
              <div className="space-y-2">
                <div className="text-2xl lg:text-3xl font-light text-white/90">
                  Premium Games & Web Applications
                </div>
                <div className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  Built by developers, for everyone.
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We develop and publish our own premium games, web applications, and developer tools. 
              Subscribe to access our growing library of digital products.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center">
                <div className="text-2xl font-black text-cyan-400 font-mono">15+</div>
                <div className="text-slate-400 text-sm font-medium">Games Published</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-purple-400 font-mono">8+</div>
                <div className="text-slate-400 text-sm font-medium">Web Apps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-yellow-400 font-mono">1000+</div>
                <div className="text-slate-400 text-sm font-medium">Active Users</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/blog" 
                className="group bg-cyan-500 text-white px-8 py-4 font-bold text-lg transition-all duration-300 hover:bg-cyan-600 shadow-lg flex items-center justify-center space-x-3"
                style={{ borderRadius: '8px' }}
              >
                <Gamepad2 className="w-5 h-5" />
                <span>EXPLORE GAMES</span>
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
                <span>VIEW SOURCE</span>
              </a>
            </div>
          </div>

          {/* Terminal */}
          <div className="lg:col-span-5">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
