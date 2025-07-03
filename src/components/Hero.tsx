
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap, Play, Download, Users, Trophy, Star, Shield, Globe, Database, Filter, Search, TrendingUp, Clock, Award, Layers, Smartphone, Rocket, Brain, Sparkles, Target, Heart, Eye, Cpu, Monitor, Palette, Settings, BarChart3, Lock, CheckCircle, Building2, Factory, Briefcase, ExternalLink, ChevronRight, Flame, Crown, Diamond, Home, Scale, PenTool, Dumbbell, Activity, HeartHandshake, BookOpen, FileCode, Wrench, MapPin, Bolt, Power, Wifi, Battery, Signal } from 'lucide-react';
import { Link } from 'react-router-dom';

// Unified product interface
interface ProductItem {
  name: string;
  category: string;
  type: string;
  status: string;
  rating?: number;
  users?: string;
  downloads?: string;
  price?: string;
  link: string;
  image?: string;
  badges?: string[];
  description: string;
}

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [scanlineOpacity, setScanlineOpacity] = useState(0.1);
  const [terminalPower, setTerminalPower] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [liveStats, setLiveStats] = useState({
    activeUsers: 2847,
    githubStars: 1623,
    totalProjects: 47,
    satisfaction: 98.7,
    uptime: 99.9
  });

  // Typewriter sound effect
  const playTypewriterSound = () => {
    try {
      // Create a simple beep sound
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.type = 'square';
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    } catch (error) {
      // Fallback for browsers that don't support Web Audio API
      console.log('Typewriter sound not supported');
    }
  };

  const terminalCommands = [
    {
      prompt: 'root@jblinx-mainframe:~# ',
      lines: [
        'system-scan --flagship-products',
        '',
        '┌─ JBLINX ECOSYSTEM STATUS ─────────────────┐',
        '│ ✓ CodeFusion Studio    [OPERATIONAL]      │',
        '│ ✓ VitalitySync Pro     [OPERATIONAL]      │', 
        '│ ✓ MindMate Gaming      [OPERATIONAL]      │',
        '│ ✓ NestCore Platform    [OPERATIONAL]      │',
        '│ ✓ CodeCraftAI Pro      [BETA-ACTIVE]      │',
        '└───────────────────────────────────────────┘',
        '',
        '[SUCCESS] All flagship systems nominal'
      ]
    },
    {
      prompt: 'root@jblinx-mainframe:~# ',
      lines: [
        'analytics --live-metrics --realtime',
        '',
        '╔══════════════════════════════════════════╗',
        '║           LIVE SYSTEM METRICS            ║',
        '╠══════════════════════════════════════════╣',
        '║ Active Users     │ 2,847+    [████▲]    ║',
        '║ GitHub Stars     │ 1,623+    [███▲]     ║',
        '║ Projects Live    │ 47        [███●]     ║',
        '║ Satisfaction     │ 98.7%     [████▲]    ║',
        '║ System Uptime    │ 99.9%     [████●]    ║',
        '╚══════════════════════════════════════════╝',
        '',
        '[INFO] Performance: Optimal across all nodes'
      ]
    },
    {
      prompt: 'root@jblinx-mainframe:~# ',
      lines: [
        'tree /ecosystem --depth=3 --active-only',
        '',
        '/jblinx-ecosystem/',
        '├── development-suite/',
        '│   ├── codefusion-studio/     # Advanced IDE',
        '│   └── codecraftai-pro/      # AI Engineer',
        '├── health-platform/',
        '│   └── vitalitysync/         # Wellness Tracker',
        '├── gaming-hub/',
        '│   └── mindmate/             # Strategic Games',
        '├── property-tech/',
        '│   └── nestcore/             # Real Estate Suite',
        '└── community/',
        '    ├── tutorials/           # Learning Resources',
        '    └── documentation/       # Technical Docs',
        '',
        '[SUMMARY] 5 flagship products | Infinite possibilities'
      ]
    },
    {
      prompt: 'root@jblinx-mainframe:~# ',
      lines: [
        'security-audit --comprehensive --realtime',
        '',
        '████████████████████████████████ 100%',
        '',
        'SECURITY SCAN COMPLETE',
        '┌─ THREAT ASSESSMENT ────────────────────┐',
        '│ Zero vulnerabilities detected          │',
        '│ SSL certificates: Valid                │',
        '│ Authentication: Multi-factor enabled   │',
        '│ Data encryption: AES-256               │',
        '│ Backup systems: Operational            │',
        '└────────────────────────────────────────┘',
        '',
        '[SECURE] All systems protected and monitored'
      ]
    }
  ];

  const productCategories = [
    {
      id: 'development',
      title: 'DEV SUITE',
      subtitle: 'Professional IDE & AI Tools',
      icon: Code,
      color: 'from-green-400 to-emerald-500',
      terminalColor: 'text-green-400',
      count: '2 Tools',
      products: [
        {
          name: 'CodeFusion Studio',
          category: 'IDE Platform',
          type: 'Web-Based IDE',
          status: 'Production',
          rating: 4.9,
          users: '50k+',
          price: 'Free',
          link: 'https://github.com/JBLinx-Studio/CodeFusion',
          badges: ['🚀 FLAGSHIP', '⚡ LIVE'],
          description: 'Advanced web-based IDE with real-time collaboration and professional development tools.'
        },
        {
          name: 'CodeCraftAI Pro',
          category: 'AI Development',
          type: 'Fullstack AI Engineer',
          status: 'Beta Launch',
          rating: 4.8,
          users: '25k+',
          price: '$99/mo',
          link: 'https://github.com/JBLinx-Studio/CodeCraftAI',
          badges: ['🤖 AI-POWERED', '🔥 TRENDING'],
          description: 'AI-powered fullstack development assistant building complete applications.'
        }
      ] as ProductItem[]
    },
    {
      id: 'health',
      title: 'HEALTH TECH',
      subtitle: 'Advanced Wellness Platform',
      icon: Heart,
      color: 'from-red-400 to-pink-500',
      terminalColor: 'text-red-400',
      count: '1 Platform',
      products: [
        {
          name: 'VitalitySync Pro',
          category: 'Health Platform',
          type: 'Wellness Tracker',
          status: 'Production',
          rating: 4.9,
          users: '85k+',
          price: 'Freemium',
          link: 'https://github.com/JBLinx-Studio/VitalitySync',
          badges: ['💚 FLAGSHIP', '📊 ANALYTICS'],
          description: 'Comprehensive health tracking with advanced analytics and personalized insights.'
        }
      ] as ProductItem[]
    },
    {
      id: 'gaming',
      title: 'GAMING HUB',
      subtitle: 'Strategic Board Games',
      icon: Gamepad2,
      color: 'from-purple-400 to-violet-500',
      terminalColor: 'text-purple-400',
      count: '1 Hub',
      products: [
        {
          name: 'MindMate Gaming Hub',
          category: 'Gaming Platform',
          type: 'Board Game Lobby',
          status: 'Production',
          rating: 4.8,
          users: '42k+',
          price: 'Free',
          link: 'https://github.com/JBLinx-Studio/MindMate',
          badges: ['🎮 FLAGSHIP', '🏆 FEATURED'],
          description: 'Premium gaming platform featuring chess, strategic games, and multiplayer lobbies.'
        }
      ] as ProductItem[]
    },
    {
      id: 'proptech',
      title: 'PROPERTY TECH',
      subtitle: 'Complete Real Estate Platform',
      icon: Building2,
      color: 'from-orange-400 to-yellow-500',
      terminalColor: 'text-orange-400',
      count: '1 Suite',
      products: [
        {
          name: 'NestCore Platform',
          category: 'PropTech Suite',
          type: 'All-in-One Platform',
          status: 'Production',
          rating: 4.9,
          users: '12k+',
          price: 'Enterprise',
          link: 'https://github.com/JBLinx-Studio/NestCore',
          badges: ['🏢 ENTERPRISE', '⭐ PREMIUM'],
          description: 'Comprehensive real estate platform for all property ecosystem stakeholders.'
        }
      ] as ProductItem[]
    }
  ];

  // Enhanced Terminal Animation with cycling content
  useEffect(() => {
    const typeCommand = async () => {
      if (currentCommand >= terminalCommands.length) {
        setCurrentCommand(0);
        return;
      }

      setIsTyping(true);
      const cmd = terminalCommands[currentCommand];
      setCurrentLine(0);
      
      // Clear terminal
      setTerminalText('');
      
      // Type prompt
      const prompt = cmd.prompt;
      for (let i = 0; i <= prompt.length; i++) {
        setTerminalText(prompt.slice(0, i));
        if (i < prompt.length) playTypewriterSound();
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      
      // Type command (first line)
      if (cmd.lines.length > 0) {
        const command = cmd.lines[0];
        for (let i = 0; i <= command.length; i++) {
          setTerminalText(prompt + command.slice(0, i));
          if (i < command.length) playTypewriterSound();
          await new Promise(resolve => setTimeout(resolve, 40));
        }
      }
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show output lines one by one
      let fullText = prompt + (cmd.lines[0] || '') + '\n';
      for (let i = 1; i < cmd.lines.length; i++) {
        fullText += cmd.lines[i] + '\n';
        setTerminalText(fullText);
        await new Promise(resolve => setTimeout(resolve, 150));
      }
      
      // Hold display for a moment
      await new Promise(resolve => setTimeout(resolve, 4000));
      
      // Clear with fade effect
      for (let opacity = 100; opacity >= 0; opacity -= 10) {
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      setCurrentCommand(prev => (prev + 1) % terminalCommands.length);
      setIsTyping(false);
    };

    const interval = setInterval(typeCommand, 8000);
    typeCommand();
    return () => clearInterval(interval);
  }, [currentCommand]);

  // Scanline effect
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlineOpacity(prev => prev === 0.1 ? 0.2 : 0.1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % productCategories.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Live stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        githubStars: prev.githubStars + Math.floor(Math.random() * 2),
        totalProjects: prev.totalProjects,
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.1),
        uptime: Math.min(99.9, prev.uptime + (Math.random() - 0.5) * 0.05)
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentCategory = productCategories[activeCategory];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-3xl animate-pulse rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl animate-pulse rounded-full" style={{animationDelay: '3s'}}></div>
        
        {/* Matrix-style grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-6">
        <div className="grid lg:grid-cols-12 gap-6 w-full">
          {/* Left Content - Streamlined */}
          <div className="lg:col-span-7 space-y-5">
            {/* Studio Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-900/95 to-slate-800/95 border border-green-400/40 backdrop-blur-sm px-5 py-2.5 rounded-xl hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <Hexagon className="w-5 h-5 text-green-400 mr-3 animate-spin" style={{animationDuration: '8s'}} />
              <span className="text-green-400 font-black text-sm font-mono tracking-wider">JBLINX DEVELOPMENT STUDIO</span>
              <div className="flex items-center ml-4 space-x-1">
                <Signal className="w-3 h-3 text-green-400" />
                <Wifi className="w-3 h-3 text-green-400" />
                <Battery className="w-3 h-3 text-green-400" />
              </div>
            </div>

            {/* Main Branding */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-none font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400">JBLinx</span>
                <span className="text-white ml-3">Studio</span>
              </h1>
              
              <div className="text-lg font-bold text-slate-300 font-mono flex flex-wrap items-center gap-2">
                <span className="text-green-400">CodeFusion</span>
                <span className="text-slate-600">█</span>
                <span className="text-red-400">VitalitySync</span>
                <span className="text-slate-600">█</span>
                <span className="text-purple-400">MindMate</span>
                <span className="text-slate-600">█</span>
                <span className="text-orange-400">NestCore</span>
                <span className="text-slate-600">█</span>
                <span className="text-cyan-400">CodeCraftAI</span>
              </div>
              
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-green-400">
                PROFESSIONAL SOLUTIONS. REAL INNOVATION. PREMIUM QUALITY.
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-2xl text-lg font-mono">
              &gt; Elite development ecosystem creating flagship products across development tools, 
              health tech, gaming platforms, and property management solutions.
            </p>
            
            {/* Compact Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl">
              {[
                { value: "5", label: "FLAGSHIP", icon: Trophy, color: "text-green-400" },
                { value: liveStats.activeUsers.toLocaleString(), label: "ACTIVE", icon: Users, color: "text-cyan-400", live: true },
                { value: liveStats.githubStars.toLocaleString(), label: "STARS", icon: Star, color: "text-orange-400", live: true },
                { value: `${liveStats.satisfaction.toFixed(1)}%`, label: "RATING", icon: Award, color: "text-purple-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-black/80 border border-green-400/30 p-4 text-center backdrop-blur-sm hover:border-green-400/60 transition-all duration-300 group hover:bg-green-400/5 rounded-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-lg font-black ${stat.color} font-mono flex items-center justify-center space-x-1`}>
                      <span>{stat.value}</span>
                      {stat.live && <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>}
                    </div>
                    <div className="text-green-400/70 text-xs font-mono font-bold">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-green-500/90 to-cyan-500/90 hover:from-green-400 hover:to-cyan-400 text-black px-8 py-4 font-black transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 flex items-center space-x-3 hover:scale-105 transform rounded-lg text-lg border border-green-400/50"
              >
                <Rocket className="w-5 h-5" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-green-400/50 text-green-400 hover:border-green-300 hover:text-green-300 hover:bg-green-400/10 px-8 py-4 font-black transition-all duration-300 flex items-center space-x-3 hover:scale-105 transform rounded-lg text-lg font-mono"
              >
                <Github className="w-5 h-5" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Panel - Enhanced Terminal */}
          <div className="lg:col-span-5 space-y-4">
            {/* Retro Terminal */}
            <div className="bg-black border-2 border-green-400/60 backdrop-blur-sm relative overflow-hidden group hover:border-green-300 transition-all duration-300 rounded-none shadow-2xl shadow-green-400/20" style={{fontFamily: 'monospace'}}>
              {/* CRT Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent pointer-events-none animate-pulse"></div>
              
              {/* Scanlines */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.03) 2px, rgba(0, 255, 0, 0.03) 4px)',
                  opacity: scanlineOpacity
                }}
              ></div>
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-3 border-b border-green-400/40 bg-green-400/5">
                <div className="flex items-center space-x-3">
                  <div className="text-green-400 text-xs font-mono font-bold flex items-center space-x-2">
                    <Terminal className="w-4 h-4" />
                    <span>JBLINX MAINFRAME v3.7.2</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-400 text-xs font-mono">
                    UPTIME: {liveStats.uptime.toFixed(1)}%
                  </div>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm h-80 bg-black relative overflow-hidden">
                <div className="text-green-400/70 mb-2 text-xs">
                  JBLinx Unified Operating System - Secure Terminal Access
                </div>
                <pre className="text-green-400 whitespace-pre-wrap leading-relaxed text-sm h-full overflow-hidden">
                  {terminalText}
                </pre>
                
                {/* Blinking cursor */}
                {isTyping && (
                  <div className="inline-block w-2 h-4 bg-green-400 animate-pulse"></div>
                )}
              </div>
            </div>

            {/* Enhanced Product Showcase */}
            <div className="bg-black border-2 border-cyan-400/60 backdrop-blur-sm relative overflow-hidden rounded-none shadow-2xl shadow-cyan-400/20">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"></div>
              
              {/* Category Navigation */}
              <div className="p-4 border-b border-cyan-400/40 bg-cyan-400/5">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {productCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={`relative flex items-center justify-center py-3 px-2 text-xs font-black transition-all duration-300 group border ${
                          activeCategory === index 
                            ? `bg-gradient-to-r ${category.color} text-black shadow-lg transform scale-105 border-white/50` 
                            : 'bg-black text-slate-400 hover:bg-slate-800/80 border-slate-600/50 hover:border-slate-500'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        <div className="text-center">
                          <div className="text-xs font-black">{category.title}</div>
                          <div className="text-xs opacity-80">{category.count}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Current Category Display */}
              <div className="p-4 bg-black">
                <div className="mb-4">
                  <h3 className={`font-black text-lg mb-1 ${currentCategory.terminalColor}`}>
                    {currentCategory.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-mono">{currentCategory.subtitle}</p>
                </div>
                
                {/* Products List */}
                <div className="space-y-3">
                  {currentCategory.products.map((product, index) => (
                    <div key={index} className="bg-slate-900/60 border border-slate-600/50 p-4 hover:border-slate-500 hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-white font-black text-base group-hover:text-cyan-300 transition-colors font-mono">
                              {product.name}
                            </h4>
                            <p className="text-slate-400 text-sm">{product.type}</p>
                          </div>
                          <div className="text-right">
                            {product.rating && (
                              <div className="flex items-center space-x-1 text-sm">
                                <Star className="w-4 h-4 text-yellow-400" />
                                <span className="text-slate-300 font-bold">{product.rating}</span>
                              </div>
                            )}
                            <div className="text-slate-400 text-xs">{product.users}</div>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {product.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className={`px-3 py-1 text-xs font-bold border ${
                            product.status === 'Production' ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                            product.status === 'Beta Launch' ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50' :
                            'bg-orange-500/20 text-orange-400 border-orange-500/50'
                          }`}>
                            {product.status}
                          </div>
                          <a 
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1 text-sm font-bold"
                          >
                            <span>ACCESS</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-4 border-t border-cyan-400/40 bg-cyan-400/5">
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold font-mono">ALL SYSTEMS OPERATIONAL</span>
                  </div>
                </div>
                
                <a 
                  href="https://github.com/orgs/JBLinx-Studio/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${currentCategory.color} hover:shadow-lg text-black px-4 py-2 text-xs font-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 border border-white/20`}
                >
                  <Github className="w-3 h-3" />
                  <span>VIEW ALL</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
