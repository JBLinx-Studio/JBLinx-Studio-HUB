
import React from 'react';
import { ArrowRight, Download, Star, Gamepad2, Users, Play, Github, Trophy, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamesSection = () => {
  const games = [
    {
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Live",
      description: "Immersive horror experience with advanced survival mechanics and AI-driven scares",
      tags: ["Unity", "Multiplayer", "VR Ready"],
      price: "$19.99",
      players: "1-4"
    },
    {
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Live",
      description: "Command armies in epic real-time strategic battles with 32-player multiplayer",
      tags: ["Multiplayer", "Campaign", "AI"],
      price: "$24.99",
      players: "1-32"
    },
    {
      title: "Adventure Quest RPG",
      category: "Action/Adventure",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      description: "Epic quest through mystical realms with complex storylines and crafting",
      tags: ["Open World", "Crafting", "Magic"],
      price: "Free Beta",
      players: "1"
    }
  ];

  const gameStats = [
    { label: "Games", value: "15+", icon: Gamepad2 },
    { label: "Downloads", value: "50k+", icon: Download },
    { label: "Rating", value: "4.8★", icon: Star },
    { label: "Players", value: "12k+", icon: Users }
  ];

  return (
    <section className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-4" style={{ borderRadius: '8px' }}>
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm font-bold text-purple-300 tracking-wide font-mono">GAME PORTFOLIO</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            OUR <span className="text-purple-400">GAMES</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-4"></div>
          
          <p className="text-slate-300 max-w-xl mx-auto mb-6">
            Premium gaming experiences built with Unity and cutting-edge technology
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            {gameStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
                  <IconComponent className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-lg font-black text-white font-mono">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Games List with Dividers */}
        <div className="space-y-6 mb-8">
          {games.map((game, index) => (
            <div key={index} className="group">
              {/* Game Item */}
              <div className="flex flex-col lg:flex-row gap-6 items-start hover:bg-slate-800/30 p-6 transition-all duration-300" style={{ borderRadius: '12px' }}>
                {/* Image Section */}
                <div className="relative w-full lg:w-80 h-48 flex-shrink-0 overflow-hidden" style={{ borderRadius: '8px' }}>
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 text-xs font-bold ${
                      game.status === 'Live' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }`} style={{ borderRadius: '6px' }}>
                      {game.status}
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-slate-900/90 text-green-400 px-3 py-1 text-sm font-bold backdrop-blur-sm" style={{ borderRadius: '6px' }}>
                      {game.price}
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-purple-500 text-white p-4 hover:bg-purple-600 transition-colors" style={{ borderRadius: '50%' }}>
                      <Play className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-purple-400 text-sm font-bold font-mono">
                        {game.category}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>{game.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-yellow-400">{game.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{game.players}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors font-mono">
                      {game.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed mb-4">
                      {game.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-slate-700 text-purple-400 px-3 py-1 text-sm font-medium border border-purple-400/20" 
                        style={{ borderRadius: '6px' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3">
                    <button className="bg-purple-500 text-white px-6 py-3 hover:bg-purple-600 transition-all duration-300 font-bold flex items-center space-x-2" style={{ borderRadius: '8px' }}>
                      <Play className="w-5 h-5" />
                      <span>PLAY NOW</span>
                    </button>
                    <button className="bg-slate-700 text-white px-4 py-3 hover:bg-slate-600 transition-all duration-300 flex items-center" style={{ borderRadius: '8px' }}>
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Elegant Divider */}
              {index < games.length - 1 && (
                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-700"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <div className="bg-slate-950 px-4">
                      <Zap className="w-6 h-6 text-purple-400/50" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 space-x-2"
            style={{ borderRadius: '8px' }}
          >
            <Gamepad2 className="w-5 h-5" />
            <span>VIEW ALL GAMES</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
