
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
import GameCard from '../components/games/GameCard';

const GameDevelopment = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const games = [
    {
      id: 1,
      title: "Tactical Strike: Cyber Assault",
      tagline: "Dominate the digital battlefield",
      category: "fps",
      status: "LIVE",
      rating: 4.8,
      playerCount: "15k+",
      reviewCount: 3420,
      images: {
        hero: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 49.99, sale: 39.99, currency: "USD" },
      releaseDate: "2024-08-15",
      platforms: ["PC", "PlayStation", "Xbox"],
      genres: ["FPS", "Tactical", "Cyberpunk"],
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
      storeLinks: {
        steam: "https://store.steampowered.com",
        epic: "https://store.epicgames.com"
      },
      dlc: [
        { name: "Elite Pack", price: 19.99, releaseDate: "2024-09-01", status: "AVAILABLE", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=150&fit=crop", description: "Advanced weapons and armor" }
      ]
    },
    {
      id: 2,
      title: "Empire Conquest: Medieval Warfare",
      tagline: "Forge your empire through the ages",
      category: "rts",
      status: "BETA",
      rating: 4.6,
      playerCount: "12k+",
      reviewCount: 2150,
      images: {
        hero: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 0, sale: 0, currency: "USD" },
      releaseDate: "2024-11-01",
      platforms: ["PC", "Web Browser"],
      genres: ["RTS", "Medieval", "Strategy"],
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
      storeLinks: {
        steam: "https://store.steampowered.com",
        direct: "https://yourgame.com"
      },
      dlc: [
        { name: "Viking Expansion", price: 24.99, releaseDate: "2024-12-01", status: "PRE_ORDER", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=150&fit=crop", description: "Norse warriors and longships" }
      ]
    },
    {
      id: 3,
      title: "Last Haven: Zombie Outbreak",
      tagline: "Survive the apocalypse together",
      category: "survival",
      status: "EARLY_ACCESS",
      rating: 4.4,
      playerCount: "8k+",
      reviewCount: 1890,
      images: {
        hero: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 29.99, sale: 24.99, currency: "USD" },
      releaseDate: "2025-03-10",
      platforms: ["PC", "PlayStation", "Xbox"],
      genres: ["Survival", "Horror", "Co-op"],
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
      storeLinks: {
        steam: "https://store.steampowered.com",
        xbox: "https://www.xbox.com"
      },
      dlc: [
        { name: "Survival Pack", price: 14.99, releaseDate: "2024-08-20", status: "AVAILABLE", image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=200&h=150&fit=crop", description: "Advanced survival gear" }
      ]
    },
    {
      id: 4,
      title: "Stellar Frontier: Space Odyssey",
      tagline: "Explore the infinite cosmos",
      category: "space",
      status: "COMING_SOON",
      rating: 0,
      playerCount: "0",
      reviewCount: 0,
      images: {
        hero: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 39.99, sale: 0, currency: "USD" },
      releaseDate: "2025-06-20",
      platforms: ["PC", "Mobile"],
      genres: ["Space", "Strategy", "Exploration"],
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
      storeLinks: {
        steam: "https://store.steampowered.com"
      },
      dlc: []
    },
    {
      id: 5,
      title: "Neon Racer: Future Streets",
      tagline: "Speed through cyberpunk cities",
      category: "racing",
      status: "LIVE",
      rating: 4.7,
      playerCount: "22k+",
      reviewCount: 4560,
      images: {
        hero: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1493238792000-8113da705763?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 34.99, sale: 0, currency: "USD" },
      releaseDate: "2024-06-10",
      platforms: ["PC", "PlayStation", "Xbox"],
      genres: ["Racing", "Cyberpunk", "Arcade"],
      description: "Race through neon-lit streets in futuristic vehicles. Experience high-speed thrills in a cyberpunk world with dynamic weather and day/night cycles.",
      features: ["High-speed racing", "Cyberpunk aesthetics", "Vehicle customization", "Online multiplayer", "Dynamic weather", "Neon-lit tracks"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, NVIDIA GTX 1060",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 3060"
      },
      stats: {
        peakPlayers: 35000,
        averageSession: "1.8 hours",
        retention: "85%",
        esportsReady: true
      },
      trailer: "https://www.youtube.com/watch?v=example",
      storeLinks: {
        steam: "https://store.steampowered.com",
        epic: "https://store.epicgames.com"
      },
      dlc: []
    },
    {
      id: 6,
      title: "Mystic Legends: RPG Adventure",
      tagline: "Embark on an epic quest",
      category: "rpg",
      status: "LIVE",
      rating: 4.9,
      playerCount: "45k+",
      reviewCount: 8920,
      images: {
        hero: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        gallery: [
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
        ]
      },
      price: { base: 59.99, sale: 44.99, currency: "USD" },
      releaseDate: "2024-03-15",
      platforms: ["PC", "PlayStation", "Xbox", "Mobile"],
      genres: ["RPG", "Fantasy", "Adventure"],
      description: "Explore vast magical worlds, battle mythical creatures, and forge your destiny in this epic role-playing adventure with deep character customization.",
      features: ["Open world exploration", "Character customization", "Magic system", "Epic quests", "Multiplayer co-op", "Crafting system"],
      systemReqs: {
        min: "Intel Core i5, 12GB RAM, NVIDIA GTX 1070",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 3070"
      },
      stats: {
        peakPlayers: 68000,
        averageSession: "4.2 hours",
        retention: "91%",
        esportsReady: false
      },
      trailer: "https://www.youtube.com/watch?v=example",
      storeLinks: {
        steam: "https://store.steampowered.com",
        epic: "https://store.epicgames.com",
        playstation: "https://store.playstation.com"
      },
      dlc: [
        { name: "Dragon's Legacy", price: 29.99, releaseDate: "2024-07-01", status: "AVAILABLE", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop", description: "New dragon realm and quests" }
      ]
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

  const categories = [
    { id: 'all', name: 'All Games', icon: Gamepad2, color: 'purple' },
    { id: 'fps', name: 'FPS', icon: Zap, color: 'red' },
    { id: 'rts', name: 'Strategy', icon: Shield, color: 'emerald' },
    { id: 'survival', name: 'Survival', icon: Trophy, color: 'amber' },
    { id: 'space', name: 'Space', icon: Globe, color: 'cyan' },
    { id: 'racing', name: 'Racing', icon: Cpu, color: 'orange' },
    { id: 'rpg', name: 'RPG', icon: Star, color: 'pink' }
  ];

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
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-6 py-2 mb-4 backdrop-blur-sm">
              <Gamepad2 className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-purple-400 font-black text-sm font-mono tracking-widest">GAME DEVELOPMENT STUDIO</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono mb-6">
              PREMIUM <span className="text-purple-400">GAMING EXPERIENCES</span>
            </h2>
            
            <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Professional game development across multiple platforms and genres with cutting-edge technology
            </p>

            {/* Game Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {gameStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-6 text-center backdrop-blur-sm hover:border-purple-400/50 transition-colors">
                    <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                    <div className={`text-2xl font-black ${stat.color} font-mono mb-2`}>{stat.value}</div>
                    <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 font-bold transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-${category.color}-500 text-white shadow-lg`
                      : 'bg-zinc-800/80 text-slate-400 hover:bg-zinc-700/80 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 font-black transition-all duration-300 space-x-2 shadow-lg text-lg"
            >
              <Zap className="w-5 h-5" />
              <span>REQUEST CUSTOM GAME</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevelopment;
