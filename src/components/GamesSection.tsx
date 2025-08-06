import React, { useState, useMemo } from 'react';
import { Trophy, Search, Users, Star, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GameLibraryPanel from './games/GameLibraryPanel';
import GameDetailsPanel from './games/GameDetailsPanel';
import GameUpdatesPanel from './games/GameUpdatesPanel';
import CommunityPanel from './games/CommunityPanel';

const GamesSection = () => {
  const [selectedGameId, setSelectedGameId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPanel, setCurrentPanel] = useState(0);

  const games = [
    {
      id: 1,
      title: "Tactical Strike Force",
      tagline: "Elite Combat Operations",
      category: "fps",
      genres: ["FPS", "Tactical", "Multiplayer"],
      platforms: ["PC", "PlayStation", "Xbox"],
      status: "LIVE",
      releaseDate: "2024-12-15",
      price: { base: 39.99, sale: 29.99, currency: "USD" },
      rating: 4.8,
      playerCount: "15.2K",
      reviewCount: 2847,
      images: {
        hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/tactical-strike-trailer",
      description: "Experience intense 5v5 tactical combat with advanced weapon systems, destructible environments, and strategic team gameplay. Master multiple game modes across diverse battlegrounds.",
      features: ["Anti-Cheat Protection", "Competitive Ranking", "Custom Loadouts", "Voice Chat", "Spectator Mode"],
      systemReqs: { min: "GTX 1060, 8GB RAM", recommended: "RTX 3060, 16GB RAM" },
      dlc: [
        { name: "Urban Warfare Pack", price: 14.99, status: "available" },
        { name: "Elite Operator Skins", price: 9.99, status: "available" }
      ],
      stats: {
        peakPlayers: 45000,
        averageSession: "45 min",
        retention: "87%",
        esportsReady: true
      },
      storeLinks: {
        steam: "https://store.steampowered.com/",
        epic: "https://store.epicgames.com/",
        direct: "/buy/tactical-strike"
      },
      updates: [
        {
          version: "2.1.4",
          date: "2 days ago",
          notes: "Balance updates for competitive play, bug fixes for weapon attachments",
          downloads: "12.3K",
          rating: "4.9"
        },
        {
          version: "2.1.3", 
          date: "1 week ago",
          notes: "New map: Industrial Complex, performance optimizations",
          downloads: "18.7K",
          rating: "4.8"
        }
      ],
      devLogs: [
        {
          id: 1,
          title: "Competitive Season 3 Updates",
          date: "3 days ago",
          excerpt: "Major balance changes coming to ranked play",
          category: "Updates"
        },
        {
          id: 2,
          title: "Behind the Scenes: Map Design",
          date: "1 week ago", 
          excerpt: "How we create immersive combat environments",
          category: "Development"
        }
      ]
    },
    {
      id: 2,
      title: "Empire Conquest",
      tagline: "Build. Command. Conquer.",
      category: "rts",
      genres: ["RTS", "Strategy", "Base Building"],
      platforms: ["PC", "Mac"],
      status: "LIVE",
      releaseDate: "2024-11-20",
      price: { base: 49.99, sale: null, currency: "USD" },
      rating: 4.9,
      playerCount: "8.7K",
      reviewCount: 1456,
      images: {
        hero: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=450&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/empire-conquest-trailer",
      description: "Command massive armies across land, sea, and air. Build civilizations from the ground up with complex resource management and diplomatic systems.",
      features: ["Epic 100v100 Battles", "Civilization Builder", "Advanced AI", "Map Editor", "Campaign Mode"],
      systemReqs: { min: "GTX 1660, 12GB RAM", recommended: "RTX 4060, 32GB RAM" },
      dlc: [
        { name: "Ancient Dynasties", price: 19.99, status: "preorder" },
        { name: "Naval Warfare", price: 12.99, status: "available" }
      ],
      stats: {
        peakPlayers: 12000,
        averageSession: "2.5 hours",
        retention: "92%",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/",
        gog: "https://www.gog.com/",
        direct: "/buy/empire-conquest"
      },
      updates: [
        {
          version: "1.3.2",
          date: "4 days ago", 
          notes: "New civilization: Byzantine Empire, balance adjustments",
          downloads: "8.9K",
          rating: "4.9"
        }
      ],
      devLogs: [
        {
          id: 3,
          title: "Historical Accuracy in Game Design",
          date: "5 days ago",
          excerpt: "Research methods for authentic civilizations",
          category: "Development"
        }
      ]
    },
    {
      id: 3,
      title: "Last Haven",
      tagline: "Survive the Apocalypse",
      category: "survival",
      genres: ["Survival", "Horror", "Co-op"],
      platforms: ["PC", "PlayStation", "Xbox"],
      status: "EARLY_ACCESS",
      releaseDate: "2025-03-15",
      price: { base: 29.99, sale: 24.99, currency: "USD" },
      rating: 4.6,
      playerCount: "12.1K",
      reviewCount: 723,
      images: {
        hero: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=450&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/last-haven-trailer",
      description: "Survive in a haunting post-apocalyptic world. Craft weapons, build shelters, and maintain your sanity while facing both the undead and other desperate survivors.",
      features: ["4-Player Co-op", "Base Building", "Psychological Horror", "Day/Night Cycle", "Dynamic Weather"],
      systemReqs: { min: "GTX 1050 Ti, 8GB RAM", recommended: "RTX 3070, 16GB RAM" },
      dlc: [
        { name: "Winter Wasteland", price: 15.99, status: "upcoming" }
      ],
      stats: {
        peakPlayers: 25000,
        averageSession: "3.2 hours",
        retention: "78%",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/",
        epic: "https://store.epicgames.com/",
        direct: "/buy/last-haven"
      },
      updates: [
        {
          version: "0.9.5",
          date: "6 days ago",
          notes: "Improved zombie AI, new crafting recipes",
          downloads: "9.1K",
          rating: "4.7"
        }
      ],
      devLogs: [
        {
          id: 4,
          title: "Designing a Believable Apocalypse",
          date: "1 week ago",
          excerpt: "Our approach to world-building and atmosphere",
          category: "Development"
        }
      ]
    },
    {
      id: 4,
      title: "Stellar Frontier",
      tagline: "Explore the Unknown",
      category: "space",
      genres: ["Space Sim", "Exploration", "Trading"],
      platforms: ["PC", "Mobile"],
      status: "BETA",
      releaseDate: "2025-06-01",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 4.7,
      playerCount: "6.3K",
      reviewCount: 234,
      images: {
        hero: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=450&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/stellar-frontier-trailer",
      description: "Command your own starship and explore procedurally generated galaxies. Trade with alien civilizations, engage in epic space battles, and build your cosmic empire.",
      features: ["Infinite Universe", "Ship Customization", "Alien Diplomacy", "Fleet Combat", "Cross-Platform"],
      systemReqs: { min: "GTX 960, 6GB RAM", recommended: "RTX 2060, 12GB RAM" },
      dlc: [
        { name: "Alien Races Pack", price: 11.99, status: "upcoming" }
      ],
      stats: {
        peakPlayers: 8500,
        averageSession: "4.1 hours",
        retention: "85%",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/",
        mobile: "https://play.google.com/store/",
        direct: "/buy/stellar-frontier"
      },
      updates: [
        {
          version: "0.5.2",
          date: "5 days ago",
          notes: "New ship modules, improved trading system",
          downloads: "4.5K",
          rating: "4.6"
        }
      ],
      devLogs: [
        {
          id: 5,
          title: "Creating a Dynamic Universe",
          date: "1 week ago",
          excerpt: "Procedural generation and emergent gameplay",
          category: "Development"
        }
      ]
    },
    {
      id: 5,
      title: "Pocket Heroes Quest",
      tagline: "Epic Adventures Anywhere",
      category: "mobile",
      genres: ["Mobile RPG", "Turn-Based", "Collection"],
      platforms: ["iOS", "Android"],
      status: "LIVE",
      releaseDate: "2024-10-10",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 4.5,
      playerCount: "45.7K",
      reviewCount: 8203,
      images: {
        hero: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=450&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/pocket-heroes-trailer",
      description: "Collect legendary heroes and embark on epic quests. Strategic turn-based combat meets stunning mobile graphics in this award-winning mobile RPG.",
      features: ["200+ Heroes", "PvP Arena", "Guild System", "Daily Events", "Offline Play"],
      systemReqs: { min: "iOS 12+ / Android 8+", recommended: "iOS 15+ / Android 11+" },
      dlc: [
        { name: "Legendary Pack", price: 7.99, status: "available" },
        { name: "Premium Pass", price: 4.99, status: "available" }
      ],
      stats: {
        peakPlayers: 125000,
        averageSession: "25 min",
        retention: "68%",
        esportsReady: false
      },
      storeLinks: {
        ios: "https://apps.apple.com/",
        android: "https://play.google.com/store/",
        direct: "/buy/pocket-heroes"
      },
      updates: [
        {
          version: "1.8.7",
          date: "3 days ago",
          notes: "New hero: Shadow Assassin, PvP balance adjustments",
          downloads: "22.8K",
          rating: "4.8"
        }
      ],
      devLogs: [
        {
          id: 6,
          title: "Balancing a Massive Roster",
          date: "4 days ago",
          excerpt: "Our design philosophy for hero abilities",
          category: "Design"
        }
      ]
    },
    {
      id: 6,
      title: "Web Warriors Arena",
      tagline: "No Download. Pure Strategy.",
      category: "web",
      genres: ["Web Game", "Strategy", "PvP"],
      platforms: ["Web Browser"],
      status: "LIVE",
      releaseDate: "2024-09-05",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 4.4,
      playerCount: "23.8K",
      reviewCount: 1567,
      images: {
        hero: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=450&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/web-warriors-trailer",
      description: "Fast-paced browser strategy game with no downloads required. Command armies, build bases, and dominate in real-time multiplayer battles from any device.",
      features: ["Instant Play", "Cross-Device", "Real-time PvP", "Clan Wars", "Tournament Mode"],
      systemReqs: { min: "Modern Web Browser", recommended: "Chrome/Firefox Latest" },
      dlc: [
        { name: "Premium Commander", price: 9.99, status: "available" }
      ],
      stats: {
        peakPlayers: 35000,
        averageSession: "35 min",
        retention: "71%",
        esportsReady: true
      },
      storeLinks: {
        web: "https://webwarriors.game/",
        direct: "/play/web-warriors"
      },
      updates: [
        {
          version: "2.5.1",
          date: "2 days ago",
          notes: "New unit: Cyber Tank, clan war improvements",
          downloads: "11.2K",
          rating: "4.5"
        }
      ],
      devLogs: [
        {
          id: 7,
          title: "Optimizing for Web Performance",
          date: "3 days ago",
          excerpt: "Our techniques for smooth browser gameplay",
          category: "Technology"
        }
      ]
    }
  ];

  const filteredGames = useMemo(() => {
    let filtered = games;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(game => game.category === activeCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(game => 
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return filtered;
  }, [activeCategory, searchQuery]);

  const selectedGame = games.find(game => game.id === selectedGameId) || games[0];

  const panels = [
    {
      id: 'overview',
      title: 'Game Overview',
      component: (
        <div className="flex h-full">
          <div className="w-72">
            <GameLibraryPanel 
              games={filteredGames}
              selectedGameId={selectedGameId}
              onSelectGame={setSelectedGameId}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          <div className="flex-1">
            <GameDetailsPanel game={selectedGame} />
          </div>
        </div>
      )
    },
    {
      id: 'community',
      title: 'Community Hub',
      component: (
        <div className="flex h-full">
          <div className="w-72">
            <GameLibraryPanel 
              games={filteredGames}
              selectedGameId={selectedGameId}
              onSelectGame={setSelectedGameId}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          <div className="flex-1">
            <CommunityPanel game={selectedGame} />
          </div>
          <div className="w-64">
            <GameUpdatesPanel game={selectedGame} />
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      title: 'Performance Analytics',
      component: (
        <div className="flex h-full">
          <div className="w-72">
            <GameLibraryPanel 
              games={filteredGames}
              selectedGameId={selectedGameId}
              onSelectGame={setSelectedGameId}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          <div className="flex-1 bg-slate-900/95 p-4 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-black text-white mb-4 font-mono">PERFORMANCE ANALYTICS</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 border border-slate-700/50 p-3">
                  <h4 className="text-purple-400 font-bold mb-3 text-sm">PLAYER METRICS</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Peak Players</span>
                      <span className="text-white font-bold text-sm">{selectedGame.stats.peakPlayers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Avg Session</span>
                      <span className="text-white font-bold text-sm">{selectedGame.stats.averageSession}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 text-sm">Retention Rate</span>
                      <span className="text-green-400 font-bold text-sm">{selectedGame.stats.retention}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 p-3">
                  <h4 className="text-cyan-400 font-bold mb-3 text-sm">PLATFORM BREAKDOWN</h4>
                  <div className="space-y-2">
                    {selectedGame.platforms.map((platform, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-slate-300 text-sm">{platform}</span>
                        <span className="text-white font-bold text-sm">{Math.floor(Math.random() * 40 + 20)}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 p-4">
                <h4 className="text-yellow-400 font-bold mb-3 text-sm">REVENUE INSIGHTS</h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-base font-black text-white">${(selectedGame.price.base * 1500).toLocaleString()}</div>
                    <div className="text-slate-400 text-xs">Monthly Revenue</div>
                  </div>
                  <div>
                    <div className="text-base font-black text-white">{selectedGame.reviewCount}</div>
                    <div className="text-slate-400 text-xs">Total Reviews</div>
                  </div>
                  <div>
                    <div className="text-base font-black text-white">{selectedGame.rating}/5</div>
                    <div className="text-slate-400 text-xs">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const navigateToPanel = (index: number) => {
    if (index >= 0 && index < panels.length) {
      setCurrentPanel(index);
    }
  };

  const handlePrevious = () => {
    if (currentPanel > 0) {
      navigateToPanel(currentPanel - 1);
    }
  };

  const handleNext = () => {
    if (currentPanel < panels.length - 1) {
      navigateToPanel(currentPanel + 1);
    }
  };

  return (
    <section className="py-8 min-h-[900px] bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">JBLINX GAMING STUDIO</span>
          </div>
          
          <h2 className="text-xl font-black text-white leading-tight font-mono mb-2">
            PREMIUM <span className="text-purple-400">GAME</span> LIBRARY
          </h2>
          
          <div className="w-12 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-slate-400 max-w-lg mx-auto text-sm">
            Professional games across all platforms with cutting-edge graphics
          </p>
        </div>

        {/* Compact Stats - Single Row */}
        <div className="flex justify-center gap-6 mb-6">
          {[
            { icon: Users, label: 'PLAYERS', value: '112K+', color: 'text-green-400' },
            { icon: Star, label: 'RATING', value: '4.7★', color: 'text-yellow-400' },
            { icon: Download, label: 'GAMES', value: '6', color: 'text-purple-400' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="flex items-center space-x-2 text-center">
                <IconComponent className={`w-4 h-4 ${stat.color}`} />
                <div>
                  <div className="text-sm font-black text-white font-mono">{stat.value}</div>
                  <div className="text-slate-400 text-xs font-bold">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 text-white pl-9 pr-4 py-2 text-sm focus:border-purple-400 focus:outline-none backdrop-blur-sm transition-colors"
            />
          </div>
        </div>

        {/* Main Panel Container - Much Taller */}
        <div className="relative h-[750px] bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm overflow-hidden">
          {/* Panel Content */}
          <div 
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentPanel * 100}%)` }}
          >
            {panels.map((panel, index) => (
              <div key={panel.id} className="w-full flex-shrink-0 h-full">
                {panel.component}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={handlePrevious}
            disabled={currentPanel === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-800/90 border border-purple-500/50 text-purple-400 p-2 backdrop-blur-sm hover:bg-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentPanel === panels.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-800/90 border border-purple-500/50 text-purple-400 p-2 backdrop-blur-sm hover:bg-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Panel Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-slate-800/50 backdrop-blur-sm px-3 py-1">
            {panels.map((_, index) => (
              <button
                key={index}
                onClick={() => navigateToPanel(index)}
                className={`w-2 h-2 transition-all duration-300 ${
                  index === currentPanel 
                    ? 'bg-purple-400 scale-125' 
                    : 'bg-slate-600 hover:bg-purple-400/50'
                }`}
              />
            ))}
          </div>

          {/* Panel Title */}
          <div className="absolute top-3 left-3 bg-slate-800/90 backdrop-blur-sm px-3 py-1 z-20">
            <span className="text-purple-400 font-bold text-xs font-mono">
              {panels[currentPanel]?.title.toUpperCase()}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 py-2 text-sm font-black transition-all duration-300 space-x-2 hover:scale-105"
          >
            <Trophy className="w-4 h-4" />
            <span>EXPLORE ALL GAMES</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
