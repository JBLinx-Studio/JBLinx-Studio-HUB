
import React, { useState } from 'react';
import { 
  Play, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Star, 
  Users, 
  Download,
  Calendar,
  Monitor,
  Smartphone,
  Globe,
  Trophy,
  Zap
} from 'lucide-react';

interface GameDetailsPanelProps {
  game: {
    id: number;
    title: string;
    tagline: string;
    description: string;
    images: { hero: string; gallery: string[] };
    trailer: string;
    rating: number;
    playerCount: string;
    reviewCount: number;
    price: { base: number; sale: number | null; currency: string };
    platforms: string[];
    genres: string[];
    features: string[];
    status: string;
    releaseDate: string;
    stats: {
      peakPlayers: number;
      averageSession: string;
      retention: string;
      esportsReady: boolean;
    };
    systemReqs: { min: string; recommended: string };
    storeLinks: Record<string, string>;
  };
}

const GameDetailsPanel: React.FC<GameDetailsPanelProps> = ({ game }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'pc': return <Monitor className="w-4 h-4" />;
      case 'mobile': case 'ios': case 'android': return <Smartphone className="w-4 h-4" />;
      case 'web browser': return <Globe className="w-4 h-4" />;
      default: return <Monitor className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500 text-white';
      case 'BETA': return 'bg-yellow-500 text-black';
      case 'EARLY_ACCESS': return 'bg-orange-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  return (
    <div className="h-full bg-slate-900/95 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h2 className="text-2xl font-black text-white font-mono mb-1">{game.title}</h2>
            <p className="text-purple-400 font-bold">{game.tagline}</p>
            
            <div className="flex items-center space-x-2 mt-2">
              <span className={`px-2 py-1 text-xs font-bold ${getStatusColor(game.status)}`}>
                {game.status.replace('_', ' ')}
              </span>
              <div className="flex items-center space-x-1">
                {game.platforms.slice(0, 3).map((platform, index) => (
                  <div key={index} className="text-slate-400" title={platform}>
                    {getPlatformIcon(platform)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-black text-green-400 mb-1">
              {game.price.base === 0 ? 'FREE' : 
               game.price.sale ? (
                 <div className="flex items-center space-x-2">
                   <span className="text-slate-400 line-through text-lg">${game.price.base}</span>
                   <span>${game.price.sale}</span>
                 </div>
               ) : `$${game.price.base}`}
            </div>
            
            <div className="flex items-center justify-end space-x-2">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 transition-colors ${
                  isWishlisted ? 'bg-red-500 text-white' : 'bg-slate-700 text-white hover:bg-red-500'
                }`}
              >
                <Heart className="w-4 h-4" />
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 font-bold transition-colors flex items-center space-x-2">
                {game.price.base === 0 ? <Play className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                <span>{game.price.base === 0 ? 'PLAY NOW' : 'BUY NOW'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: Star, label: 'Rating', value: `${game.rating}★`, color: 'text-yellow-400' },
            { icon: Users, label: 'Players', value: game.playerCount, color: 'text-green-400' },
            { icon: Download, label: 'Reviews', value: `${(game.reviewCount / 1000).toFixed(1)}K`, color: 'text-blue-400' },
            { icon: Trophy, label: 'Peak', value: `${(game.stats.peakPlayers / 1000).toFixed(0)}K`, color: 'text-purple-400' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800/50 border border-slate-600 p-2 text-center">
                <IconComponent className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
                <div className="text-sm font-black text-white">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          {/* Media Gallery */}
          <div>
            <div className="relative h-64 bg-slate-800 border border-slate-600 mb-3">
              <img
                src={game.images.gallery[activeImage] || game.images.hero}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-3 right-3 bg-purple-500/90 hover:bg-purple-600/90 text-white p-2 backdrop-blur-sm">
                <Play className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex space-x-2">
              {[game.images.hero, ...game.images.gallery].slice(0, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`w-16 h-16 border-2 transition-colors ${
                    index === activeImage ? 'border-purple-400' : 'border-slate-600'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Game Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-white font-bold mb-2">DESCRIPTION</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{game.description}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-white font-bold mb-2">GENRES</h3>
              <div className="flex flex-wrap gap-1">
                {game.genres.map((genre, index) => (
                  <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-white font-bold mb-2">KEY FEATURES</h3>
              <div className="space-y-1">
                {game.features.slice(0, 5).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Zap className="w-3 h-3 text-purple-400" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">SYSTEM REQUIREMENTS</h3>
              <div className="bg-slate-800/50 border border-slate-600 p-3">
                <div className="text-xs text-slate-400 mb-1">MINIMUM</div>
                <div className="text-slate-300 text-sm mb-2">{game.systemReqs.min}</div>
                <div className="text-xs text-slate-400 mb-1">RECOMMENDED</div>
                <div className="text-slate-300 text-sm">{game.systemReqs.recommended}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPanel;
