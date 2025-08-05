
import React from 'react';
import { Code, FileText, Users, Lightbulb, Calendar, TrendingUp, MessageSquare, Bookmark, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DeveloperInsightsProps {
  game: {
    id: number;
    title: string;
    category: string;
  };
}

const DeveloperInsights: React.FC<DeveloperInsightsProps> = ({ game }) => {
  // Generate game-specific developer content
  const getGameDevBlogs = (gameId: number, gameTitle: string, category: string) => [
    {
      id: 1,
      title: `Building ${gameTitle}: Technical Deep Dive`,
      category: 'Technical Development',
      author: 'Lead Developer',
      date: '3 days ago',
      readTime: '8 min read',
      views: '2.4K',
      comments: 47,
      excerpt: `Exploring the technical challenges and solutions behind ${gameTitle}'s core systems and architecture.`,
      tags: [category.toUpperCase(), 'Development', 'Engineering']
    },
    {
      id: 2,
      title: `${gameTitle} Design Philosophy`,
      category: 'Game Design',
      author: 'Creative Director',
      date: '1 week ago',
      readTime: '12 min read',
      views: '1.8K',
      comments: 32,
      excerpt: `How we approached the core design principles and player experience in ${gameTitle}.`,
      tags: ['Design', 'UX', 'Player Experience']
    },
    {
      id: 3,
      title: `Community-Driven Development in ${gameTitle}`,
      category: 'Community',
      author: 'Community Manager',
      date: '2 weeks ago',
      readTime: '6 min read',
      views: '3.1K',
      comments: 68,
      excerpt: `How player feedback shapes the ongoing development and evolution of ${gameTitle}.`,
      tags: ['Community', 'Feedback', 'Development']
    },
    {
      id: 4,
      title: `Performance Optimization for ${gameTitle}`,
      category: 'Technical',
      author: 'Performance Engineer',
      date: '3 weeks ago',
      readTime: '10 min read',
      views: '1.5K',
      comments: 23,
      excerpt: `Deep dive into the performance optimizations that keep ${gameTitle} running smoothly.`,
      tags: ['Performance', 'Optimization', 'Technical']
    }
  ];

  const devBlogs = getGameDevBlogs(game.id, game.title, game.category);

  const developmentStats = [
    {
      label: 'DEV ARTICLES',
      value: '12',
      icon: FileText,
      color: 'text-orange-400',
      change: '+3 this month'
    },
    {
      label: 'CODE INSIGHTS',
      value: '28',
      icon: Code,
      color: 'text-green-400',
      change: '+7 new'
    },
    {
      label: 'DEV DISCUSSIONS',
      value: '156',
      icon: MessageSquare,
      color: 'text-blue-400',
      change: '+12 active'
    }
  ];

  const upcomingContent = [
    {
      title: `Behind the Scenes: ${game.title} Development`,
      type: 'Video Dev Log',
      date: 'Jan 20, 2025',
      description: 'Exclusive look at our development process and team insights'
    },
    {
      title: `${game.title} Architecture Breakdown`,
      type: 'Technical Article',
      date: 'Jan 25, 2025',
      description: 'In-depth technical analysis of our game systems'
    },
    {
      title: `Sound Design in ${game.title}`,
      type: 'Audio Dev Log',
      date: 'Feb 1, 2025',
      description: 'How we create immersive audio experiences'
    }
  ];

  return (
    <div className="bg-slate-800/95 border border-slate-700 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Code className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-black font-mono">DEVELOPER INSIGHTS</span>
          </div>
          <Link to="/blog" className="text-orange-400 hover:text-orange-300 text-xs font-bold">
            View All →
          </Link>
        </div>
        <div className="text-slate-400 text-xs">
          {game.title} Development Blog
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4 space-y-6">
          {/* Development Stats */}
          <div className="grid grid-cols-3 gap-3">
            {developmentStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-slate-900/50 border border-slate-600 p-3 text-center">
                  <IconComponent className={`w-4 h-4 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-sm font-black text-white">{stat.value}</div>
                  <div className="text-slate-400 text-xs mb-1">{stat.label}</div>
                  <div className="text-green-400 text-xs">{stat.change}</div>
                </div>
              );
            })}
          </div>

          {/* Recent Dev Blogs */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-bold text-sm">RECENT ARTICLES</span>
            </div>

            <div className="space-y-3">
              {devBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.id}`}
                  className="block bg-slate-900/50 border border-orange-400/30 p-4 hover:border-orange-400 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-orange-500 text-black px-2 py-1 text-xs font-bold rounded">
                          {blog.category}
                        </span>
                        <span className="text-slate-400 text-xs">{game.title}</span>
                      </div>
                      <h3 className="text-white font-bold text-sm mb-1 group-hover:text-orange-300 transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <div className="text-slate-400 text-xs mb-2">
                        By {blog.author} • {blog.date}
                      </div>
                    </div>
                    <Bookmark className="w-4 h-4 text-slate-500 hover:text-orange-400 transition-colors" />
                  </div>
                  
                  <p className="text-slate-300 text-xs mb-3 line-clamp-2">{blog.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-3 text-xs text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{blog.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>{blog.comments}</span>
                      </div>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Upcoming Content */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-sm">UPCOMING CONTENT</span>
            </div>

            <div className="space-y-3">
              {upcomingContent.map((content, index) => (
                <div key={index} className="bg-slate-900/50 border border-cyan-400/30 p-3">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="text-white font-bold text-sm">{content.title}</div>
                      <p className="text-slate-400 text-xs mt-1">{content.description}</p>
                    </div>
                    <span className="bg-cyan-500 text-black px-2 py-1 text-xs font-bold rounded ml-3">
                      {content.type}
                    </span>
                  </div>
                  <div className="text-slate-400 text-xs flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{content.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Highlights */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm">DEV HIGHLIGHTS</span>
            </div>

            <div className="bg-slate-900/50 border border-yellow-400/30 p-4">
              <h4 className="text-white font-bold text-sm mb-2">This Month's Focus</h4>
              <ul className="text-slate-300 text-xs space-y-1">
                <li className="flex items-start space-x-1">
                  <span className="text-yellow-400">•</span>
                  <span>Performance optimization for {game.title}</span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-yellow-400">•</span>
                  <span>Community feedback integration</span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-yellow-400">•</span>
                  <span>Next major update planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="grid grid-cols-2 gap-2">
          <Link
            to="/blog"
            className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 font-black transition-colors text-center text-xs"
          >
            READ DEV BLOG
          </Link>
          <Link
            to="/contact"
            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 font-black transition-colors text-center text-xs"
          >
            ASK DEVELOPERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInsights;
