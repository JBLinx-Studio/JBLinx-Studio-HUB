
import React, { useState } from 'react';
import { 
  ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, 
  Users, Clock, Shield, Sword, Crown, Flame, Rocket, Headphones, Settings, Bell, 
  Activity, TrendingUp, Calendar, Eye, Heart, MessageSquare, Share2, Bookmark,
  Gift, Coins, Timer, Award, Cpu, Radio, Volume2, Video, Image, FileText,
  BarChart3, PieChart, LineChart, Hash, Tag, Filter, Search, Grid3X3,
  MonitorPlay, Smartphone, Tablet, Tv, Watch, GamepadIcon, Mouse, Keyboard,
  Wifi, Signal, Battery, HardDrive, MemoryStick, Joystick
} from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';
import AdditionalGamesContent from './games/AdditionalGamesContent';
import { useIsMobile } from '../hooks/use-mobile';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const isMobile = useIsMobile();

  const featuredGames = [
    {
      title: "Cyber Nexus: Protocol Zero",
      category: "Action/Cyberpunk",
      downloads: "15.2k",
      rating: "4.9",
      status: "RELEASED",
      description: "Next-gen cyberpunk action with neural implants, hacking mechanics, and AI companions",
      tech: ["Unreal 5", "Ray Tracing", "DLSS 3", "Neural AI"],
      price: "$39.99",
      players: "1-4",
      difficulty: "EXPERT",
      playtime: "120+ hrs",
      platforms: ["PC", "PS5", "Xbox", "Steam Deck"],
      genres: ["Action", "RPG", "Cyberpunk", "Multiplayer"],
      features: ["Ray Tracing", "HDR", "VR Ready", "Mod Support"],
      esrb: "M",
      developer: "NeoStudio",
      publisher: "FutureGames"
    },
    {
      title: "Mystic Realms: Eternal Saga",
      category: "MMORPG/Fantasy", 
      downloads: "32.1k",
      rating: "4.8",
      status: "EARLY ACCESS",
      description: "Massive fantasy world with 200+ player guilds, dynamic events, and legendary quests",
      tech: ["Unity HDRP", "AWS", "Blockchain", "ML"],
      price: "$24.99",
      players: "1-500",
      difficulty: "MEDIUM",
      playtime: "1000+ hrs",
      platforms: ["PC", "Mobile", "Console"],
      genres: ["MMORPG", "Fantasy", "PvP", "Crafting"],
      features: ["Cross-Platform", "Guild Wars", "Events", "Trading"],
      esrb: "T",
      developer: "MysticWorks",
      publisher: "EpicRealms"
    },
    {
      title: "Quantum Racing Championship",
      category: "Racing/Simulation",
      downloads: "28.5k",
      rating: "4.9", 
      status: "RELEASED",
      description: "Hyper-realistic racing with quantum physics, weather dynamics, and neural AI drivers",
      tech: ["Custom Engine", "PhysX 5", "RTX", "VR"],
      price: "$49.99",
      players: "1-24",
      difficulty: "HARD",
      playtime: "200+ hrs",
      platforms: ["PC", "PS5", "Xbox", "VR"],
      genres: ["Racing", "Simulation", "Sports", "VR"],
      features: ["VR Support", "Real Physics", "Weather", "Championships"],
      esrb: "E",
      developer: "SpeedTech",
      publisher: "RaceWorld"
    }
  ];

  const gameCategories = [
    { id: 'all', name: 'ALL GAMES', count: 156, icon: Gamepad2 },
    { id: 'action', name: 'ACTION', count: 45, icon: Sword },
    { id: 'rpg', name: 'RPG', count: 32, icon: Crown },
    { id: 'strategy', name: 'STRATEGY', count: 28, icon: Target },
    { id: 'racing', name: 'RACING', count: 15, icon: Zap },
    { id: 'horror', name: 'HORROR', count: 12, icon: Shield },
    { id: 'indie', name: 'INDIE', count: 24, icon: Heart }
  ];

  const devUpdates = [
    {
      title: "Quantum Engine 3.0 Released",
      type: "ENGINE UPDATE",
      category: "Development",
      content: "Revolutionary new physics engine with quantum mechanics simulation",
      author: "TechLead Dev",
      time: "2 hours ago",
      likes: 1247,
      comments: 89,
      tags: ["Engine", "Physics", "Quantum"],
      priority: "HIGH"
    },
    {
      title: "Cyber Nexus: Major Content Drop",
      type: "GAME UPDATE",
      category: "Content",
      content: "New cyberpunk district, 15 missions, neural implant system overhaul",
      author: "Game Director",
      time: "5 hours ago",
      likes: 2156,
      comments: 312,
      tags: ["Content", "Missions", "Cyberpunk"],
      priority: "CRITICAL"
    },
    {
      title: "AI Companion System Deep Dive",
      type: "DEV BLOG",
      category: "Technology",
      content: "Behind the scenes: How we built intelligent AI companions using neural networks",
      author: "AI Engineer",
      time: "1 day ago",
      likes: 892,
      comments: 156,
      tags: ["AI", "Technology", "Development"],
      priority: "MEDIUM"
    },
    {
      title: "Community Tournament Results",
      type: "ESPORTS",
      category: "Community",
      content: "Championship finals breakdown and prize distribution complete",
      author: "Esports Manager",
      time: "2 days ago",
      likes: 654,
      comments: 78,
      tags: ["Tournament", "Esports", "Community"],
      priority: "LOW"
    }
  ];

  const platforms = [
    { name: "PC", icon: MonitorPlay, count: "142 games" },
    { name: "Console", icon: Gamepad2, count: "98 games" },
    { name: "Mobile", icon: Smartphone, count: "76 games" },
    { name: "VR", icon: Eye, count: "23 games" },
    { name: "Steam Deck", icon: Tablet, count: "89 games" }
  ];

  const liveStats = [
    { label: "ONLINE PLAYERS", value: "47.2k", change: "+12%", icon: Users },
    { label: "TOURNAMENTS LIVE", value: "18", change: "+3", icon: Trophy },
    { label: "NEW RELEASES", value: "7", change: "this week", icon: Rocket },
    { label: "DEV UPDATES", value: "24", change: "today", icon: Code }
  ];

  return (
    <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 min-h-screen">
      <div className="container mx-auto px-2 md:px-4 h-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-2 md:px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">GAMING HUB</span>
          </div>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PREMIUM <span className="text-purple-400">GAMING</span> ECOSYSTEM
          </h2>
          
          <div className="w-12 md:w-16 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-xs md:text-sm text-slate-400 max-w-xl mx-auto">
            Complete gaming platform with advanced development tools and community features
          </p>
        </div>

        {/* Main Content Container */}
        <div className="h-[70vh] md:h-[75vh] lg:h-[80vh]">
          <HorizontalDragContainer 
            className="h-full" 
            staticFirstPanel={true}
            showNavigation={true}
          >
            {/* Panel 1: Main Gaming Dashboard (Static) */}
            <div className="min-w-full snap-start flex-shrink-0 h-full p-2 md:p-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 h-full">
                {/* Featured Game Display */}
                <div className="lg:col-span-3 bg-slate-800/95 border border-slate-700 p-3 md:p-4 lg:p-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center space-x-2">
                      <Play className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400 font-black text-sm font-mono">FEATURED</span>
                    </div>
                    <div className="flex space-x-1">
                      {gameCategories.slice(0, isMobile ? 3 : 7).map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setActiveCategory(cat.id)}
                          className={`px-2 py-1 text-xs font-bold border transition-all ${
                            activeCategory === cat.id
                              ? 'border-purple-400 bg-purple-500/20 text-purple-400'
                              : 'border-slate-600 bg-slate-900/50 text-slate-400 hover:border-purple-400/50'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Featured Game Card */}
                  <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/60 border border-purple-400/30 p-3 md:p-4 lg:p-6 h-full overflow-y-auto">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-white font-black text-lg md:text-xl lg:text-2xl font-mono mb-2">
                          {featuredGames[activeGame].title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="bg-cyan-500 text-black px-2 py-1 text-xs font-bold">
                            {featuredGames[activeGame].category}
                          </span>
                          <span className={`px-2 py-1 text-xs font-bold ${
                            featuredGames[activeGame].status === 'RELEASED' 
                              ? 'bg-green-500 text-black' 
                              : 'bg-yellow-500 text-black'
                          }`}>
                            {featuredGames[activeGame].status}
                          </span>
                          <span className="bg-slate-700 text-purple-400 px-2 py-1 text-xs font-bold">
                            {featuredGames[activeGame].esrb}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-black text-xl md:text-2xl lg:text-3xl">
                          {featuredGames[activeGame].price}
                        </div>
                        <div className="text-slate-400 text-xs">
                          {featuredGames[activeGame].developer}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                      {featuredGames[activeGame].description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {featuredGames[activeGame].tech.map((tech, index) => (
                        <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Game Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 mb-4">
                      {[
                        { icon: Users, value: featuredGames[activeGame].players, label: "PLAYERS" },
                        { icon: Clock, value: featuredGames[activeGame].playtime, label: "TIME" },
                        { icon: Shield, value: featuredGames[activeGame].difficulty, label: "LEVEL" },
                        { icon: Star, value: featuredGames[activeGame].rating, label: "RATING" },
                        { icon: Download, value: featuredGames[activeGame].downloads, label: "DOWNLOADS" },
                        { icon: Trophy, value: "12", label: "AWARDS" }
                      ].map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                          <div key={index} className="bg-slate-800 border border-slate-600 p-2 text-center">
                            <IconComponent className="w-3 h-3 mx-auto mb-1 text-purple-400" />
                            <div className="text-xs font-black text-white truncate">{stat.value}</div>
                            <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Platforms */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {featuredGames[activeGame].platforms.map((platform, index) => (
                        <span key={index} className="bg-purple-500/20 text-purple-400 border border-purple-400/30 px-2 py-1 text-xs font-bold">
                          {platform}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-black px-4 py-2 font-black transition-colors">
                        PLAY NOW
                      </button>
                      <button className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 font-black transition-colors">
                        ADD TO WISHLIST
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-2 md:space-y-3 h-full overflow-y-auto">
                  {/* Game Selector */}
                  <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Gamepad2 className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-black text-sm font-mono">LIBRARY</span>
                    </div>
                    
                    <div className="space-y-2">
                      {featuredGames.map((game, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveGame(index)}
                          className={`w-full text-left p-2 border transition-all duration-300 ${
                            activeGame === index 
                              ? 'border-purple-400 bg-purple-500/20' 
                              : 'border-slate-600 bg-slate-900/50 hover:border-purple-400/50'
                          }`}
                        >
                          <div className="text-white font-bold text-sm line-clamp-1">{game.title}</div>
                          <div className="flex items-center justify-between mt-1">
                            <span className={`px-2 py-1 text-xs font-bold ${
                              game.status === 'RELEASED' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'
                            }`}>
                              {game.status}
                            </span>
                            <div className="text-slate-400 text-xs">{game.downloads}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Live Stats */}
                  <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Activity className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-black text-sm font-mono">LIVE STATS</span>
                    </div>
                    
                    <div className="space-y-2">
                      {liveStats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                          <div key={index} className="bg-slate-900/50 border border-slate-600 p-2">
                            <div className="flex items-center space-x-2 mb-1">
                              <IconComponent className="w-3 h-3 text-green-400" />
                              <div className="text-white text-xs font-bold">{stat.value}</div>
                              <div className="text-green-400 text-xs">{stat.change}</div>
                            </div>
                            <div className="text-slate-400 text-xs">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-black text-sm font-mono">QUICK ACCESS</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: Trophy, label: "Tournaments", color: "yellow" },
                        { icon: Users, label: "Friends", color: "blue" },
                        { icon: Settings, label: "Settings", color: "gray" },
                        { icon: Gift, label: "Rewards", color: "green" }
                      ].map((action, index) => {
                        const IconComponent = action.icon;
                        return (
                          <button key={index} className="bg-slate-900/50 border border-slate-600 p-2 hover:border-purple-400/50 transition-all">
                            <IconComponent className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                            <div className="text-xs font-bold text-white">{action.label}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Development Hub */}
            <div className="min-w-full snap-start flex-shrink-0 h-full p-2 md:p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 h-full">
                {/* Dev Updates Feed */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4 lg:p-6 overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <Code className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-black text-lg font-mono">DEV UPDATES</span>
                  </div>
                  
                  <div className="space-y-3 h-full overflow-y-auto">
                    {devUpdates.map((update, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-3 hover:border-green-400/50 transition-all">
                        <div className="flex items-start justify-between mb-2">
                          <span className={`px-2 py-1 text-xs font-bold ${
                            update.priority === 'CRITICAL' ? 'bg-red-500 text-white' :
                            update.priority === 'HIGH' ? 'bg-orange-500 text-black' :
                            update.priority === 'MEDIUM' ? 'bg-yellow-500 text-black' :
                            'bg-gray-500 text-white'
                          }`}>
                            {update.type}
                          </span>
                          <div className="text-slate-400 text-xs">{update.time}</div>
                        </div>
                        
                        <h4 className="text-white font-bold text-sm mb-2 line-clamp-1">{update.title}</h4>
                        <p className="text-slate-300 text-xs mb-3 line-clamp-2">{update.content}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-2">
                          {update.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-slate-700 text-cyan-400 px-1 py-0.5 text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-slate-400">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Heart className="w-3 h-3" />
                              <span>{update.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageSquare className="w-3 h-3" />
                              <span>{update.comments}</span>
                            </div>
                          </div>
                          <div>{update.author}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analytics Dashboard */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4 lg:p-6 overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-lg font-mono">ANALYTICS</span>
                  </div>
                  
                  <div className="space-y-4 h-full overflow-y-auto">
                    {/* Revenue Chart */}
                    <div className="bg-slate-900/50 border border-slate-600 p-3">
                      <div className="text-white font-bold text-sm mb-2">MONTHLY REVENUE</div>
                      <div className="text-green-400 font-black text-2xl">$125,430</div>
                      <div className="text-green-400 text-xs">↗ +23.5% from last month</div>
                    </div>

                    {/* Player Metrics */}
                    <div className="bg-slate-900/50 border border-slate-600 p-3">
                      <div className="text-white font-bold text-sm mb-3">PLAYER ENGAGEMENT</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Daily Active Users</span>
                          <span className="text-white font-bold">47.2k</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Avg Session Time</span>
                          <span className="text-white font-bold">2.4h</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-400">Retention Rate</span>
                          <span className="text-green-400 font-bold">85.3%</span>
                        </div>
                      </div>
                    </div>

                    {/* Platform Distribution */}
                    <div className="bg-slate-900/50 border border-slate-600 p-3">
                      <div className="text-white font-bold text-sm mb-3">PLATFORM STATS</div>
                      <div className="space-y-2">
                        {platforms.map((platform, index) => {
                          const IconComponent = platform.icon;
                          return (
                            <div key={index} className="flex items-center justify-between text-xs">
                              <div className="flex items-center space-x-2">
                                <IconComponent className="w-3 h-3 text-purple-400" />
                                <span className="text-slate-400">{platform.name}</span>
                              </div>
                              <span className="text-white font-bold">{platform.count}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools & Resources */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4 lg:p-6 overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <Terminal className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400 font-black text-lg font-mono">DEV TOOLS</span>
                  </div>
                  
                  <div className="space-y-3 h-full overflow-y-auto">
                    {[
                      { name: "Game Engine SDK", type: "FRAMEWORK", downloads: "15.2k", price: "$199" },
                      { name: "AI Behavior Toolkit", type: "LIBRARY", downloads: "8.7k", price: "$99" },
                      { name: "Physics Pro Suite", type: "PLUGIN", downloads: "12.1k", price: "$149" },
                      { name: "Audio Master Pack", type: "ASSETS", downloads: "25.3k", price: "$79" },
                      { name: "VFX Shader Collection", type: "SHADERS", downloads: "18.9k", price: "$129" },
                      { name: "Mobile Optimization Kit", type: "TOOL", downloads: "6.4k", price: "$89" }
                    ].map((tool, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-3 hover:border-orange-400/50 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className="text-white font-bold text-sm">{tool.name}</div>
                            <span className="bg-orange-500 text-black px-2 py-1 text-xs font-bold">
                              {tool.type}
                            </span>
                          </div>
                          <div className="text-green-400 font-black text-sm">{tool.price}</div>
                        </div>
                        <div className="text-slate-400 text-xs flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{tool.downloads} downloads</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: Community & Esports */}
            <div className="min-w-full snap-start flex-shrink-0 h-full p-2 md:p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 h-full">
                {/* Live Tournaments */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4 lg:p-6 overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-black text-sm md:text-lg font-mono">TOURNAMENTS</span>
                  </div>
                  
                  <div className="space-y-3 h-full overflow-y-auto">
                    {[
                      { name: "Winter Championship", prize: "$50,000", status: "LIVE", players: 128 },
                      { name: "Cyber Cup Finals", prize: "$25,000", status: "STARTING", players: 64 },
                      { name: "Indie Game Jam", prize: "$10,000", status: "REGISTRATION", players: 256 },
                      { name: "Speed Run Event", prize: "$5,000", status: "UPCOMING", players: 32 }
                    ].map((tournament, index) => (
                      <div key={index} className="bg-slate-900/50 border border-yellow-400/30 p-3">
                        <div className="text-white font-bold text-sm mb-1">{tournament.name}</div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-yellow-400 text-xs font-bold">{tournament.prize}</div>
                          <span className={`px-2 py-1 text-xs font-bold ${
                            tournament.status === 'LIVE' ? 'bg-red-500 text-white animate-pulse' :
                            tournament.status === 'STARTING' ? 'bg-orange-500 text-black' :
                            'bg-gray-500 text-white'
                          }`}>
                            {tournament.status}
                          </span>
                        </div>
                        <div className="text-slate-400 text-xs">{tournament.players} players</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community Hub */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4 lg:p-6 overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <Users className="w-5 h-5 text-pink-400" />
                    <span className="text-pink-400 font-black text-sm md:text-lg font-mono">COMMUNITY</span>
                  </div>
                  
                  <div className="space-y-3 h-full overflow-y-auto">
                    {[
                      { platform: "Discord", members: "125k", status: "online", activity: "High" },
                      { platform: "Reddit", members: "89k", status: "active", activity: "Medium" },
                      { platform: "YouTube", members: "234k", status: "growing", activity: "High" },
                      { platform: "Twitch", members: "67k", status: "streaming", activity: "Live" }
                    ].map((community, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-bold text-sm">{community.platform}</div>
                          <div className={`w-2 h-2 rounded-full ${
                            community.activity === 'Live' ? 'bg-red-500 animate-pulse' :
                            community.activity === 'High' ? 'bg-green-500' :
                            'bg-yellow-500'
                          }`}></div>
                        </div>
                        <div className="text-pink-400 text-xs font-bold">{community.members} members</div>
                        <div className="text-slate-400 text-xs">{community.status}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Streaming & Content */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4 lg:p-6 overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <Video className="w-5 h-5 text-red-400" />
                    <span className="text-red-400 font-black text-sm md:text-lg font-mono">LIVE CONTENT</span>
                  </div>
                  
                  <div className="space-y-3 h-full overflow-y-auto">
                    {[
                      { title: "Dev Stream: New Features", viewers: "2.1k", streamer: "DevTeam", live: true },
                      { title: "Tournament Finals", viewers: "15.7k", streamer: "EsportsTV", live: true },
                      { title: "Speed Run Challenge", viewers: "892", streamer: "ProGamer", live: false },
                      { title: "Tutorial: AI Systems", viewers: "1.3k", streamer: "TechGuru", live: false }
                    ].map((stream, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-white font-bold text-sm line-clamp-1">{stream.title}</div>
                          {stream.live && (
                            <span className="bg-red-500 text-white px-1 py-0.5 text-xs font-bold animate-pulse">
                              LIVE
                            </span>
                          )}
                        </div>
                        <div className="text-red-400 text-xs">{stream.viewers} viewers</div>
                        <div className="text-slate-400 text-xs">{stream.streamer}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* News & Announcements */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 md:p-4 lg:p-6 overflow-hidden">
                  <div className="flex items-center space-x-2 mb-4">
                    <Bell className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400 font-black text-sm md:text-lg font-mono">NEWS</span>
                  </div>
                  
                  <div className="space-y-3 h-full overflow-y-auto">
                    {[
                      { title: "Major Engine Update Released", category: "TECH", time: "1h ago", priority: "high" },
                      { title: "New Game Mode Coming Soon", category: "GAME", time: "3h ago", priority: "medium" },
                      { title: "Community Event Registration", category: "EVENT", time: "6h ago", priority: "low" },
                      { title: "Developer AMA Tomorrow", category: "SOCIAL", time: "12h ago", priority: "medium" },
                      { title: "Bug Fixes and Improvements", category: "PATCH", time: "1d ago", priority: "low" }
                    ].map((news, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`px-2 py-1 text-xs font-bold ${
                            news.category === 'TECH' ? 'bg-blue-500 text-white' :
                            news.category === 'GAME' ? 'bg-purple-500 text-white' :
                            news.category === 'EVENT' ? 'bg-green-500 text-black' :
                            news.category === 'SOCIAL' ? 'bg-pink-500 text-white' :
                            'bg-gray-500 text-white'
                          }`}>
                            {news.category}
                          </span>
                          <div className={`w-2 h-2 rounded-full ${
                            news.priority === 'high' ? 'bg-red-500' :
                            news.priority === 'medium' ? 'bg-yellow-500' :
                            'bg-green-500'
                          }`}></div>
                        </div>
                        <div className="text-white font-bold text-sm mb-1 line-clamp-2">{news.title}</div>
                        <div className="text-slate-400 text-xs">{news.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 4: Extended Content */}
            <div className="min-w-full snap-start flex-shrink-0 h-full p-2 md:p-4">
              <AdditionalGamesContent />
            </div>
          </HorizontalDragContainer>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mt-4 mb-4">
          <div className="text-slate-500 text-xs font-mono">
            ← NAVIGATE THROUGH GAMING ECOSYSTEM →
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 md:px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Zap className="w-3 h-3" />
            <span>EXPLORE FULL PLATFORM</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
