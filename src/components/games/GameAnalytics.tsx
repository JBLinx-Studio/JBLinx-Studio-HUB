
import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Download, 
  Star, 
  Eye, 
  Heart, 
  MessageSquare,
  Calendar,
  Trophy,
  Target,
  Zap,
  Activity
} from 'lucide-react';

interface GameAnalyticsProps {
  analytics: {
    totalPlayers: string;
    activeNow: string;
    monthlyGrowth: string;
    totalDownloads: string;
    averageRating: string;
    totalReviews: string;
    streamingViews: string;
    communitySize: string;
    revenue: string;
    conversionRate: string;
  };
}

const GameAnalytics: React.FC<GameAnalyticsProps> = ({ analytics }) => {
  const metrics = [
    { 
      label: "ACTIVE PLAYERS", 
      value: analytics.activeNow, 
      change: "+12.5%", 
      icon: Users, 
      color: "text-green-400",
      trend: "up"
    },
    { 
      label: "TOTAL DOWNLOADS", 
      value: analytics.totalDownloads, 
      change: "+25.3%", 
      icon: Download, 
      color: "text-blue-400",
      trend: "up"
    },
    { 
      label: "AVERAGE RATING", 
      value: analytics.averageRating + "★", 
      change: "+0.2", 
      icon: Star, 
      color: "text-yellow-400",
      trend: "up"
    },
    { 
      label: "MONTHLY REVENUE", 
      value: analytics.revenue, 
      change: "+18.7%", 
      icon: Trophy, 
      color: "text-purple-400",
      trend: "up"
    },
    { 
      label: "STREAMING VIEWS", 
      value: analytics.streamingViews, 
      change: "+45.2%", 
      icon: Eye, 
      color: "text-cyan-400",
      trend: "up"
    },
    { 
      label: "CONVERSION RATE", 
      value: analytics.conversionRate, 
      change: "+3.1%", 
      icon: Target, 
      color: "text-orange-400",
      trend: "up"
    }
  ];

  return (
    <div className="bg-slate-800/95 border border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-green-400" />
          <span className="text-green-400 font-black text-lg font-mono">LIVE ANALYTICS</span>
        </div>
        <div className="flex items-center space-x-2 text-green-400">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-black">REAL-TIME DATA</span>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <div key={index} className="bg-slate-900/50 border border-slate-600/50 p-4 hover:border-purple-400/30 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <IconComponent className={`w-4 h-4 ${metric.color}`} />
                <div className={`text-xs font-black ${
                  metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                } flex items-center space-x-1`}>
                  <TrendingUp className="w-3 h-3" />
                  <span>{metric.change}</span>
                </div>
              </div>
              <div className="text-2xl font-black text-white font-mono mb-1">{metric.value}</div>
              <div className="text-slate-400 text-xs font-bold">{metric.label}</div>
            </div>
          );
        })}
      </div>

      {/* Performance Insights */}
      <div className="bg-slate-900/30 border border-purple-400/20 p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Zap className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 font-black text-sm font-mono">PERFORMANCE INSIGHTS</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-white font-bold mb-1">Peak Hours: 7-10 PM EST</div>
            <div className="text-slate-400">Average session: 45 minutes</div>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Top Platform: PC (68%)</div>
            <div className="text-slate-400">Mobile growing +23% monthly</div>
          </div>
          <div>
            <div className="text-white font-bold mb-1">User Retention: 78%</div>
            <div className="text-slate-400">7-day: 65%, 30-day: 42%</div>
          </div>
          <div>
            <div className="text-white font-bold mb-1">Community Growth</div>
            <div className="text-slate-400">+1.2k followers this week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameAnalytics;
