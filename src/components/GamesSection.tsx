
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
      description: "Immersive horror with advanced AI-driven scares",
      tags: ["Unity", "Multiplayer", "VR"],
      price: "$19.99",
      players: "1-4",
      type: "game"
    },
    {
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy", 
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Released",
      description: "Command armies in epic 32-player battles",
      tags: ["Multiplayer", "Campaign", "AI"],
      price: "$24.99",
      players: "1-32",
      type: "game"
    },
    {
      title: "Adventure Quest RPG",
      category: "Action/Adventure",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      description: "Epic quest through mystical realms",
      tags: ["Open World", "Crafting", "Magic"],
      price: "Free Beta",
      players: "1",
      type: "game"
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
      description: "Comprehensive Unity guide covering mechanics, AI",
      tags: ["Unity", "C#", "Design"],
      price: "$29.99",
      players: "N/A",
      type: "ebook"
    },
    {
      title: "Horror Game Dev Series",
      category: "Video Course",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      downloads: "6.2k",
      rating: "5.0",
      status: "Available",
      description: "Step-by-step tutorials for atmospheric horror",
      tags: ["Unity", "Horror", "Atmosphere"],
      price: "$49.99",
      players: "N/A",
      type: "tutorial"
    },
    {
      title: "RTS Development Blog",
      category: "Dev Log Series",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=300&fit=crop",
      downloads: "12.1k",
      rating: "4.8",
      status: "Weekly Updates",
      description: "Behind-the-scenes development process",
      tags: ["Development", "Process", "Insights"],
      price: "Free",
      players: "N/A",
      type: "devlog"
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

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'ebook': return 'bg-blue-500';
      case 'tutorial': return 'bg-green-500';
      case 'devlog': return 'bg-orange-500';
      default: return 'bg-purple-500';
    }
  };

  // Unique presentation for each category
  const renderCategoryContent = () => {
    if (activeCategory === 'Released') {
      // Grid layout for released games
      return (
        <div className="grid lg:grid-cols-3 gap-4">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-purple-400/60 transition-all duration-300 overflow-hidden group">
              <div className="relative h-32 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <div className="bg-purple-500 text-white px-2 py-1 text-xs font-black">RELEASED</div>
                </div>
                <div className="absolute top-2 right-2 flex gap-1">
                  <div className="bg-black/70 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{item.downloads}</span>
                  </div>
                  <div className="bg-black/70 text-white px-2 py-1 text-xs font-bold flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{item.rating}</span>
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
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-slate-700 text-purple-400 px-1.5 py-0.5 text-xs font-bold">#{tag}</span>
                  ))}
                </div>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
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
      // List layout for beta games
      return (
        <div className="space-y-3">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-cyan-400/60 transition-all duration-300 p-4 flex items-center space-x-4">
              <div className="w-20 h-20 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-white font-black text-sm font-mono">{item.title}</h3>
                  <div className="bg-cyan-500 text-white px-2 py-1 text-xs font-black">BETA</div>
                </div>
                <div className="text-cyan-400 text-xs font-bold mb-1">{item.category}</div>
                <p className="text-slate-400 text-xs mb-2">{item.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-xs text-slate-300">
                    <Download className="w-3 h-3" />
                    <span>{item.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-slate-300">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="text-green-400 font-black text-sm">{item.price}</div>
                </div>
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 font-black text-xs transition-all duration-300">
                TEST BETA
              </button>
            </div>
          ))}
        </div>
      );
    }

    if (activeCategory === 'Dev Logs') {
      // Timeline layout for dev logs
      return (
        <div className="space-y-4">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/90 border-l-4 border-orange-500 bg-gradient-to-r from-slate-800/90 to-slate-700/50 p-4">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-orange-500/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-orange-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-black text-base font-mono">{item.title}</h3>
                    <div className="text-orange-400 text-xs font-bold">{item.status}</div>
                  </div>
                  <div className="text-orange-400 text-sm font-bold mb-2">{item.category}</div>
                  <p className="text-slate-300 text-sm mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Users className="w-3 h-3" />
                        <span>{item.downloads} readers</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-slate-400">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 font-bold text-xs transition-all duration-300">
                      READ UPDATE
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
      // Card layout for tutorials
      return (
        <div className="grid lg:grid-cols-2 gap-4">
          {filteredContent.map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-green-400/60 transition-all duration-300 overflow-hidden">
                <div className="relative h-24 bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-green-400" />
                  <div className="absolute top-2 right-2">
                    <div className={`${getTypeColor(item.type)} text-white px-2 py-1 text-xs font-black`}>
                      {item.type.toUpperCase()}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-black text-sm font-mono mb-1">{item.title}</h3>
                  <div className="text-green-400 text-xs font-bold mb-2">{item.category}</div>
                  <p className="text-slate-400 text-xs mb-3">{item.description}</p>
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
                    <div className="text-green-400 font-black text-sm">{item.price}</div>
                  </div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
                    <IconComponent className="w-3 h-3" />
                    <span>{item.type === 'ebook' ? 'READ NOW' : 'WATCH NOW'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Default grid for 'All'
    return (
      <div className="grid lg:grid-cols-3 gap-4">
        {filteredContent.slice(0, 6).map((item, index) => {
          const IconComponent = getIcon(item.type);
          return (
            <div key={index} className="bg-slate-800/90 border border-slate-700 hover:border-purple-400/60 transition-all duration-300 overflow-hidden group">
              <div className="relative h-32 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <div className={`${getTypeColor(item.type)} text-white px-2 py-1 text-xs font-black flex items-center space-x-1`}>
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
    <section className="py-8 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Ultra Compact Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/90 border border-purple-500/40 px-4 py-1.5 mb-3 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1.5 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-wider">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-2">
            PREMIUM <span className="text-purple-400">GAMES</span> + <span className="text-blue-400">DEV CONTENT</span>
          </h2>
          
          <div className="w-12 h-0.5 bg-purple-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-4">
            Experience premium games, comprehensive guides, exclusive tutorials, and dev logs
          </p>

          {/* Ultra Compact Category Filter */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 text-xs font-black transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-500 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Ultra Compact Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-6">
            {[
              { icon: Gamepad2, value: "15+", label: "Games", color: "text-purple-400" },
              { icon: BookOpen, value: "12+", label: "eBooks", color: "text-blue-400" },
              { icon: Play, value: "30+", label: "Tutorials", color: "text-green-400" },
              { icon: FileText, value: "50+", label: "Articles", color: "text-orange-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/70 border border-slate-700 p-2 text-center backdrop-blur-sm">
                  <IconComponent className={`w-4 h-4 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-sm font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Category Content */}
        <div className="mb-6">
          {renderCategoryContent()}
        </div>

        {/* Ultra Compact CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-2.5 font-black transition-all duration-300 space-x-1.5 shadow-lg text-sm"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>EXPLORE ALL GAMES & RESOURCES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
