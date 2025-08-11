import React, { useState } from 'react';
import { Play, ShoppingCart, Heart, Share2, Star, Users, Download, Calendar, Monitor, Smartphone, Globe, Trophy, Zap, GamepadIcon, Shield, Clock, Target } from 'lucide-react';
interface GameDetailsPanelProps {
  game: {
    id: number;
    title: string;
    tagline: string;
    description: string;
    images: {
      hero: string;
      gallery: string[];
    };
    trailer: string;
    rating: number;
    playerCount: string;
    reviewCount: number;
    price: {
      base: number;
      sale: number | null;
      currency: string;
    };
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
    systemReqs: {
      min: string;
      recommended: string;
    };
    storeLinks: Record<string, string>;
  };
}
const GameDetailsPanel: React.FC<GameDetailsPanelProps> = ({
  game
}) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'pc':
        return <Monitor className="w-4 h-4" />;
      case 'mobile':
      case 'ios':
      case 'android':
        return <Smartphone className="w-4 h-4" />;
      case 'web browser':
        return <Globe className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'bg-green-500 text-white shadow-green-500/50';
      case 'BETA':
        return 'bg-yellow-500 text-black shadow-yellow-500/50';
      case 'EARLY_ACCESS':
        return 'bg-orange-500 text-white shadow-orange-500/50';
      default:
        return 'bg-blue-500 text-white shadow-blue-500/50';
    }
  };
  return <div className="h-full bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 flex flex-col backdrop-blur-sm">
      {/* Enhanced Header */}
      <div className="p-6 border-b border-slate-700/50 backdrop-blur-sm bg-neutral-950">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-3xl font-black text-white font-mono">{game.title}</h2>
              <span className={`px-3 py-1 text-xs font-black shadow-lg ${getStatusColor(game.status)}`}>
                {game.status.replace('_', ' ')}
              </span>
            </div>
            <p className="text-purple-400 font-bold text-lg mb-3">{game.tagline}</p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {game.platforms.slice(0, 4).map((platform, index) => <div key={index} className="p-2 bg-slate-800/50 border border-slate-600/50 text-slate-400 hover:text-white transition-colors" title={platform}>
                    {getPlatformIcon(platform)}
                  </div>)}
              </div>
              <div className="flex flex-wrap gap-1">
                {game.genres.slice(0, 3).map((genre, index) => <span key={index} className="bg-cyan-500/20 border border-cyan-400/30 text-cyan-400 px-2 py-1 text-xs font-bold">
                    {genre}
                  </span>)}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl font-black text-green-400 mb-2">
              {game.price.base === 0 ? 'FREE' : game.price.sale ? <div className="flex items-center space-x-3">
                   <span className="text-slate-400 line-through text-xl">${game.price.base}</span>
                   <span>${game.price.sale}</span>
                 </div> : `$${game.price.base}`}
            </div>
            
            <div className="flex items-center justify-end space-x-2 mb-3">
              <button onClick={() => setIsWishlisted(!isWishlisted)} className={`group p-3 transition-all duration-300 ${isWishlisted ? 'bg-red-500 text-white shadow-red-500/30' : 'bg-slate-800/50 text-slate-400 hover:bg-red-500 hover:text-white'} shadow-lg hover:scale-110`}>
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-3 bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-white transition-all duration-300 shadow-lg hover:scale-110">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="group bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-black transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-purple-500/30 hover:scale-105">
                {game.price.base === 0 ? <Play className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                <span>{game.price.base === 0 ? 'PLAY NOW' : 'BUY NOW'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          {[{
          icon: Star,
          label: 'Rating',
          value: `${game.rating}★`,
          color: 'text-yellow-400',
          bg: 'bg-yellow-500/20'
        }, {
          icon: Users,
          label: 'Players',
          value: game.playerCount,
          color: 'text-green-400',
          bg: 'bg-green-500/20'
        }, {
          icon: Download,
          label: 'Reviews',
          value: `${(game.reviewCount / 1000).toFixed(1)}K`,
          color: 'text-blue-400',
          bg: 'bg-blue-500/20'
        }, {
          icon: Trophy,
          label: 'Peak',
          value: `${(game.stats.peakPlayers / 1000).toFixed(0)}K`,
          color: 'text-purple-400',
          bg: 'bg-purple-500/20'
        }].map((stat, index) => {
          const IconComponent = stat.icon;
          return <div key={index} className={`${stat.bg} border border-slate-600/30 p-3 text-center hover:scale-105 transition-transform duration-300 backdrop-blur-sm`}>
                <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                <div className="text-lg font-black text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 font-bold">{stat.label}</div>
              </div>;
        })}
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="flex-1 overflow-y-auto game-scroll">
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-slate-600">
            {/* Enhanced Media Gallery */}
            <div className="space-y-4">
              <div className="relative h-80 border border-slate-600/50 overflow-hidden group bg-neutral-950">
                <img src={game.images.gallery[activeImage] || game.images.hero} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <button className="absolute top-4 right-4 bg-purple-500/90 hover:bg-purple-600/90 text-white p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/30">
                  <Play className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 bg-slate-900/80 text-white px-3 py-1 text-sm backdrop-blur-sm">
                  {activeImage + 1} / {Math.max(1, game.images.gallery.length)}
                </div>
              </div>
              
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {[game.images.hero, ...game.images.gallery].slice(0, 6).map((image, index) => <button key={index} onClick={() => setActiveImage(index)} className={`flex-shrink-0 w-20 h-20 border-2 transition-all duration-300 hover:scale-110 ${index === activeImage ? 'border-purple-400 shadow-purple-400/50' : 'border-slate-600/50 hover:border-slate-500'} shadow-lg`}>
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>)}
              </div>
            </div>

            {/* Enhanced Game Info */}
            <div className="space-y-6 bg-rose-500">
              <div>
                <h3 className="text-white font-black mb-3 flex items-center">
                  <GamepadIcon className="w-5 h-5 mr-2 text-purple-400" />
                  DESCRIPTION
                </h3>
                <p className="text-slate-300 leading-relaxed">{game.description}</p>
              </div>

              <div>
                <h3 className="text-white font-black mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                  KEY FEATURES
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {game.features.slice(0, 6).map((feature, index) => <div key={index} className="flex items-center space-x-3 p-2 bg-slate-800/30 border border-slate-700/50 hover:border-cyan-400/30 transition-colors">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-slate-300 text-sm font-medium">{feature}</span>
                    </div>)}
                </div>
              </div>

              <div>
                <h3 className="text-white font-black mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  SYSTEM REQUIREMENTS
                </h3>
                <div className="bg-slate-800/30 border border-slate-600/50 p-4 space-y-3">
                  <div>
                    <div className="text-xs text-green-400 font-black mb-1">MINIMUM SPECS</div>
                    <div className="text-slate-300 text-sm">{game.systemReqs.min}</div>
                  </div>
                  <div className="border-t border-slate-700/50 pt-3">
                    <div className="text-xs text-cyan-400 font-black mb-1">RECOMMENDED SPECS</div>
                    <div className="text-slate-300 text-sm">{game.systemReqs.recommended}</div>
                  </div>
                </div>
              </div>

              {/* Game Stats */}
              <div>
                <h3 className="text-white font-black mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-orange-400" />
                  PERFORMANCE METRICS
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-800/30 border border-slate-600/50 p-3 text-center">
                    <Clock className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                    <div className="text-sm font-black text-white">{game.stats.averageSession}</div>
                    <div className="text-xs text-slate-400">AVG SESSION</div>
                  </div>
                  <div className="bg-slate-800/30 border border-slate-600/50 p-3 text-center">
                    <Users className="w-4 h-4 mx-auto mb-1 text-green-400" />
                    <div className="text-sm font-black text-white">{game.stats.retention}</div>
                    <div className="text-xs text-slate-400">RETENTION</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default GameDetailsPanel;