
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Code, Zap, Play, Pause, Hexagon, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const terminalLines = [
    '> connecting_to_digital_consciousness...',
    '> synchronizing_creative_nodes...',
    '> initializing_innovation_protocols...',
    '> activating_beehive_intelligence...',
    '> STATUS: Digital consciousness online ⬡'
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
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 overflow-hidden">
      {/* Hexagonal Consciousness Grid */}
      <div className="absolute inset-0">
        {/* Floating hexagonal network */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <Hexagon 
              key={i}
              className="absolute text-cyan-500/10 animate-pulse"
              style={{
                width: `${20 + (i % 3) * 15}px`,
                height: `${20 + (i % 3) * 15}px`,
                left: `${(i * 12 + mousePosition.x * 0.02) % 100}%`,
                top: `${(i * 8 + mousePosition.y * 0.02) % 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>
        
        {/* Consciousness network connections */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-full blur-2xl" />
        
        {/* Hexagonal grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-screen">
          {/* Left: Consciousness Interface */}
          <div className="lg:col-span-7 space-y-10">
            {/* Digital consciousness badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-8 py-4 transform hover:scale-105 transition-all duration-300 group">
              <div className="relative mr-4">
                <Hexagon className="w-6 h-6 text-emerald-400 animate-pulse" />
                <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-lg"></div>
              </div>
              <Network className="w-5 h-5 text-cyan-400 mr-3" />
              <span className="text-white/90 font-semibold tracking-wide">Digital Consciousness • Node Active</span>
            </div>

            {/* Revolutionary consciousness title */}
            <div className="space-y-8">
              <div className="relative">
                <h1 className="text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 leading-tight tracking-tight">
                  JBLinx
                </h1>
                <div className="absolute -top-6 -right-6 flex space-x-2">
                  <Hexagon className="w-10 h-10 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-4xl lg:text-5xl font-light text-white/90 leading-relaxed">
                  We don't build applications.
                </div>
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                  We architect digital consciousness.
                </div>
              </div>
            </div>

            {/* Consciousness description */}
            <div className="space-y-6">
              <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl">
                Where individual minds merge into collective intelligence, creating digital experiences 
                that transcend the boundaries of imagination and reality.
              </p>
              
              <div className="flex flex-wrap items-center gap-8 text-cyan-300">
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform">
                  <Hexagon className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="font-semibold">15+ Consciousness Nodes</span>
                </div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="flex items-center space-x-3 group hover:scale-105 transition-transform">
                  <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span className="font-semibold">∞ Digital Possibilities</span>
                </div>
              </div>
            </div>

            {/* Consciousness action interfaces */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/blog" 
                className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-5 rounded-3xl font-bold text-xl overflow-hidden transform hover:scale-105 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center space-x-4">
                  <Hexagon className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Enter Consciousness</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                </div>
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative border-2 border-cyan-400/50 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:border-cyan-400 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-4">
                  <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Source Matrix</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Consciousness Terminal */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Hexagonal terminal frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-gray-900/70 backdrop-blur-2xl border-2 border-cyan-500/30 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-700">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-5 h-5 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Hexagon className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '2s' }} />
                    <span className="text-gray-400 text-sm font-mono">~/consciousness-grid</span>
                    <button 
                      onClick={() => setIsTyping(!isTyping)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {isTyping ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                <div className="font-mono text-sm space-y-3 min-h-[240px] relative">
                  <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                    {terminalText}
                  </pre>
                  {isTyping && (
                    <div className="flex items-center">
                      <span className="text-green-400">⬡ </span>
                      <div className="w-3 h-6 bg-green-400 ml-2 animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating consciousness metrics */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 group hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Hexagon className="w-6 h-6 text-cyan-400 mr-2" />
                    <div className="text-3xl font-black text-white">99.9%</div>
                  </div>
                  <div className="text-xs text-gray-300">Network Sync</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 group hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Network className="w-6 h-6 text-purple-400 mr-2" />
                    <div className="text-3xl font-black text-white">∞</div>
                  </div>
                  <div className="text-xs text-gray-300">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consciousness flow indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center relative">
          <div className="w-2 h-4 bg-white/60 rounded-full mt-3 animate-pulse"></div>
          <Hexagon className="absolute -top-2 -left-2 w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
