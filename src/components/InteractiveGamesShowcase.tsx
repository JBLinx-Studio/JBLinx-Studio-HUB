
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Gamepad2, Play, Github, Trophy, Users, Calendar, Zap, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveGamesShowcase = () => {
  const [hoveredGame, setHoveredGame] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const games = [
    {
      id: 1,
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      type: "horror",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Live",
      description: "Immersive horror experience with advanced survival mechanics and AI-driven scares",
      tags: ["Unity", "Multiplayer", "VR Ready"],
      price: "$19.99",
      players: "1-4",
      genre: "Horror",
      releaseDate: "2024"
    },
    {
      id: 2,
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy",
      type: "strategy",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Live",
      description: "Command armies in epic real-time strategic battles with 32-player multiplayer",
      tags: ["Multiplayer", "Campaign", "AI"],
      price: "$24.99",
      players: "1-32",
      genre: "Strategy",
      releaseDate: "2024"
    },
    {
      id: 3,
      title: "Adventure Quest RPG",
      category: "Action/Adventure",
      type: "adventure",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      description: "Epic quest through mystical realms with complex storylines and crafting",
      tags: ["Open World", "Crafting", "Magic"],
      price: "Free Beta",
      players: "1",
      genre: "RPG",
      releaseDate: "2024"
    },
    {
      id: 4,
      title: "Cyber Racing Pro",
      category: "Racing/Sports",
      type: "racing",
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop",
      downloads: "4.5k",
      rating: "4.9",
      status: "Live",
      description: "Futuristic racing with cyberpunk aesthetics and high-speed action",
      tags: ["Racing", "Cyberpunk", "Online"],
      price: "$14.99",
      players: "1-8",
      genre: "Racing",
      releaseDate: "2024"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Games', count: games.length },
    { id: 'horror', name: 'Horror', count: games.filter(g => g.type === 'horror').length },
    { id: 'strategy', name: 'Strategy', count: games.filter(g => g.type === 'strategy').length },
    { id: 'adventure', name: 'Adventure', count: games.filter(g => g.type === 'adventure').length },
    { id: 'racing', name: 'Racing', count: games.filter(g => g.type === 'racing').length },
  ];

  const filteredGames = selectedCategory === 'all' 
    ? games 
    : games.filter(game => game.type === selectedCategory);

  const gameStats = [
    { label: "Total Games", value: "15+", icon: Gamepad2, color: "purple" },
    { label: "Downloads", value: "50k+", icon: Download, color: "cyan" },
    { label: "Avg Rating", value: "4.8★", icon: Star, color: "yellow" },
    { label: "Active Players", value: "12k+", icon: Users, color: "green" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 px-8 py-3 mb-8 backdrop-blur-sm" style={{ borderRadius: '12px' }}>
            <Trophy className="w-6 h-6 mr-3 text-purple-400 animate-pulse" />
            <span className="text-lg font-bold text-purple-300 tracking-wide font-mono">GAME PORTFOLIO</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight font-mono mb-6">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">GAMES</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Premium gaming experiences built with Unity and cutting-edge technology. 
            Immersive worlds, innovative gameplay, and unforgettable adventures.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {gameStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 text-center hover:border-${stat.color}-400/50 transition-all duration-300 group hover:scale-105`} style={{ borderRadius: '16px' }}>
                <IconComponent className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-3xl font-black text-white font-mono mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 font-bold text-sm transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
              }`}
              style={{ borderRadius: '10px' }}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Interactive Games Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
          {filteredGames.map((game, index) => (
            <article 
              key={game.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-purple-400/50 transition-all duration-500 overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ borderRadius: '20px' }}
              onMouseEnter={() => setHoveredGame(game.id)}
              onMouseLeave={() => setHoveredGame(null)}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Status & Quick Actions */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 text-xs font-bold ${
                    game.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`} style={{ borderRadius: '6px' }}>
                    {game.status}
                  </span>
                  <span className="bg-purple-500/20 backdrop-blur-sm text-purple-300 px-3 py-1 text-xs font-bold" style={{ borderRadius: '6px' }}>
                    {game.genre}
                  </span>
                </div>
                
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 text-xs flex items-center space-x-1" style={{ borderRadius: '6px' }}>
                    <Download className="w-3 h-3" />
                    <span>{game.downloads}</span>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 text-xs flex items-center space-x-1" style={{ borderRadius: '6px' }}>
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{game.rating}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                {hoveredGame === game.id && (
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-center justify-center">
                    <div className="flex gap-3">
                      <button className="bg-white/20 backdrop-blur-sm text-white p-3 hover:bg-white/30 transition-all" style={{ borderRadius: '12px' }}>
                        <Play className="w-6 h-6" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-3 hover:bg-white/30 transition-all" style={{ borderRadius: '12px' }}>
                        <Eye className="w-6 h-6" />
                      </button>
                      <button className="bg-white/20 backdrop-blur-sm text-white p-3 hover:bg-white/30 transition-all" style={{ borderRadius: '12px' }}>
                        <Heart className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Game Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-purple-400 text-sm font-bold font-mono mb-1">
                        {game.category}
                      </div>
                      <h3 className="text-white font-black text-xl font-mono leading-tight mb-2">
                        {game.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg mb-1">{game.price}</div>
                      <div className="text-slate-400 text-sm flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {game.players}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <p className="text-slate-400 leading-relaxed mb-4">
                  {game.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-slate-700/50 text-purple-400 px-3 py-1 text-xs font-medium hover:bg-slate-600/50 transition-colors" 
                      style={{ borderRadius: '6px' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold flex items-center justify-center space-x-2 hover:scale-105" style={{ borderRadius: '10px' }}>
                    <Play className="w-4 h-4" />
                    <span>PLAY NOW</span>
                  </button>
                  <button className="bg-slate-700/50 text-white px-4 py-3 hover:bg-slate-600/50 transition-all duration-300 flex items-center justify-center" style={{ borderRadius: '10px' }}>
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white px-10 py-5 font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 space-x-3 hover:scale-105"
            style={{ borderRadius: '16px' }}
          >
            <Gamepad2 className="w-6 h-6" />
            <span>EXPLORE ALL GAMES</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGamesShowcase;
