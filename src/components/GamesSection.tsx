
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

  // Static docked panel - always visible on desktop
  const staticPanels = [
    <div className="p-6 w-full h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <Terminal className="w-5 h-5 text-green-400" />
        <span className="text-green-400 font-black text-lg font-mono">GAME CONTROL</span>
      </div>
      
      <div className="space-y-4 flex-1">
        {games.map((game, index) => (
          <button
            key={index}
            onClick={() => setActiveGame(index)}
            className={`w-full text-left p-3 border transition-all duration-300 interactive-element ${
              activeGame === index 
                ? 'border-purple-400 bg-purple-500/20 transform scale-105' 
                : 'border-slate-600 bg-slate-900/50 hover:border-purple-400/50 hover:bg-purple-500/10'
            }`}
          >
            <div className="text-white font-bold text-sm">{game.title}</div>
            <div className="flex items-center justify-between mt-2">
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

      <div className="mt-6 pt-4 border-t border-slate-700">
        <div className="text-center">
          <div className="text-slate-400 text-xs font-mono mb-2">ACTIVE SELECTION</div>
          <div className="text-purple-400 font-black text-lg">{games[activeGame].title}</div>
          <div className="text-green-400 font-bold text-xl">{games[activeGame].price}</div>
        </div>
      </div>
    </div>
  ];

  // Moving panels - the main content that scrolls
  const movingPanels = [
    // Featured Game Panel
    <div className="panel-container">
      <div className="w-full bg-slate-800/95 border border-slate-700 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Play className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-black text-xl font-mono">FEATURED RELEASE</span>
        </div>
        
        <div className="bg-slate-900/80 border border-purple-400/30 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-white font-black text-2xl font-mono">{games[activeGame].title}</h3>
              <div className="text-purple-400 font-bold text-lg">{games[activeGame].category}</div>
            </div>
            <div className="text-green-400 font-black text-2xl">{games[activeGame].price}</div>
          </div>
          
          <p className="text-slate-300 text-lg mb-6 leading-relaxed">{games[activeGame].description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {games[activeGame].tech.map((tech, index) => (
              <span key={index} className="bg-slate-700 text-cyan-400 px-3 py-2 text-sm font-bold">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            {[
              { icon: Users, value: games[activeGame].players, label: "PLAYERS" },
              { icon: Clock, value: games[activeGame].playtime, label: "TIME" },
              { icon: Shield, value: games[activeGame].difficulty, label: "LEVEL" },
              { icon: Star, value: games[activeGame].rating, label: "RATING" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800 border border-slate-600 p-4 text-center">
                  <IconComponent className="w-4 h-4 mx-auto mb-2 text-purple-400" />
                  <div className="text-sm font-black text-white">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
          
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-6 py-4 font-black transition-all duration-300 interactive-element text-lg">
            ACCESS NOW
          </button>
        </div>
      </div>
    </div>,

    // Cinematic Showcase Panel
    <div className="panel-container">
      <div className="w-full">
        <CinematicGameShowcase />
      </div>
    </div>,

    // Additional Games Panel
    <div className="panel-container">
      <div className="w-full">
        <AdditionalGamesContent />
      </div>
    </div>,

    // Dev Resources Panel
    <div className="panel-container">
      <div className="w-full bg-slate-800/95 border border-slate-700 p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Code className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-black text-xl font-mono">DEV RESOURCES</span>
        </div>
        
        <div className="space-y-4">
          {devResources.map((resource, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-600 p-4 interactive-element hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-white font-bold text-lg">{resource.title}</div>
                  <div className="flex items-center space-x-3 mt-2">
                    <span className="bg-green-500 text-black px-3 py-1 text-sm font-bold">
                      {resource.type}
                    </span>
                    <div className="text-slate-400 text-sm flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads}</span>
                    </div>
                  </div>
                </div>
                <div className="text-green-400 font-black text-xl">{resource.price}</div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 py-4 font-black transition-all duration-300 mt-6 interactive-element text-lg">
          ACCESS ALL RESOURCES
        </button>
      </div>
    </div>
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
            Interactive showcase with static controls and smooth bidirectional flow
          </p>
        </div>

        {/* Enhanced Horizontal Container with Static + Moving Panels */}
        <HorizontalDragContainer 
          className="mb-8 h-[600px]" 
          autoScrollSpeed={0.6}
          staticPanels={staticPanels}
          movingPanels={movingPanels}
        />

        {/* Enhanced Status Indicator */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-6 text-slate-500 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>BIDIRECTIONAL AUTO-FLOW</span>
            </div>
            <div className="text-slate-600">•</div>
            <div className="flex items-center space-x-2">
              <span>STATIC DOCKED CONTROLS</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="text-slate-600">•</div>
            <div className="flex items-center space-x-2">
              <span>ULTRA-SMOOTH DRAG</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-6 py-3 font-black transition-all duration-300 space-x-2 shadow-lg text-sm interactive-element"
          >
            <Zap className="w-4 h-4" />
            <span>EXPLORE ALL GAMING CONTENT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
