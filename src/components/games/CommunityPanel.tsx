
import React from 'react';
import { MessageSquare, Users, ThumbsUp, Star, Clock, Trophy, TrendingUp, Heart, Share2 } from 'lucide-react';

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
  // Generate game-specific community activity
  const getGameActivity = (gameId: number, gameTitle: string) => [
    {
      id: 1,
      type: 'review',
      user: `${gameTitle}Pro99`,
      rating: 5,
      comment: `The latest update for ${gameTitle} is incredible! The new features really enhance the gameplay experience.`,
      time: '2 hours ago',
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      type: 'achievement',
      user: `${gameTitle.replace(/\s+/g, '')}Master`,
      achievement: 'Ultimate Champion',
      description: `Achieved mastery level in ${gameTitle} competitive mode`,
      time: '4 hours ago',
      rarity: 'Legendary'
    },
    {
      id: 3,
      type: 'review',
      user: 'GameCritic2024',
      rating: 4,
      comment: `${gameTitle} continues to impress with consistent updates and community engagement. Highly recommended!`,
      time: '6 hours ago',
      helpful: 18,
      verified: true
    },
    {
      id: 4,
      type: 'tournament',
      event: `${gameTitle} Weekly Championship`,
      participants: 2847,
      prize: '$5,000',
      time: 'Starting in 2 days'
    }
  ];

  const recentActivity = getGameActivity(game.id, game.title);

  const topPlayers = [
    { 
      name: 'ElitePlayer1', 
      rank: '#1', 
      score: '2,847 Points', 
      streak: '12 wins',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face`
    },
    { 
      name: 'ProGamer22', 
      rank: '#2', 
      score: '2,650 Points', 
      streak: '8 wins',
      avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face`
    },
    { 
      name: 'ChampionX', 
      rank: '#3', 
      score: '2,543 Points', 
      streak: '15 wins',
      avatar: `https://images.unsplash.com/photo-1494790108755-2616b612b1fd?w=40&h=40&fit=crop&crop=face`
    }
  ];

  const communityStats = [
    { 
      label: 'ACTIVE TODAY', 
      value: Math.floor(parseInt(game.playerCount.replace('K', '').replace('.', '')) * 100).toString() + '+', 
      icon: Users, 
      color: 'text-blue-400' 
    },
    { 
      label: 'REVIEWS', 
      value: (game.reviewCount / 100).toFixed(0) + 'K', 
      icon: MessageSquare, 
      color: 'text-green-400' 
    },
    { 
      label: 'TOURNAMENTS', 
      value: '8', 
      icon: Trophy, 
      color: 'text-yellow-400' 
    }
  ];

  return (
    <div className="bg-slate-800/95 border border-slate-700 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-black font-mono">COMMUNITY HUB</span>
          </div>
          <div className="text-slate-400 text-xs">
            {game.playerCount} Active
          </div>
        </div>
        <div className="text-slate-400 text-xs">
          {game.title} Community
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4 space-y-6">
          {/* Community Stats */}
          <div className="grid grid-cols-3 gap-2">
            {communityStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-900/50 border border-slate-600 p-3 text-center">
                  <IconComponent className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
                  <div className="text-sm font-black text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Live Activity Feed */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-bold text-sm">LIVE ACTIVITY</span>
            </div>

            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="bg-slate-900/50 border border-slate-600 p-3 hover:border-blue-400/50 transition-colors">
                  {activity.type === 'review' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="w-3 h-3 text-blue-400" />
                          <span className="text-white font-bold text-sm">{activity.user}</span>
                          {activity.verified && (
                            <span className="bg-green-500 text-white px-1 py-0.5 text-xs font-bold rounded">✓</span>
                          )}
                          <div className="flex items-center">
                            {Array.from({ length: activity.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="text-slate-400 text-xs flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.time}
                        </div>
                      </div>
                      <p className="text-slate-300 text-xs mb-2 line-clamp-2">{activity.comment}</p>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-3 h-3 text-green-400" />
                          <span className="text-green-400 text-xs">{activity.helpful}</span>
                        </div>
                        <button className="flex items-center space-x-1 text-slate-400 hover:text-white text-xs">
                          <Heart className="w-3 h-3" />
                          <span>Like</span>
                        </button>
                        <button className="flex items-center space-x-1 text-slate-400 hover:text-white text-xs">
                          <Share2 className="w-3 h-3" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {activity.type === 'achievement' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-3 h-3 text-yellow-400" />
                          <span className="text-white font-bold text-sm">{activity.user}</span>
                          <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">{activity.rarity}</span>
                        </div>
                        <div className="text-slate-400 text-xs">{activity.time}</div>
                      </div>
                      <div className="text-yellow-400 font-bold text-sm mb-1">{activity.achievement}</div>
                      <p className="text-slate-300 text-xs">{activity.description}</p>
                    </div>
                  )}

                  {activity.type === 'tournament' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-3 h-3 text-purple-400" />
                          <span className="text-white font-bold text-sm">{activity.event}</span>
                        </div>
                        <div className="text-slate-400 text-xs">{activity.time}</div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 text-xs">{activity.participants} participants</span>
                        <span className="text-green-400 font-bold text-xs">{activity.prize} prize pool</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Top Players Leaderboard */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm">TOP PLAYERS</span>
            </div>

            <div className="space-y-2">
              {topPlayers.map((player, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-900/50 border border-slate-600 p-3 hover:border-yellow-400/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="text-yellow-400 font-bold text-sm w-8">{player.rank}</span>
                    <img
                      src={player.avatar}
                      alt={player.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-white font-bold text-sm">{player.name}</div>
                      <div className="text-slate-400 text-xs">{game.title} Player</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-sm">{player.score}</div>
                    <div className="text-green-400 text-xs">{player.streak}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-black transition-colors">
          JOIN COMMUNITY
        </button>
      </div>
    </div>
  );
};

export default CommunityPanel;
