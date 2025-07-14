
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, Users, Clock, Shield, Bell, Activity, Flame, Crown, Gem, Bookmark, Heart, MessageSquare, TrendingUp, Calendar, Settings, Award, Radio, Wifi, Battery } from 'lucide-react';
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

  const liveUpdates = [
    { type: "RELEASE", title: "Shadow Protocol v2.0", time: "2 min ago", status: "NEW" },
    { type: "UPDATE", title: "RTS Balance Patch", time: "15 min ago", status: "LIVE" },
    { type: "EVENT", title: "Beta Weekend", time: "1 hr ago", status: "ACTIVE" },
    { type: "NEWS", title: "Developer Interview", time: "3 hrs ago", status: "HOT" }
  ];

  const notifications = [
    { icon: Bell, text: "New game available", priority: "HIGH" },
    { icon: Trophy, text: "Achievement unlocked", priority: "MEDIUM" },
    { icon: Heart, text: "Wishlist updated", priority: "LOW" },
    { icon: MessageSquare, text: "3 new reviews", priority: "MEDIUM" }
  ];

  // Top HUD Panel
  const topHUD = (
    <div className="w-full bg-slate-900/95 border-b border-slate-700/70 p-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Activity className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-green-400 font-black text-sm font-mono">GAMING HUB LIVE</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-xs">1,247 ONLINE</span>
            </div>
            <div className="flex items-center space-x-1">
              <Download className="w-3 h-3 text-purple-400" />
              <span className="text-purple-400 font-bold text-xs">89.2k DOWNLOADS</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1">
            {[Wifi, Battery].map((Icon, index) => (
              <Icon key={index} className="w-4 h-4 text-green-400" />
            ))}
          </div>
          <div className="text-slate-400 font-mono text-xs">17:42:31</div>
        </div>
      </div>
    </div>
  );

  // Game Control Static Panel
  const gameControlPanel = (
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
  );

  // Live Updates Static Panel
  const liveUpdatesPanel = (
    <div className="p-6 w-full h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <Radio className="w-5 h-5 text-red-400 animate-pulse" />
        <span className="text-red-400 font-black text-lg font-mono">LIVE UPDATES</span>
      </div>
      
      <div className="space-y-3 flex-1">
        {liveUpdates.map((update, index) => (
          <div key={index} className="bg-slate-800/80 border border-slate-600/50 p-3 hover:bg-slate-800 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className={`px-2 py-1 text-xs font-black ${
                update.type === 'RELEASE' ? 'bg-purple-500 text-white' :
                update.type === 'UPDATE' ? 'bg-blue-500 text-white' :
                update.type === 'EVENT' ? 'bg-orange-500 text-black' :
                'bg-green-500 text-black'
              }`}>
                {update.type}
              </span>
              <span className={`px-2 py-1 text-xs font-black ${
                update.status === 'NEW' ? 'bg-red-500 text-white animate-pulse' :
                update.status === 'LIVE' ? 'bg-green-400 text-black' :
                update.status === 'ACTIVE' ? 'bg-yellow-400 text-black' :
                'bg-orange-400 text-black'
              }`}>
                {update.status}
              </span>
            </div>
            <div className="text-white font-bold text-sm mb-1">{update.title}</div>
            <div className="text-slate-400 text-xs">{update.time}</div>
          </div>
        ))}
      </div>

      <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-black px-4 py-3 font-black transition-all duration-300 mt-4">
        VIEW ALL UPDATES
      </button>
    </div>
  );

  // Notifications Static Panel
  const notificationsPanel = (
    <div className="p-6 w-full h-full flex flex-col">
      <div className="flex items-center space-x-2 mb-6">
        <Bell className="w-5 h-5 text-yellow-400" />
        <span className="text-yellow-400 font-black text-lg font-mono">ALERTS</span>
      </div>
      
      <div className="space-y-3 flex-1">
        {notifications.map((notification, index) => {
          const IconComponent = notification.icon;
          return (
            <div key={index} className="bg-slate-800/80 border border-slate-600/50 p-3 hover:bg-slate-800 transition-colors interactive-element">
              <div className="flex items-center space-x-3">
                <div className={`p-2 ${
                  notification.priority === 'HIGH' ? 'bg-red-500/20 text-red-400' :
                  notification.priority === 'MEDIUM' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-sm">{notification.text}</div>
                  <div className="text-slate-400 text-xs">Just now</div>
                </div>
                <div className={`w-2 h-2 rounded-full ${
                  notification.priority === 'HIGH' ? 'bg-red-400 animate-pulse' :
                  notification.priority === 'MEDIUM' ? 'bg-yellow-400' :
                  'bg-blue-400'
                }`}></div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-4 py-3 font-black transition-all duration-300 mt-4">
        MANAGE ALERTS
      </button>
    </div>
  );

  // Static panels array
  const staticPanels = [gameControlPanel, liveUpdatesPanel, notificationsPanel];

  // Moving panels - main content that scrolls
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
    </div>
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 relative">
      {/* Top HUD - Always visible */}
      <div className="absolute top-0 left-0 right-0 z-30">
        {topHUD}
      </div>

      <div className="container mx-auto px-4 pt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">ULTIMATE GAMING HUB</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            <span className="text-purple-400">ADVANCED</span> GAMING + <span className="text-pink-400">DEV</span> SHOWCASE
          </h2>
          
          <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Multi-panel HUD with static docked controls and ultra-smooth bidirectional flow
          </p>
        </div>

        {/* Enhanced Multi-Panel Container */}
        <HorizontalDragContainer 
          className="mb-8 h-[700px]" 
          autoScrollSpeed={0.4}
          staticPanels={staticPanels}
          movingPanels={movingPanels}
        />

        {/* Enhanced Status Indicator */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-6 text-slate-500 text-xs font-mono">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>MULTI-PANEL HUD</span>
            </div>
            <div className="text-slate-600">•</div>
            <div className="flex items-center space-x-2">
              <span>STATIC DOCKED CONTROLS</span>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            <div className="text-slate-600">•</div>
            <div className="flex items-center space-x-2">
              <span>BIDIRECTIONAL ULTRA-FLOW</span>
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
            <span>EXPLORE COMPLETE GAMING UNIVERSE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
