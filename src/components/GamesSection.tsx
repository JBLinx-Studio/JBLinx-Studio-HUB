import React, { useState } from 'react';
import { ArrowRight, Download, Star, Gamepad2, Users, Calendar, Play, Github, Trophy, BookOpen, FileText, Zap, Shield, Cpu, Globe, Clock, Eye, Heart, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const gameCategories = ['All', 'Released', 'Beta', 'Dev Logs', 'Tutorials'];

  const games = [
    {
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Released",
      description: "Immersive horror with advanced AI-driven scares and atmospheric design",
      tags: ["Unity", "Multiplayer", "VR", "Horror"],
      price: "$19.99",
      players: "1-4",
      type: "game",
      gameplayTime: "25+ hrs",
      difficulty: "Hard",
      featured: true
    },
    {
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy", 
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Released",
      description: "Command armies in epic 32-player battles with advanced AI and physics",
      tags: ["Multiplayer", "Campaign", "AI", "Strategy"],
      price: "$24.99",
      players: "1-32",
      type: "game",
      gameplayTime: "100+ hrs",
      difficulty: "Medium"
    },
    {
      title: "Adventure Quest RPG",
      category: "Action/Adventure",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      description: "Epic quest through mystical realms with deep character progression",
      tags: ["Open World", "Crafting", "Magic", "RPG"],
      price: "Free Beta",
      players: "1",
      type: "game",
      gameplayTime: "80+ hrs",
      difficulty: "Medium"
    }
  ];

  const devContent = [
    {
      title: "Game Development Mastery",
      category: "Complete Guide",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop",
      downloads: "8.5k",
      rating: "4.9",
      status: "Available",
      description: "Comprehensive Unity guide covering mechanics, AI, and optimization",
      tags: ["Unity", "C#", "Design", "AI"],
      price: "$29.99",
      players: "N/A",
      type: "ebook",
      gameplayTime: "N/A",
      difficulty: "N/A"
    },
    {
      title: "Horror Game Dev Series",
      category: "Video Course",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      downloads: "6.2k",
      rating: "5.0",
      status: "Available",
      description: "Step-by-step tutorials for creating atmospheric horror experiences",
      tags: ["Unity", "Horror", "Atmosphere", "Tutorial"],
      price: "$49.99",
      players: "N/A",
      type: "tutorial",
      gameplayTime: "N/A",
      difficulty: "N/A"
    },
    {
      title: "RTS Development Blog",
      category: "Dev Log Series",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      downloads: "12.1k",
      rating: "4.8",
      status: "Weekly Updates",
      description: "Behind-the-scenes development process and technical insights",
      tags: ["Development", "Process", "Insights", "RTS"],
      price: "Free",
      players: "N/A",
      type: "devlog",
      gameplayTime: "N/A",
      difficulty: "N/A"
    }
  ];

  const allContent = [...games, ...devContent];
  const filteredContent = activeCategory === 'All' ? allContent : 
    activeCategory === 'Released' ? games.filter(game => game.status === 'Released') :
    activeCategory === 'Beta' ? games.filter(game => game.status === 'Beta') :
    activeCategory === 'Dev Logs' ? devContent.filter(item => item.type === 'devlog') :
    activeCategory === 'Tutorials' ? devContent.filter(item => item.type === 'tutorial' || item.type === 'ebook') :
    allContent;

  return (
    <section className="py-8 bg-gradient-to-tr from-slate-950 via-purple-950/30 to-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Magazine-style Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 2px, transparent 2px)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Magazine Header - Centered with Flair */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></div>
            <div className="relative inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-6 py-3 mb-4 backdrop-blur-sm">
              <Trophy className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-purple-400 font-black text-lg font-mono tracking-widest">PRIORITY #1: GAMERS</span>
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono mb-4">
            PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">GAMES</span>
            <br />
            <span className="text-2xl lg:text-3xl text-blue-400">+ DEV CONTENT</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mx-auto mb-4"></div>
        </div>

        {/* Magazine Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Categories & Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Category Navigation - Vertical */}
            <div className="bg-slate-800/90 border-l-4 border-purple-500 p-5">
              <h3 className="text-purple-400 font-black text-lg font-mono mb-4 flex items-center">
                <Gamepad2 className="w-5 h-5 mr-2" />
                CATEGORIES
              </h3>
              <div className="space-y-2">
                {gameCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 font-bold text-sm transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-purple-500 text-white shadow-lg transform translate-x-2' 
                        : 'text-slate-400 hover:text-purple-300 hover:bg-slate-700/50 hover:translate-x-1'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Gaming Stats - Vertical */}
            <div className="bg-gradient-to-b from-purple-900/20 to-slate-800/90 border border-purple-500/30 p-5">
              <h3 className="text-white font-black text-lg font-mono mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-purple-400" />
                GAMING HQ
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Gamepad2, value: "25+", label: "Premium Games", color: "text-purple-400" },
                  { icon: BookOpen, value: "15+", label: "Dev Guides", color: "text-blue-400" },
                  { icon: Play, value: "40+", label: "Video Tutorials", color: "text-green-400" },
                  { icon: FileText, value: "60+", label: "Dev Blog Posts", color: "text-orange-400" },
                  { icon: Users, value: "25k+", label: "Active Players", color: "text-cyan-400" },
                  { icon: Trophy, value: "4.8★", label: "Avg Rating", color: "text-yellow-400" }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-slate-700 flex items-center justify-center`}>
                          <IconComponent className={`w-4 h-4 ${stat.color}`} />
                        </div>
                        <span className="text-slate-300 text-sm font-medium">{stat.label}</span>
                      </div>
                      <div className={`${stat.color} font-black text-lg font-mono`}>{stat.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content Area - Magazine Style */}
          <div className="lg:col-span-2">
            {/* Featured Content - Hero Style */}
            {filteredContent.length > 0 && (
              <div className="mb-8 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800/95 border border-purple-500/30 overflow-hidden">
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <img 
                      src={filteredContent[0].image} 
                      alt={filteredContent[0].title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    
                    {/* Magazine Overlay Info */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className="flex gap-2">
                        <span className="bg-purple-500 text-white px-3 py-1 text-sm font-black">
                          FEATURED
                        </span>
                        <span className="bg-slate-900/80 text-white px-3 py-1 text-sm font-bold backdrop-blur-sm">
                          {filteredContent[0].category}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="bg-slate-900/80 text-white px-2 py-1 text-sm font-bold backdrop-blur-sm flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{filteredContent[0].downloads}</span>
                        </div>
                        <div className="bg-slate-900/80 text-white px-2 py-1 text-sm font-bold backdrop-blur-sm flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{filteredContent[0].rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-black text-2xl lg:text-3xl font-mono mb-2 group-hover:text-purple-300 transition-colors">
                        {filteredContent[0].title}
                      </h3>
                      <p className="text-slate-200 text-sm mb-4 leading-relaxed">
                        {filteredContent[0].description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {filteredContent[0].tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-purple-500/30 text-purple-300 px-2 py-1 text-xs font-bold backdrop-blur-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-green-400 font-black text-xl">{filteredContent[0].price}</div>
                          <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-2 font-black text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                            PLAY NOW
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content Grid - Magazine Style */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredContent.slice(1, 5).map((item, index) => (
                <div key={index} className="bg-slate-800/80 border border-slate-700 hover:border-purple-400/60 transition-all duration-300 overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-slate-900/90 text-purple-400 px-2 py-1 text-xs font-black">
                        {item.type?.toUpperCase() || 'GAME'}
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-bold text-sm font-mono mb-1 group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex justify-between items-center">
                        <div className="text-purple-400 text-xs font-bold">{item.category}</div>
                        <div className="text-green-400 font-bold text-sm">{item.price}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-slate-400 text-xs mb-2 leading-relaxed">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <Download className="w-3 h-3" />
                        <span>{item.downloads}</span>
                        <Star className="w-3 h-3 text-yellow-400 ml-2" />
                        <span>{item.rating}</span>
                      </div>
                      <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-1.5 font-bold text-xs transition-all duration-300">
                        EXPLORE
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Magazine CTA */}
            <div className="mt-8 text-center">
              <Link 
                to="/game-development" 
                className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-8 py-4 font-black text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 space-x-2"
              >
                <Zap className="w-5 h-5" />
                <span>EXPLORE GAMING UNIVERSE</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
