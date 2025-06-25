
import React from 'react';
import { ArrowRight, Download, Star, Gamepad2, Zap, Users, Calendar } from 'lucide-react';
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
      description: "Immersive horror experience with advanced survival mechanics",
      tags: ["Unity", "Multiplayer", "VR Ready"]
    },
    {
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Live",
      description: "Command armies in epic real-time strategic battles",
      tags: ["Multiplayer", "Campaign", "AI"]
    },
    {
      title: "Adventure Quest RPG",
      category: "Action/Adventure",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      description: "Epic quest through mystical realms with complex storylines",
      tags: ["Open World", "Crafting", "Magic"]
    }
  ];

  return (
    <section className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-6" style={{ borderRadius: '8px' }}>
            <Gamepad2 className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm font-bold text-purple-300 tracking-wide font-mono">GAME PORTFOLIO</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            OUR <span className="text-purple-400">GAMES</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-purple-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Immersive gaming experiences built with Unity and cutting-edge technology
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <article 
              key={index}
              className="bg-slate-800 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group"
              style={{ borderRadius: '8px' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-bold ${
                    game.status === 'Live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`} style={{ borderRadius: '6px' }}>
                    {game.status}
                  </span>
                </div>
                
                {/* Stats */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                    <Download className="w-3 h-3" />
                    <span>{game.downloads}</span>
                  </div>
                  <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{game.rating}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-purple-400 text-sm font-bold mb-2 font-mono">
                    {game.category}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors font-mono">
                    {game.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {game.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-slate-700 text-purple-400 px-2 py-1 text-xs font-medium" 
                      style={{ borderRadius: '4px' }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Action */}
                <button className="w-full bg-purple-500 text-white px-4 py-3 hover:bg-purple-600 transition-all duration-300 font-bold flex items-center justify-center space-x-2" style={{ borderRadius: '6px' }}>
                  <Gamepad2 className="w-4 h-4" />
                  <span>PLAY NOW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 space-x-3"
            style={{ borderRadius: '8px' }}
          >
            <span>VIEW ALL GAMES</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
