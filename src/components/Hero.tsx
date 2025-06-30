
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap, Play, Download, Users, Trophy, Star, Shield, Globe, Database, Filter, Search, TrendingUp, Clock, Award, Layers, Smartphone, Rocket, Brain, Sparkles, Target, Heart, Eye, Cpu, Monitor, Palette, Settings, BarChart3, Lock, CheckCircle, AlertCircle, XCircle, Calendar, Map, Building2, Factory, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

// Define proper types for each tab's items
interface GameItem {
  name: string;
  type: string;
  status: string;
  rating: number;
  downloads: string;
}

interface DevContentItem {
  name: string;
  type: string;
  difficulty: string;
  duration: string;
  price: string;
}

interface DevProductItem {
  name: string;
  framework: string;
  language: string;
  updated: string;
  price: string;
}

interface EnterpriseItem {
  name: string;
  industry: string;
  scale: string;
  features: string;
  price: string;
}

interface WebAppItem {
  name: string;
  category: string;
  technology: string;
  users: string;
  rating: number;
}

interface MobileAppItem {
  name: string;
  platform: string;
  category: string;
  downloads: string;
  rating: number;
}

type TabItem = GameItem | DevContentItem | DevProductItem | EnterpriseItem | WebAppItem | MobileAppItem;

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');

  const terminalLines = [
    '> initializing_jblinx_premium_studio...',
    '> loading_content_library: 200+ assets...',
    '> STATUS: All Systems Ready ⬡ ONLINE'
  ];

  const showcaseTabs = [
    {
      title: "GAMES",
      icon: Gamepad2,
      count: "25+",
      color: "purple",
      accent: "from-purple-500 to-pink-600",
      theme: "gaming",
      sortOptions: ["Featured", "New", "Popular", "Rating"],
      items: [
        { name: "Survival Horror", type: "Unity", status: "Released", rating: 4.9, downloads: "12k" },
        { name: "Strategy RTS", type: "Unity", status: "Beta", rating: 4.7, downloads: "8k" },
        { name: "Adventure RPG", type: "Unity", status: "Development", rating: 4.8, downloads: "5k" },
        { name: "Multiplayer FPS", type: "Unity", status: "Coming Soon", rating: 5.0, downloads: "15k" }
      ] as GameItem[]
    },
    {
      title: "DEV CONTENT",
      icon: Brain,
      count: "50+",
      color: "cyan",
      accent: "from-cyan-500 to-blue-600",
      theme: "learning",
      sortOptions: ["Latest", "Most Popular", "Difficulty", "Duration"],
      items: [
        { name: "Unity Mastery Course", type: "Video Series", difficulty: "Advanced", duration: "12h", price: "$89" },
        { name: "React Best Practices", type: "E-book", difficulty: "Intermediate", duration: "3h", price: "$29" },
        { name: "Game Design Patterns", type: "Guide", difficulty: "Expert", duration: "8h", price: "$49" },
        { name: "API Architecture", type: "Workshop", difficulty: "Advanced", duration: "6h", price: "$69" }
      ] as DevContentItem[]
    },
    {
      title: "DEV PRODUCTS",
      icon: Code,
      count: "40+",
      color: "green",
      accent: "from-green-500 to-emerald-600",
      theme: "development",
      sortOptions: ["Framework", "Language", "Updated", "Price"],
      items: [
        { name: "React SaaS Kit", framework: "React", language: "TypeScript", updated: "2 days", price: "$49" },
        { name: "FastAPI Template", framework: "FastAPI", language: "Python", updated: "1 week", price: "$39" },
        { name: "Flutter App Kit", framework: "Flutter", language: "Dart", updated: "3 days", price: "$44" },
        { name: "Express.js Boilerplate", framework: "Express", language: "Node.js", updated: "5 days", price: "$34" }
      ] as DevProductItem[]
    },
    {
      title: "ENTERPRISE",
      icon: Building2,
      count: "15+",
      color: "orange",
      accent: "from-orange-500 to-red-600",
      theme: "enterprise",
      sortOptions: ["Industry", "Scale", "Features", "Price"],
      items: [
        { name: "CRM Platform", industry: "Sales", scale: "Enterprise", features: "AI-Powered", price: "Custom" },
        { name: "Analytics Dashboard", industry: "Marketing", scale: "Medium", features: "Real-time", price: "$199/mo" },
        { name: "E-commerce Suite", industry: "Retail", scale: "Large", features: "Multi-tenant", price: "$299/mo" },
        { name: "Project Management", industry: "Tech", scale: "Small", features: "Collaboration", price: "$99/mo" }
      ] as EnterpriseItem[]
    },
    {
      title: "WEB APPS",
      icon: Globe,
      count: "30+",
      color: "indigo",
      accent: "from-indigo-500 to-purple-600",
      theme: "webapp",
      sortOptions: ["Category", "Technology", "Users", "Rating"],
      items: [
        { name: "TaskFlow Pro", category: "Productivity", technology: "React", users: "25k", rating: 4.8 },
        { name: "DevTracker", category: "Development", technology: "Vue", users: "18k", rating: 4.9 },
        { name: "FinanceHub", category: "Finance", technology: "Angular", users: "32k", rating: 4.7 },
        { name: "CollabSpace", category: "Communication", technology: "Svelte", users: "14k", rating: 4.6 }
      ] as WebAppItem[]
    },
    {
      title: "MOBILE APPS",
      icon: Smartphone,
      count: "20+",
      color: "pink",
      accent: "from-pink-500 to-rose-600",
      theme: "mobile",
      sortOptions: ["Platform", "Category", "Downloads", "Rating"],
      items: [
        { name: "FitTracker Pro", platform: "iOS/Android", category: "Health", downloads: "50k", rating: 4.8 },
        { name: "BudgetMaster", platform: "Flutter", category: "Finance", downloads: "35k", rating: 4.9 },
        { name: "StudyBuddy", platform: "React Native", category: "Education", downloads: "28k", rating: 4.7 },
        { name: "TravelGuide", platform: "Native", category: "Travel", downloads: "42k", rating: 4.6 }
      ] as MobileAppItem[]
    }
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
    }, 1000);

    return () => clearInterval(interval);
  }, [currentLine]);

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % showcaseTabs.length);
    }, 4500);
    return () => clearInterval(tabInterval);
  }, []);

  const currentTab = showcaseTabs[activeTab];
  const filteredItems = currentTab.items.filter(item => 
    Object.values(item).some(value => 
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Helper functions for type-safe property access
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Released': return 'bg-green-500/30 text-green-400';
      case 'Beta': return 'bg-yellow-500/30 text-yellow-400';
      case 'Development': return 'bg-blue-500/30 text-blue-400';
      default: return 'bg-purple-500/30 text-purple-400';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-orange-400';
      case 'Expert': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const renderTabContent = () => {
    const tab = showcaseTabs[activeTab];
    
    switch(tab.theme) {
      case 'gaming':
        return (
          <div className="space-y-2">
            {filteredItems.map((item, index) => {
              const gameItem = item as GameItem;
              return (
                <div key={index} className="relative bg-slate-700/60 border border-purple-500/30 p-3 hover:border-purple-400 transition-all group">
                  {/* Gaming-specific overlay effects */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Gamepad2 className="w-3 h-3 text-purple-400" />
                      <span className="text-white font-bold text-xs">{gameItem.name}</span>
                    </div>
                    <div className={`px-2 py-0.5 text-xs font-bold ${getStatusColor(gameItem.status)}`}>
                      {gameItem.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Monitor className="w-3 h-3 text-purple-300" />
                      <span className="text-purple-300">{gameItem.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-slate-400">{gameItem.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{gameItem.downloads}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 'learning':
        return (
          <div className="space-y-2">
            {filteredItems.map((item, index) => {
              const contentItem = item as DevContentItem;
              return (
                <div key={index} className="relative bg-slate-700/60 border border-cyan-500/30 p-3 hover:border-cyan-400 transition-all group">
                  {/* Learning-specific overlay effects */}
                  <div className="absolute top-1 right-1 w-6 h-6 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Brain className="w-3 h-3 text-cyan-400" />
                      <span className="text-white font-bold text-xs">{contentItem.name}</span>
                    </div>
                    <span className="text-green-400 font-bold text-xs">{contentItem.price}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Book className="w-3 h-3 text-cyan-400" />
                      <span className="bg-cyan-500/30 text-cyan-400 px-1 py-0.5">{contentItem.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className={`w-3 h-3 ${getDifficultyColor(contentItem.difficulty)}`} />
                      <span className={getDifficultyColor(contentItem.difficulty)}>{contentItem.difficulty}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{contentItem.duration}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 'development':
        return (
          <div className="space-y-2">
            {filteredItems.map((item, index) => {
              const devItem = item as DevProductItem;
              return (
                <div key={index} className="relative bg-slate-700/60 border border-green-500/30 p-3 hover:border-green-400 transition-all group">
                  {/* Development-specific overlay effects */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-400/50 to-transparent transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border border-green-400/30 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Code className="w-3 h-3 text-green-400" />
                      <span className="text-white font-bold text-xs">{devItem.name}</span>
                    </div>
                    <span className="text-green-400 font-bold text-xs">{devItem.price}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Layers className="w-3 h-3 text-green-400" />
                      <span className="bg-green-500/30 text-green-400 px-1 py-0.5">{devItem.framework}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Settings className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{devItem.language}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{devItem.updated}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 'enterprise':
        return (
          <div className="space-y-2">
            {filteredItems.map((item, index) => {
              const enterpriseItem = item as EnterpriseItem;
              return (
                <div key={index} className="relative bg-slate-700/60 border border-orange-500/30 p-3 hover:border-orange-400 transition-all group">
                  {/* Enterprise-specific overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-orange-400/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-orange-400/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Building2 className="w-3 h-3 text-orange-400" />
                      <span className="text-white font-bold text-xs">{enterpriseItem.name}</span>
                    </div>
                    <span className="text-orange-400 font-bold text-xs">{enterpriseItem.price}</span>
                  </div>
                  
                  <div className="relative grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Factory className="w-3 h-3 text-orange-400" />
                      <span className="bg-orange-500/30 text-orange-400 px-1 py-0.5">{enterpriseItem.industry}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BarChart3 className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{enterpriseItem.scale}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Rocket className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{enterpriseItem.features}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 'webapp':
        return (
          <div className="space-y-2">
            {filteredItems.map((item, index) => {
              const webAppItem = item as WebAppItem;
              return (
                <div key={index} className="relative bg-slate-700/60 border border-indigo-500/30 p-3 hover:border-indigo-400 transition-all group">
                  {/* Web app-specific overlay effects */}
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-indigo-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-indigo-400/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Globe className="w-3 h-3 text-indigo-400" />
                      <span className="text-white font-bold text-xs">{webAppItem.name}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-slate-400">{webAppItem.rating}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Palette className="w-3 h-3 text-indigo-400" />
                      <span className="bg-indigo-500/30 text-indigo-400 px-1 py-0.5">{webAppItem.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Cpu className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{webAppItem.technology}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{webAppItem.users}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      case 'mobile':
        return (
          <div className="space-y-2">
            {filteredItems.map((item, index) => {
              const mobileAppItem = item as MobileAppItem;
              return (
                <div key={index} className="relative bg-slate-700/60 border border-pink-500/30 p-3 hover:border-pink-400 transition-all group">
                  {/* Mobile app-specific overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-1 right-1 w-4 h-6 border border-pink-400/40 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 w-2 h-1 bg-pink-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Smartphone className="w-3 h-3 text-pink-400" />
                      <span className="text-white font-bold text-xs">{mobileAppItem.name}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-slate-400">{mobileAppItem.rating}</span>
                    </div>
                  </div>
                  
                  <div className="relative grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Heart className="w-3 h-3 text-pink-400" />
                      <span className="bg-pink-500/30 text-pink-400 px-1 py-0.5">{mobileAppItem.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Monitor className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{mobileAppItem.platform}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400">{mobileAppItem.downloads}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/15 to-orange-500/15 blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 blur-3xl animate-pulse"></div>
        
        {/* Professional grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, cyan 1px, transparent 1px), radial-gradient(circle at 75% 75%, purple 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute border border-cyan-500/30 animate-pulse"
              style={{
                width: `${8 + (i % 3) * 4}px`,
                height: `${8 + (i % 3) * 4}px`,
                left: `${(i * 13) % 95}%`,
                top: `${(i * 17) % 85}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-6">
        <div className="grid lg:grid-cols-12 gap-5 w-full">
          {/* Ultra Compact Main Content */}
          <div className="lg:col-span-7 space-y-3">
            {/* Premium Badge with animation */}
            <div className="inline-flex items-center bg-slate-800/95 border border-cyan-400/50 px-3 py-1 backdrop-blur-sm hover:border-cyan-300 transition-colors">
              <Hexagon className="w-3 h-3 text-cyan-400 mr-1 animate-spin" style={{animationDuration: '3s'}} />
              <span className="text-cyan-400 font-black text-xs font-mono tracking-widest">PREMIUM STUDIO</span>
              <div className="w-1 h-1 bg-green-400 rounded-full ml-2 animate-pulse"></div>
            </div>

            {/* Enhanced Title */}
            <div className="space-y-1">
              <h1 className="text-3xl lg:text-4xl font-black text-white leading-none font-mono">
                <span className="text-cyan-400 hover:text-cyan-300 transition-colors">JBLinx</span>
                <span className="text-white">Studio</span>
              </h1>
              
              <div className="text-sm lg:text-base font-bold text-slate-300 font-mono">
                Games • Dev Tools • Enterprise Apps
              </div>
              <div className="text-base lg:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 animate-pulse">
                Everything Premium. Everything Ready. Everything Professional.
              </div>
            </div>

            {/* Compact Description */}
            <p className="text-sm text-slate-400 leading-relaxed max-w-lg">
              Professional games, development frameworks, enterprise applications, and premium content library for serious creators.
            </p>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-4 gap-1 max-w-md">
              {[
                { value: "80+", label: "Products", icon: Trophy, color: "text-cyan-400" },
                { value: "25+", label: "Games", icon: Gamepad2, color: "text-purple-400" },
                { value: "50k+", label: "Users", icon: Users, color: "text-orange-400" },
                { value: "4.9★", label: "Rating", icon: Star, color: "text-yellow-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/70 border border-slate-700 p-1.5 text-center backdrop-blur-sm hover:border-slate-600 transition-colors group">
                    <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5 group-hover:scale-110 transition-transform`} />
                    <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex gap-2">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 font-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-1 text-sm hover:scale-105 transform"
              >
                <Play className="w-3 h-3" />
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 px-4 py-2 font-black transition-all duration-300 flex items-center space-x-1 text-sm hover:scale-105 transform"
              >
                <Github className="w-3 h-3" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Enhanced Interactive Showcase */}
          <div className="lg:col-span-5 space-y-2">
            {/* Enhanced Terminal with Professional Effects */}
            <div className="bg-slate-900/95 border border-slate-700 p-3 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"></div>
              
              <div className="flex items-center justify-between mb-2">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <Terminal className="w-3 h-3 text-slate-500" />
              </div>
              
              <div className="font-mono text-xs min-h-[50px] relative">
                <pre className="text-green-400 whitespace-pre-wrap">
                  {terminalText}
                </pre>
                <div className="flex items-center">
                  <span className="text-green-400">⬡ </span>
                  <div className="w-1 h-2 bg-green-400 ml-1 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Professional Interactive Showcase */}
            <div className="bg-slate-800/90 border border-slate-700 p-3 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              
              {/* Enhanced Tab Navigation with Professional Grid */}
              <div className="grid grid-cols-3 gap-1 mb-2">
                {showcaseTabs.map((tab, index) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`relative flex flex-col items-center justify-center py-1.5 px-1 text-xs font-black transition-all duration-300 group ${
                        activeTab === index 
                          ? `bg-gradient-to-r ${tab.accent} text-white shadow-lg` 
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      {activeTab === index && (
                        <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
                      )}
                      <IconComponent className="w-2.5 h-2.5 mb-0.5 relative z-10" />
                      <span className="text-xs relative z-10">{tab.title}</span>
                      <span className="text-xs opacity-75 relative z-10">{tab.count}</span>
                      {activeTab === index && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white animate-pulse"></div>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {/* Professional Content Area */}
              <div className="min-h-[140px] relative">
                {/* Enhanced Header with Professional Controls */}
                <div className="flex items-center justify-between mb-2 bg-slate-900/50 p-2 -m-2 mb-0">
                  <h4 className="text-white font-black text-xs font-mono flex items-center space-x-1">
                    <Eye className="w-3 h-3 text-cyan-400" />
                    <span>{currentTab.title}</span>
                  </h4>
                  <div className="flex items-center space-x-1">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-slate-700 text-white text-xs px-1 py-0.5 border border-slate-600 focus:border-cyan-400 focus:outline-none hover:border-slate-500 transition-colors"
                    >
                      {currentTab.sortOptions.map(option => (
                        <option key={option} value={option.toLowerCase()}>{option}</option>
                      ))}
                    </select>
                    <div className="relative">
                      <Search className="w-2.5 h-2.5 absolute left-1 top-1 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-slate-700 text-white text-xs pl-4 pr-1 py-0.5 border border-slate-600 focus:border-cyan-400 focus:outline-none w-16 hover:border-slate-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Dynamic Content Based on Tab Theme */}
                <div className="mt-2">
                  {renderTabContent()}
                </div>
              </div>

              {/* Professional Action Footer */}
              <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-700/50 bg-slate-900/30 -m-3 mt-3 p-3">
                <div className="flex items-center space-x-2 text-xs">
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Filter className="w-2.5 h-2.5" />
                    <span>Found: {filteredItems.length}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Target className="w-2.5 h-2.5" />
                    <span>Total: {currentTab.count}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <CheckCircle className="w-2.5 h-2.5 text-green-400" />
                    <span>Active</span>
                  </div>
                </div>
                <button className={`bg-gradient-to-r ${currentTab.accent} text-white px-3 py-1 text-xs font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-1`}>
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>VIEW ALL</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
