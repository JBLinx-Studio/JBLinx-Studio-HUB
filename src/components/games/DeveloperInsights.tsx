
import React, { useState } from 'react';
import { 
  Code, 
  FileText, 
  Users, 
  Calendar, 
  TrendingUp, 
  MessageSquare, 
  Video, 
  Clock, 
  Eye, 
  ThumbsUp,
  Play,
  BookOpen,
  Lightbulb,
  Settings,
  ExternalLink,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogData';

// Define proper types for the developer insights
interface Game {
  id: number;
  title: string;
  category: string;
}

interface DeveloperInsightsProps {
  games: Game[];
}

const DeveloperInsights: React.FC<DeveloperInsightsProps> = ({ games }) => {
  const [activeTab, setActiveTab] = useState('videos');

  // Developer videos (mock data)
  const devVideos = [
    {
      id: 1,
      title: "Behind the Scenes: Motion Capture Technology",
      game: games[0],
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop",
      duration: "12:34",
      views: "45.2k",
      likes: "2.1k",
      date: "3 days ago",
      description: "Deep dive into our motion capture studio and how we create realistic character animations.",
      url: "https://youtube.com/watch?v=dev1"
    },
    {
      id: 2,
      title: "AI Development Deep Dive: Behavior Trees",
      game: games[1] || games[0],
      thumbnail: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop",
      duration: "18:45",
      views: "32.7k",
      likes: "1.8k",
      date: "1 week ago",
      description: "How we designed sophisticated AI opponents using advanced behavior tree systems.",
      url: "https://youtube.com/watch?v=dev2"
    },
    {
      id: 3,
      title: "Sound Design Philosophy & Implementation",
      game: games[0],
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      duration: "15:22",
      views: "28.1k",
      likes: "1.5k",
      date: "2 weeks ago",
      description: "Creating immersive audio experiences that enhance gameplay and atmosphere.",
      url: "https://youtube.com/watch?v=dev3"
    }
  ];

  // Filter game-related blog posts
  const gameRelatedPosts = blogPosts.filter(post => post.gameRelated);

  const developmentStats = [
    {
      label: 'DEV VIDEOS',
      value: '24',
      icon: Video,
      color: 'text-red-400',
      change: '+3 this month'
    },
    {
      label: 'BLOG POSTS',
      value: '47',
      icon: FileText,
      color: 'text-purple-400',
      change: '+5 this month'
    },
    {
      label: 'CODE SAMPLES',
      value: '128',
      icon: Code,
      color: 'text-cyan-400',
      change: '+12 new'
    },
    {
      label: 'DISCUSSIONS',
      value: '892',
      icon: MessageSquare,
      color: 'text-pink-400',
      change: '+47 active'
    }
  ];

  const upcomingContent = [
    {
      title: "Procedural Generation Techniques",
      type: "Video Tutorial",
      date: "Jan 20, 2025",
      game: games[0],
      duration: "25 min"
    },
    {
      title: "Advanced Pathfinding Algorithms",
      type: "Technical Article",
      date: "Jan 25, 2025",
      game: games[1] || games[0],
      readTime: "15 min"
    },
    {
      title: "VR Integration Best Practices",
      type: "Dev Log",
      date: "Feb 1, 2025",
      game: games[0],
      readTime: "8 min"
    }
  ];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Lightbulb className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400 font-black text-lg font-mono tracking-wider">DEVELOPER INSIGHTS</span>
        </div>
        <Link to="/blog" className="text-purple-400 hover:text-purple-300 text-sm font-bold font-mono flex items-center space-x-1">
          <span>VIEW ALL</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      {/* Development Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {developmentStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-zinc-900/50 border border-zinc-700/50 p-3 text-center hover:border-zinc-600 transition-colors">
              <IconComponent className={`w-4 h-4 mx-auto mb-2 ${stat.color}`} />
              <div className="text-sm font-black text-white font-mono">{stat.value}</div>
              <div className="text-zinc-400 text-xs mb-1 font-mono">{stat.label}</div>
              <div className="text-green-400 text-xs font-mono">{stat.change}</div>
            </div>
          );
        })}
      </div>

      {/* Content Type Tabs */}
      <div className="flex mb-6 bg-zinc-800/50 border border-zinc-600/50 p-1">
        <button
          onClick={() => setActiveTab('videos')}
          className={`flex-1 px-4 py-2 text-sm font-bold font-mono transition-all duration-300 flex items-center justify-center space-x-2 ${
            activeTab === 'videos'
              ? 'bg-red-500 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Video className="w-3 h-3" />
          <span>DEV VIDEOS</span>
        </button>
        <button
          onClick={() => setActiveTab('blogs')}
          className={`flex-1 px-4 py-2 text-sm font-bold font-mono transition-all duration-300 flex items-center justify-center space-x-2 ${
            activeTab === 'blogs'
              ? 'bg-purple-500 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <BookOpen className="w-3 h-3" />
          <span>DEV BLOGS</span>
        </button>
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`flex-1 px-4 py-2 text-sm font-bold font-mono transition-all duration-300 flex items-center justify-center space-x-2 ${
            activeTab === 'upcoming'
              ? 'bg-cyan-500 text-white'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Calendar className="w-3 h-3" />
          <span>UPCOMING</span>
        </button>
      </div>

      {/* Developer Videos */}
      {activeTab === 'videos' && (
        <div className="space-y-4">
          {devVideos.map((video) => (
            <div key={video.id} className="bg-zinc-900/50 border border-zinc-700/50 p-4 hover:border-red-400/30 transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-32 h-20 object-cover border border-zinc-600 group-hover:border-red-400/50 transition-colors"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/80 text-white px-1 py-0.5 text-xs font-mono">
                    {video.duration}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-white font-bold text-sm group-hover:text-red-300 transition-colors flex-1 mr-4">
                      {video.title}
                    </h3>
                    <div className="text-zinc-400 text-xs font-mono">{video.date}</div>
                  </div>
                  
                  <div className="text-cyan-400 text-xs font-mono mb-2">{video.game.title}</div>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-3">{video.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-zinc-400 font-mono">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{video.views} views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-3 h-3" />
                        <span>{video.likes} likes</span>
                      </div>
                    </div>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 text-xs font-bold transition-colors flex items-center space-x-1"
                    >
                      <Play className="w-3 h-3" />
                      <span>WATCH</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Developer Blogs */}
      {activeTab === 'blogs' && (
        <div className="space-y-3">
          {gameRelatedPosts.slice(0, 5).map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-zinc-900/50 border border-zinc-700/50 p-4 hover:border-purple-400/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-zinc-700 border border-zinc-600 text-white px-2 py-1 text-xs font-bold font-mono">
                      {post.category.toUpperCase()}
                    </span>
                    <span className="text-zinc-400 text-xs font-mono">{post.type}</span>
                    {post.difficulty && (
                      <span className={`px-2 py-1 text-xs font-bold ${
                        post.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                        post.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {post.difficulty}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-bold text-sm mb-1 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-zinc-400 text-xs mb-2 font-mono">
                    By {post.author} • {post.date}
                  </div>
                </div>
              </div>
              
              <p className="text-zinc-300 text-xs mb-3 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-zinc-800 border border-zinc-600 text-zinc-300 px-2 py-1 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{post.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Upcoming Content */}
      {activeTab === 'upcoming' && (
        <div className="space-y-3">
          {upcomingContent.map((content, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-700/50 p-4 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <h3 className="text-white font-bold text-sm">{content.title}</h3>
                  <span className="bg-zinc-700 border border-zinc-600 text-white px-2 py-1 text-xs font-bold font-mono">
                    {content.type.toUpperCase()}
                  </span>
                </div>
                <div className="text-cyan-400 text-xs font-mono">{content.date}</div>
              </div>
              <div className="text-purple-400 text-xs font-mono mb-2">{content.game.title}</div>
              <div className="flex items-center justify-between">
                <div className="text-zinc-400 text-xs flex items-center font-mono">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Scheduled for {content.date}</span>
                </div>
                {content.duration && (
                  <div className="text-zinc-400 text-xs font-mono">~{content.duration}</div>
                )}
                {content.readTime && (
                  <div className="text-zinc-400 text-xs font-mono">~{content.readTime} read</div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-6">
        <Link
          to="/blog"
          className="bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50 text-white px-4 py-3 font-black transition-all duration-300 text-center font-mono text-sm"
        >
          EXPLORE DEV BLOG
        </Link>
        <a
          href="https://youtube.com/@jblinxstudio"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-500 border border-red-500 text-white px-4 py-3 font-black transition-all duration-300 text-center font-mono text-sm"
        >
          SUBSCRIBE CHANNEL
        </a>
      </div>
    </div>
  );
};

export default DeveloperInsights;
