
import React from 'react';
import { Gamepad2, Star, Users, Calendar, Filter, Search, Zap } from 'lucide-react';

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
    { id: 'all', name: 'All Games', count: games.length, icon: '🎮' },
    { id: 'fps', name: 'FPS', count: games.filter(g => g.category === 'fps').length, icon: '🎯' },
    { id: 'rts', name: 'Strategy', count: games.filter(g => g.category === 'rts').length, icon: '⚔️' },
    { id: 'survival', name: 'Survival', count: games.filter(g => g.category === 'survival').length, icon: '🔥' },
    { id: 'space', name: 'Space', count: games.filter(g => g.category === 'space').length, icon: '🚀' },
    { id: 'mobile', name: 'Mobile', count: games.filter(g => g.category === 'mobile').length, icon: '📱' },
    { id: 'web', name: 'Web', count: games.filter(g => g.category === 'web').length, icon: '🌐' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500 shadow-green-500/50';
      case 'BETA': return 'bg-yellow-500 shadow-yellow-500/50';
      case 'EARLY_ACCESS': return 'bg-orange-500 shadow-orange-500/50';
      default: return 'bg-blue-500 shadow-blue-500/50';
    }
  };

  return (
    <div className="h-full bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 border-r border-slate-700/50 flex flex-col backdrop-blur-sm">
      {/* Enhanced Header */}
      <div className="p-5 border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-400/30">
            <Gamepad2 className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest block">GAME LIBRARY</span>
            <div className="text-slate-400 text-xs mt-1">{games.length} Games Available</div>
          </div>
        </div>

        {/* Enhanced Category Filters */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2 mb-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-slate-400 text-xs font-bold">CATEGORIES</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`group relative p-2 text-xs font-bold transition-all duration-300 overflow-hidden ${
                  activeCategory === category.id
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                    : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white hover:scale-105'
                }`}
              >
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </div>
                  <span className="text-xs opacity-75">({category.count})</span>
                </div>
                {activeCategory !== category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Games List with Custom Scrollbar */}
      <div className="flex-1 overflow-hidden relative">
        <div className="h-full overflow-y-auto game-scroll pr-2">
          <div className="p-2 space-y-3">
            {games.map((game, index) => (
              <div
                key={game.id}
                onClick={() => onSelectGame(game.id)}
                className={`group relative p-4 border cursor-pointer transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                  selectedGameId === game.id
                    ? 'bg-gradient-to-r from-purple-500/20 via-purple-400/10 to-transparent border-purple-400 shadow-lg shadow-purple-500/20 scale-[1.02]'
                    : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600/50 hover:scale-[1.01]'
                }`}
              >
                {/* Background Animation */}
                {selectedGameId !== game.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                )}
                
                <div className="relative z-10 flex items-start space-x-3">
                  <div className="relative">
                    <img
                      src={game.images.hero}
                      alt={game.title}
                      className="w-14 h-14 object-cover border border-slate-600/50 shadow-lg group-hover:shadow-purple-500/20 transition-shadow duration-300"
                    />
                    <div className="absolute -top-1 -right-1">
                      <span className={`px-2 py-0.5 text-xs font-black text-white shadow-lg ${getStatusColor(game.status)}`}>
                        {game.status === 'EARLY_ACCESS' ? 'EA' : game.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-black text-sm truncate group-hover:text-purple-200 transition-colors">
                        {game.title}
                      </h4>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-slate-300">{game.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-green-400" />
                        <span className="text-slate-300">{game.playerCount}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400 font-black text-sm">
                          {game.price.base === 0 ? 'FREE' : 
                           game.price.sale ? `$${game.price.sale}` : `$${game.price.base}`}
                        </span>
                        {game.price.sale && game.price.base > 0 && (
                          <span className="text-slate-500 line-through text-xs">${game.price.base}</span>
                        )}
                      </div>
                      <div className="text-slate-500 text-xs flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(game.releaseDate).getFullYear()}
                      </div>
                    </div>

                    {/* Hover Effects */}
                    <div className={`absolute bottom-2 right-2 transition-all duration-300 ${
                      selectedGameId === game.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scrollbar Track */}
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-slate-800/50">
          <div className="w-full h-full bg-gradient-to-b from-purple-500/20 via-transparent to-purple-500/20"></div>
        </div>
      </div>
    </div>
  );
};

export default GameLibraryPanel;
