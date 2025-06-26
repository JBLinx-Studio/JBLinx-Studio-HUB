
import React from 'react';
import { ArrowRight, Download, Star, Gamepad2, Zap, Users, Calendar, Play, Github, Trophy } from 'lucide-react';
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

        {/* Games Grid - More Compact */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {games.map((game, index) => (
            <article 
              key={index}
              className="bg-slate-800 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group"
              style={{ borderRadius: '8px' }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Status & Stats Overlay */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-bold ${
                    game.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`} style={{ borderRadius: '4px' }}>
                    {game.status}
                  </span>
                </div>
                
                <div className="absolute top-3 right-3 flex gap-1">
                  <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                    <Download className="w-3 h-3" />
                    <span>{game.downloads}</span>
                  </div>
                  <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{game.rating}</span>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-purple-400 text-xs font-bold font-mono mb-1">
                        {game.category}
                      </div>
                      <h3 className="text-white font-black text-sm font-mono leading-tight">
                        {game.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-sm">{game.price}</div>
                      <div className="text-slate-400 text-xs flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {game.players}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Compact Content */}
              <div className="p-4">
                <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-2">
                  {game.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {game.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-slate-700 text-purple-400 px-2 py-1 text-xs font-medium" 
                      style={{ borderRadius: '4px' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-purple-500 text-white px-3 py-2 hover:bg-purple-600 transition-all duration-300 font-bold flex items-center justify-center space-x-2 text-sm" style={{ borderRadius: '6px' }}>
                    <Play className="w-4 h-4" />
                    <span>PLAY</span>
                  </button>
                  <button className="bg-slate-700 text-white px-3 py-2 hover:bg-slate-600 transition-all duration-300 flex items-center justify-center" style={{ borderRadius: '6px' }}>
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
