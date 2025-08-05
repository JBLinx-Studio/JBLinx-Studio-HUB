
import React from 'react';
import { Play, Star, Users, Calendar, TrendingUp, Trophy } from 'lucide-react';

interface Game {
  id: number;
  title: string;
  tagline: string;
  category: string;
  status: string;
  price: { base: number; sale: number | null; currency: string };
  rating: number;
  playerCount: string;
  images: { hero: string };
  releaseDate: string;
  stats: {
    esportsReady: boolean;
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
    if (game.price.base === 0) return 'FREE';
    if (game.price.sale) return `$${game.price.sale}`;
    return `$${game.price.base}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500 text-white';
      case 'BETA': return 'bg-yellow-500 text-black';
      case 'EARLY_ACCESS': return 'bg-blue-500 text-white';
      default: return 'bg-slate-500 text-white';
    }
  };

  return (
    <div className="bg-slate-800/95 border border-slate-700 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center space-x-2 mb-2">
          <Trophy className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-black font-mono">GAME LIBRARY</span>
        </div>
        <div className="text-slate-400 text-xs">
          {games.length} Games Available
        </div>
      </div>

      {/* Games List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-2 space-y-2">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className={`w-full text-left p-3 border transition-all duration-200 hover:scale-[1.02] ${
                selectedGameId === game.id
                  ? 'bg-purple-500/20 border-purple-400 shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800/70'
              }`}
            >
              {/* Game Image */}
              <div className="aspect-video mb-3 overflow-hidden rounded">
                <img
                  src={game.images.hero}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Game Info */}
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-sm truncate">
                      {game.title}
                    </h3>
                    <p className="text-slate-400 text-xs truncate">
                      {game.tagline}
                    </p>
                  </div>
                  <div className="ml-2 flex items-center space-x-1">
                    {game.stats.esportsReady && (
                      <Trophy className="w-3 h-3 text-yellow-400" />
                    )}
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  </div>
                </div>

                {/* Status and Price */}
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs font-bold ${getStatusColor(game.status)}`}>
                    {game.status.replace('_', ' ')}
                  </span>
                  <span className="text-green-400 font-bold text-sm">
                    {formatPrice(game)}
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span className="text-white font-bold">{game.rating}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Users className="w-3 h-3 text-blue-400" />
                      <span className="text-white font-bold">{game.playerCount}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-400 font-bold">
                        {new Date(game.releaseDate).getFullYear()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="text-center">
                  <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold uppercase">
                    {game.category}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-4 border-t border-slate-700">
        <div className="text-slate-400 text-xs text-center">
          Total Revenue: <span className="text-green-400 font-bold">$2.4M+</span>
        </div>
      </div>
    </div>
  );
};

export default GameLibrarySidebar;
