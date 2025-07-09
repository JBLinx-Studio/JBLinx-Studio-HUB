
import React from 'react';
import { ArrowRight, Download, Star, Gamepad2, Code, Users, Trophy, Zap, Play, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GameDevelopment = () => {
  const games = [
    {
      title: "Survival Horror Chronicles",
      description: "Immersive psychological horror experience with advanced AI and atmospheric storytelling",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Live",
      tech: ["Unity", "C#", "AI"],
      features: ["Advanced AI", "VR Ready", "Multiplayer"],
      github: "https://github.com/JBLinx-Studio/survival-horror"
    },
    {
      title: "Strategic Conquest RTS",
      description: "Real-time strategy game with complex AI opponents and massive multiplayer battles",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Live", 
      tech: ["Unity", "Networking", "AI"],
      features: ["32 Player Battles", "Campaign Mode", "Mod Support"],
      github: "https://github.com/JBLinx-Studio/conquest-rts"
    },
    {
      title: "Adventure Quest RPG",
      description: "Open-world RPG with branching storylines and complex character progression",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      tech: ["Unity", "RPG Systems", "Procedural"],
      features: ["Open World", "Character Customization", "Crafting"],
      github: "https://github.com/JBLinx-Studio/adventure-rpg"
    }
  ];

  const gameStats = [
    { label: "Games Published", value: "15+", icon: Gamepad2 },
    { label: "Total Downloads", value: "50k+", icon: Download },
    { label: "Average Rating", value: "4.8★", icon: Star },
    { label: "Active Players", value: "12k+", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-3 mb-6" style={{ borderRadius: '8px' }}>
              <Gamepad2 className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-white/90 font-bold font-mono">GAME DEVELOPMENT STUDIO</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight font-mono mb-6">
              <span className="text-purple-400">PREMIUM</span> GAMES
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
              We develop and publish our own premium games across multiple genres. 
              From horror experiences to strategic battles, each game is crafted with attention to detail.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {gameStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800 border border-slate-700 p-6 text-center" style={{ borderRadius: '8px' }}>
                    <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-2xl font-black text-white font-mono mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Games Portfolio */}
      <section className="py-16 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-white mb-4 font-mono">
              OUR <span className="text-purple-400">PORTFOLIO</span>
            </h2>
            <div className="w-24 h-0.5 bg-purple-400 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group" style={{ borderRadius: '8px' }}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-bold ${
                      game.status === 'Live' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                    }`} style={{ borderRadius: '6px' }}>
                      {game.status}
                    </span>
                  </div>
                  
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
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-purple-300 transition-colors font-mono">
                    {game.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {game.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="text-slate-300 text-xs font-bold mb-2">TECH STACK</div>
                    <div className="flex flex-wrap gap-1">
                      {game.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-700 text-purple-400 px-2 py-1 text-xs font-medium" style={{ borderRadius: '4px' }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-slate-300 text-xs font-bold mb-2">KEY FEATURES</div>
                    <div className="space-y-1">
                      {game.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-slate-400">
                          <Zap className="w-3 h-3 text-purple-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-500 text-white px-4 py-3 hover:bg-purple-600 transition-all duration-300 font-bold flex items-center justify-center space-x-2" style={{ borderRadius: '6px' }}>
                      <Play className="w-4 h-4" />
                      <span>PLAY</span>
                    </button>
                    <a 
                      href={game.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-700 text-white px-4 py-3 hover:bg-slate-600 transition-all duration-300 flex items-center justify-center"
                      style={{ borderRadius: '6px' }}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevelopment;
