
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, Users, Clock, Shield, Heart, TrendingUp, Calendar, Tag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [currentPanel, setCurrentPanel] = useState(0);

  const games = [
    {
      id: 1,
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
      playtime: "25+ hrs",
      likes: "2.1k",
      views: "15.3k",
      lastUpdate: "2 days ago",
      tags: ["Multiplayer", "Co-op", "Atmospheric", "Psychological"]
    },
    {
      id: 2,
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
      playtime: "100+ hrs",
      likes: "3.5k",
      views: "28.1k",
      lastUpdate: "1 week ago",
      tags: ["Strategy", "Multiplayer", "Competitive", "Base Building"]
    },
    {
      id: 3,
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
      playtime: "80+ hrs",
      likes: "1.9k",
      views: "12.7k",
      lastUpdate: "3 days ago",
      tags: ["RPG", "Open World", "Character Progression", "Quests"]
    },
    {
      id: 4,
      title: "Neon Racer Extreme",
      category: "Racing/Arcade",
      downloads: "4.3k",
      rating: "4.6",
      status: "RELEASED",
      description: "High-speed cyberpunk racing with customizable vehicles and tracks",
      tech: ["Unity", "Photon", "Wwise", "Blender"],
      price: "$14.99",
      players: "1-16",
      difficulty: "MEDIUM",
      playtime: "40+ hrs",
      likes: "2.8k",
      views: "19.2k",
      lastUpdate: "5 days ago",
      tags: ["Racing", "Cyberpunk", "Customization", "Arcade"]
    }
  ];

  // L-shaped static panels
  const gameLibraryPanel = (
    <div className="w-80 h-96 p-6 flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <Gamepad2 className="w-5 h-5 text-purple-400" />
        <span className="text-purple-400 font-black text-lg font-mono">GAME LIBRARY</span>
      </div>
      
      <div className="space-y-3 flex-1 overflow-y-auto">
        {games.map((game, index) => (
          <button
            key={game.id}
            onClick={() => setActiveGame(index)}
            className={`w-full text-left p-4 border transition-all duration-300 interactive-element ${
              activeGame === index 
                ? 'border-purple-400 bg-purple-500/20 transform scale-105' 
                : 'border-slate-600 bg-slate-900/50 hover:border-purple-400/50 hover:bg-purple-500/10'
            }`}
          >
            <div className="text-white font-bold text-sm mb-2">{game.title}</div>
            <div className="flex items-center justify-between">
              <span className={`px-2 py-1 text-xs font-bold ${
                game.status === 'RELEASED' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'
              }`}>
                {game.status}
              </span>
              <div className="text-slate-400 text-xs">{game.category}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const gameDetailsPanel = (
    <div className="w-80 h-80 p-6 bg-slate-900/95 border border-slate-700">
      <div className="flex items-center space-x-2 mb-4">
        <Target className="w-5 h-5 text-green-400" />
        <span className="text-green-400 font-black text-lg font-mono">GAME DETAILS</span>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-white font-black text-xl font-mono">{games[activeGame].title}</h3>
          <div className="text-purple-400 font-bold">{games[activeGame].category}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Star, value: games[activeGame].rating, label: "RATING" },
            { icon: Download, value: games[activeGame].downloads, label: "DOWNLOADS" },
            { icon: Heart, value: games[activeGame].likes, label: "LIKES" },
            { icon: Eye, value: games[activeGame].views, label: "VIEWS" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800 border border-slate-600 p-3 text-center">
                <IconComponent className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                <div className="text-xs font-black text-white">{stat.value}</div>
                <div className="text-xs font-bold text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-wrap gap-1">
          {games[activeGame].tags.map((tag, index) => (
            <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-center">
          <div className="text-green-400 font-black text-xl">{games[activeGame].price}</div>
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 py-2 font-black transition-all duration-300 interactive-element text-sm mt-2">
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  );

  // Moving panels with different layouts
  const movingPanels = [
    // Featured Game Panel
    <div className="w-full h-full p-8 bg-slate-800/95 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="bg-slate-900/80 border border-purple-400/30 p-8">
          <div className="flex items-center space-x-2 mb-6">
            <Play className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-black text-2xl font-mono">FEATURED RELEASE</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-black text-3xl font-mono mb-2">{games[activeGame].title}</h3>
              <div className="text-purple-400 font-bold text-xl mb-4">{games[activeGame].category}</div>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">{games[activeGame].description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {games[activeGame].tech.map((tech, index) => (
                  <span key={index} className="bg-slate-700 text-cyan-400 px-3 py-2 text-sm font-bold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Users, value: games[activeGame].players, label: "PLAYERS" },
                  { icon: Clock, value: games[activeGame].playtime, label: "TIME" },
                  { icon: Shield, value: games[activeGame].difficulty, label: "LEVEL" },
                  { icon: Calendar, value: games[activeGame].lastUpdate, label: "UPDATED" }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-slate-800 border border-slate-600 p-4 text-center">
                      <IconComponent className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                      <div className="text-sm font-black text-white">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              <div className="text-center">
                <div className="text-green-400 font-black text-3xl mb-4">{games[activeGame].price}</div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-8 py-4 font-black transition-all duration-300 interactive-element text-xl">
                  ACCESS NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Game Gallery Panel
    <div className="w-full h-full p-8 bg-slate-900/95 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="flex items-center space-x-2 mb-8">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <span className="text-yellow-400 font-black text-2xl font-mono">GAME GALLERY</span>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <div key={game.id} className="bg-slate-800/80 border border-slate-600 p-4 hover:border-purple-400/50 transition-all duration-300 interactive-element">
              <div className="text-white font-bold text-lg mb-2">{game.title}</div>
              <div className="text-purple-400 text-sm mb-3">{game.category}</div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Rating:</span>
                  <span className="text-yellow-400 font-bold">{game.rating}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Downloads:</span>
                  <span className="text-green-400 font-bold">{game.downloads}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Price:</span>
                  <span className="text-cyan-400 font-bold">{game.price}</span>
                </div>
              </div>
              
              <button className="w-full bg-slate-700 hover:bg-purple-600 text-white px-4 py-2 text-sm font-bold transition-all duration-300">
                VIEW DETAILS
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Development Stats Panel
    <div className="w-full h-full p-8 bg-slate-950/95 flex items-center justify-center">
      <div className="max-w-5xl w-full">
        <div className="flex items-center space-x-2 mb-8">
          <Code className="w-6 h-6 text-green-400" />
          <span className="text-green-400 font-black text-2xl font-mono">DEVELOPMENT STATS</span>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/50 border border-slate-700 p-6">
              <h3 className="text-white font-bold text-xl mb-4">Active Projects</h3>
              <div className="space-y-4">
                {games.slice(0, 3).map((game, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-600">
                    <div>
                      <div className="text-white font-bold">{game.title}</div>
                      <div className="text-slate-400 text-sm">{game.status}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold">{game.downloads}</div>
                      <div className="text-slate-400 text-sm">downloads</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-700 p-6">
              <h3 className="text-white font-bold text-xl mb-4">Recent Updates</h3>
              <div className="space-y-3">
                {[
                  { title: "Bug fixes for multiplayer", time: "2 hours ago", type: "PATCH" },
                  { title: "New character animations", time: "1 day ago", type: "UPDATE" },
                  { title: "Performance optimizations", time: "3 days ago", type: "HOTFIX" }
                ].map((update, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30">
                    <div>
                      <div className="text-white font-bold text-sm">{update.title}</div>
                      <div className="text-slate-400 text-xs">{update.time}</div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-bold ${
                      update.type === 'PATCH' ? 'bg-blue-500 text-white' :
                      update.type === 'UPDATE' ? 'bg-green-500 text-black' : 'bg-red-500 text-white'
                    }`}>
                      {update.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-900/50 border border-slate-700 p-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-4 text-green-400" />
              <div className="text-3xl font-black text-white mb-2">15.2k</div>
              <div className="text-slate-400 text-sm">Total Downloads</div>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-700 p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
              <div className="text-3xl font-black text-white mb-2">4.8</div>
              <div className="text-slate-400 text-sm">Average Rating</div>
            </div>
            
            <div className="bg-slate-900/50 border border-slate-700 p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <div className="text-3xl font-black text-white mb-2">8.3k</div>
              <div className="text-slate-400 text-sm">Active Players</div>
            </div>
          </div>
        </div>
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
            L-shaped static controls with smooth lerp navigation and perfect viewport fitting
          </p>
        </div>

        {/* Enhanced Horizontal Container with L-shaped Static Panels */}
        <HorizontalDragContainer 
          className="mb-8 h-[600px]" 
          staticPanels={[gameLibraryPanel, gameDetailsPanel]}
          movingPanels={movingPanels}
          currentPanel={currentPanel}
          onPanelChange={setCurrentPanel}
        />

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
