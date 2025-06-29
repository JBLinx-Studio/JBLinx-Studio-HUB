
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
      players: "N/A",
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
      players: "N/A",
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
      players: "N/A",
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
    <section className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* GAMERS FIRST - Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-8 py-3 mb-6">
            <Trophy className="w-5 h-5 mr-3 text-purple-400" />
            <span className="text-lg font-black text-purple-300 tracking-wide font-mono">FOR GAMERS & DEVELOPERS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            <span className="text-purple-400">PREMIUM GAMES</span> + <span className="text-blue-400">DEV RESOURCES</span>
          </h2>
          
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience our premium games, learn from comprehensive development guides, watch exclusive tutorials, and follow behind-the-scenes development logs
          </p>

          {/* Category Filter - Square Design */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-black transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Enhanced Stats - Square Panels */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-slate-800/70 border-2 border-slate-700 p-6 text-center">
              <Gamepad2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-black text-white font-mono">15+</div>
              <div className="text-slate-400 text-sm font-bold">Premium Games</div>
            </div>
            <div className="bg-slate-800/70 border-2 border-slate-700 p-6 text-center">
              <BookOpen className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-black text-white font-mono">12+</div>
              <div className="text-slate-400 text-sm font-bold">eBooks & Guides</div>
            </div>
            <div className="bg-slate-800/70 border-2 border-slate-700 p-6 text-center">
              <Play className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-black text-white font-mono">30+</div>
              <div className="text-slate-400 text-sm font-bold">Video Tutorials</div>
            </div>
            <div className="bg-slate-800/70 border-2 border-slate-700 p-6 text-center">
              <FileText className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-black text-white font-mono">50+</div>
              <div className="text-slate-400 text-sm font-bold">Dev Articles</div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Grid - Square Panels */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <article 
                key={index}
                className="bg-slate-800/90 border-2 border-slate-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group backdrop-blur-sm"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  
                  {/* Type Badge - Square */}
                  <div className="absolute top-4 left-4">
                    <div className={`${getTypeColor(item.type)} text-white px-3 py-2 text-xs font-black flex items-center space-x-2`}>
                      <IconComponent className="w-4 h-4" />
                      <span>{item.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  {/* Stats - Square */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="bg-slate-900/90 text-white px-3 py-2 text-xs font-bold backdrop-blur-sm flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="bg-slate-900/90 text-white px-3 py-2 text-xs font-bold backdrop-blur-sm flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-purple-400 text-sm font-bold font-mono mb-2">
                          {item.category}
                        </div>
                        <h3 className="text-white font-black text-lg font-mono leading-tight">
                          {item.title}
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-black text-lg">{item.price}</div>
                        {item.players && item.players !== "N/A" && (
                          <div className="text-slate-400 text-sm flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {item.players}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  {/* Tags - Square */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-slate-700 text-purple-400 px-3 py-1 text-xs font-bold" 
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Actions - Square */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 font-black transition-all duration-300 flex items-center justify-center space-x-2">
                      <IconComponent className="w-5 h-5" />
                      <span>{item.type === 'game' ? 'PLAY NOW' : item.type === 'ebook' ? 'READ NOW' : item.type === 'tutorial' ? 'WATCH NOW' : 'VIEW NOW'}</span>
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 transition-all duration-300 flex items-center justify-center">
                      <Github className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action - Square */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-4 font-black text-lg transition-all duration-300 space-x-3 shadow-lg shadow-purple-500/25"
          >
            <Zap className="w-6 h-6" />
            <span>EXPLORE ALL GAMES & RESOURCES</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
