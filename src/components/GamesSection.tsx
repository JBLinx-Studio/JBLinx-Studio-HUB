
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Gamepad2, Users, Trophy, Eye, Award } from 'lucide-react';
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
    },
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
    }
  ];

  const filteredContent = activeCategory === 'All' ? games : 
    activeCategory === 'Released' ? games.filter(game => game.status === 'Released') :
    activeCategory === 'Beta' ? games.filter(game => game.status === 'Beta') :
    activeCategory === 'Dev Logs' ? games.filter(item => item.type === 'devlog') :
    activeCategory === 'Tutorials' ? games.filter(item => item.type === 'tutorial' || item.type === 'ebook') :
    games;

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* UNIQUE LAYOUT 2: Centered header with horizontal stats grid below */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-4 py-2 mb-4">
            <Trophy className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-green-400 font-bold text-sm">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
            PREMIUM <span className="text-green-400">GAMES</span> + DEV CONTENT
          </h2>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            Immersive games, comprehensive development guides, and exclusive behind-the-scenes content
          </p>

          {/* HORIZONTAL STATS GRID - Unique positioning */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
            {[
              { icon: Gamepad2, value: "25+", label: "Games", color: "text-green-400" },
              { icon: Users, value: "25k+", label: "Players", color: "text-blue-400" },
              { icon: Star, value: "4.8★", label: "Rating", color: "text-yellow-400" },
              { icon: Award, value: "15+", label: "Guides", color: "text-purple-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800 border border-slate-700 p-4 text-center">
                  <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Category Navigation - Centered below stats */}
          <div className="flex flex-wrap justify-center gap-2">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-green-500 text-white' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* MAGAZINE-STYLE LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8">
          {/* Left Sidebar - Compact */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800 border border-slate-700 p-4 mb-6">
              <h3 className="text-green-400 font-black text-lg mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                CATEGORIES
              </h3>
              <div className="space-y-2">
                {gameCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-3 py-2 font-semibold text-sm transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-green-500 text-white' 
                        : 'bg-slate-700/50 text-slate-400 hover:text-green-300 hover:bg-slate-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
            {/* Featured Game - Full Width */}
            {filteredContent.length > 0 && (
              <div className="mb-6 relative group">
                <div className="bg-slate-800 border border-slate-700 overflow-hidden hover:border-green-400/50 transition-all duration-500">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img 
                      src={filteredContent[0].image} 
                      alt={filteredContent[0].title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className="flex gap-2">
                        <span className="bg-green-500 text-white px-3 py-1 text-sm font-bold">
                          FEATURED
                        </span>
                        <span className="bg-slate-900/80 text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                          [{filteredContent[0].category}]
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="bg-slate-900/80 text-white px-2 py-1 text-sm font-semibold backdrop-blur-sm flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{filteredContent[0].downloads}</span>
                        </div>
                        <div className="bg-slate-900/80 text-white px-2 py-1 text-sm font-semibold backdrop-blur-sm flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{filteredContent[0].rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-black text-2xl lg:text-3xl mb-2 group-hover:text-green-300 transition-colors">
                        {filteredContent[0].title}
                      </h3>
                      <p className="text-slate-200 text-sm mb-4">
                        {filteredContent[0].description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {filteredContent[0].tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-green-500/30 text-green-300 px-2 py-1 text-xs font-semibold backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-green-400 font-black text-xl">{filteredContent[0].price}</div>
                          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold text-sm hover:shadow-lg transition-all duration-300">
                            LAUNCH
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content Grid - 2 columns */}
            <div className="grid md:grid-cols-2 gap-4">
              {filteredContent.slice(1, 5).map((item, index) => (
                <div key={index} className="bg-slate-800 border border-slate-700 hover:border-green-400/60 transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative h-32 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-slate-900/90 text-green-400 px-2 py-1 text-xs font-bold">
                        [{item.type?.toUpperCase() || 'GAME'}]
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-green-300 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex justify-between items-center">
                        <div className="text-green-400 text-xs font-semibold">[{item.category}]</div>
                        <div className="text-green-400 font-bold text-sm">{item.price}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-slate-400 text-xs mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-slate-400">
                        <Download className="w-3 h-3" />
                        <span>{item.downloads}</span>
                        <Star className="w-3 h-3 text-yellow-400 ml-2" />
                        <span>{item.rating}</span>
                      </div>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 font-semibold text-xs transition-all duration-300">
                        PLAY
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-slate-800 border border-slate-700 p-6 text-center">
          <h3 className="text-xl font-black text-white mb-2">
            <span className="text-green-400">PREMIUM</span> GAMING EXPERIENCE
          </h3>
          <p className="text-sm text-slate-400 mb-4">
            Immersive games, development guides, and exclusive gaming content.
          </p>
          
          <Link 
            to="/game-development"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-bold transition-all duration-300 space-x-2"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>EXPLORE ALL GAMES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
