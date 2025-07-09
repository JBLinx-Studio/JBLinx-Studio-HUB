
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
    <section className="py-8 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header matching Services section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/90 border border-emerald-500/40 px-4 py-1.5 mb-3 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1.5 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-wider">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-2">
            PREMIUM <span className="text-emerald-400">GAMES</span> + DEV CONTENT
          </h2>
          
          <div className="w-12 h-0.5 bg-emerald-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-4">
            Immersive games, comprehensive development guides, and exclusive behind-the-scenes content
          </p>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 mb-4">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 text-xs font-black transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-emerald-500 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gaming Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-6">
            {[
              { icon: Gamepad2, value: "25+", label: "Games", color: "text-emerald-400" },
              { icon: Users, value: "25k+", label: "Players", color: "text-cyan-400" },
              { icon: Star, value: "4.8★", label: "Rating", color: "text-yellow-400" },
              { icon: Award, value: "15+", label: "Guides", color: "text-purple-400" }
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

        {/* Main Content Layout - Magazine Style */}
        <div className="grid lg:grid-cols-4 gap-6 mb-6">
          {/* Left Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/70 border border-slate-700 p-6">
              <h3 className="text-emerald-400 font-black text-lg mb-4 flex items-center font-mono">
                <Trophy className="w-5 h-5 mr-2" />
                CATEGORIES
              </h3>
              <div className="space-y-2">
                {gameCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 font-semibold text-sm font-mono transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-emerald-500 text-white shadow-lg' 
                        : 'bg-slate-800/50 text-slate-400 hover:text-emerald-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Featured Content */}
            {filteredContent.length > 0 && (
              <div className="mb-8 relative group">
                <div className="bg-slate-800/70 border border-slate-700 overflow-hidden hover:border-emerald-400/50 transition-all duration-500">
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <img 
                      src={filteredContent[0].image} 
                      alt={filteredContent[0].title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <div className="flex gap-2">
                        <span className="bg-emerald-500 text-white px-3 py-1 text-sm font-bold font-mono">
                          FEATURED
                        </span>
                        <span className="bg-slate-900/80 text-white px-3 py-1 text-sm font-semibold font-mono backdrop-blur-sm">
                          [{filteredContent[0].category}]
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="bg-slate-900/80 text-white px-2 py-1 text-sm font-semibold font-mono backdrop-blur-sm flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{filteredContent[0].downloads}</span>
                        </div>
                        <div className="bg-slate-900/80 text-white px-2 py-1 text-sm font-semibold font-mono backdrop-blur-sm flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <span>{filteredContent[0].rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-black text-2xl lg:text-3xl mb-2 group-hover:text-emerald-300 transition-colors font-mono">
                        {filteredContent[0].title}
                      </h3>
                      <div className="bg-slate-900/50 p-3 font-mono text-sm mb-4">
                        <div className="text-slate-500 mb-1"># Description:</div>
                        <div className="text-slate-200">{filteredContent[0].description}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {filteredContent[0].tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-emerald-500/30 text-emerald-300 px-2 py-1 text-xs font-semibold font-mono backdrop-blur-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-emerald-400 font-black text-xl font-mono">{filteredContent[0].price}</div>
                          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 font-bold font-mono hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                            LAUNCH
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredContent.slice(1, 5).map((item, index) => (
                <div key={index} className="bg-slate-800/30 border border-slate-700/30 hover:border-emerald-400/60 transition-all duration-300 overflow-hidden group cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-slate-900/90 text-emerald-400 px-2 py-1 text-xs font-bold font-mono">
                        [{item.type?.toUpperCase() || 'GAME'}]
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="text-white font-bold text-sm mb-1 group-hover:text-emerald-300 transition-colors font-mono">
                        {item.title}
                      </h4>
                      <div className="flex justify-between items-center">
                        <div className="text-emerald-400 text-xs font-semibold font-mono">[{item.category}]</div>
                        <div className="text-emerald-400 font-bold text-sm font-mono">{item.price}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="bg-slate-900/50 p-2 font-mono text-xs mb-3">
                      <div className="text-slate-500 mb-1"># Description:</div>
                      <div className="text-slate-300">{item.description}</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono">
                        <Download className="w-3 h-3" />
                        <span>{item.downloads}</span>
                        <Star className="w-3 h-3 text-yellow-400 ml-2" />
                        <span>{item.rating}</span>
                      </div>
                      <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 font-semibold text-xs font-mono transition-all duration-300">
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
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 p-5 text-center">
          <h3 className="text-xl font-black text-white mb-2 font-mono">
            <span className="text-emerald-400">PREMIUM</span> GAMING EXPERIENCE
          </h3>
          <p className="text-sm text-slate-400 mb-3">
            Immersive games, development guides, and exclusive gaming content.
          </p>
          
          <Link 
            to="/game-development"
            className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white px-5 py-2.5 font-black transition-all duration-300 space-x-1.5 text-sm"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>EXPLORE ALL GAMES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
