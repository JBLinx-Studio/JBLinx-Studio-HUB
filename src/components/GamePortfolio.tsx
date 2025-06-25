
import React, { useState } from 'react';
import { Gamepad2, Play, Download, Star, Users, Calendar, Trophy, Sword, Ghost, Zap } from 'lucide-react';

const GamePortfolio = () => {
  const [activeGame, setActiveGame] = useState(0);

  const games = [
    {
      id: 'survival-world',
      title: 'Survival World',
      genre: 'Survival',
      status: 'Released',
      description: 'Open-world survival game with crafting, building, and exploration. Survive in harsh environments while managing resources and building your base.',
      image: 'https://images.unsplash.com/photo-1538481199464-7160b7913d92?w=800&h=450&fit=crop',
      screenshots: [
        'https://images.unsplash.com/photo-1538481199464-7160b7913d92?w=400&h=225&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop'
      ],
      features: ['Open World', 'Crafting System', 'Base Building', 'Multiplayer'],
      platforms: ['PC', 'Mac', 'Linux'],
      rating: 4.6,
      downloads: '15.2k',
      releaseDate: '2024',
      icon: Sword,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'horror-depths',
      title: 'Horror Depths',
      genre: 'Horror',
      status: 'Released',
      description: 'Psychological horror experience with atmospheric storytelling. Navigate through dark corridors and solve puzzles while avoiding terrifying creatures.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop',
      screenshots: [
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=225&fit=crop',
        'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=225&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop'
      ],
      features: ['Atmospheric Horror', 'Puzzle Solving', 'Story Driven', 'Multiple Endings'],
      platforms: ['PC', 'Mac'],
      rating: 4.8,
      downloads: '8.7k',
      releaseDate: '2024',
      icon: Ghost,
      color: 'from-purple-500 to-red-600'
    },
    {
      id: 'strategy-command',
      title: 'Strategy Command',
      genre: 'RTS',
      status: 'Beta',
      description: 'Real-time strategy game with base building, resource management, and tactical combat. Command your forces in epic battles.',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=450&fit=crop',
      screenshots: [
        'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=225&fit=crop',
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=225&fit=crop',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop'
      ],
      features: ['Real-time Combat', 'Base Building', 'Resource Management', 'Campaign Mode'],
      platforms: ['PC', 'Mac', 'Linux'],
      rating: 4.5,
      downloads: '3.1k',
      releaseDate: '2024',
      icon: Trophy,
      color: 'from-blue-500 to-cyan-600'
    }
  ];

  const currentGame = games[activeGame];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-green-500/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-3 mb-6" style={{ borderRadius: '8px' }}>
            <Gamepad2 className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-sm font-bold text-purple-300 tracking-wide font-mono">GAME DEVELOPMENT</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            OUR <span className="text-purple-400">GAMES</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-purple-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Immersive gaming experiences developed in-house. From survival adventures 
            to horror experiences and strategic warfare.
          </p>
        </div>

        {/* Game Showcase */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-slate-800 border border-slate-700 overflow-hidden" style={{ borderRadius: '16px' }}>
            <div className="grid lg:grid-cols-5">
              {/* Main Image */}
              <div className="lg:col-span-3 relative h-80 lg:h-96">
                <img 
                  src={currentGame.image} 
                  alt={currentGame.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-2 text-sm font-bold ${
                    currentGame.status === 'Released' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`} style={{ borderRadius: '8px' }}>
                    {currentGame.status}
                  </span>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center group" style={{ borderRadius: '50%' }}>
                    <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-bold">{currentGame.rating}</span>
                  <span className="text-sm text-slate-300">({currentGame.downloads} downloads)</span>
                </div>
              </div>

              {/* Game Info */}
              <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${currentGame.color} flex items-center justify-center`} style={{ borderRadius: '8px' }}>
                        <currentGame.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm font-bold text-purple-400 uppercase tracking-wide">
                        {currentGame.genre}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 font-mono">
                      {currentGame.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {currentGame.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-white font-bold mb-3 font-mono">KEY FEATURES</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {currentGame.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Zap className="w-3 h-3 text-purple-400" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Platforms */}
                  <div>
                    <h4 className="text-white font-bold mb-3 font-mono">PLATFORMS</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentGame.platforms.map((platform, index) => (
                        <span 
                          key={index} 
                          className="bg-slate-700 text-slate-300 px-3 py-1 text-sm font-medium" 
                          style={{ borderRadius: '6px' }}
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{currentGame.releaseDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{currentGame.downloads}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 mt-6">
                  <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 font-bold transition-all duration-300 flex items-center justify-center space-x-2" style={{ borderRadius: '8px' }}>
                    <Play className="w-4 h-4" />
                    <span>Play Now</span>
                  </button>
                  <button className="px-4 py-3 border border-slate-600 hover:border-purple-400 text-slate-300 hover:text-white transition-all duration-300" style={{ borderRadius: '8px' }}>
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Game Selection */}
        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game, index) => {
            const IconComponent = game.icon;
            return (
              <button
                key={game.id}
                onClick={() => setActiveGame(index)}
                className={`text-left bg-slate-800 border transition-all duration-300 p-6 ${
                  activeGame === index 
                    ? 'border-purple-400 shadow-lg shadow-purple-500/25' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
                style={{ borderRadius: '12px' }}
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-16 h-16 object-cover"
                    style={{ borderRadius: '8px' }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <IconComponent className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-bold text-purple-400 uppercase">
                        {game.genre}
                      </span>
                    </div>
                    <h4 className="text-white font-bold font-mono mb-1">
                      {game.title}
                    </h4>
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
                      <span>{game.status}</span>
                      <span>•</span>
                      <span>{game.downloads} downloads</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GamePortfolio;
