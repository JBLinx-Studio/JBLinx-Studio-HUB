import React, { useState } from 'react';
import { ArrowRight, Download, Star, Trophy, Play, Zap, Target, Gamepad2, Code, Terminal, Users, Clock, Shield, Heart, TrendingUp, Calendar, Tag, Eye, Image, Video, FileText, Bookmark, Share2, ThumbsUp, MessageCircle, Award, Crown, Flame, Sparkles, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [activeTab, setActiveTab] = useState('featured');

  const games = [
    {
      id: 1,
      title: "Cyber Nexus: Revolution",
      subtitle: "The Ultimate Cyberpunk Experience",
      category: "Action RPG",
      downloads: "125k",
      rating: "4.9",
      status: "RELEASED",
      description: "Immerse yourself in a neon-lit dystopian future where your choices shape the destiny of humanity. Experience cutting-edge graphics, dynamic storylines, and multiplayer battles.",
      tech: ["Unity", "C#", "Blender", "FMOD"],
      price: "$49.99",
      originalPrice: "$59.99",
      discount: "17%",
      players: "1-4",
      difficulty: "EXPERT",
      playtime: "80+ hrs",
      likes: "15.2k",
      views: "250k",
      comments: "3.4k",
      lastUpdate: "2 hours ago",
      tags: ["Cyberpunk", "Open World", "Multiplayer", "Story Rich"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
      video: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
      ],
      features: ["Ray Tracing", "4K HDR", "120 FPS", "VR Ready", "Cross-Platform"],
      devlog: {
        title: "Major Combat System Overhaul",
        content: "We've completely redesigned the combat mechanics based on community feedback...",
        date: "2 days ago",
        author: "Lead Developer"
      }
    },
    {
      id: 2,
      title: "Mystic Realms Online",
      subtitle: "Forge Your Legend",
      category: "MMORPG",
      downloads: "89k",
      rating: "4.8",
      status: "EARLY ACCESS",
      description: "Build your empire in a vast fantasy world with dynamic weather, AI-driven storylines, and epic guild wars. Join thousands of players in this immersive MMORPG experience.",
      tech: ["Unreal Engine", "C++", "AWS", "Redis"],
      price: "$39.99",
      originalPrice: "$49.99",
      discount: "20%",
      players: "1-200",
      difficulty: "MEDIUM",
      playtime: "500+ hrs",
      likes: "12.8k",
      views: "180k",
      comments: "2.1k",
      lastUpdate: "1 day ago",
      tags: ["Fantasy", "MMORPG", "PvP", "Guild Wars"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      video: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
      ],
      features: ["Dynamic World", "AI NPCs", "Guild Wars", "Crafting", "Weather System"],
      devlog: {
        title: "New Guild System Launch",
        content: "Introducing massive guild battles with up to 100v100 players...",
        date: "5 days ago",
        author: "Game Designer"
      }
    },
    {
      id: 3,
      title: "Quantum Racing Pro",
      subtitle: "Defy Physics",
      category: "Racing Sim",
      downloads: "67k",
      rating: "4.7",
      status: "RELEASED",
      description: "Experience gravity-defying races across impossible tracks in quantum dimensions. Master anti-gravity mechanics and compete in global esports tournaments.",
      tech: ["Unity", "Photon", "Wwise", "Blender"],
      price: "$34.99",
      originalPrice: "$39.99",
      discount: "13%",
      players: "1-32",
      difficulty: "HARD",
      playtime: "60+ hrs",
      likes: "9.5k",
      views: "145k",
      comments: "1.8k",
      lastUpdate: "3 days ago",
      tags: ["Racing", "Sci-Fi", "Competitive", "Physics"],
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      video: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
      ],
      features: ["Anti-Gravity", "Track Editor", "Pro Physics", "Esports", "Tournaments"],
      devlog: {
        title: "Track Editor Beta Release",
        content: "Create your own impossible racing tracks with our new editor...",
        date: "1 week ago",
        author: "Technical Lead"
      }
    },
    {
      id: 4,
      title: "Shadow Legends RPG",
      subtitle: "Epic Fantasy Adventure",
      category: "RPG",
      downloads: "45k",
      rating: "4.6",
      status: "BETA",
      description: "Embark on an epic journey through mystical lands filled with ancient magic, legendary creatures, and heroic quests that will test your courage.",
      tech: ["Unity", "Mirror", "MongoDB", "Node.js"],
      price: "FREE BETA",
      originalPrice: "$29.99",
      discount: "100%",
      players: "1-8",
      difficulty: "MEDIUM",
      playtime: "120+ hrs",
      likes: "8.2k",
      views: "98k",
      comments: "1.2k",
      lastUpdate: "4 days ago",
      tags: ["Fantasy", "Adventure", "Magic", "Co-op"],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      video: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
      ],
      features: ["Magic System", "Co-op Play", "Character Classes", "Quests", "Exploration"],
      devlog: {
        title: "Magic System Redesign",
        content: "We're implementing a completely new spell casting system...",
        date: "1 week ago",
        author: "Gameplay Designer"
      }
    }
  ];

  const gameCategories = [
    { id: 'all', name: 'All Games', icon: Gamepad2, count: games.length },
    { id: 'action', name: 'Action', icon: Zap, count: 2 },
    { id: 'rpg', name: 'RPG', icon: Shield, count: 2 },
    { id: 'racing', name: 'Racing', icon: Target, count: 1 },
    { id: 'mmo', name: 'MMO', icon: Users, count: 1 }
  ];

  const verticalTabs = [
    { id: 'featured', label: 'FEATURED', icon: Crown },
    { id: 'library', label: 'LIBRARY', icon: Gamepad2 },
    { id: 'updates', label: 'UPDATES', icon: TrendingUp },
    { id: 'devlogs', label: 'DEV LOGS', icon: Code },
    { id: 'videos', label: 'VIDEOS', icon: Video },
    { id: 'screenshots', label: 'GALLERY', icon: Image },
    { id: 'community', label: 'COMMUNITY', icon: Users },
    { id: 'store', label: 'STORE', icon: Trophy }
  ];

  // Full-width static panels with perfect mobile fitting
  const gameLibraryPanel = (
    <div className="w-full max-w-[320px] h-full p-3 flex flex-col bg-slate-900/98 border-r border-slate-700/50 backdrop-blur-sm">
      {/* Compact Vertical Tabs */}
      <div className="flex flex-col space-y-0.5 mb-3">
        {verticalTabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 p-2.5 text-left transition-all duration-300 interactive-element text-xs font-bold ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-l-3 border-purple-400 text-purple-300' 
                  : 'text-slate-400 hover:text-purple-400 hover:bg-slate-800/30'
              }`}
            >
              <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Scrollable Tab Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {activeTab === 'library' && (
          <div className="space-y-1.5">
            <div className="flex items-center space-x-2 mb-2">
              <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-purple-400 font-black text-xs">GAME COLLECTION</span>
            </div>
            {games.map((game, index) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(index)}
                className={`w-full text-left p-2.5 border transition-all duration-300 interactive-element text-xs ${
                  activeGame === index 
                    ? 'border-purple-400 bg-purple-500/20' 
                    : 'border-slate-600 bg-slate-800/30 hover:border-purple-400/50'
                }`}
              >
                <div className="text-white font-bold mb-1 line-clamp-1">{game.title}</div>
                <div className="flex items-center justify-between mb-1">
                  <span className={`px-1.5 py-0.5 text-xs font-bold ${
                    game.status === 'RELEASED' ? 'bg-green-500 text-black' : 
                    game.status === 'EARLY ACCESS' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'
                  }`}>
                    {game.status}
                  </span>
                  <div className="text-slate-400 text-xs">{game.category}</div>
                </div>
                <div className="text-green-400 font-bold">{game.price}</div>
              </button>
            ))}
          </div>
        )}

        {activeTab === 'featured' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Crown className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-yellow-400 font-black text-xs">TOP PICKS</span>
            </div>
            {games.slice(0, 3).map((game, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 p-2.5">
                <div className="flex items-center space-x-2 mb-1.5">
                  <Trophy className="w-3 h-3 text-yellow-400" />
                  <div className="text-white font-bold text-xs line-clamp-1">{game.title}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-green-400 font-bold text-xs">{game.price}</div>
                  <div className="text-yellow-400 font-bold text-xs">★{game.rating}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'updates' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400 font-black text-xs">LATEST UPDATES</span>
            </div>
            {games.slice(0, 4).map((game, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 p-2.5">
                <div className="text-white font-bold text-xs mb-1 line-clamp-1">{game.title}</div>
                <div className="text-slate-400 text-xs mb-1.5">{game.lastUpdate}</div>
                <div className="flex items-center space-x-2">
                  <div className="text-green-400 font-bold text-xs">{game.downloads} downloads</div>
                  <div className="text-yellow-400 font-bold text-xs">★{game.rating}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'devlogs' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-cyan-400 font-black text-xs">DEV INSIGHTS</span>
            </div>
            {games.map((game, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 p-2.5">
                <div className="text-white font-bold text-xs mb-1 line-clamp-1">{game.devlog.title}</div>
                <div className="text-cyan-400 text-xs mb-1">{game.title}</div>
                <div className="text-slate-300 text-xs mb-1.5 line-clamp-2">{game.devlog.content}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-cyan-400">{game.devlog.author}</span>
                  <span className="text-slate-400">{game.devlog.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'community' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Users className="w-3.5 h-3.5 text-pink-400" />
              <span className="text-pink-400 font-black text-xs">COMMUNITY STATS</span>
            </div>
            {games.map((game, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 p-2.5">
                <div className="text-white font-bold text-xs mb-1.5 line-clamp-1">{game.title}</div>
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div>
                    <Heart className="w-3 h-3 mx-auto mb-0.5 text-red-400" />
                    <div className="text-xs font-bold text-white">{game.likes}</div>
                  </div>
                  <div>
                    <Eye className="w-3 h-3 mx-auto mb-0.5 text-blue-400" />
                    <div className="text-xs font-bold text-white">{game.views}</div>
                  </div>
                  <div>
                    <MessageCircle className="w-3 h-3 mx-auto mb-0.5 text-green-400" />
                    <div className="text-xs font-bold text-white">{game.comments}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Video className="w-3.5 h-3.5 text-red-400" />
              <span className="text-red-400 font-black text-xs">GAME TRAILERS</span>
            </div>
            {games.map((game, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 p-2.5">
                <div className="relative mb-1.5">
                  <img src={game.video} alt={game.title} className="w-full h-16 object-cover border border-slate-600" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="text-white font-bold text-xs line-clamp-1">{game.title}</div>
                <div className="text-slate-400 text-xs">{game.category}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'screenshots' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Image className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-blue-400 font-black text-xs">SCREENSHOTS</span>
            </div>
            {games.map((game, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 p-2.5">
                <div className="grid grid-cols-2 gap-1 mb-1.5">
                  {game.screenshots.slice(0, 2).map((screenshot, idx) => (
                    <img key={idx} src={screenshot} alt={`Screenshot ${idx + 1}`} className="w-full h-12 object-cover border border-slate-600" />
                  ))}
                </div>
                <div className="text-white font-bold text-xs line-clamp-1">{game.title}</div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'store' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-2 mb-2">
              <Trophy className="w-3.5 h-3.5 text-orange-400" />
              <span className="text-orange-400 font-black text-xs">GAME STORE</span>
            </div>
            {games.map((game, index) => (
              <div key={index} className="bg-slate-800/50 border border-slate-600 p-2.5">
                <div className="text-white font-bold text-xs mb-1 line-clamp-1">{game.title}</div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-green-400 font-bold text-xs">{game.price}</div>
                  {game.discount && (
                    <div className="bg-red-500 text-white px-1.5 py-0.5 text-xs font-bold">
                      -{game.discount}
                    </div>
                  )}
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-500 text-white px-2 py-1.5 text-xs font-bold transition-colors interactive-element">
                  {game.price === "FREE BETA" ? "DOWNLOAD" : "BUY NOW"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const gameDetailsPanel = (
    <div className="w-full max-w-[320px] h-full p-3 bg-slate-900/98 border-r border-slate-700/50 flex flex-col backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-3">
        <Target className="w-3.5 h-3.5 text-green-400" />
        <span className="text-green-400 font-black text-xs">GAME SPOTLIGHT</span>
      </div>
      
      {/* Compact Game Header */}
      <div className="mb-3">
        <h3 className="text-white font-black text-base font-mono leading-tight line-clamp-1">{games[activeGame].title}</h3>
        <div className="text-purple-400 font-bold text-sm line-clamp-1">{games[activeGame].subtitle}</div>
        <div className="text-cyan-400 font-bold text-xs">{games[activeGame].category}</div>
      </div>

      {/* Compact Price Section */}
      <div className="bg-slate-800/80 border border-slate-600 p-2.5 mb-3">
        <div className="flex items-center justify-between">
          <div>
            {games[activeGame].discount && (
              <div className="bg-green-500 text-black px-1.5 py-0.5 text-xs font-black mb-1">
                -{games[activeGame].discount} OFF
              </div>
            )}
            <div className="text-green-400 font-black text-lg">{games[activeGame].price}</div>
            {games[activeGame].originalPrice && games[activeGame].price !== games[activeGame].originalPrice && (
              <div className="text-slate-400 line-through text-xs">{games[activeGame].originalPrice}</div>
            )}
          </div>
          <div className={`px-2 py-1 text-xs font-black ${
            games[activeGame].status === 'RELEASED' ? 'bg-green-500 text-black' : 
            games[activeGame].status === 'EARLY ACCESS' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'
          }`}>
            {games[activeGame].status}
          </div>
        </div>
      </div>
      
      {/* Compact Stats Grid */}
      <div className="grid grid-cols-2 gap-1.5 mb-3">
        {[
          { icon: Star, value: games[activeGame].rating, label: "RATING", color: "text-yellow-400" },
          { icon: Download, value: games[activeGame].downloads, label: "DOWNLOADS", color: "text-green-400" },
          { icon: Heart, value: games[activeGame].likes, label: "LIKES", color: "text-red-400" },
          { icon: Eye, value: games[activeGame].views, label: "VIEWS", color: "text-blue-400" }
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-slate-800/80 border border-slate-600 p-1.5 text-center">
              <IconComponent className={`w-3 h-3 mx-auto mb-0.5 ${stat.color}`} />
              <div className="text-xs font-black text-white">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400">{stat.label}</div>
            </div>
          );
        })}
      </div>
      
      {/* Scrollable Game Info */}
      <div className="space-y-2 mb-3 flex-1 overflow-y-auto scrollbar-hide">
        <div>
          <div className="text-slate-300 text-xs font-bold mb-1">DESCRIPTION</div>
          <div className="text-slate-400 text-xs leading-relaxed line-clamp-3">{games[activeGame].description}</div>
        </div>
        
        <div>
          <div className="text-slate-300 text-xs font-bold mb-1">FEATURES</div>
          <div className="flex flex-wrap gap-1">
            {games[activeGame].features.slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-1.5 py-0.5 text-xs font-bold">
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <div className="text-slate-300 text-xs font-bold mb-1">TAGS</div>
          <div className="flex flex-wrap gap-1">
            {games[activeGame].tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="bg-slate-700/50 text-cyan-400 px-1.5 py-0.5 text-xs font-bold border border-slate-600">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Compact Action Buttons */}
      <div className="space-y-1.5">
        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-3 py-2.5 font-black transition-all duration-300 interactive-element text-xs flex items-center justify-center space-x-1.5">
          <Download className="w-3.5 h-3.5" />
          <span>{games[activeGame].price === "FREE BETA" ? "DOWNLOAD FREE" : "BUY NOW"}</span>
        </button>
        <div className="grid grid-cols-3 gap-1.5">
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-2 py-1.5 font-bold transition-colors flex items-center justify-center interactive-element">
            <Play className="w-3 h-3" />
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-2 py-1.5 font-bold transition-colors flex items-center justify-center interactive-element">
            <Bookmark className="w-3 h-3" />
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-2 py-1.5 font-bold transition-colors flex items-center justify-center interactive-element">
            <Share2 className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );

  // Full-width moving panels optimized for mobile
  const movingPanels = [
    // Featured Game Showcase Panel - Full Width
    <div className="w-full h-full p-4 bg-gradient-to-br from-slate-900/95 to-slate-950/95 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="bg-slate-900/80 border border-purple-400/30 p-4 backdrop-blur-sm">
          {/* Compact Header */}
          <div className="flex items-center space-x-2 mb-4">
            <Crown className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-black text-lg font-mono">FEATURED RELEASE</span>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black px-2 py-1 text-xs font-black">
              NEW
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Main Game Preview */}
            <div className="lg:col-span-2">
              <div className="relative mb-3">
                <img 
                  src={games[activeGame].image} 
                  alt={games[activeGame].title}
                  className="w-full h-48 object-cover border border-slate-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <button className="bg-purple-500 hover:bg-purple-600 text-black px-4 py-2 font-black flex items-center space-x-1.5 transition-colors interactive-element text-sm">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>WATCH TRAILER</span>
                    </button>
                    
                    <div className="flex space-x-1.5">
                      <button className="bg-black/50 hover:bg-black/70 p-1.5 backdrop-blur-sm transition-colors interactive-element">
                        <Heart className="w-3.5 h-3.5 text-white" />
                      </button>
                      <button className="bg-black/50 hover:bg-black/70 p-1.5 backdrop-blur-sm transition-colors interactive-element">
                        <Share2 className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <h3 className="text-white font-black text-2xl font-mono mb-1 line-clamp-1">{games[activeGame].title}</h3>
                <div className="text-purple-400 font-bold text-lg mb-1 line-clamp-1">{games[activeGame].subtitle}</div>
                <div className="text-cyan-400 font-bold text-base">{games[activeGame].category}</div>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-3 line-clamp-3">{games[activeGame].description}</p>
              
              {/* Compact Screenshots */}
              <div className="grid grid-cols-3 gap-1.5">
                {games[activeGame].screenshots.map((screenshot, index) => (
                  <img 
                    key={index}
                    src={screenshot} 
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-16 object-cover border border-slate-600 hover:border-purple-400 transition-colors cursor-pointer"
                  />
                ))}
              </div>
            </div>
            
            {/* Compact Game Details */}
            <div className="space-y-3">
              {/* Price & Purchase */}
              <div className="bg-slate-800/80 border border-slate-600 p-3">
                <div className="text-center mb-3">
                  {games[activeGame].discount && (
                    <div className="bg-green-500 text-black px-2 py-1 text-sm font-black mb-2">
                      SAVE {games[activeGame].discount}!
                    </div>
                  )}
                  <div className="text-green-400 font-black text-2xl mb-1">{games[activeGame].price}</div>
                  {games[activeGame].originalPrice && games[activeGame].price !== games[activeGame].originalPrice && (
                    <div className="text-slate-400 line-through text-base">{games[activeGame].originalPrice}</div>
                  )}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 py-3 font-black transition-all duration-300 text-sm interactive-element">
                  {games[activeGame].price === "FREE BETA" ? "DOWNLOAD FREE" : "BUY NOW"}
                </button>
              </div>

              {/* Platform Support */}
              <div className="bg-slate-800/80 border border-slate-600 p-3">
                <div className="text-white font-bold text-sm mb-2">PLATFORMS</div>
                <div className="flex justify-center space-x-3">
                  <Monitor className="w-6 h-6 text-purple-400" />
                  <Smartphone className="w-6 h-6 text-green-400" />
                  <Tablet className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              
              {/* Compact Stats */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Users, value: games[activeGame].players, label: "PLAYERS" },
                  { icon: Clock, value: games[activeGame].playtime, label: "TIME" },
                  { icon: Shield, value: games[activeGame].difficulty, label: "LEVEL" },
                  { icon: Calendar, value: games[activeGame].lastUpdate, label: "UPDATED" }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-slate-800/80 border border-slate-600 p-2 text-center">
                      <IconComponent className="w-3.5 h-3.5 mx-auto mb-1 text-purple-400" />
                      <div className="text-xs font-black text-white line-clamp-1">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              {/* Features */}
              <div className="bg-slate-800/80 border border-slate-600 p-3">
                <div className="text-white font-bold text-sm mb-2">KEY FEATURES</div>
                <div className="space-y-1.5">
                  {games[activeGame].features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-1.5 text-sm text-slate-300">
                      <Sparkles className="w-3 h-3 text-purple-400 flex-shrink-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Game Store Panel - Full Width
    <div className="w-full h-full p-4 bg-slate-950/95 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-center space-x-2 mb-6">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-black text-lg font-mono">GAME STORE</span>
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-2 py-1 text-xs font-black">
            DEALS
          </div>
        </div>
        
        {/* Compact Category Filters */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {gameCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button key={category.id} className="flex items-center space-x-1.5 bg-slate-800/80 border border-slate-600 hover:border-purple-400/50 px-3 py-1.5 transition-all duration-300 interactive-element">
                <IconComponent className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-white font-bold text-sm">{category.name}</span>
                <span className="bg-purple-500 text-black px-1.5 py-0.5 text-xs font-bold">{category.count}</span>
              </button>
            );
          })}
        </div>
        
        {/* Responsive Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {games.map((game, index) => (
            <div key={game.id} className="bg-slate-800/80 border border-slate-600 hover:border-purple-400/50 transition-all duration-300 interactive-element group overflow-hidden">
              {/* Compact Game Image */}
              <div className="relative h-24 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute top-1.5 left-1.5">
                    <span className={`px-1.5 py-0.5 text-xs font-bold ${
                      game.status === 'RELEASED' ? 'bg-green-500 text-black' : 
                      game.status === 'EARLY ACCESS' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                  {game.discount && (
                    <div className="absolute top-1.5 right-1.5 bg-red-500 text-white px-1.5 py-0.5 text-xs font-bold">
                      -{game.discount}
                    </div>
                  )}
                  <div className="absolute bottom-1.5 right-1.5">
                    <div className="bg-slate-900/80 text-white px-1.5 py-0.5 text-xs backdrop-blur-sm flex items-center space-x-0.5">
                      <Star className="w-2.5 h-2.5 text-yellow-400" />
                      <span>{game.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Compact Game Content */}
              <div className="p-2.5">
                <h4 className="text-white font-bold text-sm mb-1 line-clamp-1">{game.title}</h4>
                <div className="text-purple-400 text-xs mb-1.5">{game.category}</div>
                
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-green-400 font-bold text-sm">{game.price}</div>
                    {game.originalPrice && game.price !== game.originalPrice && (
                      <div className="text-slate-400 line-through text-xs">{game.originalPrice}</div>
                    )}
                  </div>
                  <div className="text-slate-400 text-xs">{game.downloads}</div>
                </div>
                
                {/* Compact Tags */}
                <div className="flex flex-wrap gap-0.5 mb-2">
                  {game.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-slate-700 text-cyan-400 px-1.5 py-0.5 text-xs font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-slate-700 hover:bg-purple-600 text-white px-3 py-1.5 text-xs font-bold transition-all duration-300 interactive-element">
                  {game.price === "FREE BETA" ? "DOWNLOAD" : "BUY NOW"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Development Insights Panel - Full Width
    <div className="w-full h-full p-4 bg-slate-900/95 flex items-center justify-center">
      <div className="w-full max-w-6xl">
        <div className="flex items-center space-x-2 mb-6">
          <Code className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-black text-lg font-mono">DEV INSIGHTS</span>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-2 py-1 text-xs font-black">
            BEHIND THE SCENES
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Dev Logs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Latest Dev Logs</span>
            </h3>
            <div className="space-y-3">
              {games.map((game, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 p-3 hover:border-cyan-400/50 transition-colors">
                  <div className="flex items-start space-x-2.5">
                    <img src={game.image} alt={game.title} className="w-12 h-12 object-cover border border-slate-600 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-bold text-sm mb-1 line-clamp-1">{game.devlog.title}</div>
                      <div className="text-cyan-400 text-xs font-bold mb-1">{game.title}</div>
                      <div className="text-slate-300 text-xs mb-1.5 line-clamp-2">{game.devlog.content}</div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">{game.devlog.author}</span>
                        <span className="text-slate-400">{game.devlog.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Stats */}
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-bold text-lg mb-3 flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span>Tech Stack</span>
              </h3>
              <div className="bg-slate-800/50 border border-slate-700 p-3">
                <div className="grid grid-cols-2 gap-2.5">
                  {Array.from(new Set(games.flatMap(game => game.tech))).slice(0, 8).map((tech, index) => (
                    <div key={index} className="flex items-center space-x-1.5">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-3 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>Development Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/50 border border-slate-700 p-3 text-center">
                  <Trophy className="w-6 h-6 mx-auto mb-1.5 text-yellow-400" />
                  <div className="text-xl font-black text-white mb-1">{games.length}</div>
                  <div className="text-slate-400 text-sm">Active Projects</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-3 text-center">
                  <Users className="w-6 h-6 mx-auto mb-1.5 text-blue-400" />
                  <div className="text-xl font-black text-white mb-1">50k+</div>
                  <div className="text-slate-400 text-sm">Total Players</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-3 text-center">
                  <Download className="w-6 h-6 mx-auto mb-1.5 text-green-400" />
                  <div className="text-xl font-black text-white mb-1">326k</div>
                  <div className="text-slate-400 text-sm">Downloads</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-3 text-center">
                  <Star className="w-6 h-6 mx-auto mb-1.5 text-purple-400" />
                  <div className="text-xl font-black text-white mb-1">4.8</div>
                  <div className="text-slate-400 text-sm">Avg Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Full-width container with cinematic spacing */}
      <div className="px-4 lg:px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-3 py-1.5 mb-3 backdrop-blur-sm">
            <Crown className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">PRIORITY #1: GAMERS</span>
            <Flame className="w-3.5 h-3.5 ml-1.5 text-orange-400" />
          </div>
          
          <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            PREMIUM <span className="text-purple-400">GAMING</span> + <span className="text-pink-400">DEV CONTENT</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-4">
            Discover our complete gaming ecosystem with premium titles, development insights, 
            community features, and exclusive content. Experience next-generation gaming.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1.5">
              <Trophy className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-white font-bold">{games.length} Games</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Users className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-white font-bold">50k+ Players</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Download className="w-3.5 h-3.5 text-green-400" />
              <span className="text-white font-bold">326k Downloads</span>
            </div>
          </div>
        </div>

        {/* Full-width Enhanced Horizontal Container */}
        <div className="w-full">
          <HorizontalDragContainer 
            className="mb-8 h-[600px] w-full" 
            staticPanels={[gameLibraryPanel, gameDetailsPanel]}
            movingPanels={movingPanels}
            currentPanel={currentPanel}
            onPanelChange={setCurrentPanel}
          />
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-black px-6 py-3 font-black transition-all duration-300 space-x-2 shadow-2xl text-sm interactive-element group"
          >
            <Trophy className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>EXPLORE COMPLETE GAMING UNIVERSE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
