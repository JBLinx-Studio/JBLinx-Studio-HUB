
import React from 'react';
import { Code, FileText, Users, Lightbulb, Calendar, TrendingUp, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DeveloperInsightsProps {
  games: Array<{
    id: number;
    title: string;
    category: string;
  }>;
}

const DeveloperInsights: React.FC<DeveloperInsightsProps> = ({ games }) => {
  const devBlogs = [
    {
      id: 1,
      title: 'Building Realistic Weapon Physics in Tactical Strike',
      game: games[0],
      category: 'Technical Deep Dive',
      author: 'Lead Physics Developer',
      date: '3 days ago',
      readTime: '8 min read',
      views: '2.4K',
      comments: 47,
      excerpt: 'Exploring our custom physics engine and how we achieved realistic ballistics and weapon behavior.',
      tags: ['Physics', 'C++', 'Game Engine']
    },
    {
      id: 2,
      title: 'AI Behavior Trees in Empire Conquest RTS',
      game: games[1],
      category: 'AI Development',
      author: 'AI Systems Lead',
      date: '1 week ago',
      readTime: '12 min read',
      views: '1.8K',
      comments: 32,
      excerpt: 'How we designed sophisticated AI opponents that adapt to player strategies using behavior trees.',
      tags: ['AI', 'Behavior Trees', 'Strategy']
    },
    {
      id: 3,
      title: 'Procedural Horror: Creating Fear in Last Haven',
      game: games[2],
      category: 'Game Design',
      author: 'Creative Director',
      date: '2 weeks ago',
      readTime: '6 min read',
      views: '3.1K',
      comments: 68,
      excerpt: 'The psychology and technical implementation behind our dynamic horror generation system.',
      tags: ['Horror Design', 'Psychology', 'Procedural']
    },
    {
      id: 4,
      title: 'Cross-Platform Architecture for Stellar Frontier',
      game: games[3],
      category: 'Technical Architecture',
      author: 'Platform Engineer',
      date: '3 weeks ago',
      readTime: '10 min read',
      views: '1.5K',
      comments: 23,
      excerpt: 'Building a unified codebase that runs seamlessly across PC and mobile platforms.',
      tags: ['Cross-Platform', 'Architecture', 'Mobile']
    }
  ];

  const developmentStats = [
    {
      label: 'DEV ARTICLES',
      value: '47',
      icon: FileText,
      color: 'text-orange-400',
      change: '+5 this month'
    },
    {
      label: 'CODE SAMPLES',
      value: '128',
      icon: Code,
      color: 'text-green-400',
      change: '+12 new'
    },
    {
      label: 'COMMUNITY DISCUSSIONS',
      value: '892',
      icon: MessageSquare,
      color: 'text-blue-400',
      change: '+47 active'
    }
  ];

  const upcomingContent = [
    {
      title: 'Behind the Scenes: Motion Capture Session',
      type: 'Video Dev Log',
      date: 'Jan 20, 2025',
      game: games[0]
    },
    {
      title: 'Advanced Pathfinding Algorithms',
      type: 'Technical Article',
      date: 'Jan 25, 2025',
      game: games[1]
    },
    {
      title: 'Sound Design Philosophy',
      type: 'Audio Dev Log',
      date: 'Feb 1, 2025',
      game: games[2]
    }
  ];

  return (
    <div className="bg-slate-800/95 border border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Code className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-black text-lg font-mono">DEVELOPER INSIGHTS</span>
        </div>
        <Link to="/blog" className="text-orange-400 hover:text-orange-300 text-sm font-bold">
          View All Articles →
        </Link>
      </div>

      {/* Development Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {developmentStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-slate-900/50 border border-slate-600 p-4 text-center">
              <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
              <div className="text-lg font-black text-white">{stat.value}</div>
              <div className="text-slate-400 text-xs mb-1">{stat.label}</div>
              <div className="text-green-400 text-xs">{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Recent Dev Blogs */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <FileText className="w-4 h-4 text-purple-400" />
          <span className="text-purple-400 font-bold text-sm">RECENT ARTICLES</span>
        </div>

        <div className="space-y-4">
          {devBlogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="block bg-slate-900/50 border border-orange-400/30 p-4 hover:border-orange-400 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-orange-500 text-black px-2 py-1 text-xs font-bold">
                      {blog.category}
                    </span>
                    <span className="text-slate-400 text-xs">{blog.game.title}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-orange-300 transition-colors">
                    {blog.title}
                  </h3>
                  <div className="text-slate-400 text-xs mb-2">
                    By {blog.author} • {blog.date}
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 text-xs mb-3 line-clamp-2">{blog.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {blog.tags.map((tag, index) => (
                    <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-xs text-slate-400">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
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
      <div className="border-t border-slate-700 pt-6">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 font-bold text-sm">UPCOMING CONTENT</span>
        </div>

        <div className="space-y-3">
          {upcomingContent.map((content, index) => (
            <div key={index} className="bg-slate-900/50 border border-cyan-400/30 p-3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-white font-bold text-sm">{content.title}</div>
                  <div className="text-cyan-400 text-xs">{content.game.title}</div>
                </div>
                <span className="bg-cyan-500 text-black px-2 py-1 text-xs font-bold">
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

        <div className="grid grid-cols-2 gap-2 mt-6">
          <Link
            to="/blog"
            className="bg-orange-500 hover:bg-orange-600 text-black px-4 py-2 font-black transition-colors text-center"
          >
            READ DEV BLOG
          </Link>
          <Link
            to="/contact"
            className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 font-black transition-colors text-center"
          >
            DEVELOPER Q&A
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperInsights;
