
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Zap, Play, Download, Star, Users, Trophy, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnhancedHero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const terminalLines = [
    '> Initializing JBLinx Studio...',
    '> Loading premium gaming portfolio...',
    '> Activating web application suite...',
    '> STATUS: All systems ready ⬡',
    '> Welcome to the future of digital products'
  ];

  useEffect(() => {
    setIsVisible(true);
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

  const floatingElements = [
    { icon: Gamepad2, color: 'text-purple-400', delay: '0s', position: 'top-20 left-20' },
    { icon: Code, color: 'text-cyan-400', delay: '0.5s', position: 'top-32 right-32' },
    { icon: Zap, color: 'text-yellow-400', delay: '1s', position: 'bottom-40 left-16' },
    { icon: Trophy, color: 'text-green-400', delay: '1.5s', position: 'bottom-32 right-20' },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Elements */}
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <div 
              key={index}
              className={`absolute ${element.position} animate-bounce ${element.color} opacity-20`}
              style={{ animationDelay: element.delay, animationDuration: '3s' }}
            >
              <IconComponent className="w-8 h-8" />
            </div>
          );
        })}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Brand Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800 to-slate-700 border border-cyan-400/30 px-6 py-3 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300" style={{ borderRadius: '12px' }}>
              <Hexagon className="w-6 h-6 text-cyan-400 mr-3 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-white font-bold font-mono text-lg tracking-wide">PREMIUM DIGITAL STUDIO</span>
            </div>

            {/* Title */}
            <div className="space-y-6">
              <h1 className="font-black leading-tight font-mono">
                <div className="text-6xl lg:text-8xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">JBLinx</span>
                </div>
                <div className="text-4xl lg:text-6xl text-white mt-2">Studio</div>
              </h1>
              
              <div className="space-y-4">
                <div className="text-2xl lg:text-4xl font-light text-white/90 leading-relaxed">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Premium Games</span>
                  <span className="text-white"> & </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Web Applications</span>
                </div>
                <div className="text-xl lg:text-2xl font-medium text-yellow-300">
                  Built by developers, for the future.
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[
                { value: '15+', label: 'Games', icon: Gamepad2, color: 'purple' },
                { value: '30+', label: 'Apps', icon: Code, color: 'cyan' },
                { value: '100K+', label: 'Downloads', icon: Download, color: 'green' },
                { value: '4.9★', label: 'Rating', icon: Star, color: 'yellow' }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-4 text-center hover:border-${stat.color}-400/50 transition-all duration-300 group`} style={{ borderRadius: '12px' }}>
                    <IconComponent className={`w-6 h-6 text-${stat.color}-400 mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                    <div className="text-2xl font-black text-white font-mono">{stat.value}</div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/game-development" 
                className="group bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white px-8 py-4 font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 flex items-center justify-center space-x-3"
                style={{ borderRadius: '12px' }}
              >
                <Gamepad2 className="w-6 h-6" />
                <span>EXPLORE GAMES</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link 
                to="/web-applications" 
                className="group bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-500 text-white px-8 py-4 font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 flex items-center justify-center space-x-3"
                style={{ borderRadius: '12px' }}
              >
                <Code className="w-6 h-6" />
                <span>VIEW APPS</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Enhanced Terminal */}
          <div className={`relative transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl" style={{ borderRadius: '20px' }}></div>
            
            <div className="relative bg-slate-900/80 backdrop-blur-2xl border-2 border-slate-700/50 shadow-2xl overflow-hidden" style={{ borderRadius: '20px' }}>
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50 bg-slate-800/50">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" style={{ borderRadius: '50%' }}></div>
                    <div className="w-4 h-4 bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" style={{ borderRadius: '50%' }}></div>
                    <div className="w-4 h-4 bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" style={{ borderRadius: '50%' }}></div>
                  </div>
                  <span className="text-slate-400 font-mono text-sm">JBLinx Studio Terminal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <span className="text-slate-400 text-sm font-mono">~/digital-studio</span>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm min-h-[300px] relative">
                <div className="space-y-2">
                  <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                    {terminalText}
                  </pre>
                  <div className="flex items-center">
                    <span className="text-green-400">⬡ </span>
                    <div className="w-3 h-6 bg-green-400 ml-2 animate-pulse"></div>
                  </div>
                </div>
                
                {/* Floating Code Elements */}
                <div className="absolute top-4 right-4 opacity-20">
                  <div className="text-cyan-400 text-xs font-mono">
                    {`{ "status": "online" }`}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 opacity-20">
                  <div className="text-purple-400 text-xs font-mono">
                    npm run deploy
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

export default EnhancedHero;
