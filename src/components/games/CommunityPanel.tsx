
import React, { useState } from 'react';
import { 
  Users, 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  ThumbsDown,
  Flag,
  Award,
  Clock,
  TrendingUp,
  Heart,
  Share2,
  Filter,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommunityPanelProps {
  game: {
    id: number;
    title: string;
    rating: number;
    reviewCount: number;
    positiveReviews: number;
    stats: {
      communityRating: number;
      totalMatches?: string;
    };
    achievements?: number;
    tradingCards?: boolean;
    workshopSupport?: boolean;
  };
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({ game }) => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [reviewFilter, setReviewFilter] = useState('recent');

  // Mock community data - in real app this would come from your backend
  const reviews = [
    {
      id: 1,
      author: "CyberGamer2024",
      rating: 5,
      date: "2 days ago",
      helpful: 42,
      playTime: "156.2 hours",
      content: "Absolutely incredible game! The tactical depth is unmatched and the cyberpunk atmosphere is perfectly executed. The multiplayer battles are intense and strategic. Highly recommended for strategy fans!",
      recommended: true,
      verified: true
    },
    {
      id: 2,
      author: "StrategicMind",
      rating: 4,
      date: "1 week ago", 
      helpful: 28,
      playTime: "89.5 hours",
      content: "Great game overall with excellent graphics and gameplay mechanics. The learning curve is steep but rewarding. Some minor balance issues in multiplayer but the devs are actively addressing them.",
      recommended: true,
      verified: true
    },
    {
      id: 3,
      author: "TacticalReviewer",
      rating: 5,
      date: "2 weeks ago",
      helpful: 67,
      playTime: "203.7 hours",
      content: "This is what tactical gaming should be! Every match feels unique and the AI systems are incredibly sophisticated. The regular updates keep the meta fresh and exciting.",
      recommended: true,
      verified: true
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best strategies for the new Cyberpunk Arsenal DLC?",
      author: "EliteCommander",
      replies: 23,
      lastReply: "3 hours ago",
      pinned: false,
      views: 1240
    },
    {
      id: 2,
      title: "Official Tournament Announcement - Winter Championship",
      author: "JBLinx_Official",
      replies: 156,
      lastReply: "1 hour ago",
      pinned: true,
      views: 8920
    },
    {
      id: 3,
      title: "Tips for new players - Comprehensive guide",
      author: "GameMaster_Pro",
      replies: 89,
      lastReply: "5 hours ago",
      pinned: false,
      views: 3450
    }
  ];

  const achievements = [
    { name: "First Victory", description: "Win your first multiplayer match", rarity: "Common", earned: 89 },
    { name: "Tactical Genius", description: "Execute 5 perfect strategies in a row", rarity: "Rare", earned: 34 },
    { name: "Cyber Warrior", description: "Reach maximum cybernetic enhancement", rarity: "Epic", earned: 12 },
    { name: "Tournament Champion", description: "Win an official tournament", rarity: "Legendary", earned: 3 }
  ];

  return (
    <div className="p-6">
      {/* Community Stats Header */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-zinc-900/50 border border-zinc-700/50 p-4 text-center">
          <Users className="w-5 h-5 mx-auto mb-2 text-blue-400" />
          <div className="text-lg font-black text-white font-mono">{game.reviewCount.toLocaleString()}</div>
          <div className="text-xs text-zinc-400 font-mono">TOTAL REVIEWS</div>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-700/50 p-4 text-center">
          <ThumbsUp className="w-5 h-5 mx-auto mb-2 text-green-400" />
          <div className="text-lg font-black text-white font-mono">{game.positiveReviews}%</div>
          <div className="text-xs text-zinc-400 font-mono">POSITIVE</div>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-700/50 p-4 text-center">
          <Star className="w-5 h-5 mx-auto mb-2 text-yellow-400" />
          <div className="text-lg font-black text-white font-mono">{game.stats.communityRating}</div>
          <div className="text-xs text-zinc-400 font-mono">COMMUNITY RATING</div>
        </div>
        <div className="bg-zinc-900/50 border border-zinc-700/50 p-4 text-center">
          <Award className="w-5 h-5 mx-auto mb-2 text-purple-400" />
          <div className="text-lg font-black text-white font-mono">{game.achievements || 45}</div>
          <div className="text-xs text-zinc-400 font-mono">ACHIEVEMENTS</div>
        </div>
      </div>

      {/* Community Navigation */}
      <div className="flex border-b border-zinc-700/50 mb-6">
        {[
          { id: 'reviews', label: 'REVIEWS', icon: Star },
          { id: 'discussions', label: 'DISCUSSIONS', icon: MessageSquare },
          { id: 'achievements', label: 'ACHIEVEMENTS', icon: Award }
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 text-sm font-bold transition-colors ${
                activeTab === tab.id
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="font-mono">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'reviews' && (
        <div className="space-y-6">
          {/* Review Filters */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-zinc-400" />
              <select 
                value={reviewFilter}
                onChange={(e) => setReviewFilter(e.target.value)}
                className="bg-zinc-800 border border-zinc-600 text-white px-3 py-1 text-sm font-mono"
              >
                <option value="recent">Recent</option>
                <option value="helpful">Most Helpful</option>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
              </select>
            </div>
            
            <Link 
              to={`/community/reviews/${game.id}`}
              className="text-purple-400 hover:text-purple-300 text-sm font-bold font-mono"
            >
              VIEW ALL REVIEWS →
            </Link>
          </div>

          {/* Reviews List */}
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-zinc-900/50 border border-zinc-700/50 p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{review.author[0]}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-bold text-sm">{review.author}</span>
                        {review.verified && (
                          <span className="bg-green-500/20 border border-green-500/30 text-green-400 px-2 py-1 text-xs font-bold">
                            VERIFIED
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-zinc-400 font-mono">
                        <span>{review.playTime} played</span>
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-zinc-300 text-sm mb-3 leading-relaxed">{review.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-green-400 hover:text-green-300 text-sm">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.helpful}</span>
                    </button>
                    <button className="text-zinc-500 hover:text-zinc-400 text-sm">
                      <ThumbsDown className="w-4 h-4" />
                    </button>
                    <button className="text-zinc-500 hover:text-zinc-400 text-sm">
                      <Flag className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {review.recommended && (
                    <div className="flex items-center space-x-1 text-green-400 text-sm font-bold">
                      <ThumbsUp className="w-4 h-4" />
                      <span className="font-mono">RECOMMENDED</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'discussions' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-zinc-400" />
              <input 
                type="text"
                placeholder="Search discussions..."
                className="bg-zinc-800 border border-zinc-600 text-white px-3 py-2 text-sm font-mono w-64"
              />
            </div>
            <Link 
              to={`/community/discussions/${game.id}`}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 text-sm font-bold font-mono transition-colors"
            >
              NEW DISCUSSION
            </Link>
          </div>

          <div className="space-y-3">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-zinc-900/50 border border-zinc-700/50 p-4 hover:border-zinc-600 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {discussion.pinned && (
                        <span className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 px-2 py-1 text-xs font-bold">
                          PINNED
                        </span>
                      )}
                      <h3 className="text-white font-bold text-sm hover:text-purple-300 cursor-pointer">
                        {discussion.title}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-zinc-400 font-mono">
                      <span>by {discussion.author}</span>
                      <span>{discussion.views} views</span>
                      <span>Last reply {discussion.lastReply}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm font-bold">{discussion.replies}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-white font-black text-lg mb-2 font-mono">GAME ACHIEVEMENTS</h3>
            <p className="text-zinc-400 text-sm">Unlock achievements and show your mastery</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-700/50 p-4 hover:border-zinc-600 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.rarity === 'Legendary' ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                      achievement.rarity === 'Epic' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                      achievement.rarity === 'Rare' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                      'bg-gradient-to-r from-gray-500 to-gray-600'
                    }`}>
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{achievement.name}</h4>
                      <p className="text-zinc-400 text-xs">{achievement.description}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs font-bold ${
                    achievement.rarity === 'Legendary' ? 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400' :
                    achievement.rarity === 'Epic' ? 'bg-purple-500/20 border border-purple-500/30 text-purple-400' :
                    achievement.rarity === 'Rare' ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400' :
                    'bg-gray-500/20 border border-gray-500/30 text-gray-400'
                  }`}>
                    {achievement.rarity}
                  </span>
                </div>
                <div className="text-zinc-400 text-xs font-mono">
                  Earned by {achievement.earned}% of players
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPanel;
