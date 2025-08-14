
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, BookOpen, Gamepad2, Code, Sparkles, Download, MessageSquare, TrendingUp, Star, Database, Grid, FileText, Users, Trophy, Target, Brain, Lightbulb, Rocket } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const recentPosts = filteredPosts.filter(post => post.id !== featuredPost.id).slice(0, 8);

  // Enhanced content sections matching homepage theme
  const contentSections = [
    {
      title: 'Development Logs',
      subtitle: 'Behind the Scenes',
      description: 'Deep insights into our development process and technical challenges',
      icon: Code,
      color: 'blue',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      count: blogPosts.filter(post => post.category === 'devlogs').length,
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80',
      link: '/blog?category=devlogs'
    },
    {
      title: 'Learning Hub',
      subtitle: 'Educational Content', 
      description: 'Comprehensive tutorials and step-by-step learning materials',
      icon: BookOpen,
      color: 'emerald',
      gradient: 'from-emerald-500/20 to-green-500/20',
      borderColor: 'border-emerald-500/30',
      count: blogPosts.filter(post => post.category === 'tutorials').length,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
      link: '/blog?category=tutorials'
    },
    {
      title: 'Technical Insights',
      subtitle: 'Advanced Concepts',
      description: 'In-depth technical analysis and professional development patterns',
      icon: Database,
      color: 'purple',
      gradient: 'from-purple-500/20 to-violet-500/20',
      borderColor: 'border-purple-500/30',
      count: blogPosts.filter(post => post.category === 'technical').length,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80',
      link: '/blog?category=technical'
    },
    {
      title: 'Digital Resources',
      subtitle: 'Premium Downloads',
      description: 'Curated eBooks, templates, and tools for project acceleration',
      icon: Download,
      color: 'orange',
      gradient: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'border-orange-500/30',
      count: blogPosts.filter(post => post.category === 'ebooks').length,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&q=80',
      link: '/blog?category=ebooks'
    }
  ];

  const quickStats = [
    { label: 'Articles', value: blogPosts.length, icon: FileText, color: 'text-blue-400' },
    { label: 'Downloads', value: '47K+', icon: Download, color: 'text-emerald-400' },
    { label: 'Readers', value: '156K', icon: Users, color: 'text-purple-400' },
    { label: 'Rating', value: '4.9★', icon: Star, color: 'text-amber-400' }
  ];

  return (
    <section id="blog" className="relative min-h-screen overflow-hidden bg-zinc-950 py-20">
      {/* Background Effects - Homepage Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-zinc-800/50 border border-zinc-700/50 px-4 py-2 mb-8 backdrop-blur-sm">
            <Brain className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">KNOWLEDGE CENTER</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Learning & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Resources</span>
          </h2>
          
          <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Comprehensive development insights, tutorials, and resources from our expertise 
            across games, web applications, and cutting-edge technologies
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm p-6 text-center">
                  <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-lg font-black text-white">{stat.value}</div>
                  <div className="text-zinc-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Sections */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-black text-white mb-4">
              Content <span className="text-blue-400">Categories</span>
            </h3>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Explore specialized content areas designed to enhance your development journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contentSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={index}
                  to={section.link}
                  className={`group bg-zinc-800/30 border ${section.borderColor} backdrop-blur-sm overflow-hidden hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={section.image}
                      alt={section.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${section.gradient} to-transparent`}></div>
                    
                    <div className="absolute top-3 left-3">
                      <div className="bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-sm p-1.5">
                        <IconComponent className={`w-4 h-4 text-${section.color}-400`} />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <span className={`bg-zinc-900/80 border border-zinc-700/60 text-${section.color}-400 px-2 py-1 text-xs font-medium backdrop-blur-sm`}>
                        {section.count}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`text-white font-bold text-sm group-hover:text-${section.color}-300 transition-colors`}>
                        {section.title}
                      </h4>
                      <ArrowRight className={`w-3 h-3 text-zinc-500 group-hover:text-${section.color}-400 transition-colors`} />
                    </div>
                    
                    <p className={`text-${section.color}-400 text-xs font-medium mb-2`}>
                      {section.subtitle}
                    </p>
                    
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Featured Article */}
        <div className="bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm overflow-hidden mb-12 hover:border-blue-400/50 transition-all duration-300 group">
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
                <span className="bg-blue-500/90 backdrop-blur-sm text-white px-3 py-1 text-sm font-bold">
                  FEATURED
                </span>
              </div>
              
              {featuredPost.difficulty && (
                <div className="absolute top-4 right-4">
                  <span className="bg-zinc-900/80 backdrop-blur-sm text-zinc-300 px-3 py-1 text-sm border border-zinc-600/50">
                    {featuredPost.difficulty}
                  </span>
                </div>
              )}
            </div>
            
            <div className="p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-zinc-700/40 border border-zinc-600/30 text-blue-400 px-3 py-1 text-sm font-medium">
                  {featuredPost.type}
                </span>
                <span className="text-zinc-500 text-sm">•</span>
                <span className="text-zinc-400 text-sm">{featuredPost.category.toUpperCase()}</span>
              </div>
              
              <h3 className="text-xl font-black text-white mb-4 group-hover:text-blue-300 transition-colors leading-tight">
                {featuredPost.title}
              </h3>
              
              <p className="text-zinc-400 mb-6 leading-relaxed text-sm">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center space-x-6 mb-6 text-sm text-zinc-500">
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
                className="inline-flex items-center space-x-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/60 hover:border-blue-400/80 text-blue-300 px-6 py-3 font-bold transition-all duration-200 text-sm"
              >
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recentPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm overflow-hidden hover:border-blue-400/50 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-zinc-900/80 backdrop-blur-sm text-zinc-300 px-2 py-1 text-xs font-medium">
                    {post.type}
                  </span>
                </div>
                {post.difficulty && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-blue-500/90 text-white px-2 py-1 text-xs">
                      {post.difficulty}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-blue-400 text-xs font-medium">{post.category.toUpperCase()}</span>
                  {post.gameRelated && (
                    <>
                      <span className="text-zinc-500 text-xs">•</span>
                      <Gamepad2 className="w-3 h-3 text-emerald-400" />
                    </>
                  )}
                </div>
                
                <h3 className="text-white font-bold mb-2 group-hover:text-blue-300 transition-colors text-sm line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                  {post.downloads && (
                    <div className="flex items-center space-x-1 text-blue-400">
                      <Download className="w-3 h-3" />
                      <span>{post.downloads}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Link
              to="/blog"
              className="bg-zinc-800/30 hover:bg-zinc-700/30 border border-zinc-700/30 hover:border-blue-400/50 text-zinc-300 hover:text-blue-300 px-6 py-8 transition-all duration-200 text-center group hover:scale-[1.02]"
            >
              <BookOpen className="w-8 h-8 mx-auto mb-4 group-hover:text-blue-400 transition-colors" />
              <div className="font-bold mb-2">Explore All Content</div>
              <div className="text-sm text-zinc-500">Browse our complete knowledge library</div>
            </Link>
            
            <Link
              to="/blog?category=devlogs"
              className="bg-zinc-800/30 hover:bg-zinc-700/30 border border-zinc-700/30 hover:border-emerald-400/50 text-zinc-300 hover:text-emerald-300 px-6 py-8 transition-all duration-200 text-center group hover:scale-[1.02]"
            >
              <Code className="w-8 h-8 mx-auto mb-4 group-hover:text-emerald-400 transition-colors" />
              <div className="font-bold mb-2">Development Insights</div>
              <div className="text-sm text-zinc-500">Behind-the-scenes development content</div>
            </Link>
            
            <Link
              to="/blog?category=tutorials"
              className="bg-zinc-800/30 hover:bg-zinc-700/30 border border-zinc-700/30 hover:border-purple-400/50 text-zinc-300 hover:text-purple-300 px-6 py-8 transition-all duration-200 text-center group hover:scale-[1.02]"
            >
              <Lightbulb className="w-8 h-8 mx-auto mb-4 group-hover:text-purple-400 transition-colors" />
              <div className="font-bold mb-2">Learning Materials</div>
              <div className="text-sm text-zinc-500">Step-by-step tutorials and guides</div>
            </Link>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center space-x-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/60 hover:border-blue-400/80 text-blue-300 px-8 py-4 font-bold transition-all duration-200"
          >
            <Rocket className="w-5 h-5" />
            <span>EXPLORE ALL RESOURCES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
