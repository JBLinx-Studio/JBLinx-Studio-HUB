
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, Users, Clock, Shield, Sword, Crown, Flame, Rocket, Headphones, Settings, Bell, Activity, TrendingUp, Calendar } from 'lucide-react';
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

  const devResources = [
    { title: "Game Development Mastery", type: "E-BOOK", downloads: "8.5k", price: "$29" },
    { title: "Horror Game Tutorial Series", type: "COURSE", downloads: "6.2k", price: "$49" },
    { title: "RTS Development Blog", type: "BLOG", downloads: "12.1k", price: "FREE" }
  ];

  const liveUpdates = [
    { text: "New horror update released for Chronicles", time: "2m ago", type: "update" },
    { text: "Strategic Conquest tournament starting", time: "5m ago", type: "event" },
    { text: "Adventure Quest beta patch deployed", time: "12m ago", type: "patch" }
  ];

  const stats = [
    { label: "ACTIVE PLAYERS", value: "12.5k", icon: Users },
    { label: "TOTAL DOWNLOADS", value: "250k+", icon: Download },
    { label: "AVG RATING", value: "4.8★", icon: Star },
    { label: "TOURNAMENTS", value: "8", icon: Trophy }
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

        {/* Horizontal Drag Container with Multiple Panels */}
        <HorizontalDragContainer className="mb-8">
          {/* Panel 1: Main Gaming Hub (Static First Panel) */}
          <div className="min-w-full snap-start flex-shrink-0">
            <div className="grid lg:grid-cols-3 gap-3">
              {/* Left Panel: Featured Game Display */}
              <div className="lg:col-span-2 bg-slate-800/95 border border-slate-700 p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Play className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-400 font-black text-sm font-mono">FEATURED RELEASE</span>
                </div>
                
                {/* Featured Game Card */}
                <div className="bg-slate-900/80 border border-purple-400/30 p-4">
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
                      <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Game Stats Grid */}
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

              {/* Right Panel: Game Selection + Live Activity */}
              <div className="space-y-3">
                {/* Game Selector */}
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

                {/* Live Updates */}
                <div className="bg-slate-800/95 border border-slate-700 p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Activity className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-black text-sm font-mono">LIVE UPDATES</span>
                  </div>
                  
                  <div className="space-y-2">
                    {liveUpdates.map((update, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-2">
                        <div className="text-white text-xs font-bold">{update.text}</div>
                        <div className="text-slate-400 text-xs mt-1">{update.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Developer Resources & Analytics */}
          <div className="min-w-full snap-start flex-shrink-0">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Dev Resources Panel */}
              <div className="bg-slate-800/95 border border-slate-700 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Code className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-black text-lg font-mono">DEVELOPER HUB</span>
                </div>
                
                <div className="space-y-4">
                  {devResources.map((resource, index) => (
                    <div key={index} className="bg-slate-900/50 border border-slate-600 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-white font-bold text-sm">{resource.title}</div>
                          <div className="flex items-center space-x-2 mt-2">
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

                <button className="w-full bg-green-500 hover:bg-green-600 text-black px-4 py-2 font-black transition-colors mt-6">
                  ACCESS DEVELOPER TOOLS
                </button>
              </div>

              {/* Analytics Panel */}
              <div className="bg-slate-800/95 border border-slate-700 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-black text-lg font-mono">ANALYTICS DASHBOARD</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-4 text-center">
                        <IconComponent className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                        <div className="text-white font-black text-lg">{stat.value}</div>
                        <div className="text-slate-400 text-xs font-bold">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-slate-900/50 border border-slate-600 p-4">
                  <div className="text-white font-bold text-sm mb-2">MONTHLY REVENUE</div>
                  <div className="text-green-400 font-black text-2xl">$45,230</div>
                  <div className="text-green-400 text-xs">↗ +12.5% from last month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 3: Community & Events */}
          <div className="min-w-full snap-start flex-shrink-0">
            <div className="grid lg:grid-cols-3 gap-4">
              {/* Tournament Panel */}
              <div className="bg-slate-800/95 border border-slate-700 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-black text-sm font-mono">TOURNAMENTS</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-yellow-400/30 p-3">
                    <div className="text-white font-bold text-sm">Winter Championship</div>
                    <div className="text-yellow-400 text-xs">Prize Pool: $10,000</div>
                    <div className="text-slate-400 text-xs mt-1">Starts in 2 days</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-white font-bold text-sm">Speed Run Event</div>
                    <div className="text-green-400 text-xs">Prize Pool: $2,500</div>
                    <div className="text-slate-400 text-xs mt-1">Registration open</div>
                  </div>
                </div>

                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 font-black transition-colors mt-4">
                  JOIN TOURNAMENT
                </button>
              </div>

              {/* Community Panel */}
              <div className="bg-slate-800/95 border border-slate-700 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-pink-400" />
                  <span className="text-pink-400 font-black text-sm font-mono">COMMUNITY</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-white font-bold text-sm">Discord Server</div>
                    <div className="text-pink-400 text-xs">8,432 members online</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-white font-bold text-sm">Reddit Community</div>
                    <div className="text-pink-400 text-xs">12k subscribers</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-white font-bold text-sm">YouTube Channel</div>
                    <div className="text-pink-400 text-xs">45k subscribers</div>
                  </div>
                </div>
              </div>

              {/* News & Updates Panel */}
              <div className="bg-slate-800/95 border border-slate-700 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Bell className="w-5 h-5 text-orange-400" />
                  <span className="text-orange-400 font-black text-sm font-mono">LATEST NEWS</span>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-white font-bold text-sm">New Engine Update</div>
                    <div className="text-orange-400 text-xs">Performance improvements</div>
                    <div className="text-slate-400 text-xs mt-1">Today</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-white font-bold text-sm">Beta Testing Phase</div>
                    <div className="text-orange-400 text-xs">New features preview</div>
                    <div className="text-slate-400 text-xs mt-1">2 days ago</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-white font-bold text-sm">Developer Interview</div>
                    <div className="text-orange-400 text-xs">Behind the scenes</div>
                    <div className="text-slate-400 text-xs mt-1">1 week ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 4: Extended Content from AdditionalGamesContent */}
          <div className="min-w-full snap-start flex-shrink-0">
            <AdditionalGamesContent />
          </div>
        </HorizontalDragContainer>

        {/* Navigation Hint */}
        <div className="text-center mb-4">
          <div className="text-slate-500 text-xs font-mono">
            ← DRAG OR USE NAVIGATION TO EXPLORE PANELS →
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
