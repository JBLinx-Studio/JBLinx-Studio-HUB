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
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GameCard from './games/GameCard';
import FeaturedGameHero from './games/FeaturedGameHero';
import GameDetailsPanel from './games/GameDetailsPanel';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import DeveloperInsights from './games/DeveloperInsights';
import AdditionalGamesContent from './games/AdditionalGamesContent';

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
      playerCount: "10k+",
      reviewCount: 2450,
      images: {
        hero: "https://source.unsplash.com/random/800x600/?cyberpunk",
        gallery: [
          "https://source.unsplash.com/random/400x300/?cyberpunk,city",
          "https://source.unsplash.com/random/400x300/?cyberpunk,soldier",
          "https://source.unsplash.com/random/400x300/?cyberpunk,tech"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Engage in intense tactical battles in a neon-lit cyberpunk world. Command elite squads, strategize, and conquer the digital frontier.",
      features: ["Real-time strategy", "Cybernetic enhancements", "Multiplayer battles"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, NVIDIA GTX 970",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2060"
      },
      dlc: [
        { name: "Elite Soldier Pack", price: "$19.99", status: "AVAILABLE", releaseDate: "2024-08-15", image: "https://source.unsplash.com/random/400x300/?cyberpunk", description: "Advanced weapons and armor for elite soldiers" },
        { name: "Cyberpunk Arsenal", price: "$29.99", status: "PRE-ORDER", releaseDate: "2024-12-01", image: "https://source.unsplash.com/random/400x300/?weapons", description: "Futuristic weapons collection" }
      ],
      stats: {
        peakPlayers: 15000,
        averageSession: "2 hours",
        retention: "65%",
        esportsReady: true
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        gog: "https://www.gog.com/game/your_game_id",
        direct: "https://yourgame.com/buy"
      }
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
        hero: "https://source.unsplash.com/random/800x600/?medieval",
        gallery: [
          "https://source.unsplash.com/random/400x300/?medieval,castle",
          "https://source.unsplash.com/random/400x300/?medieval,knight",
          "https://source.unsplash.com/random/400x300/?medieval,battle"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Build your kingdom, train your armies, and conquer rival empires in this epic medieval strategy game.",
      features: ["Real-time battles", "Hero customization", "Alliance system"],
      systemReqs: {
        min: "Intel Core i3, 4GB RAM, Integrated Graphics",
        recommended: "Intel Core i5, 8GB RAM, NVIDIA GTX 750"
      },
      dlc: [
        { name: "Royal Edition", price: "$24.99", status: "AVAILABLE", releaseDate: "2024-11-01", image: "https://source.unsplash.com/random/400x300/?medieval", description: "Royal content pack with exclusive items" },
        { name: "Kingdoms Expansion", price: "$34.99", status: "PRE-ORDER", releaseDate: "2025-01-15", image: "https://source.unsplash.com/random/400x300/?kingdom", description: "Expand your empire with new kingdoms" }
      ],
      stats: {
        peakPlayers: 25000,
        averageSession: "3 hours",
        retention: "70%",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        direct: "https://yourgame.com/buy"
      }
    },
    {
      id: 3,
      title: "Last Haven: Zombie Outbreak",
      tagline: "Survive the apocalypse, rebuild humanity",
      category: "Survival/Horror",
      genres: ["Zombie", "Survival", "Horror"],
      platforms: ["PC", "PlayStation", "Xbox"],
      status: "EARLY_ACCESS",
      releaseDate: "2025-03-10",
      price: { base: 29.99, sale: 24.99, currency: "USD" },
      rating: 4.2,
      playerCount: "5k+",
      reviewCount: 950,
      images: {
        hero: "https://source.unsplash.com/random/800x600/?zombie",
        gallery: [
          "https://source.unsplash.com/random/400x300/?zombie,city",
          "https://source.unsplash.com/random/400x300/?zombie,survivor",
          "https://source.unsplash.com/random/400x300/?zombie,apocalypse"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Scavenge for resources, fortify your base, and fight off hordes of zombies in this post-apocalyptic survival horror game.",
      features: ["Base building", "Zombie hordes", "Co-op multiplayer"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, NVIDIA GTX 960",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2070"
      },
      dlc: [
        { name: "Survivor Pack", price: "$14.99", status: "AVAILABLE", releaseDate: "2025-03-10", image: "https://source.unsplash.com/random/400x300/?survival", description: "Essential survival gear and weapons" },
        { name: "Undead Expansion", price: "$19.99", status: "COMING_SOON", releaseDate: "2025-06-01", image: "https://source.unsplash.com/random/400x300/?zombie", description: "New zombie types and areas" }
      ],
      stats: {
        peakPlayers: 8000,
        averageSession: "2.5 hours",
        retention: "60%",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        playstation: "https://store.playstation.com/your_game_id",
        xbox: "https://www.xbox.com/your_game_id"
      }
    },
    {
      id: 4,
      title: "Stellar Frontier: Space Odyssey",
      tagline: "Explore the cosmos, build your empire",
      category: "Sci-Fi/Strategy",
      genres: ["Space", "Strategy", "Sci-Fi"],
      platforms: ["PC", "Mobile"],
      status: "COMING_SOON",
      releaseDate: "2025-06-20",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 0,
      playerCount: "0",
      reviewCount: 0,
      images: {
        hero: "https://source.unsplash.com/random/800x600/?space",
        gallery: [
          "https://source.unsplash.com/random/400x300/?space,planet",
          "https://source.unsplash.com/random/400x300/?space,ship",
          "https://source.unsplash.com/random/400x300/?space,colony"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Embark on an epic journey through the stars. Colonize planets, research technologies, and command fleets in this expansive space strategy game.",
      features: ["4X gameplay", "Space battles", "Tech research"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, Integrated Graphics",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA GTX 1060"
      },
      dlc: [],
      stats: {
        peakPlayers: 0,
        averageSession: "0",
        retention: "0",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        mobile: "https://play.google.com/store/apps/details?id=your.app.id"
      }
    }
  ];

  const gameStats = [
    {
      icon: Gamepad2,
      value: "15+",
      label: "Games",
      color: "text-purple-400"
    },
    {
      icon: Users,
      value: "150k+",
      label: "Players",
      color: "text-blue-400"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating",
      color: "text-yellow-400"
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Awards",
      color: "text-green-400"
    }
  ];

  const currentGame = games[activeGame];

  // Mock updates data with proper structure
  const mockUpdates = [
    {
      version: "2.4.1",
      date: "Dec 15, 2024",
      notes: "Performance improvements and bug fixes for multiplayer mode",
      downloads: "25k",
      rating: "4.8"
    },
    {
      version: "2.4.0",
      date: "Dec 1, 2024", 
      notes: "Major update with new weapons and tactical abilities",
      downloads: "45k",
      rating: "4.9"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-16 overflow-hidden">
      {/* Enhanced paradoxical background effects - unique purple/blue theme */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Primary ambient lighting with paradoxical movement */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/8 to-blue-500/6 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/8 to-purple-500/6 blur-3xl rounded-full animate-pulse transform rotate-45" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-violet-400/6 to-cyan-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Enhanced paradoxical grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Games Header - styled like Services */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-zinc-800/90 border border-purple-500/30 px-4 py-2 mb-4 backdrop-blur-sm">
            <Gamepad2 className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest">GAME UNIVERSE</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            WHAT WE <span className="text-purple-400">PLAY</span>
          </h2>
          
          <div className="w-20 h-0.5 bg-purple-400 mx-auto mb-4"></div>
          
          <p className="text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Immersive gaming experiences across multiple platforms and genres
          </p>

          {/* Game Stats - styled like Services stats */}
          <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto mb-8">
            {gameStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/70 border border-zinc-700/50 p-4 text-center backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300">
                  <IconComponent className={`w-5 h-5 ${stat.color} mx-auto mb-2`} />
                  <div className={`text-lg font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Game Selection Grid - styled like Services */}
        <div className="grid lg:grid-cols-4 gap-4 mb-8">
          {games.map((game, index) => {
            const isActive = activeGame === index;
            return (
              <div 
                key={index} 
                className={`bg-zinc-800/90 border transition-all duration-300 cursor-pointer p-4 backdrop-blur-sm hover:scale-[1.02] ${
                  isActive ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' : 'border-zinc-700/50 hover:border-zinc-600/50'
                }`}
                onMouseEnter={() => setActiveGame(index)}
              >
                {/* Game Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center ${isActive ? 'shadow-lg shadow-purple-500/30' : ''}`}>
                      <Gamepad2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-black font-mono ${isActive ? 'text-purple-400' : 'text-white'}`}>
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

                {/* Game Content */}
                <div className="space-y-3">
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{game.description}</p>
                  
                  {/* Genres */}
                  <div className="flex flex-wrap gap-1">
                    {game.genres.slice(0, 3).map((genre, genreIndex) => (
                      <span 
                        key={genreIndex} 
                        className={`px-2 py-1 text-xs font-bold border transition-all duration-300 ${
                          isActive 
                            ? 'border-purple-500/40 bg-purple-500/10 text-purple-400' 
                            : 'border-zinc-600/50 bg-zinc-700/30 text-slate-300'
                        }`}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-700/50">
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
              </div>
            );
          })}
        </div>

        {/* Panel Navigation - styled like Services */}
        <div className="bg-zinc-800/70 border border-zinc-700/50 p-4 mb-6 backdrop-blur-sm">
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
                  className={`flex items-center space-x-2 px-4 py-3 text-xs font-bold transition-all duration-300 hover:scale-105 ${
                    selectedPanel === panel.id
                      ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-zinc-700/50 text-slate-400 hover:bg-zinc-600/50 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{panel.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Panel Content */}
        <div className="bg-zinc-800/70 border border-zinc-700/50 backdrop-blur-sm mb-8">
          {selectedPanel === 'details' && <GameDetailsPanel game={currentGame} />}
          {selectedPanel === 'dlc' && <DLCUpdatesPanel dlcs={currentGame.dlc} updates={mockUpdates} />}
          {selectedPanel === 'insights' && <DeveloperInsights games={games} />}
          {selectedPanel === 'community' && (
            <div className="p-8 text-center">
              <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-zinc-900/50 border border-purple-500/30 px-4 py-2 mb-6 backdrop-blur-sm">
                  <Users className="w-4 h-4 mr-2 text-purple-400" />
                  <span className="text-purple-400 font-black text-sm font-mono tracking-widest">COMMUNITY HUB</span>
                </div>
                
                <h3 className="text-white font-black text-2xl mb-4 font-mono">JOIN THE <span className="text-purple-400">COMMUNITY</span></h3>
                <p className="text-slate-400 mb-8 leading-relaxed">Connect with players, share strategies, and get the latest updates</p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="bg-zinc-900/30 border border-purple-400/20 p-6 text-center backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
                    <div className="text-purple-400 font-black text-3xl font-mono">150k+</div>
                    <div className="text-slate-400 text-sm font-medium">Active Players</div>
                  </div>
                  <div className="bg-zinc-900/30 border border-blue-400/20 p-6 text-center backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                    <div className="text-blue-400 font-black text-3xl font-mono">50+</div>
                    <div className="text-slate-400 text-sm font-medium">Tournaments</div>
                  </div>
                  <div className="bg-zinc-900/30 border border-cyan-400/20 p-6 text-center backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
                    <div className="text-cyan-400 font-black text-3xl font-mono">24/7</div>
                    <div className="text-slate-400 text-sm font-medium">Support</div>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 font-black transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25">
                  JOIN COMMUNITY
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CTA - styled like Services */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 font-black transition-all duration-300 space-x-2 shadow-lg shadow-purple-500/25 hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            <span>EXPLORE ALL GAMES</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
