
import React, { useState } from 'react';
import { 
  Gamepad2, 
  Download, 
  Star, 
  Users, 
  Trophy,
  Zap,
  ArrowRight,
  Eye,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GameDetailsPanel from './games/GameDetailsPanel';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import DeveloperInsights from './games/DeveloperInsights';
import SectionWrapper from './ui/SectionWrapper';
import StatGrid from './ui/StatGrid';
import CTABanner from './ui/CTABanner';

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
        gallery: []
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Engage in intense tactical battles in a neon-lit cyberpunk world. Command elite squads, strategize, and conquer the digital frontier.",
      features: ["Real-time strategy", "Cybernetic enhancements", "Multiplayer battles"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, NVIDIA GTX 970",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2060"
      },
      dlc: [
        { name: "Elite Soldier Pack", price: "19.99", releaseDate: "2024-09-01", status: "AVAILABLE", image: "", description: "Advanced soldier equipment and exclusive cybernetic upgrades." },
        { name: "Cyberpunk Arsenal", price: "29.99", releaseDate: "2024-10-15", status: "PRE-ORDER", image: "", description: "Futuristic weapons pack with plasma rifles and neural disruptors." }
      ],
      stats: {
        peakPlayers: 15000,
        averageSession: "2 hours",
        retention: "65%",
        esportsReady: true
      },
      storeLinks: {}
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
      images: { hero: "", gallery: [] },
      trailer: "",
      description: "Build your kingdom, train your armies, and conquer rival empires in this epic medieval strategy game.",
      features: ["Real-time battles", "Hero customization", "Alliance system"],
      systemReqs: { min: "", recommended: "" },
      dlc: [],
      stats: { peakPlayers: 25000, averageSession: "3 hours", retention: "70%", esportsReady: false },
      storeLinks: {}
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
      images: { hero: "", gallery: [] },
      trailer: "",
      description: "Scavenge for resources, fortify your base, and fight off hordes of zombies in this post-apocalyptic survival horror game.",
      features: ["Base building", "Zombie hordes", "Co-op multiplayer"],
      systemReqs: { min: "", recommended: "" },
      dlc: [],
      stats: { peakPlayers: 8000, averageSession: "2.5 hours", retention: "60%", esportsReady: false },
      storeLinks: {}
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
      images: { hero: "", gallery: [] },
      trailer: "",
      description: "Embark on an epic journey through the stars. Colonize planets, research technologies, and command fleets.",
      features: ["4X gameplay", "Space battles", "Tech research"],
      systemReqs: { min: "", recommended: "" },
      dlc: [],
      stats: { peakPlayers: 0, averageSession: "0", retention: "0", esportsReady: false },
      storeLinks: {}
    }
  ];

  const gameStats = [
    { icon: Gamepad2, value: "15+", label: "Games", color: "purple" as const },
    { icon: Users, value: "150k+", label: "Players", color: "blue" as const },
    { icon: Star, value: "4.9/5", label: "Rating", color: "yellow" as const },
    { icon: Trophy, value: "50+", label: "Awards", color: "green" as const }
  ];

  const currentGame = games[activeGame];

  return (
    <SectionWrapper
      id="games"
      badge={{ icon: Gamepad2, label: "GAME UNIVERSE", color: "purple" }}
      title={{ main: "WHAT WE", accent: "PLAY", accentColor: "purple" }}
      subtitle="Immersive gaming experiences across multiple platforms and genres"
      backgroundVariant="gaming"
    >
      {/* Game Stats */}
      <StatGrid stats={gameStats} columns={4} compact className="max-w-xl mx-auto mb-8" />

      {/* Game Selection Grid */}
      <div className="grid lg:grid-cols-4 gap-4 mb-6">
        {games.map((game, index) => {
          const isActive = activeGame === index;
          return (
            <div 
              key={index} 
              className={`bg-zinc-800/90 border transition-all duration-300 cursor-pointer p-4 backdrop-blur-sm ${
                isActive ? 'border-purple-500/50 shadow-lg' : 'border-zinc-700 hover:border-zinc-600'
              }`}
              onMouseEnter={() => setActiveGame(index)}
            >
              {/* Game Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-card-title ${isActive ? 'text-purple-400' : 'text-white'}`}>
                      {game.title}
                    </h3>
                    <p className="text-xs text-zinc-400">{game.category}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-white font-bold text-xs">{game.rating}</span>
                  </div>
                  <div className={`text-xs font-bold ${isActive ? 'text-purple-400' : 'text-zinc-400'}`}>
                    {game.playerCount}
                  </div>
                </div>
              </div>

              {/* Game Content */}
              <div className="space-y-3">
                <p className="text-card-body line-clamp-2">{game.description}</p>
                
                {/* Genres */}
                <div className="flex flex-wrap gap-2">
                  {game.genres.slice(0, 3).map((genre, genreIndex) => (
                    <span 
                      key={genreIndex} 
                      className={`px-2 py-1 text-xs font-bold border transition-all duration-300 ${
                        isActive 
                          ? 'border-purple-500/40 bg-purple-500/10 text-purple-400' 
                          : 'border-zinc-600 bg-zinc-700/50 text-zinc-300'
                      }`}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                {/* Stats & CTA */}
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center space-x-2 text-xs">
                    <Users className="w-3 h-3 text-zinc-400" />
                    <span className="text-zinc-300 font-medium">{game.stats.peakPlayers}k</span>
                  </div>
                  
                  <Link 
                    to={`/game/${game.id}`} 
                    className={`flex items-center space-x-1 text-xs font-bold transition-all duration-300 hover:scale-105 ${
                      isActive ? 'text-purple-400' : 'text-zinc-400 hover:text-purple-400'
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

      {/* Panel Navigation */}
      <div className="bg-zinc-800/80 border border-zinc-600/50 p-4 mb-5 backdrop-blur-sm">
        <div className="flex justify-center space-x-3">
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
                className={`flex items-center space-x-2 px-4 py-2 text-xs font-bold transition-all duration-300 ${
                  selectedPanel === panel.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-zinc-700/50 text-zinc-400 hover:bg-zinc-600/50 hover:text-white'
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
      <div className="bg-zinc-800/80 border border-zinc-600/50 backdrop-blur-sm mb-8">
        {selectedPanel === 'details' && <GameDetailsPanel game={currentGame} />}
        {selectedPanel === 'dlc' && <DLCUpdatesPanel dlcs={currentGame.dlc} updates={[]} />}
        {selectedPanel === 'insights' && <DeveloperInsights games={games} />}
        {selectedPanel === 'community' && (
          <div className="p-8 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-purple-400" />
            <h3 className="text-white font-black text-xl mb-3 font-mono">JOIN THE COMMUNITY</h3>
            <p className="text-card-body mb-6">Connect with players, share strategies, and get the latest updates</p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-zinc-900/50 border border-purple-400/30 p-4 text-center">
                <div className="text-purple-400 font-black text-xl">150k+</div>
                <div className="text-zinc-400 text-sm">Active Players</div>
              </div>
              <div className="bg-zinc-900/50 border border-blue-400/30 p-4 text-center">
                <div className="text-blue-400 font-black text-xl">50+</div>
                <div className="text-zinc-400 text-sm">Tournaments</div>
              </div>
              <div className="bg-zinc-900/50 border border-cyan-400/30 p-4 text-center">
                <div className="text-cyan-400 font-black text-xl">24/7</div>
                <div className="text-zinc-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <CTABanner
        title={{ prefix: "EXPLORE ALL", accent: "GAMES" }}
        description="Discover our complete catalog of immersive gaming experiences across all platforms."
        primaryAction={{ label: "VIEW ALL GAMES", href: "/game-development", icon: Zap }}
        accentColor="purple"
      />
    </SectionWrapper>
  );
};

export default GamesSection;
