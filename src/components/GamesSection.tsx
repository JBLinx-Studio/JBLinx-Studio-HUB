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
  Search,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GameDetailsPanel from './games/GameDetailsPanel';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import DeveloperInsights from './games/DeveloperInsights';
import CommunityPanel from './games/CommunityPanel';
import GameLibraryPanel from './games/GameLibraryPanel';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [selectedPanel, setSelectedPanel] = useState('details');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

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
          type: "video" as const,
          title: "Behind the Scenes: Motion Capture Technology",
          url: "https://youtube.com/watch?v=dev1",
          duration: "12:34",
          date: "2024-01-08"
        },
        {
          type: "blog" as const,
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
          type: "video" as const,
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

  const handleGameSelect = (gameId: number) => {
    const gameIndex = games.findIndex(g => g.id === gameId);
    if (gameIndex !== -1) {
      setActiveGame(gameIndex);
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || game.category.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const currentGame = games[activeGame];

  const simpleGames = games.map(game => ({
    id: game.id,
    title: game.title,
    category: game.category
  }));

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10 py-12">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-zinc-800/95 border border-orange-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Gamepad2 className="w-4 h-4 mr-2 text-orange-400" />
            <span className="text-orange-400 font-black text-sm font-mono tracking-widest">JBLINX GAME UNIVERSE</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            PREMIUM <span className="text-orange-400">GAMES</span> LIBRARY
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-500 mx-auto mb-4"></div>
          
          <p className="text-zinc-400 max-w-3xl mx-auto mb-6 text-lg">
            Experience cutting-edge gaming technology across multiple platforms. 
            From tactical warfare to strategic empire building, discover immersive worlds crafted by JBLinx Studio.
          </p>

          {/* Enhanced Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Search our game library..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-zinc-800/80 border border-zinc-600 text-white pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Main Layout with Sidebar */}
        <div className="flex gap-6 min-h-[800px]">
          {/* Game Library Sidebar */}
          <div className="w-80 flex-shrink-0">
            <GameLibraryPanel
              games={filteredGames}
              selectedGameId={currentGame.id}
              onSelectGame={handleGameSelect}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-6">
            {/* Featured Game Hero */}
            <div className="bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 border border-zinc-700/50 p-6 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 text-xs font-black border ${
                      currentGame.status === 'LIVE' ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-400' :
                      currentGame.status === 'BETA' ? 'bg-orange-500/20 border-orange-400/50 text-orange-400' :
                      'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                    }`}>
                      {currentGame.status}
                    </span>
                    <div className="flex items-center space-x-1">
                      {currentGame.platforms.slice(0, 3).map((platform, idx) => (
                        <span key={idx} className="text-zinc-400 text-sm">
                          {platform === 'PC' ? '🖥️' : platform === 'Mobile' ? '📱' : '🌐'}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-white leading-tight">{currentGame.title}</h3>
                  <p className="text-orange-400 font-bold text-lg">{currentGame.tagline}</p>
                  <p className="text-zinc-300 leading-relaxed">{currentGame.description}</p>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-bold">{currentGame.rating}</span>
                      <span className="text-zinc-400">({currentGame.reviewCount} reviews)</span>
                    </div>
                    <div className="text-emerald-400 font-black text-xl">
                      {currentGame.price.base === 0 ? 'FREE' : `$${currentGame.price.base}`}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 font-black transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                      <Play className="w-5 h-5" />
                      <span>PLAY NOW</span>
                    </button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-6 py-3 font-bold transition-colors flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>DOWNLOAD</span>
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src={currentGame.images.hero} 
                    alt={currentGame.title}
                    className="w-full h-80 object-cover border border-zinc-600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border border-white/30 p-4 hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Panel Navigation */}
            <div className="bg-zinc-800/80 border border-zinc-600/50 p-3 backdrop-blur-sm">
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
                          ? 'bg-orange-500 text-white shadow-lg'
                          : 'bg-zinc-700/50 text-zinc-400 hover:bg-zinc-600/50 hover:text-white'
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
            <div className="bg-zinc-800/80 border border-zinc-600/50 backdrop-blur-sm">
              {selectedPanel === 'details' && <GameDetailsPanel game={currentGame} />}
              {selectedPanel === 'dlc' && <DLCUpdatesPanel dlcs={currentGame.dlc} updates={currentGame.updates} />}
              {selectedPanel === 'insights' && <DeveloperInsights games={simpleGames} />}
              {selectedPanel === 'community' && <CommunityPanel game={currentGame} />}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-zinc-900/90 to-zinc-800/90 border border-zinc-700/50 p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-black text-white mb-4">Ready to Experience Our Games?</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Join thousands of players worldwide and discover what makes JBLinx Studio games special. 
              From casual mobile experiences to hardcore PC gaming, we have something for everyone.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/game-development" 
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-purple-500 hover:from-orange-600 hover:to-purple-600 text-white px-8 py-4 font-black transition-all duration-300 space-x-2 shadow-lg hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                <span>EXPLORE ALL GAMES</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center bg-zinc-700 hover:bg-zinc-600 text-white px-8 py-4 font-bold transition-colors space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>GET SUPPORT</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
