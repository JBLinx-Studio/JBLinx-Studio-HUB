
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
    <div className="bg-slate-900/95 backdrop-blur-sm border border-purple-500/20 h-full flex flex-col overflow-hidden shadow-xl rounded">
      {/* Header */}
      <div className="p-4 border-b border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-slate-900/20">
        <div className="flex items-center space-x-2 mb-2">
          <div className="flex items-center space-x-1">
            <Trophy className="w-4 h-4 text-purple-400" />
            <Gamepad2 className="w-4 h-4 text-cyan-400" />
          </div>
          <span className="text-purple-400 font-black font-mono tracking-wide text-xs">GAME LIBRARY</span>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">{games.length} Games</span>
          <div className="flex items-center space-x-1 text-green-400">
            <TrendingUp className="w-3 h-3" />
            <span className="font-mono">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Games List - Compact Version */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-2 space-y-1">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className={`w-full text-left p-3 border transition-all duration-200 hover:scale-[1.01] group rounded ${
                selectedGameId === game.id
                  ? 'bg-purple-500/20 border-purple-400 shadow-md shadow-purple-500/20'
                  : 'bg-slate-900/50 border-slate-700/50 hover:border-purple-500/30 hover:bg-slate-800/70'
              }`}
            >
              {/* Compact Game Info */}
              <div className="flex items-center space-x-3">
                {/* Mini Hero Image */}
                <div className="w-12 h-12 rounded overflow-hidden border border-slate-600 flex-shrink-0 relative">
                  <img
                    src={game.images.hero}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-0 right-0">
                    <div className={`px-1 py-0.5 text-xs font-bold border backdrop-blur-sm rounded-bl ${getStatusColor(game.status)}`}>
                      {getStatusIcon(game.status)}
                    </div>
                  </div>
                </div>

                {/* Game Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-sm truncate font-mono">
                      {game.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {game.stats.esportsReady && (
                        <Trophy className="w-3 h-3 text-yellow-400" />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-purple-400 text-xs truncate font-medium mb-1">
                    {game.tagline}
                  </p>

                  {/* Compact Stats Row */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-white font-bold">{game.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-green-400" />
                        <span className="text-white font-bold">{game.playerCount}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <span className="text-green-400 font-bold font-mono">
                        {formatPrice(game)}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mt-2">
                    <div className="inline-flex items-center bg-slate-800/50 text-cyan-400 px-2 py-0.5 rounded text-xs font-bold border border-cyan-500/30">
                      <span className="mr-1">{getCategoryIcon(game.category)}</span>
                      <span className="font-mono">{game.category.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="p-3 border-t border-purple-500/30 bg-gradient-to-r from-slate-900/20 to-purple-900/20">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="text-center">
            <div className="text-green-400 font-black font-mono">$2.4M+</div>
            <div className="text-slate-400">Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-black font-mono">500K+</div>
            <div className="text-slate-400">Players</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLibrarySidebar;
