
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, Users, Clock, Shield, Heart, TrendingUp, Calendar, Tag, Eye, MessageSquare, BarChart3, GitBranch, Cpu, Palette, Headphones, Video, Image, BookOpen, Award, Activity } from 'lucide-react';
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
      tags: ["Multiplayer", "Co-op", "Atmospheric", "Psychological"],
      screenshots: 8,
      devlogEntries: 12,
      version: "v2.1.3",
      nextUpdate: "Major AI Update v2.2",
      community: "Active",
      platforms: ["PC", "Steam", "Epic"]
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
      tags: ["Strategy", "Multiplayer", "Competitive", "Base Building"],
      screenshots: 15,
      devlogEntries: 8,
      version: "v1.8.2",
      nextUpdate: "New Campaign Mode",
      community: "Very Active",
      platforms: ["PC", "Steam", "Xbox"]
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
      tags: ["RPG", "Open World", "Character Progression", "Quests"],
      screenshots: 20,
      devlogEntries: 15,
      version: "Beta v0.9.1",
      nextUpdate: "Launch Candidate",
      community: "Growing",
      platforms: ["PC", "Steam", "Mobile"]
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
      tags: ["Racing", "Cyberpunk", "Customization", "Arcade"],
      screenshots: 12,
      devlogEntries: 10,
      version: "v3.1.0",
      nextUpdate: "Track Editor DLC",
      community: "Active",
      platforms: ["PC", "Steam", "PlayStation"]
    }
  ];

  const devUpdates = [
    { type: "FEATURE", title: "New AI Behavior System", time: "2 hours ago", game: "Horror Chronicles" },
    { type: "BUGFIX", title: "Multiplayer Connection Issues", time: "4 hours ago", game: "Strategic Conquest" },
    { type: "CONTENT", title: "3 New Character Classes", time: "1 day ago", game: "Adventure Quest" },
    { type: "OPTIMIZATION", title: "Graphics Performance Boost", time: "2 days ago", game: "Neon Racer" },
    { type: "SECURITY", title: "Anti-Cheat System Update", time: "3 days ago", game: "Strategic Conquest" }
  ];

  const gameReviews = [
    { game: "Horror Chronicles", reviewer: "GameSpot", score: 9.2, quote: "A masterpiece of atmospheric horror" },
    { game: "Strategic Conquest", reviewer: "IGN", score: 8.8, quote: "The best RTS experience in years" },
    { game: "Adventure Quest", reviewer: "PC Gamer", score: 8.5, quote: "Beautiful world with endless possibilities" }
  ];

  // Advanced L-shaped static panels with rich content
  const gameLibraryPanel = (
    <div className="w-full h-full p-4 flex flex-col bg-gradient-to-br from-slate-900/98 to-slate-800/95 border-b border-slate-700/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5" />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-4 border-b border-purple-400/20 pb-2">
          <Gamepad2 className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-bold text-sm font-mono">GAME LIBRARY</span>
          <div className="ml-auto bg-purple-500/20 px-2 py-1 text-xs font-bold text-purple-300">
            {games.length}
          </div>
        </div>
        
        <div className="space-y-2 flex-1 overflow-y-auto custom-scrollbar">
          {games.map((game, index) => (
            <button
              key={game.id}
              onClick={() => setActiveGame(index)}
              className={`w-full text-left p-3 border transition-all duration-300 interactive-element group relative overflow-hidden ${
                activeGame === index 
                  ? 'border-purple-400 bg-gradient-to-r from-purple-500/25 to-pink-500/20 scale-105 shadow-lg' 
                  : 'border-slate-600/60 bg-slate-900/60 hover:border-purple-400/60 hover:bg-gradient-to-r hover:from-purple-500/15 hover:to-pink-500/10'
              }`}
            >
              <div className="relative z-10">
                <div className="text-white font-bold text-xs mb-1 group-hover:text-purple-200">{game.title}</div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-bold ${
                    game.status === 'RELEASED' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'
                  }`}>
                    {game.status}
                  </span>
                  <div className="text-slate-400 text-xs">{game.category}</div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span className="text-yellow-400 font-bold">{game.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3 text-green-400" />
                    <span className="text-green-400 font-bold">{game.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-blue-400" />
                    <span className="text-blue-400 font-bold">{game.players}</span>
                  </div>
                </div>
              </div>
              {activeGame === index && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const gameDetailsPanel = (
    <div className="w-full h-full p-4 bg-gradient-to-br from-slate-900/98 to-slate-800/95 border-b border-slate-700/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5" />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-2 mb-3 border-b border-green-400/20 pb-2">
          <Target className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-bold text-sm font-mono">GAME DETAILS</span>
          <div className="ml-auto flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs">{games[activeGame].community}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-slate-800/60 border border-slate-600/40 p-3 backdrop-blur-sm">
            <h3 className="text-white font-bold text-sm mb-1">{games[activeGame].title}</h3>
            <div className="text-purple-400 font-bold text-xs mb-1">{games[activeGame].category}</div>
            <div className="text-slate-400 text-xs line-clamp-2">{games[activeGame].description}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {[
              { icon: Star, value: games[activeGame].rating, label: "RATING", color: "text-yellow-400" },
              { icon: Download, value: games[activeGame].downloads, label: "DL", color: "text-green-400" },
              { icon: Eye, value: games[activeGame].views, label: "VIEWS", color: "text-blue-400" },
              { icon: Heart, value: games[activeGame].likes, label: "LIKES", color: "text-red-400" }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-800/80 border border-slate-600/60 p-2 text-center hover:border-purple-400/40 transition-all group">
                  <IconComponent className={`w-3 h-3 mx-auto mb-1 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-xs font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
          
          <div className="space-y-2">
            <div className="bg-slate-800/60 border border-slate-600/40 p-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Version:</span>
                <span className="text-cyan-400 font-bold">{games[activeGame].version}</span>
              </div>
            </div>
            <div className="bg-slate-800/60 border border-slate-600/40 p-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Next Update:</span>
                <span className="text-green-400 font-bold text-xs">{games[activeGame].nextUpdate}</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-green-400 font-bold text-lg glow-text mb-2">{games[activeGame].price}</div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-3 py-2 font-bold transition-all duration-300 interactive-element text-xs shadow-lg hover:shadow-purple-500/40">
              <Play className="w-3 h-3 inline mr-1" />
              LAUNCH GAME
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Professional moving panels with diverse layouts
  const movingPanels = [
    // Featured Game Showcase - Advanced Layout
    <div key="featured" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900/95 to-slate-800/90 p-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-3 gap-6 h-full">
        {/* Main Feature */}
        <div className="lg:col-span-2 bg-slate-900/80 border border-purple-400/30 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Play className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-bold text-xl font-mono">FEATURED RELEASE</span>
              <div className="ml-auto bg-green-500/20 px-2 py-1 text-xs font-bold text-green-400">NEW</div>
            </div>
            
            <h3 className="text-white font-bold text-3xl font-mono mb-2">{games[activeGame].title}</h3>
            <div className="text-purple-400 font-bold text-lg mb-4">{games[activeGame].category}</div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">{games[activeGame].description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {games[activeGame].platforms.map((platform, index) => (
                <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold border border-cyan-400/30">
                  {platform}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-green-400 font-bold text-2xl">{games[activeGame].price}</div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-6 py-3 font-bold transition-all duration-300 interactive-element">
              <Play className="w-4 h-4 inline mr-2" />
              PLAY NOW
            </button>
          </div>
        </div>
        
        {/* Stats & Info */}
        <div className="space-y-4">
          <div className="bg-slate-900/80 border border-slate-600 p-4">
            <h4 className="text-white font-bold mb-3 flex items-center">
              <BarChart3 className="w-4 h-4 mr-2 text-green-400" />
              GAME STATS
            </h4>
            <div className="space-y-2">
              {[
                { label: "Rating", value: games[activeGame].rating, icon: Star, color: "text-yellow-400" },
                { label: "Downloads", value: games[activeGame].downloads, icon: Download, color: "text-green-400" },
                { label: "Players", value: games[activeGame].players, icon: Users, color: "text-blue-400" },
                { label: "Playtime", value: games[activeGame].playtime, icon: Clock, color: "text-purple-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`w-3 h-3 ${stat.color}`} />
                      <span className="text-slate-400">{stat.label}</span>
                    </div>
                    <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-slate-900/80 border border-slate-600 p-4">
            <h4 className="text-white font-bold mb-3 flex items-center">
              <Tag className="w-4 h-4 mr-2 text-cyan-400" />
              TAGS
            </h4>
            <div className="flex flex-wrap gap-1">
              {games[activeGame].tags.map((tag, index) => (
                <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold border border-cyan-400/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Development Updates & News
    <div key="devlogs" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950/95 to-slate-900/90 p-6">
      <div className="max-w-6xl w-full">
        <div className="flex items-center space-x-2 mb-6">
          <Code className="w-6 h-6 text-green-400" />
          <span className="text-green-400 font-bold text-2xl font-mono">DEVELOPMENT UPDATES</span>
          <div className="ml-auto bg-green-500/20 px-3 py-1 text-sm font-bold text-green-400">LIVE</div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Updates */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-900/80 border border-slate-600 p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <GitBranch className="w-5 h-5 mr-2 text-purple-400" />
                LATEST COMMITS
              </h3>
              <div className="space-y-3">
                {devUpdates.map((update, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700/50 hover:border-purple-400/50 transition-all">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 text-xs font-bold ${
                        update.type === 'FEATURE' ? 'bg-green-500 text-black' :
                        update.type === 'BUGFIX' ? 'bg-red-500 text-white' :
                        update.type === 'CONTENT' ? 'bg-blue-500 text-white' :
                        update.type === 'OPTIMIZATION' ? 'bg-yellow-500 text-black' : 'bg-purple-500 text-white'
                      }`}>
                        {update.type}
                      </span>
                      <div>
                        <div className="text-white font-bold text-sm">{update.title}</div>
                        <div className="text-slate-400 text-xs">{update.game}</div>
                      </div>
                    </div>
                    <div className="text-slate-400 text-xs">{update.time}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900/80 border border-slate-600 p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-cyan-400" />
                DEVELOPMENT STATS
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Lines of Code", value: "127K+", icon: Code },
                  { label: "Assets Created", value: "2.3K", icon: Image },
                  { label: "Bug Fixes", value: "847", icon: Shield }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center p-3 bg-slate-800/50 border border-slate-700">
                      <IconComponent className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                      <div className="text-white font-bold text-lg">{stat.value}</div>
                      <div className="text-slate-400 text-xs">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Quick Info */}
          <div className="space-y-4">
            <div className="bg-slate-900/80 border border-slate-600 p-4">
              <h4 className="text-white font-bold mb-3 flex items-center">
                <Activity className="w-4 h-4 mr-2 text-green-400" />
                ACTIVE PROJECTS
              </h4>
              <div className="space-y-2">
                {games.slice(0, 3).map((game, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30">
                    <div>
                      <div className="text-white font-bold text-sm">{game.title}</div>
                      <div className="text-slate-400 text-xs">{game.version}</div>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      game.status === 'RELEASED' ? 'bg-green-400' : 'bg-yellow-400'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-900/80 border border-slate-600 p-4">
              <h4 className="text-white font-bold mb-3 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-purple-400" />
                PERFORMANCE
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Total Downloads</span>
                  <span className="text-green-400 font-bold">15.4K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Avg Rating</span>
                  <span className="text-yellow-400 font-bold">4.7/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Active Players</span>
                  <span className="text-blue-400 font-bold">8.2K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Game Reviews & Community
    <div key="reviews" className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900/95 to-slate-800/90 p-6">
      <div className="max-w-6xl w-full">
        <div className="flex items-center space-x-2 mb-6">
          <MessageSquare className="w-6 h-6 text-blue-400" />
          <span className="text-blue-400 font-bold text-2xl font-mono">REVIEWS & COMMUNITY</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Professional Reviews */}
          <div className="space-y-4">
            <div className="bg-slate-900/80 border border-slate-600 p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                PROFESSIONAL REVIEWS
              </h3>
              <div className="space-y-4">
                {gameReviews.map((review, index) => (
                  <div key={index} className="p-4 bg-slate-800/50 border border-slate-700/50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-bold">{review.game}</div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 font-bold">{review.score}/10</span>
                      </div>
                    </div>
                    <div className="text-slate-400 text-sm mb-2">"{review.quote}"</div>
                    <div className="text-slate-500 text-xs">- {review.reviewer}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Community Stats */}
          <div className="space-y-4">
            <div className="bg-slate-900/80 border border-slate-600 p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                COMMUNITY ACTIVITY
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {[
                  { label: "Forum Posts", value: "1.2K", icon: MessageSquare },
                  { label: "Screenshots", value: "450", icon: Image },
                  { label: "Videos", value: "89", icon: Video },
                  { label: "Guides", value: "23", icon: BookOpen }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center p-3 bg-slate-800/50 border border-slate-700">
                      <IconComponent className="w-5 h-5 mx-auto mb-2 text-cyan-400" />
                      <div className="text-white font-bold">{stat.value}</div>
                      <div className="text-slate-400 text-xs">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              <div className="space-y-3">
                <div className="p-3 bg-slate-800/30 border border-slate-700/30">
                  <div className="text-white font-bold text-sm mb-1">Featured Screenshot</div>
                  <div className="text-slate-400 text-xs">Latest from Horror Chronicles community</div>
                </div>
                <div className="p-3 bg-slate-800/30 border border-slate-700/30">
                  <div className="text-white font-bold text-sm mb-1">Speedrun Record</div>
                  <div className="text-slate-400 text-xs">New Any% record: 23:47 by SpeedDemon92</div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900/80 border border-slate-600 p-6">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center">
                <Headphones className="w-5 h-5 mr-2 text-green-400" />
                MEDIA & CONTENT
              </h3>
              <div className="space-y-2">
                {[
                  { type: "Soundtrack", title: "Horror Chronicles OST", size: "45 tracks" },
                  { type: "Concept Art", title: "Strategic Conquest Artbook", size: "120 pages" },
                  { type: "Making Of", title: "Behind the Scenes Video", size: "28 min" }
                ].map((media, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30 hover:bg-slate-700/30 transition-all">
                    <div>
                      <div className="text-white font-bold text-sm">{media.title}</div>
                      <div className="text-slate-400 text-xs">{media.type}</div>
                    </div>
                    <div className="text-cyan-400 text-xs font-bold">{media.size}</div>
                  </div>
                ))}
              </div>
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

        {/* Professional Gaming Content Platform */}
        <HorizontalDragContainer 
          className="mb-8 h-[600px] bg-gradient-to-br from-slate-950/95 to-slate-900/90 border border-slate-700/40 backdrop-blur-lg shadow-2xl" 
          staticPanels={[gameLibraryPanel, gameDetailsPanel]}
          movingPanels={movingPanels}
          currentPanel={currentPanel}
          onPanelChange={setCurrentPanel}
          enableAutoplay={false}
          enableSnapPreview={false}
          dampingFactor={0.88}
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
