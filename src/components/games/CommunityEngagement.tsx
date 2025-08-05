
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Users, 
  Heart, 
  Share2, 
  Bell,
  Flame,
  Trophy,
  Calendar,
  ExternalLink,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CommunityEngagementProps {
  recentActivity: Array<{
    type: 'review' | 'stream' | 'achievement' | 'update';
    user: string;
    content: string;
    time: string;
    engagement: number;
  }>;
  upcomingEvents: Array<{
    title: string;
    date: string;
    type: 'stream' | 'tournament' | 'update' | 'beta';
    participants?: string;
  }>;
}

const CommunityEngagement: React.FC<CommunityEngagementProps> = ({ 
  recentActivity, 
  upcomingEvents 
}) => {
  const [activeTab, setActiveTab] = useState<'activity' | 'events'>('activity');

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'review': return MessageSquare;
      case 'stream': return Play;
      case 'achievement': return Trophy;
      case 'update': return Bell;
      default: return MessageSquare;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'review': return 'text-blue-400';
      case 'stream': return 'text-red-400';
      case 'achievement': return 'text-yellow-400';
      case 'update': return 'text-green-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="bg-slate-800/95 border border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-blue-400" />
          <span className="text-blue-400 font-black text-lg font-mono">COMMUNITY HUB</span>
        </div>
        <div className="flex items-center space-x-2 bg-slate-700 border border-slate-600 p-1">
          <button 
            onClick={() => setActiveTab('activity')}
            className={`px-3 py-1 text-xs font-bold transition-colors ${
              activeTab === 'activity' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            LIVE FEED
          </button>
          <button 
            onClick={() => setActiveTab('events')}
            className={`px-3 py-1 text-xs font-bold transition-colors ${
              activeTab === 'events' ? 'bg-blue-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            EVENTS
          </button>
        </div>
      </div>

      {activeTab === 'activity' ? (
        <div className="space-y-3">
          {recentActivity.map((activity, index) => {
            const IconComponent = getActivityIcon(activity.type);
            const iconColor = getActivityColor(activity.type);
            
            return (
              <div key={index} className="bg-slate-900/50 border border-slate-600/50 p-3 hover:border-blue-400/30 transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <IconComponent className={`w-4 h-4 mt-0.5 ${iconColor}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white font-bold text-sm">{activity.user}</span>
                      <span className="text-slate-400 text-xs">{activity.time}</span>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">{activity.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-slate-400">
                      <button className="flex items-center space-x-1 hover:text-red-400 transition-colors">
                        <Heart className="w-3 h-3" />
                        <span>{activity.engagement}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
                        <MessageSquare className="w-3 h-3" />
                        <span>Reply</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-green-400 transition-colors">
                        <Share2 className="w-3 h-3" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-black transition-colors mt-4">
            VIEW FULL COMMUNITY FEED
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-600/50 p-3 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-bold text-sm">{event.title}</span>
                </div>
                <span className={`px-2 py-1 text-xs font-bold ${
                  event.type === 'stream' ? 'bg-red-500 text-white' :
                  event.type === 'tournament' ? 'bg-yellow-500 text-black' :
                  event.type === 'update' ? 'bg-green-500 text-white' :
                  'bg-blue-500 text-white'
                }`}>
                  {event.type.toUpperCase()}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-xs">
                <div className="text-slate-400 flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{event.date}</span>
                </div>
                {event.participants && (
                  <div className="text-slate-400 flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{event.participants} registered</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <Link 
            to="/events" 
            className="w-full bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 font-black transition-colors mt-4 flex items-center justify-center space-x-2"
          >
            <Calendar className="w-4 h-4" />
            <span>VIEW ALL EVENTS</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CommunityEngagement;
