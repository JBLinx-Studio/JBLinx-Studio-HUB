import React, { useState, useMemo } from 'react';
import { ArrowRight, Trophy, Play, Gamepad2, Filter, Search, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';
import EnhancedGameCard from './games/EnhancedGameCard';
import GameFilters from './games/GameFilters';
import FeaturedGameHero from './games/FeaturedGameHero';
import GameStats from './games/GameStats';
import DevContentHub from './games/DevContentHub';
import CommunityPanel from './games/CommunityPanel';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

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
      description: "Experience intense 5v5 tactical combat with advanced weapon systems, destructible environments, and strategic team gameplay across diverse battlegrounds.",
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
      description: "Survive in a haunting post-apocalyptic world. Craft weapons, build shelters, and maintain your sanity while facing undead and desperate survivors.",
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
      description: "Command your starship and explore procedurally generated galaxies. Trade with alien civilizations, engage in epic space battles, and build your cosmic empire.",
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
      description: "Collect legendary heroes and embark on epic quests. Strategic turn-based combat meets stunning mobile graphics in this award-winning RPG.",
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
      description: "Fast-paced browser strategy game with no downloads required. Command armies, build bases, and dominate in real-time multiplayer battles.",
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

  const gameCategories = [
    { id: 'all', name: 'All Games', icon: Gamepad2, count: games.length },
    { id: 'fps', name: 'FPS & Shooters', icon: Trophy, count: games.filter(g => g.category === 'fps').length },
    { id: 'rts', name: 'Strategy & RTS', icon: Star, count: games.filter(g => g.category === 'rts').length },
    { id: 'survival', name: 'Survival & Horror', icon: Play, count: games.filter(g => g.category === 'survival').length },
    { id: 'space', name: 'Space & Sci-Fi', icon: TrendingUp, count: games.filter(g => g.category === 'space').length },
    { id: 'mobile', name: 'Mobile Games', icon: Gamepad2, count: games.filter(g => g.category === 'mobile').length },
    { id: 'web', name: 'Web Games', icon: Trophy, count: games.filter(g => g.category === 'web').length }
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
    
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating': return b.rating - a.rating;
        case 'players': return parseInt(b.playerCount.replace('K', '000').replace('.', '')) - parseInt(a.playerCount.replace('K', '000').replace('.', ''));
        case 'newest': return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        case 'price': return (a.price.sale || a.price.base) - (b.price.sale || b.price.base);
        default: return b.rating * parseInt(b.playerCount.replace('K', '000').replace('.', '')) - a.rating * parseInt(a.playerCount.replace('K', '000').replace('.', ''));
      }
    });
  }, [activeCategory, searchQuery, sortBy]);

  const featuredGame = games[0];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-purple-500/50 px-6 py-3 mb-6 backdrop-blur-sm">
            <Trophy className="w-5 h-5 mr-3 text-purple-400" />
            <span className="text-purple-400 font-black text-lg font-mono tracking-wider">JBLINX GAMING STUDIO</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono mb-4">
            PREMIUM <span className="text-purple-400">GAME</span> LIBRARY
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Discover our professionally crafted games with real-time analytics, developer insights, and community features. 
            Experience next-generation gaming across all platforms.
          </p>
        </div>

        {/* Enhanced Game Stats */}
        <GameStats games={games} />

        {/* Enhanced Search & Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search games, genres, platforms, developers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 text-white pl-12 pr-6 py-4 text-lg focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
            />
          </div>
          
          <GameFilters 
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={gameCategories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Enhanced Horizontal Navigation Panels */}
        <HorizontalDragContainer className="mb-12" showNavigation={true}>
          {/* Panel 1: Featured Game Showcase */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white font-mono mb-2">
                <Trophy className="w-6 h-6 inline mr-2 text-yellow-400" />
                FEATURED SHOWCASE
              </h3>
              <div className="w-16 h-0.5 bg-yellow-400 mx-auto"></div>
            </div>
            <FeaturedGameHero game={featuredGame} />
          </div>

          {/* Panel 2: Game Library Grid */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white font-mono mb-2">
                <Gamepad2 className="w-6 h-6 inline mr-2 text-purple-400" />
                GAME LIBRARY
              </h3>
              <div className="w-16 h-0.5 bg-purple-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredGames.map((game) => (
                <EnhancedGameCard key={game.id} game={game} />
              ))}
            </div>
          </div>

          {/* Panel 3: Developer Content Hub */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white font-mono mb-2">
                <TrendingUp className="w-6 h-6 inline mr-2 text-orange-400" />
                DEVELOPER CONTENT
              </h3>
              <div className="w-16 h-0.5 bg-orange-400 mx-auto"></div>
            </div>
            <DevContentHub games={games} />
          </div>

          {/* Panel 4: Community Hub */}
          <div className="w-full snap-start flex-shrink-0 px-4">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white font-mono mb-2">
                <Star className="w-6 h-6 inline mr-2 text-blue-400" />
                COMMUNITY HUB
              </h3>
              <div className="w-16 h-0.5 bg-blue-400 mx-auto"></div>
            </div>
            <CommunityPanel games={games} />
          </div>
        </HorizontalDragContainer>

        {/* Enhanced Navigation Hint */}
        <div className="text-center mb-8">
          <div className="text-slate-400 text-lg font-mono mb-4">
            ← EXPLORE OUR COMPLETE GAMING ECOSYSTEM →
          </div>
          <div className="flex justify-center space-x-8 text-sm text-slate-500">
            <span>📊 Real-time Analytics</span>
            <span>🎮 6 Game Categories</span>
            <span>📝 Developer Insights</span>
            <span>👥 Community Features</span>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 hover:from-purple-600 hover:via-purple-700 hover:to-pink-600 text-white px-8 py-4 font-black text-lg transition-all duration-300 space-x-3 shadow-2xl hover:scale-105 hover:shadow-purple-500/25"
          >
            <Play className="w-5 h-5" />
            <span>EXPLORE ALL GAMES & DEVELOPMENT</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
