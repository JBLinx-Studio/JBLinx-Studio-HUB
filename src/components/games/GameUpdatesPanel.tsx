
import React from 'react';
import { Calendar, Download, Zap, Package, TrendingUp, Star, MessageSquare } from 'lucide-react';

interface GameUpdatesPanelProps {
  game: {
    id: number;
    title: string;
    dlc: Array<{ name: string; price: number; status: string }>;
  };
}

const GameUpdatesPanel: React.FC<GameUpdatesPanelProps> = ({ game }) => {
  // Mock updates data specific to the selected game
  const gameUpdates = [
    {
      version: '3.2.1',
      date: '2 days ago',
      title: 'Balance & Performance',
      description: `Latest improvements for ${game.title} including performance optimizations and gameplay balance.`,
      downloads: '15.2K',
      rating: '4.9'
    },
    {
      version: '3.1.8',
      date: '1 week ago', 
      title: 'Bug Fixes & QoL',
      description: 'Critical bug fixes and quality of life improvements based on community feedback.',
      downloads: '12.8K',
      rating: '4.8'
    },
    {
      version: '3.1.5',
      date: '2 weeks ago',
      title: 'New Content Drop',
      description: 'Major content update with new features and expanded gameplay mechanics.',
      downloads: '18.5K',
      rating: '4.9'
    }
  ];

  const devBlogs = [
    {
      id: 1,
      title: `Behind the Scenes: ${game.title} Development`,
      date: '3 days ago',
      excerpt: 'Deep dive into our development process and upcoming features.',
      author: 'Dev Team',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Community Feedback Integration',
      date: '1 week ago', 
      excerpt: 'How we\'re incorporating player suggestions into the next update.',
      author: 'Community Manager',
      readTime: '3 min read'
    }
  ];

  return (
    <div className="h-full bg-slate-800/95 border-r border-slate-700 flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-black text-xs font-mono">UPDATES & DEV LOGS</span>
        </div>
        <div className="text-slate-400 text-xs mt-1">{game.title}</div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Recent Updates */}
        <div className="p-3 border-b border-slate-700">
          <div className="text-white font-bold text-xs mb-3">RECENT UPDATES</div>
          <div className="space-y-2">
            {gameUpdates.slice(0, 2).map((update, index) => (
              <div key={index} className="bg-slate-900/50 border border-green-400/30 p-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-white font-bold text-xs">v{update.version}</div>
                  <div className="text-green-400 text-xs">{update.date}</div>
                </div>
                <div className="text-white text-xs font-bold mb-1">{update.title}</div>
                <p className="text-slate-400 text-xs mb-2 line-clamp-2">{update.description}</p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <Download className="w-3 h-3" />
                    <span>{update.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-slate-400">
                    <Star className="w-3 h-3 text-yellow-400" />
                    <span>{update.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DLC Content */}
        <div className="p-3 border-b border-slate-700">
          <div className="text-white font-bold text-xs mb-3">DLC & EXPANSIONS</div>
          <div className="space-y-2">
            {game.dlc.map((dlc, index) => (
              <div key={index} className="bg-slate-900/50 border border-yellow-400/30 p-2">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-white font-bold text-xs">{dlc.name}</div>
                  <div className="text-yellow-400 font-black text-xs">${dlc.price}</div>
                </div>
                <span className={`px-2 py-0.5 text-xs font-bold ${
                  dlc.status === 'available' ? 'bg-green-500 text-white' :
                  dlc.status === 'preorder' ? 'bg-blue-500 text-white' :
                  'bg-yellow-500 text-black'
                }`}>
                  {dlc.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dev Blogs */}
        <div className="p-3">
          <div className="text-white font-bold text-xs mb-3">DEVELOPER BLOGS</div>
          <div className="space-y-2">
            {devBlogs.map((blog) => (
              <div key={blog.id} className="bg-slate-900/50 border border-blue-400/30 p-2 hover:border-blue-400 transition-colors cursor-pointer">
                <div className="text-white font-bold text-xs mb-1 line-clamp-2">{blog.title}</div>
                <p className="text-slate-400 text-xs mb-2 line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-slate-500 text-xs">{blog.author}</div>
                  <div className="text-blue-400 text-xs">{blog.readTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameUpdatesPanel;
