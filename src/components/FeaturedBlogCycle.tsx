
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Download, User, Play, Pause, ChevronLeft, ChevronRight, Star, Calendar, BookOpen, Eye, Heart, Share2 } from 'lucide-react';
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
    }, 6000);

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
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background Effects with Square Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/8 rounded-3xl blur-3xl transform rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/8 rounded-3xl blur-3xl transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-3xl blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-2xl px-8 py-4 mb-8 backdrop-blur-sm shadow-xl">
            <BookOpen className="w-6 h-6 mr-3 text-cyan-400" />
            <span className="text-lg font-black text-cyan-300 tracking-wide">FEATURED INSIGHTS</span>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-black text-white leading-none">
              LATEST <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">CHRONICLES</span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
              Discover cutting-edge development insights, expert tutorials, and comprehensive resources
            </p>
          </div>
        </div>

        {/* Main Featured Card - Enhanced */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20">
            <div className="grid lg:grid-cols-5">
              {/* Enhanced Image Section */}
              <div className="lg:col-span-2 relative h-80 lg:h-96 group">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Enhanced Badges */}
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-2xl text-sm font-black shadow-xl">
                    ⭐ FEATURED
                  </span>
                  <span className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-2xl text-sm font-bold">
                    {currentPost.type}
                  </span>
                </div>
                
                {currentPost.difficulty && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-purple-500/90 text-white px-4 py-2 rounded-2xl text-sm font-black backdrop-blur-sm">
                      {currentPost.difficulty}
                    </span>
                  </div>
                )}

                {/* Enhanced Action Buttons */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  <button className="p-3 bg-black/60 text-white rounded-2xl hover:bg-black/80 transition-all backdrop-blur-sm hover:scale-110">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-black/60 text-white rounded-2xl hover:bg-black/80 transition-all backdrop-blur-sm hover:scale-110">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-black/60 text-white rounded-2xl hover:bg-black/80 transition-all backdrop-blur-sm hover:scale-110">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Enhanced Navigation */}
                {featuredPosts.length > 1 && (
                  <>
                    <button
                      onClick={prevPost}
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-2xl transition-all duration-200 hover:scale-110 backdrop-blur-sm shadow-xl"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextPost}
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-4 rounded-2xl transition-all duration-200 hover:scale-110 backdrop-blur-sm shadow-xl"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Enhanced Content Section */}
              <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white hover:text-cyan-300 transition-colors leading-tight mb-4">
                      {currentPost.title}
                    </h3>
                    
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-6"></div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                      {currentPost.excerpt}
                    </p>
                  </div>
                  
                  {/* Enhanced Tags */}
                  <div className="flex flex-wrap gap-3">
                    {currentPost.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="bg-white/10 text-cyan-400 px-4 py-2 rounded-xl text-sm font-bold hover:bg-white/20 transition-colors border border-white/20 hover:border-cyan-400/50">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced Meta Info */}
                  <div className="grid grid-cols-2 gap-6 text-gray-400">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/10 rounded-xl">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold">{currentPost.author}</div>
                        <div className="text-sm">Author</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/10 rounded-xl">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold">{currentPost.readTime}</div>
                        <div className="text-sm">Read Time</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/10 rounded-xl">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold">{currentPost.date}</div>
                        <div className="text-sm">Published</div>
                      </div>
                    </div>
                    
                    {currentPost.downloads && (
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-cyan-500/20 rounded-xl">
                          <Download className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-cyan-400 font-bold">{currentPost.downloads}</div>
                          <div className="text-sm">Downloads</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Enhanced Actions */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                  <Link 
                    to="/blog" 
                    className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 font-black text-lg shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <span>EXPLORE ALL</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <div className="flex items-center space-x-4">
                    {/* Enhanced Autoplay control */}
                    {featuredPosts.length > 1 && (
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-3 rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-colors backdrop-blur-sm bg-white/5 hover:bg-white/10"
                        title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                      >
                        {isAutoPlaying ? (
                          <Pause className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Play className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    )}
                    
                    {/* Enhanced Dots indicator */}
                    <div className="flex space-x-3">
                      {featuredPosts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                          }}
                          className={`h-3 rounded-full transition-all duration-500 ${
                            index === currentIndex 
                              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 w-10' 
                              : 'bg-white/30 hover:bg-white/50 w-3'
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

        {/* Enhanced Quick Links */}
        {featuredPosts.length > 1 && (
          <div className="mt-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.filter((_, index) => index !== currentIndex).slice(0, 3).map((post, index) => (
                <div 
                  key={post.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group hover:scale-105 hover:border-cyan-400/50"
                  onClick={() => setCurrentIndex(featuredPosts.findIndex(p => p.id === post.id))}
                >
                  <div className="flex items-center space-x-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-2xl"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold text-base line-clamp-2 group-hover:text-cyan-300 transition-colors mb-2">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-gray-400 text-sm space-x-2">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="font-medium">{post.type}</span>
                      </div>
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
