
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const terminalLines = [
    '> initializing_jblinx_studio...',
    '> loading_games_and_webapps...',
    '> STATUS: Ready to showcase ⬡'
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0">
        {/* Main Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-950/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        {/* Enhanced Glowing Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Geometric Pattern */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute border border-cyan-500/20 animate-pulse"
            style={{
              width: `${20 + (i % 4) * 15}px`,
              height: `${20 + (i % 4) * 15}px`,
              left: `${(i * 12) % 100}%`,
              top: `${(i * 8) % 100}%`,
              animationDelay: `${i * 0.5}s`,
              borderRadius: `${i % 2 === 0 ? '50%' : '8px'}`,
              transform: `rotate(${i * 30}deg) translateY(${scrollY * (0.1 + i * 0.02)}px)`
            }}
          />
        ))}
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-ping"
            style={{
              left: `${10 + (i * 11) % 80}%`,
              top: `${15 + (i * 13) % 70}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${2 + (i % 3)}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Brand Badge */}
            <div className="inline-flex items-center bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 px-6 py-3 shadow-lg" style={{ borderRadius: '8px' }}>
              <Hexagon className="w-5 h-5 text-cyan-400 mr-3 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-white/90 font-bold font-mono">GAME & WEB APP STUDIO</span>
            </div>

            {/* Title with Enhanced Animation */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">JBLinx</span>
                <span className="text-white drop-shadow-lg">Studio</span>
              </h1>
              
              <div className="space-y-2">
                <div className="text-2xl lg:text-3xl font-light text-white/90 drop-shadow-md">
                  Premium Games & Web Applications
                </div>
                <div className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
                  Built by developers, for everyone.
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl drop-shadow-sm">
              We develop and publish our own premium games, web applications, and developer tools. 
              Subscribe to access our growing library of digital products.
            </p>
            
            {/* Quick Stats with Enhanced Design */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 p-4 rounded-lg">
                <div className="text-2xl font-black text-cyan-400 font-mono">15+</div>
                <div className="text-slate-400 text-sm font-medium">Games Published</div>
              </div>
              <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 p-4 rounded-lg">
                <div className="text-2xl font-black text-purple-400 font-mono">8+</div>
                <div className="text-slate-400 text-sm font-medium">Web Apps</div>
              </div>
              <div className="text-center bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 p-4 rounded-lg">
                <div className="text-2xl font-black text-yellow-400 font-mono">1000+</div>
                <div className="text-slate-400 text-sm font-medium">Active Users</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/blog" 
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 font-bold text-lg transition-all duration-300 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center space-x-3 transform hover:scale-105"
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
                className="group border-2 border-slate-600 text-white px-8 py-4 font-bold text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center space-x-3 transform hover:scale-105"
                style={{ borderRadius: '8px' }}
              >
                <Github className="w-5 h-5" />
                <span>VIEW SOURCE</span>
              </a>
            </div>
          </div>

          {/* Enhanced Terminal */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-xl animate-pulse" style={{ borderRadius: '12px' }}></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-2xl border-2 border-slate-700/50 p-6 shadow-2xl" style={{ borderRadius: '12px' }}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 animate-pulse" style={{ borderRadius: '50%' }}></div>
                    <div className="w-3 h-3 bg-yellow-500 animate-pulse" style={{ borderRadius: '50%', animationDelay: '0.5s' }}></div>
                    <div className="w-3 h-3 bg-green-500 animate-pulse" style={{ borderRadius: '50%', animationDelay: '1s' }}></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm font-mono">~/jblinx-studio</span>
                    <Terminal className="w-4 h-4 text-gray-400 animate-pulse" />
                  </div>
                </div>
                
                <div className="font-mono text-sm min-h-[120px]">
                  <pre className="text-green-400 whitespace-pre-wrap drop-shadow-sm">
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
