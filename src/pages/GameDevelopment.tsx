
import React, { useState } from 'react';
import { 
  Gamepad2, 
  Star, 
  Users, 
  Trophy, 
  Zap, 
  ArrowRight,
  Eye,
  Clock,
  Target,
  Download,
  Filter,
  Play,
  TrendingUp,
  Calendar,
  Globe,
  Cpu,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameLibraryPanel from '../components/games/GameLibraryPanel';
import GameDetailsPanel from '../components/games/GameDetailsPanel';
import DLCUpdatesPanel from '../components/games/DLCUpdatesPanel';
import DeveloperInsights from '../components/games/DeveloperInsights';

const GameDevelopment = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [selectedPanel, setSelectedPanel] = useState('details');
  const [activeCategory, setActiveCategory] = useState('all');

  const games = [
    {
      id: 1,
      title: "Tactical Strike: Cyber Assault",
      category: "fps",
      status: "LIVE",
      rating: 4.8,
      playerCount: "15k+",
      images: {
        hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 49.99, sale: null },
      releaseDate: "2024-08-15",
      platforms: ["PC", "PlayStation", "Xbox"],
      genres: ["FPS", "Tactical", "Cyberpunk"],
      tagline: "Dominate the digital battlefield",
      description: "Engage in intense tactical battles in a neon-lit cyberpunk world. Command elite squads, strategize, and conquer the digital frontier with advanced AI enemies and dynamic environments.",
      features: ["Real-time strategy", "Cybernetic enhancements", "Multiplayer battles", "Advanced AI", "Dynamic weather", "Skill progression"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, NVIDIA GTX 970",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2060"
      },
      stats: {
        peakPlayers: 25000,
        averageSession: "2.5 hours",
        retention: "78%",
        esportsReady: true
      },
      trailer: "https://www.youtube.com/watch?v=example",
      reviewCount: 3420,
      storeLinks: {
        steam: "https://store.steampowered.com",
        epic: "https://store.epicgames.com"
      },
      dlc: [
        { name: "Elite Pack", price: "19.99", releaseDate: "2024-09-01", status: "AVAILABLE", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop", description: "Advanced weapons and armor" }
      ]
    },
    {
      id: 2,
      title: "Empire Conquest: Medieval Warfare",
      category: "rts",
      status: "BETA",
      rating: 4.6,
      playerCount: "12k+",
      images: {
        hero: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 0, sale: null },
      releaseDate: "2024-11-01",
      platforms: ["PC", "Web Browser"],
      genres: ["RTS", "Medieval", "Strategy"],
      tagline: "Forge your empire through the ages",
      description: "Build massive medieval empires, command vast armies, and engage in epic siege warfare. Experience the rise and fall of kingdoms in this immersive real-time strategy experience.",
      features: ["Massive battles", "Castle building", "Resource management", "Diplomacy system", "Historical campaigns", "Multiplayer conquest"],
      systemReqs: {
        min: "Intel Core i3, 4GB RAM, Integrated Graphics",
        recommended: "Intel Core i5, 8GB RAM, NVIDIA GTX 750"
      },
      stats: {
        peakPlayers: 18000,
        averageSession: "3.2 hours",
        retention: "82%",
        esportsReady: true
      },
      trailer: "https://www.youtube.com/watch?v=example",
      reviewCount: 2150,
      storeLinks: {
        steam: "https://store.steampowered.com",
        direct: "https://yourgame.com"
      },
      dlc: [
        { name: "Viking Expansion", price: "24.99", releaseDate: "2024-12-01", status: "PRE_ORDER", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop", description: "Norse warriors and longships" }
      ]
    },
    {
      id: 3,
      title: "Last Haven: Zombie Outbreak",
      category: "survival",
      status: "EARLY_ACCESS",
      rating: 4.4,
      playerCount: "8k+",
      images: {
        hero: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 29.99, sale: 24.99 },
      releaseDate: "2025-03-10",
      platforms: ["PC", "PlayStation", "Xbox"],
      genres: ["Survival", "Horror", "Co-op"],
      tagline: "Survive the apocalypse together",
      description: "Band together with friends to survive the zombie apocalypse. Build fortified bases, scavenge for resources, and fight off massive hordes in this cooperative survival horror experience.",
      features: ["Co-op survival", "Base building", "Zombie hordes", "Crafting system", "Day/night cycle", "Vehicle mechanics"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, NVIDIA GTX 960",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2070"
      },
      stats: {
        peakPlayers: 12000,
        averageSession: "2.8 hours",
        retention: "74%",
        esportsReady: false
      },
      trailer: "https://www.youtube.com/watch?v=example",
      reviewCount: 1890,
      storeLinks: {
        steam: "https://store.steampowered.com",
        xbox: "https://www.xbox.com"
      },
      dlc: [
        { name: "Survival Pack", price: "14.99", releaseDate: "2024-08-20", status: "AVAILABLE", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=150&fit=crop", description: "Advanced survival gear" }
      ]
    },
    {
      id: 4,
      title: "Stellar Frontier: Space Odyssey",
      category: "space",
      status: "COMING_SOON",
      rating: 0,
      playerCount: "0",
      images: {
        hero: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 39.99, sale: null },
      releaseDate: "2025-06-20",
      platforms: ["PC", "Mobile"],
      genres: ["Space", "Strategy", "Exploration"],
      tagline: "Explore the infinite cosmos",
      description: "Embark on an epic journey through the stars. Colonize planets, research alien technologies, and build a galactic empire in this expansive 4X space strategy game.",
      features: ["4X gameplay", "Space exploration", "Colony management", "Tech research", "Alien encounters", "Fleet battles"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, Integrated Graphics",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA GTX 1060"
      },
      stats: {
        peakPlayers: 0,
        averageSession: "0",
        retention: "0%",
        esportsReady: false
      },
      trailer: "https://www.youtube.com/watch?v=example",
      reviewCount: 0,
      storeLinks: {
        steam: "https://store.steampowered.com"
      },
      dlc: []
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
  const filteredGames = activeCategory === 'all' ? games : games.filter(game => game.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      {/* Game Universe Section - Exact Copy from Homepage */}
      <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-24 overflow-hidden">
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

        <div className="container mx-auto px-4 relative z-10">
          {/* Games Header - styled like Services */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
              <Gamepad2 className="w-3 h-3 mr-1 text-purple-400" />
              <span className="text-purple-400 font-black text-xs font-mono tracking-widest">GAME DEVELOPMENT STUDIO</span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
              PREMIUM <span className="text-purple-400">GAMING EXPERIENCES</span>
            </h2>
            
            <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-2"></div>
            
            <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
              Professional game development across multiple platforms and genres with cutting-edge technology
            </p>

            {/* Game Stats */}
            <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
              {gameStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-1.5 text-center backdrop-blur-sm">
                    <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                    <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                    <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Gaming Layout */}
          <div className="grid lg:grid-cols-4 gap-4 mb-5">
            {/* Game Library Panel */}
            <div className="lg:col-span-1">
              <GameLibraryPanel 
                games={games}
                selectedGameId={currentGame.id}
                onSelectGame={(id) => setActiveGame(games.findIndex(g => g.id === id))}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Main Game Display */}
            <div className="lg:col-span-3 space-y-4">
              {/* Featured Game Display */}
              <div className="bg-zinc-800/95 border border-zinc-700 backdrop-blur-sm overflow-hidden">
                <div className="relative h-80">
                  <img 
                    src={currentGame.images.hero} 
                    alt={currentGame.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-3xl font-black text-white font-mono mb-2">{currentGame.title}</h3>
                        <p className="text-purple-400 font-bold text-lg mb-3">{currentGame.tagline}</p>
                        
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-bold">{currentGame.rating}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-cyan-400" />
                            <span className="text-white font-bold">{currentGame.playerCount}</span>
                          </div>
                          <div className="text-green-400 font-black text-xl">
                            {currentGame.price.base === 0 ? 'FREE' : currentGame.price.sale ? `$${currentGame.price.sale}` : `$${currentGame.price.base}`}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {currentGame.genres.map((genre, index) => (
                            <span key={index} className="bg-zinc-800/80 border border-zinc-600 text-cyan-400 px-2 py-1 text-xs font-bold">
                              {genre}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-black transition-colors flex items-center space-x-2">
                          <Play className="w-4 h-4" />
                          <span>PLAY NOW</span>
                        </button>
                        <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-3 transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
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
                        className={`flex items-center space-x-1 px-3 py-2 text-xs font-bold transition-all duration-300 ${
                          selectedPanel === panel.id
                            ? 'bg-purple-500 text-white'
                            : 'bg-zinc-700/50 text-slate-400 hover:bg-zinc-600/50 hover:text-white'
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
                {selectedPanel === 'dlc' && <DLCUpdatesPanel dlcs={currentGame.dlc} updates={[]} />}
                {selectedPanel === 'insights' && <DeveloperInsights games={games} />}
                {selectedPanel === 'community' && (
                  <div className="p-6 text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <h3 className="text-white font-black text-xl mb-2">JOIN THE COMMUNITY</h3>
                    <p className="text-slate-400 mb-4">Connect with players, share strategies, and get the latest updates</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-zinc-900/50 border border-purple-400/30 p-4 text-center">
                        <div className="text-purple-400 font-black text-xl">150k+</div>
                        <div className="text-slate-400 text-sm">Active Players</div>
                      </div>
                      <div className="bg-zinc-900/50 border border-blue-400/30 p-4 text-center">
                        <div className="text-blue-400 font-black text-xl">50+</div>
                        <div className="text-slate-400 text-sm">Tournaments</div>
                      </div>
                      <div className="bg-zinc-900/50 border border-cyan-400/30 p-4 text-center">
                        <div className="text-cyan-400 font-black text-xl">24/7</div>
                        <div className="text-slate-400 text-sm">Support</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
            >
              <Zap className="w-3 h-3" />
              <span>REQUEST CUSTOM GAME</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevelopment;
