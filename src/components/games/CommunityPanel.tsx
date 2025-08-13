
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
  Settings
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
  const [activeTab, setActiveTab] = useState('feed');
  const [newMessage, setNewMessage] = useState('');

  const recentActivity = [
    {
      id: 1,
      type: 'review',
      user: 'TacticalPro99',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      game: game,
      rating: 5,
      comment: 'The new weapon balance changes are perfect! Combat feels much more strategic now.',
      time: '2 hours ago',
      helpful: 24,
      verified: true,
      badge: 'elite',
      level: 47
    },
    {
      id: 2,
      type: 'achievement',
      user: 'RTSMaster',
      avatar: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=40&h=40&fit=crop&crop=face',
      game: game,
      achievement: 'Empire Builder',
      description: 'Built 100 cities across different campaigns',
      time: '4 hours ago',
      rarity: 'Legendary',
      badge: 'pro',
      level: 62
    },
    {
      id: 3,
      type: 'discussion',
      user: 'StrategyGuru',
      avatar: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=40&h=40&fit=crop&crop=face',
      topic: 'Best build orders for competitive play?',
      replies: 15,
      time: '6 hours ago',
      badge: 'veteran',
      level: 34
    },
    {
      id: 4,
      type: 'tournament',
      event: 'Weekly Championship',
      game: game,
      participants: 2847,
      prize: '$5,000',
      time: 'Starting in 2 days',
      featured: true
    }
  ];

  const topPlayers = [
    { 
      name: 'EliteSoldier', 
      avatar: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=40&h=40&fit=crop&crop=face',
      game: game, 
      rank: '#1', 
      score: '2,847 MMR', 
      streak: '12 wins', 
      badge: 'champion', 
      level: 99,
      region: 'NA'
    },
    { 
      name: 'CommanderX', 
      avatar: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=40&h=40&fit=crop&crop=face',
      game: game, 
      rank: '#2', 
      score: '98% WR', 
      streak: '25 wins', 
      badge: 'master', 
      level: 87,
      region: 'EU'
    },
    { 
      name: 'Survivor', 
      avatar: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=face',
      game: game, 
      rank: '#3', 
      score: '247 days', 
      streak: '15 days', 
      badge: 'legend', 
      level: 76,
      region: 'AS'
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best strategies for the new patch?",
      author: "TacticalMind",
      replies: 23,
      views: 156,
      lastReply: "2 hours ago",
      pinned: true,
      hot: true
    },
    {
      id: 2,
      title: "Looking for team members for ranked",
      author: "TeamPlayer99",
      replies: 8,
      views: 45,
      lastReply: "4 hours ago",
      pinned: false,
      hot: false
    },
    {
      id: 3,
      title: "Bug report: Memory leak in multiplayer",
      author: "BugHunter",
      replies: 12,
      views: 89,
      lastReply: "6 hours ago",
      pinned: false,
      hot: true
    }
  ];

  const communityStats = [
    { label: 'ONLINE NOW', value: '4.2K', icon: Users, color: 'text-green-400', bg: 'bg-green-500/20' },
    { label: 'DAILY POSTS', value: '342', icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { label: 'TOURNAMENTS', value: '15', icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
    { label: 'CLANS ACTIVE', value: '89', icon: Shield, color: 'text-purple-400', bg: 'bg-purple-500/20' }
  ];

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'champion': return <Trophy className="w-3 h-3 text-yellow-400" />;
      case 'master': return <Award className="w-3 h-3 text-purple-400" />;
      case 'legend': return <Shield className="w-3 h-3 text-red-400" />;
      case 'elite': return <Star className="w-3 h-3 text-blue-400" />;
      case 'pro': return <Flame className="w-3 h-3 text-orange-400" />;
      case 'veteran': return <Shield className="w-3 h-3 text-green-400" />;
      default: return <Users className="w-3 h-3 text-slate-400" />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'champion': return 'bg-yellow-500/20 border-yellow-400/30 text-yellow-400';
      case 'master': return 'bg-purple-500/20 border-purple-400/30 text-purple-400';
      case 'legend': return 'bg-red-500/20 border-red-400/30 text-red-400';
      case 'elite': return 'bg-blue-500/20 border-blue-400/30 text-blue-400';
      case 'pro': return 'bg-orange-500/20 border-orange-400/30 text-orange-400';
      case 'veteran': return 'bg-green-500/20 border-green-400/30 text-green-400';
      default: return 'bg-slate-500/20 border-slate-400/30 text-slate-400';
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 border border-slate-700/50 backdrop-blur-sm h-full flex flex-col">
      {/* Enhanced Header */}
      <div className="p-4 border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-3">
          <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <Users className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <span className="text-blue-400 font-black text-sm font-mono tracking-widest block">COMMUNITY HUB</span>
            <div className="text-slate-400 text-xs mt-1">{game.title} Player Community</div>
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-4 gap-2">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className={`${stat.bg} border border-slate-600/30 p-2 text-center transition-all duration-300 hover:scale-105 backdrop-blur-sm`}>
                <IconComponent className={`w-3 h-3 mx-auto mb-1 ${stat.color}`} />
                <div className="text-xs font-black text-white">{stat.value}</div>
                <div className="text-xs text-slate-400 font-bold">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-slate-700/50">
        <div className="flex">
          {[
            { id: 'feed', label: 'LIVE FEED', icon: TrendingUp },
            { id: 'discussions', label: 'DISCUSSIONS', icon: MessageSquare },
            { id: 'leaderboard', label: 'LEADERBOARD', icon: Trophy }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-2 text-xs font-bold font-mono transition-all duration-300 border-b-2 flex items-center justify-center space-x-1 ${
                  activeTab === tab.id
                    ? 'border-blue-400 text-blue-400 bg-blue-500/10'
                    : 'border-transparent text-slate-400 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Live Feed */}
        {activeTab === 'feed' && (
          <div className="p-4">
            <div className="space-y-3 mb-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="group relative bg-slate-800/30 border border-slate-600/50 p-3 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className="relative z-10">
                    {activity.type === 'review' && (
                      <div className="flex items-start space-x-3">
                        <img src={activity.avatar} alt={activity.user} className="w-8 h-8 rounded-full border border-slate-600" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-white font-black text-sm">{activity.user}</span>
                            {activity.verified && (
                              <span className="bg-green-500 text-white px-1 py-0.5 text-xs font-bold rounded">✓</span>
                            )}
                            <span className={`px-2 py-0.5 text-xs font-bold border ${getBadgeColor(activity.badge)} rounded flex items-center space-x-1`}>
                              {getBadgeIcon(activity.badge)}
                              <span>LV{activity.level}</span>
                            </span>
                            <div className="flex items-center">
                              {Array.from({ length: activity.rating }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-300 text-sm mb-2">{activity.comment}</p>
                          <div className="flex items-center justify-between">
                            <div className="text-slate-400 text-xs">{activity.time}</div>
                            <button className="flex items-center space-x-1 text-xs text-slate-400 hover:text-green-400 transition-colors">
                              <ThumbsUp className="w-3 h-3" />
                              <span>{activity.helpful}</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activity.type === 'achievement' && (
                      <div className="flex items-start space-x-3">
                        <img src={activity.avatar} alt={activity.user} className="w-8 h-8 rounded-full border border-slate-600" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <Trophy className="w-3 h-3 text-yellow-400" />
                            <span className="text-white font-black text-sm">{activity.user}</span>
                            <span className={`px-2 py-0.5 text-xs font-bold border ${getBadgeColor(activity.badge)} rounded flex items-center space-x-1`}>
                              {getBadgeIcon(activity.badge)}
                              <span>LV{activity.level}</span>
                            </span>
                            <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded">{activity.rarity}</span>
                          </div>
                          <div className="text-yellow-400 font-black text-sm mb-1">{activity.achievement}</div>
                          <p className="text-slate-300 text-sm mb-2">{activity.description}</p>
                          <div className="text-slate-400 text-xs">{activity.time}</div>
                        </div>
                      </div>
                    )}

                    {activity.type === 'discussion' && (
                      <div className="flex items-start space-x-3">
                        <img src={activity.avatar} alt={activity.user} className="w-8 h-8 rounded-full border border-slate-600" />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <MessageSquare className="w-3 h-3 text-blue-400" />
                            <span className="text-white font-black text-sm">{activity.user}</span>
                            <span className={`px-2 py-0.5 text-xs font-bold border ${getBadgeColor(activity.badge)} rounded flex items-center space-x-1`}>
                              {getBadgeIcon(activity.badge)}
                              <span>LV{activity.level}</span>
                            </span>
                          </div>
                          <div className="text-blue-400 font-bold text-sm mb-1">{activity.topic}</div>
                          <div className="flex items-center justify-between">
                            <div className="text-slate-400 text-xs">{activity.time}</div>
                            <div className="text-slate-400 text-xs">{activity.replies} replies</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activity.type === 'tournament' && (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Trophy className="w-8 h-8 text-purple-400 p-1 bg-purple-500/20 border border-purple-400/30 rounded" />
                          <div>
                            <div className="text-white font-black text-sm">{activity.event}</div>
                            <div className="text-purple-400 text-xs">{activity.participants} participants</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-green-400 font-black text-sm">{activity.prize}</div>
                          <div className="text-slate-400 text-xs">{activity.time}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Post */}
            <div className="bg-slate-800/50 border border-slate-600/50 p-3">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 font-bold text-sm">QUICK POST</span>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Share something with the community..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 bg-slate-700 border border-slate-600 text-white px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Discussions */}
        {activeTab === 'discussions' && (
          <div className="p-4">
            <div className="space-y-3">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-slate-800/50 border border-slate-600/50 p-3 hover:border-purple-400/30 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {discussion.pinned && <Target className="w-3 h-3 text-green-400" />}
                      {discussion.hot && <Flame className="w-3 h-3 text-orange-400" />}
                      <h3 className="text-white font-bold text-sm">{discussion.title}</h3>
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">by {discussion.author}</div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                      <span>{discussion.replies} replies</span>
                      <span>{discussion.views} views</span>
                    </div>
                    <div className="text-xs text-slate-400">Last: {discussion.lastReply}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-3 font-black transition-colors mt-4 flex items-center justify-center space-x-2">
              <Hash className="w-4 h-4" />
              <span>START NEW DISCUSSION</span>
            </button>
          </div>
        )}

        {/* Leaderboard */}
        {activeTab === 'leaderboard' && (
          <div className="p-4">
            <div className="space-y-3 mb-4">
              {topPlayers.map((player, index) => (
                <div key={index} className="group relative flex items-center bg-slate-800/30 border border-slate-600/50 p-3 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  <div className="relative z-10 flex items-center space-x-3 flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400 font-black text-lg min-w-[2rem]">{player.rank}</span>
                      <img src={player.avatar} alt={player.name} className="w-10 h-10 rounded-full border border-slate-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-white font-black text-sm">{player.name}</span>
                        <span className={`px-2 py-1 text-xs font-bold border ${getBadgeColor(player.badge)} rounded flex items-center space-x-1`}>
                          {getBadgeIcon(player.badge)}
                          <span>LV{player.level}</span>
                        </span>
                        <span className="bg-slate-700 text-slate-300 px-2 py-1 text-xs font-mono">{player.region}</span>
                      </div>
                      <div className="text-slate-400 text-xs">{player.game.title}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-black text-sm">{player.score}</div>
                      <div className="text-green-400 text-xs font-bold">{player.streak}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-3 font-black transition-colors flex items-center justify-center space-x-2">
                <Trophy className="w-4 h-4" />
                <span>VIEW FULL RANKS</span>
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 font-black transition-colors flex items-center justify-center space-x-2">
                <UserPlus className="w-4 h-4" />
                <span>JOIN CLAN</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-slate-700/50 bg-slate-900/50">
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-3 font-black transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2">
          <Users className="w-4 h-4" />
          <span>JOIN COMMUNITY DISCORD</span>
        </button>
      </div>
    </div>
  );
};

export default CommunityPanel;
