
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Code, Zap, Play, Pause, Crown, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const terminalLines = [
    '> connecting_to_divine_consciousness...',
    '> synchronizing_sacred_protocols...',
    '> initializing_blessed_frameworks...',
    '> activating_orthodox_innovation...',
    '> STATUS: Sacred digital realm online ✟'
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 overflow-hidden">
      {/* Sacred Orthodox Grid */}
      <div className="absolute inset-0">
        {/* Sacred Cross Pattern */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-24 h-24 border-2 border-yellow-400/10 rotate-45 animate-pulse"
              style={{
                left: `${(i * 20 + mousePosition.x * 0.01) % 100}%`,
                top: `${(i * 15 + mousePosition.y * 0.01) % 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 2)}s`,
                borderRadius: '20%'
              }}
            />
          ))}
        </div>
        
        {/* Divine Light Emanations */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl" />
        
        {/* Sacred Geometry Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* Divine Rays */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-400/30 via-transparent to-transparent transform -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Left: Divine Interface */}
          <div className="lg:col-span-7 space-y-10">
            {/* Sacred Digital Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/10 to-purple-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 group">
              <div className="relative mr-4">
                <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />
                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg"></div>
              </div>
              <Sparkles className="w-5 h-5 text-orange-400 mr-3" />
              <span className="text-white/90 font-semibold tracking-wide">Sacred Digital Artisans • Blessed Innovation</span>
            </div>

            {/* Divine Title */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 leading-tight tracking-tight">
                  JBLinx
                </h1>
                <div className="absolute -top-6 -right-6 flex space-x-2">
                  <Crown className="w-10 h-10 text-yellow-400 animate-bounce" />
                  <div className="w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl lg:text-5xl font-light text-white/90 leading-relaxed">
                  We don't just build software.
                </div>
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  We craft sacred digital experiences.
                </div>
              </div>
            </div>

            {/* Sacred Description */}
            <div className="space-y-6">
              <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl">
                Where ancient wisdom meets modern innovation, creating digital sanctuaries 
                that elevate the human spirit and bless every interaction.
              </p>
              
              <div className="flex flex-wrap items-center gap-8 text-yellow-300">
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform">
                  <Crown className="w-6 h-6 group-hover:rotate-12 transition-transform duration-500" />
                  <span className="font-semibold">15+ Sacred Projects</span>
                </div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform">
                  <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">∞ Divine Possibilities</span>
                </div>
              </div>
            </div>

            {/* Sacred Action Interfaces */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/blog" 
                className="group relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-10 py-5 rounded-3xl font-bold text-xl overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center space-x-4">
                  <Crown className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Enter Sacred Realm</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-2 border-yellow-400/50 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:border-yellow-400 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-4">
                  <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Sacred Repository</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Sacred Terminal */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Sacred Terminal Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-gray-900/70 backdrop-blur-2xl border-2 border-yellow-500/30 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-700">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-5 h-5 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Crown className="w-5 h-5 text-yellow-400 animate-pulse" />
                    <span className="text-gray-400 text-sm font-mono">~/sacred-realm</span>
                    <button 
                      onClick={() => setIsTyping(!isTyping)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {isTyping ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                <div className="font-mono text-sm space-y-3 min-h-[240px] relative">
                  <pre className="text-yellow-400 whitespace-pre-wrap leading-relaxed">
                    {terminalText}
                  </pre>
                  {isTyping && (
                    <div className="flex items-center">
                      <span className="text-yellow-400">✟ </span>
                      <div className="w-3 h-6 bg-yellow-400 ml-2 animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sacred Metrics */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-6 group hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Crown className="w-6 h-6 text-yellow-400 mr-2" />
                    <div className="text-3xl font-black text-white">99.9%</div>
                  </div>
                  <div className="text-xs text-gray-300">Sacred Uptime</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500/20 to-orange-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 group hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-6 h-6 text-purple-400 mr-2" />
                    <div className="text-3xl font-black text-white">∞</div>
                  </div>
                  <div className="text-xs text-gray-300">Divine Grace</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sacred Flow Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative">
          <div className="w-2 h-4 bg-white/60 rounded-full mt-3 animate-pulse"></div>
          <Crown className="absolute -top-2 -left-2 w-4 h-4 text-yellow-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
