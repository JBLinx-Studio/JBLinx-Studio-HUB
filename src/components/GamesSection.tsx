
import React, { useState, useMemo } from 'react';
import { ArrowRight, Trophy, Play, Gamepad2, Filter, Search, Star, TrendingUp, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import HorizontalDragContainer from './ui/HorizontalDragContainer';
import CompactGameCard from './games/CompactGameCard';
import GameFilters from './games/GameFilters';
import GameStats from './games/GameStats';

const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  // Realistic game library with multiple genres
  const games = [
    // FPS Games
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
        hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=120&fit=crop"
      },
      description: "5v5 tactical combat with advanced weapon systems and destructible environments.",
      features: ["Anti-Cheat", "Competitive Ranking", "Voice Chat"],
      stats: { peakPlayers: 45000, averageSession: "45 min", retention: "87%" },
      storeLinks: { steam: "https://store.steampowered.com/", direct: "/buy/tactical-strike" }
    },
    {
      id: 2,
      title: "Urban Warfare",
      tagline: "Modern Combat Redefined",
      category: "fps",
      genres: ["FPS", "Action", "PvP"],
      platforms: ["PC", "Xbox"],
      status: "BETA",
      releaseDate: "2025-02-10",
      price: { base: 49.99, sale: null, currency: "USD" },
      rating: 4.6,
      playerCount: "8.9K",
      reviewCount: 1234,
      images: {
        hero: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=120&fit=crop"
      },
      description: "Fast-paced urban combat with realistic ballistics and team-based gameplay.",
      features: ["Realistic Physics", "Team Tactics", "Map Editor"],
      stats: { peakPlayers: 28000, averageSession: "38 min", retention: "82%" },
      storeLinks: { steam: "https://store.steampowered.com/", direct: "/buy/urban-warfare" }
    },
    
    // RTS Games
    {
      id: 3,
      title: "Empire Conquest",
      tagline: "Build. Command. Conquer.",
      category: "rts",
      genres: ["RTS", "Strategy", "Base Building"],
      platforms: ["PC", "Mac"],
      status: "LIVE",
      releaseDate: "2024-11-20",
      price: { base: 59.99, sale: null, currency: "USD" },
      rating: 4.9,
      playerCount: "12.7K",
      reviewCount: 3456,
      images: {
        hero: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=200&h=120&fit=crop"
      },
      description: "Command massive armies with complex resource management and diplomacy.",
      features: ["100v100 Battles", "Advanced AI", "Campaign Mode"],
      stats: { peakPlayers: 35000, averageSession: "2.5 hours", retention: "92%" },
      storeLinks: { steam: "https://store.steampowered.com/", direct: "/buy/empire-conquest" }
    },
    {
      id: 4,
      title: "Galactic Command",
      tagline: "Space Strategy Evolved",
      category: "rts",
      genres: ["RTS", "Sci-Fi", "Space"],
      platforms: ["PC"],
      status: "EARLY_ACCESS",
      releaseDate: "2025-04-15",
      price: { base: 34.99, sale: 24.99, currency: "USD" },
      rating: 4.5,
      playerCount: "6.8K",
      reviewCount: 892,
      images: {
        hero: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=120&fit=crop"
      },
      description: "Epic space battles with fleet management and planetary conquest.",
      features: ["Fleet Combat", "Planet Management", "Tech Trees"],
      stats: { peakPlayers: 18000, averageSession: "3.2 hours", retention: "88%" },
      storeLinks: { steam: "https://store.steampowered.com/", direct: "/buy/galactic-command" }
    },
    
    // RPG Games
    {
      id: 5,
      title: "Legends of Aetheria",
      tagline: "Epic Fantasy Adventures",
      category: "rpg",
      genres: ["RPG", "Fantasy", "Open World"],
      platforms: ["PC", "PlayStation", "Xbox"],
      status: "LIVE",
      releaseDate: "2024-10-05",
      price: { base: 69.99, sale: 54.99, currency: "USD" },
      rating: 4.7,
      playerCount: "45.2K",
      reviewCount: 8934,
      images: {
        hero: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=120&fit=crop"
      },
      description: "Immersive fantasy RPG with deep character progression and epic quests.",
      features: ["Open World", "Character Classes", "Co-op Campaign"],
      stats: { peakPlayers: 125000, averageSession: "4.8 hours", retention: "91%" },
      storeLinks: { steam: "https://store.steampowered.com/", direct: "/buy/legends-aetheria" }
    },
    
    // Survival Games
    {
      id: 6,
      title: "Last Haven",
      tagline: "Survive the Apocalypse",
      category: "survival",
      genres: ["Survival", "Horror", "Co-op"],
      platforms: ["PC", "PlayStation", "Xbox"],
      status: "EARLY_ACCESS",
      releaseDate: "2025-03-15",
      price: { base: 29.99, sale: 19.99, currency: "USD" },
      rating: 4.6,
      playerCount: "22.1K",
      reviewCount: 2156,
      images: {
        hero: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=200&h=120&fit=crop"
      },
      description: "Post-apocalyptic survival with crafting, base building, and psychological horror.",
      features: ["4-Player Co-op", "Base Building", "Dynamic Weather"],
      stats: { peakPlayers: 58000, averageSession: "3.2 hours", retention: "78%" },
      storeLinks: { steam: "https://store.steampowered.com/", direct: "/buy/last-haven" }
    },
    
    // Racing Games
    {
      id: 7,
      title: "Velocity Championship",
      tagline: "High-Speed Racing Evolved",
      category: "racing",
      genres: ["Racing", "Sports", "Simulation"],
      platforms: ["PC", "PlayStation", "Xbox"],
      status: "LIVE",
      releaseDate: "2024-09-12",
      price: { base: 59.99, sale: 39.99, currency: "USD" },
      rating: 4.4,
      playerCount: "18.5K",
      reviewCount: 3421,
      images: {
        hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=200&h=120&fit=crop"
      },
      description: "Realistic racing simulation with 200+ licensed vehicles and dynamic weather.",
      features: ["Licensed Cars", "Weather System", "Career Mode"],
      stats: { peakPlayers: 42000, averageSession: "1.8 hours", retention: "85%" },
      storeLinks: { steam: "https://store.steampowered.com/", direct: "/buy/velocity-championship" }
    },
    
    // Space Exploration
    {
      id: 8,
      title: "Stellar Frontier",
      tagline: "Explore the Unknown",
      category: "space",
      genres: ["Space Sim", "Exploration", "Trading"],
      platforms: ["PC", "Mac"],
      status: "BETA",
      releaseDate: "2025-06-01",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 4.7,
      playerCount: "14.3K",
      reviewCount: 1876,
      images: {
        hero: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=200&h=120&fit=crop"
      },
      description: "Infinite universe exploration with ship customization and alien diplomacy.",
      features: ["Infinite Universe", "Ship Building", "Alien Races"],
      stats: { peakPlayers: 28000, averageSession: "4.1 hours", retention: "89%" },
      storeLinks: { steam: "https://store.steampowered.com/", direct: "/buy/stellar-frontier" }
    },
    
    // Mobile Games
    {
      id: 9,
      title: "Pocket Heroes Quest",
      tagline: "Epic Adventures Anywhere",
      category: "mobile",
      genres: ["Mobile RPG", "Turn-Based", "Collection"],
      platforms: ["iOS", "Android"],
      status: "LIVE",
      releaseDate: "2024-08-10",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 4.5,
      playerCount: "125.7K",
      reviewCount: 15423,
      images: {
        hero: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=200&h=120&fit=crop"
      },
      description: "Collect legendary heroes in strategic turn-based mobile RPG battles.",
      features: ["200+ Heroes", "PvP Arena", "Guild Wars"],
      stats: { peakPlayers: 285000, averageSession: "25 min", retention: "73%" },
      storeLinks: { ios: "https://apps.apple.com/", android: "https://play.google.com/", direct: "/buy/pocket-heroes" }
    },
    
    // Web Games
    {
      id: 10,
      title: "Web Warriors Arena",
      tagline: "No Download Required",
      category: "web",
      genres: ["Web Game", "Strategy", "PvP"],
      platforms: ["Web Browser"],
      status: "LIVE",
      releaseDate: "2024-07-05",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 4.4,
      playerCount: "67.8K",
      reviewCount: 4532,
      images: {
        hero: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
        thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=120&fit=crop"
      },
      description: "Instant browser strategy with no downloads. Command armies in real-time PvP.",
      features: ["Instant Play", "Cross-Device", "Clan Wars"],
      stats: { peakPlayers: 95000, averageSession: "35 min", retention: "71%" },
      storeLinks: { web: "https://webwarriors.game/", direct: "/play/web-warriors" }
    }
  ];

  const gameCategories = [
    { id: 'all', name: 'All Games', icon: Gamepad2, count: games.length },
    { id: 'fps', name: 'FPS & Shooters', icon: Trophy, count: games.filter(g => g.category === 'fps').length },
    { id: 'rts', name: 'Strategy & RTS', icon: Star, count: games.filter(g => g.category === 'rts').length },
    { id: 'rpg', name: 'RPG & Fantasy', icon: Users, count: games.filter(g => g.category === 'rpg').length },
    { id: 'survival', name: 'Survival & Horror', icon: Play, count: games.filter(g => g.category === 'survival').length },
    { id: 'racing', name: 'Racing & Sports', icon: TrendingUp, count: games.filter(g => g.category === 'racing').length },
    { id: 'space', name: 'Space & Sci-Fi', icon: Calendar, count: games.filter(g => g.category === 'space').length },
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

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Compact Header - Matching SaaS Section Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-800/50 border border-slate-700 px-4 py-2 mb-4">
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-bold text-sm tracking-wider">PRIORITY #1: GAME USERS</span>
          </div>
          
          <h2 className="text-3xl font-black text-white mb-3 tracking-tight">
            PREMIUM GAMING LIBRARY + DEVELOPMENT TOOLS
          </h2>
          
          <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
            Professional game development studio with real-time analytics, cross-platform deployment, and community management tools.
          </p>
        </div>

        {/* Compact Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 border border-slate-700 p-4 text-center">
            <div className="text-2xl font-black text-purple-400">{games.length}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Total Games</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-4 text-center">
            <div className="text-2xl font-black text-green-400">9</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Genres</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-4 text-center">
            <div className="text-2xl font-black text-blue-400">425K+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Active Players</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 p-4 text-center">
            <div className="text-2xl font-black text-orange-400">42K+</div>
            <div className="text-xs text-slate-400 uppercase tracking-wide">Reviews</div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search games, genres, platforms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 text-white pl-10 pr-4 py-2 text-sm focus:border-purple-400 focus:outline-none transition-colors"
            />
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-800/50 border border-slate-700 text-white px-4 py-2 text-sm focus:border-purple-400 focus:outline-none"
          >
            <option value="popular">Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="players">Most Players</option>
            <option value="newest">Newest</option>
            <option value="price">Price</option>
          </select>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {gameCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 text-sm font-bold transition-all ${
                  activeCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                <span>{category.name}</span>
                <span className="bg-slate-600 text-xs px-1.5 py-0.5 rounded-full">{category.count}</span>
              </button>
            );
          })}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredGames.map((game) => (
            <CompactGameCard key={game.id} game={game} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center border-t border-slate-800 pt-12">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-bold transition-all duration-300 space-x-2"
          >
            <Gamepad2 className="w-4 h-4" />
            <span>EXPLORE DEVELOPMENT TOOLS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
