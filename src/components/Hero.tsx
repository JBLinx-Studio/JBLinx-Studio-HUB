import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Smartphone, Rocket, Play, Download, Users, Trophy, Star, Shield, Globe, Database, Filter, Search, TrendingUp, Clock, Award, Layers, Sparkles, Target, Heart, Eye, Cpu, Monitor, Palette, Settings, BarChart3, Lock, CheckCircle, Building2, Factory, Briefcase, ExternalLink, ChevronRight, Flame, Crown, Diamond, Home, Scale, PenTool, Dumbbell, Activity, HeartHandshake, BookOpen, FileCode, Wrench, MapPin, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced Terminal Component with Advanced Typewriter Effect
const EnhancedTerminal = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);

  const terminalContent = [
    {
      command: '> jblinx_studio --initialize --premium',
      description: '🚀 Loading Professional Development Ecosystem...',
      details: 'Initializing 5 flagship applications with 50k+ active users'
    },
    {
      command: '> codefusion_studio --load --enhanced-ide',
      description: '⚡ CodeFusion Studio Online',
      details: '📝 Advanced IDE Platform - Superior to CodePen with AI assistance'
    },
    {
      command: '> vitalitysync_health --launch --smart-tracking',
      description: '💚 VitalitySync Health Platform',
      details: '🏃 Smart Health & Nutrition Tracker - FatSecret Alternative with AI'
    },
    {
      command: '> mindmate_gaming --start --strategic-hub',
      description: '🎮 MindMate Gaming Portal',
      details: '♟️ Strategic Board Games & Chess - Multiplayer tutorials & tournaments'
    },
    {
      command: '> nestcore_realestate --deploy --complete-platform',
      description: '🏢 NestCore Real Estate Suite',
      details: '🏠 All-in-One Platform - Owners, Agents, Lawyers, Property Management'
    },
    {
      command: '> codecraftai_engineer --activate --fullstack-builder',
      description: '🤖 CodeCraftAI Engineer',
      details: '🛠️ AI Fullstack Builder - Lovable Alternative with Advanced Features'
    },
    {
      command: '> jblinx_ecosystem --status --live',
      description: '✅ ALL SYSTEMS OPERATIONAL',
      details: '📊 Performance: 99.9% | GitHub Stars: 892+ | Active Users: 50k+'
    }
  ];

  // Advanced typewriter effect with sound simulation
  useEffect(() => {
    if (currentLineIndex >= terminalContent.length) return;

    const currentLine = terminalContent[currentLineIndex];
    const fullText = `${currentLine.command}\n${currentLine.description}\n${currentLine.details}`;

    if (isTyping) {
      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
          
          // Simulate typing sound with console beep (visual feedback)
          if (charIndex % 3 === 0) {
            console.log('⌨️ typing...');
          }
        }, 45 + Math.random() * 25); // Variable typing speed for realism
        return () => clearTimeout(timeout);
      } else {
        // Line completed, pause before next
        setTimeout(() => {
          setDisplayedLines(prev => [...prev, fullText]);
          setCurrentText('');
          setCharIndex(0);
          setCurrentLineIndex(prev => prev + 1);
        }, 1200);
      }
    }
  }, [charIndex, currentLineIndex, isTyping]);

  // Reset animation cycle
  useEffect(() => {
    if (currentLineIndex >= terminalContent.length) {
      setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentText('');
        setCharIndex(0);
      }, 4000);
    }
  }, [currentLineIndex]);

  return (
    <div className="bg-slate-950/98 border-2 border-cyan-400/30 backdrop-blur-sm relative overflow-hidden group hover:border-cyan-300/50 transition-all duration-500 rounded-xl shadow-2xl shadow-cyan-500/10">
      {/* Enhanced Terminal Header */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 animate-pulse"></div>
      
      <div className="flex items-center justify-between p-4 border-b border-cyan-400/20 bg-slate-900/50">
        <div className="flex space-x-3">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg shadow-red-500/50"></div>
          <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50" style={{animationDelay: '0.3s'}}></div>
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" style={{animationDelay: '0.6s'}}></div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-cyan-400 text-sm font-black font-mono tracking-wider">JBLINX STUDIO TERMINAL</div>
          <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
        </div>
      </div>
      
      <div className="p-6 font-mono text-sm min-h-[280px] relative bg-gradient-to-br from-slate-950/50 to-slate-900/50">
        {/* Display completed lines */}
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-3">
            <pre className="text-green-400 whitespace-pre-wrap leading-relaxed font-bold opacity-80">
              {line}
            </pre>
          </div>
        ))}
        
        {/* Current typing line */}
        {currentText && (
          <div className="mb-3">
            <pre className="text-green-400 whitespace-pre-wrap leading-relaxed font-bold">
              {currentText}
              <span className="inline-block w-2 h-5 bg-green-400 ml-1 animate-pulse shadow-lg shadow-green-400/50"></span>
            </pre>
          </div>
        )}
        
        {/* Enhanced command prompt */}
        <div className="flex items-center mt-6 pt-4 border-t border-cyan-400/20">
          <span className="text-cyan-400 font-black text-base">⬡ jblinx_studio</span>
          <span className="text-green-400 ml-3 font-black text-base">➜</span>
          <span className="text-purple-400 ml-2 font-black">~</span>
          <div className="w-3 h-5 bg-cyan-400 ml-3 animate-pulse shadow-lg shadow-cyan-400/50"></div>
        </div>
        
        {/* Terminal decorative elements */}
        <div className="absolute top-4 right-4 opacity-20">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Type definitions for different product categories
interface GameItem {
  name: string;
  type: string;
  status: string;
  rating: number;
  downloads: string;
  link: string;
  image?: string;
  trending?: boolean;
  featured?: boolean;
  new?: boolean;
  coming?: boolean;
  isCategory?: boolean;
}

interface LearningItem {
  name: string;
  type: string;
  difficulty: string;
  duration: string;
  price: string;
  link: string;
  image?: string;
  bestseller?: boolean;
  featured?: boolean;
  new?: boolean;
  isCategory?: boolean;
}

interface DevToolItem {
  name: string;
  framework: string;
  language: string;
  updated: string;
  price: string;
  link: string;
  image?: string;
  premium?: boolean;
  trending?: boolean;
  featured?: boolean;
  isCategory?: boolean;
}

interface EnterpriseItem {
  name: string;
  industry: string;
  scale: string;
  features: string;
  price: string;
  link: string;
  image?: string;
  enterprise?: boolean;
  popular?: boolean;
  featured?: boolean;
  isCategory?: boolean;
}

interface WebAppItem {
  name: string;
  appCategory: string;
  technology: string;
  users: string;
  rating: number;
  link: string;
  image?: string;
  ai?: boolean;
  trending?: boolean;
  premium?: boolean;
  isCategory?: boolean;
}

interface MobileAppItem {
  name: string;
  platform: string;
  appCategory: string;
  downloads: string;
  rating: number;
  link: string;
  image?: string;
  ai?: boolean;
  featured?: boolean;
  trending?: boolean;
  isCategory?: boolean;
}

type ShowcaseItem = GameItem | LearningItem | DevToolItem | EnterpriseItem | WebAppItem | MobileAppItem;

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [liveStats, setLiveStats] = useState({
    activeUsers: 1247,
    githubStars: 892,
    totalProjects: 34
  });

  const showcaseTabs = [
    {
      title: "GAME DEVELOPMENT",
      subtitle: "STRATEGIC GAMING ECOSYSTEM",
      icon: Gamepad2,
      count: "15+",
      color: "purple",
      accent: "from-purple-500 via-pink-500 to-purple-600",
      bgPattern: "from-purple-500/10 to-pink-500/5",
      theme: "gaming",
      sortOptions: ["Featured", "New", "Popular", "Rating"],
      menuLink: "/games",
      description: "Strategic board games, chess tournaments, multiplayer experiences with comprehensive tutorials",
      items: [
        { 
          name: "🎮 MindMate Gaming Hub", 
          type: "Strategic Board Games Platform", 
          status: "Live", 
          rating: 4.9, 
          downloads: "15k+ Players", 
          link: "https://github.com/JBLinx-Studio/MindMate",
          image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
          trending: true, 
          featured: true 
        },
        { 
          name: "♟️ Chess Academy Pro", 
          type: "Chess Learning & Tournaments", 
          status: "Beta", 
          rating: 4.8, 
          downloads: "8k+ Students", 
          link: "https://github.com/JBLinx-Studio/MindMate",
          image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop",
          new: true 
        },
        { 
          name: "🏆 Strategy Game Suite", 
          type: "Board Game Collection", 
          status: "Development", 
          rating: 4.7, 
          downloads: "5k+ Downloads", 
          link: "https://github.com/JBLinx-Studio/MindMate",
          image: "https://images.unsplash.com/photo-1611891487122-207579d67d98?w=400&h=300&fit=crop",
          coming: true 
        }
      ] as GameItem[]
    },
    {
      title: "HEALTH & FITNESS",
      subtitle: "SMART WELLNESS TECHNOLOGY",
      icon: Heart,
      count: "25+",
      color: "green",
      accent: "from-green-400 via-emerald-500 to-green-600",
      bgPattern: "from-green-500/10 to-emerald-500/5",
      theme: "health",
      sortOptions: ["Latest", "Most Popular", "Features", "Rating"],
      menuLink: "/health",
      description: "Advanced health tracking, nutrition analysis, fitness planning - Superior FatSecret alternative",
      items: [
        { 
          name: "💚 VitalitySync Pro", 
          type: "Complete Health Analytics", 
          difficulty: "User-Friendly", 
          duration: "Lifetime Access", 
          price: "Free + Premium", 
          link: "https://github.com/JBLinx-Studio/VitalitySync",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          bestseller: true 
        },
        { 
          name: "🍎 AI Nutrition Assistant", 
          type: "Smart Diet Optimization", 
          difficulty: "Beginner", 
          duration: "24/7 Tracking", 
          price: "$29/month", 
          link: "https://github.com/JBLinx-Studio/VitalitySync",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
          featured: true 
        }
      ] as LearningItem[]
    },
    {
      title: "DEVELOPMENT TOOLS",
      subtitle: "AI-POWERED CODE ECOSYSTEM",
      icon: Code,
      count: "30+",
      color: "cyan",
      accent: "from-cyan-400 via-blue-500 to-cyan-600",
      bgPattern: "from-cyan-500/10 to-blue-500/5",
      theme: "development",
      sortOptions: ["Framework", "Language", "Updated", "Features"],
      menuLink: "/tools",
      description: "Advanced IDE platforms, AI coding assistants - Superior CodePen & Lovable alternatives",
      items: [
        { 
          name: "⚡ CodeFusion Studio", 
          framework: "Advanced IDE Platform", 
          language: "All Languages", 
          updated: "Real-time Updates", 
          price: "Free + Professional", 
          link: "https://github.com/JBLinx-Studio/CodeFusion",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          premium: true 
        },
        { 
          name: "🤖 CodeCraftAI Engineer", 
          framework: "AI Fullstack Builder", 
          language: "React + More", 
          updated: "Daily AI Training", 
          price: "$99/month", 
          link: "https://github.com/JBLinx-Studio/CodeCraftAI",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
          trending: true 
        }
      ] as DevToolItem[]
    },
    {
      title: "REAL ESTATE TECH",
      subtitle: "COMPLETE PROPERTY ECOSYSTEM",
      icon: Building2,
      count: "12+",
      color: "orange",
      accent: "from-orange-400 via-red-500 to-orange-600",
      bgPattern: "from-orange-500/10 to-red-500/5",
      theme: "realestate",
      sortOptions: ["Industry", "Scale", "Features", "Pricing"],
      menuLink: "/realestate",
      description: "All-in-one real estate platform for owners, agents, lawyers, and property management",
      items: [
        { 
          name: "🏢 NestCore Platform", 
          industry: "PropTech Suite", 
          scale: "Enterprise Ready", 
          features: "Complete Real Estate Solution", 
          price: "Custom Enterprise", 
          link: "https://github.com/JBLinx-Studio/NestCore",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
          enterprise: true 
        },
        { 
          name: "🏠 Property Manager Pro", 
          industry: "Property Management", 
          scale: "Multi-Property", 
          features: "AI Analytics + CRM", 
          price: "$199/month", 
          link: "https://github.com/JBLinx-Studio/NestCore",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
          popular: true 
        }
      ] as EnterpriseItem[]
    }
  ];

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % showcaseTabs.length);
    }, 6000);
    return () => clearInterval(tabInterval);
  }, []);

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: Math.max(0, prev.activeUsers + Math.floor(Math.random() * 8) - 3),
        githubStars: Math.max(0, prev.githubStars + Math.floor(Math.random() * 3)),
        totalProjects: Math.max(0, prev.totalProjects + Math.floor(Math.random() * 2))
      }));
    }, 4000);
    return () => clearInterval(statsInterval);
  }, []);

  const currentTab = showcaseTabs[activeTab];
  const filteredItems = currentTab.items.filter(item => 
    Object.values(item).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getItemBadge = (item: ShowcaseItem) => {
    if ('isCategory' in item && item.isCategory) return { text: "VIEW ALL", color: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white animate-pulse" };
    if ('trending' in item && item.trending) return { text: "🔥 TRENDING", color: "bg-red-500/90 text-white" };
    if ('featured' in item && item.featured) return { text: "⭐ FEATURED", color: "bg-blue-500/90 text-white" };
    if ('new' in item && item.new) return { text: "✨ NEW", color: "bg-green-500/90 text-white" };
    if ('bestseller' in item && item.bestseller) return { text: "👑 BESTSELLER", color: "bg-yellow-500/90 text-black font-black" };
    if ('premium' in item && item.premium) return { text: "💎 PREMIUM", color: "bg-purple-500/90 text-white" };
    if ('ai' in item && item.ai) return { text: "🤖 AI-POWERED", color: "bg-cyan-500/90 text-white" };
    if ('enterprise' in item && item.enterprise) return { text: "🏢 ENTERPRISE", color: "bg-orange-500/90 text-white" };
    return null;
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Live': 
      case 'Released': return 'bg-green-500/30 text-green-300 border-green-400/50';
      case 'Beta': return 'bg-cyan-500/30 text-cyan-300 border-cyan-400/50';
      case 'Development': return 'bg-orange-500/30 text-orange-300 border-orange-400/50';
      case 'Browse Now': return 'bg-purple-500/30 text-purple-300 border-purple-400/50';
      default: return 'bg-slate-500/30 text-slate-300 border-slate-400/50';
    }
  };

  const renderTabContent = () => {
    const tab = showcaseTabs[activeTab];
    
    return (
      <div className="space-y-2">
        {filteredItems.map((item, index) => {
          const isMainCategoryItem = 'isCategory' in item && item.isCategory;
          const badge = getItemBadge(item);
          
          return (
            <div key={index} className={`relative group transition-all duration-500 transform hover:scale-[1.02] cursor-pointer ${
              isMainCategoryItem 
                ? `bg-gradient-to-r ${tab.accent}/15 border-2 border-dashed border-cyan-400/50 hover:border-solid hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20` 
                : 'bg-slate-800/80 border border-slate-600/50 hover:border-slate-400 hover:bg-slate-700/90'
            } backdrop-blur-sm overflow-hidden rounded-lg`}>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${tab.accent}/10 opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
              {/* Product Image Preview */}
              {'image' in item && item.image && !isMainCategoryItem && (
                <div className="relative h-24 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  {badge && (
                    <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded-full ${badge.color}`}>
                      {badge.text}
                    </div>
                  )}
                </div>
              )}
              
              <div className="relative p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 flex-1">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tab.accent}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <tab.icon className={`w-4 h-4 text-${tab.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className={`text-white font-black text-sm ${isMainCategoryItem ? 'text-base' : ''} group-hover:text-cyan-300 transition-colors`}>
                          {item.name}
                        </span>
                        {badge && !('image' in item && item.image) && (
                          <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${badge.color}`}>
                            {badge.text}
                          </span>
                        )}
                      </div>
                      {tab.theme === 'gaming' && 'type' in item && 'status' in item && (
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-purple-300 text-xs font-medium">{item.type}</span>
                          <div className={`px-1.5 py-0.5 text-xs font-bold border rounded ${getStatusColor(item.status)}`}>
                            {item.status}
                          </div>
                        </div>
                      )}
                      {(tab.theme === 'health') && 'type' in item && 'price' in item && (
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="bg-green-500/30 text-green-300 px-2 py-0.5 text-xs font-bold rounded">{item.type}</span>
                          <span className="text-green-400 text-xs font-bold">{item.price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {!isMainCategoryItem && (
                    <div className="flex items-center space-x-2">
                      {((tab.theme === 'webapp' || tab.theme === 'mobile') && 'rating' in item) && (
                        <div className="flex items-center space-x-1 text-xs">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-slate-300 font-bold">{item.rating}</span>
                        </div>
                      )}
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  )}
                </div>
                
                {!isMainCategoryItem && (
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {tab.theme === 'gaming' && 'downloads' in item && 'rating' in item && (
                      <>
                        <div className="flex items-center space-x-1 text-slate-400">
                          <Download className="w-3 h-3 text-green-400" />
                          <span>{item.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-400">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{item.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-slate-400">
                          <TrendingUp className="w-3 h-3 text-cyan-400" />
                          <span>Active</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
                
                {isMainCategoryItem && (
                  <div className="mt-2 pt-2 border-t border-cyan-400/30 flex justify-between items-center">
                    <span className="text-cyan-300 text-sm font-bold">Explore Full Collection</span>
                    <div className="flex items-center space-x-1 text-cyan-400">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-orange-500/20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex items-center py-12">
        <div className="grid lg:grid-cols-12 gap-8 w-full">
          {/* Enhanced Left Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Premium Studio Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800/95 to-slate-700/95 border-2 border-cyan-400/60 px-6 py-3 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/25 rounded-xl">
              <Hexagon className="w-5 h-5 text-cyan-400 mr-3 animate-spin" style={{animationDuration: '6s'}} />
              <span className="text-cyan-400 font-black text-base font-mono tracking-widest">PROFESSIONAL STUDIO</span>
              <div className="w-3 h-3 bg-green-400 rounded-full ml-4 animate-pulse shadow-lg shadow-green-400/50"></div>
              <span className="text-green-400 text-sm font-bold ml-2">ACTIVE</span>
            </div>

            {/* Main Brand Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-none font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all duration-500">JBLinx</span>
                <span className="text-white ml-2">Studio</span>
              </h1>
              
              {/* Featured Products Grid */}
              <div className="text-xl lg:text-2xl font-black text-slate-300 font-mono leading-relaxed">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <span className="text-purple-400 flex items-center"><Gamepad2 className="w-5 h-5 mr-2"/>MindMate Gaming</span>
                  <span className="text-green-400 flex items-center"><Heart className="w-5 h-5 mr-2"/>VitalitySync Health</span>
                  <span className="text-cyan-400 flex items-center"><Code className="w-5 h-5 mr-2"/>CodeFusion IDE</span>
                  <span className="text-orange-400 flex items-center"><Building2 className="w-5 h-5 mr-2"/>NestCore RealEstate</span>
                  <span className="text-blue-400 flex items-center"><Brain className="w-5 h-5 mr-2"/>CodeCraftAI Builder</span>
                </div>
              </div>
              
              {/* Mission Statement */}
              <div className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 animate-pulse leading-relaxed">
                PROFESSIONAL DEVELOPMENT STUDIO<br/>
                <span className="text-xl lg:text-2xl">PREMIUM SOLUTIONS + PROVEN RESULTS</span>
              </div>
            </div>

            {/* Enhanced Product Description */}
            <div className="bg-slate-800/60 border-2 border-slate-700/50 p-6 backdrop-blur-sm rounded-xl hover:border-slate-600 transition-all duration-300">
              <p className="text-slate-300 leading-relaxed text-lg font-medium">
                <strong className="text-cyan-400 font-black">CodeFusion Studio</strong> - Advanced IDE platform superior to CodePen with AI assistance • 
                <strong className="text-green-400 font-black"> VitalitySync</strong> - Smart health & nutrition tracking, FatSecret alternative • 
                <strong className="text-purple-400 font-black"> MindMate</strong> - Strategic board games & chess tournaments with tutorials • 
                <strong className="text-orange-400 font-black"> NestCore</strong> - Complete real estate platform for all stakeholders • 
                <strong className="text-blue-400 font-black"> CodeCraftAI</strong> - AI fullstack builder, Lovable alternative with enhanced features.
              </p>
            </div>
            
            {/* Live Stats Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: "5", label: "FLAGSHIP APPS", icon: Trophy, color: "text-cyan-400", suffix: "" },
                { value: liveStats.activeUsers.toLocaleString(), label: "ACTIVE USERS", icon: Users, color: "text-green-400", suffix: "" },
                { value: liveStats.githubStars.toLocaleString(), label: "GITHUB STARS", icon: Star, color: "text-orange-400", suffix: "+" },
                { value: "4.9", label: "AVERAGE RATING", icon: Award, color: "text-yellow-400", suffix: "★" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/80 border-2 border-slate-700 p-4 text-center backdrop-blur-sm hover:border-slate-600 transition-all duration-300 group hover:bg-slate-700/90 rounded-xl">
                    <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-2 group-hover:scale-125 transition-transform duration-300`} />
                    <div className={`text-lg font-black ${stat.color} font-mono flex items-center justify-center space-x-1`}>
                      <span>{stat.value}{stat.suffix}</span>
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-slate-500 text-xs font-bold tracking-wider">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-4 font-black text-lg transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 flex items-center space-x-3 hover:scale-105 transform rounded-xl"
              >
                <Rocket className="w-5 h-5" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 font-black text-lg transition-all duration-300 flex items-center space-x-3 hover:scale-105 transform rounded-xl"
              >
                <Github className="w-5 h-5" />
                <span>VIEW SOURCE CODE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Enhanced Right Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Enhanced Terminal */}
            <EnhancedTerminal />

            {/* Enhanced Showcase Panel */}
            <div className="bg-slate-800/95 border-2 border-slate-700 backdrop-blur-sm relative overflow-hidden rounded-xl shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              
              {/* Tab Navigation */}
              <div className="p-4 border-b border-slate-700/50">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {showcaseTabs.map((tab, index) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative flex flex-col items-center justify-center py-3 px-3 text-xs font-black transition-all duration-300 group rounded-lg ${
                          activeTab === index 
                            ? `bg-gradient-to-r ${tab.accent} text-white shadow-xl transform scale-105` 
                            : 'bg-slate-700/80 text-slate-400 hover:bg-slate-600/80'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mb-1" />
                        <span className="text-xs font-black">{tab.title}</span>
                        <span className="text-xs opacity-80">{tab.count}</span>
                      </button>
                    );
                  })}
                </div>
                
                {/* Enhanced Controls */}
                <div className="flex items-center justify-between bg-slate-900/50 p-2 -m-2 rounded">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentTab.accent}`}></div>
                    <h4 className="text-white font-black text-sm font-mono flex items-center space-x-2">
                      <span>{currentTab.subtitle}</span>
                      <Link 
                        to={currentTab.menuLink}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-slate-700 text-white text-xs px-2 py-1 border border-slate-600 focus:border-cyan-400 focus:outline-none hover:border-slate-500 transition-colors rounded"
                    >
                      {currentTab.sortOptions.map(option => (
                        <option key={option} value={option.toLowerCase()}>{option}</option>
                      ))}
                    </select>
                    <div className="relative">
                      <Search className="w-3 h-3 absolute left-2 top-1.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-slate-700 text-white text-xs pl-6 pr-2 py-1 border border-slate-600 focus:border-cyan-400 focus:outline-none w-20 hover:border-slate-500 transition-colors rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="text-white font-black text-lg">{currentTab.title}</h3>
                  <p className="text-slate-400 text-sm">{currentTab.subtitle}</p>
                  <p className="text-slate-300 text-xs mt-1">{currentTab.description}</p>
                </div>
                
                {/* Product Cards */}
                <div className="space-y-3">
                  {currentTab.items.map((item, index) => (
                    <div key={index} className="bg-slate-900/80 border border-slate-600/50 hover:border-slate-400 hover:bg-slate-700/90 p-3 rounded-lg transition-all duration-300 group">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-sm group-hover:text-cyan-300 transition-colors">{item.name}</h4>
                          <p className="text-slate-400 text-xs">{item.type || item.framework || item.industry}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between p-4 border-t border-slate-700/50 bg-slate-900/40">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span className="text-green-400 font-bold">LIVE ECOSYSTEM</span>
                </div>
                
                <Link 
                  to={currentTab.menuLink}
                  className={`bg-gradient-to-r ${currentTab.accent} text-white px-4 py-2 text-xs font-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-1 rounded-lg`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>EXPLORE {currentTab.title}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
