import React, { useState, useMemo } from 'react';
import { Trophy, Search, Users, Star, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './ui/resizable';
import GameLibraryPanel from './games/GameLibraryPanel';
import GameDetailsPanel from './games/GameDetailsPanel';
import GameUpdatesPanel from './games/GameUpdatesPanel';
import CommunityPanel from './games/CommunityPanel';
import HorizontalDragContainer from './ui/HorizontalDragContainer';

const GamesSection = () => {
  const [selectedGameId, setSelectedGameId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

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
      }
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
      description: "Command massive armies across land, sea, and air. Build civilizations from the ground up with complex resource management and diplomatic systems in this next-gen RTS experience.",
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
      }
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
      }
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
      }
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
      }
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
      }
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

  const gamePanels = [
    // Main Game Overview Panel
    <div key="overview" className="w-full flex-shrink-0 h-full">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
          <GameLibraryPanel 
            games={filteredGames}
            selectedGameId={selectedGameId}
            onSelectGame={setSelectedGameId}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <GameDetailsPanel game={selectedGame} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>,

    // Community & Updates Panel
    <div key="community" className="w-full flex-shrink-0 h-full">
      <ResizablePanelGroup direction="vertical" className="h-full">
        <ResizablePanel defaultSize={60}>
          <CommunityPanel game={selectedGame} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <GameUpdatesPanel game={selectedGame} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>,

    // Extended Stats & Analytics Panel
    <div key="analytics" className="w-full flex-shrink-0 h-full bg-slate-900/95 p-8">
      <div className="h-full overflow-y-auto">
        <h3 className="text-2xl font-black text-white mb-6 font-mono">GAME ANALYTICS</h3>
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 p-6">
            <h4 className="text-purple-400 font-bold mb-4">PLAYER METRICS</h4>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-300">Peak Players</span>
                <span className="text-white font-bold">{selectedGame.stats.peakPlayers.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Avg Session</span>
                <span className="text-white font-bold">{selectedGame.stats.averageSession}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Retention</span>
                <span className="text-green-400 font-bold">{selectedGame.stats.retention}</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6">
            <h4 className="text-cyan-400 font-bold mb-4">PLATFORM DATA</h4>
            <div className="space-y-4">
              {selectedGame.platforms.map((platform, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-slate-300">{platform}</span>
                  <span className="text-white font-bold">{Math.floor(Math.random() * 40 + 10)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-slate-800 border border-slate-700 p-6">
          <h4 className="text-yellow-400 font-bold mb-4">REVENUE INSIGHTS</h4>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-black text-white">${(selectedGame.price.base * 1000).toLocaleString()}</div>
              <div className="text-slate-400 text-sm">Monthly Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">{selectedGame.reviewCount}</div>
              <div className="text-slate-400 text-sm">Total Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-white">{selectedGame.rating}/5</div>
              <div className="text-slate-400 text-sm">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ];

  return (
    <section className="py-16 min-h-[1400px] bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">JBLINX GAMING STUDIO</span>
          </div>
          
          <h2 className="text-3xl font-black text-white leading-tight font-mono mb-4">
            PREMIUM <span className="text-purple-400">GAME</span> LIBRARY
          </h2>
          
          <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-4"></div>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Professional games across all platforms and genres with cutting-edge graphics and immersive gameplay
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, label: 'ACTIVE PLAYERS', value: '112K+', color: 'text-green-400' },
            { icon: Star, label: 'AVERAGE RATING', value: '4.7★', color: 'text-yellow-400' },
            { icon: Download, label: 'TOTAL DOWNLOADS', value: '45K+', color: 'text-blue-400' },
            { icon: Trophy, label: 'LIVE GAMES', value: '6', color: 'text-purple-400' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800/95 border border-slate-700 p-6 text-center hover:border-purple-400/50 transition-colors backdrop-blur-sm">
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className="text-2xl font-black text-white font-mono mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm font-bold">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search games, genres, platforms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/90 border-2 border-slate-700 text-white pl-14 pr-6 py-4 text-base focus:border-purple-400 focus:outline-none backdrop-blur-sm transition-colors"
            />
          </div>
        </div>

        {/* Enhanced Horizontal Drag Container - Much Taller */}
        <div className="h-[1000px] bg-slate-900/50 border-2 border-slate-700 backdrop-blur-sm shadow-2xl shadow-purple-500/10 mb-12">
          <HorizontalDragContainer 
            className="h-full"
            showNavigation={true}
          >
            {gamePanels}
          </HorizontalDragContainer>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-8 py-4 text-base font-black transition-all duration-300 space-x-3 shadow-lg hover:shadow-purple-500/25 hover:scale-105"
          >
            <Trophy className="w-6 h-6" />
            <span>EXPLORE ALL GAMES</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
