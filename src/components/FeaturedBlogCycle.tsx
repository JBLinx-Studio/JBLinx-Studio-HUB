
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Download, User, Play, Pause, ChevronLeft, ChevronRight, Calendar, BookOpen, Eye, Heart, Share2, Star, Zap, Award, Target, Code2 } from 'lucide-react';
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
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-orange-500/8 to-pink-500/8 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-500/5 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Premium Header - Orthodox-Echoes Inspired */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-slate-800/80 to-slate-900/80 border border-slate-700/50 px-8 py-3 mb-8 backdrop-blur-sm" style={{ borderRadius: '12px' }}>
            <Star className="w-5 h-5 mr-3 text-yellow-400" />
            <span className="text-sm font-black text-yellow-300 tracking-widest font-mono">FEATURED DEVELOPMENT VAULT</span>
            <Zap className="w-5 h-5 ml-3 text-cyan-400" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 leading-tight font-mono mb-6">
            DEV<span className="text-yellow-400">VAULT</span>
          </h2>
          
          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto mb-8"></div>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Curated premium development resources, tutorials, and insights crafted by our engineering team
          </p>
          
          {/* Stats Bar */}
          <div className="flex items-center justify-center space-x-8 mt-8 text-sm">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-slate-400 font-mono">Premium Quality</span>
            </div>
            <div className="w-1 h-4 bg-slate-700"></div>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-cyan-400" />
              <span className="text-slate-400 font-mono">Production Ready</span>
            </div>
            <div className="w-1 h-4 bg-slate-700"></div>
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span className="text-slate-400 font-mono">Expert Level</span>
            </div>
          </div>
        </div>

        {/* Main Featured Card - Orthodox-Echoes Style */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-700 overflow-hidden backdrop-blur-sm" style={{ borderRadius: '16px' }}>
            <div className="grid lg:grid-cols-5">
              {/* Image Section */}
              <div className="lg:col-span-2 relative h-96 lg:h-[32rem] group">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                
                {/* Premium Badges */}
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 text-sm font-black font-mono shadow-lg" style={{ borderRadius: '8px' }}>
                    ⭐ FEATURED
                  </span>
                  <span className="bg-slate-900/90 text-white px-4 py-2 text-sm font-bold backdrop-blur-sm border border-slate-700/50 font-mono" style={{ borderRadius: '8px' }}>
                    {currentPost.type}
                  </span>
                </div>
                
                {currentPost.difficulty && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 text-sm font-black font-mono shadow-lg" style={{ borderRadius: '8px' }}>
                      {currentPost.difficulty}
                    </span>
                  </div>
                )}

                {/* Interactive Overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="flex gap-4">
                    <button className="p-4 bg-slate-900/90 text-white hover:bg-slate-800 transition-all backdrop-blur-sm border border-slate-700/50" style={{ borderRadius: '12px' }}>
                      <Heart className="w-6 h-6" />
                    </button>
                    <button className="p-4 bg-slate-900/90 text-white hover:bg-slate-800 transition-all backdrop-blur-sm border border-slate-700/50" style={{ borderRadius: '12px' }}>
                      <Share2 className="w-6 h-6" />
                    </button>
                    <button className="p-4 bg-slate-900/90 text-white hover:bg-slate-800 transition-all backdrop-blur-sm border border-slate-700/50" style={{ borderRadius: '12px' }}>
                      <Eye className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Navigation */}
                {featuredPosts.length > 1 && (
                  <>
                    <button
                      onClick={prevPost}
                      className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-slate-900/90 hover:bg-slate-800 text-white p-4 transition-all duration-300 backdrop-blur-sm border border-slate-700/50"
                      style={{ borderRadius: '12px' }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextPost}
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-slate-900/90 hover:bg-slate-800 text-white p-4 transition-all duration-300 backdrop-blur-sm border border-slate-700/50"
                      style={{ borderRadius: '12px' }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Content Section */}
              <div className="lg:col-span-3 p-10 lg:p-12 flex flex-col justify-between">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-300 hover:to-purple-400 transition-all duration-300 leading-tight mb-6 font-mono">
                      {currentPost.title}
                    </h3>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mb-6"></div>
                    
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                      {currentPost.excerpt}
                    </p>
                  </div>
                  
                  {/* Premium Tags */}
                  <div className="flex flex-wrap gap-3">
                    {currentPost.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 text-cyan-400 px-4 py-2 text-sm font-bold hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 border border-slate-600/50 font-mono" style={{ borderRadius: '8px' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Enhanced Meta Info */}
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50" style={{ borderRadius: '10px' }}>
                        <User className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold font-mono">{currentPost.author}</div>
                        <div className="text-xs text-slate-400 font-mono tracking-wide">AUTHOR</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50" style={{ borderRadius: '10px' }}>
                        <Clock className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold font-mono">{currentPost.readTime}</div>
                        <div className="text-xs text-slate-400 font-mono tracking-wide">READ TIME</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-br from-slate-700/80 to-slate-800/80 border border-slate-600/50" style={{ borderRadius: '10px' }}>
                        <Calendar className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold font-mono">{currentPost.date}</div>
                        <div className="text-xs text-slate-400 font-mono tracking-wide">PUBLISHED</div>
                      </div>
                    </div>
                    
                    {currentPost.downloads && (
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/30" style={{ borderRadius: '10px' }}>
                          <Download className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-cyan-400 font-bold font-mono">{currentPost.downloads}</div>
                          <div className="text-xs text-slate-400 font-mono tracking-wide">DOWNLOADS</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Premium Actions */}
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-slate-700/50">
                  <Link 
                    to="/blog" 
                    className="flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 font-black font-mono shadow-lg"
                    style={{ borderRadius: '12px' }}
                  >
                    <span>EXPLORE VAULT</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <div className="flex items-center space-x-6">
                    {/* Enhanced Autoplay Control */}
                    {featuredPosts.length > 1 && (
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-3 bg-slate-800/80 border border-slate-600/50 hover:border-cyan-400/50 transition-all backdrop-blur-sm"
                        style={{ borderRadius: '10px' }}
                        title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                      >
                        {isAutoPlaying ? (
                          <Pause className="w-5 h-5 text-slate-400" />
                        ) : (
                          <Play className="w-5 h-5 text-slate-400" />
                        )}
                      </button>
                    )}
                    
                    {/* Enhanced Dots Indicator */}
                    <div className="flex space-x-3">
                      {featuredPosts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                          }}
                          className={`h-2 transition-all duration-500 ${
                            index === currentIndex 
                              ? 'bg-gradient-to-r from-cyan-400 to-purple-400 w-12' 
                              : 'bg-slate-600 hover:bg-slate-500 w-2'
                          }`}
                          style={{ borderRadius: '4px' }}
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
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white font-mono mb-2">
                MORE <span className="text-cyan-400">FEATURED</span>
              </h3>
              <div className="w-16 h-0.5 bg-cyan-400 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.filter((_, index) => index !== currentIndex).slice(0, 3).map((post, index) => (
                <div 
                  key={post.id}
                  className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 p-6 hover:bg-gradient-to-br hover:from-slate-700/80 hover:to-slate-800/80 transition-all duration-500 cursor-pointer hover:border-cyan-400/50 backdrop-blur-sm"
                  style={{ borderRadius: '12px' }}
                  onClick={() => setCurrentIndex(featuredPosts.findIndex(p => p.id === post.id))}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover group-hover:scale-110 transition-transform duration-300"
                        style={{ borderRadius: '8px' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" style={{ borderRadius: '8px' }}></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-black text-sm line-clamp-2 group-hover:text-cyan-300 transition-colors mb-2 font-mono">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-slate-400 text-xs space-x-3 font-mono">
                        <span className="font-bold">{post.readTime}</span>
                        <span>•</span>
                        <span className="font-bold">{post.type}</span>
                        {post.downloads && (
                          <>
                            <span>•</span>
                            <span className="text-cyan-400 font-bold">{post.downloads} DL</span>
                          </>
                        )}
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
