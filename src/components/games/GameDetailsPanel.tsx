
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
  Zap, 
  GamepadIcon, 
  Shield, 
  Clock, 
  Target,
  Info,
  Award,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

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
    positiveReviews: number;
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
      totalMatches?: string;
      communityRating: number;
    };
    systemReqs: {
      min: {
        os: string;
        processor: string;
        memory: string;
        graphics: string;
        storage: string;
        network: string;
      };
      recommended: {
        os: string;
        processor: string;
        memory: string;
        graphics: string;
        storage: string;
        network: string;
      };
    };
    achievements?: number;
    tradingCards?: boolean;
    cloudSave?: boolean;
    workshopSupport?: boolean;
    storeLinks: Record<string, string>;
  };
}

const GameDetailsPanel: React.FC<GameDetailsPanelProps> = ({ game }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

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
        return 'bg-green-500/20 border border-green-500/30 text-green-400';
      case 'BETA':
        return 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400';
      case 'EARLY_ACCESS':
        return 'bg-orange-500/20 border border-orange-500/30 text-orange-400';
      default:
        return 'bg-blue-500/20 border border-blue-500/30 text-blue-400';
    }
  };

  const systemRequirements = [
    {
      category: 'Minimum Requirements',
      specs: game.systemReqs.min,
      icon: AlertTriangle,
      color: 'text-yellow-400'
    },
    {
      category: 'Recommended Requirements', 
      specs: game.systemReqs.recommended,
      icon: CheckCircle,
      color: 'text-green-400'
    }
  ];

  return (
    <div className="h-full bg-zinc-900/50 backdrop-blur-sm">
      {/* Enhanced Header */}
      <div className="p-6 border-b border-zinc-700/50 bg-zinc-900/80">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <h2 className="text-3xl lg:text-4xl font-black text-white font-mono">{game.title}</h2>
              <span className={`px-3 py-1 text-xs font-black font-mono ${getStatusColor(game.status)}`}>
                {game.status.replace('_', ' ')}
              </span>
            </div>
            <p className="text-purple-400 font-bold text-xl mb-4 font-mono">{game.tagline}</p>
            
            <div className="flex items-center space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                {game.platforms.slice(0, 4).map((platform, index) => (
                  <div key={index} className="p-2 bg-zinc-800 border border-zinc-600 text-zinc-400 hover:text-white hover:border-purple-400/50 transition-all duration-300" title={platform}>
                    {getPlatformIcon(platform)}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {game.genres.slice(0, 4).map((genre, index) => (
                  <span key={index} className="bg-zinc-800 border border-zinc-600 text-zinc-300 px-3 py-1 text-sm font-bold font-mono">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Game Features */}
            <div className="flex items-center space-x-4 text-sm">
              {game.achievements && (
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Award className="w-4 h-4" />
                  <span className="font-mono">{game.achievements} Achievements</span>
                </div>
              )}
              {game.tradingCards && (
                <div className="flex items-center space-x-1 text-blue-400">
                  <Trophy className="w-4 h-4" />
                  <span className="font-mono">Trading Cards</span>
                </div>
              )}
              {game.cloudSave && (
                <div className="flex items-center space-x-1 text-green-400">
                  <Cloud className="w-4 h-4" />
                  <span className="font-mono">Cloud Save</span>
                </div>
              )}
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl lg:text-4xl font-black text-green-400 mb-3 font-mono">
              {game.price.base === 0 ? 'FREE' : game.price.sale ? (
                <div className="flex items-center space-x-3">
                  <span className="text-zinc-400 line-through text-2xl">${game.price.base}</span>
                  <span>${game.price.sale}</span>
                </div>
              ) : `$${game.price.base}`}
            </div>
            
            <div className="flex items-center justify-end space-x-2 mb-4">
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`group p-3 transition-all duration-300 border ${
                  isWishlisted 
                    ? 'bg-red-500/20 border-red-500/30 text-red-400' 
                    : 'bg-zinc-800 border-zinc-600 text-zinc-400 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400'
                }`}
              >
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-3 bg-zinc-800 border border-zinc-600 text-zinc-400 hover:bg-zinc-700 hover:border-zinc-500 hover:text-white transition-all duration-300">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="group bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50 text-white px-6 py-3 font-black transition-all duration-300 flex items-center space-x-2 font-mono">
                {game.price.base === 0 ? <Play className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                <span>{game.price.base === 0 ? 'PLAY NOW' : 'BUY NOW'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-5 gap-3">
          {[
            { icon: Star, label: 'Rating', value: `${game.rating}★`, color: 'text-yellow-400' },
            { icon: Users, label: 'Players', value: game.playerCount, color: 'text-cyan-400' },
            { icon: Download, label: 'Reviews', value: `${(game.reviewCount / 1000).toFixed(1)}K`, color: 'text-blue-400' },
            { icon: Trophy, label: 'Peak', value: `${(game.stats.peakPlayers / 1000).toFixed(0)}K`, color: 'text-purple-400' },
            { icon: ThumbsUp, label: 'Positive', value: `${game.positiveReviews}%`, color: 'text-green-400' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-zinc-800/80 border border-zinc-600/50 p-3 text-center hover:border-zinc-500 transition-colors">
                <IconComponent className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
                <div className="text-sm lg:text-lg font-black text-white font-mono">{stat.value}</div>
                <div className="text-xs text-zinc-400 font-bold font-mono">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-zinc-700/50">
        {[
          { id: 'overview', label: 'OVERVIEW', icon: Info },
          { id: 'requirements', label: 'SYSTEM REQUIREMENTS', icon: Monitor },
          { id: 'media', label: 'SCREENSHOTS', icon: Zap }
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-bold transition-colors ${
                activeTab === tab.id
                  ? 'text-purple-400 border-b-2 border-purple-400 bg-zinc-800/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/20'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="font-mono">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Game Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-black mb-4 flex items-center font-mono text-lg">
                  <GamepadIcon className="w-5 h-5 mr-2 text-purple-400" />
                  ABOUT THIS GAME
                </h3>
                <p className="text-zinc-300 leading-relaxed mb-6">{game.description}</p>
              </div>

              <div>
                <h3 className="text-white font-black mb-4 flex items-center font-mono text-lg">
                  <Zap className="w-5 h-5 mr-2 text-cyan-400" />
                  KEY FEATURES
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {game.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-zinc-800/50 border border-zinc-700/50 hover:border-cyan-400/30 transition-colors">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-zinc-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics & Release Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-black mb-4 flex items-center font-mono text-lg">
                  <Target className="w-5 h-5 mr-2 text-orange-400" />
                  PERFORMANCE METRICS
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-zinc-800/50 border border-zinc-600/50 p-4 text-center">
                    <Clock className="w-5 h-5 mx-auto mb-2 text-blue-400" />
                    <div className="text-lg font-black text-white font-mono">{game.stats.averageSession}</div>
                    <div className="text-xs text-zinc-400 font-mono">AVG SESSION</div>
                  </div>
                  <div className="bg-zinc-800/50 border border-zinc-600/50 p-4 text-center">
                    <Users className="w-5 h-5 mx-auto mb-2 text-green-400" />
                    <div className="text-lg font-black text-white font-mono">{game.stats.retention}</div>
                    <div className="text-xs text-zinc-400 font-mono">RETENTION</div>
                  </div>
                  {game.stats.totalMatches && (
                    <div className="bg-zinc-800/50 border border-zinc-600/50 p-4 text-center col-span-2">
                      <Trophy className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                      <div className="text-lg font-black text-white font-mono">{game.stats.totalMatches}</div>
                      <div className="text-xs text-zinc-400 font-mono">TOTAL MATCHES PLAYED</div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-white font-black mb-4 flex items-center font-mono text-lg">
                  <Calendar className="w-5 h-5 mr-2 text-pink-400" />
                  RELEASE INFORMATION
                </h3>
                <div className="bg-zinc-800/50 border border-zinc-600/50 p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-400 font-mono">Release Date:</span>
                    <span className="text-white font-bold">{new Date(game.releaseDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400 font-mono">Status:</span>
                    <span className={`px-2 py-1 text-xs font-bold ${getStatusColor(game.status)}`}>
                      {game.status.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400 font-mono">Esports Ready:</span>
                    <span className={`font-bold ${game.stats.esportsReady ? 'text-green-400' : 'text-zinc-400'}`}>
                      {game.stats.esportsReady ? 'YES' : 'NO'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'requirements' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-white font-black text-2xl mb-2 font-mono">SYSTEM REQUIREMENTS</h3>
              <p className="text-zinc-400">Make sure your system can handle this game</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {systemRequirements.map((req, index) => {
                const IconComponent = req.icon;
                return (
                  <div key={index} className="bg-zinc-800/50 border border-zinc-600/50 p-6">
                    <div className={`flex items-center space-x-2 mb-4 ${req.color}`}>
                      <IconComponent className="w-5 h-5" />
                      <h4 className="font-black font-mono">{req.category}</h4>
                    </div>
                    
                    <div className="space-y-3">
                      {Object.entries(req.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-zinc-700/30 pb-2">
                          <span className="text-zinc-400 font-mono capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <span className="text-white font-medium text-right max-w-[60%]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'media' && (
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative h-80 lg:h-96 border border-zinc-600/50 overflow-hidden group bg-zinc-900">
              <img 
                src={game.images.gallery[activeImage] || game.images.hero} 
                alt={game.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <button className="absolute top-4 right-4 bg-zinc-800/90 hover:bg-zinc-700/90 border border-zinc-600 hover:border-purple-400/50 text-white p-3 transition-all duration-300">
                <Play className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-zinc-900/80 border border-zinc-600 text-white px-4 py-2 font-mono">
                {activeImage + 1} / {Math.max(1, game.images.gallery.length)}
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-3">
              {[game.images.hero, ...game.images.gallery].slice(0, 12).map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-video border-2 transition-all duration-300 overflow-hidden ${
                    index === activeImage 
                      ? 'border-purple-400 shadow-lg shadow-purple-400/20' 
                      : 'border-zinc-600 hover:border-zinc-500'
                  }`}
                >
                  <img src={image} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetailsPanel;
