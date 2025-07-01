import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap, Play, Download, Users, Trophy, Star, Shield, Globe, Database, Filter, Search, TrendingUp, Clock, Award, Layers, Smartphone, Rocket, Brain, Sparkles, Target, Heart, Eye, Cpu, Monitor, Palette, Settings, BarChart3, Lock, CheckCircle, Building2, Factory, Briefcase, ExternalLink, ChevronRight, Flame, Crown, Diamond, Home, Scale, PenTool, Dumbbell, Activity, HeartHandshake, BookOpen, FileCode, Wrench, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Enhanced Terminal Component with Typewriter Effect
const EnhancedTerminal = () => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  const terminalContent = [
    {
      command: '> initializing_jblinx_studio_ecosystem...',
      description: 'Loading premium development environment...'
    },
    {
      command: '> loading_codefusion_studio: Advanced IDE Platform',
      description: '✓ CodePen Alternative - Superior code editing experience'
    },
    {
      command: '> loading_vitalitysync_health: Smart Health Tracker',
      description: '✓ FatSecret Alternative - Advanced nutrition & fitness tracking'
    },
    {
      command: '> loading_mindmate_gaming: Strategic Board Game Hub',
      description: '✓ Chess & Strategy - Multiplayer tutorials & tournaments'
    },
    {
      command: '> loading_nestcore_realestate: Complete Property Platform',
      description: '✓ Real Estate Suite - Owners, agents, lawyers, all-in-one'
    },
    {
      command: '> loading_codecraftai_engineer: Fullstack AI Development',
      description: '✓ Lovable Alternative - AI-powered application builder'
    },
    {
      command: '> STATUS: All Premium Systems Online ⬡ READY',
      description: 'Performance: 99.9% | Active Projects: 25+ | Users: 50k+'
    }
  ];

  // Typewriter effect
  useEffect(() => {
    if (currentLineIndex >= terminalContent.length) return;

    const currentLine = terminalContent[currentLineIndex];
    const fullText = `${currentLine.command}\n${currentLine.description}`;

    if (isTyping) {
      if (currentText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
          // Add typing sound effect here if available
        }, 50 + Math.random() * 30); // Variable typing speed for realism
        return () => clearTimeout(timeout);
      } else {
        // Line completed
        setTimeout(() => {
          setDisplayedLines(prev => [...prev, fullText]);
          setCurrentText('');
          setCurrentLineIndex(prev => prev + 1);
        }, 1000);
      }
    }
  }, [currentText, currentLineIndex, isTyping]);

  // Reset animation cycle
  useEffect(() => {
    if (currentLineIndex >= terminalContent.length) {
      setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentText('');
      }, 3000);
    }
  }, [currentLineIndex]);

  return (
    <div className="bg-slate-900/95 border border-slate-700 backdrop-blur-sm relative overflow-hidden group hover:border-slate-600 transition-all duration-300 rounded-lg">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 animate-pulse"></div>
      
      <div className="flex items-center justify-between p-3 border-b border-slate-700/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-green-400 text-xs font-mono font-black">JBLINX PREMIUM TERMINAL</div>
          <Terminal className="w-4 h-4 text-slate-500" />
        </div>
      </div>
      
      <div className="p-4 font-mono text-xs min-h-[200px] relative">
        {/* Display completed lines */}
        {displayedLines.map((line, index) => (
          <div key={index} className="mb-2">
            <pre className="text-green-400 whitespace-pre-wrap leading-relaxed font-black">
              {line}
            </pre>
          </div>
        ))}
        
        {/* Current typing line */}
        {currentText && (
          <div className="mb-2">
            <pre className="text-green-400 whitespace-pre-wrap leading-relaxed font-black">
              {currentText}
              <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
            </pre>
          </div>
        )}
        
        {/* Command prompt */}
        <div className="flex items-center mt-4">
          <span className="text-green-400 font-black">⬡ jblinx_studio</span>
          <span className="text-cyan-400 ml-2 font-black">$</span>
          <div className="w-2 h-4 bg-green-400 ml-2 animate-pulse"></div>
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
    todayDownloads: 892,
    currentProjects: 34
  });

  const showcaseTabs = [
    {
      title: "PRIORITY #1: GAMERS",
      subtitle: "PREMIUM GAMES + DEV CONTENT",
      icon: Gamepad2,
      count: "25+",
      color: "purple",
      accent: "from-purple-500 via-pink-500 to-purple-600",
      bgPattern: "from-purple-500/10 to-pink-500/5",
      theme: "gaming",
      sortOptions: ["Featured", "New", "Popular", "Rating"],
      menuLink: "/games",
      description: "Strategic board games, chess tournaments, multiplayer experiences with tutorials",
      items: [
        { 
          name: "🎮 MindMate Gaming Hub", 
          type: "Strategic Board Games", 
          status: "Live", 
          rating: 4.9, 
          downloads: "15k+", 
          link: "https://github.com/JBLinx-Studio/MindMate",
          image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
          trending: true, 
          featured: true 
        },
        { 
          name: "♟️ Chess & Strategy Arena", 
          type: "Multiplayer Tournaments", 
          status: "Beta", 
          rating: 4.8, 
          downloads: "8k+", 
          link: "https://github.com/JBLinx-Studio/MindMate",
          image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop",
          new: true 
        },
        { 
          name: "📚 Board Game Academy", 
          type: "Interactive Tutorials", 
          status: "Development", 
          rating: 4.7, 
          downloads: "5k+", 
          link: "https://github.com/JBLinx-Studio/MindMate",
          image: "https://images.unsplash.com/photo-1611891487122-207579d67d98?w=400&h=300&fit=crop",
          coming: true 
        },
        { 
          name: "🏆 EXPLORE ALL GAMES", 
          type: "Premium Gaming Collection", 
          status: "Browse Now", 
          rating: 5.0, 
          downloads: "25+ Games", 
          link: "/games", 
          isCategory: true 
        }
      ] as GameItem[]
    },
    {
      title: "PRIORITY #2: HEALTH",
      subtitle: "ADVANCED WELLNESS TECH",
      icon: Heart,
      count: "50+",
      color: "green",
      accent: "from-green-400 via-emerald-500 to-green-600",
      bgPattern: "from-green-500/10 to-emerald-500/5",
      theme: "health",
      sortOptions: ["Latest", "Most Popular", "Features", "Rating"],
      menuLink: "/health",
      description: "Advanced health tracking, nutrition analysis, fitness planning - FatSecret alternative",
      items: [
        { 
          name: "💚 VitalitySync Pro", 
          type: "Complete Health Suite", 
          difficulty: "Easy", 
          duration: "Lifetime Access", 
          price: "Free + Premium", 
          link: "https://github.com/JBLinx-Studio/VitalitySync",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          bestseller: true 
        },
        { 
          name: "🍎 Nutrition Intelligence AI", 
          type: "Smart Diet Tracking", 
          difficulty: "Beginner", 
          duration: "Daily Use", 
          price: "$29/month", 
          link: "https://github.com/JBLinx-Studio/VitalitySync",
          image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
          featured: true 
        },
        { 
          name: "💪 Fitness Goal Optimizer", 
          type: "Workout & Progress", 
          difficulty: "All Levels", 
          duration: "Flexible", 
          price: "$49/month", 
          link: "https://github.com/JBLinx-Studio/VitalitySync",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          new: true 
        },
        { 
          name: "📊 EXPLORE ALL HEALTH TOOLS", 
          type: "Complete Wellness Platform", 
          difficulty: "All Users", 
          duration: "Unlimited", 
          price: "Browse Features", 
          link: "/health", 
          isCategory: true 
        }
      ] as LearningItem[]
    },
    {
      title: "PRIORITY #3: DEVELOPERS",
      subtitle: "AI-POWERED DEV PLATFORM",
      icon: Code,
      count: "40+",
      color: "cyan",
      accent: "from-cyan-400 via-blue-500 to-cyan-600",
      bgPattern: "from-cyan-500/10 to-blue-500/5",
      theme: "development",
      sortOptions: ["Framework", "Language", "Updated", "Features"],
      menuLink: "/tools",
      description: "Advanced IDE, AI coding assistant, fullstack development - CodePen & Lovable alternative",
      items: [
        { 
          name: "⚡ CodeFusion Studio", 
          framework: "Universal IDE", 
          language: "All Languages", 
          updated: "Live Updates", 
          price: "Free + Pro", 
          link: "https://github.com/JBLinx-Studio/CodeFusion",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          premium: true 
        },
        { 
          name: "🤖 CodeCraftAI Engineer", 
          framework: "AI Fullstack Builder", 
          language: "React + More", 
          updated: "Daily AI Updates", 
          price: "$99/month", 
          link: "https://github.com/JBLinx-Studio/CodeCraftAI",
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
          trending: true 
        },
        { 
          name: "⚛️ React DevTools Pro", 
          framework: "React Ecosystem", 
          language: "TypeScript", 
          updated: "Weekly", 
          price: "$79/month", 
          link: "https://github.com/JBLinx-Studio/CodeFusion",
          image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
          featured: true 
        },
        { 
          name: "🛠️ EXPLORE ALL DEV TOOLS", 
          framework: "Complete Development Suite", 
          language: "Universal Support", 
          updated: "Real-time", 
          price: "Browse Platform", 
          link: "/tools", 
          isCategory: true 
        }
      ] as DevToolItem[]
    },
    {
      title: "PRIORITY #4: REAL ESTATE",
      subtitle: "COMPLETE PROPERTY PLATFORM",
      icon: Building2,
      count: "15+",
      color: "orange",
      accent: "from-orange-400 via-red-500 to-orange-600",
      bgPattern: "from-orange-500/10 to-red-500/5",
      theme: "realestate",
      sortOptions: ["Industry", "Scale", "Features", "Pricing"],
      menuLink: "/realestate",
      description: "Complete real estate platform for owners, agents, lawyers, property management",
      items: [
        { 
          name: "🏢 NestCore Platform", 
          industry: "Real Estate Hub", 
          scale: "Enterprise Ready", 
          features: "All-in-One Suite", 
          price: "Custom Pricing", 
          link: "https://github.com/JBLinx-Studio/NestCore",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
          enterprise: true 
        },
        { 
          name: "🏠 Property Management Pro", 
          industry: "PropTech", 
          scale: "Multi-Property", 
          features: "AI Analytics + CRM", 
          price: "$199/month", 
          link: "https://github.com/JBLinx-Studio/NestCore",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
          popular: true 
        },
        { 
          name: "⚖️ Legal Documentation AI", 
          industry: "PropTech + LegalTech", 
          scale: "Professional", 
          features: "Automated Contracts", 
          price: "$299/month", 
          link: "https://github.com/JBLinx-Studio/NestCore",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
          featured: true 
        },
        { 
          name: "🏭 EXPLORE REAL ESTATE SUITE", 
          industry: "Complete Platform", 
          scale: "Any Size Business", 
          features: "Full Integration", 
          price: "Contact Sales", 
          link: "/realestate", 
          isCategory: true 
        }
      ] as EnterpriseItem[]
    },
    {
      title: "PRIORITY #5: WEB APPS",
      subtitle: "MODERN DIGITAL SOLUTIONS",
      icon: Globe,
      count: "30+",
      color: "indigo",
      accent: "from-indigo-400 via-purple-500 to-indigo-600",
      bgPattern: "from-indigo-500/10 to-purple-500/5",
      theme: "webapp",
      sortOptions: ["Popular", "Technology", "Users", "Rating"],
      menuLink: "/apps",
      description: "Modern web applications for productivity, entertainment, and business solutions",
      items: [
        { 
          name: "💻 CodeFusion Online IDE", 
          appCategory: "Development Platform", 
          technology: "Advanced Code Editor", 
          users: "50k+ Developers", 
          rating: 4.9, 
          link: "https://github.com/JBLinx-Studio/CodeFusion",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
          ai: true 
        },
        { 
          name: "🎮 MindMate Gaming Portal", 
          appCategory: "Entertainment Hub", 
          technology: "Real-time Gaming", 
          users: "35k+ Gamers", 
          rating: 4.8, 
          link: "https://github.com/JBLinx-Studio/MindMate",
          image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
          trending: true 
        },
        { 
          name: "💚 VitalitySync Dashboard", 
          appCategory: "Health Analytics", 
          technology: "AI Health Insights", 
          users: "60k+ Users", 
          rating: 4.9, 
          link: "https://github.com/JBLinx-Studio/VitalitySync",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          premium: true 
        },
        { 
          name: "🚀 EXPLORE ALL WEB APPS", 
          appCategory: "Complete Collection", 
          technology: "Modern Tech Stack", 
          users: "200k+ Total Users", 
          rating: 4.8, 
          link: "/apps", 
          isCategory: true 
        }
      ] as WebAppItem[]
    },
    {
      title: "PRIORITY #6: MOBILE APPS",
      subtitle: "CROSS-PLATFORM ECOSYSTEM",
      icon: Smartphone,
      count: "20+",
      color: "pink",
      accent: "from-pink-400 via-rose-500 to-pink-600",
      bgPattern: "from-pink-500/10 to-rose-500/5",
      theme: "mobile",
      sortOptions: ["Platform", "Downloads", "Rating", "Features"],
      menuLink: "/mobile",
      description: "Cross-platform mobile applications and native app development tools",
      items: [
        { 
          name: "📱 VitalitySync Mobile", 
          platform: "iOS + Android", 
          appCategory: "Health & Fitness", 
          downloads: "100k+ Downloads", 
          rating: 4.9, 
          link: "https://github.com/JBLinx-Studio/VitalitySync",
          image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          ai: true 
        },
        { 
          name: "🏢 NestCore Mobile Suite", 
          platform: "Native Cross-Platform", 
          appCategory: "Real Estate Pro", 
          downloads: "75k+ Downloads", 
          rating: 4.8, 
          link: "https://github.com/JBLinx-Studio/NestCore",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop",
          featured: true 
        },
        { 
          name: "💻 CodeFusion Mobile IDE", 
          platform: "React Native", 
          appCategory: "Development Tools", 
          downloads: "50k+ Downloads", 
          rating: 4.7, 
          link: "https://github.com/JBLinx-Studio/CodeFusion",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
          trending: true 
        },
        { 
          name: "📲 EXPLORE MOBILE APP STORE", 
          platform: "Universal Platform", 
          appCategory: "Complete Mobile Suite", 
          downloads: "500k+ Total", 
          rating: 4.8, 
          link: "/mobile", 
          isCategory: true 
        }
      ] as MobileAppItem[]
    }
  ];

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % showcaseTabs.length);
    }, 5000);
    return () => clearInterval(tabInterval);
  }, []);

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: Math.max(0, prev.activeUsers + Math.floor(Math.random() * 5) - 2),
        todayDownloads: Math.max(0, prev.todayDownloads + Math.floor(Math.random() * 10)),
        currentProjects: Math.max(0, prev.currentProjects + Math.floor(Math.random() * 3) - 1)
      }));
    }, 3000);
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
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-orange-500/20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, cyan 2px, transparent 2px), radial-gradient(circle at 80% 80%, purple 2px, transparent 2px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className={`absolute border-2 ${i % 3 === 0 ? 'border-cyan-400/40' : i % 3 === 1 ? 'border-purple-400/40' : 'border-orange-400/40'} animate-pulse rounded-lg`}
              style={{
                width: `${12 + (i % 4) * 6}px`,
                height: `${12 + (i % 4) * 6}px`,
                left: `${(i * 11) % 90}%`,
                top: `${(i * 13) % 80}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + i * 0.2}s`,
                transform: `rotate(${i * 15}deg)`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center py-8">
        <div className="grid lg:grid-cols-12 gap-6 w-full">
          {/* Enhanced Left Content */}
          <div className="lg:col-span-7 space-y-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800/95 to-slate-700/95 border border-cyan-400/60 px-4 py-2 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 rounded-lg">
              <Hexagon className="w-4 h-4 text-cyan-400 mr-2 animate-spin" style={{animationDuration: '4s'}} />
              <span className="text-cyan-400 font-black text-sm font-mono tracking-widest">PREMIUM STUDIO</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
              <span className="text-green-400 text-xs font-bold ml-1">LIVE</span>
            </div>

            {/* Main Title - Enhanced Formatting */}
            <div className="space-y-3">
              <h1 className="text-4xl lg:text-6xl font-black text-white leading-none font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">JBLinx</span>
                <span className="text-white">Studio</span>
              </h1>
              
              {/* Enhanced Product Showcase */}
              <div className="text-lg lg:text-xl font-black text-slate-300 font-mono leading-relaxed">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                  <span className="text-purple-400">🎮 MindMate Gaming</span>
                  <span className="text-green-400">💚 VitalitySync Health</span>
                  <span className="text-cyan-400">⚡ CodeFusion IDE</span>
                  <span className="text-orange-400">🏢 NestCore RealEstate</span>
                  <span className="text-blue-400">🤖 CodeCraftAI Builder</span>
                </div>
              </div>
              
              {/* Enhanced Mission Statement */}
              <div className="text-xl lg:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 animate-pulse leading-relaxed">
                PRIORITY #1: PREMIUM PRODUCTS<br/>
                PROFESSIONAL SOLUTIONS + REAL RESULTS
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="bg-slate-800/50 border border-slate-700 p-4 backdrop-blur-sm rounded-lg">
              <p className="text-slate-300 leading-relaxed text-base font-medium">
                Professional development studio featuring <strong className="text-cyan-400 font-black">CodeFusion</strong> (CodePen alternative - advanced IDE), 
                <strong className="text-green-400 font-black"> VitalitySync</strong> (FatSecret alternative - smart health tracking), 
                <strong className="text-purple-400 font-black"> MindMate</strong> (strategic board games + chess tournaments), 
                <strong className="text-orange-400 font-black"> NestCore</strong> (complete real estate platform), 
                and <strong className="text-blue-400 font-black"> CodeCraftAI</strong> (Lovable alternative - AI fullstack builder).
              </p>
            </div>
            
            {/* Live Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-2xl">
              {[
                { value: "5+", label: "Flagship Products", icon: Trophy, color: "text-cyan-400", live: false },
                { value: liveStats.activeUsers.toLocaleString(), label: "Active Users", icon: Users, color: "text-green-400", live: true },
                { value: liveStats.todayDownloads.toLocaleString(), label: "GitHub Stars", icon: Star, color: "text-orange-400", live: true },
                { value: "4.9★", label: "Avg Rating", icon: Award, color: "text-yellow-400", live: false }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/80 border border-slate-700 p-3 text-center backdrop-blur-sm hover:border-slate-600 transition-all duration-300 group hover:bg-slate-700/90 rounded-lg">
                    <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-1 group-hover:scale-110 transition-transform duration-300`} />
                    <div className={`text-sm font-black ${stat.color} font-mono flex items-center justify-center space-x-1`}>
                      <span>{stat.value}</span>
                      {stat.live && <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>}
                    </div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link 
                to="/blog" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 font-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center space-x-2 hover:scale-105 transform rounded-lg"
              >
                <Rocket className="w-4 h-4" />
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 font-black transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform rounded-lg"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <Link 
                to="#contact"
                className="border border-orange-500/60 text-orange-400 hover:border-orange-400 hover:bg-orange-500/20 px-6 py-3 font-black transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform rounded-lg"
              >
                <Zap className="w-4 h-4" />
                <span>CONTACT PRO</span>
              </Link>
            </div>
          </div>

          {/* Enhanced Right Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            {/* Enhanced Terminal with Typewriter Effect */}
            <EnhancedTerminal />

            {/* Enhanced Showcase Panel */}
            <div className="bg-slate-800/95 border border-slate-700 backdrop-blur-sm relative overflow-hidden rounded-lg">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
              
              {/* Enhanced Tab Navigation */}
              <div className="p-3 border-b border-slate-700/50">
                <div className="grid grid-cols-3 gap-1 mb-3">
                  {showcaseTabs.map((tab, index) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`relative flex flex-col items-center justify-center py-2 px-2 text-xs font-black transition-all duration-300 group rounded ${
                          activeTab === index 
                            ? `bg-gradient-to-r ${tab.accent} text-white shadow-lg transform scale-105` 
                            : 'bg-slate-700/80 text-slate-400 hover:bg-slate-600/80'
                        }`}
                      >
                        {activeTab === index && (
                          <div className="absolute inset-0 bg-white/10 animate-pulse rounded"></div>
                        )}
                        <IconComponent className="w-3 h-3 mb-1 relative z-10" />
                        <span className="text-xs relative z-10 font-black">{tab.title}</span>
                        <span className="text-xs opacity-80 relative z-10">{tab.count}</span>
                        {activeTab === index && (
                          <div className="absolute bottom-0 left-0 w-full h-1 bg-white animate-pulse"></div>
                        )}
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
              <div className="p-3 min-h-[180px]">
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-white font-black text-base">{currentTab.title}</h3>
                      <p className="text-slate-400 text-xs">{currentTab.description}</p>
                    </div>
                    <div className={`px-3 py-1 text-xs font-black bg-gradient-to-r ${currentTab.bgPattern} border border-slate-600 rounded-full`}>
                      {currentTab.count} ITEMS
                    </div>
                  </div>
                </div>
                
                {renderTabContent()}
              </div>

              {/* Enhanced Footer */}
              <div className="flex items-center justify-between p-3 border-t border-slate-700/50 bg-slate-900/40">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Filter className="w-3 h-3" />
                    <span>Showing: {filteredItems.length}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Target className="w-3 h-3" />
                    <span>Total: {currentTab.count}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold">LIVE</span>
                  </div>
                </div>
                
                <Link 
                  to={currentTab.menuLink}
                  className={`bg-gradient-to-r ${currentTab.accent} hover:shadow-lg text-white px-4 py-2 text-xs font-black transition-all duration-300 transform hover:scale-105 flex items-center space-x-1 rounded`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>EXPLORE {currentTab.title}</span>
                  <ArrowRight className="w-3 h-3" />
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
