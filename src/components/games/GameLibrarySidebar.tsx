
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
  Clock,
  Filter,
  Grid,
  List,
  Search
} from 'lucide-react';
import GameFilters from './GameFilters';

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
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const GameLibrarySidebar: React.FC<GameLibrarySidebarProps> = ({
  games,
  selectedGameId,
  onSelectGame,
  activeCategory,
  setActiveCategory,
  sortBy,
  setSortBy
}) => {
  const categories = [
    { id: 'all', name: 'All Games', icon: Grid, count: games.length },
    { id: 'fps', name: 'FPS', icon: Target, count: games.filter(g => g.category === 'fps').length },
    { id: 'rts', name: 'Strategy', icon: Trophy, count: games.filter(g => g.category === 'rts').length },
    { id: 'survival', name: 'Survival', icon: Shield, count: games.filter(g => g.category === 'survival').length },
    { id: 'space', name: 'Space', icon: Zap, count: games.filter(g => g.category === 'space').length },
    { id: 'mobile', name: 'Mobile', icon: Users, count: games.filter(g => g.category === 'mobile').length },
    { id: 'web', name: 'Web', icon: Play, count: games.filter(g => g.category === 'web').length }
  ];

  const filteredGames = games
    .filter(game => activeCategory === 'all' || game.category === activeCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'players':
          return parseInt(b.playerCount.replace(/[^0-9]/g, '')) - parseInt(a.playerCount.replace(/[^0-9]/g, ''));
        case 'newest':
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        case 'price':
          return (a.price.sale || a.price.base) - (b.price.sale || b.price.base);
        default:
          return b.stats.peakPlayers - a.stats.peakPlayers;
      }
    });

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
      case 'fps': return '🎯';
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
    <div className="bg-white/5 backdrop-blur-sm h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center space-x-3 mb-3">
          <Trophy className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-bold tracking-wide text-sm">GAME LIBRARY</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-300">{filteredGames.length} Games</span>
          <div className="flex items-center space-x-2 text-green-400">
            <TrendingUp className="w-4 h-4" />
            <span className="font-medium text-xs">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="p-4 border-b border-white/10">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search games..."
            className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 text-sm focus:border-purple-400 focus:outline-none transition-colors"
          />
        </div>
        
        <GameFilters
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>

      {/* Games List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-3">
          {filteredGames.map((game) => (
            <button
              key={game.id}
              onClick={() => onSelectGame(game.id)}
              className={`w-full text-left p-4 border transition-all duration-300 hover:scale-[1.02] group rounded-xl ${
                selectedGameId === game.id
                  ? 'bg-purple-500/20 border-purple-400/50 shadow-lg ring-2 ring-purple-400/30'
                  : 'bg-white/5 border-white/10 hover:border-purple-400/30 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Game Thumbnail */}
                <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg border border-white/20 relative">
                  <img
                    src={game.images.hero}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute -top-1 -right-1">
                    <div className={`flex items-center justify-center w-5 h-5 rounded-full text-xs border backdrop-blur-sm ${getStatusColor(game.status)}`}>
                      {getStatusIcon(game.status)}
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-sm truncate leading-tight mb-1">
                        {game.title}
                      </h3>
                      <p className="text-purple-300 text-xs truncate opacity-80">
                        {game.tagline}
                      </p>
                    </div>
                    <div className="ml-3 flex items-center space-x-2">
                      <span className="text-lg">{getCategoryIcon(game.category)}</span>
                      {game.stats.esportsReady && (
                        <Trophy className="w-4 h-4 text-yellow-400" />
                      )}
                    </div>
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 font-bold text-sm">
                        {formatPrice(game)}
                      </span>
                      {game.price.sale && (
                        <span className="text-slate-500 line-through text-xs">
                          ${game.price.base}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-bold text-sm">{game.rating}</span>
                    </div>
                  </div>

                  {/* Player Count & Year */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-slate-300 text-xs">{game.playerCount}</span>
                    </div>
                    <div className="text-slate-400 text-xs">
                      {new Date(game.releaseDate).getFullYear()}
                    </div>
                  </div>
                </div>

                {/* Play Icon */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg shadow-lg">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <div className="p-4 border-t border-white/10">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center bg-white/5 rounded-lg p-3">
            <div className="text-green-400 font-bold text-lg">$2.4M+</div>
            <div className="text-slate-300 text-xs">Total Revenue</div>
          </div>
          <div className="text-center bg-white/5 rounded-lg p-3">
            <div className="text-purple-400 font-bold text-lg">500K+</div>
            <div className="text-slate-300 text-xs">Players</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLibrarySidebar;
