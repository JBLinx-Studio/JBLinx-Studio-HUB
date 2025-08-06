import React, { useState, useMemo } from 'react';
import { ArrowRight, Trophy, Play, Gamepad2, Users, Download, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import GameLibrarySidebar from './games/GameLibrarySidebar';
import GameDetailsPanel from './games/GameDetailsPanel';
import GameUpdatesPanel from './games/GameUpdatesPanel';
import CommunityPanel from './games/CommunityPanel';
import DeveloperInsights from './games/DeveloperInsights';
import VerticalPanelContainer from './ui/VerticalPanelContainer';

const GamesSection = () => {
  const [selectedGameId, setSelectedGameId] = useState(1);

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
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/tactical-strike-trailer",
      description: "Experience intense 5v5 tactical combat with advanced weapon systems, destructible environments, and strategic team gameplay. Master multiple game modes across diverse battlegrounds with realistic physics and cutting-edge graphics.",
      features: ["Anti-Cheat Protection", "Competitive Ranking", "Custom Loadouts", "Voice Chat", "Spectator Mode", "Replay System"],
      systemReqs: { min: "GTX 1060, 8GB RAM, DirectX 11", recommended: "RTX 3060, 16GB RAM, DirectX 12" },
      dlc: [
        { name: "Urban Warfare Pack", price: 14.99, status: "available" },
        { name: "Elite Operator Skins", price: 9.99, status: "available" }
      ],
      stats: {
        peakPlayers: 45000,
        averageSession: "45min",
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
          "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/empire-conquest-trailer",
      description: "Command massive armies across land, sea, and air in this next-generation real-time strategy experience. Build civilizations from the ground up with complex resource management, diplomatic systems, and epic battles featuring thousands of units.",
      features: ["Epic 100v100 Battles", "Civilization Builder", "Advanced AI", "Map Editor", "Campaign Mode", "Mod Support"],
      systemReqs: { min: "GTX 1660, 12GB RAM, DirectX 11", recommended: "RTX 4060, 32GB RAM, DirectX 12" },
      dlc: [
        { name: "Ancient Dynasties", price: 19.99, status: "preorder" },
        { name: "Naval Warfare", price: 12.99, status: "available" }
      ],
      stats: {
        peakPlayers: 12000,
        averageSession: "2.5hrs",
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
          "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1438565434616-3ef039228b15?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/last-haven-trailer",
      description: "Survive in a haunting post-apocalyptic world where humanity's last remnants fight for survival. Craft weapons, build shelters, and maintain your sanity while facing both the undead hordes and other desperate survivors in this intense co-op experience.",
      features: ["4-Player Co-op", "Base Building", "Psychological Horror", "Day/Night Cycle", "Dynamic Weather", "Crafting System"],
      systemReqs: { min: "GTX 1050 Ti, 8GB RAM, DirectX 11", recommended: "RTX 3070, 16GB RAM, DirectX 12" },
      dlc: [
        { name: "Winter Wasteland", price: 15.99, status: "upcoming" }
      ],
      stats: {
        peakPlayers: 25000,
        averageSession: "3.2hrs",
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
          "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/stellar-frontier-trailer",
      description: "Command your own starship and explore procedurally generated galaxies filled with mysteries, alien civilizations, and cosmic phenomena. Trade with exotic species, engage in epic space battles, and build your interstellar empire.",
      features: ["Infinite Universe", "Ship Customization", "Alien Diplomacy", "Fleet Combat", "Cross-Platform", "Procedural Generation"],
      systemReqs: { min: "GTX 960, 6GB RAM, DirectX 11", recommended: "RTX 2060, 12GB RAM, DirectX 12" },
      dlc: [
        { name: "Alien Races Pack", price: 11.99, status: "upcoming" }
      ],
      stats: {
        peakPlayers: 8500,
        averageSession: "4.1hrs",
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
          "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/pocket-heroes-trailer",
      description: "Collect legendary heroes and embark on epic quests in this award-winning mobile RPG. Strategic turn-based combat meets stunning mobile graphics with deep character customization and engaging storylines.",
      features: ["200+ Heroes", "PvP Arena", "Guild System", "Daily Events", "Offline Play", "Cross-Save"],
      systemReqs: { min: "iOS 12+ / Android 8+", recommended: "iOS 15+ / Android 11+" },
      dlc: [
        { name: "Legendary Pack", price: 7.99, status: "available" },
        { name: "Premium Pass", price: 4.99, status: "available" }
      ],
      stats: {
        peakPlayers: 125000,
        averageSession: "25min",
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
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=600&h=400&fit=crop",
          "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop"
        ]
      },
      trailer: "https://example.com/web-warriors-trailer",
      description: "Fast-paced browser strategy game with no downloads required. Command armies, build bases, and dominate in real-time multiplayer battles from any device with cutting-edge WebGL technology.",
      features: ["Instant Play", "Cross-Device", "Real-time PvP", "Clan Wars", "Tournament Mode", "WebGL Graphics"],
      systemReqs: { min: "Modern Web Browser", recommended: "Chrome/Firefox Latest" },
      dlc: [
        { name: "Premium Commander", price: 9.99, status: "available" }
      ],
      stats: {
        peakPlayers: 35000,
        averageSession: "35min",
        retention: "71%",
        esportsReady: true
      },
      storeLinks: {
        web: "https://webwarriors.game/",
        direct: "/play/web-warriors"
      }
    }
  ];

  const selectedGame = games.find(game => game.id === selectedGameId) || games[0];

  return (
    <section className="py-12 bg-slate-950 relative min-h-[1200px]">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-slate-800/90 border border-purple-500/30 px-4 py-2 mb-4">
            <Trophy className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-300 font-bold text-sm tracking-wider uppercase">Gaming Portfolio</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4 font-mono tracking-tight">
            PROFESSIONAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">GAME</span> LIBRARY
          </h2>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4"></div>
          
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Interactive gaming experiences across multiple platforms and genres
          </p>
        </div>

        {/* Compact Stats Grid */}
        <div className="grid grid-cols-4 gap-3 mb-8">
          {[
            { icon: Users, label: 'PLAYERS', value: '112K+', color: 'text-green-400' },
            { icon: Star, label: 'RATING', value: '4.7★', color: 'text-yellow-400' },
            { icon: Download, label: 'DOWNLOADS', value: '45K+', color: 'text-blue-400' },
            { icon: Trophy, label: 'GAMES', value: '6', color: 'text-purple-400' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800/40 border border-slate-700/50 p-3 text-center hover:border-purple-400/50 transition-colors">
                <div className="w-8 h-8 bg-slate-700/50 flex items-center justify-center mx-auto mb-2">
                  <IconComponent className={`w-4 h-4 ${stat.color}`} />
                </div>
                <div className={`text-sm font-black ${stat.color} font-mono`}>{stat.value}</div>
                <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid - Separate Panels */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          {/* Game Library Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="bg-slate-800/40 border border-slate-700/50 h-[600px] overflow-hidden">
              <GameLibrarySidebar 
                games={games} 
                selectedGameId={selectedGameId}
                onSelectGame={setSelectedGameId}
              />
            </div>
          </div>

          {/* Main Game Details Panel */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-slate-800/40 border border-slate-700/50 h-[600px] overflow-hidden">
              <GameDetailsPanel game={selectedGame} />
            </div>
          </div>

          {/* Right Side Panels - Stackable */}
          <div className="col-span-12 lg:col-span-3 space-y-4">
            {/* Updates Panel */}
            <div className="bg-slate-800/40 border border-slate-700/50 h-[190px]">
              <VerticalPanelContainer panelHeight={190} showNavigation={true} className="h-full">
                <GameUpdatesPanel game={selectedGame} />
              </VerticalPanelContainer>
            </div>

            {/* Community Panel */}
            <div className="bg-slate-800/40 border border-slate-700/50 h-[200px]">
              <VerticalPanelContainer panelHeight={200} showNavigation={true} className="h-full">
                <CommunityPanel game={selectedGame} />
              </VerticalPanelContainer>
            </div>

            {/* Developer Insights Panel */}
            <div className="bg-slate-800/40 border border-slate-700/50 h-[200px]">
              <VerticalPanelContainer panelHeight={200} showNavigation={true} className="h-full">
                <DeveloperInsights game={selectedGame} />
              </VerticalPanelContainer>
            </div>
          </div>
        </div>

        {/* Compact CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 font-bold transition-all duration-300 space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Play className="w-4 h-4" />
            <span className="tracking-wide">EXPLORE ALL GAMES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
