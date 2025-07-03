
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap, Play, Download, Users, Trophy, Star, Shield, Globe, Database, Filter, Search, TrendingUp, Clock, Award, Layers, Smartphone, Rocket, Brain, Sparkles, Target, Heart, Eye, Cpu, Monitor, Palette, Settings, BarChart3, Lock, CheckCircle, Building2, Factory, Briefcase, ExternalLink, ChevronRight, Flame, Crown, Diamond, Home, Scale, PenTool, Dumbbell, Activity, HeartHandshake, BookOpen, FileCode, Wrench, MapPin, Bolt } from 'lucide-react';
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
    satisfaction: 98.7
  });

  const terminalCommands = [
    {
      command: 'ls -la /jblinx-studio/flagship-products/',
      output: [
        'total 5 flagship products',
        'drwxr-xr-x  codefusion-ide/     # Advanced IDE Platform',
        'drwxr-xr-x  vitalitysync/       # Health & Wellness Tracker',
        'drwxr-xr-x  mindmate-games/     # Strategic Board Gaming Hub',
        'drwxr-xr-x  nestcore-realestate/  # Property Management Suite',
        'drwxr-xr-x  codecraftai/        # AI Development Assistant'
      ]
    },
    {
      command: 'cat /jblinx-studio/stats.json',
      output: [
        '{',
        '  "active_users": "2,847+",',
        '  "github_stars": "1,623+",',
        '  "projects_live": 47,',
        '  "client_satisfaction": "98.7%",',
        '  "uptime": "99.9%"',
        '}'
      ]
    },
    {
      command: 'systemctl status jblinx-studio',
      output: [
        '● jblinx-studio.service - Premium Development Studio',
        '   Loaded: loaded (/etc/systemd/system/jblinx-studio.service)',
        '   Active: active (running) since 2024',
        '   Status: "All systems operational - Premium tier active"',
        '   Memory: Optimized for performance',
        '   Tasks: 5 flagship products running'
      ]
    }
  ];

  const productCategories = [
    {
      id: 'development',
      title: 'DEVELOPMENT SUITE',
      subtitle: 'Professional IDE & AI Tools',
      icon: Code,
      color: 'cyan',
      gradient: 'from-cyan-400 via-blue-500 to-cyan-600',
      bgGradient: 'from-cyan-500/15 to-blue-500/10',
      count: '3 Premium Tools',
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
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
          badges: ['🚀 FLAGSHIP', '⚡ LIVE'],
          description: 'Advanced web-based IDE similar to CodePen but with superior features, real-time collaboration, and professional development tools.'
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
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
          badges: ['🤖 AI-POWERED', '🔥 TRENDING'],
          description: 'AI-powered fullstack development assistant similar to Lovable, building complete applications with intelligent code generation.'
        }
      ] as ProductItem[]
    },
    {
      id: 'health',
      title: 'HEALTH & WELLNESS',
      subtitle: 'Advanced Health Tracking',
      icon: Heart,
      color: 'emerald',
      gradient: 'from-emerald-400 via-green-500 to-emerald-600',
      bgGradient: 'from-emerald-500/15 to-green-500/10',
      count: '1 Premium App',
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
          image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
          badges: ['💚 FLAGSHIP', '📊 ANALYTICS'],
          description: 'Comprehensive health tracking platform similar to FatSecret and health apps, with advanced analytics and personalized insights.'
        }
      ] as ProductItem[]
    },
    {
      id: 'gaming',
      title: 'STRATEGIC GAMING',
      subtitle: 'Interactive Board Games',
      icon: Gamepad2,
      color: 'purple',
      gradient: 'from-purple-400 via-pink-500 to-purple-600',
      bgGradient: 'from-purple-500/15 to-pink-500/10',
      count: '1 Gaming Hub',
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
          image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=250&fit=crop',
          badges: ['🎮 FLAGSHIP', '🏆 FEATURED'],
          description: 'Premium gaming webapp featuring chess, strategic board games, comprehensive tutorials, and multiplayer lobbies.'
        }
      ] as ProductItem[]
    },
    {
      id: 'realestate',
      title: 'PROPERTY TECH',
      subtitle: 'Complete Real Estate Platform',
      icon: Building2,
      color: 'orange',
      gradient: 'from-orange-400 via-red-500 to-orange-600',
      bgGradient: 'from-orange-500/15 to-red-500/10',
      count: '1 Platform Suite',
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
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop',
          badges: ['🏢 ENTERPRISE', '⭐ PREMIUM'],
          description: 'Comprehensive real estate platform for property owners, lessees, agents, lawyers, and all stakeholders in the property ecosystem.'
        }
      ] as ProductItem[]
    }
  ];

  // Terminal typewriter effect
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
      const commandText = `jblinx@studio:~$ ${cmd.command}`;
      
      for (let i = 0; i <= commandText.length; i++) {
        setTerminalText(commandText.slice(0, i) + (i < commandText.length ? '█' : ''));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Show output
      setTerminalText(commandText);
      for (let i = 0; i < cmd.output.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 300));
        setTerminalText(prev => prev + '\n' + cmd.output[i]);
      }
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      setCurrentCommand(prev => prev + 1);
      setIsTyping(false);
    };

    const interval = setInterval(typeCommand, 8000);
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
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        githubStars: prev.githubStars + Math.floor(Math.random() * 2),
        totalProjects: prev.totalProjects,
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.1)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentCategory = productCategories[activeCategory];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-500/20 to-orange-500/20 blur-3xl animate-pulse rounded-full" style={{animationDelay: '2s'}}></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: '60px 60px, 60px 60px, 800px 800px, 600px 600px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-8">
        <div className="grid lg:grid-cols-12 gap-6 w-full">
          {/* Left Content - More Compact */}
          <div className="lg:col-span-7 space-y-6">
            {/* Studio Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800/90 to-slate-700/90 border border-cyan-400/60 backdrop-blur-sm px-4 py-2 rounded-xl hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
              <Hexagon className="w-5 h-5 text-cyan-400 mr-3 animate-spin" style={{animationDuration: '6s'}} />
              <span className="text-cyan-400 font-black text-sm font-mono tracking-wider">PREMIUM DEVELOPMENT STUDIO</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
            </div>

            {/* Main Branding */}
            <div className="space-y-3">
              <h1 className="text-5xl lg:text-6xl font-black text-white leading-none font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">JBLinx</span>
                <span className="text-white ml-2">Studio</span>
              </h1>
              
              <div className="text-xl font-bold text-slate-300 font-mono flex flex-wrap items-center gap-2">
                <span className="text-cyan-400">CodeFusion</span>
                <span className="text-slate-500">•</span>
                <span className="text-emerald-400">VitalitySync</span>
                <span className="text-slate-500">•</span>
                <span className="text-purple-400">MindMate</span>
                <span className="text-slate-500">•</span>
                <span className="text-orange-400">NestCore</span>
                <span className="text-slate-500">•</span>
                <span className="text-blue-400">CodeCraftAI</span>
              </div>
              
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400">
                Professional Solutions. Real Innovation. Premium Quality.
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-2xl text-lg">
              Elite development studio creating flagship products: Advanced IDE platforms, AI-powered development tools, 
              comprehensive health tracking, strategic gaming hubs, and complete real estate solutions.
            </p>
            
            {/* Compact Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl">
              {[
                { value: "5", label: "Flagship Products", icon: Trophy, color: "text-cyan-400" },
                { value: liveStats.activeUsers.toLocaleString(), label: "Active Users", icon: Users, color: "text-emerald-400", live: true },
                { value: liveStats.githubStars.toLocaleString(), label: "GitHub Stars", icon: Star, color: "text-orange-400", live: true },
                { value: `${liveStats.satisfaction.toFixed(1)}%`, label: "Satisfaction", icon: Award, color: "text-purple-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/80 border border-slate-700/50 p-4 text-center backdrop-blur-sm hover:border-slate-600 transition-all duration-300 group hover:bg-slate-700/90 rounded-xl">
                    <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-lg font-black ${stat.color} font-mono flex items-center justify-center space-x-1`}>
                      <span>{stat.value}</span>
                      {stat.live && <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>}
                    </div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 font-black transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center space-x-3 hover:scale-105 transform rounded-xl text-lg"
              >
                <Rocket className="w-5 h-5" />
                <span>EXPLORE PORTFOLIO</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 font-black transition-all duration-300 flex items-center space-x-3 hover:scale-105 transform rounded-xl text-lg"
              >
                <Github className="w-5 h-5" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Panel - Enhanced */}
          <div className="lg:col-span-5 space-y-4">
            {/* Enhanced Terminal */}
            <div className="bg-slate-900/95 border border-slate-700/50 backdrop-blur-sm relative overflow-hidden group hover:border-slate-600 transition-all duration-300 rounded-xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400"></div>
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-green-400 text-sm font-mono font-bold">JBLINX TERMINAL</div>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm min-h-[200px] relative">
                <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                  {terminalText}
                </pre>
                {isTyping && (
                  <div className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1"></div>
                )}
              </div>
            </div>

            {/* Enhanced Product Showcase */}
            <div className="bg-slate-800/95 border border-slate-700/50 backdrop-blur-sm relative overflow-hidden rounded-xl">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              
              {/* Category Navigation */}
              <div className="p-4 border-b border-slate-700/50">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {productCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={`relative flex items-center justify-center py-3 px-3 text-xs font-black transition-all duration-300 group rounded-lg ${
                          activeCategory === index 
                            ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg transform scale-105` 
                            : 'bg-slate-700/80 text-slate-400 hover:bg-slate-600/80'
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
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="text-white font-black text-lg mb-1">{currentCategory.title}</h3>
                  <p className="text-slate-400 text-sm">{currentCategory.subtitle}</p>
                </div>
                
                {/* Products List */}
                <div className="space-y-3">
                  {currentCategory.products.map((product, index) => (
                    <div key={index} className="bg-slate-900/60 border border-slate-600/50 p-4 rounded-lg hover:border-slate-500 hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer">
                      {/* Product Image */}
                      {product.image && (
                        <div className="relative h-32 mb-3 overflow-hidden rounded-lg">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                          <div className="absolute top-2 right-2 flex space-x-1">
                            {product.badges?.map((badge, badgeIndex) => (
                              <span key={badgeIndex} className="px-2 py-1 text-xs font-bold bg-slate-900/80 text-white rounded-full">
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Product Info */}
                      <div className="space-y-2">
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
                          <div className={`px-3 py-1 text-xs font-bold border rounded-full ${
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
                            <span>VIEW PROJECT</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-4 border-t border-slate-700/50 bg-slate-900/40">
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold">ALL SYSTEMS LIVE</span>
                  </div>
                </div>
                
                <a 
                  href="https://github.com/orgs/JBLinx-Studio/repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-gradient-to-r ${currentCategory.gradient} hover:shadow-lg text-white px-4 py-2 text-xs font-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 rounded-lg`}
                >
                  <Github className="w-3 h-3" />
                  <span>VIEW ALL PROJECTS</span>
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
