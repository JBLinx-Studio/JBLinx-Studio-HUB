
import React, { useState } from 'react';
import { 
  Gamepad2, 
  Play, 
  Download, 
  Star, 
  Users, 
  Trophy,
  TrendingUp,
  Zap,
  ArrowRight,
  Eye,
  Clock,
  Target,
  Calendar,
  Filter,
  Grid3X3,
  List,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GameDetailsPanel from './games/GameDetailsPanel';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import DeveloperInsights from './games/DeveloperInsights';
import CommunityPanel from './games/CommunityPanel';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [selectedPanel, setSelectedPanel] = useState('details');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const games = [
    {
      id: 1,
      title: "Tactical Strike: Cyber Assault",
      tagline: "Dominate the digital battlefield",
      category: "Action/Strategy",
      genres: ["Cyberpunk", "Tactical", "Sci-Fi"],
      platforms: ["PC", "Mobile", "Web Browser"],
      status: "LIVE",
      releaseDate: "2024-08-15",
      price: { base: 49.99, sale: null, currency: "USD" },
      rating: 4.7,
      playerCount: "10k+",
      reviewCount: 2450,
      images: {
        hero: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Engage in intense tactical battles in a neon-lit cyberpunk world. Command elite squads, hack into enemy systems, and strategize your way to victory in this immersive action-strategy hybrid. Features advanced AI opponents, destructible environments, and a deep progression system.",
      features: [
        "Real-time tactical combat with pause-and-plan mechanics",
        "Advanced cybernetic enhancement system",
        "32-player multiplayer battles with ranked matchmaking",
        "Procedurally generated mission objectives",
        "Cross-platform play and progression",
        "VR support for immersive command experience"
      ],
      systemReqs: {
        min: "Intel Core i5-8400 / AMD Ryzen 5 2600, 8GB RAM, NVIDIA GTX 1060 / AMD RX 580, DirectX 12, 50GB available space",
        recommended: "Intel Core i7-10700K / AMD Ryzen 7 3700X, 16GB RAM, NVIDIA RTX 3070 / AMD RX 6700 XT, DirectX 12, 50GB available space, SSD recommended"
      },
      dlc: [
        { 
          name: "Elite Soldier Pack", 
          price: "19.99", 
          releaseDate: "2024-09-01", 
          status: "AVAILABLE", 
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=150&fit=crop", 
          description: "Advanced soldier equipment and exclusive cybernetic upgrades for tactical superiority. Includes 5 new weapon types, 3 armor sets, and special abilities." 
        },
        { 
          name: "Cyberpunk Arsenal", 
          price: "29.99", 
          releaseDate: "2024-10-15", 
          status: "PRE-ORDER", 
          image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=150&fit=crop", 
          description: "Futuristic weapons pack with plasma rifles, neural disruptors, and quantum explosives. Features 15 new weapons and 8 new gadgets." 
        }
      ],
      updates: [
        {
          version: "2.1.4",
          date: "2024-01-10",
          notes: "Major weapon balancing update, improved AI behavior, and new matchmaking system. Fixed critical memory leak in multiplayer mode.",
          downloads: "15.2k",
          rating: "4.8",
          changelog: [
            "Assault rifles damage reduced by 8%",
            "Sniper rifles now have bullet drop physics",
            "AI enemies use cover more intelligently",
            "New ranked matchmaking algorithm",
            "Fixed memory leak causing crashes in 32-player matches",
            "Improved anti-cheat detection"
          ]
        },
        {
          version: "2.1.3", 
          date: "2024-01-05",
          notes: "Critical security patch and improved anti-cheat system integration. Performance optimizations for low-end hardware.",
          downloads: "18.7k",
          rating: "4.9",
          changelog: [
            "Updated anti-cheat to version 3.2",
            "Fixed exploit allowing wall-hacking",
            "Improved performance on GTX 1060 and similar cards",
            "Reduced loading times by 25%",
            "Fixed rare crash on AMD processors"
          ]
        }
      ],
      stats: {
        peakPlayers: 15000,
        averageSession: "2.1 hours",
        retention: "68%",
        esportsReady: true
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        gog: "https://www.gog.com/game/your_game_id",
        direct: "https://yourgame.com/buy"
      },
      devContent: [
        {
          type: "video",
          title: "Behind the Scenes: Motion Capture Technology",
          url: "https://youtube.com/watch?v=dev1",
          duration: "12:34",
          date: "2024-01-08"
        },
        {
          type: "blog",
          title: "AI Development Deep Dive",
          url: "/blog/1",
          readTime: "8 min",
          date: "2024-01-05"
        }
      ]
    },
    {
      id: 2,
      title: "Empire Conquest: Age of Kings",
      tagline: "Forge your empire, command your legions",
      category: "Strategy/RPG",
      genres: ["Medieval", "Strategy", "RPG"],
      platforms: ["PC", "Web Browser"],
      status: "BETA",
      releaseDate: "2024-11-01",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 4.5,
      playerCount: "20k+",
      reviewCount: 1800,
      images: {
        hero: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=300&fit=crop"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Build your medieval empire from the ground up in this grand strategy RPG. Manage resources, forge alliances, and lead massive armies in epic real-time battles across a living, breathing world.",
      features: [
        "Massive real-time battles with up to 1000 units",
        "Deep diplomatic system with dynamic AI rulers",
        "Extensive hero customization and skill trees",
        "Dynamic weather and seasonal effects",
        "Mod support with Steam Workshop integration",
        "Cooperative campaign for up to 4 players"
      ],
      systemReqs: {
        min: "Intel Core i3-6100 / AMD FX-6300, 4GB RAM, NVIDIA GTX 750 Ti / AMD R7 260X, DirectX 11, 25GB available space",
        recommended: "Intel Core i5-8400 / AMD Ryzen 5 2600, 8GB RAM, NVIDIA GTX 1060 / AMD RX 580, DirectX 11, 25GB available space"
      },
      dlc: [
        { 
          name: "Royal Edition", 
          price: "24.99", 
          releaseDate: "2024-09-15", 
          status: "AVAILABLE", 
          image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop", 
          description: "Royal court expansion with noble bloodlines, new castle designs, and diplomatic intrigue systems." 
        }
      ],
      updates: [
        {
          version: "0.8.2",
          date: "2024-01-12",
          notes: "Beta update with improved AI diplomacy and new battle mechanics. Added siege equipment and castle destruction.",
          downloads: "12.3k",
          rating: "4.6",
          changelog: [
            "AI now forms more realistic alliances",
            "Added trebuchets and battering rams",
            "Castle walls can now be destroyed",
            "Improved unit pathfinding in large battles",
            "Fixed crash when loading saves with 500+ units"
          ]
        }
      ],
      stats: {
        peakPlayers: 25000,
        averageSession: "3.2 hours",
        retention: "72%",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        direct: "https://yourgame.com/buy"
      },
      devContent: [
        {
          type: "video",
          title: "Medieval Combat System Design",
          url: "https://youtube.com/watch?v=dev2",
          duration: "15:22",
          date: "2024-01-10"
        }
      ]
    }
  ];

  const gameStats = [
    { icon: Gamepad2, value: "15+", label: "Games", color: "text-purple-400" },
    { icon: Users, value: "150k+", label: "Players", color: "text-blue-400" },
    { icon: Star, value: "4.9/5", label: "Rating", color: "text-yellow-400" },
    { icon: Trophy, value: "50+", label: "Awards", color: "text-green-400" }
  ];

  const genres = ['all', 'Action', 'Strategy', 'RPG', 'Horror', 'Sci-Fi'];
  const currentGame = games[activeGame];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || game.genres.some(g => g.toLowerCase().includes(selectedGenre.toLowerCase()));
    return matchesSearch && matchesGenre;
  });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-24 overflow-hidden">
      {/* Gaming-themed unique background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Primary gaming ambient lighting with circuit-like patterns */}
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-gradient-conic from-purple-500/10 via-cyan-500/8 to-pink-500/6 blur-3xl rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-conic from-blue-500/12 via-violet-500/8 to-purple-500/6 blur-3xl rounded-full animate-spin" style={{animationDelay: '10s', animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Gaming matrix-style grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 60px 60px, 40px 40px, 40px 40px'
          }}></div>
        </div>

        {/* Floating gaming elements - pixelated and gaming-themed */}
        <div className="absolute top-1/3 left-1/6 w-6 h-6 bg-purple-400/60 animate-bounce border-2 border-purple-400/80 shadow-lg shadow-purple-400/40" style={{clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)', animationDelay: '0s'}}></div>
        <div className="absolute top-1/5 right-1/4 w-8 h-8 bg-cyan-400/50 animate-bounce border border-cyan-400/70 shadow-lg shadow-cyan-400/30" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-pink-400/40 animate-bounce border border-pink-400/60 shadow-lg shadow-pink-400/20" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/5 right-1/6 w-12 h-4 bg-violet-400/50 animate-bounce border border-violet-400/70 shadow-lg shadow-violet-400/30" style={{animationDelay: '6s'}}></div>

        {/* Gaming accent lines - more dynamic */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400/60 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-400/60 to-transparent animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Games Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-3 py-1 mb-3 backdrop-blur-sm">
            <Gamepad2 className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">JBLINX GAME UNIVERSE</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-2">
            PREMIUM <span className="text-purple-400">GAMES</span> LIBRARY
          </h2>
          
          <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-3"></div>
          
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-4">
            Immersive gaming experiences across multiple platforms and genres, developed by JBLinx Studio
          </p>

          {/* Game Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto mb-6">
            {gameStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-3 text-center backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300">
                  <IconComponent className={`w-4 h-4 ${stat.color} mx-auto mb-1`} />
                  <div className={`text-sm font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-zinc-800 border border-zinc-600 text-white pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>
            
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-zinc-800 border border-zinc-600 text-white px-4 py-2 text-sm focus:outline-none focus:border-purple-400 transition-colors"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>

            <div className="flex border border-zinc-600 bg-zinc-800">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white'} transition-colors`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-purple-500 text-white' : 'text-slate-400 hover:text-white'} transition-colors`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Game Selection Grid */}
        <div className={`${viewMode === 'grid' ? 'grid lg:grid-cols-4 gap-3' : 'space-y-3'} mb-6`}>
          {filteredGames.map((game, index) => {
            const isActive = activeGame === index;
            return (
              <div 
                key={index} 
                className={`bg-zinc-800/95 border transition-all duration-300 cursor-pointer p-4 backdrop-blur-sm hover:scale-105 ${
                  isActive ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : 'border-zinc-700 hover:border-zinc-600'
                } ${viewMode === 'list' ? 'flex items-center space-x-4' : ''}`}
                onClick={() => setActiveGame(games.findIndex(g => g.id === game.id))}
              >
                {/* Game Image */}
                {viewMode === 'list' && (
                  <img 
                    src={game.images.hero} 
                    alt={game.title}
                    className="w-20 h-12 object-cover border border-zinc-600"
                  />
                )}

                <div className="flex-1">
                  {/* Game Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center ${viewMode === 'list' ? 'w-6 h-6' : ''}`}>
                        <Gamepad2 className={`${viewMode === 'list' ? 'w-3 h-3' : 'w-4 h-4'} text-white`} />
                      </div>
                      <div>
                        <h3 className={`${viewMode === 'list' ? 'text-sm' : 'text-sm'} font-black font-mono ${isActive ? 'text-purple-400' : 'text-white'}`}>
                          {game.title}
                        </h3>
                        <p className="text-xs text-slate-400">{game.category}</p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-bold text-xs">{game.rating}</span>
                      </div>
                      <div className={`text-xs font-bold ${isActive ? 'text-purple-400' : 'text-slate-400'}`}>
                        {game.playerCount}
                      </div>
                    </div>
                  </div>

                  {viewMode === 'grid' && (
                    <>
                      {/* Game Content */}
                      <div className="space-y-2">
                        <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{game.description}</p>
                        
                        {/* Genres */}
                        <div className="flex flex-wrap gap-1">
                          {game.genres.slice(0, 3).map((genre, genreIndex) => (
                            <span 
                              key={genreIndex} 
                              className={`px-2 py-0.5 text-xs font-bold border transition-all duration-300 ${
                                isActive 
                                  ? 'border-purple-500/40 bg-purple-500/10 text-purple-400' 
                                  : 'border-zinc-600 bg-zinc-700/50 text-slate-300'
                              }`}
                            >
                              {genre}
                            </span>
                          ))}
                        </div>
                        
                        {/* Stats & CTA */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-2 text-xs">
                            <Users className="w-3 h-3 text-slate-400" />
                            <span className="text-slate-300 font-medium">{game.stats.peakPlayers}k</span>
                          </div>
                          
                          <Link 
                            to={`/game/${game.id}`} 
                            className={`flex items-center space-x-1 text-xs font-bold transition-all duration-300 hover:scale-105 ${
                              isActive ? 'text-purple-400' : 'text-slate-400 hover:text-purple-400'
                            }`}
                          >
                            <span>PLAY</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </>
                  )}

                  {viewMode === 'list' && (
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {game.genres.slice(0, 2).map((genre, genreIndex) => (
                          <span 
                            key={genreIndex} 
                            className="px-2 py-1 text-xs font-bold border border-zinc-600 bg-zinc-700/50 text-slate-300"
                          >
                            {genre}
                          </span>
                        ))}
                      </div>
                      <div className="text-green-400 font-black text-sm">
                        {game.price.base === 0 ? 'FREE' : `$${game.price.base}`}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel Navigation */}
        <div className="bg-zinc-800/80 border border-zinc-600/50 p-3 mb-4 backdrop-blur-sm">
          <div className="flex justify-center space-x-2">
            {[
              { id: 'details', label: 'GAME DETAILS', icon: Target },
              { id: 'dlc', label: 'DLC & UPDATES', icon: Download },
              { id: 'insights', label: 'DEV INSIGHTS', icon: Eye },
              { id: 'community', label: 'COMMUNITY', icon: Users }
            ].map((panel) => {
              const IconComponent = panel.icon;
              return (
                <button
                  key={panel.id}
                  onClick={() => setSelectedPanel(panel.id)}
                  className={`flex items-center space-x-1 px-4 py-2 text-xs font-bold transition-all duration-300 ${
                    selectedPanel === panel.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-zinc-700/50 text-slate-400 hover:bg-zinc-600/50 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-3 h-3" />
                  <span>{panel.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Panel Content */}
        <div className="bg-zinc-800/80 border border-zinc-600/50 backdrop-blur-sm mb-6">
          {selectedPanel === 'details' && <GameDetailsPanel game={currentGame} />}
          {selectedPanel === 'dlc' && <DLCUpdatesPanel dlcs={currentGame.dlc} updates={currentGame.updates} />}
          {selectedPanel === 'insights' && <DeveloperInsights games={games} />}
          {selectedPanel === 'community' && <CommunityPanel game={currentGame} />}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 font-black transition-all duration-300 space-x-2 shadow-lg text-sm hover:scale-105"
          >
            <Zap className="w-4 h-4" />
            <span>EXPLORE ALL GAMES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
