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
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const games = [{
    id: 1,
    title: "Ocean's Peril: Survival",
    tagline: "Medieval Naval Survival Adventure",
    category: "survival",
    genres: ["Survival", "Medieval", "Naval", "Exploration"],
    platforms: ["PC", "PlayStation", "Xbox"],
    status: "LIVE",
    releaseDate: "2024-11-15",
    price: {
      base: 34.99,
      sale: 24.99,
      currency: "USD"
    },
    rating: 4.7,
    playerCount: "18.3K",
    reviewCount: 3247,
    images: {
      hero: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Navigate treacherous medieval seas as a ship captain. Build and upgrade your vessel, manage crew morale, trade with coastal settlements, and survive storms, pirates, and sea monsters in this immersive naval survival experience.",
    features: ["Dynamic Weather System", "Ship Customization", "Crew Management", "Trading System", "Sea Combat", "Exploration"],
    systemReqs: {
      min: "GTX 1060, 8GB RAM",
      recommended: "RTX 3060, 16GB RAM"
    },
    dlc: [{
      name: "Kraken's Domain",
      price: 12.99,
      status: "available"
    }, {
      name: "Pirate Hunter Pack",
      price: 8.99,
      status: "available"
    }],
    stats: {
      peakPlayers: 32000,
      averageSession: "2.8 hours",
      retention: "84%",
      esportsReady: false
    },
    storeLinks: {
      steam: "https://store.steampowered.com/",
      epic: "https://store.epicgames.com/",
      direct: "/buy/oceans-peril"
    },
    updates: [{
      version: "1.4.2",
      date: "3 days ago",
      notes: "New ship types: Galleon and Frigate, improved storm physics",
      downloads: "15.7K",
      rating: "4.8"
    }, {
      version: "1.4.1",
      date: "1 week ago",
      notes: "Crew AI improvements, new trading routes",
      downloads: "22.1K",
      rating: "4.7"
    }],
    devLogs: [{
      id: 1,
      title: "Designing Realistic Naval Combat",
      date: "2 days ago",
      excerpt: "How we balance authenticity with engaging gameplay",
      category: "Development"
    }]
  }, {
    id: 2,
    title: "Warzone Nexus",
    tagline: "Tactical FPS with Marketplace",
    category: "fps",
    genres: ["FPS", "Tactical", "Multiplayer", "Competitive"],
    platforms: ["PC", "PlayStation", "Xbox"],
    status: "LIVE",
    releaseDate: "2024-09-20",
    price: {
      base: 0,
      sale: null,
      currency: "USD"
    },
    rating: 4.9,
    playerCount: "127.5K",
    reviewCount: 8934,
    images: {
      hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    description: "Free-to-play tactical shooter with 5v5 competitive matches. Features an extensive weapon marketplace, character skins, and seasonal battle passes. Master precise gunplay across multiple game modes.",
    features: ["5v5 Competitive", "Weapon Marketplace", "Battle Pass System", "Ranked Play", "Custom Skins", "Anti-Cheat"],
    systemReqs: {
      min: "GTX 1050 Ti, 6GB RAM",
      recommended: "RTX 3070, 16GB RAM"
    },
    dlc: [{
      name: "Elite Battle Pass",
      price: 9.99,
      status: "available"
    }, {
      name: "Operator Pack Alpha",
      price: 14.99,
      status: "available"
    }],
    stats: {
      peakPlayers: 245000,
      averageSession: "52 min",
      retention: "91%",
      esportsReady: true
    },
    storeLinks: {
      steam: "https://store.steampowered.com/",
      epic: "https://store.epicgames.com/",
      direct: "/play/warzone-nexus"
    },
    updates: [{
      version: "3.2.1",
      date: "1 day ago",
      notes: "New map: Industrial Zone, weapon balance updates",
      downloads: "89.2K",
      rating: "4.9"
    }, {
      version: "3.2.0",
      date: "5 days ago",
      notes: "Season 8 launch: New operators and marketplace items",
      downloads: "156.3K",
      rating: "4.8"
    }],
    devLogs: [{
      id: 2,
      title: "Balancing Competitive Gameplay",
      date: "1 day ago",
      excerpt: "Our approach to weapon statistics and map design",
      category: "Esports"
    }]
  }, {
    id: 3,
    title: "Stellar Odyssey Infinite",
    tagline: "Endless Space Exploration",
    category: "space",
    genres: ["Space Sim", "Top-Down", "Exploration", "Sci-Fi"],
    platforms: ["PC", "Mac", "Steam Deck"],
    status: "EARLY_ACCESS",
    releaseDate: "2024-12-10",
    price: {
      base: 29.99,
      sale: 22.99,
      currency: "USD"
    },
    rating: 4.6,
    playerCount: "24.7K",
    reviewCount: 1876,
    images: {
      hero: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
    description: "Top-down space exploration in an infinite procedurally generated universe. Build space stations, mine asteroids, trade with alien civilizations, and uncover the mysteries of deep space.",
    features: ["Infinite Universe", "Base Building", "Alien Diplomacy", "Resource Mining", "Fleet Management", "Modding Support"],
    systemReqs: {
      min: "GTX 960, 8GB RAM",
      recommended: "RTX 2070, 16GB RAM"
    },
    dlc: [{
      name: "Alien Civilizations Pack",
      price: 15.99,
      status: "upcoming"
    }, {
      name: "Advanced Ship Modules",
      price: 11.99,
      status: "available"
    }],
    stats: {
      peakPlayers: 48000,
      averageSession: "4.2 hours",
      retention: "78%",
      esportsReady: false
    },
    storeLinks: {
      steam: "https://store.steampowered.com/",
      gog: "https://www.gog.com/",
      direct: "/buy/stellar-odyssey"
    },
    updates: [{
      version: "0.7.3",
      date: "4 days ago",
      notes: "New alien race: The Crystalline Collective, improved AI",
      downloads: "18.9K",
      rating: "4.7"
    }],
    devLogs: [{
      id: 3,
      title: "Procedural Universe Generation",
      date: "3 days ago",
      excerpt: "Behind the scenes of infinite world creation",
      category: "Technology"
    }]
  }, {
    id: 4,
    title: "Midnight Manor",
    tagline: "Psychological Horror Experience",
    category: "horror",
    genres: ["Horror", "Psychological", "Mystery", "Single-Player"],
    platforms: ["PC", "PlayStation", "Xbox"],
    status: "LIVE",
    releaseDate: "2024-10-31",
    price: {
      base: 39.99,
      sale: 29.99,
      currency: "USD"
    },
    rating: 4.4,
    playerCount: "8.9K",
    reviewCount: 2134,
    images: {
      hero: "https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1520637736862-4d197d17c13a?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Uncover the dark secrets of an abandoned Victorian manor. Solve puzzles, avoid supernatural entities, and piece together a haunting family mystery in this atmospheric horror experience.",
    features: ["Atmospheric Horror", "Puzzle Solving", "Multiple Endings", "Immersive Audio", "Psychological Elements", "Photo Mode"],
    systemReqs: {
      min: "GTX 1050, 8GB RAM",
      recommended: "RTX 3060, 16GB RAM"
    },
    dlc: [{
      name: "The Basement Chronicles",
      price: 12.99,
      status: "available"
    }],
    stats: {
      peakPlayers: 15000,
      averageSession: "3.5 hours",
      retention: "67%",
      esportsReady: false
    },
    storeLinks: {
      steam: "https://store.steampowered.com/",
      epic: "https://store.epicgames.com/",
      direct: "/buy/midnight-manor"
    },
    updates: [{
      version: "1.1.2",
      date: "1 week ago",
      notes: "Performance improvements, new ending discovered",
      downloads: "7.2K",
      rating: "4.5"
    }],
    devLogs: [{
      id: 4,
      title: "Creating Authentic Horror Atmosphere",
      date: "1 week ago",
      excerpt: "Sound design and visual techniques for fear",
      category: "Design"
    }]
  }, {
    id: 5,
    title: "Kingdom's Valor",
    tagline: "Medieval Real-Time Strategy",
    category: "rts",
    genres: ["RTS", "Medieval", "Strategy", "Base Building"],
    platforms: ["PC", "Mac"],
    status: "LIVE",
    releaseDate: "2024-08-15",
    price: {
      base: 49.99,
      sale: null,
      currency: "USD"
    },
    rating: 4.8,
    playerCount: "16.2K",
    reviewCount: 3456,
    images: {
      hero: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    description: "Command medieval armies in epic real-time battles. Build castles, manage resources, forge alliances, and conquer territories in campaigns spanning multiple kingdoms and time periods.",
    features: ["Epic Battles 1000v1000", "Castle Building", "Resource Management", "Campaign Editor", "Multiplayer Conquest", "Historical Accuracy"],
    systemReqs: {
      min: "GTX 1660, 12GB RAM",
      recommended: "RTX 4060, 32GB RAM"
    },
    dlc: [{
      name: "The Crusades Campaign",
      price: 19.99,
      status: "available"
    }, {
      name: "Viking Expansion",
      price: 16.99,
      status: "preorder"
    }],
    stats: {
      peakPlayers: 28000,
      averageSession: "2.1 hours",
      retention: "89%",
      esportsReady: true
    },
    storeLinks: {
      steam: "https://store.steampowered.com/",
      gog: "https://www.gog.com/",
      direct: "/buy/kingdoms-valor"
    },
    updates: [{
      version: "2.1.5",
      date: "2 days ago",
      notes: "New faction: Byzantine Empire, balance improvements",
      downloads: "12.8K",
      rating: "4.9"
    }],
    devLogs: [{
      id: 5,
      title: "Historical Research for Authenticity",
      date: "4 days ago",
      excerpt: "Our commitment to medieval accuracy",
      category: "Research"
    }]
  }, {
    id: 6,
    title: "Arcane Legends TCG",
    tagline: "Strategic Card Battles",
    category: "card",
    genres: ["Card Game", "Strategy", "TCG", "Fantasy"],
    platforms: ["PC", "Mobile", "Web Browser"],
    status: "LIVE",
    releaseDate: "2024-07-12",
    price: {
      base: 0,
      sale: null,
      currency: "USD"
    },
    rating: 4.5,
    playerCount: "67.4K",
    reviewCount: 5672,
    images: {
      hero: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Collect, build, and battle with legendary cards in this fantasy TCG. Create powerful decks, master complex strategies, and climb the ranked ladder in both casual and competitive play.",
    features: ["500+ Cards", "Deck Builder", "Ranked Battles", "Tournament Mode", "Card Crafting", "Cross-Platform"],
    systemReqs: {
      min: "Any modern device",
      recommended: "High-end mobile or PC"
    },
    dlc: [{
      name: "Shadowlands Expansion",
      price: 24.99,
      status: "available"
    }, {
      name: "Starter Pack Bundle",
      price: 9.99,
      status: "available"
    }],
    stats: {
      peakPlayers: 125000,
      averageSession: "35 min",
      retention: "73%",
      esportsReady: true
    },
    storeLinks: {
      steam: "https://store.steampowered.com/",
      mobile: "https://play.google.com/store/",
      web: "https://arcane-tcg.game/",
      direct: "/play/arcane-legends"
    },
    updates: [{
      version: "4.2.1",
      date: "2 days ago",
      notes: "New expansion: Rise of Dragons, 75 new cards",
      downloads: "45.3K",
      rating: "4.7"
    }],
    devLogs: [{
      id: 6,
      title: "Balancing 500+ Cards",
      date: "3 days ago",
      excerpt: "Mathematical approaches to card game balance",
      category: "Design"
    }]
  }, {
    id: 7,
    title: "Grand Hotel Empire",
    tagline: "Hotel Management Simulation",
    category: "web",
    genres: ["Simulation", "Management", "Business", "Web Game"],
    platforms: ["Web Browser", "Mobile"],
    status: "LIVE",
    releaseDate: "2024-06-05",
    price: {
      base: 0,
      sale: null,
      currency: "USD"
    },
    rating: 4.3,
    playerCount: "43.8K",
    reviewCount: 3289,
    images: {
      hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Build and manage a luxury hotel empire. Design rooms, hire staff, manage finances, and keep guests happy while expanding your hospitality business across multiple locations.",
    features: ["Hotel Design", "Staff Management", "Guest Satisfaction", "Financial Planning", "Multi-Location", "Real-Time Events"],
    systemReqs: {
      min: "Modern Web Browser",
      recommended: "Chrome/Firefox Latest"
    },
    dlc: [{
      name: "Resort Paradise Pack",
      price: 7.99,
      status: "available"
    }],
    stats: {
      peakPlayers: 67000,
      averageSession: "1.8 hours",
      retention: "82%",
      esportsReady: false
    },
    storeLinks: {
      web: "https://hotel-empire.game/",
      mobile: "https://play.google.com/store/",
      direct: "/play/hotel-empire"
    },
    updates: [{
      version: "2.4.3",
      date: "3 days ago",
      notes: "New hotel themes: Modern and Vintage, guest AI improvements",
      downloads: "28.7K",
      rating: "4.4"
    }],
    devLogs: [{
      id: 7,
      title: "Realistic Hotel Economics",
      date: "5 days ago",
      excerpt: "Research into hospitality industry mechanics",
      category: "Simulation"
    }]
  }, {
    id: 8,
    title: "Colony Prime",
    tagline: "Rimworld-Style Colony Sim",
    category: "web",
    genres: ["Colony Sim", "Management", "Survival", "Web Game"],
    platforms: ["Web Browser", "PC"],
    status: "BETA",
    releaseDate: "2025-01-20",
    price: {
      base: 19.99,
      sale: 14.99,
      currency: "USD"
    },
    rating: 4.6,
    playerCount: "12.4K",
    reviewCount: 892,
    images: {
      hero: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    description: "Manage a space colony on an alien world. Handle colonist needs, build infrastructure, research technology, and survive environmental hazards while expanding your settlement.",
    features: ["Colony Management", "Colonist Psychology", "Research Tree", "Environmental Hazards", "Storyteller AI", "Mod Support"],
    systemReqs: {
      min: "Modern Browser / GTX 750",
      recommended: "Chrome Latest / GTX 1060"
    },
    dlc: [{
      name: "Alien Biomes Pack",
      price: 12.99,
      status: "upcoming"
    }],
    stats: {
      peakPlayers: 18000,
      averageSession: "3.2 hours",
      retention: "86%",
      esportsReady: false
    },
    storeLinks: {
      steam: "https://store.steampowered.com/",
      web: "https://colony-prime.game/",
      direct: "/buy/colony-prime"
    },
    updates: [{
      version: "0.8.4",
      date: "1 week ago",
      notes: "New research branch: Xenobiology, improved colonist AI",
      downloads: "6.8K",
      rating: "4.7"
    }],
    devLogs: [{
      id: 8,
      title: "AI-Driven Storytelling",
      date: "1 week ago",
      excerpt: "How our storyteller creates unique colony narratives",
      category: "AI"
    }]
  }, {
    id: 9,
    title: "Pocket Adventures",
    tagline: "Mini Mobile Game Collection",
    category: "mobile",
    genres: ["Mobile", "Casual", "Mini-Games", "Collection"],
    platforms: ["iOS", "Android"],
    status: "LIVE",
    releaseDate: "2024-05-15",
    price: {
      base: 0,
      sale: null,
      currency: "USD"
    },
    rating: 4.2,
    playerCount: "89.3K",
    reviewCount: 12456,
    images: {
      hero: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=450&fit=crop",
      gallery: ["https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop", "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=400&fit=crop"]
    },
    trailer: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "A collection of 20+ mini-games perfect for quick play sessions. From puzzle games to arcade action, each game offers unique challenges and achievements.",
    features: ["20+ Mini Games", "Daily Challenges", "Achievement System", "Offline Play", "Cloud Save", "No Ads Premium"],
    systemReqs: {
      min: "iOS 12+ / Android 8+",
      recommended: "iOS 15+ / Android 11+"
    },
    dlc: [{
      name: "Premium Game Pack",
      price: 4.99,
      status: "available"
    }, {
      name: "Ad-Free Experience",
      price: 2.99,
      status: "available"
    }],
    stats: {
      peakPlayers: 156000,
      averageSession: "15 min",
      retention: "65%",
      esportsReady: false
    },
    storeLinks: {
      ios: "https://apps.apple.com/",
      android: "https://play.google.com/store/",
      direct: "/download/pocket-adventures"
    },
    updates: [{
      version: "3.1.8",
      date: "4 days ago",
      notes: "3 new mini-games added: Block Puzzle, Color Match, Speed Runner",
      downloads: "67.2K",
      rating: "4.3"
    }],
    devLogs: [{
      id: 9,
      title: "Designing for Mobile First",
      date: "6 days ago",
      excerpt: "Touch controls and quick gameplay sessions",
      category: "Mobile"
    }]
  }];

  const filteredGames = useMemo(() => {
    let filtered = games;
    if (activeCategory !== 'all') {
      filtered = filtered.filter(game => game.category === activeCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(game => game.title.toLowerCase().includes(searchQuery.toLowerCase()) || game.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase())));
    }
    return filtered;
  }, [activeCategory, searchQuery]);

  const selectedGame = games.find(game => game.id === selectedGameId) || games[0];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dragDistance = e.clientX - dragStart;
    if (Math.abs(dragDistance) > 100) {
      if (dragDistance > 0 && currentPanel > 0) {
        setCurrentPanel(currentPanel - 1);
      } else if (dragDistance < 0 && currentPanel < panels.length - 1) {
        setCurrentPanel(currentPanel + 1);
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const panels = [
    {
      id: 'overview',
      title: 'Game Overview',
      component: (
        <div className="flex h-full">
          <div className="w-72 flex-shrink-0">
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
          <div className="w-72 flex-shrink-0">
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
          <div className="w-64 flex-shrink-0">
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
          <div className="w-72 flex-shrink-0">
            <GameLibraryPanel 
              games={filteredGames} 
              selectedGameId={selectedGameId} 
              onSelectGame={setSelectedGameId} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>
          <div className="flex-1 bg-zinc-800/95 p-6 overflow-y-auto backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-white font-mono">PERFORMANCE ANALYTICS</h3>
                <div className="text-purple-400 font-mono text-sm">REAL-TIME DATA</div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-800/50 border border-zinc-700/50 p-4 backdrop-blur-sm">
                  <h4 className="text-purple-400 font-bold mb-4 text-sm">PLAYER METRICS</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300 text-sm">Peak Players</span>
                      <span className="text-white font-bold text-sm">{selectedGame.stats.peakPlayers.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300 text-sm">Avg Session</span>
                      <span className="text-white font-bold text-sm">{selectedGame.stats.averageSession}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300 text-sm">Retention Rate</span>
                      <span className="text-green-400 font-bold text-sm">{selectedGame.stats.retention}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800/50 border border-zinc-700/50 p-4 backdrop-blur-sm">
                  <h4 className="text-cyan-400 font-bold mb-4 text-sm">PLATFORM BREAKDOWN</h4>
                  <div className="space-y-3">
                    {selectedGame.platforms.map((platform, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-zinc-300 text-sm">{platform}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-zinc-700 h-2">
                            <div 
                              className="h-full bg-cyan-400" 
                              style={{ width: `${Math.floor(Math.random() * 60 + 20)}%` }}
                            ></div>
                          </div>
                          <span className="text-white font-bold text-sm w-10">
                            {Math.floor(Math.random() * 40 + 20)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-800/50 border border-zinc-700/50 p-4 backdrop-blur-sm">
                  <h4 className="text-yellow-400 font-bold mb-4 text-sm">REVENUE INSIGHTS</h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-lg font-black text-white">
                        ${(selectedGame.price.base * 1500).toLocaleString()}
                      </div>
                      <div className="text-zinc-400 text-xs">Monthly Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-black text-white">
                        {selectedGame.reviewCount.toLocaleString()}
                      </div>
                      <div className="text-zinc-400 text-xs">Total Reviews</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-black text-white">{selectedGame.rating}/5</div>
                      <div className="text-zinc-400 text-xs">Rating</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700/50 p-6 backdrop-blur-sm">
                <h4 className="text-green-400 font-bold mb-4">GROWTH TRENDS</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-green-400">+12%</div>
                    <div className="text-zinc-400 text-xs">Weekly Growth</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-blue-400">+34%</div>
                    <div className="text-zinc-400 text-xs">Monthly Growth</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-purple-400">87%</div>
                    <div className="text-zinc-400 text-xs">User Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-orange-400">92%</div>
                    <div className="text-zinc-400 text-xs">Server Uptime</div>
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
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-24 overflow-hidden">
      {/* Enhanced paradoxical background effects - Purple theme for Games */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* Primary ambient lighting with paradoxical movement */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/12 to-pink-500/8 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/12 to-violet-500/8 blur-3xl rounded-full animate-pulse transform rotate-45" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-400/8 to-pink-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Paradoxical secondary layers */}
        <div className="absolute top-1/6 right-1/3 w-[400px] h-[400px] bg-gradient-to-l from-purple-300/10 to-pink-300/6 blur-2xl rounded-full animate-pulse transform rotate-12" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-violet-400/8 to-purple-400/6 blur-2xl rounded-full animate-pulse transform -rotate-12" style={{animationDelay: '3s'}}></div>
        
        {/* Enhanced paradoxical grid overlay */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(236, 72, 153, 0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px'
          }}></div>
        </div>

        {/* Floating geometric paradoxical shapes */}
        <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-purple-400/40 transform rotate-45 animate-pulse border border-purple-400/30 shadow-lg shadow-purple-400/20"></div>
        <div className="absolute top-1/5 right-1/4 w-6 h-6 bg-pink-400/40 rounded-full animate-pulse border border-pink-400/30 shadow-lg shadow-pink-400/20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-purple-400/35 animate-pulse border border-purple-400/25 shadow-lg shadow-purple-400/20 transform rotate-12" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/5 right-1/6 w-12 h-12 bg-violet-400/30 transform rotate-30 animate-pulse border border-violet-400/20 shadow-lg shadow-violet-400/20" style={{animationDelay: '6s'}}></div>

        {/* Enhanced paradoxical accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent transform rotate-1"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent transform -rotate-1"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent transform rotate-2"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-400/40 to-transparent transform -rotate-2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">JBLINX GAMING STUDIO</span>
          </div>
          
          <h2 className="text-xl font-black text-white leading-tight font-mono mb-2">
            PREMIUM <span className="text-purple-400">GAME</span> LIBRARY
          </h2>
          
          <div className="w-12 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-zinc-400 max-w-lg mx-auto text-sm">
            Professional games across all platforms with cutting-edge graphics
          </p>
        </div>

        {/* Compact Stats - Single Row */}
        <div className="flex justify-center gap-6 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-green-400" />
            <div>
              <div className="text-sm font-black text-white font-mono">425K+</div>
              <div className="text-zinc-400 text-xs font-bold">PLAYERS</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <div>
              <div className="text-sm font-black text-white font-mono">4.6★</div>
              <div className="text-zinc-400 text-xs font-bold">RATING</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Download className="w-4 h-4 text-purple-400" />
            <div>
              <div className="text-sm font-black text-white font-mono">9</div>
              <div className="text-zinc-400 text-xs font-bold">GAMES</div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search games..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              className="w-full bg-zinc-800/50 border border-zinc-700 text-white pl-9 pr-4 py-2 text-sm focus:border-purple-400 focus:outline-none backdrop-blur-sm transition-colors" 
            />
          </div>
        </div>

        {/* Main Panel Container */}
        <div 
          className="relative h-[750px] bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm overflow-hidden cursor-grab active:cursor-grabbing" 
          onMouseDown={handleMouseDown} 
          onMouseMove={handleMouseMove} 
          onMouseUp={handleMouseUp} 
          onMouseLeave={handleMouseUp}
        >
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
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-zinc-800/90 border border-purple-500/50 text-purple-400 p-2 backdrop-blur-sm hover:bg-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={handleNext} 
            disabled={currentPanel === panels.length - 1} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-800/90 border border-purple-500/50 text-purple-400 p-2 backdrop-blur-sm hover:bg-purple-500/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Panel Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2 z-20 bg-zinc-800/50 backdrop-blur-sm px-3 py-1">
            {panels.map((_, index) => (
              <button 
                key={index} 
                onClick={() => navigateToPanel(index)} 
                className={`w-2 h-2 transition-all duration-300 ${
                  index === currentPanel ? 'bg-purple-400 scale-125' : 'bg-zinc-600 hover:bg-purple-400/50'
                }`} 
              />
            ))}
          </div>

          {/* Panel Title */}
          <div className="absolute top-3 left-3 bg-zinc-800/90 backdrop-blur-sm px-3 py-1 z-20">
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
