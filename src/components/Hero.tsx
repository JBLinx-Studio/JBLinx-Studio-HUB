
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Terminal, Hexagon, Gamepad2, Code, Book, Zap, Play, Download, Users, Trophy, Star, Shield, Globe, Database, Filter, Search, TrendingUp, Clock, Award, Layers, Smartphone, Rocket, Brain, Sparkles, Target, Heart, Eye, Cpu, Monitor, Palette, Settings, BarChart3, Lock, CheckCircle, Building2, Factory, Briefcase, ExternalLink, ChevronRight, Flame, Lightning, Crown, Diamond } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [sortBy, setSortBy] = useState('featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [liveStats, setLiveStats] = useState({
    activeUsers: 1247,
    todayDownloads: 892,
    currentProjects: 34
  });

  const terminalLines = [
    '> initializing_jblinx_premium_studio...',
    '> loading_premium_content: 200+ professional_assets...',
    '> connecting_smart_navigation_system...',
    '> analytics_engine: ONLINE | performance: 99.7%',
    '> STATUS: All Systems Ready ⬡ PREMIUM ACTIVE'
  ];

  const showcaseTabs = [
    {
      title: "GAMES",
      subtitle: "Premium Gaming",
      icon: Gamepad2,
      count: "25+",
      color: "purple",
      accent: "from-purple-500 via-pink-500 to-purple-600",
      bgPattern: "from-purple-500/10 to-pink-500/5",
      theme: "gaming",
      sortOptions: ["Featured", "New", "Popular", "Rating"],
      menuLink: "/games",
      priority: "🎮 PRIORITY #1",
      description: "Immersive experiences with cutting-edge gameplay",
      items: [
        { name: "Survival Horror Chronicles", type: "Unity 3D", status: "Released", rating: 4.9, downloads: "12k", link: "/games/horror", trending: true, featured: true },
        { name: "Strategic Conquest RTS", type: "Multiplayer", status: "Beta", rating: 4.7, downloads: "8k", link: "/games/strategy", new: true },
        { name: "Adventure RPG Quest", type: "Open World", status: "Development", rating: 4.8, downloads: "5k", link: "/games/rpg", coming: true },
        { name: "🏆 Browse All Games", type: "Premium Collection", status: "Explore", rating: 5.0, downloads: "25+", link: "/games", category: true }
      ]
    },
    {
      title: "LEARNING",
      subtitle: "Knowledge Hub",
      icon: Brain,
      count: "50+",
      color: "cyan",
      accent: "from-cyan-400 via-blue-500 to-cyan-600",
      bgPattern: "from-cyan-500/10 to-blue-500/5",
      theme: "learning",
      sortOptions: ["Latest", "Most Popular", "Difficulty", "Duration"],
      menuLink: "/blog",
      priority: "📚 CONTENT HUB",
      description: "Comprehensive guides and educational resources",
      items: [
        { name: "Full-Stack Dev Mastery", type: "Complete Course", difficulty: "Expert", duration: "40h", price: "$149", link: "/guides/fullstack", bestseller: true },
        { name: "Game Development Bible", type: "E-book", difficulty: "Advanced", duration: "25h", price: "$89", link: "/guides/gamedev", featured: true },
        { name: "React Best Practices", type: "Video Series", difficulty: "Intermediate", duration: "15h", price: "$69", link: "/guides/react", new: true },
        { name: "📖 All Learning Content", type: "Knowledge Base", difficulty: "All Levels", duration: "200h+", price: "Browse", link: "/blog", category: true }
      ]
    },
    {
      title: "DEV TOOLS",
      subtitle: "Pro Toolkit",
      icon: Code,
      count: "40+",
      color: "green",
      accent: "from-green-400 via-emerald-500 to-green-600",
      bgPattern: "from-green-500/10 to-emerald-500/5",
      theme: "development",
      sortOptions: ["Framework", "Language", "Updated", "Price"],
      menuLink: "/tools",
      priority: "⚡ DEV SUITE",
      description: "Professional development tools and templates",
      items: [
        { name: "React SaaS Starter Pro", framework: "React", language: "TypeScript", updated: "2 days", price: "$99", link: "/tools/react", premium: true },
        { name: "FastAPI Production Kit", framework: "FastAPI", language: "Python", updated: "1 week", price: "$79", link: "/tools/fastapi", trending: true },
        { name: "Flutter Enterprise Suite", framework: "Flutter", language: "Dart", updated: "3 days", price: "$119", link: "/tools/flutter", featured: true },
        { name: "🛠️ All Developer Tools", framework: "Multi-Stack", language: "Various", updated: "Daily", price: "Browse", link: "/tools", category: true }
      ]
    },
    {
      title: "ENTERPRISE",
      subtitle: "Business Solutions",
      icon: Building2,
      count: "15+",
      color: "orange",
      accent: "from-orange-400 via-red-500 to-orange-600",
      bgPattern: "from-orange-500/10 to-red-500/5",
      theme: "enterprise",
      sortOptions: ["Industry", "Scale", "Features", "Price"],
      menuLink: "/enterprise",
      priority: "🏢 ENTERPRISE",
      description: "Scalable solutions for growing businesses",
      items: [
        { name: "AI-Powered CRM Suite", industry: "Sales Tech", scale: "Enterprise", features: "AI/ML Ready", price: "Custom", link: "/enterprise/crm", enterprise: true },
        { name: "Real-time Analytics Pro", industry: "Data Analytics", scale: "Medium+", features: "Live Dashboard", price: "$299/mo", link: "/enterprise/analytics", popular: true },
        { name: "E-commerce Platform", industry: "Retail Tech", scale: "Large Scale", features: "Multi-tenant", price: "$499/mo", link: "/enterprise/ecommerce", featured: true },
        { name: "🏭 Enterprise Solutions", industry: "All Sectors", scale: "Any Size", features: "Custom Built", price: "Contact", link: "/enterprise", category: true }
      ]
    },
    {
      title: "WEB APPS",
      subtitle: "Digital Solutions",
      icon: Globe,
      count: "30+",
      color: "indigo",
      accent: "from-indigo-400 via-purple-500 to-indigo-600",
      bgPattern: "from-indigo-500/10 to-purple-500/5",
      theme: "webapp",
      sortOptions: ["Category", "Technology", "Users", "Rating"],
      menuLink: "/apps",
      priority: "🌐 WEB SUITE",
      description: "Modern web applications for every need",
      items: [
        { name: "TaskFlow Pro Suite", category: "Productivity", technology: "React + AI", users: "50k+", rating: 4.9, link: "/apps/taskflow", ai: true },
        { name: "DevTracker Analytics", category: "Development", technology: "Vue + D3", users: "35k+", rating: 4.8, link: "/apps/devtracker", trending: true },
        { name: "DataViz Intelligence", category: "Analytics", technology: "Next.js", users: "60k+", rating: 4.9, link: "/apps/dataviz", premium: true },
        { name: "🚀 Browse Web Apps", category: "All Categories", technology: "Modern Stack", users: "200k+", rating: 4.8, link: "/apps", category: true }
      ]
    },
    {
      title: "MOBILE",
      subtitle: "App Ecosystem",
      icon: Smartphone,
      count: "20+",
      color: "pink",
      accent: "from-pink-400 via-rose-500 to-pink-600",
      bgPattern: "from-pink-500/10 to-rose-500/5",
      theme: "mobile",
      sortOptions: ["Platform", "Category", "Downloads", "Rating"],
      menuLink: "/mobile",
      priority: "📱 MOBILE HUB",
      description: "Cross-platform mobile applications",
      items: [
        { name: "FitTracker AI Pro", platform: "Cross-Platform", category: "Health Tech", downloads: "100k+", rating: 4.9, link: "/mobile/fitness", ai: true },
        { name: "FinanceFlow Master", platform: "Native iOS/Android", category: "FinTech", downloads: "75k+", rating: 4.8, link: "/mobile/finance", featured: true },
        { name: "StudyBuddy Premium", platform: "React Native", category: "EdTech", downloads: "50k+", rating: 4.7, link: "/mobile/education", trending: true },
        { name: "📲 Mobile App Store", platform: "All Platforms", category: "Complete Suite", downloads: "500k+", rating: 4.8, link: "/mobile", category: true }
      ]
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
    }, 1200);

    return () => clearInterval(interval);
  }, [currentLine]);

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % showcaseTabs.length);
    }, 5000);
    return () => clearInterval(tabInterval);
  }, []);

  useEffect(() => {
    const statsInterval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) - 2,
        todayDownloads: prev.todayDownloads + Math.floor(Math.random() * 10),
        currentProjects: prev.currentProjects + Math.floor(Math.random() * 3) - 1
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

  const getItemBadge = (item: any) => {
    if (item.category) return { text: "VIEW ALL", color: "bg-gradient-to-r from-cyan-500 to-purple-500 text-white animate-pulse" };
    if (item.trending) return { text: "🔥 TRENDING", color: "bg-red-500/90 text-white" };
    if (item.featured) return { text: "⭐ FEATURED", color: "bg-blue-500/90 text-white" };
    if (item.new) return { text: "✨ NEW", color: "bg-green-500/90 text-white" };
    if (item.bestseller) return { text: "👑 BESTSELLER", color: "bg-yellow-500/90 text-black font-black" };
    if (item.premium) return { text: "💎 PREMIUM", color: "bg-purple-500/90 text-white" };
    if (item.ai) return { text: "🤖 AI-POWERED", color: "bg-cyan-500/90 text-white" };
    if (item.enterprise) return { text: "🏢 ENTERPRISE", color: "bg-orange-500/90 text-white" };
    return null;
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Released': return 'bg-green-500/30 text-green-300 border-green-400/50';
      case 'Beta': return 'bg-cyan-500/30 text-cyan-300 border-cyan-400/50';
      case 'Development': return 'bg-orange-500/30 text-orange-300 border-orange-400/50';
      case 'Explore': return 'bg-purple-500/30 text-purple-300 border-purple-400/50';
      default: return 'bg-slate-500/30 text-slate-300 border-slate-400/50';
    }
  };

  const renderTabContent = () => {
    const tab = showcaseTabs[activeTab];
    
    return (
      <div className="space-y-2">
        {filteredItems.map((item, index) => {
          const isMainCategoryItem = item.category;
          const badge = getItemBadge(item);
          
          return (
            <div key={index} className={`relative group transition-all duration-500 transform hover:scale-[1.02] cursor-pointer ${
              isMainCategoryItem 
                ? `bg-gradient-to-r ${tab.accent}/15 border-2 border-dashed border-cyan-400/50 hover:border-solid hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20` 
                : 'bg-slate-800/80 border border-slate-600/50 hover:border-slate-400 hover:bg-slate-700/90'
            } backdrop-blur-sm overflow-hidden`}>
              
              <div className={`absolute inset-0 bg-gradient-to-r ${tab.accent}/10 opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
              
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
                        {badge && (
                          <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${badge.color}`}>
                            {badge.text}
                          </span>
                        )}
                      </div>
                      {tab.theme === 'gaming' && (
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-purple-300 text-xs font-medium">{item.type}</span>
                          <div className={`px-1.5 py-0.5 text-xs font-bold border rounded ${getStatusColor(item.status)}`}>
                            {item.status}
                          </div>
                        </div>
                      )}
                      {tab.theme === 'learning' && (
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="bg-cyan-500/30 text-cyan-300 px-2 py-0.5 text-xs font-bold rounded">{item.type}</span>
                          <span className="text-cyan-400 text-xs font-bold">{item.price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {!isMainCategoryItem && (
                    <div className="flex items-center space-x-2">
                      {(tab.theme === 'webapp' || tab.theme === 'mobile') && (
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
                    {tab.theme === 'gaming' && (
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
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800/95 to-slate-700/95 border border-cyan-400/60 px-4 py-2 backdrop-blur-sm hover:border-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
              <Hexagon className="w-4 h-4 text-cyan-400 mr-2 animate-spin" style={{animationDuration: '4s'}} />
              <span className="text-cyan-400 font-black text-sm font-mono tracking-widest">PREMIUM STUDIO</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
              <span className="text-green-400 text-xs font-bold ml-1">LIVE</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-none font-mono">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">JBLinx</span>
                <span className="text-white">Studio</span>
              </h1>
              
              <div className="text-base lg:text-lg font-bold text-slate-300 font-mono">
                <span className="text-purple-400">Games</span> • 
                <span className="text-cyan-400"> Learning</span> • 
                <span className="text-green-400"> Dev Tools</span> • 
                <span className="text-orange-400"> Enterprise</span> • 
                <span className="text-blue-400"> Web Apps</span> • 
                <span className="text-pink-400"> Mobile</span>
              </div>
              
              <div className="text-lg lg:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-orange-400 animate-pulse">
                Everything Premium. Everything Connected. Everything Professional.
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-2xl text-base">
              Professional development studio with integrated navigation to premium games, comprehensive learning content, 
              advanced dev tools, enterprise solutions, and cutting-edge applications.
            </p>
            
            {/* Live Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-2xl">
              {[
                { value: "200+", label: "Premium Products", icon: Trophy, color: "text-cyan-400", live: false },
                { value: liveStats.activeUsers.toLocaleString(), label: "Active Users", icon: Users, color: "text-green-400", live: true },
                { value: liveStats.todayDownloads.toLocaleString(), label: "Today's Downloads", icon: Download, color: "text-orange-400", live: true },
                { value: "4.9★", label: "Avg Rating", icon: Star, color: "text-yellow-400", live: false }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/80 border border-slate-700 p-3 text-center backdrop-blur-sm hover:border-slate-600 transition-all duration-300 group hover:bg-slate-700/90">
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
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-3 font-black transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center space-x-2 hover:scale-105 transform"
              >
                <Rocket className="w-4 h-4" />
                <span>EXPLORE ALL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a 
                href="https://github.com/orgs/JBLinx-Studio/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 px-6 py-3 font-black transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <Link 
                to="#contact"
                className="border border-orange-500/60 text-orange-400 hover:border-orange-400 hover:bg-orange-500/20 px-6 py-3 font-black transition-all duration-300 flex items-center space-x-2 hover:scale-105 transform"
              >
                <Lightning className="w-4 h-4" />
                <span>CONTACT PRO</span>
              </Link>
            </div>
          </div>

          {/* Enhanced Right Sidebar */}
          <div className="lg:col-span-5 space-y-3">
            {/* Enhanced Terminal */}
            <div className="bg-slate-900/95 border border-slate-700 backdrop-blur-sm relative overflow-hidden group hover:border-slate-600 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 animate-pulse"></div>
              
              <div className="flex items-center justify-between p-3 border-b border-slate-700/50">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-green-400 text-xs font-mono">PREMIUM TERMINAL</div>
                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>
              </div>
              
              <div className="p-3 font-mono text-xs min-h-[80px] relative">
                <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                  {terminalText}
                </pre>
                <div className="flex items-center mt-2">
                  <span className="text-green-400">⬡ premium_studio</span>
                  <span className="text-cyan-400 ml-2">$</span>
                  <div className="w-2 h-4 bg-green-400 ml-2 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Enhanced Showcase Panel */}
            <div className="bg-slate-800/95 border border-slate-700 backdrop-blur-sm relative overflow-hidden">
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
                        className={`relative flex flex-col items-center justify-center py-2 px-2 text-xs font-black transition-all duration-300 group ${
                          activeTab === index 
                            ? `bg-gradient-to-r ${tab.accent} text-white shadow-lg transform scale-105` 
                            : 'bg-slate-700/80 text-slate-400 hover:bg-slate-600/80'
                        }`}
                      >
                        {activeTab === index && (
                          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
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
                      <span>{currentTab.priority}</span>
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
