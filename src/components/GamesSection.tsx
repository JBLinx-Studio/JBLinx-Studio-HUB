
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Gamepad2, Users, Calendar, Play, Github, Trophy, BookOpen, FileText, Zap, Shield, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const gameCategories = ['All', 'Games', 'Beta', 'Dev Content', 'Tutorials'];

  const games = [
    {
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Released",
      description: "Immersive horror with advanced AI-driven scares and survival mechanics",
      tags: ["Unity", "Multiplayer", "VR"],
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
      description: "Command armies in epic 32-player multiplayer strategic battles",
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
      description: "Epic quest through mystical realms with complex storylines",
      tags: ["Open World", "Crafting", "Magic"],
      price: "Free Beta",
      players: "1",
      type: "game"
    }
  ];

  const devContent = [
    {
      title: "Game Development Mastery",
      category: "Complete Guide",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      downloads: "8.5k",
      rating: "4.9",
      status: "Available",
      description: "Comprehensive Unity guide covering mechanics, AI, and multiplayer",
      tags: ["Unity", "C#", "Design"],
      price: "$29.99",
      players: "N/A",
      type: "ebook"
    },
    {
      title: "Horror Game Dev Series",
      category: "Video Course",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      downloads: "6.2k",
      rating: "5.0",
      status: "Available",
      description: "Step-by-step tutorials for atmospheric horror games",
      tags: ["Unity", "Horror", "Atmosphere"],
      price: "$49.99",
      players: "N/A",
      type: "tutorial"
    },
    {
      title: "RTS Development Blog",
      category: "Dev Log Series",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      downloads: "12.1k",
      rating: "4.8",
      status: "Weekly Updates",
      description: "Behind-the-scenes development process and solutions",
      tags: ["Development", "Process", "Insights"],
      price: "Free",
      players: "N/A",
      type: "devlog"
    }
  ];

  const allContent = [...games, ...devContent];
  
  const filteredContent = activeCategory === 'All' 
    ? allContent
    : activeCategory === 'Games'
    ? games.filter(game => game.status === 'Released')
    : activeCategory === 'Beta'
    ? games.filter(game => game.status === 'Beta')
    : activeCategory === 'Dev Content'
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
    <section className="py-12 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/80 border border-purple-500/30 px-6 py-2 mb-4 backdrop-blur-sm">
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-wide">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            PREMIUM <span className="text-purple-400">GAMES</span> + <span className="text-blue-400">DEV CONTENT</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-4"></div>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-6">
            Experience premium games, comprehensive guides, exclusive tutorials, and dev logs
          </p>

          {/* Compact Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {gameCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-black transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-purple-500 text-white shadow-lg' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Compact Stats */}
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            {[
              { icon: Gamepad2, value: "15+", label: "Games", color: "text-purple-400" },
              { icon: BookOpen, value: "12+", label: "eBooks", color: "text-blue-400" },
              { icon: Play, value: "30+", label: "Tutorials", color: "text-green-400" },
              { icon: FileText, value: "50+", label: "Articles", color: "text-orange-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/60 border border-slate-700 p-3 text-center backdrop-blur-sm">
                  <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-1`} />
                  <div className={`text-lg font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {filteredContent.slice(0, 6).map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <article 
                key={index}
                className="bg-slate-800/80 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group backdrop-blur-sm"
              >
                {/* Compact Image Section */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 left-2">
                    <div className={`${getTypeColor(item.type)} text-white px-2 py-1 text-xs font-black flex items-center space-x-1`}>
                      <IconComponent className="w-3 h-3" />
                      <span>{item.type.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute top-2 right-2 flex gap-1">
                    <div className="bg-black/60 text-white px-2 py-1 text-xs font-bold backdrop-blur-sm flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="bg-black/60 text-white px-2 py-1 text-xs font-bold backdrop-blur-sm flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-2 left-2 right-2">
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
                        <div className="text-green-400 font-black text-sm">{item.price}</div>
                        {item.players && item.players !== "N/A" && (
                          <div className="text-slate-400 text-xs flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {item.players}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Compact Content */}
                <div className="p-4">
                  <p className="text-slate-400 text-sm mb-3">
                    {item.description}
                  </p>
                  
                  {/* Compact Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-slate-700 text-purple-400 px-2 py-1 text-xs font-bold" 
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Compact Actions */}
                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 font-black text-xs transition-all duration-300 flex items-center justify-center space-x-1">
                      <IconComponent className="w-3 h-3" />
                      <span>{item.type === 'game' ? 'PLAY' : item.type === 'ebook' ? 'READ' : item.type === 'tutorial' ? 'WATCH' : 'VIEW'}</span>
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 transition-all duration-300">
                      <Github className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Compact CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 font-black transition-all duration-300 space-x-2 shadow-lg"
          >
            <Zap className="w-4 h-4" />
            <span>EXPLORE ALL GAMES & RESOURCES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
