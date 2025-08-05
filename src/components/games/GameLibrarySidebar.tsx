
import React from 'react';
import { 
  Play, 
  Star, 
  Users, 
  TrendingUp, 
  Trophy, 
  Zap,
  Shield,
  Target,
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
    <div className="bg-slate-900/95 backdrop-blur-sm h-full flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-slate-700/50 bg-slate-800/50">
        <div className="flex items-center space-x-2 mb-2">
          <Trophy className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 font-black font-mono tracking-wide text-xs">GAME LIBRARY</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">{games.length} Games</span>
          <div className="flex items-center space-x-1 text-green-400">
            <TrendingUp className="w-3 h-3" />
            <span className="font-mono text-xs">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Games List - Compact */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-2 space-y-1">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className={`w-full text-left p-2 border transition-all duration-200 hover:scale-[1.01] group rounded-md ${
                selectedGameId === game.id
                  ? 'bg-purple-500/20 border-purple-400 shadow-md ring-1 ring-purple-400/30'
                  : 'bg-slate-800/50 border-slate-700/30 hover:border-purple-500/30 hover:bg-slate-800/70'
              }`}
            >
              <div className="flex items-center gap-2">
                {/* Game Thumbnail */}
                <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded border border-slate-700/50 relative">
                  <img
                    src={game.images.hero}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute -top-1 -right-1">
                    <div className={`flex items-center justify-center w-4 h-4 rounded-full text-xs border backdrop-blur-sm ${getStatusColor(game.status)}`}>
                      {getStatusIcon(game.status)}
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-xs truncate leading-tight">
                        {game.title}
                      </h3>
                      <p className="text-purple-400 text-xs truncate opacity-80">
                        {game.tagline}
                      </p>
                    </div>
                    <div className="ml-2 flex items-center space-x-1">
                      <span className="text-xs">{getCategoryIcon(game.category)}</span>
                      {game.stats.esportsReady && (
                        <Trophy className="w-3 h-3 text-yellow-400" />
                      )}
                    </div>
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <span className="text-green-400 font-bold text-xs">
                        {formatPrice(game)}
                      </span>
                      {game.price.sale && (
                        <span className="text-slate-500 line-through text-xs">
                          ${game.price.base}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-white font-bold text-xs">{game.rating}</span>
                    </div>
                  </div>

                  {/* Player Count */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      <span className="text-slate-400 text-xs">{game.playerCount}</span>
                    </div>
                    <div className="text-slate-500 text-xs">
                      {new Date(game.releaseDate).getFullYear()}
                    </div>
                  </div>
                </div>

                {/* Play Icon */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-purple-500/90 p-1 rounded border border-purple-400/50">
                    <Play className="w-3 h-3 text-white" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-slate-700/50 bg-slate-800/50">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="text-center">
            <div className="text-green-400 font-bold">$2.4M+</div>
            <div className="text-slate-400 text-xs">Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-purple-400 font-bold">500K+</div>
            <div className="text-slate-400 text-xs">Players</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLibrarySidebar;
