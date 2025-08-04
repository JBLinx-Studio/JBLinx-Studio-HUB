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
    { id: 'community', label: 'COMMUNITY', icon: Users },
    { id: 'store', label: 'STORE', icon: Trophy }
  ];

  // Compact sidebar panel with improved organization
  const gameLibraryPanel = (
    <div className="w-72 h-full flex flex-col bg-slate-900/98 border-r border-slate-700/50 backdrop-blur-sm">
      {/* Compact header */}
      <div className="p-3 border-b border-slate-700/30">
        <div className="flex items-center space-x-2">
          <Crown className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 font-bold text-sm tracking-wide">GAMING HUB</span>
        </div>
      </div>

      {/* Vertical tabs - more compact */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col">
          {verticalTabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-slate-800/80 border-r-2 border-purple-400 text-purple-300' 
                    : 'text-slate-400 hover:text-purple-400 hover:bg-slate-800/40'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="font-semibold text-xs">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab content - compact and organized */}
        <div className="flex-1 overflow-y-auto p-3">
          {activeTab === 'featured' && (
            <div className="space-y-2">
              {games.slice(0, 3).map((game, index) => (
                <div key={index} className="bg-slate-800/60 border border-slate-600/50 p-3 rounded">
                  <div className="flex items-center space-x-2 mb-1">
                    <Trophy className="w-3 h-3 text-yellow-400" />
                    <div className="text-white font-semibold text-xs">{game.title}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-green-400 font-bold text-xs">{game.price}</div>
                    <div className="text-yellow-400 font-bold text-xs">★{game.rating}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'library' && (
            <div className="space-y-2">
              {games.map((game, index) => (
                <button
                  key={game.id}
                  onClick={() => setActiveGame(index)}
                  className={`w-full text-left p-3 border rounded transition-all duration-200 ${
                    activeGame === index 
                      ? 'border-purple-400/60 bg-purple-500/20' 
                      : 'border-slate-600/50 bg-slate-800/40 hover:border-purple-400/30'
                  }`}
                >
                  <div className="text-white font-semibold text-xs mb-1">{game.title}</div>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`px-2 py-0.5 text-xs font-bold rounded ${
                      game.status === 'RELEASED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                      game.status === 'EARLY ACCESS' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {game.status}
                    </span>
                    <div className="text-slate-400 text-xs">{game.category}</div>
                  </div>
                  <div className="text-green-400 font-bold text-xs">{game.price}</div>
                </button>
              ))}
            </div>
          )}

          {activeTab === 'updates' && (
            <div className="space-y-2">
              {games.slice(0, 4).map((game, index) => (
                <div key={index} className="bg-slate-800/40 border border-slate-600/50 p-3 rounded">
                  <div className="text-white font-semibold text-xs mb-1">{game.title}</div>
                  <div className="text-slate-400 text-xs mb-2">{game.lastUpdate}</div>
                  <div className="flex items-center space-x-3">
                    <div className="text-green-400 font-bold text-xs">{game.downloads}</div>
                    <div className="text-yellow-400 font-bold text-xs">★{game.rating}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'devlogs' && (
            <div className="space-y-2">
              {games.map((game, index) => (
                <div key={index} className="bg-slate-800/40 border border-slate-600/50 p-3 rounded">
                  <div className="text-white font-semibold text-xs mb-1">{game.devlog.title}</div>
                  <div className="text-cyan-400 text-xs mb-2">{game.title}</div>
                  <div className="text-slate-300 text-xs mb-2 line-clamp-2">{game.devlog.content}</div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{game.devlog.author}</span>
                    <span className="text-slate-400">{game.devlog.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'community' && (
            <div className="space-y-2">
              {games.map((game, index) => (
                <div key={index} className="bg-slate-800/40 border border-slate-600/50 p-3 rounded">
                  <div className="text-white font-semibold text-xs mb-2">{game.title}</div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <Heart className="w-3 h-3 mx-auto mb-1 text-red-400" />
                      <div className="text-xs font-bold text-white">{game.likes}</div>
                    </div>
                    <div>
                      <Eye className="w-3 h-3 mx-auto mb-1 text-blue-400" />
                      <div className="text-xs font-bold text-white">{game.views}</div>
                    </div>
                    <div>
                      <MessageCircle className="w-3 h-3 mx-auto mb-1 text-green-400" />
                      <div className="text-xs font-bold text-white">{game.comments}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'store' && (
            <div className="space-y-2">
              {gameCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button key={category.id} className="w-full flex items-center justify-between p-3 bg-slate-800/40 border border-slate-600/50 rounded hover:border-purple-400/30 transition-colors">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-purple-400" />
                      <span className="text-white font-semibold text-xs">{category.name}</span>
                    </div>
                    <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 text-xs font-bold rounded">{category.count}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // Compact details panel with better organization
  const gameDetailsPanel = (
    <div className="w-80 h-full flex flex-col bg-slate-900/98 border-r border-slate-700/50 backdrop-blur-sm">
      {/* Compact header */}
      <div className="p-3 border-b border-slate-700/30">
        <div className="flex items-center space-x-2">
          <Target className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-bold text-sm tracking-wide">GAME DETAILS</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Game header - compact */}
        <div>
          <h3 className="text-white font-bold text-lg leading-tight">{games[activeGame].title}</h3>
          <div className="text-purple-400 font-semibold text-sm">{games[activeGame].subtitle}</div>
          <div className="text-cyan-400 font-semibold text-xs">{games[activeGame].category}</div>
        </div>

        {/* Price section - more compact */}
        <div className="bg-slate-800/60 border border-slate-600/50 p-3 rounded">
          <div className="flex items-center justify-between">
            <div>
              {games[activeGame].discount && (
                <div className="bg-green-500 text-black px-2 py-1 text-xs font-bold mb-1 rounded">
                  -{games[activeGame].discount} OFF
                </div>
              )}
              <div className="text-green-400 font-bold text-xl">{games[activeGame].price}</div>
              {games[activeGame].originalPrice && games[activeGame].price !== games[activeGame].originalPrice && (
                <div className="text-slate-400 line-through text-sm">{games[activeGame].originalPrice}</div>
              )}
            </div>
            <div className={`px-3 py-1 text-xs font-bold rounded ${
              games[activeGame].status === 'RELEASED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
              games[activeGame].status === 'EARLY ACCESS' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
              'bg-blue-500/20 text-blue-400 border border-blue-500/30'
            }`}>
              {games[activeGame].status}
            </div>
          </div>
        </div>
        
        {/* Stats grid - more compact */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Star, value: games[activeGame].rating, label: "RATING", color: "text-yellow-400" },
            { icon: Download, value: games[activeGame].downloads, label: "DOWNLOADS", color: "text-green-400" },
            { icon: Heart, value: games[activeGame].likes, label: "LIKES", color: "text-red-400" },
            { icon: Eye, value: games[activeGame].views, label: "VIEWS", color: "text-blue-400" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800/60 border border-slate-600/50 p-3 text-center rounded">
                <IconComponent className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
                <div className="text-xs font-bold text-white">{stat.value}</div>
                <div className="text-xs font-semibold text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Game info - compact sections */}
        <div className="space-y-3">
          <div>
            <div className="text-slate-300 text-xs font-bold mb-2">DESCRIPTION</div>
            <div className="text-slate-400 text-xs leading-relaxed line-clamp-3">{games[activeGame].description}</div>
          </div>
          
          <div>
            <div className="text-slate-300 text-xs font-bold mb-2">KEY FEATURES</div>
            <div className="flex flex-wrap gap-1">
              {games[activeGame].features.slice(0, 4).map((feature, index) => (
                <span key={index} className="bg-purple-500/20 text-purple-300 px-2 py-1 text-xs font-semibold border border-purple-400/30 rounded">
                  {feature}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <div className="text-slate-300 text-xs font-bold mb-2">TAGS</div>
            <div className="flex flex-wrap gap-1">
              {games[activeGame].tags.slice(0, 4).map((tag, index) => (
                <span key={index} className="bg-slate-700/50 text-cyan-400 px-2 py-1 text-xs font-semibold border border-slate-600 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action buttons - compact */}
        <div className="space-y-2 pt-2">
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 py-3 font-bold transition-all duration-200 text-sm flex items-center justify-center space-x-2 rounded">
            <Download className="w-4 h-4" />
            <span>{games[activeGame].price === "FREE BETA" ? "DOWNLOAD FREE" : "BUY NOW"}</span>
          </button>
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-slate-700/80 hover:bg-slate-600 text-white px-3 py-2 font-semibold transition-colors flex items-center justify-center rounded">
              <Play className="w-4 h-4" />
            </button>
            <button className="bg-slate-700/80 hover:bg-slate-600 text-white px-3 py-2 font-semibold transition-colors flex items-center justify-center rounded">
              <Bookmark className="w-4 h-4" />
            </button>
            <button className="bg-slate-700/80 hover:bg-slate-600 text-white px-3 py-2 font-semibold transition-colors flex items-center justify-center rounded">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced moving panels with better proportions and content organization
  const movingPanels = [
    // Featured showcase - more compact and organized
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-950/98 to-slate-900/98 p-6">
      <div className="max-w-6xl w-full">
        <div className="bg-slate-900/90 border border-slate-700/50 p-6 backdrop-blur-sm rounded">
          {/* Compact header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Crown className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-xl">FEATURED RELEASE</span>
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-black px-2 py-1 text-xs font-bold rounded">
                NEW
              </div>
            </div>
            <div className="text-slate-400 text-sm">Game {activeGame + 1} of {games.length}</div>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Game preview - better proportions */}
            <div className="lg:col-span-3">
              <div className="relative mb-4">
                <img 
                  src={games[activeGame].image} 
                  alt={games[activeGame].title}
                  className="w-full h-80 object-cover border border-slate-600/50 rounded"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <button className="bg-purple-500 hover:bg-purple-600 text-black px-4 py-2 font-bold flex items-center space-x-2 transition-colors rounded">
                      <Play className="w-4 h-4 fill-current" />
                      <span>WATCH TRAILER</span>
                    </button>
                    
                    <div className="flex space-x-2">
                      <button className="bg-black/50 hover:bg-black/70 p-2 backdrop-blur-sm transition-colors rounded">
                        <Heart className="w-4 h-4 text-white" />
                      </button>
                      <button className="bg-black/50 hover:bg-black/70 p-2 backdrop-blur-sm transition-colors rounded">
                        <Share2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-white font-bold text-2xl mb-2">{games[activeGame].title}</h3>
                <div className="text-purple-400 font-semibold text-lg mb-1">{games[activeGame].subtitle}</div>
                <div className="text-cyan-400 font-semibold text-base">{games[activeGame].category}</div>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">{games[activeGame].description}</p>
              
              {/* Compact screenshots */}
              <div className="grid grid-cols-3 gap-2">
                {games[activeGame].screenshots.map((screenshot, index) => (
                  <img 
                    key={index}
                    src={screenshot} 
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-16 object-cover border border-slate-600/50 hover:border-purple-400/50 transition-colors cursor-pointer rounded"
                  />
                ))}
              </div>
            </div>
            
            {/* Game details sidebar - better organized */}
            <div className="lg:col-span-2 space-y-4">
              {/* Price section */}
              <div className="bg-slate-800/80 border border-slate-600/50 p-4 rounded">
                <div className="text-center">
                  {games[activeGame].discount && (
                    <div className="bg-green-500 text-black px-3 py-1 text-sm font-bold mb-2 rounded">
                      SAVE {games[activeGame].discount}!
                    </div>
                  )}
                  <div className="text-green-400 font-bold text-2xl mb-2">{games[activeGame].price}</div>
                  {games[activeGame].originalPrice && games[activeGame].price !== games[activeGame].originalPrice && (
                    <div className="text-slate-400 line-through text-base">{games[activeGame].originalPrice}</div>
                  )}
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 py-3 font-bold transition-all duration-200 text-base rounded">
                  {games[activeGame].price === "FREE BETA" ? "DOWNLOAD FREE" : "BUY NOW"}
                </button>
              </div>

              {/* Platform support - compact */}
              <div className="bg-slate-800/80 border border-slate-600/50 p-4 rounded">
                <div className="text-white font-semibold text-sm mb-3">PLATFORMS</div>
                <div className="flex justify-center space-x-6">
                  <Monitor className="w-6 h-6 text-purple-400" />
                  <Smartphone className="w-6 h-6 text-green-400" />
                  <Tablet className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              
              {/* Stats grid - compact */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: Users, value: games[activeGame].players, label: "PLAYERS" },
                  { icon: Clock, value: games[activeGame].playtime, label: "PLAYTIME" },
                  { icon: Shield, value: games[activeGame].difficulty, label: "DIFFICULTY" },
                  { icon: Calendar, value: games[activeGame].lastUpdate, label: "UPDATED" }
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-slate-800/80 border border-slate-600/50 p-3 text-center rounded">
                      <IconComponent className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                      <div className="text-xs font-bold text-white">{stat.value}</div>
                      <div className="text-xs font-semibold text-slate-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              {/* Key features - compact */}
              <div className="bg-slate-800/80 border border-slate-600/50 p-4 rounded">
                <div className="text-white font-semibold text-sm mb-3">KEY FEATURES</div>
                <div className="space-y-2">
                  {games[activeGame].features.slice(0, 5).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-slate-300">
                      <Sparkles className="w-3 h-3 text-purple-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Game store panel - more organized and compact
    <div className="w-full h-full flex items-center justify-center bg-slate-950/98 p-6">
      <div className="max-w-7xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-xl">GAME STORE</span>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-black px-2 py-1 text-xs font-bold rounded">
              DEALS
            </div>
          </div>
          <div className="text-slate-400 text-sm">{games.length} Games Available</div>
        </div>
        
        {/* Compact category filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {gameCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button key={category.id} className="flex items-center space-x-2 bg-slate-800/80 border border-slate-600/50 hover:border-purple-400/50 px-3 py-2 transition-all duration-200 rounded">
                <IconComponent className="w-4 h-4 text-purple-400" />
                <span className="text-white font-semibold text-sm">{category.name}</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 text-xs font-bold rounded">{category.count}</span>
              </button>
            );
          })}
        </div>
        
        {/* Games grid - better organized */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {games.map((game, index) => (
            <div key={game.id} className="bg-slate-800/80 border border-slate-600/50 hover:border-purple-400/50 transition-all duration-200 group overflow-hidden rounded">
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                      game.status === 'RELEASED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
                      game.status === 'EARLY ACCESS' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                  {game.discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
                      -{game.discount}
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2">
                    <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1 rounded">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{game.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-3">
                <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1">{game.title}</h4>
                <div className="text-purple-400 text-xs mb-2">{game.category}</div>
                
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-green-400 font-bold text-sm">{game.price}</div>
                    {game.originalPrice && game.price !== game.originalPrice && (
                      <div className="text-slate-400 line-through text-xs">{game.originalPrice}</div>
                    )}
                  </div>
                  <div className="text-slate-400 text-xs">{game.downloads}</div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {game.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-slate-700/50 text-cyan-400 px-2 py-0.5 text-xs font-semibold border border-slate-600 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-slate-700/80 hover:bg-purple-600 text-white px-3 py-2 text-sm font-semibold transition-all duration-200 rounded">
                  {game.price === "FREE BETA" ? "DOWNLOAD" : "BUY NOW"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>,

    // Dev insights panel - compact and organized
    <div className="w-full h-full flex items-center justify-center bg-slate-900/98 p-6">
      <div className="max-w-7xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Code className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-bold text-xl">DEV INSIGHTS</span>
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-2 py-1 text-xs font-bold rounded">
              BEHIND THE SCENES
            </div>
          </div>
          <div className="text-slate-400 text-sm">Latest Updates & Tech</div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Dev logs - compact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Development Logs</span>
            </h3>
            <div className="space-y-3">
              {games.map((game, index) => (
                <div key={index} className="bg-slate-800/60 border border-slate-600/50 p-4 hover:border-cyan-400/50 transition-colors rounded">
                  <div className="flex items-start space-x-3">
                    <img src={game.image} alt={game.title} className="w-14 h-14 object-cover border border-slate-600/50 rounded" />
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm mb-1">{game.devlog.title}</div>
                      <div className="text-cyan-400 text-xs font-semibold mb-1">{game.title}</div>
                      <div className="text-slate-300 text-xs mb-2 line-clamp-2">{game.devlog.content}</div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">By {game.devlog.author}</span>
                        <span className="text-slate-400">{game.devlog.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack & stats - compact */}
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span>Technology Stack</span>
              </h3>
              <div className="bg-slate-800/60 border border-slate-600/50 p-4 rounded">
                <div className="grid grid-cols-2 gap-3">
                  {Array.from(new Set(games.flatMap(game => game.tech))).slice(0, 8).map((tech, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-3 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>Development Statistics</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-800/60 border border-slate-600/50 p-4 text-center rounded">
                  <Trophy className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                  <div className="text-xl font-bold text-white mb-1">{games.length}</div>
                  <div className="text-slate-400 text-sm">Active Projects</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-600/50 p-4 text-center rounded">
                  <Users className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <div className="text-xl font-bold text-white mb-1">50k+</div>
                  <div className="text-slate-400 text-sm">Total Players</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-600/50 p-4 text-center rounded">
                  <Download className="w-6 h-6 mx-auto mb-2 text-green-400" />
                  <div className="text-xl font-bold text-white mb-1">326k</div>
                  <div className="text-slate-400 text-sm">Downloads</div>
                </div>
                <div className="bg-slate-800/60 border border-slate-600/50 p-4 text-center rounded">
                  <Star className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <div className="text-xl font-bold text-white mb-1">4.8</div>
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
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact header matching the APP USERS theme */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Crown className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-bold text-sm tracking-widest">PRIORITY #1: GAMERS</span>
            <Flame className="w-4 h-4 ml-2 text-orange-400" />
          </div>
          
          <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-4">
            PREMIUM <span className="text-purple-400">GAMING</span> + <span className="text-pink-400">DEV CONTENT</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4"></div>
          
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-6">
            Discover our complete gaming ecosystem with premium titles, development insights, 
            community features, and exclusive content. Experience next-generation gaming.
          </p>

          {/* Compact stats */}
          <div className="flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-white font-semibold">{games.length} Games</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-white font-semibold">50k+ Players</span>
            </div>
            <div className="flex items-center space-x-2">
              <Download className="w-4 h-4 text-green-400" />
              <span className="text-white font-semibold">326k Downloads</span>
            </div>
          </div>
        </div>

        {/* Enhanced container with better proportions */}
        <HorizontalDragContainer 
          className="mb-10 h-[600px] rounded border border-slate-700/50" 
          staticPanels={[gameLibraryPanel, gameDetailsPanel]}
          movingPanels={movingPanels}
          currentPanel={currentPanel}
          onPanelChange={setCurrentPanel}
        />

        {/* Compact CTA matching the APP USERS theme */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-black px-6 py-3 font-bold transition-all duration-300 space-x-2 shadow-xl text-sm group rounded"
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
