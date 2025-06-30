
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Gamepad2, Users, Calendar, Play, Github, Trophy, BookOpen, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const gameCategories = ['All', 'Released', 'Beta', 'Dev Logs', 'Tutorials'];

  const games = [
    {
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Released",
      description: "Immersive horror experience with advanced survival mechanics and AI-driven scares",
      tags: ["Unity", "Multiplayer", "VR Ready"],
      price: "$19.99",
      players: "1-4",
      type: "game"
    },
    {
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy", 
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Released",
      description: "Command armies in epic real-time strategic battles with 32-player multiplayer",
      tags: ["Multiplayer", "Campaign", "AI"],
      price: "$24.99",
      players: "1-32",
      type: "game"
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
      players: "1",
      type: "game"
    }
  ];

  const devContent = [
    {
      title: "Game Development Mastery Guide",
      category: "Complete eBook Series",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      downloads: "8.5k",
      rating: "4.9",
      status: "Available",
      description: "Comprehensive guide covering Unity, game mechanics, AI, and multiplayer systems",
      tags: ["Unity", "C#", "Game Design"],
      price: "$29.99",
      type: "ebook"
    },
    {
      title: "Horror Game Dev Tutorial Series",
      category: "Video Course",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      downloads: "6.2k",
      rating: "5.0",
      status: "Available",
      description: "Step-by-step video tutorials for creating atmospheric horror games",
      tags: ["Unity", "Horror", "Atmosphere"],
      price: "$49.99",
      type: "tutorial"
    },
    {
      title: "RTS Game Development Blog",
      category: "Dev Log Series",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      downloads: "12.1k",
      rating: "4.8",
      status: "Updated Weekly",
      description: "Behind-the-scenes development process, challenges, and solutions",
      tags: ["Development", "Process", "Insights"],
      price: "Free",
      type: "devlog"
    }
  ];

  const allContent = [...games, ...devContent];
  
  const filteredContent = activeCategory === 'All' 
    ? allContent
    : activeCategory === 'Released'
    ? games.filter(game => game.status === 'Released')
    : activeCategory === 'Beta'
    ? games.filter(game => game.status === 'Beta')
    : activeCategory === 'Dev Logs'
    ? devContent.filter(item => item.type === 'devlog')
    : activeCategory === 'Tutorials'
    ? devContent.filter(item => item.type === 'tutorial' || item.type === 'ebook')
    : allContent;

  const getIcon = (type: string) => {
    switch(type) {
      case 'ebook': return BookOpen;
      case 'tutorial': return Play;
      case 'devlog': return FileText;
      default: return Gamepad2;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'ebook': return 'bg-blue-500';
      case 'tutorial': return 'bg-green-500';
      case 'devlog': return 'bg-orange-500';
      default: return 'bg-purple-500';
    }
  };

  return (
    <section className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-4" style={{ borderRadius: '8px' }}>
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm font-bold text-purple-300 tracking-wide font-mono">GAMES & LEARNING</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            <span className="text-purple-400">GAMES</span> + <span className="text-blue-400">EDUCATION</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-4"></div>
          
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Premium games, comprehensive development guides, video tutorials, and behind-the-scenes content
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-500 text-white' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
                style={{ borderRadius: '6px' }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
              <Gamepad2 className="w-5 h-5 text-purple-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white font-mono">15+</div>
              <div className="text-slate-400 text-xs">Games</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
              <BookOpen className="w-5 h-5 text-blue-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white font-mono">8+</div>
              <div className="text-slate-400 text-xs">eBooks</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
              <Play className="w-5 h-5 text-green-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white font-mono">25+</div>
              <div className="text-slate-400 text-xs">Tutorials</div>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 p-3 text-center" style={{ borderRadius: '6px' }}>
              <FileText className="w-5 h-5 text-orange-400 mx-auto mb-1" />
              <div className="text-lg font-black text-white font-mono">50+</div>
              <div className="text-slate-400 text-xs">Articles</div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {filteredContent.map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <article 
                key={index}
                className="bg-slate-800 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group"
                style={{ borderRadius: '8px' }}
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <div className={`${getTypeColor(item.type)} text-white px-2 py-1 text-xs font-bold flex items-center space-x-1`} style={{ borderRadius: '4px' }}>
                      <IconComponent className="w-3 h-3" />
                      <span>{item.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  {/* Status & Stats */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <Download className="w-3 h-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-purple-400 text-xs font-bold font-mono mb-1">
                          {item.category}
                        </div>
                        <h3 className="text-white font-black text-sm font-mono leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-sm">{item.price}</div>
                        {item.players && (
                          <div className="text-slate-400 text-xs flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {item.players}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <p className="text-slate-400 text-sm leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, tagIndex) => (
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
                      <IconComponent className="w-4 h-4" />
                      <span>{item.type === 'game' ? 'PLAY' : item.type === 'ebook' ? 'READ' : item.type === 'tutorial' ? 'WATCH' : 'VIEW'}</span>
                    </button>
                    <button className="bg-slate-700 text-white px-3 py-2 hover:bg-slate-600 transition-all duration-300 flex items-center justify-center" style={{ borderRadius: '6px' }}>
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 font-bold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 space-x-2"
            style={{ borderRadius: '8px' }}
          >
            <Zap className="w-5 h-5" />
            <span>EXPLORE EVERYTHING</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
