
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Users, Clock, Shield, Sword, Crown, Flame, Rocket, Activity, TrendingUp, Calendar, Bell, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);

  const games = [
    {
      title: "Neon Racing Elite",
      category: "Racing/Action",
      downloads: "12.5k",
      rating: "4.9",
      status: "FEATURED",
      description: "High-octane cyberpunk racing with customizable vehicles",
      price: "$29.99",
      freeDemo: true,
      imageUrl: "/images/neon-racing-hero.jpg",
      tags: ["Multiplayer", "Customization", "Cyberpunk"],
      releaseDate: "2024-03-15",
      lastUpdate: "2 days ago"
    },
    {
      title: "Mystic Realms MMORPG",
      category: "MMORPG/Fantasy", 
      downloads: "8.3k",
      rating: "4.8",
      status: "EARLY ACCESS",
      description: "Massive fantasy world with 500+ quests and guild systems",
      price: "$19.99",
      freeDemo: false,
      imageUrl: "/images/mystic-realms-hero.jpg",
      tags: ["MMORPG", "Guilds", "PvP"],
      releaseDate: "2024-01-20",
      lastUpdate: "1 week ago"
    },
    {
      title: "Pixel Craft Builder",
      category: "Sandbox/Creative",
      downloads: "15.7k",
      rating: "4.7",
      status: "FREE TO PLAY",
      description: "Ultimate creative sandbox with unlimited building",
      price: "FREE",
      freeDemo: true,
      imageUrl: "/images/pixel-craft-hero.jpg",
      tags: ["Creative", "Multiplayer", "Building"],
      releaseDate: "2023-11-10",
      lastUpdate: "3 days ago"
    },
    {
      title: "Space Command Simulator",
      category: "Strategy/Simulation",
      downloads: "6.9k",
      rating: "4.6",
      status: "COMING SOON",
      description: "Command your space fleet in realistic physics battles",
      price: "$34.99",
      freeDemo: true,
      imageUrl: "/images/space-command-hero.jpg",
      tags: ["Strategy", "Simulation", "Sci-Fi"],
      releaseDate: "2024-06-15",
      lastUpdate: "5 days ago"
    }
  ];

  const gameUpdates = [
    { text: "Neon Racing: New cyberpunk tracks added", time: "2m ago", type: "update", game: "Neon Racing" },
    { text: "Mystic Realms: Guild tournament starting", time: "5m ago", type: "event", game: "Mystic Realms" },
    { text: "Pixel Craft: Community showcase live", time: "12m ago", type: "feature", game: "Pixel Craft" },
    { text: "Space Command: Beta registration open", time: "1h ago", type: "announcement", game: "Space Command" }
  ];

  const gameCategories = [
    { name: "Racing Games", count: 12, icon: Rocket },
    { name: "RPG Collection", count: 8, icon: Sword },
    { name: "Creative Sandbox", count: 15, icon: Target },
    { name: "Strategy Games", count: 6, icon: Crown }
  ];

  const devlogs = [
    { title: "Physics Engine Overhaul", game: "Neon Racing", date: "2 days ago", type: "technical" },
    { title: "Guild System Update", game: "Mystic Realms", date: "1 week ago", type: "feature" },
    { title: "Building Tools Expansion", game: "Pixel Craft", date: "3 days ago", type: "content" },
    { title: "AI Fleet Combat Preview", game: "Space Command", date: "5 days ago", type: "preview" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
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

        {/* Mobile-Optimized Gaming Panels */}
        <div className="relative">
          <HorizontalDragContainer className="mb-6" showNavigation={true}>
            
            {/* Panel 1: Featured Game Preview - Compact */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[55vh] flex flex-col">
                {/* Featured Game Header */}
                <div className="p-3 border-b border-slate-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 font-black text-sm font-mono">FEATURED GAME</span>
                    </div>
                    <span className="bg-purple-500 text-black px-2 py-1 text-xs font-black">
                      {games[activeGame].status}
                    </span>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-3 flex-1">
                  <div className="flex space-x-3 mb-3">
                    <div className="w-16 h-16 bg-slate-700 border border-slate-600 flex items-center justify-center flex-shrink-0">
                      <Gamepad2 className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-black text-base font-mono leading-tight truncate">
                        {games[activeGame].title}
                      </h3>
                      <div className="text-purple-400 font-bold text-sm">{games[activeGame].category}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="text-green-400 font-black text-lg">{games[activeGame].price}</div>
                        {games[activeGame].freeDemo && (
                          <div className="text-cyan-400 text-xs font-bold">FREE DEMO</div>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm line-clamp-2 mb-3">{games[activeGame].description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {games[activeGame].tags?.map((tag, index) => (
                      <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                    <div className="text-center">
                      <div className="text-slate-400">Downloads</div>
                      <div className="text-white font-bold">{games[activeGame].downloads}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400">Rating</div>
                      <div className="text-yellow-400 font-bold">{games[activeGame].rating}★</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400">Updated</div>
                      <div className="text-green-400 font-bold">{games[activeGame].lastUpdate}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-purple-500 hover:bg-purple-600 text-black px-3 py-2 font-black transition-colors text-sm">
                      {games[activeGame].price === 'FREE' ? 'PLAY NOW' : 'BUY GAME'}
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 font-black transition-colors text-sm">
                      VIEW DETAILS
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Game Library Browser */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[55vh] flex flex-col">
                <div className="p-3 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Gamepad2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-sm font-mono">GAME LIBRARY</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-3">
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
                        <div className="flex items-center space-x-2">
                          <div className="w-12 h-12 bg-slate-700 border border-slate-600 flex items-center justify-center flex-shrink-0">
                            <Gamepad2 className="w-4 h-4 text-purple-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-bold text-sm truncate">{game.title}</div>
                            <div className="text-slate-400 text-xs truncate">{game.category}</div>
                            <div className="flex items-center justify-between mt-1">
                              <span className={`px-1 py-0.5 text-xs font-bold ${
                                game.status === 'FEATURED' ? 'bg-purple-500 text-white' :
                                game.status === 'FREE TO PLAY' ? 'bg-green-500 text-black' :
                                game.status === 'EARLY ACCESS' ? 'bg-yellow-500 text-black' :
                                'bg-orange-500 text-black'
                              }`}>
                                {game.status}
                              </span>
                              <div className="text-green-400 text-xs font-bold">{game.price}</div>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: Game Categories */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[55vh] flex flex-col">
                <div className="p-3 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Target className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-black text-sm font-mono">GAME CATEGORIES</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-3">
                  <div className="space-y-3">
                    {gameCategories.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={index} className="bg-slate-900/50 border border-slate-600 p-3">
                          <div className="flex items-center space-x-3">
                            <IconComponent className="w-5 h-5 text-purple-400" />
                            <div className="flex-1">
                              <div className="text-white font-bold text-sm">{category.name}</div>
                              <div className="text-slate-400 text-xs">{category.count} games available</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 4: Live Updates */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[55vh] flex flex-col">
                <div className="p-3 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-400 font-black text-sm font-mono">LIVE UPDATES</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-3">
                  <div className="space-y-2">
                    {gameUpdates.map((update, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-2">
                        <div className="flex items-start space-x-2">
                          <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                            update.type === 'update' ? 'bg-green-400' :
                            update.type === 'event' ? 'bg-purple-400' :
                            update.type === 'feature' ? 'bg-cyan-400' :
                            'bg-orange-400'
                          }`}></div>
                          <div className="flex-1">
                            <div className="text-white font-bold text-sm">{update.text}</div>
                            <div className="text-slate-400 text-xs">
                              {update.game} • {update.time}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 5: Developer Logs */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[55vh] flex flex-col">
                <div className="p-3 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-4 h-4 text-pink-400" />
                    <span className="text-pink-400 font-black text-sm font-mono">DEVELOPER LOGS</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-3">
                  <div className="space-y-3">
                    {devlogs.map((devlog, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-3">
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-white font-bold text-sm">{devlog.title}</div>
                          <span className={`px-2 py-1 text-xs font-bold ${
                            devlog.type === 'technical' ? 'bg-blue-500 text-white' :
                            devlog.type === 'feature' ? 'bg-green-500 text-black' :
                            devlog.type === 'content' ? 'bg-purple-500 text-white' :
                            'bg-orange-500 text-black'
                          }`}>
                            {devlog.type.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-slate-400 text-xs">
                          {devlog.game} • {devlog.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 6: Video Preview (Smaller) */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[55vh] flex flex-col">
                <div className="p-3 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Play className="w-4 h-4 text-pink-400" />
                    <span className="text-pink-400 font-black text-sm font-mono">GAME PREVIEW</span>
                  </div>
                </div>

                <div className="flex-1 p-3">
                  {/* Small Video Preview */}
                  <div className="relative bg-black h-32 mb-3 border border-slate-600">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <button className="bg-purple-500/90 hover:bg-purple-400 backdrop-blur-sm border-2 border-white/30 rounded-full p-3 transition-all">
                        <Play className="w-5 h-5 text-white fill-white" />
                      </button>
                    </div>
                    <img 
                      src={games[activeGame].imageUrl || "/api/placeholder/400/200"} 
                      alt={games[activeGame].title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Video Info */}
                  <div className="space-y-2">
                    <div className="text-white font-bold text-sm">{games[activeGame].title} - Gameplay</div>
                    <div className="text-slate-400 text-xs">Duration: 2:35 • 15k views</div>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-pink-500 hover:bg-pink-600 text-black px-3 py-2 font-black transition-colors text-sm">
                        WATCH NOW
                      </button>
                      <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 font-black transition-colors text-sm">
                        MORE VIDEOS
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </HorizontalDragContainer>
        </div>

        {/* Navigation Hint */}
        <div className="text-center mb-4">
          <div className="text-slate-500 text-xs font-mono">
            ← SWIPE OR USE ARROWS TO EXPLORE →
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
