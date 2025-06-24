
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Download, User, Play, Pause, ChevronLeft, ChevronRight, Star, TrendingUp } from 'lucide-react';
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
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-purple-500/5 to-pink-500/10"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-full px-8 py-3 mb-6 backdrop-blur-sm">
            <Star className="w-5 h-5 mr-3 text-yellow-400 fill-current" />
            <span className="text-lg font-semibold text-yellow-300">Featured Content</span>
            <div className="ml-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
              HOT
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Trending <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and highly-rated development resources, handpicked for maximum impact
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-80 lg:h-96 group">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute top-4 left-4 flex gap-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Featured
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                    {currentPost.type}
                  </span>
                </div>
                
                {currentPost.difficulty && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      {currentPost.difficulty}
                    </span>
                  </div>
                )}

                {/* Enhanced Navigation */}
                {featuredPosts.length > 1 && (
                  <>
                    <button
                      onClick={prevPost}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextPost}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Trending Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center bg-gradient-to-r from-green-500/80 to-emerald-500/80 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>Trending</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white hover:text-cyan-300 transition-colors leading-tight">
                      {currentPost.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {currentPost.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {currentPost.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm hover:bg-white/20 transition-colors font-medium border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-400">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <User className="w-5 h-5" />
                        <span className="font-medium">{currentPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>{currentPost.readTime}</span>
                      </div>
                      {currentPost.downloads && (
                        <div className="flex items-center space-x-2 text-cyan-400">
                          <Download className="w-5 h-5" />
                          <span className="font-medium">{currentPost.downloads} downloads</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-8">
                  <Link 
                    to="/blog" 
                    className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    <span className="text-lg">Explore All Resources</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <div className="flex items-center space-x-4">
                    {featuredPosts.length > 1 && (
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-3 rounded-full border border-white/20 hover:border-cyan-400/50 transition-colors backdrop-blur-sm bg-white/5"
                        title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                      >
                        {isAutoPlaying ? (
                          <Pause className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Play className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                    )}
                    
                    <div className="flex space-x-3">
                      {featuredPosts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                          }}
                          className={`h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 w-8' 
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
      </div>
    </section>
  );
};

export default FeaturedBlogCycle;
