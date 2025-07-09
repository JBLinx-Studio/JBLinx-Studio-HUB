
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
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Released",
      description: "Immersive horror with advanced AI-driven scares and atmospheric design",
      tags: ["Unity", "Multiplayer", "VR", "Horror"],
      price: "$19.99",
      type: "game"
    },
    {
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy", 
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=300&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Released",
      description: "Command armies in epic 32-player battles with advanced AI and physics",
      tags: ["Multiplayer", "Campaign", "AI", "Strategy"],
      price: "$24.99",
      type: "game"
    },
    {
      title: "Adventure Quest RPG",
      category: "Action/Adventure",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      description: "Epic quest through mystical realms with deep character progression",
      tags: ["Open World", "Crafting", "Magic", "RPG"],
      price: "Free Beta",
      type: "game"
    }
  ];

  const devContent = [
    {
      title: "Game Development Mastery",
      category: "Complete Guide",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop",
      downloads: "8.5k",
      rating: "4.9",
      status: "Available",
      description: "Comprehensive Unity guide covering mechanics, AI, and optimization",
      tags: ["Unity", "C#", "Design", "AI"],
      price: "$29.99",
      type: "ebook"
    },
    {
      title: "Horror Game Dev Series",
      category: "Video Course",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop",
      downloads: "6.2k",
      rating: "5.0",
      status: "Available",
      description: "Step-by-step tutorials for creating atmospheric horror experiences",
      tags: ["Unity", "Horror", "Atmosphere", "Tutorial"],
      price: "$49.99",
      type: "tutorial"
    }
  ];

  const allContent = [...games, ...devContent];
  const filteredContent = activeCategory === 'All' ? allContent.slice(0, 6) : allContent.slice(0, 4);

  return (
    <section className="py-6 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header - Same style as Services */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PREMIUM <span className="text-purple-400">GAMES</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Professional games, comprehensive guides, exclusive tutorials, and development insights
          </p>

          {/* Stats - Same style as Services */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
            {[
              { icon: Gamepad2, value: "15+", label: "Games", color: "text-purple-400" },
              { icon: BookOpen, value: "15+", label: "Guides", color: "text-blue-400" },
              { icon: Play, value: "40+", label: "Tutorials", color: "text-green-400" },
              { icon: FileText, value: "60+", label: "Dev Logs", color: "text-orange-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/80 border border-slate-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter - Same style as Services */}
        <div className="flex flex-wrap justify-center gap-1 mb-5">
          {gameCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 text-xs font-black transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 border border-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid - Horizontal Layout */}
        <div className="grid lg:grid-cols-3 gap-3 mb-5">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/95 border border-slate-700 transition-all duration-300 cursor-pointer hover:border-purple-400/50 p-3">
              {/* Header with Image */}
              <div className="relative h-32 overflow-hidden mb-3">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-2 left-2 right-2">
                  <h3 className="text-white font-black text-sm font-mono mb-1">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <div className="text-purple-400 text-xs font-bold">{item.category}</div>
                    <div className="text-green-400 font-black text-xs">{item.price}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-2 py-0.5 text-xs font-bold border border-purple-500/40 bg-purple-500/10 text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Stats & CTA */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-300 font-medium">{item.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-slate-300 font-medium">{item.rating}</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center space-x-1 text-xs font-bold text-purple-400 hover:text-purple-300 transition-all duration-300">
                    <span>{item.type === 'ebook' || item.type === 'tutorial' ? 'GET' : 'PLAY'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Same style as Services */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Zap className="w-3 h-3" />
            <span>EXPLORE ALL GAMES</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
