
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
    <div className="bg-slate-900/95 backdrop-blur-sm border border-purple-500/20 h-full max-h-[800px] flex flex-col overflow-hidden shadow-2xl shadow-purple-500/10">
      {/* Compact Header */}
      <div className="p-3 border-b border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-slate-900/20">
        <div className="flex items-center space-x-2 mb-1">
          <Trophy className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 font-black font-mono tracking-wide text-xs">GAME LIBRARY</span>
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
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-1">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className={`w-full text-left p-2 border transition-all duration-200 hover:scale-[1.01] group ${
                selectedGameId === game.id
                  ? 'bg-purple-500/20 border-purple-400 shadow-md shadow-purple-500/20'
                  : 'bg-slate-900/50 border-slate-700/50 hover:border-purple-500/30 hover:bg-slate-800/70'
              }`}
            >
              <div className="flex items-center space-x-2">
                {/* Compact Game Thumbnail */}
                <div className="w-12 h-8 overflow-hidden border border-slate-700/50 relative group-hover:border-purple-500/30 transition-colors flex-shrink-0">
                  <img
                    src={game.images.hero}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Mini Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-purple-500/90 p-1 backdrop-blur-sm">
                      <Play className="w-2 h-2 text-white" />
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-black text-xs truncate font-mono">
                      {game.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-2.5 h-2.5 text-yellow-400 fill-current" />
                      <span className="text-white font-bold text-xs font-mono">{game.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {/* Category */}
                      <span className="text-xs">{getCategoryIcon(game.category)}</span>
                      
                      {/* Status */}
                      <div className={`flex items-center space-x-0.5 px-1 py-0.5 text-xs font-bold border backdrop-blur-sm ${getStatusColor(game.status)}`}>
                        {getStatusIcon(game.status)}
                        <span className="font-mono text-xs">{game.status === 'EARLY_ACCESS' ? 'EA' : game.status}</span>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <span className="text-green-400 font-black text-xs font-mono">
                      {formatPrice(game)}
                    </span>
                  </div>
                  
                  {/* Players */}
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center space-x-1">
                      <Users className="w-2.5 h-2.5 text-blue-400" />
                      <span className="text-slate-300 font-bold text-xs font-mono">{game.playerCount}</span>
                    </div>
                    {game.stats.esportsReady && (
                      <Trophy className="w-2.5 h-2.5 text-yellow-400" />
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Compact Footer */}
      <div className="p-2 border-t border-purple-500/30 bg-gradient-to-r from-slate-900/20 to-purple-900/20">
        <div className="flex justify-center space-x-4 text-xs">
          <div className="text-center">
            <div className="text-green-400 font-black font-mono text-sm">2.4M+</div>
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
