
import React from 'react';
import { ArrowRight, Download, Star, Gamepad2, Users, Calendar, Trophy } from 'lucide-react';

const GamesPortfolio = () => {
  const games = [
    {
      id: 'survival-nexus',
      title: 'Survival Nexus',
      genre: 'Open-World Survival',
      description: 'Immersive survival experience in a post-apocalyptic world with crafting, base building, and multiplayer combat.',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop',
      status: 'Released',
      downloads: '25k+',
      rating: 4.8,
      releaseDate: '2024',
      platforms: ['Steam', 'Itch.io'],
      features: ['Multiplayer', 'Crafting', 'Base Building', 'PvP Combat']
    },
    {
      id: 'shadow-realm',
      title: 'Shadow Realm',
      genre: 'Psychological Horror',
      description: 'Dark atmospheric horror game with psychological elements, puzzle solving, and narrative-driven gameplay.',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop',
      status: 'Released',
      downloads: '18k+',
      rating: 4.9,
      releaseDate: '2024',
      platforms: ['Steam', 'Epic Games'],
      features: ['Single Player', 'Puzzles', 'Atmospheric', 'Story-Driven']
    },
    {
      id: 'command-central',
      title: 'Command Central',
      genre: 'Real-Time Strategy',
      description: 'Strategic warfare game with resource management, unit control, and tactical combat systems.',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=500&fit=crop',
      status: 'Early Access',
      downloads: '12k+',
      rating: 4.7,
      releaseDate: '2024',
      platforms: ['Steam'],
      features: ['RTS Combat', 'Resource Management', 'Campaigns', 'Multiplayer']
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-slate-900 to-black relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-8 py-4 rounded-2xl mb-8">
            <Gamepad2 className="w-6 h-6 text-purple-400 mr-3" />
            <span className="text-white font-bold text-lg tracking-wide">GAME PORTFOLIO</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            OUR <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">GAMES</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Immersive gaming experiences developed by our team. From survival adventures to strategic warfare.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {games.map((game, index) => (
            <div key={game.id} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-purple-400/50 transition-all duration-500 group">
              {/* Game Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                    game.status === 'Released' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {game.status}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white font-bold text-sm">{game.rating}</span>
                </div>

                {/* Genre */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-500/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-bold text-sm">
                    {game.genre}
                  </span>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-8">
                <h3 className="text-2xl font-black text-white mb-2">{game.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{game.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300 text-sm">{game.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    <span className="text-slate-300 text-sm">{game.releaseDate}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {game.features.slice(0, 4).map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-lg text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Platforms */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-slate-400 text-xs mb-1">Available on:</div>
                    <div className="flex space-x-2">
                      {game.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="bg-slate-600 text-white px-2 py-1 rounded text-xs font-bold">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-2">
                    <Gamepad2 className="w-4 h-4" />
                    <span>Play Now</span>
                  </button>
                  <button className="border-2 border-slate-600 text-white px-4 py-3 rounded-xl hover:bg-slate-800 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Game Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Trophy, label: 'Games Released', value: '3+', color: 'text-yellow-400' },
            { icon: Download, label: 'Total Downloads', value: '55k+', color: 'text-green-400' },
            { icon: Users, label: 'Active Players', value: '12k+', color: 'text-blue-400' },
            { icon: Star, label: 'Average Rating', value: '4.8', color: 'text-purple-400' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-slate-600 transition-all">
                  <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                  <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-12 max-w-4xl mx-auto">
            <Gamepad2 className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-4xl font-black text-white mb-4">
              PLAY OUR GAMES
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Experience our latest games across multiple platforms. Download now and join thousands of players worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center justify-center space-x-2">
                <Gamepad2 className="w-5 h-5" />
                <span>Browse All Games</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all">
                View Game Dev Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesPortfolio;
