import React, { useState, useMemo } from 'react';
import { ArrowRight, Trophy, Play, Gamepad2, Users, Download, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import GameLibrarySidebar from './games/GameLibrarySidebar';
import GameDetailsPanel from './games/GameDetailsPanel';
import GameUpdatesPanel from './games/GameUpdatesPanel';
import CommunityPanel from './games/CommunityPanel';
import DeveloperInsights from './games/DeveloperInsights';
import HorizontalDragContainer from './ui/HorizontalDragContainer';

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
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 border-t border-slate-800/50 min-h-[1200px] relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent)]"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Header with Contact Section Style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 px-6 py-3 rounded-full mb-6">
            <Trophy className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">JBLINX GAMING STUDIO</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            PREMIUM <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">GAME</span> LIBRARY
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Professional games across all platforms and genres - Experience cutting-edge gaming entertainment
          </p>
        </div>

        {/* Game Stats with Contact Section Theme */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Users, label: 'ACTIVE PLAYERS', value: '112K+', color: 'text-green-400', gradient: 'from-green-500/20 to-emerald-500/20' },
            { icon: Star, label: 'AVERAGE RATING', value: '4.7★', color: 'text-yellow-400', gradient: 'from-yellow-500/20 to-orange-500/20' },
            { icon: Download, label: 'TOTAL DOWNLOADS', value: '45K+', color: 'text-blue-400', gradient: 'from-blue-500/20 to-cyan-500/20' },
            { icon: Trophy, label: 'LIVE GAMES', value: '6', color: 'text-purple-400', gradient: 'from-purple-500/20 to-pink-500/20' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`bg-gradient-to-br ${stat.gradient} backdrop-blur-sm border border-slate-700/50 p-6 text-center hover:border-purple-400/50 transition-all duration-300 rounded-xl group hover:scale-105`}>
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color} transition-transform duration-300 group-hover:scale-110`} />
                <div className="text-xl font-black text-white font-mono mb-1">{stat.value}</div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Main Content Layout - Much Taller (1000px) */}
        <div className="flex gap-8 h-[1000px] max-h-[1000px] mb-16">
          {/* Left Sidebar - Games Library */}
          <div className="w-80 flex-shrink-0">
            <GameLibrarySidebar 
              games={games} 
              selectedGameId={selectedGameId}
              onSelectGame={setSelectedGameId}
            />
          </div>

          {/* Right Content - Horizontal panels with proper spacing */}
          <div className="flex-1 h-full">
            <HorizontalDragContainer className="h-full rounded-xl overflow-hidden" showNavigation={true}>
              {/* Panel 1: Game Details */}
              <div className="w-full h-full flex-shrink-0 snap-start px-4">
                <GameDetailsPanel game={selectedGame} />
              </div>

              {/* Panel 2: Updates & Community */}
              <div className="w-full h-full flex-shrink-0 snap-start px-4">
                <div className="grid grid-rows-2 gap-6 h-full">
                  <GameUpdatesPanel game={selectedGame} />
                  <CommunityPanel game={selectedGame} />
                </div>
              </div>

              {/* Panel 3: Developer Insights */}
              <div className="w-full h-full flex-shrink-0 snap-start px-4">
                <DeveloperInsights game={selectedGame} />
              </div>
            </HorizontalDragContainer>
          </div>
        </div>

        {/* CTA with Contact Section Theme */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-black text-white mb-4">
              READY TO <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">LEVEL UP?</span>
            </h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto">
              Join thousands of players in our premium gaming ecosystem
            </p>
            <Link 
              to="/game-development" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 font-black transition-all duration-300 space-x-3 shadow-lg rounded-xl hover:scale-105 hover:shadow-purple-500/25"
            >
              <Play className="w-5 h-5" />
              <span>EXPLORE ALL GAMES</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
