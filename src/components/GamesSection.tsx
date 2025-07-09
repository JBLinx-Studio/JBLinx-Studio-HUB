
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Gamepad2, Users, Calendar, Play, Github, Trophy, BookOpen, FileText, Zap, Shield, Cpu, Globe } from 'lucide-react';
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
      difficulty: "Hard"
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
  
  const filteredContent = activeCategory === 'All' 
    ? allContent
    : activeCategory === 'Released'
    ? games.filter(game => game.status === 'Released')
    : activeCategory === 'Beta'
    ? games.filter(game => game.status === 'Beta')
    : activeCategory === 'Dev Logs'
    ? devContent.filter(item => item.type === 'devlog')
    : activeCategory === 'Tutorials'
    ? devContent.filter(item => item.type === 'tutorial' || item.type === 'ebook')
    : allContent;

  const getIcon = (type: string) => {
    switch(type) {
      case 'ebook': return BookOpen;
      case 'tutorial': return Play;
      case 'devlog': return FileText;
      default: return Gamepad2;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Hard': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  // Gaming-focused presentation for each category
  const renderCategoryContent = () => {
    if (activeCategory === 'Released') {
      // Gaming store layout with detailed game info
      return (
        <div className="grid lg:grid-cols-3 gap-3">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/95 border border-slate-700 hover:border-purple-400/70 transition-all duration-300 overflow-hidden group">
              <div className="relative h-36 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Game Status Badge */}
                <div className="absolute top-2 left-2">
                  <div className="bg-green-500 text-white px-2 py-1 text-xs font-black">RELEASED</div>
                </div>
                
                {/* Game Stats */}
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="bg-black/80 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{item.downloads}</span>
                  </div>
                  <div className="bg-black/80 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>

                {/* Game Title & Price */}
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-black text-sm font-mono mb-1">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <div className="text-purple-400 text-xs font-bold">{item.category}</div>
                    <div className="text-green-400 font-black text-sm">{item.price}</div>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <p className="text-slate-400 text-xs mb-2">{item.description}</p>
                
                {/* Game Details Grid */}
                <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Users className="w-3 h-3 text-cyan-400" />
                    <span>{item.players} Players</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Calendar className="w-3 h-3 text-orange-400" />
                    <span>{item.gameplayTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className={`w-3 h-3 ${getDifficultyColor(item.difficulty)}`} />
                    <span className={`${getDifficultyColor(item.difficulty)} font-bold`}>{item.difficulty}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Cpu className="w-3 h-3 text-green-400" />
                    <span>Optimized</span>
                  </div>
                </div>

                {/* Game Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-slate-700 text-purple-400 px-1.5 py-0.5 text-xs font-bold">#{tag}</span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
                  <Play className="w-3 h-3" />
                  <span>PLAY NOW</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeCategory === 'Beta') {
      // Beta testing layout with feedback focus
      return (
        <div className="space-y-3">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/95 border-l-4 border-cyan-500 bg-gradient-to-r from-slate-800/95 to-cyan-900/20 p-4 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 overflow-hidden bg-cyan-500/20 flex items-center justify-center">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="text-white font-black text-base font-mono">{item.title}</h3>
                    <div className="bg-cyan-500 text-white px-2 py-1 text-xs font-black animate-pulse">BETA ACCESS</div>
                  </div>
                  <div className="text-cyan-400 text-sm font-bold mb-1">{item.category}</div>
                  <p className="text-slate-300 text-sm mb-2">{item.description}</p>
                  
                  <div className="grid grid-cols-3 gap-3 mb-2">
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Download className="w-3 h-3" />
                      <span>{item.downloads} testers</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{item.rating} rating</span>
                    </div>
                    <div className="text-green-400 font-black text-sm">{item.price}</div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 font-black text-xs transition-all duration-300">
                    JOIN BETA
                  </button>
                  <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-4 py-1 font-bold text-xs transition-all duration-300">
                    FEEDBACK
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeCategory === 'Dev Logs') {
      // Development timeline layout
      return (
        <div className="space-y-4">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/95 border-l-4 border-orange-500 bg-gradient-to-r from-slate-800/95 to-orange-900/10 p-4">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-orange-500/30 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-black text-lg font-mono">{item.title}</h3>
                    <div className="text-orange-400 text-sm font-bold bg-orange-500/20 px-2 py-1">{item.status}</div>
                  </div>
                  <div className="text-orange-400 text-base font-bold mb-2">{item.category}</div>
                  <p className="text-slate-300 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <Users className="w-4 h-4" />
                        <span>{item.downloads} readers</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-slate-400">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 font-black text-sm transition-all duration-300">
                      READ LATEST
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (activeCategory === 'Tutorials') {
      // Educational content layout
      return (
        <div className="grid lg:grid-cols-2 gap-3">
          {filteredContent.map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <div key={index} className="bg-slate-800/95 border border-slate-700 hover:border-green-400/70 transition-all duration-300 overflow-hidden">
                <div className="relative h-24 bg-gradient-to-r from-green-500/30 to-blue-500/30 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-green-400" />
                  <div className="absolute top-2 right-2">
                    <div className="bg-green-500 text-white px-2 py-1 text-xs font-black">
                      {item.type.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-black text-base font-mono mb-1">{item.title}</h3>
                  <div className="text-green-400 text-sm font-bold mb-2">{item.category}</div>
                  <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Download className="w-3 h-3" />
                        <span>{item.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <div className="text-green-400 font-black text-base">{item.price}</div>
                  </div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-1">
                    <IconComponent className="w-4 h-4" />
                    <span>{item.type === 'ebook' ? 'READ NOW' : 'WATCH NOW'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Default gaming showcase for 'All'
    return (
      <div className="grid lg:grid-cols-3 gap-3">
        {filteredContent.slice(0, 6).map((item, index) => {
          const IconComponent = getIcon(item.type);
          return (
            <div key={index} className="bg-slate-800/95 border border-slate-700 hover:border-purple-400/70 transition-all duration-300 overflow-hidden group">
              <div className="relative h-32 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <div className="bg-slate-900/90 text-white px-2 py-1 text-xs font-black flex items-center space-x-1">
                    <IconComponent className="w-3 h-3" />
                    <span>{item.type.toUpperCase()}</span>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-black text-sm font-mono mb-1">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <div className="text-purple-400 text-xs font-bold">{item.category}</div>
                    <div className="text-green-400 font-black text-sm">{item.price}</div>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-slate-400 text-xs mb-2">{item.description}</p>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
                  <IconComponent className="w-3 h-3" />
                  <span>EXPLORE</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section className="py-6 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Gaming Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PREMIUM <span className="text-purple-400">GAMES</span> + <span className="text-blue-400">DEV CONTENT</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Experience premium games, comprehensive guides, exclusive tutorials, and development insights
          </p>

          {/* Compact Category Filter */}
          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 text-xs font-black transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-500 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gaming Stats */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
            {[
              { icon: Gamepad2, value: "25+", label: "Games", color: "text-purple-400" },
              { icon: BookOpen, value: "15+", label: "Guides", color: "text-blue-400" },
              { icon: Play, value: "40+", label: "Tutorials", color: "text-green-400" },
              { icon: FileText, value: "60+", label: "Dev Logs", color: "text-orange-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/80 border border-slate-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Gaming Content */}
        <div className="mb-5">
          {renderCategoryContent()}
        </div>

        {/* Gaming CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Zap className="w-3 h-3" />
            <span>EXPLORE ALL GAMES & RESOURCES</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
