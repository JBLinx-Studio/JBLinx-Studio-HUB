
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, BookOpen, Gamepad2, Code, Sparkles, Download, MessageSquare, TrendingUp } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id).slice(0, 6);

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      FileText: BookOpen,
      Code: Code,
      Gamepad2: Gamepad2,
      BookOpen: BookOpen,
      Download: Download,
      Database: Code,
      Sparkles: Sparkles
    };
    return icons[iconName] || BookOpen;
  };

  return (
    <section id="blog" className="relative min-h-screen overflow-hidden bg-zinc-900/85 backdrop-blur-xl py-12">
      {/* Enhanced professional background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-70">
        {/* Main ambient lighting */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/8 to-amber-500/6 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/8 to-teal-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Secondary lighting layers */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/6 to-orange-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
        
        {/* Enhanced premium grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Sophisticated geometric accents */}
        <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-orange-400/40 transform rotate-45 animate-pulse border border-orange-400/30"></div>
        <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse border border-emerald-400/30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-amber-400/30 animate-pulse border border-amber-400/20" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-teal-400/30 transform rotate-12 animate-pulse border border-teal-400/20" style={{animationDelay: '6s'}}></div>

        {/* Premium accent lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <div className="inline-flex items-center bg-zinc-800/80 border border-zinc-700/50 rounded-full px-4 py-2 mb-3 backdrop-blur-sm">
            <Sparkles className="w-3 h-3 mr-2 text-orange-400" />
            <span className="text-xs font-bold text-orange-400 font-mono tracking-wider">LEARNING HUB</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3 font-mono">
            Dev <span className="text-orange-400">Chronicles</span>
          </h2>
          
          <p className="text-sm text-zinc-400 leading-relaxed font-mono">
            Technical insights, development guides, and behind-the-scenes content
          </p>
        </div>

        {/* Compact Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => {
            const IconComponent = getIcon(category.icon);
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-3 py-2 text-xs font-bold font-mono transition-all duration-200 border ${
                  activeCategory === category.id
                    ? 'bg-orange-500/20 border-orange-400/50 text-orange-300' 
                    : 'bg-zinc-800/50 border-zinc-700/50 text-zinc-400 hover:bg-zinc-700/50 hover:border-zinc-600/50'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                <span>{category.name}</span>
                <span className="bg-zinc-700/50 px-1 py-0.5 text-xs">{category.count}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Post - Compact */}
        <div className="bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm overflow-hidden mb-8 hover:border-orange-400/30 transition-all duration-300 group">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-orange-500/90 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold font-mono">
                  FEATURED
                </span>
              </div>
              {featuredPost.difficulty && (
                <div className="absolute top-3 right-3">
                  <span className="bg-zinc-900/80 backdrop-blur-sm text-zinc-300 px-2 py-1 text-xs font-mono border border-zinc-600/50">
                    {featuredPost.difficulty}
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <span className="bg-zinc-700/50 border border-zinc-600/50 text-orange-400 px-2 py-1 text-xs font-bold font-mono">
                  {featuredPost.type}
                </span>
                <span className="text-zinc-500 text-xs font-mono">•</span>
                <span className="text-zinc-400 text-xs font-mono">{featuredPost.category.toUpperCase()}</span>
              </div>
              
              <h3 className="text-xl font-black text-white mb-3 group-hover:text-orange-300 transition-colors font-mono">
                {featuredPost.title}
              </h3>
              
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center space-x-4 mb-4 text-xs text-zinc-500 font-mono">
                <div className="flex items-center space-x-1">
                  <User className="w-3 h-3" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{featuredPost.readTime}</span>
                </div>
                {featuredPost.downloads && (
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{featuredPost.downloads}</span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {featuredPost.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-zinc-700/50 border border-zinc-600/50 text-zinc-300 px-2 py-1 text-xs font-mono">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link 
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center space-x-2 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/50 hover:border-orange-400/70 text-orange-300 px-4 py-2 text-sm font-bold font-mono transition-all duration-200"
              >
                <span>READ MORE</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Posts Grid - Compact */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {regularPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm overflow-hidden hover:border-orange-400/30 transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-zinc-900/80 backdrop-blur-sm text-zinc-300 px-2 py-1 text-xs font-bold font-mono">
                    {post.type}
                  </span>
                </div>
                {post.difficulty && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-zinc-900/80 backdrop-blur-sm text-orange-400 px-2 py-1 text-xs font-mono">
                      {post.difficulty}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-orange-400 text-xs font-bold font-mono">{post.category.toUpperCase()}</span>
                  {post.gameRelated && (
                    <>
                      <span className="text-zinc-500 text-xs">•</span>
                      <Gamepad2 className="w-3 h-3 text-emerald-400" />
                    </>
                  )}
                </div>
                
                <h3 className="text-sm font-black text-white mb-2 group-hover:text-orange-300 transition-colors font-mono line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 text-xs mb-3 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 font-mono">
                  <span>{post.date}</span>
                  <div className="flex items-center space-x-2">
                    <span>{post.readTime}</span>
                    {post.downloads && (
                      <>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{post.downloads}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Compact Tags */}
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-zinc-700/50 text-zinc-400 px-2 py-1 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8">
          <Link 
            to="/blog"
            className="inline-flex items-center space-x-2 bg-zinc-800/50 hover:bg-zinc-700/50 border border-zinc-700/50 hover:border-orange-400/50 text-zinc-300 hover:text-orange-300 px-6 py-3 text-sm font-bold font-mono transition-all duration-200"
          >
            <BookOpen className="w-4 h-4" />
            <span>VIEW ALL CONTENT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
