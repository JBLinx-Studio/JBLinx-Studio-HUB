import React, { useState } from 'react';
import { Gamepad2, Download, Star, Users, Trophy, Zap, ArrowRight, Eye, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import GameDetailsPanel from './games/GameDetailsPanel';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import DeveloperInsights from './games/DeveloperInsights';

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
      images: { hero: "", gallery: [] },
      trailer: "",
      description: "Engage in intense tactical battles in a neon-lit cyberpunk world. Command elite squads, strategize, and conquer the digital frontier.",
      features: ["Real-time strategy", "Cybernetic enhancements", "Multiplayer battles"],
      systemReqs: { min: "Intel Core i5, 8GB RAM, NVIDIA GTX 970", recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2060" },
      dlc: [
        { name: "Elite Soldier Pack", price: "19.99", releaseDate: "2024-09-01", status: "AVAILABLE", image: "", description: "Advanced soldier equipment." },
        { name: "Cyberpunk Arsenal", price: "29.99", releaseDate: "2024-10-15", status: "PRE-ORDER", image: "", description: "Futuristic weapons pack." }
      ],
      stats: { peakPlayers: 15000, averageSession: "2 hours", retention: "65%", esportsReady: true },
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
    { icon: Gamepad2, value: "15+", label: "Games", color: "text-purple-400" },
    { icon: Users, value: "150k+", label: "Players", color: "text-blue-400" },
    { icon: Star, value: "4.9/5", label: "Rating", color: "text-yellow-400" },
    { icon: Trophy, value: "50+", label: "Awards", color: "text-green-400" }
  ];

  const currentGame = games[activeGame];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'LIVE': return 'status-live';
      case 'BETA': return 'status-beta';
      case 'EARLY_ACCESS': return 'bg-purple-500 text-purple-950';
      case 'COMING_SOON': return 'status-coming-soon';
      default: return 'bg-secondary text-muted-foreground';
    }
  };

  return (
    <section id="games" className="relative bg-gradient-section section-padding overflow-hidden">
      <div className="ambient-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-purple">
            <Gamepad2 className="w-4 h-4" />
            <span>GAME UNIVERSE</span>
          </div>
          
          <h2 className="text-section-title text-foreground mb-3">
            WHAT WE <span className="text-purple-400">PLAY</span>
          </h2>
          
          <div className="section-divider bg-purple-400" />
          
          <p className="section-subtitle">
            Immersive gaming experiences across multiple platforms and genres
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-10">
          {gameStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stat-card">
                <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                <div className={`stat-value ${stat.color}`}>{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Game Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {games.map((game, index) => {
            const isActive = activeGame === index;
            return (
              <div 
                key={index} 
                className={`panel card-padding cursor-pointer transition-all duration-300 ${
                  isActive ? 'border-purple-500/50 shadow-lg' : 'hover:border-border/80'
                }`}
                onClick={() => setActiveGame(index)}
              >
                {/* Game Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/40 flex items-center justify-center">
                      <Gamepad2 className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-bold ${getStatusColor(game.status)}`}>
                    {game.status.replace('_', ' ')}
                  </span>
                </div>
                
                <h3 className={`text-card-title mb-1 line-clamp-1 ${isActive ? 'text-purple-400' : 'text-foreground'}`}>
                  {game.title}
                </h3>
                <p className="text-small mb-3">{game.category}</p>

                {/* Game Content */}
                <p className="text-body line-clamp-2 mb-3">{game.description}</p>
                
                {/* Genres */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {game.genres.slice(0, 2).map((genre, genreIndex) => (
                    <span 
                      key={genreIndex} 
                      className={`tag text-xs ${isActive ? 'bg-purple-500/10 border-purple-500/40 text-purple-400' : 'tag-default'}`}
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="text-small font-bold text-foreground">{game.rating || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-1 text-small">
                    <Users className="w-3 h-3" />
                    <span>{game.playerCount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel Navigation */}
        <div className="panel panel-padding mb-6">
          <div className="flex flex-wrap justify-center gap-2">
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
                  className={`flex items-center gap-2 px-4 py-2 text-label transition-all ${
                    selectedPanel === panel.id
                      ? 'bg-purple-500 text-purple-950'
                      : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
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
        <div className="panel mb-10">
          {selectedPanel === 'details' && <GameDetailsPanel game={currentGame} />}
          {selectedPanel === 'dlc' && <DLCUpdatesPanel dlcs={currentGame.dlc} updates={[]} />}
          {selectedPanel === 'insights' && <DeveloperInsights games={games} />}
          {selectedPanel === 'community' && (
            <div className="card-padding text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-card-title text-foreground mb-3">JOIN THE COMMUNITY</h3>
              <p className="text-body mb-6">Connect with players, share strategies, and get the latest updates</p>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div className="stat-card">
                  <div className="stat-value text-purple-400">150k+</div>
                  <div className="stat-label">Active Players</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value text-blue-400">50+</div>
                  <div className="stat-label">Tournaments</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value text-cyan-400">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-card-title text-foreground mb-2">
            EXPLORE ALL <span className="text-purple-400">GAMES</span>
          </h3>
          <p className="text-body max-w-xl mx-auto mb-4">
            Discover our complete catalog of immersive gaming experiences across all platforms.
          </p>
          <Link to="/game-development" className="btn-primary bg-purple-500 hover:bg-purple-600 shadow-purple-500/25">
            <Zap className="w-4 h-4" />
            <span>VIEW ALL GAMES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
