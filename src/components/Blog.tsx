
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, BookOpen, Gamepad2, Code, Sparkles, Download, MessageSquare, TrendingUp, Star, Database, Grid, FileText, Users, Trophy, Target } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const recentPosts = filteredPosts.filter(post => post.id !== featuredPost.id).slice(0, 8);

  // Services-style content sections matching our theme
  const contentSections = [
    {
      title: 'Game Dev Logs',
      description: 'Behind-the-scenes development insights',
      icon: Gamepad2,
      color: 'emerald',
      count: blogPosts.filter(post => post.gameRelated).length,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=400&q=80',
      link: '/blog?category=devlogs'
    },
    {
      title: 'Technical Guides',
      description: 'Web development tutorials and best practices',
      icon: Code,
      color: 'blue',
      count: blogPosts.filter(post => post.category === 'technical').length,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      link: '/blog?category=technical'
    },
    {
      title: 'Learning Resources',
      description: 'Step-by-step tutorials and educational content',
      icon: BookOpen,
      color: 'orange',
      count: blogPosts.filter(post => post.category === 'tutorials').length,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80',
      link: '/blog?category=tutorials'
    },
    {
      title: 'Digital Resources',
      description: 'eBooks, templates, and downloadable tools',
      icon: Download,
      color: 'purple',
      count: blogPosts.filter(post => post.category === 'ebooks').length,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80',
      link: '/blog?category=ebooks'
    }
  ];

  const quickStats = [
    { label: 'Articles', value: blogPosts.length, icon: FileText },
    { label: 'Downloads', value: '14.2K', icon: Download },
    { label: 'Readers', value: '89.4K', icon: Users },
    { label: 'Categories', value: '6', icon: Grid }
  ];

  return (
    <section id="blog" className="relative min-h-screen overflow-hidden bg-zinc-900/85 backdrop-blur-xl py-16">
      {/* Services-style background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/8 to-amber-400/6 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/8 to-teal-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/6 to-purple-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Services-style Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-zinc-800/40 border border-zinc-700/40 px-6 py-3 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-3 text-orange-400" />
            <span className="text-sm font-bold text-orange-400 font-mono tracking-wider">KNOWLEDGE CENTER</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 font-mono leading-tight">
            Learning <span className="text-orange-400">Hub</span>
          </h2>
          
          <p className="text-lg text-zinc-300 leading-relaxed font-mono max-w-3xl mx-auto mb-8">
            Comprehensive resources, development insights, and technical documentation 
            from our projects and expertise across all areas
          </p>

          {/* Quick Stats - Services Style */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm p-4 text-center">
                  <IconComponent className="w-5 h-5 mx-auto mb-2 text-orange-400" />
                  <div className="text-lg font-black text-white font-mono">{stat.value}</div>
                  <div className="text-zinc-400 text-xs font-mono">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Sections - Services Grid Style */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <div className="flex items-center bg-zinc-800/40 border border-zinc-700/40 px-4 py-2 backdrop-blur-sm">
              <Database className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-xs font-bold text-blue-400 font-mono">CONTENT SECTIONS</span>
            </div>
            <div className="h-px bg-gradient-to-r from-blue-400/50 to-transparent flex-1 ml-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contentSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={index}
                  to={section.link}
                  className="group bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm overflow-hidden hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent"></div>
                    
                    <div className="absolute top-2 left-2">
                      <div className="bg-zinc-900/80 border border-zinc-700/60 p-1.5 backdrop-blur-sm">
                        <IconComponent className={`w-4 h-4 text-${section.color}-400`} />
                      </div>
                    </div>

                    <div className="absolute bottom-2 right-2">
                      <span className={`bg-zinc-900/80 border border-zinc-700/60 text-${section.color}-400 px-2 py-1 text-xs font-bold font-mono backdrop-blur-sm`}>
                        {section.count}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold text-sm group-hover:text-orange-300 transition-colors font-mono">
                        {section.title}
                      </h3>
                      <ArrowRight className="w-3 h-3 text-zinc-500 group-hover:text-orange-400 transition-colors" />
                    </div>
                    
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Featured Post - Services Style */}
        <div className="bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm overflow-hidden mb-8 hover:border-orange-400/50 transition-all duration-300 group">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/60 via-transparent to-transparent lg:bg-none"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 text-sm font-bold font-mono">
                  FEATURED
                </span>
              </div>
              
              {featuredPost.difficulty && (
                <div className="absolute top-4 right-4">
                  <span className="bg-zinc-900/80 backdrop-blur-sm text-zinc-300 px-3 py-1 text-sm font-mono border border-zinc-600/50">
                    {featuredPost.difficulty}
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-zinc-700/40 border border-zinc-600/30 text-orange-400 px-3 py-1 text-sm font-bold font-mono">
                  {featuredPost.type}
                </span>
                <span className="text-zinc-500 text-sm font-mono">•</span>
                <span className="text-zinc-400 text-sm font-mono">{featuredPost.category.toUpperCase()}</span>
              </div>
              
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-orange-300 transition-colors font-mono leading-tight">
                {featuredPost.title}
              </h3>
              
              <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center space-x-6 mb-6 text-sm text-zinc-500 font-mono">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
                {featuredPost.downloads && (
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>{featuredPost.downloads}</span>
                  </div>
                )}
              </div>
              
              <Link 
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center space-x-3 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/60 hover:border-orange-400/80 text-orange-300 px-6 py-3 font-bold font-mono transition-all duration-200 text-sm"
              >
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Articles - Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {recentPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm overflow-hidden hover:border-orange-400/50 transition-all duration-300 group"
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
                    <span className="bg-orange-500/90 text-white px-2 py-1 text-xs font-mono">
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
                
                <h3 className="text-white font-bold mb-2 group-hover:text-orange-300 transition-colors font-mono text-sm line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 font-mono">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  {post.downloads && (
                    <div className="flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{post.downloads}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Links - Services Style */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <Link
              to="/blog"
              className="bg-zinc-800/30 hover:bg-zinc-700/30 border border-zinc-700/30 hover:border-orange-400/50 text-zinc-300 hover:text-orange-300 px-6 py-6 font-bold transition-all duration-200 text-center font-mono text-sm group"
            >
              <BookOpen className="w-6 h-6 mx-auto mb-3 group-hover:text-orange-400 transition-colors" />
              <div className="font-bold mb-1">Browse All Content</div>
              <div className="text-xs text-zinc-500">Explore our complete library</div>
            </Link>
            
            <Link
              to="/blog?category=devlogs"
              className="bg-zinc-800/30 hover:bg-zinc-700/30 border border-zinc-700/30 hover:border-emerald-400/50 text-zinc-300 hover:text-emerald-300 px-6 py-6 font-bold transition-all duration-200 text-center font-mono text-sm group"
            >
              <Gamepad2 className="w-6 h-6 mx-auto mb-3 group-hover:text-emerald-400 transition-colors" />
              <div className="font-bold mb-1">Game Dev Logs</div>
              <div className="text-xs text-zinc-500">Behind-the-scenes development</div>
            </Link>
            
            <Link
              to="/blog?category=technical"
              className="bg-zinc-800/30 hover:bg-zinc-700/30 border border-zinc-700/30 hover:border-blue-400/50 text-zinc-300 hover:text-blue-300 px-6 py-6 font-bold transition-all duration-200 text-center font-mono text-sm group"
            >
              <Code className="w-6 h-6 mx-auto mb-3 group-hover:text-blue-400 transition-colors" />
              <div className="font-bold mb-1">Tech Tutorials</div>
              <div className="text-xs text-zinc-500">Web development guides</div>
            </Link>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center space-x-3 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/60 hover:border-orange-400/80 text-orange-300 px-8 py-4 font-bold font-mono transition-all duration-200"
          >
            <Target className="w-5 h-5" />
            <span>EXPLORE ALL CONTENT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
