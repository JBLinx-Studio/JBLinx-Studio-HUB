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
  MessageSquare,
  Video,
  FileText,
  Shield,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GameDetailsPanel from './games/GameDetailsPanel';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import DeveloperInsights from './games/DeveloperInsights';
import CommunityPanel from './games/CommunityPanel';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [selectedPanel, setSelectedPanel] = useState('details');

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
      playerCount: "15.2k",
      reviewCount: 2450,
      positiveReviews: 89,
      images: {
        hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=cyberpunk_trailer",
      description: "Engage in intense tactical battles in a neon-lit cyberpunk world. Command elite squads, strategize with advanced AI systems, and conquer the digital frontier in this groundbreaking tactical shooter that redefines modern warfare.",
      features: [
        "Advanced AI Squad Commands",
        "Real-time Strategy Elements", 
        "Cybernetic Enhancement System",
        "32-Player Multiplayer Battles",
        "Cross-Platform Compatibility",
        "Procedural Mission Generation",
        "Voice Command Integration",
        "Esports Tournament Mode"
      ],
      systemReqs: {
        min: {
          os: "Windows 10 64-bit",
          processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
          memory: "8 GB RAM",
          graphics: "NVIDIA GTX 1060 6GB / AMD RX 580",
          storage: "50 GB available space",
          network: "Broadband Internet connection"
        },
        recommended: {
          os: "Windows 11 64-bit",
          processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
          memory: "16 GB RAM",
          graphics: "NVIDIA RTX 3070 / AMD RX 6700 XT",
          storage: "50 GB SSD space",
          network: "Broadband Internet connection"
        }
      },
      dlc: [
        { 
          id: 1,
          name: "Elite Soldier Pack", 
          price: "19.99", 
          releaseDate: "2024-09-01", 
          status: "AVAILABLE", 
          image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop", 
          description: "Advanced soldier equipment, exclusive cybernetic upgrades, and 5 new tactical missions.",
          features: ["10 New Weapons", "5 Elite Soldier Skins", "Advanced Cybernetics", "Tactical Missions"],
          downloads: 12450
        },
        { 
          id: 2,
          name: "Cyberpunk Arsenal", 
          price: "29.99", 
          releaseDate: "2024-10-15", 
          status: "PRE-ORDER", 
          image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=150&fit=crop", 
          description: "Futuristic weapons pack with plasma rifles, neural disruptors, and quantum explosives.",
          features: ["15 Futuristic Weapons", "Weapon Customization", "Special Effects", "Arena Mode"],
          preOrders: 8920
        }
      ],
      updates: [
        {
          version: "2.1.4",
          date: "2024-01-10",
          title: "Performance & Balance Update",
          notes: "Major performance optimizations, weapon balancing, and new anti-cheat system implementation. Fixed critical multiplayer synchronization issues and improved server stability.",
          downloads: "15.2k",
          rating: 4.8,
          changes: [
            "Improved frame rate by 30% on mid-range systems",
            "Balanced plasma rifle damage output",
            "Enhanced anti-cheat detection",
            "Fixed multiplayer desync issues",
            "Added new graphics options for low-end PCs"
          ]
        },
        {
          version: "2.1.3", 
          date: "2024-01-05",
          title: "Security & Stability Patch",
          notes: "Critical security patch addressing network vulnerabilities and improved anti-cheat system integration with enhanced player reporting features.",
          downloads: "18.7k",
          rating: 4.9,
          changes: [
            "Fixed critical network security vulnerability",
            "Enhanced player reporting system",
            "Improved server connection stability",
            "Updated anti-cheat to latest version",
            "Fixed rare crash during level transitions"
          ]
        }
      ],
      stats: {
        peakPlayers: 15000,
        averageSession: "2h 15m",
        retention: "78%",
        esportsReady: true,
        totalMatches: "2.4M",
        communityRating: 4.7
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/tactical_strike",
        gog: "https://www.gog.com/game/tactical_strike",
        direct: "https://jblinx.com/games/tactical-strike"
      },
      devVideos: [
        {
          title: "Behind the Scenes: Motion Capture Technology",
          url: "https://youtube.com/watch?v=mocap_video",
          duration: "8:45",
          views: "24.5k",
          publishDate: "2024-01-15"
        },
        {
          title: "AI Development Deep Dive",
          url: "https://youtube.com/watch?v=ai_development",
          duration: "12:30",
          views: "18.2k",
          publishDate: "2024-01-08"
        }
      ],
      blogPosts: [1, 2, 6], // References to blogData IDs
      achievements: 45,
      tradingCards: true,
      cloudSave: true,
      workshopSupport: true
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
      playerCount: "23.8k",
      reviewCount: 1800,
      positiveReviews: 85,
      images: {
        hero: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=empire_trailer",
      description: "Build magnificent kingdoms, forge powerful alliances, and lead epic battles in this immersive medieval strategy game. Experience realistic siege warfare, complex diplomacy, and deep kingdom management systems.",
      features: [
        "Real-time Kingdom Building",
        "Epic Siege Warfare",
        "Alliance System & Diplomacy",
        "Hero Progression & Skills",
        "Trade Routes & Economy",
        "Seasonal Events & Campaigns",
        "Custom Map Editor",
        "Tournament System"
      ],
      systemReqs: {
        min: {
          os: "Windows 8.1 64-bit",
          processor: "Intel Core i3-6100 / AMD FX-6300",
          memory: "4 GB RAM",
          graphics: "Intel HD Graphics 520",
          storage: "25 GB available space",
          network: "Broadband Internet connection"
        },
        recommended: {
          os: "Windows 10 64-bit",
          processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
          memory: "8 GB RAM",
          graphics: "NVIDIA GTX 1050 / AMD RX 560",
          storage: "25 GB SSD space",
          network: "Broadband Internet connection"
        }
      },
      dlc: [
        { 
          id: 3,
          name: "Royal Edition Upgrade", 
          price: "24.99", 
          releaseDate: "2024-09-15", 
          status: "AVAILABLE", 
          image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop", 
          description: "Royal court expansion with noble bloodlines, exclusive castle designs, and diplomatic missions.",
          features: ["Noble Bloodlines", "Royal Castle Designs", "Diplomatic Missions", "Court Politics"],
          downloads: 8920
        }
      ],
      updates: [
        {
          version: "0.8.2",
          date: "2024-01-12",
          title: "Beta Balance Update",
          notes: "Major gameplay balancing based on community feedback, new siege mechanics, and performance improvements.",
          downloads: "12.1k",
          rating: 4.6,
          changes: [
            "Rebalanced siege warfare mechanics",
            "Improved AI decision making",
            "Added new diplomatic options",
            "Fixed alliance system bugs",
            "Performance optimizations for large battles"
          ]
        }
      ],
      stats: {
        peakPlayers: 25000,
        averageSession: "3h 45m",
        retention: "82%",
        esportsReady: false,
        totalMatches: "890k",
        communityRating: 4.5
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/empire_conquest",
        direct: "https://jblinx.com/games/empire-conquest"
      },
      devVideos: [
        {
          title: "Medieval Combat System Showcase",
          url: "https://youtube.com/watch?v=combat_showcase",
          duration: "6:20",
          views: "15.8k",
          publishDate: "2024-01-10"
        }
      ],
      blogPosts: [5, 9],
      achievements: 32,
      tradingCards: false,
      cloudSave: true,
      workshopSupport: true
    }
  ];

  const gameStats = [
    {
      icon: Gamepad2,
      value: "15+",
      label: "Active Games",
      color: "text-purple-400"
    },
    {
      icon: Users,
      value: "150k+",
      label: "Total Players",
      color: "text-blue-400"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Avg Rating",
      color: "text-yellow-400"
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Industry Awards",
      color: "text-green-400"
    }
  ];

  const currentGame = games[activeGame];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-24 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none opacity-40">
        
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-gradient-conic from-purple-500/10 via-cyan-500/8 to-pink-500/6 blur-3xl rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-conic from-blue-500/12 via-violet-500/8 to-purple-500/6 blur-3xl rounded-full animate-spin" style={{animationDelay: '10s', animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 60px 60px, 40px 40px'
          }}></div>
        </div>

        
        <div className="absolute top-1/3 left-1/6 w-6 h-6 bg-purple-400/60 animate-bounce border-2 border-purple-400/80 shadow-lg shadow-purple-400/40" style={{clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)', animationDelay: '0s'}}></div>
        <div className="absolute top-1/5 right-1/4 w-8 h-8 bg-cyan-400/50 animate-bounce border border-cyan-400/70 shadow-lg shadow-cyan-400/30" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-pink-400/40 animate-bounce border border-pink-400/60 shadow-lg shadow-pink-400/20" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Gamepad2 className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">JBLINX GAME STUDIO</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            OUR <span className="text-purple-400">GAME UNIVERSE</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Immersive gaming experiences across multiple platforms. From tactical shooters to epic strategy games, 
            discover our complete catalog of professionally crafted games.
          </p>

          
          <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {gameStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-4 text-center backdrop-blur-sm hover:border-zinc-600 transition-colors">
                  <IconComponent className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-xl font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        
        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          {games.map((game, index) => {
            const isActive = activeGame === index;
            return (
              <div 
                key={index} 
                className={`bg-zinc-800/95 border transition-all duration-300 cursor-pointer p-4 backdrop-blur-sm ${
                  isActive ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : 'border-zinc-700 hover:border-zinc-600'
                }`}
                onMouseEnter={() => setActiveGame(index)}
              >
                
                <div className="aspect-video mb-3 overflow-hidden bg-zinc-900 relative group">
                  <img 
                    src={game.images.hero} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 text-xs font-bold ${
                      game.status === 'LIVE' ? 'bg-green-500 text-white' :
                      game.status === 'BETA' ? 'bg-yellow-500 text-black' :
                      'bg-blue-500 text-white'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center space-x-2">
                    <div className="flex items-center space-x-1 bg-black/70 px-2 py-1 rounded text-xs">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-bold">{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-black/70 px-2 py-1 rounded text-xs">
                      <Users className="w-3 h-3 text-green-400" />
                      <span className="text-white font-bold">{game.playerCount}</span>
                    </div>
                  </div>
                </div>

                
                <div className="space-y-3">
                  <div>
                    <h3 className={`text-lg font-black font-mono ${isActive ? 'text-purple-400' : 'text-white'}`}>
                      {game.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{game.tagline}</p>
                    <p className="text-slate-500 text-xs">{game.category}</p>
                  </div>

                  
                  <div className="flex flex-wrap gap-1">
                    {game.genres.slice(0, 3).map((genre, genreIndex) => (
                      <span 
                        key={genreIndex} 
                        className={`px-2 py-1 text-xs font-bold border transition-all duration-300 ${
                          isActive 
                            ? 'border-purple-500/40 bg-purple-500/10 text-purple-400' 
                            : 'border-zinc-600 bg-zinc-700/50 text-slate-300'
                        }`}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>

                  
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-700">
                    <div className="text-green-400 font-black text-lg">
                      {game.price.base === 0 ? 'FREE' : `$${game.price.base}`}
                    </div>
                    <Link 
                      to={`/game/${game.id}`} 
                      className={`flex items-center space-x-1 text-xs font-bold transition-all duration-300 hover:scale-105 ${
                        isActive ? 'text-purple-400' : 'text-slate-400 hover:text-purple-400'
                      }`}
                    >
                      <span>VIEW GAME</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="bg-zinc-800/80 border border-zinc-600/50 p-4 mb-6 backdrop-blur-sm">
          <div className="flex justify-center space-x-2">
            {[
              { id: 'details', label: 'GAME DETAILS', icon: Target, desc: 'Complete specifications' },
              { id: 'dlc', label: 'DLC & UPDATES', icon: Download, desc: 'Latest content & patches' },
              { id: 'insights', label: 'DEV INSIGHTS', icon: Video, desc: 'Behind the scenes' },
              { id: 'community', label: 'COMMUNITY', icon: MessageSquare, desc: 'Reviews & discussions' }
            ].map((panel) => {
              const IconComponent = panel.icon;
              return (
                <button
                  key={panel.id}
                  onClick={() => setSelectedPanel(panel.id)}
                  className={`flex flex-col items-center space-y-1 px-4 py-3 text-xs font-bold transition-all duration-300 ${
                    selectedPanel === panel.id
                      ? 'bg-purple-500 text-white shadow-lg'
                      : 'bg-zinc-700/50 text-slate-400 hover:bg-zinc-600/50 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="font-mono">{panel.label}</span>
                  <span className="text-xs opacity-70 font-normal">{panel.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        
        <div className="bg-zinc-800/80 border border-zinc-600/50 backdrop-blur-sm mb-8 min-h-[600px]">
          {selectedPanel === 'details' && <GameDetailsPanel game={currentGame} />}
          {selectedPanel === 'dlc' && <DLCUpdatesPanel game={currentGame} />}
          {selectedPanel === 'insights' && <DeveloperInsights game={currentGame} />}
          {selectedPanel === 'community' && <CommunityPanel game={currentGame} />}
        </div>

        
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-black text-white mb-2 font-mono">
              EXPLORE OUR COMPLETE CATALOG
            </h3>
            <p className="text-slate-400 mb-6">
              Discover all JBLinx Studio games, from indie experiments to AAA productions
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Link 
              to="/game-development" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-3 font-black transition-all duration-300 space-x-2 shadow-lg"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>ALL GAMES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <Link 
              to="/blog?category=devlogs" 
              className="inline-flex items-center bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50 text-white px-6 py-3 font-black transition-all duration-300 space-x-2"
            >
              <FileText className="w-4 h-4" />
              <span>DEV BLOG</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
