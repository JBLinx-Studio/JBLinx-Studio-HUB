
import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  Star, 
  Eye, 
  Heart, 
  Share2, 
  Calendar, 
  Gamepad2,
  TrendingUp,
  Users,
  MessageSquare,
  ExternalLink,
  Bell,
  Bookmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: {
    id: number;
    title: string;
    category: string;
    platform: string;
    status: string;
    releaseDate: string;
    description: string;
    trailer: string;
    images: string[];
    rating: string;
    downloads: string;
    reviews: number;
    price: string;
    features: string[];
    analytics: {
      dailyPlayers: string;
      monthlyGrowth: string;
      avgSessionTime: string;
      retention: string;
      wishlistCount: string;
      streamViews: string;
    };
    blogPosts: number[];
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="bg-slate-900/95 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
      {/* Game Media Header */}
      <div className="relative h-48 overflow-hidden">
        {showTrailer ? (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-purple-400 mx-auto mb-2" />
              <div className="text-white font-bold">Trailer Preview</div>
              <button 
                onClick={() => setShowTrailer(false)}
                className="mt-2 text-purple-400 text-sm hover:text-purple-300"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <img 
              src={game.images[0]} 
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
          </>
        )}
        
        {/* Status & Platform Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2 py-1 text-xs font-black backdrop-blur-sm ${
            game.status === 'RELEASED' ? 'bg-green-500/90 text-white' :
            game.status === 'BETA' ? 'bg-yellow-500/90 text-black' :
            game.status === 'COMING SOON' ? 'bg-blue-500/90 text-white' :
            'bg-red-500/90 text-white'
          }`}>
            {game.status}
          </span>
          <span className="bg-slate-800/90 text-purple-400 px-2 py-1 text-xs font-black backdrop-blur-sm">
            {game.platform}
          </span>
        </div>

        {/* Media Controls */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button 
            onClick={() => setShowTrailer(true)}
            className="bg-purple-500/90 hover:bg-purple-600/90 text-white p-2 backdrop-blur-sm transition-colors"
          >
            <Play className="w-4 h-4" />
          </button>
          <button className="bg-slate-800/90 hover:bg-slate-700/90 text-white p-2 backdrop-blur-sm transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Live Analytics Overlay */}
        <div className="absolute bottom-3 left-3 bg-slate-800/90 backdrop-blur-sm px-3 py-1 text-xs">
          <div className="flex items-center space-x-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-black">{game.analytics.dailyPlayers} LIVE</span>
          </div>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        {/* Title & Category */}
        <div className="mb-3">
          <h3 className="text-white font-black text-lg font-mono leading-tight group-hover:text-purple-300 transition-colors">
            {game.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-purple-400 font-bold text-sm">{game.category}</span>
            <span className="text-green-400 font-black text-lg">{game.price}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{game.description}</p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-slate-800/50 border border-slate-600 p-2 text-center">
            <TrendingUp className="w-3 h-3 mx-auto mb-1 text-green-400" />
            <div className="text-xs font-black text-white">{game.analytics.monthlyGrowth}</div>
            <div className="text-xs text-slate-400">GROWTH</div>
          </div>
          <div className="bg-slate-800/50 border border-slate-600 p-2 text-center">
            <Users className="w-3 h-3 mx-auto mb-1 text-blue-400" />
            <div className="text-xs font-black text-white">{game.analytics.retention}</div>
            <div className="text-xs text-slate-400">RETENTION</div>
          </div>
        </div>

        {/* Analytics Row */}
        <div className="grid grid-cols-3 gap-2 mb-4 text-center">
          <div>
            <div className="text-white font-black text-sm">{game.downloads}</div>
            <div className="text-slate-400 text-xs">DOWNLOADS</div>
          </div>
          <div>
            <div className="text-white font-black text-sm flex items-center justify-center space-x-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span>{game.rating}</span>
            </div>
            <div className="text-slate-400 text-xs">RATING</div>
          </div>
          <div>
            <div className="text-white font-black text-sm">{game.analytics.wishlistCount}</div>
            <div className="text-slate-400 text-xs">WISHLIST</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 font-black transition-colors flex items-center justify-center space-x-1 text-sm">
            <Play className="w-3 h-3" />
            <span>PLAY NOW</span>
          </button>
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`px-3 py-2 transition-colors ${
              isWishlisted ? 'bg-yellow-500 text-black' : 'bg-slate-700 hover:bg-slate-600 text-white'
            }`}
          >
            <Bookmark className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsFollowing(!isFollowing)}
            className={`px-3 py-2 transition-colors ${
              isFollowing ? 'bg-green-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-white'
            }`}
          >
            <Bell className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Stats & Social */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>{game.analytics.streamViews}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare className="w-3 h-3" />
              <span>{game.reviews}</span>
            </div>
          </div>
          <button className="text-purple-400 hover:text-purple-300 flex items-center space-x-1">
            <Share2 className="w-3 h-3" />
            <span>Share</span>
          </button>
        </div>

        {/* Related Dev Content */}
        {game.blogPosts.length > 0 && (
          <div className="border-t border-slate-700 pt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-300 text-xs font-black">DEV UPDATES</span>
              <Link to="/blog" className="text-purple-400 text-xs hover:text-purple-300 font-bold">
                View All →
              </Link>
            </div>
            <div className="space-y-1">
              {game.blogPosts.slice(0, 2).map((postId, index) => (
                <Link
                  key={index}
                  to={`/blog/${postId}`}
                  className="block bg-slate-800/50 hover:bg-slate-700/50 p-2 text-xs text-slate-300 hover:text-white transition-colors border border-slate-600/30"
                >
                  <div className="flex items-center justify-between">
                    <span>Dev Blog #{postId}</span>
                    <span className="text-purple-400">NEW</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
