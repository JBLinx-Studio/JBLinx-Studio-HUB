
import React from 'react';
import { 
  Play, 
  Download, 
  Star, 
  Trophy, 
  Users, 
  Clock, 
  Shield, 
  Zap,
  Heart,
  Share2,
  Bookmark,
  Volume2,
  Maximize,
  Award
} from 'lucide-react';

const CinematicGameShowcase = () => {
  const featuredGames = [
    {
      id: 1,
      title: "Cyber Nexus: Revolution",
      subtitle: "The Ultimate Cyberpunk Experience",
      genre: "Action RPG",
      rating: "4.9",
      downloads: "125k",
      price: "$49.99",
      players: "1-4",
      playtime: "80+ hrs",
      difficulty: "EXPERT",
      status: "RELEASED",
      image: "/api/placeholder/600/400",
      video: "/api/placeholder/600/400",
      description: "Immerse yourself in a neon-lit dystopian future where your choices shape the destiny of humanity.",
      features: ["Ray Tracing", "4K HDR", "120 FPS", "VR Ready"],
      tags: ["Cyberpunk", "Open World", "Multiplayer", "Story Rich"]
    },
    {
      id: 2,
      title: "Mystic Realms Online",
      subtitle: "Forge Your Legend",
      genre: "MMORPG",
      rating: "4.8",
      downloads: "89k",
      price: "$39.99",
      players: "1-200",
      playtime: "500+ hrs",
      difficulty: "MEDIUM",
      status: "EARLY ACCESS",
      image: "/api/placeholder/600/400",
      video: "/api/placeholder/600/400",
      description: "Build your empire in a vast fantasy world with dynamic weather and AI-driven storylines.",
      features: ["Dynamic World", "AI NPCs", "Guild Wars", "Crafting"],
      tags: ["Fantasy", "MMORPG", "PvP", "Crafting"]
    },
    {
      id: 3,
      title: "Quantum Racing Pro",
      subtitle: "Defy Physics",
      genre: "Racing Sim",
      rating: "4.7",
      downloads: "67k",
      price: "$34.99",
      players: "1-32",
      playtime: "60+ hrs",
      difficulty: "HARD",
      status: "RELEASED",
      image: "/api/placeholder/600/400",
      video: "/api/placeholder/600/400",
      description: "Experience gravity-defying races across impossible tracks in quantum dimensions.",
      features: ["Anti-Gravity", "Track Editor", "Pro Physics", "Esports"],
      tags: ["Racing", "Sci-Fi", "Competitive", "Physics"]
    }
  ];

  return (
    <div className="flex space-x-6">
      {featuredGames.map((game) => (
        <div key={game.id} className="min-w-[500px] max-w-[500px] bg-slate-900/95 border border-slate-700/50 overflow-hidden group">
          {/* Video/Image Header */}
          <div className="relative h-64 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Controls */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-4 right-4 flex space-x-2">
                <button className="bg-black/50 hover:bg-black/70 p-2 backdrop-blur-sm transition-colors">
                  <Volume2 className="w-4 h-4 text-white" />
                </button>
                <button className="bg-black/50 hover:bg-black/70 p-2 backdrop-blur-sm transition-colors">
                  <Maximize className="w-4 h-4 text-white" />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <button className="bg-purple-500 hover:bg-purple-600 text-black px-6 py-2 font-black flex items-center space-x-2 transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                  <span>WATCH TRAILER</span>
                </button>
                
                <div className="flex space-x-2">
                  <button className="bg-black/50 hover:bg-black/70 p-2 backdrop-blur-sm transition-colors">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                  <button className="bg-black/50 hover:bg-black/70 p-2 backdrop-blur-sm transition-colors">
                    <Share2 className="w-4 h-4 text-white" />
                  </button>
                  <button className="bg-black/50 hover:bg-black/70 p-2 backdrop-blur-sm transition-colors">
                    <Bookmark className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 text-xs font-black ${
                game.status === 'RELEASED' ? 'bg-green-500 text-black' : 'bg-yellow-500 text-black'
              }`}>
                {game.status}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Header */}
            <div className="mb-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-xl font-black text-white font-mono leading-tight">{game.title}</h3>
                  <p className="text-purple-400 font-bold text-sm">{game.subtitle}</p>
                  <p className="text-cyan-400 font-bold text-xs">{game.genre}</p>
                </div>
                <div className="text-right">
                  <div className="text-green-400 font-black text-xl">{game.price}</div>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-yellow-400 font-bold text-sm">{game.rating}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">{game.description}</p>
            </div>

            {/* Features */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1 mb-3">
                {game.features.map((feature, index) => (
                  <span key={index} className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 text-purple-300 px-2 py-1 text-xs font-bold">
                    {feature}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-1">
                {game.tags.map((tag, index) => (
                  <span key={index} className="bg-slate-700/50 text-cyan-400 px-2 py-1 text-xs font-bold border border-slate-600">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { icon: Users, value: game.players, label: "PLAYERS" },
                { icon: Clock, value: game.playtime, label: "PLAYTIME" },
                { icon: Shield, value: game.difficulty, label: "DIFFICULTY" },
                { icon: Download, value: game.downloads, label: "DOWNLOADS" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-slate-800/80 border border-slate-600/50 p-3 text-center">
                    <IconComponent className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                    <div className="text-xs font-black text-white">{stat.value}</div>
                    <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 py-3 font-black transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>GET NOW</span>
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 font-black transition-colors flex items-center justify-center">
                <Trophy className="w-4 h-4" />
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 font-black transition-colors flex items-center justify-center">
                <Award className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CinematicGameShowcase;
