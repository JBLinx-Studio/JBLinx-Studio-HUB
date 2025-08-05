
import React from 'react';
import { Gamepad2, Star, Users, Calendar, Filter } from 'lucide-react';

interface GameLibraryPanelProps {
  games: Array<{
    id: number;
    title: string;
    category: string;
    status: string;
    rating: number;
    playerCount: string;
    images: { hero: string };
    price: { base: number; sale: number | null };
    releaseDate: string;
  }>;
  selectedGameId: number;
  onSelectGame: (id: number) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const GameLibraryPanel: React.FC<GameLibraryPanelProps> = ({
  games,
  selectedGameId,
  onSelectGame,
  activeCategory,
  onCategoryChange
}) => {
  const categories = [
    { id: 'all', name: 'All Games', count: games.length },
    { id: 'fps', name: 'FPS', count: games.filter(g => g.category === 'fps').length },
    { id: 'rts', name: 'Strategy', count: games.filter(g => g.category === 'rts').length },
    { id: 'survival', name: 'Survival', count: games.filter(g => g.category === 'survival').length },
    { id: 'space', name: 'Space', count: games.filter(g => g.category === 'space').length },
    { id: 'mobile', name: 'Mobile', count: games.filter(g => g.category === 'mobile').length },
    { id: 'web', name: 'Web', count: games.filter(g => g.category === 'web').length }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500';
      case 'BETA': return 'bg-yellow-500';
      case 'EARLY_ACCESS': return 'bg-orange-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <div className="h-full bg-slate-800/95 border-r border-slate-700 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center space-x-2 mb-3">
          <Gamepad2 className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 font-black text-sm font-mono">GAME LIBRARY</span>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-2 py-1 text-xs font-bold transition-colors ${
                activeCategory === category.id
                  ? 'bg-purple-500 text-white'
                  : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Games List */}
      <div className="flex-1 overflow-y-auto">
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => onSelectGame(game.id)}
            className={`p-3 border-b border-slate-700 cursor-pointer transition-all duration-200 ${
              selectedGameId === game.id
                ? 'bg-purple-500/20 border-purple-400'
                : 'hover:bg-slate-700/50'
            }`}
          >
            <div className="flex items-start space-x-3">
              <img
                src={game.images.hero}
                alt={game.title}
                className="w-12 h-12 object-cover border border-slate-600"
              />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-white font-bold text-sm truncate">{game.title}</h4>
                  <span className={`px-2 py-0.5 text-xs font-bold text-white ${getStatusColor(game.status)}`}>
                    {game.status}
                  </span>
                </div>

                <div className="flex items-center space-x-3 text-xs text-slate-400 mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{game.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 text-green-400" />
                    <span>{game.playerCount}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold text-sm">
                    {game.price.base === 0 ? 'FREE' : 
                     game.price.sale ? `$${game.price.sale}` : `$${game.price.base}`}
                  </span>
                  <div className="text-slate-500 text-xs">
                    {new Date(game.releaseDate).getFullYear()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameLibraryPanel;
