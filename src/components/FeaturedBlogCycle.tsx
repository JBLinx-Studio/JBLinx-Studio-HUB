
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Download, User, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const FeaturedBlogCycle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const featuredPosts = blogPosts.filter(post => post.featured);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || featuredPosts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 4000);

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
    <section className="py-12 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
            Featured <span className="text-cyan-400">Resources</span>
          </h2>
          <p className="text-gray-300">Discover our latest development insights and downloads</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className={`bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="grid lg:grid-cols-2">
              <div className="relative h-56 lg:h-80 group">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </span>
                  <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {currentPost.type}
                  </span>
                </div>
                
                {currentPost.difficulty && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {currentPost.difficulty}
                    </span>
                  </div>
                )}

                {/* Navigation Controls */}
                {featuredPosts.length > 1 && (
                  <>
                    <button
                      onClick={prevPost}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextPost}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
              
              <div className="p-6 lg:p-8 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl lg:text-2xl font-bold text-white hover:text-cyan-300 transition-colors leading-tight">
                      {currentPost.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {currentPost.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-white/20 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{currentPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{currentPost.readTime}</span>
                      </div>
                      {currentPost.downloads && (
                        <div className="flex items-center space-x-1 text-cyan-400">
                          <Download className="w-4 h-4" />
                          <span>{currentPost.downloads} downloads</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6">
                  <Link 
                    to="/blog" 
                    className="flex items-center space-x-2 bg-cyan-500 text-white px-6 py-3 rounded-xl hover:bg-cyan-600 transition-all duration-200 font-medium shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    <span>Explore More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <div className="flex items-center space-x-3">
                    {featuredPosts.length > 1 && (
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-2 rounded-full border border-white/20 hover:border-cyan-400/50 transition-colors"
                        title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                      >
                        {isAutoPlaying ? (
                          <Pause className="w-4 h-4 text-gray-400" />
                        ) : (
                          <Play className="w-4 h-4 text-gray-400" />
                        )}
                      </button>
                    )}
                    
                    <div className="flex space-x-2">
                      {featuredPosts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-cyan-400 w-6' : 'bg-white/30 hover:bg-white/50'
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
