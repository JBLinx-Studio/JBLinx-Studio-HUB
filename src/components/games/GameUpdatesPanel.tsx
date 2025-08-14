
import React from 'react';
import { Calendar, Download, Zap, Package, TrendingUp, Star, MessageSquare, Code, Bug, Sparkles } from 'lucide-react';

interface GameUpdatesPanelProps {
  game: {
    id: number;
    title: string;
    dlc: Array<{ name: string; price: number; status: string }>;
  };
}

const GameUpdatesPanel: React.FC<GameUpdatesPanelProps> = ({ game }) => {
  const gameUpdates = [
    {
      version: '3.2.1',
      date: '2 days ago',
      title: 'Balance & Performance',
      description: `Latest improvements for ${game.title} including performance optimizations and gameplay balance.`,
      downloads: '15.2K',
      rating: '4.9',
      type: 'patch',
      size: '124 MB'
    },
    {
      version: '3.1.8',
      date: '1 week ago', 
      title: 'Bug Fixes & QoL',
      description: 'Critical bug fixes and quality of life improvements based on community feedback.',
      downloads: '12.8K',
      rating: '4.8',
      type: 'hotfix',
      size: '89 MB'
    },
    {
      version: '3.1.5',
      date: '2 weeks ago',
      title: 'New Content Drop',
      description: 'Major content update with new features and expanded gameplay mechanics.',
      downloads: '18.5K',
      rating: '4.9',
      type: 'content',
      size: '2.1 GB'
    }
  ];

  const devBlogs = [
    {
      id: 1,
      title: `Behind the Scenes: ${game.title} Development`,
      date: '3 days ago',
      excerpt: 'Deep dive into our development process and upcoming features.',
      author: 'Dev Team',
      readTime: '5 min read',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Community Feedback Integration',
      date: '1 week ago', 
      excerpt: 'How we\'re incorporating player suggestions into the next update.',
      author: 'Community Manager',
      readTime: '3 min read',
      category: 'Community'
    }
  ];

  const getUpdateTypeIcon = (type: string) => {
    switch (type) {
      case 'patch': return <Zap className="w-4 h-4" />;
      case 'hotfix': return <Bug className="w-4 h-4" />;
      case 'content': return <Sparkles className="w-4 h-4" />;
      default: return <Code className="w-4 h-4" />;
    }
  };

  const getUpdateTypeColor = (type: string) => {
    switch (type) {
      case 'patch': return 'text-green-400 border-green-400/30 bg-green-500/10';
      case 'hotfix': return 'text-orange-400 border-orange-400/30 bg-orange-500/10';
      case 'content': return 'text-purple-400 border-purple-400/30 bg-purple-500/10';
      default: return 'text-blue-400 border-blue-400/30 bg-blue-500/10';
    }
  };

  return (
    <div className="h-full bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 border-r border-slate-700/50 flex flex-col backdrop-blur-sm">
      {/* Enhanced Header */}
      <div className="p-4 border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-green-500/20 rounded-lg border border-green-400/30">
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <span className="text-green-400 font-black text-sm font-mono tracking-widest block">UPDATES & DEV LOGS</span>
            <div className="text-slate-400 text-xs mt-1">{game.title}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto game-scroll">
        {/* Enhanced Recent Updates */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2 mb-4">
            <Download className="w-4 h-4 text-green-400" />
            <span className="text-white font-black text-sm">RECENT UPDATES</span>
          </div>
          <div className="space-y-3">
            {gameUpdates.slice(0, 3).map((update, index) => (
              <div key={index} className={`group relative p-4 border cursor-pointer transition-all duration-300 overflow-hidden ${getUpdateTypeColor(update.type)} hover:scale-[1.02] hover:shadow-lg`}>
                {/* Background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getUpdateTypeIcon(update.type)}
                      <span className="text-white font-black text-sm">v{update.version}</span>
                      <span className="bg-slate-700/50 text-slate-300 px-2 py-0.5 text-xs font-bold uppercase">
                        {update.type}
                      </span>
                    </div>
                    <div className="text-green-400 text-xs font-bold">{update.date}</div>
                  </div>
                  
                  <div className="text-white text-sm font-bold mb-2">{update.title}</div>
                  <p className="text-slate-300 text-xs mb-3 line-clamp-2">{update.description}</p>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="flex items-center space-x-1 text-slate-400">
                      <Download className="w-3 h-3" />
                      <span>{update.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-400">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{update.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-400">
                      <Package className="w-3 h-3" />
                      <span>{update.size}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced DLC Content */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2 mb-4">
            <Package className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-black text-sm">DLC & EXPANSIONS</span>
          </div>
          <div className="space-y-3">
            {game.dlc.map((dlc, index) => (
              <div key={index} className="group relative p-4 bg-slate-800/30 border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-white font-black text-sm">{dlc.name}</div>
                    <div className="text-yellow-400 font-black text-sm">${dlc.price}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 text-xs font-black ${
                      dlc.status === 'available' ? 'bg-green-500 text-white' :
                      dlc.status === 'preorder' ? 'bg-blue-500 text-white' :
                      'bg-yellow-500 text-black'
                    } shadow-lg`}>
                      {dlc.status.toUpperCase()}
                    </span>
                    {dlc.status === 'available' && (
                      <button className="text-yellow-400 text-xs hover:text-yellow-300 transition-colors">
                        VIEW DETAILS →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Dev Blogs */}
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span className="text-white font-black text-sm">DEVELOPER BLOGS</span>
          </div>
          <div className="space-y-3">
            {devBlogs.map((blog) => (
              <div key={blog.id} className="group relative p-4 bg-slate-800/30 border border-blue-400/30 hover:border-blue-400 transition-all duration-300 cursor-pointer overflow-hidden hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-blue-500/20 border border-blue-400/30 text-blue-400 px-2 py-1 text-xs font-bold">
                      {blog.category}
                    </span>
                    <div className="text-slate-400 text-xs">{blog.date}</div>
                  </div>
                  <div className="text-white font-black text-sm mb-2 line-clamp-2">{blog.title}</div>
                  <p className="text-slate-300 text-xs mb-3 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-slate-400 text-xs">{blog.author}</div>
                    <div className="text-blue-400 text-xs font-bold">{blog.readTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400 text-blue-400 hover:text-blue-300 px-4 py-2 font-black transition-all duration-300 hover:scale-105">
            VIEW ALL UPDATES
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameUpdatesPanel;
