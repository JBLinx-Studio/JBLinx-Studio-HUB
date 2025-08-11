
import React from 'react';
import { Gamepad2, Star, Users, Calendar, Filter, Search, Zap, Shield, Trophy, Cpu, Globe } from 'lucide-react';

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
    platforms: string[];
    genres: string[];
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
    { id: 'all', name: 'ALL', count: games.length, icon: Gamepad2, color: 'purple' },
    { id: 'fps', name: 'FPS', count: games.filter(g => g.category === 'fps').length, icon: Zap, color: 'red' },
    { id: 'rts', name: 'RTS', count: games.filter(g => g.category === 'rts').length, icon: Shield, color: 'blue' },
    { id: 'survival', name: 'SURVIVAL', count: games.filter(g => g.category === 'survival').length, icon: Trophy, color: 'orange' },
    { id: 'space', name: 'SPACE', count: games.filter(g => g.category === 'space').length, icon: Globe, color: 'cyan' },
    { id: 'mobile', name: 'MOBILE', count: games.filter(g => g.category === 'mobile').length, icon: Cpu, color: 'green' },
    { id: 'web', name: 'WEB', count: games.filter(g => g.category === 'web').length, icon: Globe, color: 'yellow' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500/90 text-white border-green-400/30';
      case 'BETA': return 'bg-yellow-500/90 text-black border-yellow-400/30';
      case 'EARLY_ACCESS': return 'bg-orange-500/90 text-white border-orange-400/30';
      default: return 'bg-blue-500/90 text-white border-blue-400/30';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'pc': return '🖥️';
      case 'mobile': case 'ios': case 'android': return '📱';
      case 'web browser': return '🌐';
      case 'playstation': return '🎮';
      case 'xbox': return '🎮';
      case 'mac': return '💻';
      default: return '💻';
    }
  };

  return (
    <div className="h-full bg-gradient-to-b from-slate-900/95 via-slate-800/90 to-slate-900/95 border-r border-slate-700/50 flex flex-col backdrop-blur-sm">
      {/* Advanced Header */}
      <div className="p-3 border-b border-slate-700/30 bg-slate-900/90 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-8 h-8 bg-purple-500/20 border border-purple-400/40 flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-purple-400" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 border border-slate-900 animate-pulse"></div>
            </div>
            <div className="flex-1">
              <div className="text-purple-400 font-black text-xs font-mono tracking-wider">GAME LIBRARY</div>
              <div className="text-slate-500 text-xs">{games.length} ACTIVE</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-green-400 font-black text-xs">ONLINE</div>
            <div className="text-slate-500 text-xs">112K+</div>
          </div>
        </div>

        {/* Advanced Category Matrix */}
        <div className="space-y-2">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-1">
              <Filter className="w-3 h-3 text-slate-400" />
              <span className="text-slate-400 text-xs font-black">CATEGORIES</span>
            </div>
            <div className="text-xs text-slate-500 font-mono">[{categories.length}]</div>
          </div>
          
          <div className="grid grid-cols-2 gap-1">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`group relative p-2 text-xs font-black transition-all duration-300 overflow-hidden border ${
                    activeCategory === category.id
                      ? `bg-${category.color}-500/20 border-${category.color}-400/50 text-${category.color}-300 scale-105 shadow-lg`
                      : 'bg-slate-800/30 border-slate-700/30 text-slate-400 hover:bg-slate-700/30 hover:border-slate-600/50 hover:text-white hover:scale-102'
                  }`}
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <IconComponent className="w-3 h-3" />
                      <span className="truncate text-xs">{category.name}</span>
                    </div>
                    <span className="text-xs opacity-75 font-mono">{category.count}</span>
                  </div>
                  {activeCategory !== category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Advanced Games Matrix */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-track-slate-800/50 scrollbar-thumb-purple-500/30">
          <div className="p-2 space-y-1">
            {games.map((game, index) => (
              <div
                key={game.id}
                onClick={() => onSelectGame(game.id)}
                className={`group relative cursor-pointer transition-all duration-300 overflow-hidden backdrop-blur-sm border ${
                  selectedGameId === game.id
                    ? 'bg-gradient-to-r from-purple-500/25 via-purple-400/15 to-purple-500/5 border-purple-400/60 shadow-lg shadow-purple-500/20 scale-[1.02]'
                    : 'bg-slate-800/20 border-slate-700/30 hover:bg-slate-800/40 hover:border-slate-600/40 hover:scale-[1.01]'
                }`}
              >
                {/* Background Tech Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-purple-500/5 to-transparent"></div>
                  <div className="absolute top-1 right-1 w-2 h-2 border border-purple-400/20"></div>
                  <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyan-400/30"></div>
                </div>

                <div className="relative z-10 p-2">
                  <div className="flex items-start space-x-2">
                    {/* Game Thumbnail */}
                    <div className="relative flex-shrink-0">
                      <img
                        src={game.images.hero}
                        alt={game.title}
                        className="w-12 h-12 object-cover border border-slate-600/40 group-hover:border-purple-400/40 transition-colors"
                      />
                      <div className="absolute -top-1 -right-1">
                        <span className={`px-1 py-0.5 text-xs font-black border ${getStatusColor(game.status)}`}>
                          {game.status === 'EARLY_ACCESS' ? 'EA' : 
                           game.status === 'LIVE' ? 'L' : 
                           game.status === 'BETA' ? 'B' : game.status.charAt(0)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Game Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      {/* Title & Rating */}
                      <div className="flex items-start justify-between">
                        <h4 className="text-white font-black text-xs truncate group-hover:text-purple-200 transition-colors leading-tight">
                          {game.title}
                        </h4>
                        <div className="flex items-center space-x-1 text-xs">
                          <Star className="w-2 h-2 text-yellow-400 fill-current" />
                          <span className="text-yellow-300 font-bold">{game.rating}</span>
                        </div>
                      </div>

                      {/* Platforms & Genre */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {game.platforms.slice(0, 3).map((platform, idx) => (
                            <span key={idx} className="text-xs" title={platform}>
                              {getPlatformIcon(platform)}
                            </span>
                          ))}
                        </div>
                        <div className="text-cyan-400 text-xs font-bold truncate ml-1">
                          {game.genres[0]}
                        </div>
                      </div>

                      {/* Price & Players */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400 font-black text-xs">
                            {game.price.base === 0 ? 'FREE' : 
                             game.price.sale ? `$${game.price.sale}` : `$${game.price.base}`}
                          </span>
                          {game.price.sale && game.price.base > 0 && (
                            <span className="text-slate-500 line-through text-xs">${game.price.base}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-2 h-2 text-green-400" />
                          <span className="text-slate-300 text-xs">{game.playerCount}</span>
                        </div>
                      </div>

                      {/* Tech Info Bar */}
                      <div className="flex items-center justify-between pt-1 border-t border-slate-700/30">
                        <div className="text-slate-500 text-xs font-mono">
                          ID#{game.id.toString().padStart(3, '0')}
                        </div>
                        <div className="text-slate-500 text-xs">
                          {new Date(game.releaseDate).getFullYear()}
                        </div>
                        <div className={`w-2 h-2 rounded-full ${selectedGameId === game.id ? 'bg-purple-400 animate-pulse' : 'bg-slate-600'}`}></div>
                      </div>
                    </div>
                  </div>

                  {/* Active Game Indicator */}
                  {selectedGameId === game.id && (
                    <div className="absolute right-1 top-1 w-1 h-full bg-gradient-to-b from-purple-400 via-purple-500 to-purple-600"></div>
                  )}
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  selectedGameId === game.id ? 'bg-purple-500/5' : 'bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/5'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Footer Status */}
      <div className="p-2 border-t border-slate-700/30 bg-slate-900/90 backdrop-blur-sm">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 animate-pulse"></div>
            <span className="text-slate-400 font-mono">SYSTEM ONLINE</span>
          </div>
          <div className="text-slate-500 font-mono">
            v2.1.4
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLibraryPanel;
