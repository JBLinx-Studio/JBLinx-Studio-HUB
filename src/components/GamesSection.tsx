
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Star, Gamepad2, Zap, Users, Calendar, Play, Github, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamesSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const games = [
    {
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
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
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
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
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
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
    <section className="relative py-20 overflow-hidden">
      {/* Enhanced Background with Parallax */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop')`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border border-purple-500/20 animate-pulse"
            style={{
              left: `${20 + (i * 15) % 60}%`,
              top: `${10 + (i * 20) % 80}%`,
              borderRadius: i % 2 === 0 ? '50%' : '12px',
              animationDelay: `${i * 1.2}s`,
              transform: `rotate(${i * 45}deg) translateY(${scrollY * (0.1 + i * 0.02)}px)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 px-6 py-3 mb-6 shadow-lg" style={{ borderRadius: '8px' }}>
            <Trophy className="w-5 h-5 mr-3 text-purple-400 animate-bounce" />
            <span className="text-sm font-bold text-purple-300 tracking-wide font-mono">GAME PORTFOLIO</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono mb-4">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">GAMES</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Premium gaming experiences built with Unity and cutting-edge technology
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {gameStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 text-center shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105" style={{ borderRadius: '12px' }}>
                  <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl font-black text-white font-mono">{stat.value}</div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Games Grid - Enhanced Visual Design */}
        <div className="space-y-8 mb-12">
          {games.map((game, index) => (
            <article 
              key={index}
              className="group relative overflow-hidden bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-purple-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl"
              style={{ borderRadius: '16px' }}
            >
              {/* Background Image with Parallax */}
              <div className="absolute inset-0">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ transform: `scale(1.1) translateY(${scrollY * 0.05}px)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
              </div>

              <div className="relative z-10 p-8 lg:p-12">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  {/* Game Image */}
                  <div className="lg:col-span-4">
                    <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: '12px' }}>
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-64 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-sm font-bold backdrop-blur-sm ${
                          game.status === 'Live' 
                            ? 'bg-green-500/90 text-white' 
                            : 'bg-yellow-500/90 text-black'
                        }`} style={{ borderRadius: '6px' }}>
                          {game.status}
                        </span>
                      </div>

                      {/* Quick Stats */}
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 text-sm flex items-center space-x-1" style={{ borderRadius: '6px' }}>
                          <Download className="w-4 h-4" />
                          <span>{game.downloads}</span>
                        </div>
                        <div className="bg-slate-900/80 backdrop-blur-sm text-white px-3 py-1 text-sm flex items-center space-x-1" style={{ borderRadius: '6px' }}>
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span>{game.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-purple-400 text-sm font-bold font-mono mb-2">
                          {game.category}
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:text-purple-300 transition-colors font-mono leading-tight">
                          {game.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-black text-green-400 mb-1">{game.price}</div>
                        <div className="text-slate-400 text-sm flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {game.players} Players
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                      {game.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {game.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-purple-500/20 border border-purple-400/30 text-purple-300 px-4 py-2 text-sm font-medium backdrop-blur-sm" 
                          style={{ borderRadius: '8px' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-4 pt-4">
                      <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 hover:from-purple-600 hover:to-pink-700 transition-all duration-300 font-bold flex items-center space-x-3 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105" style={{ borderRadius: '8px' }}>
                        <Play className="w-5 h-5" />
                        <span>PLAY NOW</span>
                      </button>
                      <button className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 text-white px-6 py-3 hover:bg-slate-600/50 hover:border-slate-500 transition-all duration-300 flex items-center justify-center transform hover:scale-105" style={{ borderRadius: '8px' }}>
                        <Github className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-10 py-4 font-bold text-lg hover:from-purple-600 hover:via-pink-600 hover:to-red-600 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 space-x-3 transform hover:scale-105"
            style={{ borderRadius: '12px' }}
          >
            <Gamepad2 className="w-6 h-6" />
            <span>VIEW ALL GAMES</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
