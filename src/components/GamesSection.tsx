
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
      price: "$19.99"
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
      price: "$24.99"
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
      price: "Free Beta"
    }
  ];

  const devContent = [
    {
      title: "Game Development Mastery",
      category: "Complete Guide",
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Horizontal Layout Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
          <div className="flex-1">
            <div className="inline-flex items-center bg-slate-800/50 border border-purple-500/30 px-4 py-2 rounded-full mb-4">
              <Trophy className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-purple-400 font-bold text-sm tracking-wide">PRIORITY #1: GAMERS</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              PREMIUM <span className="text-purple-400">GAMES</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl">
              Professional games, comprehensive guides, exclusive tutorials, and development insights
            </p>
          </div>
          
          {/* Horizontal Stats */}
          <div className="flex flex-wrap gap-6 mt-6 lg:mt-0">
            {[
              { icon: Gamepad2, value: "25+", label: "Games", color: "text-purple-400" },
              { icon: BookOpen, value: "15+", label: "Guides", color: "text-blue-400" },
              { icon: Play, value: "40+", label: "Tutorials", color: "text-green-400" },
              { icon: FileText, value: "60+", label: "Dev Logs", color: "text-orange-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {gameCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-500 text-white' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 border border-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-purple-400/50 transition-all duration-300 group">
              {item.image && (
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-purple-400 text-sm font-medium">{item.category}</div>
                      <div className="text-green-400 font-bold">{item.price}</div>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-6">
                {!item.image && (
                  <div className="mb-4">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <div className="text-purple-400 text-sm font-medium mb-2">{item.category}</div>
                    <div className="text-green-400 font-bold">{item.price}</div>
                  </div>
                )}
                <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{item.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                  {item.type === 'ebook' || item.type === 'tutorial' ? 'GET RESOURCE' : 'PLAY NOW'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 space-x-2"
          >
            <Zap className="w-5 h-5" />
            <span>EXPLORE ALL GAMES & RESOURCES</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
