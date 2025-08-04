
import React, { useState } from 'react';
import { 
  Play, 
  Star, 
  ShoppingCart, 
  ExternalLink,
  Heart,
  Users,
  Clock,
  DollarSign,
  Download,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CompactGameCardProps {
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
    images: { hero: string; thumbnail: string };
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

const CompactGameCard: React.FC<CompactGameCardProps> = ({ game }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500 text-white';
      case 'BETA': return 'bg-yellow-500 text-black';
      case 'EARLY_ACCESS': return 'bg-orange-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const formatPrice = () => {
    if (game.price.base === 0) return 'FREE';
    if (game.price.sale) {
      return (
        <div className="flex items-center space-x-1">
          <span className="text-slate-400 line-through text-xs">${game.price.base}</span>
          <span className="text-green-400 font-bold text-sm">${game.price.sale}</span>
        </div>
      );
    }
    return <span className="text-white font-bold text-sm">${game.price.base}</span>;
  };

  return (
    <div className="bg-slate-800/50 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group">
      {/* Compact Hero Section */}
      <div className="relative h-32 overflow-hidden">
        <img 
          src={game.images.hero} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Status Badge */}
        <div className="absolute top-2 left-2">
          <span className={`px-2 py-1 text-xs font-bold ${getStatusStyle(game.status)}`}>
            {game.status.replace('_', ' ')}
          </span>
        </div>

        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex gap-1">
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-1.5 backdrop-blur-sm transition-all ${
              isWishlisted 
                ? 'bg-red-500/90 text-white' 
                : 'bg-slate-800/80 text-white hover:bg-red-500/90'
            }`}
          >
            <Heart className="w-3 h-3" />
          </button>
        </div>

        {/* Bottom Stats */}
        <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
          <div className="flex gap-2 text-xs">
            <div className="bg-slate-900/80 text-white px-2 py-1 backdrop-blur-sm flex items-center space-x-1">
              <Star className="w-3 h-3 text-yellow-400" />
              <span>{game.rating}</span>
            </div>
            <div className="bg-slate-900/80 text-white px-2 py-1 backdrop-blur-sm flex items-center space-x-1">
              <Users className="w-3 h-3 text-green-400" />
              <span>{game.playerCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Content */}
      <div className="p-4">
        {/* Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-white font-bold text-lg leading-tight mb-1">
            {game.title}
          </h3>
          <p className="text-purple-400 text-sm font-medium">{game.tagline}</p>
          
          {/* Genres */}
          <div className="flex flex-wrap gap-1 mt-2">
            {game.genres.slice(0, 3).map((genre, index) => (
              <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-0.5 text-xs font-medium">
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-3 line-clamp-2 leading-relaxed">
          {game.description}
        </p>

        {/* Key Features */}
        <div className="mb-4">
          <div className="text-slate-400 text-xs font-bold mb-2 uppercase tracking-wide">Features</div>
          <div className="grid grid-cols-1 gap-1">
            {game.features.slice(0, 2).map((feature, index) => (
              <div key={index} className="bg-slate-900/50 border-l-2 border-purple-400 px-2 py-1">
                <span className="text-slate-300 text-xs">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-slate-900/50 border border-slate-600 p-2 text-center">
            <Clock className="w-3 h-3 mx-auto mb-1 text-blue-400" />
            <div className="text-xs font-bold text-white">{game.stats.averageSession}</div>
            <div className="text-xs text-slate-400">AVG TIME</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-600 p-2 text-center">
            <Eye className="w-3 h-3 mx-auto mb-1 text-green-400" />
            <div className="text-xs font-bold text-white">{game.stats.retention}</div>
            <div className="text-xs text-slate-400">RETENTION</div>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="border-t border-slate-700 pt-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-green-400" />
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
              className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 text-xs font-bold transition-colors flex items-center justify-center space-x-1"
            >
              {game.price.base === 0 ? <Play className="w-3 h-3" /> : <ShoppingCart className="w-3 h-3" />}
              <span>{game.price.base === 0 ? 'PLAY' : 'BUY'}</span>
            </Link>
            <Link
              to={`/game/${game.id}`}
              className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 text-xs font-bold transition-colors flex items-center justify-center space-x-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span>DETAILS</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactGameCard;
