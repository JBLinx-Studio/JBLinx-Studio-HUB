
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  ThumbsUp, 
  Star, 
  Clock, 
  Trophy, 
  TrendingUp, 
  Award, 
  Flame, 
  Shield,
  Send,
  Hash,
  UserPlus,
  Calendar,
  Target,
  Zap,
  Gift,
  Settings,
  Lock
} from 'lucide-react';

interface CommunityPanelProps {
  game: {
    id: number;
    title: string;
    rating: number;
    reviewCount: number;
    playerCount: string;
  };
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({ game }) => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [newMessage, setNewMessage] = useState('');

  const reviews = [
    {
      id: 1,
      username: 'TacticalPro99',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      rating: 5,
      comment: 'Amazing game! The graphics are stunning and gameplay is incredibly smooth. Best purchase I\'ve made this year.',
      time: '2 hours ago',
      helpful: 24,
      verified: true,
      platform: 'PC'
    },
    {
      id: 2,
      username: 'GameMaster2024',
      avatar: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=40&h=40&fit=crop&crop=face',
      rating: 4,
      comment: 'Great concept and execution. Minor bugs but overall a solid experience. Developer seems very responsive.',
      time: '5 hours ago',
      helpful: 18,
      verified: false,
      platform: 'Mobile'
    },
    {
      id: 3,
      username: 'IndieSupporter',
      avatar: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=40&h=40&fit=crop&crop=face',
      rating: 5,
      comment: 'Love supporting indie developers like JBLinx Studio. This game shows real passion and creativity!',
      time: '1 day ago',
      helpful: 32,
      verified: true,
      platform: 'Web'
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Tips for new players - beginner's guide",
      author: "HelpfulGamer",
      replies: 23,
      views: 456,
      lastReply: "2 hours ago",
      pinned: true,
      hot: true
    },
    {
      id: 2,
      title: "Feature request: Save system improvements",
      author: "QualityFocused",
      replies: 12,
      views: 189,
      lastReply: "4 hours ago",
      pinned: false,
      hot: true
    },
    {
      id: 3,
      title: "Bug report: Audio cutting out on level 3",
      author: "BugHunter",
      replies: 8,
      views: 234,
      lastReply: "6 hours ago",
      pinned: false,
      hot: false
    }
  ];

  const communityStats = [
    { label: 'ACTIVE USERS', value: '2.1K', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { label: 'REVIEWS', value: game.reviewCount.toString(), icon: MessageSquare, color: 'text-green-400', bg: 'bg-green-500/20' },
    { label: 'DISCUSSIONS', value: '156', icon: Hash, color: 'text-purple-400', bg: 'bg-purple-500/20' },
    { label: 'AVG RATING', value: game.rating.toString(), icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-500/20' }
  ];

  return (
    <div className="bg-gradient-to-b from-zinc-900/95 via-zinc-800/90 to-zinc-900/95 border border-zinc-700/50 backdrop-blur-sm h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-zinc-700/50 bg-zinc-900/90 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-2 bg-purple-500/20 rounded-lg border border-purple-400/30">
            <Users className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <span className="text-purple-400 font-black text-sm font-mono tracking-widest block">COMMUNITY HUB</span>
            <div className="text-zinc-400 text-xs mt-1">{game.title} Community</div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-4 gap-2">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`${stat.bg} border border-zinc-600/30 p-2 text-center transition-all duration-300 hover:scale-105 backdrop-blur-sm`}>
                <IconComponent className={`w-3 h-3 mx-auto mb-1 ${stat.color}`} />
                <div className="text-xs font-black text-white">{stat.value}</div>
                <div className="text-xs text-zinc-400 font-bold">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-zinc-700/50">
        <div className="flex">
          {[
            { id: 'reviews', label: 'REVIEWS', icon: Star },
            { id: 'discussions', label: 'DISCUSSIONS', icon: MessageSquare },
            { id: 'features', label: 'FEATURES', icon: Lock }
          ].map((tab) => {
            const IconComponent = tab.icon;
            const isComingSoon = tab.id === 'features';
            return (
              <button
                key={tab.id}
                onClick={() => !isComingSoon && setActiveTab(tab.id)}
                className={`flex-1 px-3 py-2 text-xs font-bold font-mono transition-all duration-300 border-b-2 flex items-center justify-center space-x-1 ${
                  activeTab === tab.id && !isComingSoon
                    ? 'border-purple-400 text-purple-400 bg-purple-500/10'
                    : isComingSoon
                    ? 'border-transparent text-zinc-500 cursor-not-allowed'
                    : 'border-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/30'
                }`}
                disabled={isComingSoon}
              >
                <IconComponent className="w-3 h-3" />
                <span>{tab.label}</span>
                {isComingSoon && <span className="ml-1 text-xs">(Soon)</span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="p-4">
            <div className="space-y-3 mb-4">
              {reviews.map((review) => (
                <div key={review.id} className="group relative bg-zinc-800/50 border border-zinc-600/50 p-3 hover:border-purple-400/50 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-3">
                      <img src={review.avatar} alt={review.username} className="w-8 h-8 rounded-full border border-zinc-600" />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-white font-black text-sm">{review.username}</span>
                          {review.verified && (
                            <span className="bg-green-500 text-white px-1 py-0.5 text-xs font-bold rounded">✓</span>
                          )}
                          <span className="bg-zinc-700 text-zinc-300 px-2 py-0.5 text-xs font-mono">{review.platform}</span>
                          <div className="flex items-center">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-zinc-300 text-sm mb-2">{review.comment}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-zinc-400 text-xs flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{review.time}</span>
                          </div>
                          <button className="flex items-center space-x-1 text-xs text-zinc-400 hover:text-green-400 transition-colors">
                            <ThumbsUp className="w-3 h-3" />
                            <span>{review.helpful}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Write Review */}
            <div className="bg-zinc-800/50 border border-zinc-600/50 p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-yellow-400 font-bold text-sm">WRITE A REVIEW</span>
              </div>
              <div className="space-y-2">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-zinc-600 hover:text-yellow-400 cursor-pointer transition-colors" />
                  ))}
                </div>
                <textarea
                  placeholder="Share your experience with this game..."
                  className="w-full bg-zinc-700 border border-zinc-600 text-white px-3 py-2 text-sm resize-none h-20 focus:outline-none focus:border-purple-400"
                />
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 text-sm font-bold transition-colors">
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Discussions */}
        {activeTab === 'discussions' && (
          <div className="p-4">
            <div className="space-y-3 mb-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-zinc-800/50 border border-zinc-600/50 p-3 hover:border-purple-400/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {discussion.pinned && <Target className="w-3 h-3 text-green-400" />}
                      {discussion.hot && <Flame className="w-3 h-3 text-orange-400" />}
                      <h3 className="text-white font-bold text-sm">{discussion.title}</h3>
                    </div>
                  </div>
                  <div className="text-zinc-400 text-xs mb-2">by {discussion.author}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-zinc-400">
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                    </div>
                    <div className="text-xs text-zinc-400">Last: {discussion.lastReply}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 font-black transition-colors flex items-center justify-center space-x-2">
              <Hash className="w-4 h-4" />
              <span>START NEW DISCUSSION</span>
            </button>
          </div>
        )}

        {/* Coming Soon Features */}
        {activeTab === 'features' && (
          <div className="p-4 text-center">
            <div className="bg-zinc-800/50 border border-zinc-600/50 p-8 space-y-4">
              <Lock className="w-12 h-12 text-zinc-500 mx-auto" />
              <h3 className="text-zinc-300 font-bold text-lg">Coming Soon</h3>
              <p className="text-zinc-500 text-sm">Advanced community features including leaderboards, tournaments, and clan systems are currently in development.</p>
              <div className="space-y-2 text-xs text-zinc-600">
                <div>• Global Leaderboards</div>
                <div>• Weekly Tournaments</div>
                <div>• Clan System</div>
                <div>• Player Achievements</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-700/50 bg-zinc-900/50">
        <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-3 font-black transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center justify-center space-x-2">
          <Users className="w-4 h-4" />
          <span>JOIN COMMUNITY DISCORD</span>
        </button>
      </div>
    </div>
  );
};

export default CommunityPanel;
