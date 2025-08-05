
import React from 'react';
import { 
  Play, 
  Star, 
  Users, 
  Calendar, 
  TrendingUp, 
  Trophy, 
  Zap,
  Shield,
  Target,
  Gamepad2,
  Download,
  Eye,
  MessageCircle,
  Clock
} from 'lucide-react';

interface Game {
  id: number;
  title: string;
  tagline: string;
  category: string;
  status: string;
  price: { base: number; sale: number | null; currency: string };
  rating: number;
  playerCount: string;
  images: { hero: string; gallery: string[] };
  releaseDate: string;
  description: string;
  stats: {
    esportsReady: boolean;
    peakPlayers: number;
    averageSession: string;
  };
}

interface GameLibrarySidebarProps {
  games: Game[];
  selectedGameId: number;
  onSelectGame: (gameId: number) => void;
}

const GameLibrarySidebar: React.FC<GameLibrarySidebarProps> = ({
  games,
  selectedGameId,
  onSelectGame
}) => {
  const formatPrice = (game: Game) => {
    if (game.price.base === 0) return 'F2P';
    if (game.price.sale) return `$${game.price.sale}`;
    return `$${game.price.base}`;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'LIVE': return <Zap className="w-3 h-3 text-green-400" />;
      case 'BETA': return <Shield className="w-3 h-3 text-yellow-400" />;
      case 'EARLY_ACCESS': return <Target className="w-3 h-3 text-blue-400" />;
      default: return <Clock className="w-3 h-3 text-red-400" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'fps': return '🔫';
      case 'rts': return '⚔️';
      case 'survival': return '🏕️';
      case 'space': return '🚀';
      case 'mobile': return '📱';
      case 'web': return '🌐';
      default: return '🎮';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'BETA': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'EARLY_ACCESS': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default: return 'bg-red-500/20 text-red-400 border-red-500/50';
    }
  };

  return (
    <div className="bg-slate-900/95 backdrop-blur-sm border border-purple-500/20 h-full flex flex-col overflow-hidden shadow-2xl shadow-purple-500/10">
      {/* Compact Header */}
      <div className="p-3 border-b border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-slate-900/20">
        <div className="flex items-center space-x-2 mb-1">
          <div className="flex items-center space-x-1">
            <Trophy className="w-4 h-4 text-purple-400" />
            <Gamepad2 className="w-3 h-3 text-cyan-400" />
          </div>
          <span className="text-purple-400 font-black font-mono tracking-wide text-xs">GAME LIBRARY</span>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">{games.length} Games</span>
          <div className="flex items-center space-x-1 text-green-400">
            <TrendingUp className="w-3 h-3" />
            <span className="font-mono text-xs">LIVE</span>
          </div>
        </div>
      </div>

      {/* Compact Games List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-2 space-y-1">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className={`w-full text-left p-2 border transition-all duration-300 hover:scale-[1.01] group ${
                selectedGameId === game.id
                  ? 'bg-purple-500/20 border-purple-400 shadow-lg shadow-purple-500/20 ring-1 ring-purple-400/30'
                  : 'bg-slate-900/50 border-slate-700/50 hover:border-purple-500/30 hover:bg-slate-800/70'
              }`}
            >
              {/* Compact Game Hero with Overlay */}
              <div className="aspect-video mb-2 overflow-hidden rounded border border-slate-700/50 relative group-hover:border-purple-500/30 transition-colors">
                <img
                  src={game.images.hero}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Compact Status & Category Badges */}
                <div className="absolute top-1 left-1">
                  <div className={`flex items-center space-x-1 px-1.5 py-0.5 rounded text-xs font-bold border backdrop-blur-sm ${getStatusColor(game.status)}`}>
                    {getStatusIcon(game.status)}
                    <span className="font-mono text-xs">{game.status.replace('_', '')}</span>
                  </div>
                </div>

                <div className="absolute top-1 right-1">
                  <div className="bg-slate-800/90 text-cyan-400 px-1.5 py-0.5 rounded text-xs font-bold backdrop-blur-sm border border-cyan-500/30">
                    <span className="mr-1">{getCategoryIcon(game.category)}</span>
                  </div>
                </div>

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-purple-500/90 p-1.5 rounded-full backdrop-blur-sm">
                    <Play className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>

              {/* Compact Game Info */}
              <div className="space-y-1.5">
                {/* Title and Price Row */}
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-black text-sm truncate font-mono leading-tight">
                      {game.title}
                    </h3>
                    <p className="text-purple-400 text-xs truncate font-medium">
                      {game.tagline}
                    </p>
                  </div>
                  <div className="ml-2 flex items-center space-x-1">
                    <span className="text-green-400 font-black text-xs font-mono">
                      {formatPrice(game)}
                    </span>
                    {game.stats.esportsReady && (
                      <Trophy className="w-3 h-3 text-yellow-400" />
                    )}
                  </div>
                </div>

                {/* Compact Description */}
                <p className="text-slate-300 text-xs leading-tight line-clamp-2">
                  {game.description}
                </p>

                {/* Compact Stats Row */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white font-bold font-mono">{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      <span className="text-white font-bold font-mono">{game.playerCount}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span className="font-mono text-xs">{new Date(game.releaseDate).getFullYear()}</span>
                  </div>
                </div>

                {/* Mini Gallery Strip */}
                <div className="flex gap-0.5">
                  {game.images.gallery.slice(0, 4).map((image, index) => (
                    <div key={index} className="flex-1 aspect-square rounded-sm overflow-hidden border border-slate-700/30">
                      <img src={image} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>

                {/* Action Icons */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-700/30">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1 text-cyan-400">
                      <Download className="w-3 h-3" />
                      <span className="font-mono text-xs">{Math.floor(game.stats.peakPlayers / 1000)}K</span>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-400">
                      <Clock className="w-3 h-3" />
                      <span className="font-mono text-xs">{game.stats.averageSession}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-slate-400">
                    <Eye className="w-3 h-3" />
                    <MessageCircle className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Compact Footer */}
      <div className="p-3 border-t border-purple-500/30 bg-gradient-to-r from-slate-900/20 to-purple-900/20">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="text-center">
            <div className="text-green-400 font-black font-mono text-sm">$2.4M+</div>
            <div className="text-slate-400 text-xs">Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-black font-mono text-sm">500K+</div>
            <div className="text-slate-400 text-xs">Players</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLibrarySidebar;
