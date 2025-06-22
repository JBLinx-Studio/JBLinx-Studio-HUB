
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Download, User, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const FeaturedBlogCycle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredPosts = blogPosts.filter(post => post.featured);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredPosts.length, isAutoPlaying]);

  const currentPost = featuredPosts[currentIndex];

  if (!currentPost) return null;

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Featured <span className="text-cyan-400">Content</span>
          </h2>
          <p className="text-gray-300 text-lg">Discover our latest development insights and resources</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {currentPost.type}
                  </span>
                </div>
                {currentPost.difficulty && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {currentPost.difficulty}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white hover:text-cyan-300 transition-colors">
                    {currentPost.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {currentPost.excerpt}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentPost.tags.slice(0, 4).map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6 text-sm text-gray-400">
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
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{currentPost.downloads}</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link 
                    to="/blog" 
                    className="flex items-center space-x-2 bg-cyan-500 text-white px-6 py-3 rounded-xl hover:bg-cyan-600 transition-colors font-medium"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <div className="flex space-x-2">
                    {featuredPosts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsAutoPlaying(false);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-cyan-400' : 'bg-white/30 hover:bg-white/50'
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
    </section>
  );
};

export default FeaturedBlogCycle;
