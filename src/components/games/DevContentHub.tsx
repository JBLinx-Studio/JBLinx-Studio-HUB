
import React, { useState } from 'react';
import { 
  Code, 
  FileText, 
  Calendar, 
  TrendingUp, 
  MessageSquare, 
  Play,
  Download,
  Star,
  Clock,
  Zap,
  Users,
  Eye,
  BookOpen,
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface DevContentHubProps {
  games: Array<{
    id: number;
    title: string;
    category: string;
  }>;
}

const DevContentHub: React.FC<DevContentHubProps> = ({ games }) => {
  const [activeTab, setActiveTab] = useState('updates');

  const recentUpdates = [
    {
      id: 1,
      game: games[0],
      version: '3.2.1',
      title: 'Weapon Balance & New Map Update',
      description: 'Major weapon rebalancing with the new competitive map "Urban District". Enhanced anti-cheat system and improved matchmaking algorithms.',
      date: '2 days ago',
      type: 'Major Update',
      downloads: '15.2K',
      rating: 4.9,
      features: ['New Map: Urban District', 'Weapon Rebalancing', 'Anti-Cheat v3.0', 'UI Improvements'],
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      game: games[1],
      version: '2.4.3',
      title: 'Empire Builder AI Revolution',
      description: 'Revolutionary AI system with advanced pathfinding and strategic decision making. New civilizations and diplomatic options added.',
      date: '1 week ago',
      type: 'Content Update',
      downloads: '8.7K',
      rating: 4.8,
      features: ['Advanced AI', '3 New Civilizations', 'Diplomacy System', 'Performance Boost'],
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      game: games[2],
      version: '0.8.5',
      title: 'Survival Horror Overhaul',
      description: 'Complete overhaul of survival mechanics with new horror elements, crafting system, and dynamic weather effects.',
      date: '3 days ago',
      type: 'Early Access',
      downloads: '12.1K',
      rating: 4.7,
      features: ['New Crafting System', 'Dynamic Weather', 'Horror Elements', 'Co-op Improvements'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop'
    }
  ];

  const devBlogs = [
    {
      id: 1,
      title: 'Building Realistic Physics: The Science Behind Combat',
      author: 'Lead Physics Engineer',
      game: games[0],
      category: 'Technical Deep Dive',
      readTime: '8 min read',
      date: '3 days ago',
      views: '2.4K',
      comments: 47,
      excerpt: 'Dive deep into our custom physics engine and discover how we achieved realistic ballistics, weapon recoil, and destructible environments.',
      tags: ['Physics', 'C++', 'Game Engine', 'Technical'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'AI Behavior Trees: Creating Intelligent Opponents',
      author: 'AI Systems Director',
      game: games[1],
      category: 'AI Development',
      readTime: '12 min read',
      date: '1 week ago',
      views: '1.8K',
      comments: 32,
      excerpt: 'Learn how we designed sophisticated AI opponents that adapt to player strategies using advanced behavior trees and machine learning.',
      tags: ['AI', 'Behavior Trees', 'Machine Learning', 'Strategy'],
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Procedural Horror: The Psychology of Fear',
      author: 'Creative Director',
      game: games[2],
      category: 'Game Design',
      readTime: '6 min read',
      date: '2 weeks ago',
      views: '3.1K',
      comments: 68,
      excerpt: 'Exploring the psychology behind effective horror design and how we use procedural generation to create unpredictable scares.',
      tags: ['Horror Design', 'Psychology', 'Procedural Generation'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop'
    }
  ];

  const upcomingContent = [
    {
      title: 'Behind the Scenes: Motion Capture Technology',
      type: 'Video Dev Log',
      date: 'Jan 20, 2025',
      game: games[0],
      description: 'Exclusive look at our motion capture studio and how we bring realistic character animations to life.'
    },
    {
      title: 'Advanced Pathfinding Algorithms Explained',
      type: 'Technical Article',
      date: 'Jan 25, 2025',
      game: games[1],
      description: 'Deep dive into A* pathfinding and how we optimized it for massive RTS battles.'
    },
    {
      title: 'Sound Design Philosophy: Creating Immersive Audio',
      type: 'Audio Dev Log',
      date: 'Feb 1, 2025',
      game: games[2],
      description: 'How spatial audio and procedural sound generation enhance the horror experience.'
    }
  ];

  const tabs = [
    { id: 'updates', name: 'Game Updates', icon: Download, count: recentUpdates.length },
    { id: 'devblogs', name: 'Dev Blogs', icon: BookOpen, count: devBlogs.length },
    { id: 'upcoming', name: 'Coming Soon', icon: Calendar, count: upcomingContent.length }
  ];

  return (
    <div className="bg-slate-800/95 border border-slate-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Code className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-black text-lg font-mono">DEVELOPER CONTENT HUB</span>
        </div>
        <Link to="/blog" className="text-orange-400 hover:text-orange-300 text-sm font-bold flex items-center space-x-1">
          <span>View All Content</span>
          <Eye className="w-3 h-3" />
        </Link>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-slate-900/50 p-1 rounded">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{tab.name}</span>
              <span className="bg-slate-600 text-xs px-1 py-0.5 rounded">{tab.count}</span>
            </button>
          );
        })}
      </div>

      {/* Content Sections */}
      {activeTab === 'updates' && (
        <div className="space-y-4">
          {recentUpdates.map((update) => (
            <div key={update.id} className="bg-slate-900/50 border border-green-400/30 p-4 hover:border-green-400 transition-all duration-300 group">
              <div className="flex gap-4">
                <img 
                  src={update.image} 
                  alt={update.title}
                  className="w-24 h-16 object-cover rounded border border-slate-600 group-hover:border-green-400 transition-colors"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="bg-green-500 text-white px-2 py-1 text-xs font-black">
                        {update.type}
                      </span>
                      <span className="text-green-400 text-sm font-bold">v{update.version}</span>
                    </div>
                    <div className="text-slate-400 text-xs">{update.date}</div>
                  </div>
                  
                  <h4 className="text-white font-bold mb-1">{update.title}</h4>
                  <div className="text-green-400 text-xs mb-2">{update.game.title}</div>
                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">{update.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {update.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs border border-cyan-400/30">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Download className="w-3 h-3" />
                      <span>{update.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-slate-400">
                      <Star className="w-3 h-3 text-yellow-400" />
                      <span>{update.rating}</span>
                    </div>
                    <Link 
                      to={`/blog/update-${update.id}`}
                      className="text-green-400 hover:text-green-300 text-xs font-bold flex items-center space-x-1"
                    >
                      <span>Read Patch Notes</span>
                      <FileText className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'devblogs' && (
        <div className="space-y-4">
          {devBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="block bg-slate-900/50 border border-orange-400/30 p-4 hover:border-orange-400 transition-all duration-300 group"
            >
              <div className="flex gap-4">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-24 h-16 object-cover rounded border border-slate-600 group-hover:border-orange-400 transition-colors"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-orange-500 text-white px-2 py-1 text-xs font-black">
                      {blog.category}
                    </span>
                    <div className="text-slate-400 text-xs">{blog.date}</div>
                  </div>
                  
                  <h4 className="text-white font-bold mb-1 group-hover:text-orange-300 transition-colors">
                    {blog.title}
                  </h4>
                  <div className="text-orange-400 text-xs mb-2">
                    {blog.game.title} • By {blog.author}
                  </div>
                  <p className="text-slate-300 text-sm mb-3 line-clamp-2">{blog.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {blog.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="bg-slate-700 text-orange-400 px-2 py-1 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4 text-xs text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{blog.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageSquare className="w-3 h-3" />
                      <span>{blog.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {activeTab === 'upcoming' && (
        <div className="space-y-3">
          {upcomingContent.map((content, index) => (
            <div key={index} className="bg-slate-900/50 border border-cyan-400/30 p-4 hover:border-cyan-400 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span className="bg-cyan-500 text-black px-2 py-1 text-xs font-black">
                    {content.type}
                  </span>
                </div>
                <div className="text-cyan-400 text-xs font-bold">{content.date}</div>
              </div>
              
              <h4 className="text-white font-bold mb-1">{content.title}</h4>
              <div className="text-cyan-400 text-xs mb-2">{content.game.title}</div>
              <p className="text-slate-300 text-sm">{content.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Call to Action */}
      <div className="border-t border-slate-700 pt-6 mt-6">
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/blog"
            className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-3 font-black transition-all duration-300 text-center flex items-center justify-center space-x-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>READ DEV BLOG</span>
          </Link>
          <Link
            to="/contact"
            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 font-black transition-all duration-300 text-center flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>ASK DEVELOPERS</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DevContentHub;
