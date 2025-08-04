
import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  Star, 
  ShoppingCart, 
  ExternalLink,
  Heart,
  Users,
  Calendar,
  Trophy,
  Eye,
  ArrowRight,
  Gamepad2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface EnhancedGameCardProps {
  game: {
    id: number;
    title: string;
    tagline: string;
    category: string;
    genres: string[];
    platforms: string[];
    status: string;
    releaseDate: string;
    price: { base: number; sale: number | null; currency: string };
    rating: number;
    playerCount: string;
    reviewCount: number;
    images: { hero: string; gallery: string[] };
    description: string;
    features: string[];
    stats: {
      peakPlayers: number;
      averageSession: string;
      retention: string;
    };
    storeLinks: Record<string, string>;
  };
}

const EnhancedGameCard: React.FC<EnhancedGameCardProps> = ({ game }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500 text-white';
      case 'BETA': return 'bg-yellow-500 text-black';
      case 'EARLY_ACCESS': return 'bg-orange-500 text-white';
      case 'COMING_SOON': return 'bg-blue-500 text-white';
      default: return 'bg-purple-500 text-white';
    }
  };

  const formatPrice = () => {
    if (game.price.base === 0) return 'FREE TO PLAY';
    if (game.price.sale) {
      return (
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 line-through text-sm">${game.price.base}</span>
          <span className="text-green-400 font-black text-lg">${game.price.sale}</span>
        </div>
      );
    }
    return <span className="text-white font-black text-lg">${game.price.base}</span>;
  };

  return (
    <div 
      className="bg-slate-800/95 border border-slate-700 hover:border-purple-400/50 transition-all duration-500 overflow-hidden group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Hero Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={game.images.hero} 
          alt={game.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className={`absolute inset-0 bg-purple-500/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Status & Category Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className={`px-3 py-1 text-xs font-black backdrop-blur-sm ${getStatusStyle(game.status)}`}>
            {game.status.replace('_', ' ')}
          </span>
          <span className="bg-purple-500/90 text-white px-3 py-1 text-xs font-black backdrop-blur-sm">
            {game.category.toUpperCase()}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex gap-2">
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 backdrop-blur-sm transition-all duration-300 ${
              isWishlisted 
                ? 'bg-red-500/90 text-white scale-110' 
                : 'bg-slate-800/80 text-white hover:bg-red-500/90 hover:scale-110'
            }`}
          >
            <Heart className="w-4 h-4" />
          </button>
          <Link
            to={`/game/${game.id}`}
            className="p-2 bg-slate-800/80 hover:bg-purple-500/90 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>

        {/* Live Stats Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div className="bg-slate-900/90 text-white px-2 py-1 text-xs font-black backdrop-blur-sm flex items-center space-x-1">
                <Star className="w-3 h-3 text-yellow-400" />
                <span>{game.rating}</span>
              </div>
              <div className="bg-slate-900/90 text-white px-2 py-1 text-xs font-black backdrop-blur-sm flex items-center space-x-1">
                <Users className="w-3 h-3 text-green-400" />
                <span>{game.playerCount}</span>
              </div>
            </div>
            <div className="bg-purple-500/90 hover:bg-purple-600/90 text-white px-3 py-1 text-xs font-black backdrop-blur-sm transition-colors cursor-pointer">
              <Play className="w-3 h-3 inline mr-1" />
              PREVIEW
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content Section */}
      <div className="p-5">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-white font-black text-xl font-mono leading-tight mb-1">
            {game.title}
          </h3>
          <p className="text-purple-400 font-bold text-sm mb-2">{game.tagline}</p>
          
          {/* Genres */}
          <div className="flex flex-wrap gap-1 mb-3">
            {game.genres.map((genre, index) => (
              <span key={index} className="bg-slate-700/80 text-cyan-400 px-2 py-1 text-xs font-bold border border-cyan-400/30">
                {genre}
              </span>
            ))}
          </div>

          <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed">{game.description}</p>
        </div>

        {/* Key Features Preview */}
        <div className="mb-4">
          <div className="text-slate-300 text-xs font-black mb-2 flex items-center">
            <Trophy className="w-3 h-3 mr-1 text-yellow-400" />
            KEY FEATURES
          </div>
          <div className="grid grid-cols-1 gap-1">
            {game.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="bg-slate-900/50 border-l-2 border-purple-400 px-3 py-1">
                <span className="text-slate-300 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="bg-slate-900/60 border border-slate-600 p-2 text-center hover:border-purple-400/50 transition-colors">
            <Eye className="w-3 h-3 mx-auto mb-1 text-blue-400" />
            <div className="text-xs font-black text-white">{game.stats.retention}</div>
            <div className="text-xs text-slate-400">RETENTION</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-600 p-2 text-center hover:border-purple-400/50 transition-colors">
            <Calendar className="w-3 h-3 mx-auto mb-1 text-green-400" />
            <div className="text-xs font-black text-white">{game.stats.averageSession}</div>
            <div className="text-xs text-slate-400">AVG SESSION</div>
          </div>
          <div className="bg-slate-900/60 border border-slate-600 p-2 text-center hover:border-purple-400/50 transition-colors">
            <Trophy className="w-3 h-3 mx-auto mb-1 text-purple-400" />
            <div className="text-xs font-black text-white">{Math.floor(game.stats.peakPlayers / 1000)}K</div>
            <div className="text-xs text-slate-400">PEAK</div>
          </div>
        </div>

        {/* Pricing & Purchase */}
        <div className="border-t border-slate-700 pt-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-4 h-4 text-purple-400" />
              {formatPrice()}
            </div>
            <div className="text-slate-400 text-xs">
              {game.reviewCount}+ reviews
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              to={game.storeLinks.direct || '#'}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 font-black transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
            >
              {game.price.base === 0 ? <Play className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
              <span>{game.price.base === 0 ? 'PLAY NOW' : 'BUY GAME'}</span>
            </Link>
            <Link
              to={`/game/${game.id}`}
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 font-black transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
            >
              <span>DETAILS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hover Enhancement */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 border-2 border-purple-400/50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default EnhancedGameCard;
