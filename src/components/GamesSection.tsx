
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, Users, Clock, Shield, Sword, Crown, Flame, Rocket, Headphones, Settings, Bell, Activity, TrendingUp, Calendar, Cpu, Database, Globe, Award, Bookmark, Gift, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';
import AdditionalGamesContent from './games/AdditionalGamesContent';

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
    { text: "New horror update released", time: "2m ago", type: "update" },
    { text: "Tournament starting soon", time: "5m ago", type: "event" },
    { text: "Beta patch deployed", time: "12m ago", type: "patch" }
  ];

  const stats = [
    { label: "ACTIVE PLAYERS", value: "12.5k", icon: Users },
    { label: "DOWNLOADS", value: "250k+", icon: Download },
    { label: "RATING", value: "4.8★", icon: Star },
    { label: "TOURNAMENTS", value: "8", icon: Trophy }
  ];

  const devTools = [
    { name: "Unity Pro", status: "Active", icon: Cpu },
    { name: "Blender", status: "Updated", icon: Database },
    { name: "Git LFS", status: "Synced", icon: Globe }
  ];

  const achievements = [
    { name: "Speed Demon", progress: 85, icon: Zap },
    { name: "Perfectionist", progress: 92, icon: Target },
    { name: "Master Builder", progress: 78, icon: Crown }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm rounded">
            <Trophy className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">PREMIUM GAMING HUB</span>
          </div>
          
          <h2 className="text-xl lg:text-2xl font-black text-white leading-tight font-mono mb-1">
            GAMING <span className="text-purple-400">ECOSYSTEM</span> + <span className="text-pink-400">DEV TOOLS</span>
          </h2>
          
          <div className="w-12 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-xs text-slate-400 max-w-lg mx-auto">
            Complete gaming platform with development resources and community features
          </p>
        </div>

        {/* Responsive Panel Container */}
        <HorizontalDragContainer className="mb-6" showNavigation={true}>
          {/* Panel 1: Main Gaming Dashboard - STATIC */}
          <div className="min-w-full flex-shrink-0 snap-start">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-[500px] lg:h-[400px]">
              
              {/* Featured Game - Takes most space */}
              <div className="lg:col-span-7 bg-slate-800/95 border border-slate-700 p-4 rounded">
                <div className="flex items-center space-x-2 mb-3">
                  <Play className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-black text-sm font-mono">FEATURED</span>
                </div>
                
                <div className="bg-slate-900/80 border border-purple-400/30 p-4 rounded h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-black text-lg font-mono">{games[activeGame].title}</h3>
                      <div className="text-purple-400 font-bold text-sm">{games[activeGame].category}</div>
                    </div>
                    <div className="text-green-400 font-black text-lg">{games[activeGame].price}</div>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4">{games[activeGame].description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {games[activeGame].tech.map((tech, index) => (
                      <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Game Stats Compact Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                    {[
                      { icon: Users, value: games[activeGame].players, label: "PLAYERS" },
                      { icon: Clock, value: games[activeGame].playtime, label: "TIME" },
                      { icon: Shield, value: games[activeGame].difficulty, label: "LEVEL" },
                      { icon: Star, value: games[activeGame].rating, label: "RATING" }
                    ].map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={index} className="bg-slate-800 border border-slate-600 p-2 text-center rounded">
                          <IconComponent className="w-3 h-3 mx-auto mb-1 text-purple-400" />
                          <div className="text-xs font-black text-white">{stat.value}</div>
                          <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <button className="w-full bg-purple-500 hover:bg-purple-600 text-black px-4 py-2 font-black transition-colors rounded">
                    PLAY NOW
                  </button>
                </div>
              </div>

              {/* Side Panels - Compact Layout */}
              <div className="lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-3">
                
                {/* Game Library Selector */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-3">
                    <Gamepad2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-xs font-mono">LIBRARY</span>
                  </div>
                  
                  <div className="space-y-2">
                    {games.map((game, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveGame(index)}
                        className={`w-full text-left p-2 border transition-all duration-300 rounded ${
                          activeGame === index 
                            ? 'border-purple-400 bg-purple-500/20' 
                            : 'border-slate-600 bg-slate-900/50 hover:border-purple-400/50'
                        }`}
                      >
                        <div className="text-white font-bold text-xs">{game.title}</div>
                        <div className="flex items-center justify-between mt-1">
                          <span className={`px-1 py-0.5 text-xs font-bold rounded ${
                            game.status === 'RELEASED' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'
                          }`}>
                            {game.status}
                          </span>
                          <div className="text-slate-400 text-xs">{game.downloads}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Updates */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-3">
                    <Activity className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-black text-xs font-mono">LIVE</span>
                  </div>
                  
                  <div className="space-y-2">
                    {liveUpdates.map((update, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-2 rounded">
                        <div className="text-white text-xs font-bold">{update.text}</div>
                        <div className="text-slate-400 text-xs mt-1">{update.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-slate-800/95 border border-slate-700 p-3 rounded lg:col-span-2">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-xs font-mono">STATS</span>
                  </div>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={index} className="bg-slate-900/50 border border-slate-600 p-2 text-center rounded">
                          <IconComponent className="w-4 h-4 mx-auto mb-1 text-cyan-400" />
                          <div className="text-white font-black text-sm">{stat.value}</div>
                          <div className="text-slate-400 text-xs font-bold">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Developer Hub & Tools */}
          <div className="min-w-full flex-shrink-0 snap-start">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 h-[500px] lg:h-[400px]">
              
              {/* Dev Tools Panel */}
              <div className="bg-slate-800/95 border border-slate-700 p-4 rounded">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-black text-sm font-mono">DEV TOOLS</span>
                </div>
                
                <div className="space-y-3">
                  {devTools.map((tool, index) => (
                    <div key={index} className="bg-slate-900/50 border border-slate-600 p-3 rounded">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <tool.icon className="w-4 h-4 text-green-400" />
                          <div>
                            <div className="text-white font-bold text-sm">{tool.name}</div>
                            <div className="text-green-400 text-xs">{tool.status}</div>
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-black px-4 py-2 font-black transition-colors mt-4 rounded">
                  LAUNCH TOOLS
                </button>
              </div>

              {/* Achievements Panel */}
              <div className="bg-slate-800/95 border border-slate-700 p-4 rounded">
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-black text-sm font-mono">ACHIEVEMENTS</span>
                </div>
                
                <div className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-slate-900/50 border border-slate-600 p-3 rounded">
                      <div className="flex items-center space-x-3 mb-2">
                        <achievement.icon className="w-4 h-4 text-yellow-400" />
                        <div className="flex-1">
                          <div className="text-white font-bold text-sm">{achievement.name}</div>
                          <div className="text-slate-400 text-xs">{achievement.progress}% Complete</div>
                        </div>
                      </div>
                      <div className="w-full bg-slate-700 h-2 rounded">
                        <div 
                          className="bg-yellow-400 h-2 rounded transition-all duration-500" 
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community & Events */}
              <div className="bg-slate-800/95 border border-slate-700 p-4 rounded">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-4 h-4 text-pink-400" />
                  <span className="text-pink-400 font-black text-sm font-mono">COMMUNITY</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-pink-400/30 p-3 rounded">
                    <div className="text-white font-bold text-sm">Winter Tournament</div>
                    <div className="text-pink-400 text-xs">Prize Pool: $10,000</div>
                    <div className="text-slate-400 text-xs mt-1">Starts in 2 days</div>
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-600 p-3 rounded">
                    <div className="text-white font-bold text-sm">Discord Server</div>
                    <div className="text-pink-400 text-xs">8,432 members online</div>
                  </div>
                  
                  <div className="bg-slate-900/50 border border-slate-600 p-3 rounded">
                    <div className="text-white font-bold text-sm">Dev Blog</div>
                    <div className="text-pink-400 text-xs">New article today</div>
                  </div>
                </div>

                <button className="w-full bg-pink-500 hover:bg-pink-600 text-black px-4 py-2 font-black transition-colors mt-4 rounded">
                  JOIN COMMUNITY
                </button>
              </div>
            </div>
          </div>

          {/* Panel 3: Extended Content */}
          <div className="min-w-full flex-shrink-0 snap-start">
            <AdditionalGamesContent />
          </div>
        </HorizontalDragContainer>

        {/* Navigation Hint */}
        <div className="text-center mb-4">
          <div className="text-slate-500 text-xs font-mono">
            ← USE NAVIGATION OR DRAG TO EXPLORE PANELS →
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm rounded"
          >
            <Zap className="w-3 h-3" />
            <span>EXPLORE ALL CONTENT</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
