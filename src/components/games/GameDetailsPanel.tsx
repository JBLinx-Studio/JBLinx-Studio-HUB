
import React, { useState } from 'react';
import {
  Play,
  Star,
  Users,
  Download,
  Calendar,
  ShoppingCart,
  ExternalLink,
  Trophy,
  Gamepad2,
  TrendingUp,
  Monitor,
  Smartphone,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameDetailsPanelProps {
  game: {
    id: number;
    title: string;
    tagline: string;
    genres: string[];
    platforms: string[];
    status: string;
    releaseDate: string;
    price: { base: number; sale: number | null; currency: string };
    rating: number;
    playerCount: string;
    reviewCount: number;
    images: { hero: string; gallery: string[] };
    trailer: string;
    description: string;
    features: string[];
    systemReqs: { min: string; recommended: string };
    stats: {
      peakPlayers: number;
      averageSession: string;
      retention: string;
      esportsReady: boolean;
    };
    storeLinks: Record<string, string>;
  };
}

const GameDetailsPanel: React.FC<GameDetailsPanelProps> = ({ game }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const formatPrice = () => {
    if (game.price.base === 0) return 'FREE TO PLAY';
    if (game.price.sale) {
      return (
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 line-through text-sm">${game.price.base}</span>
          <span className="text-green-400 text-xl font-black">${game.price.sale}</span>
        </div>
      );
    }
    return `$${game.price.base}`;
  };

  const getPlatformIcon = (platform: string) => {
    if (platform.toLowerCase().includes('mobile') || platform.toLowerCase().includes('ios') || platform.toLowerCase().includes('android')) {
      return <Smartphone className="w-4 h-4" />;
    }
    if (platform.toLowerCase().includes('web') || platform.toLowerCase().includes('browser')) {
      return <Globe className="w-4 h-4" />;
    }
    return <Monitor className="w-4 h-4" />;
  };

  return (
    <div className="bg-slate-800/95 border border-slate-700 h-full flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`px-3 py-1 text-sm font-bold ${
              game.status === 'LIVE' ? 'bg-green-500 text-white' :
              game.status === 'BETA' ? 'bg-yellow-500 text-black' :
              game.status === 'EARLY_ACCESS' ? 'bg-blue-500 text-white' :
              'bg-red-500 text-white'
            }`}>
              {game.status.replace('_', ' ')}
            </div>
            {game.stats.esportsReady && (
              <Trophy className="w-5 h-5 text-yellow-400" />
            )}
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-white">
              {formatPrice()}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="grid lg:grid-cols-2 gap-0 h-full">
          {/* Media Section */}
          <div className="bg-slate-900">
            <div className="aspect-video bg-slate-900 relative overflow-hidden">
              {showTrailer ? (
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <div className="text-white text-lg font-bold mb-2">Official Trailer</div>
                    <div className="text-slate-400 mb-4">{game.trailer}</div>
                    <button 
                      onClick={() => setShowTrailer(false)}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 font-bold transition-colors"
                    >
                      Close Trailer
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <img 
                    src={game.images.gallery[activeScreenshot] || game.images.hero} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <button 
                    onClick={() => setShowTrailer(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group"
                  >
                    <div className="bg-purple-500/90 hover:bg-purple-600/90 p-4 rounded-full group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </button>
                </>
              )}
            </div>

            {/* Screenshots Gallery */}
            <div className="p-4">
              <div className="grid grid-cols-4 gap-2">
                {game.images.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreenshot(index)}
                    className={`aspect-video rounded overflow-hidden border-2 transition-colors ${
                      activeScreenshot === index ? 'border-purple-400' : 'border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <img src={image} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="p-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Title and Description */}
              <div>
                <h1 className="text-3xl font-black text-white font-mono mb-2">
                  {game.title}
                </h1>
                <div className="text-purple-400 text-lg font-bold mb-4">{game.tagline}</div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.genres.map((genre, index) => (
                    <span key={index} className="bg-slate-700 text-cyan-400 px-3 py-1 text-sm font-bold">
                      {genre}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-4">
                  {game.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Key Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {game.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* System Requirements */}
              <div>
                <h3 className="text-white font-bold text-lg mb-3">System Requirements</h3>
                <div className="space-y-2">
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-yellow-400 font-bold text-sm mb-1">Minimum</div>
                    <div className="text-slate-300 text-sm">{game.systemReqs.min}</div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-600 p-3">
                    <div className="text-green-400 font-bold text-sm mb-1">Recommended</div>
                    <div className="text-slate-300 text-sm">{game.systemReqs.recommended}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats and Actions */}
            <div className="space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-900/50 border border-slate-600 p-3 text-center">
                  <Star className="w-5 h-5 mx-auto mb-2 text-yellow-400" />
                  <div className="text-lg font-black text-white">{game.rating}</div>
                  <div className="text-slate-400 text-xs">{game.reviewCount} Reviews</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-600 p-3 text-center">
                  <Users className="w-5 h-5 mx-auto mb-2 text-green-400" />
                  <div className="text-lg font-black text-white">{game.playerCount}</div>
                  <div className="text-slate-400 text-xs">Active Players</div>
                </div>
                <div className="bg-slate-900/50 border border-slate-600 p-3 text-center">
                  <Gamepad2 className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                  <div className="text-lg font-black text-white">{game.stats.averageSession}</div>
                  <div className="text-slate-400 text-xs">Avg Session</div>
                </div>
              </div>

              {/* Platforms */}
              <div className="flex items-center justify-between">
                <div className="text-slate-400 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Released {new Date(game.releaseDate).toLocaleDateString()}
                </div>
                <div className="flex items-center space-x-2">
                  {game.platforms.map((platform, index) => (
                    <div key={index} className="flex items-center space-x-1 bg-slate-700 text-white px-2 py-1 text-xs">
                      {getPlatformIcon(platform)}
                      <span>{platform}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to={game.storeLinks.direct || '#'}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 font-black transition-colors flex items-center justify-center space-x-2"
                >
                  {game.price.base === 0 ? <Play className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                  <span>{game.price.base === 0 ? 'PLAY NOW' : 'BUY NOW'}</span>
                </Link>
                <Link
                  to={`/game/${game.id}`}
                  className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 font-black transition-colors flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>MORE INFO</span>
                </Link>
              </div>

              {/* Store Links */}
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(game.storeLinks).slice(0, 3).map(([store, link], index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-900/50 hover:bg-slate-600 text-slate-300 hover:text-white px-3 py-2 text-xs text-center font-bold transition-colors"
                  >
                    {store.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPanel;
