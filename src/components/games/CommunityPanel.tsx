
import React from 'react';
import { MessageSquare, Users, ThumbsUp, Star, Clock, Trophy, TrendingUp } from 'lucide-react';

interface CommunityPanelProps {
  games: Array<{
    id: number;
    title: string;
    rating: number;
    reviewCount: number;
    playerCount: string;
  }>;
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({ games }) => {
  const recentActivity = [
    {
      id: 1,
      type: 'review',
      user: 'TacticalPro99',
      game: games[0],
      rating: 5,
      comment: 'The new weapon balance changes are perfect! Combat feels much more strategic now.',
      time: '2 hours ago',
      helpful: 24,
      verified: true
    },
    {
      id: 2,
      type: 'achievement',
      user: 'RTSMaster',
      game: games[1],
      achievement: 'Empire Builder',
      description: 'Built 100 cities across different campaigns',
      time: '4 hours ago',
      rarity: 'Legendary'
    },
    {
      id: 3,
      type: 'review',
      user: 'SurvivalGamer',
      game: games[2],
      rating: 4,
      comment: 'Early access is promising! The atmosphere is incredible and co-op works great.',
      time: '6 hours ago',
      helpful: 18,
      verified: true
    },
    {
      id: 4,
      type: 'tournament',
      event: 'Weekly Championship',
      game: games[0],
      participants: 2847,
      prize: '$5,000',
      time: 'Starting in 2 days'
    }
  ];

  const topPlayers = [
    { name: 'EliteSoldier', game: games[0], rank: '#1', score: '2,847 MMR', streak: '12 wins' },
    { name: 'CommanderX', game: games[1], rank: '#1', score: '98% WR', streak: '25 wins' },
    { name: 'Survivor', game: games[2], rank: '#1', score: '247 days', streak: '15 days' }
  ];

  const communityStats = [
    { label: 'TOTAL PLAYERS', value: '127K+', icon: Users, color: 'text-blue-400' },
    { label: 'REVIEWS TODAY', value: '342', icon: MessageSquare, color: 'text-green-400' },
    { label: 'TOURNAMENTS', value: '15', icon: Trophy, color: 'text-yellow-400' }
  ];

  return (
    <div className="bg-slate-800/95 border border-slate-700 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Users className="w-5 h-5 text-blue-400" />
        <span className="text-blue-400 font-black text-lg font-mono">COMMUNITY HUB</span>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-3 gap-2 mb-6">
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

      {/* Recent Activity Feed */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 font-bold text-sm">LIVE ACTIVITY</span>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="bg-slate-900/50 border border-slate-600 p-3 hover:border-blue-400/50 transition-colors">
              {activity.type === 'review' && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-3 h-3 text-blue-400" />
                      <span className="text-white font-bold text-sm">{activity.user}</span>
                      {activity.verified && (
                        <span className="bg-green-500 text-white px-1 py-0.5 text-xs font-bold">✓</span>
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
                  <div className="text-slate-400 text-xs mb-1">{activity.game.title}</div>
                  <p className="text-slate-300 text-xs mb-2 line-clamp-2">{activity.comment}</p>
                  <div className="flex items-center">
                    <ThumbsUp className="w-3 h-3 text-green-400 mr-1" />
                    <span className="text-green-400 text-xs">{activity.helpful} helpful</span>
                  </div>
                </div>
              )}

              {activity.type === 'achievement' && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-3 h-3 text-yellow-400" />
                      <span className="text-white font-bold text-sm">{activity.user}</span>
                      <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold">{activity.rarity}</span>
                    </div>
                    <div className="text-slate-400 text-xs">{activity.time}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-1">{activity.game.title}</div>
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
                  <div className="text-slate-400 text-xs mb-2">{activity.game.title}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 text-xs">{activity.participants} participants</span>
                    <span className="text-green-400 font-bold text-xs">{activity.prize} prize</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Top Players */}
      <div className="border-t border-slate-700 pt-4">
        <div className="flex items-center space-x-2 mb-4">
          <Trophy className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 font-bold text-sm">TOP PLAYERS</span>
        </div>

        <div className="space-y-2">
          {topPlayers.map((player, index) => (
            <div key={index} className="flex items-center justify-between bg-slate-900/50 border border-slate-600 p-2">
              <div className="flex items-center space-x-3">
                <span className="text-yellow-400 font-bold text-sm">{player.rank}</span>
                <div>
                  <div className="text-white font-bold text-sm">{player.name}</div>
                  <div className="text-slate-400 text-xs">{player.game.title}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-sm">{player.score}</div>
                <div className="text-green-400 text-xs">{player.streak}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-black transition-colors mt-4">
          JOIN COMMUNITY
        </button>
      </div>
    </div>
  );
};

export default CommunityPanel;
