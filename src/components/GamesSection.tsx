
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, Users, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';
import AdditionalGamesContent from './games/AdditionalGamesContent';
import CinematicGameShowcase from './games/CinematicGameShowcase';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);

  const games = [
    {
      title: "Survival Horror Chronicles",
      category: "Horror/Survival",
      downloads: "5.2k",
      rating: "4.8",
      status: "RELEASED",
      description: "Immersive horror with advanced AI-driven scares and atmospheric design",
      tech: ["Unity", "C#", "Blender", "FMOD"],
      price: "$19.99",
      players: "1-4",
      difficulty: "EXPERT",
      playtime: "25+ hrs"
    },
    {
      title: "Strategic Conquest RTS",
      category: "Real-Time Strategy", 
      downloads: "3.1k",
      rating: "4.9",
      status: "RELEASED",
      description: "Command armies in epic 32-player battles with advanced AI and physics",
      tech: ["Unreal", "C++", "AWS", "Redis"],
      price: "$24.99",
      players: "1-32",
      difficulty: "HARD",
      playtime: "100+ hrs"
    },
    {
      title: "Adventure Quest RPG",
      category: "Action/Adventure",
      downloads: "2.8k",
      rating: "4.7",
      status: "BETA",
      description: "Epic quest through mystical realms with deep character progression",
      tech: ["Unity", "Mirror", "MongoDB", "Node.js"],
      price: "FREE BETA",
      players: "1-8",
      difficulty: "MEDIUM",
      playtime: "80+ hrs"
    }
  ];

  const devResources = [
    { title: "Game Development Mastery", type: "E-BOOK", downloads: "8.5k", price: "$29" },
    { title: "Horror Game Tutorial Series", type: "COURSE", downloads: "6.2k", price: "$49" },
    { title: "RTS Development Blog", type: "BLOG", downloads: "12.1k", price: "FREE" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">PRIORITY #1: GAMERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PREMIUM <span className="text-purple-400">GAMING</span> + <span className="text-pink-400">DEV CONTENT</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Professional games, comprehensive guides, tutorials, and development content
          </p>
        </div>

        {/* Enhanced Horizontal Drag Container */}
        <HorizontalDragContainer 
          className="mb-8" 
          autoScrollSpeed={0.4}
          autoScrollDirection="right"
        >
          <div className="flex space-x-6 pb-4">
            {/* Original Compact Layout */}
            <div className="grid lg:grid-cols-3 gap-3 min-w-full flex-shrink-0">
              {/* Left Panel: Featured Game Display */}
              <div className="lg:col-span-2 bg-slate-800/95 border border-slate-700 p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Play className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-black text-sm font-mono">FEATURED RELEASE</span>
                </div>
                
                <div className="bg-slate-900/80 border border-purple-400/30 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-black text-lg font-mono">{games[activeGame].title}</h3>
                      <div className="text-purple-400 font-bold text-sm">{games[activeGame].category}</div>
                    </div>
                    <div className="text-green-400 font-black text-lg">{games[activeGame].price}</div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4">{games[activeGame].description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {games[activeGame].tech.map((tech, index) => (
                      <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { icon: Users, value: games[activeGame].players, label: "PLAYERS" },
                      { icon: Clock, value: games[activeGame].playtime, label: "TIME" },
                      { icon: Shield, value: games[activeGame].difficulty, label: "LEVEL" },
                      { icon: Star, value: games[activeGame].rating, label: "RATING" }
                    ].map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={index} className="bg-slate-800 border border-slate-600 p-2 text-center">
                          <IconComponent className="w-3 h-3 mx-auto mb-1 text-purple-400" />
                          <div className="text-xs font-black text-white">{stat.value}</div>
                          <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-black px-4 py-2 font-black transition-colors">
                    ACCESS NOW
                  </button>
                </div>
              </div>

              {/* Right Panel: Game Selection + Dev Resources */}
              <div className="space-y-3">
                <div className="bg-slate-800/95 border border-slate-700 p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Gamepad2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-sm font-mono">GAME LIBRARY</span>
                  </div>
                  
                  <div className="space-y-2">
                    {games.map((game, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveGame(index)}
                        className={`w-full text-left p-2 border transition-all duration-300 ${
                          activeGame === index 
                            ? 'border-purple-400 bg-purple-500/20' 
                            : 'border-slate-600 bg-slate-900/50 hover:border-purple-400/50'
                        }`}
                      >
                        <div className="text-white font-bold text-sm">{game.title}</div>
                        <div className="flex items-center justify-between mt-1">
                          <span className={`px-2 py-1 text-xs font-bold ${
                            game.status === 'RELEASED' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'
                          }`}>
                            {game.status}
                          </span>
                          <div className="text-slate-400 text-xs flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <Download className="w-3 h-3" />
                              <span>{game.downloads}</span>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/95 border border-slate-700 p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Code className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-black text-sm font-mono">DEV RESOURCES</span>
                  </div>
                  
                  <div className="space-y-2">
                    {devResources.map((resource, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-2">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-white font-bold text-sm">{resource.title}</div>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="bg-green-500 text-black px-2 py-1 text-xs font-bold">
                                {resource.type}
                              </span>
                              <div className="text-slate-400 text-xs flex items-center space-x-1">
                                <Download className="w-3 h-3" />
                                <span>{resource.downloads}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-green-400 font-black text-sm">{resource.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Cinematic Game Showcase */}
            <CinematicGameShowcase />

            {/* Additional Games Content */}
            <AdditionalGamesContent />
          </div>
        </HorizontalDragContainer>

        {/* Enhanced Status Indicator */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-4 text-slate-500 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>AUTO-SCROLLING</span>
            </div>
            <div className="text-slate-600">•</div>
            <div className="flex items-center space-x-2">
              <span>DRAG TO EXPLORE</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Zap className="w-3 h-3" />
            <span>EXPLORE ALL GAMING CONTENT</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
