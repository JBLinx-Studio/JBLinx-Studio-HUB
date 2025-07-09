
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Code, Zap, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const terminalLines = [
    '> initializing_jblinx_studio...',
    '> loading_creative_modules...',
    '> compiling_innovative_solutions...',
    '> launching_digital_artisan_mode...',
    '> STATUS: Ready to create magic ✨'
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
    }, 800);

    return () => clearInterval(interval);
  }, [currentLine, isTyping]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div 
          className="absolute w-96 h-96 border border-cyan-500/20 rounded-full animate-pulse"
          style={{
            left: mousePosition.x * 0.01 + '%',
            top: mousePosition.y * 0.01 + '%',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen">
          {/* Left: Main Content - Asymmetric layout */}
          <div className="lg:col-span-7 space-y-8">
            {/* Floating badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-full px-6 py-3 transform hover:scale-105 transition-all duration-300">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <Code className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-white/90 font-medium">Digital Artisans • Est. 2024</span>
            </div>

            {/* Revolutionary title design */}
            <div className="space-y-6">
              <div className="relative">
                <h1 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 leading-tight tracking-tight">
                  JBLinx
                </h1>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-light text-white/80">
                  We don't just code.
                </div>
                <div className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  We architect digital dreams.
                </div>
              </div>
            </div>

            {/* Unique description with typewriter effect */}
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Where conventional development ends, our journey begins. We craft immersive experiences 
                that blur the line between reality and digital imagination.
              </p>
              
              <div className="flex items-center space-x-4 text-cyan-300">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>10+ Games Shipped</span>
                </div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Terminal className="w-5 h-5" />
                  <span>50+ Templates Created</span>
                </div>
              </div>
            </div>

            {/* Revolutionary action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/portfolio" 
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <span>Explore Universe</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-2 border-cyan-400/50 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>View Source</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Terminal window */}
              <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm">~/jblinx-studio</span>
                    <button 
                      onClick={() => setIsTyping(!isTyping)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {isTyping ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="font-mono text-sm space-y-2 min-h-[200px]">
                  <pre className="text-green-400 whitespace-pre-wrap">
                    {terminalText}
                  </pre>
                  {isTyping && (
                    <div className="flex items-center">
                      <span className="text-green-400">$ </span>
                      <div className="w-2 h-5 bg-green-400 ml-1 animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-gray-300">Uptime</div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-xs text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
