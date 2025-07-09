
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Heart, Building2, Rocket, Users, Star, Award, CheckCircle, ExternalLink, Signal, Wifi, Battery, Power, Trophy } from 'lucide-react';
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
  const [liveStats, setLiveStats] = useState({
    activeUsers: 2847,
    githubStars: 1623,
    totalProjects: 47,
    satisfaction: 98.7,
    uptime: 99.9
  });

  const terminalCommands = [
    {
      command: 'jblinx system --status',
      output: [
        '████████████████████████████████ 100%',
        'JBLinx Studio Development Platform v2.1.7',
        'Initializing flagship products...',
        '',
        '┌─ SYSTEM STATUS ─────────────────────────┐',
        '│ ✓ CodeFusion Studio    [OPERATIONAL]   │',
        '│ ✓ VitalitySync Pro     [OPERATIONAL]   │', 
        '│ ✓ MindMate Gaming      [OPERATIONAL]   │',
        '│ ✓ NestCore Platform    [OPERATIONAL]   │',
        '│ ✓ CodeCraftAI Pro      [BETA-ACTIVE]   │',
        '└─────────────────────────────────────────┘',
        '',
        'All systems: NOMINAL'
      ]
    },
    {
      command: 'query --analytics --live',
      output: [
        'Retrieving live analytics...',
        '',
        '╔══════════════════════════════════════╗',
        '║           LIVE METRICS               ║',
        '╠══════════════════════════════════════╣',
        '║ Active Users     │ 2,847+    [▲]    ║',
        '║ GitHub Stars     │ 1,623+    [▲]    ║',
        '║ Projects Live    │ 47        [●]    ║',
        '║ Satisfaction     │ 98.7%     [▲]    ║',
        '║ System Uptime    │ 99.9%     [●]    ║',
        '╚══════════════════════════════════════╝',
        '',
        'Status: All systems operational'
      ]
    },
    {
      command: 'ls /ecosystem --detailed',
      output: [
        '/jblinx/ecosystem/',
        '├── development/',
        '│   ├── codefusion-studio/    # Advanced IDE',
        '│   └── codecraftai-pro/     # AI Assistant',
        '├── health-tech/',
        '│   └── vitalitysync/        # Wellness Platform',
        '├── gaming/',
        '│   └── mindmate-hub/        # Strategic Games',
        '├── proptech/',
        '│   └── nestcore/            # Real Estate Suite',
        '└── resources/',
        '    ├── documentation/',
        '    ├── templates/',
        '    └── tutorials/',
        '',
        '5 flagship products, infinite possibilities'
      ]
    }
  ];

  const productCategories = [
    {
      id: 'development',
      title: 'DEV TOOLS',
      subtitle: 'Professional Development Suite',
      icon: Code,
      color: 'from-emerald-400 to-green-500',
      terminalColor: 'text-emerald-400',
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
      subtitle: 'Strategic Gaming Platform',
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
      subtitle: 'Complete Real Estate Suite',
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

  // Enhanced Terminal Animation with better performance
  useEffect(() => {
    const typeCommand = async () => {
      if (currentCommand >= terminalCommands.length) {
        setCurrentCommand(0);
        setTerminalText('');
        return;
      }

      setIsTyping(true);
      const cmd = terminalCommands[currentCommand];
      
      // Clear and type command
      setTerminalText('');
      const commandText = `[jblinx@studio]$ ${cmd.command}`;
      
      // Type command character by character with reduced delay for better performance
      for (let i = 0; i <= commandText.length; i++) {
        setTerminalText(commandText.slice(0, i) + (i < commandText.length ? '█' : ''));
        await new Promise(resolve => setTimeout(resolve, 30));
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Show output line by line
      setTerminalText(commandText);
      for (let i = 0; i < cmd.output.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        setTerminalText(prev => prev + '\n' + cmd.output[i]);
      }
      
      await new Promise(resolve => setTimeout(resolve, 2500));
      setCurrentCommand(prev => prev + 1);
      setIsTyping(false);
    };

    const interval = setInterval(typeCommand, 10000);
    typeCommand();
    return () => clearInterval(interval);
  }, [currentCommand]);

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % productCategories.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Live stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 2),
        githubStars: prev.githubStars + Math.floor(Math.random() * 1),
        totalProjects: prev.totalProjects,
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.05),
        uptime: Math.min(99.9, prev.uptime + (Math.random() - 0.5) * 0.02)
      }));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentCategory = productCategories[activeCategory];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl animate-pulse rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500/10 to-purple-500/10 blur-3xl animate-pulse rounded-full" style={{animationDelay: '3s'}}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-8">
        <div className="grid lg:grid-cols-12 gap-8 w-full">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Studio Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-900/95 to-slate-800/95 border border-emerald-400/40 backdrop-blur-sm px-6 py-3 rounded-xl hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20">
              <div className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              <Hexagon className="w-5 h-5 text-emerald-400 mr-3" />
              <span className="text-emerald-400 font-bold text-sm font-mono tracking-wider">JBLINX DEVELOPMENT STUDIO</span>
              <div className="flex items-center ml-4 space-x-1">
                <Signal className="w-3 h-3 text-emerald-400" />
                <Wifi className="w-3 h-3 text-emerald-400" />
                <Battery className="w-3 h-3 text-emerald-400" />
              </div>
            </div>

            {/* Main Branding */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-none">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400">JBLinx</span>
                <span className="text-white ml-4">Studio</span>
              </h1>
              
              <div className="text-lg font-bold text-slate-300 flex flex-wrap items-center gap-3">
                <span className="text-emerald-400">CodeFusion</span>
                <span className="text-slate-600">█</span>
                <span className="text-red-400">VitalitySync</span>
                <span className="text-slate-600">█</span>
                <span className="text-purple-400">MindMate</span>
                <span className="text-slate-600">█</span>
                <span className="text-orange-400">NestCore</span>
                <span className="text-slate-600">█</span>
                <span className="text-cyan-400">CodeCraftAI</span>
              </div>
              
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400">
                Professional Solutions. Real Innovation. Premium Quality.
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-2xl text-lg">
              Elite development ecosystem creating flagship products across development tools, 
              health tech, gaming platforms, and property management solutions.
            </p>
            
            {/* Professional Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl">
              {[
                { value: "5", label: "FLAGSHIP", icon: Trophy, color: "text-emerald-400" },
                { value: liveStats.activeUsers.toLocaleString(), label: "ACTIVE", icon: Users, color: "text-cyan-400", live: true },
                { value: liveStats.githubStars.toLocaleString(), label: "STARS", icon: Star, color: "text-orange-400", live: true },
                { value: `${liveStats.satisfaction.toFixed(1)}%`, label: "RATING", icon: Award, color: "text-purple-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-black/60 border border-emerald-400/30 p-5 text-center backdrop-blur-sm hover:border-emerald-400/60 transition-all duration-300 group hover:bg-emerald-400/5 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-xl font-black ${stat.color} flex items-center justify-center space-x-1`}>
                      <span>{stat.value}</span>
                      {stat.live && <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>}
                    </div>
                    <div className="text-emerald-400/70 text-xs font-bold mt-1">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-emerald-500/90 to-cyan-500/90 hover:from-emerald-400 hover:to-cyan-400 text-black px-8 py-4 font-black transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 flex items-center space-x-3 hover:scale-105 transform rounded-xl text-lg border border-emerald-400/50"
              >
                <Rocket className="w-5 h-5" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-emerald-400/50 text-emerald-400 hover:border-emerald-300 hover:text-emerald-300 hover:bg-emerald-400/10 px-8 py-4 font-black transition-all duration-300 flex items-center space-x-3 hover:scale-105 transform rounded-xl text-lg"
              >
                <Github className="w-5 h-5" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Panel - Professional Terminal */}
          <div className="lg:col-span-5 space-y-6">
            {/* Enhanced Terminal */}
            <div className="bg-black/95 border-2 border-emerald-400/60 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-300 transition-all duration-300 rounded-xl shadow-2xl shadow-emerald-400/20">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b-2 border-emerald-400/40 bg-emerald-400/5">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full border border-red-600"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full border border-yellow-600"></div>
                    <div className="w-3 h-3 bg-emerald-400 rounded-full border border-emerald-600"></div>
                  </div>
                  <div className="text-emerald-400 text-sm font-bold flex items-center space-x-2">
                    <Terminal className="w-4 h-4" />
                    <span>JBLINX TERMINAL</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-emerald-400 text-xs">
                    {new Date().toLocaleTimeString()}
                  </div>
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 min-h-[280px] relative bg-black/90">
                <div className="text-emerald-400 mb-2 text-xs opacity-70">
                  JBLinx Studio Operating System v2.1.7
                </div>
                <pre className="text-emerald-400 whitespace-pre-wrap leading-relaxed text-sm">
                  {terminalText}
                </pre>
                {isTyping && (
                  <div className="inline-block w-2 h-5 bg-emerald-400 animate-pulse ml-1"></div>
                )}
                
                {!isTyping && (
                  <div className="text-emerald-400 mt-2 flex items-center">
                    <span className="mr-2">[jblinx@studio]$</span>
                    <div className="w-2 h-4 bg-emerald-400 animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Product Showcase */}
            <div className="bg-black/95 border-2 border-cyan-400/60 backdrop-blur-sm relative overflow-hidden rounded-xl shadow-2xl shadow-cyan-400/20">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"></div>
              
              {/* Category Navigation */}
              <div className="p-4 border-b-2 border-cyan-400/40 bg-cyan-400/5">
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {productCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={`relative flex items-center justify-center py-3 px-3 text-xs font-bold transition-all duration-300 group rounded-lg border-2 ${
                          activeCategory === index 
                            ? `bg-gradient-to-r ${category.color} text-black shadow-lg transform scale-102 border-white/50` 
                            : 'bg-black/80 text-slate-400 hover:bg-slate-800/80 border-slate-600/50 hover:border-slate-500'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        <div className="text-center">
                          <div className="font-black">{category.title}</div>
                          <div className="text-xs opacity-80">{category.count}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Current Category Display */}
              <div className="p-4 bg-black/90">
                <div className="mb-4">
                  <h3 className={`font-black text-lg mb-1 ${currentCategory.terminalColor}`}>
                    {currentCategory.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{currentCategory.subtitle}</p>
                </div>
                
                {/* Products List */}
                <div className="space-y-3">
                  {currentCategory.products.map((product, index) => (
                    <div key={index} className="bg-slate-900/60 border border-slate-600/50 p-4 rounded-lg hover:border-slate-500 hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-white font-black text-base group-hover:text-cyan-300 transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-slate-400 text-sm">{product.type}</p>
                          </div>
                          <div className="text-right">
                            {product.rating && (
                              <div className="flex items-center space-x-1 text-sm">
                                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
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
                          <div className={`px-3 py-1 text-xs font-bold border rounded-full ${
                            product.status === 'Production' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' :
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
              <div className="flex items-center justify-between p-4 border-t-2 border-cyan-400/40 bg-cyan-400/5">
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">ALL SYSTEMS OPERATIONAL</span>
                  </div>
                </div>
                
                <a 
                  href="https://github.com/orgs/JBLinx-Studio/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${currentCategory.color} hover:shadow-lg text-black px-4 py-2 text-xs font-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 rounded-lg border border-white/20`}
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
