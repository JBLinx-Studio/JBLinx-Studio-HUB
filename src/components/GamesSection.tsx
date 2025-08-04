
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, Users, Clock, Shield, Sword, Crown, Flame, Rocket, Headphones, Settings, Bell, Activity, TrendingUp, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';
import AdditionalGamesContent from './games/AdditionalGamesContent';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);

  const games = [
    {
      title: "Neon Racing Elite",
      category: "Racing/Action",
      downloads: "12.5k",
      rating: "4.9",
      status: "FEATURED",
      description: "High-octane cyberpunk racing with customizable vehicles and neon-lit tracks",
      tech: ["Unity", "C#", "Photon", "FMOD"],
      price: "$29.99",
      freeDemo: true,
      players: "1-16",
      difficulty: "MEDIUM",
      playtime: "50+ hrs",
      videoUrl: "/videos/neon-racing-trailer.mp4",
      imageUrl: "/images/neon-racing-hero.jpg",
      tags: ["Multiplayer", "Customization", "Cyberpunk"],
      releaseDate: "2024-03-15",
      lastUpdate: "2 days ago",
      devlog: "Added new night mode tracks and vehicle physics improvements"
    },
    {
      title: "Mystic Realms MMORPG",
      category: "MMORPG/Fantasy", 
      downloads: "8.3k",
      rating: "4.8",
      status: "EARLY ACCESS",
      description: "Massive fantasy world with 500+ quests, guild systems, and epic raids",
      tech: ["Unreal", "C++", "PostgreSQL", "Redis"],
      price: "$19.99",
      freeDemo: false,
      players: "1-1000",
      difficulty: "EXPERT",
      playtime: "200+ hrs",
      videoUrl: "/videos/mystic-realms-gameplay.mp4",
      imageUrl: "/images/mystic-realms-hero.jpg",
      tags: ["MMORPG", "Guilds", "PvP"],
      releaseDate: "2024-01-20",
      lastUpdate: "1 week ago",
      devlog: "Major guild update with new raid dungeons and PvP tournaments"
    },
    {
      title: "Pixel Craft Builder",
      category: "Sandbox/Creative",
      downloads: "15.7k",
      rating: "4.7",
      status: "FREE TO PLAY",
      description: "Ultimate creative sandbox with unlimited building possibilities",
      tech: ["Unity", "Mirror", "MongoDB", "Node.js"],
      price: "FREE",
      freeDemo: true,
      players: "1-50",
      difficulty: "EASY",
      playtime: "Unlimited",
      videoUrl: "/videos/pixel-craft-showcase.mp4",
      imageUrl: "/images/pixel-craft-hero.jpg",
      tags: ["Creative", "Multiplayer", "Building"],
      releaseDate: "2023-11-10",
      lastUpdate: "3 days ago",
      devlog: "New building tools and community showcase feature added"
    },
    {
      title: "Space Command Simulator",
      category: "Strategy/Simulation",
      downloads: "6.9k",
      rating: "4.6",
      status: "COMING SOON",
      description: "Command your space fleet in realistic physics-based battles",
      tech: ["Unity", "C#", "Mirror", "PostgreSQL"],
      price: "$34.99",
      freeDemo: true,
      players: "1-8",
      difficulty: "HARD",
      playtime: "80+ hrs",
      videoUrl: "/videos/space-command-teaser.mp4",
      imageUrl: "/images/space-command-hero.jpg",
      tags: ["Strategy", "Simulation", "Sci-Fi"],
      releaseDate: "2024-06-15",
      lastUpdate: "5 days ago",
      devlog: "Beta testing begins next month! New ship designs revealed"
    }
  ];

  const gameCategories = [
    { name: "Racing Games", count: 12, featured: "Neon Racing Elite", icon: Rocket },
    { name: "RPG Collection", count: 8, featured: "Mystic Realms", icon: Sword },
    { name: "Creative Sandbox", count: 15, featured: "Pixel Craft", icon: Target },
    { name: "Strategy Games", count: 6, featured: "Space Command", icon: Crown }
  ];

  const gamePreviews = [
    { title: "Neon Racing - Track Preview", type: "VIDEO", duration: "2:15", views: "25k" },
    { title: "Mystic Realms - Raid Showcase", type: "VIDEO", duration: "4:32", views: "18k" },
    { title: "Pixel Craft - Speed Build", type: "VIDEO", duration: "1:45", views: "32k" }
  ];

  const gameUpdates = [
    { text: "Neon Racing: New cyberpunk tracks added", time: "2m ago", type: "update", game: "Neon Racing" },
    { text: "Mystic Realms: Guild tournament starting", time: "5m ago", type: "event", game: "Mystic Realms" },
    { text: "Pixel Craft: Community showcase live", time: "12m ago", type: "feature", game: "Pixel Craft" },
    { text: "Space Command: Beta registration open", time: "1h ago", type: "announcement", game: "Space Command" }
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

        {/* Mobile-First Gaming Panels */}
        <div className="relative">
          <HorizontalDragContainer className="mb-8" showNavigation={true}>
            {/* Panel 1: Featured Game with Video Preview - Perfect Mobile Fit */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[70vh] flex flex-col">
                {/* Video Preview Section */}
                <div className="relative bg-black flex-1 min-h-[40%]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button className="bg-purple-500/90 hover:bg-purple-400 backdrop-blur-sm border-2 border-white/30 rounded-full p-4 transition-all">
                      <Play className="w-8 h-8 text-white fill-white" />
                    </button>
                  </div>
                  <img 
                    src={games[activeGame].imageUrl || "/api/placeholder/400/300"} 
                    alt={games[activeGame].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 z-30">
                    <span className={`px-2 py-1 text-xs font-black ${
                      games[activeGame].status === 'FEATURED' ? 'bg-purple-500 text-white' :
                      games[activeGame].status === 'FREE TO PLAY' ? 'bg-green-500 text-black' :
                      games[activeGame].status === 'EARLY ACCESS' ? 'bg-yellow-500 text-black' :
                      'bg-orange-500 text-black'
                    }`}>
                      {games[activeGame].status}
                    </span>
                  </div>
                </div>

                {/* Game Info Section */}
                <div className="p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-white font-black text-lg font-mono leading-tight">
                        {games[activeGame].title}
                      </h3>
                      <div className="text-purple-400 font-bold text-sm">{games[activeGame].category}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-black text-xl">{games[activeGame].price}</div>
                      {games[activeGame].freeDemo && (
                        <div className="text-cyan-400 text-xs font-bold">FREE DEMO</div>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm line-clamp-2">{games[activeGame].description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {games[activeGame].tags?.map((tag, index) => (
                      <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-purple-500 hover:bg-purple-600 text-black px-4 py-3 font-black transition-colors">
                      {games[activeGame].price === 'FREE' ? 'PLAY NOW' : 'BUY NOW'}
                    </button>
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 font-black transition-colors">
                      WATCH TRAILER
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: Game Library Browser - Perfect Mobile Fit */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[70vh] flex flex-col">
                {/* Header */}
                <div className="p-4 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Gamepad2 className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-lg font-mono">GAME LIBRARY</span>
                  </div>
                </div>

                {/* Game Grid */}
                <div className="flex-1 overflow-auto p-4">
                  <div className="grid grid-cols-1 gap-3">
                    {games.map((game, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveGame(index)}
                        className={`text-left p-3 border transition-all duration-300 ${
                          activeGame === index 
                            ? 'border-purple-400 bg-purple-500/20' 
                            : 'border-slate-600 bg-slate-900/50 hover:border-purple-400/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-16 h-16 bg-slate-700 border border-slate-600 flex items-center justify-center flex-shrink-0">
                            <Gamepad2 className="w-6 h-6 text-purple-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-bold text-sm truncate">{game.title}</div>
                            <div className="text-slate-400 text-xs truncate">{game.category}</div>
                            <div className="flex items-center justify-between mt-2">
                              <span className={`px-2 py-1 text-xs font-bold ${
                                game.status === 'FEATURED' ? 'bg-purple-500 text-white' :
                                game.status === 'FREE TO PLAY' ? 'bg-green-500 text-black' :
                                game.status === 'EARLY ACCESS' ? 'bg-yellow-500 text-black' :
                                'bg-orange-500 text-black'
                              }`}>
                                {game.status}
                              </span>
                              <div className="text-slate-400 text-xs flex items-center space-x-1">
                                <Download className="w-3 h-3" />
                                <span>{game.downloads}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 3: Game Categories - Perfect Mobile Fit */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[70vh] flex flex-col">
                <div className="p-4 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-black text-lg font-mono">GAME CATEGORIES</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-4">
                  <div className="space-y-4">
                    {gameCategories.map((category, index) => {
                      const IconComponent = category.icon;
                      return (
                        <div key={index} className="bg-slate-900/50 border border-slate-600 p-4">
                          <div className="flex items-center space-x-3 mb-3">
                            <IconComponent className="w-6 h-6 text-purple-400" />
                            <div className="flex-1">
                              <div className="text-white font-bold text-base">{category.name}</div>
                              <div className="text-slate-400 text-sm">{category.count} games available</div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-400" />
                          </div>
                          <div className="text-cyan-400 text-sm">
                            Featured: <span className="text-white font-bold">{category.featured}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 4: Game Updates & Devlogs - Perfect Mobile Fit */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[70vh] flex flex-col">
                <div className="p-4 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-400 font-black text-lg font-mono">GAME UPDATES</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-4">
                  <div className="space-y-3">
                    {gameUpdates.map((update, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-3">
                        <div className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            update.type === 'update' ? 'bg-green-400' :
                            update.type === 'event' ? 'bg-purple-400' :
                            update.type === 'feature' ? 'bg-cyan-400' :
                            'bg-orange-400'
                          }`}></div>
                          <div className="flex-1">
                            <div className="text-white font-bold text-sm">{update.text}</div>
                            <div className="text-slate-400 text-xs mt-1">
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

            {/* Panel 5: Video Previews - Perfect Mobile Fit */}
            <div className="w-[100vw] snap-start flex-shrink-0 px-3">
              <div className="bg-slate-800/95 border border-slate-700 h-[70vh] flex flex-col">
                <div className="p-4 border-b border-slate-700">
                  <div className="flex items-center space-x-2">
                    <Play className="w-5 h-5 text-pink-400" />
                    <span className="text-pink-400 font-black text-lg font-mono">GAME PREVIEWS</span>
                  </div>
                </div>

                <div className="flex-1 overflow-auto p-4">
                  <div className="space-y-4">
                    {gamePreviews.map((preview, index) => (
                      <div key={index} className="bg-slate-900/50 border border-slate-600 p-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-16 h-12 bg-black border border-slate-600 flex items-center justify-center flex-shrink-0">
                            <Play className="w-4 h-4 text-pink-400" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-bold text-sm">{preview.title}</div>
                            <div className="flex items-center space-x-3 text-xs text-slate-400 mt-1">
                              <span>{preview.duration}</span>
                              <span>•</span>
                              <span>{preview.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </HorizontalDragContainer>
        </div>

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
