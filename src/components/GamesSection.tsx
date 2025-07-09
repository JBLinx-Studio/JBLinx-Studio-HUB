
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
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Horizontal Layout Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <div className="flex-1">
            <div className="inline-flex items-center bg-slate-800/50 border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <Trophy className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-purple-400 font-bold text-sm tracking-wide">PRIORITY #1: GAMERS</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              PREMIUM <span className="text-purple-400">GAMES</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
              Professional games, comprehensive guides, exclusive tutorials, and development insights
            </p>
          </div>
          
          {/* Horizontal Stats */}
          <div className="flex flex-wrap gap-8 mt-8 lg:mt-0">
            {[
              { icon: Gamepad2, value: "25+", label: "Games", color: "text-purple-400" },
              { icon: BookOpen, value: "15+", label: "Guides", color: "text-blue-400" },
              { icon: Play, value: "40+", label: "Tutorials", color: "text-green-400" },
              { icon: FileText, value: "60+", label: "Dev Logs", color: "text-orange-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {gameCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25' 
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700 border border-slate-600 hover:border-purple-400/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 group hover:transform hover:scale-105">
              {item.image && (
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-purple-400 text-sm font-medium">{item.category}</div>
                      <div className="text-green-400 font-bold text-lg">{item.price}</div>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-6">
                {!item.image && (
                  <div className="mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                    <div className="text-purple-400 text-sm font-medium mb-3">{item.category}</div>
                    <div className="text-green-400 font-bold text-lg">{item.price}</div>
                  </div>
                )}
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6 text-xs text-slate-500">
                    <div className="flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span className="font-medium">{item.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/25">
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
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 space-x-3 shadow-lg shadow-purple-500/25"
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
