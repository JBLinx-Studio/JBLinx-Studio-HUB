
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Download, User, Play, Pause, ChevronLeft, ChevronRight, Star, Calendar, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const FeaturedBlogCycle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredPosts = blogPosts.filter(post => post.featured);

  useEffect(() => {
    if (!isAutoPlaying || featuredPosts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredPosts.length, isAutoPlaying]);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    setIsAutoPlaying(false);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
    setIsAutoPlaying(false);
  };

  const currentPost = featuredPosts[currentIndex];

  if (!currentPost) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Compact Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
            <BookOpen className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">Latest Insights</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Content</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our latest development insights and resources
          </p>
        </div>

        {/* Main Featured Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 shadow-xl">
            <div className="grid lg:grid-cols-5">
              {/* Image Section */}
              <div className="lg:col-span-2 relative h-64 lg:h-80 group">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Featured
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {currentPost.type}
                  </span>
                </div>
                
                {currentPost.difficulty && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-purple-500/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {currentPost.difficulty}
                    </span>
                  </div>
                )}

                {/* Navigation */}
                {featuredPosts.length > 1 && (
                  <>
                    <button
                      onClick={prevPost}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextPost}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Content Section */}
              <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white hover:text-cyan-300 transition-colors leading-tight mb-3">
                      {currentPost.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {currentPost.excerpt}
                    </p>
                  </div>
                  
                  {/* Tags - Show first 3 */}
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meta Info */}
                  <div className="flex items-center space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{currentPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{currentPost.date}</span>
                    </div>
                    {currentPost.downloads && (
                      <div className="flex items-center space-x-1 text-cyan-400">
                        <Download className="w-4 h-4" />
                        <span>{currentPost.downloads} downloads</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                  <Link 
                    to="/blog" 
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    <span>Explore All</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <div className="flex items-center space-x-3">
                    {/* Autoplay control */}
                    {featuredPosts.length > 1 && (
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-2 rounded-lg border border-white/20 hover:border-cyan-400/50 transition-colors backdrop-blur-sm bg-white/5"
                        title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                      >
                        {isAutoPlaying ? (
                          <Pause className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Play className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    )}
                    
                    {/* Dots indicator */}
                    <div className="flex space-x-2">
                      {featuredPosts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                          }}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 w-6' 
                              : 'bg-white/30 hover:bg-white/50 w-2'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links to Other Featured Posts */}
        {featuredPosts.length > 1 && (
          <div className="mt-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredPosts.filter((_, index) => index !== currentIndex).slice(0, 3).map((post, index) => (
                <div 
                  key={post.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                  onClick={() => setCurrentIndex(featuredPosts.findIndex(p => p.id === post.id))}
                >
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium text-sm line-clamp-1 group-hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-xs">{post.readTime} • {post.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedBlogCycle;
