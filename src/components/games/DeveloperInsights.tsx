
import React, { useState } from 'react';
import { 
  Code, 
  FileText, 
  Users, 
  Lightbulb, 
  Calendar, 
  TrendingUp, 
  MessageSquare,
  Video,
  Play,
  Clock,
  Eye,
  ThumbsUp,
  Share2,
  BookOpen,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

interface DeveloperInsightsProps {
  game: {
    id: number;
    title: string;
    blogPosts: number[];
    devVideos: Array<{
      title: string;
      url: string;
      duration: string;
      views: string;
      publishDate: string;
    }>;
  };
}

const DeveloperInsights: React.FC<DeveloperInsightsProps> = ({ game }) => {
  const [activeTab, setActiveTab] = useState('videos');

  // Get related blog posts for this game
  const relatedPosts = blogPosts.filter(post => game.blogPosts.includes(post.id));

  const developmentStats = [
    {
      label: 'DEV VIDEOS',
      value: game.devVideos.length.toString(),
      icon: Video,
      color: 'text-purple-400',
      change: '+2 this month'
    },
    {
      label: 'BLOG ARTICLES',
      value: relatedPosts.length.toString(),
      icon: FileText,
      color: 'text-cyan-400',
      change: '+1 this week'
    },
    {
      label: 'CODE SAMPLES',
      value: '23',
      icon: Code,
      color: 'text-pink-400',
      change: '+5 new'
    },
    {
      label: 'DISCUSSIONS',
      value: '156',
      icon: MessageSquare,
      color: 'text-green-400',
      change: '+12 active'
    }
  ];

  const upcomingContent = [
    {
      title: 'Behind the Scenes: Level Design Process',
      type: 'Video Dev Log',
      date: 'Jan 25, 2025',
      category: 'Game Design'
    },
    {
      title: 'Advanced AI Behavior Implementation',
      type: 'Technical Article',
      date: 'Feb 1, 2025',
      category: 'Programming'
    },
    {
      title: 'Community Feedback Integration',
      type: 'Dev Blog',
      date: 'Feb 8, 2025',
      category: 'Community'
    }
  ];

  return (
    <div className="p-6">
      {/* Developer Stats Header */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {developmentStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-zinc-900/50 border border-zinc-700/50 p-4 text-center hover:border-zinc-600 transition-colors">
              <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
              <div className="text-lg font-black text-white font-mono">{stat.value}</div>
              <div className="text-zinc-400 text-xs mb-1 font-mono">{stat.label}</div>
              <div className="text-green-400 text-xs font-mono">{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-zinc-700/50 mb-6">
        {[
          { id: 'videos', label: 'DEV VIDEOS', icon: Video },
          { id: 'articles', label: 'BLOG ARTICLES', icon: FileText },
          { id: 'upcoming', label: 'UPCOMING', icon: Calendar }
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-bold transition-colors ${
                activeTab === tab.id
                  ? 'text-purple-400 border-b-2 border-purple-400'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span className="font-mono">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTab === 'videos' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Play className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-black text-lg font-mono">DEVELOPMENT VIDEOS</span>
            </div>
            <Link to="/blog?category=devlogs" className="text-purple-400 hover:text-purple-300 text-sm font-bold font-mono">
              VIEW ALL VIDEOS →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {game.devVideos.map((video, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-700/50 overflow-hidden hover:border-zinc-600 transition-colors group">
                {/* Video Thumbnail */}
                <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/90 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-white font-bold text-sm">{game.title}</div>
                      <div className="text-purple-400 text-xs">Development Video</div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-xs font-mono">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 space-y-3">
                  <h3 className="text-white font-bold text-sm leading-tight group-hover:text-purple-300 transition-colors">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{video.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{video.publishDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 text-xs font-bold font-mono transition-colors">
                      WATCH NOW
                    </button>
                    <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-2 text-xs font-bold transition-colors">
                      <Share2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'articles' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-black text-lg font-mono">DEVELOPMENT ARTICLES</span>
            </div>
            <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 text-sm font-bold font-mono">
              READ ALL ARTICLES →
            </Link>
          </div>

          <div className="space-y-4">
            {relatedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block bg-zinc-900/50 border border-zinc-700/50 p-4 hover:border-zinc-600 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-zinc-700 border border-zinc-600 text-white px-2 py-1 text-xs font-bold font-mono">
                        {post.type}
                      </span>
                      <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-2 py-1 text-xs font-bold font-mono">
                        {post.category.toUpperCase()}
                      </span>
                      {post.difficulty && (
                        <span className="text-zinc-400 text-xs font-mono">
                          {post.difficulty}
                        </span>
                      )}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-3 leading-relaxed">{post.excerpt}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="bg-zinc-800 border border-zinc-600 text-zinc-300 px-2 py-1 text-xs font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-zinc-400 font-mono">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{post.downloads}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'upcoming' && (
        <div className="space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <Calendar className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 font-black text-lg font-mono">UPCOMING CONTENT</span>
          </div>

          <div className="space-y-4">
            {upcomingContent.map((content, index) => (
              <div key={index} className="bg-zinc-900/50 border border-zinc-700/50 p-4 hover:border-pink-400/30 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-pink-500/20 border border-pink-500/30 text-pink-400 px-2 py-1 text-xs font-bold font-mono">
                        {content.type}
                      </span>
                      <span className="bg-zinc-700 border border-zinc-600 text-white px-2 py-1 text-xs font-bold font-mono">
                        {content.category}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg">{content.title}</h3>
                  </div>
                  <div className="text-pink-400 text-sm font-mono flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {content.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-zinc-700/50">
            <Link
              to="/blog"
              className="bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-cyan-400/50 text-white px-4 py-3 font-black transition-all duration-300 text-center font-mono text-sm"
            >
              READ DEV BLOG
            </Link>
            <Link
              to="/contact"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-3 font-black transition-all duration-300 text-center font-mono text-sm"
            >
              DEVELOPER Q&A
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeveloperInsights;
