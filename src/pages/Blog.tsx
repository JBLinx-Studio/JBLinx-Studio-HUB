
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Filter, Grid, List, Star, TrendingUp, Calendar, Eye, Heart, Share2, Bookmark, ChevronDown, Settings, Sparkles, Gamepad2, Code, BookOpen, Database, Wrench, FileText, Play, Users, Trophy, Zap, Target, Layers, Globe, Brain, Lightbulb, Rocket, Shield } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'downloads':
          return (b.downloads || 0) - (a.downloads || 0);
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [activeCategory, searchTerm, sortBy]);

  const featuredPosts = filteredAndSortedPosts.filter(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  // Enhanced content sections matching homepage style
  const learningCategories = [
    {
      id: 'devlogs',
      title: 'Development Logs',
      subtitle: 'Behind the Scenes',
      description: 'Deep dive into our development process, technical challenges, and innovative solutions across all our projects.',
      icon: Code,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      stats: { posts: 12, readers: '8.2K', engagement: '94%' },
      tags: ['Development', 'Technical', 'Process', 'Innovation']
    },
    {
      id: 'tutorials',
      title: 'Learning Hub',
      subtitle: 'Step-by-Step Guides',
      description: 'Comprehensive tutorials and educational content to help you master new technologies and development techniques.',
      icon: BookOpen,
      gradient: 'from-emerald-500/20 to-green-500/20',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
      stats: { posts: 24, readers: '15.7K', engagement: '96%' },
      tags: ['Education', 'Tutorials', 'Learning', 'Skills']
    },
    {
      id: 'technical',
      title: 'Technical Insights',
      subtitle: 'Advanced Concepts',
      description: 'In-depth technical analysis, architecture patterns, and advanced programming concepts for professional developers.',
      icon: Database,
      gradient: 'from-purple-500/20 to-violet-500/20',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
      stats: { posts: 18, readers: '12.4K', engagement: '92%' },
      tags: ['Architecture', 'Patterns', 'Advanced', 'Systems']
    },
    {
      id: 'ebooks',
      title: 'Digital Resources',
      subtitle: 'Premium Downloads',
      description: 'Curated collection of eBooks, templates, tools, and comprehensive guides for accelerating your projects.',
      icon: Download,
      gradient: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80',
      stats: { posts: 8, readers: '6.1K', engagement: '98%' },
      tags: ['Resources', 'eBooks', 'Templates', 'Tools']
    },
    {
      id: 'games',
      title: 'Game Universe',
      subtitle: 'Gaming Content',
      description: 'Game development insights, design philosophy, and exclusive content from our gaming projects and community.',
      icon: Gamepad2,
      gradient: 'from-pink-500/20 to-rose-500/20',
      borderColor: 'border-pink-500/30',
      textColor: 'text-pink-400',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
      stats: { posts: 15, readers: '11.3K', engagement: '97%' },
      tags: ['Gaming', 'Design', 'Development', 'Community']
    },
    {
      id: 'articles',
      title: 'Industry Insights',
      subtitle: 'Trends & Analysis',
      description: 'Strategic insights, industry trends, and thought leadership content to keep you ahead in the tech landscape.',
      icon: TrendingUp,
      gradient: 'from-teal-500/20 to-cyan-500/20',
      borderColor: 'border-teal-500/30',
      textColor: 'text-teal-400',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      stats: { posts: 11, readers: '9.8K', engagement: '93%' },
      tags: ['Insights', 'Trends', 'Strategy', 'Leadership']
    }
  ];

  const quickMetrics = [
    { label: 'Total Content', value: blogPosts.length, icon: FileText, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { label: 'Total Downloads', value: '47.2K', icon: Download, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { label: 'Active Readers', value: '156K', icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/10' },
    { label: 'Avg. Rating', value: '4.9★', icon: Star, color: 'text-amber-400', bg: 'bg-amber-500/10' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section - Homepage Style */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-zinc-800/50 border border-zinc-700/50 px-4 py-2 mb-8 backdrop-blur-sm">
                <Brain className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">KNOWLEDGE CENTER</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6">
                Learning & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Resources</span>
              </h1>
              
              <p className="text-xl text-zinc-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                Discover our comprehensive collection of development insights, tutorials, and resources. 
                Everything you need to learn, grow, and excel in your tech journey.
              </p>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                {quickMetrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm p-6">
                      <div className={`w-10 h-10 ${metric.bg} flex items-center justify-center mb-3 mx-auto`}>
                        <IconComponent className={`w-5 h-5 ${metric.color}`} />
                      </div>
                      <div className="text-2xl font-black text-white mb-1">{metric.value}</div>
                      <div className="text-zinc-400 text-sm">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Learning Categories - Services Style */}
        <section className="py-16 bg-zinc-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">
                Explore <span className="text-blue-400">Content Categories</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Dive deep into specialized content areas designed to enhance your skills and knowledge
              </p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {learningCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Link
                    key={category.id}
                    to={`/blog?category=${category.id}`}
                    className={`group bg-zinc-800/40 border ${category.borderColor} backdrop-blur-sm overflow-hidden hover:scale-[1.02] transition-all duration-300`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} to-transparent`}></div>
                      
                      <div className="absolute top-4 left-4">
                        <div className="bg-zinc-900/80 border border-zinc-700/60 backdrop-blur-sm p-2">
                          <IconComponent className={`w-5 h-5 ${category.textColor}`} />
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-xs text-white mb-2">
                          <span className="bg-zinc-900/80 backdrop-blur-sm px-2 py-1 font-medium">
                            {category.stats.posts} ARTICLES
                          </span>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Users className="w-3 h-3" />
                              <span>{category.stats.readers}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="w-3 h-3" />
                              <span>{category.stats.engagement}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`text-xl font-black text-white group-hover:${category.textColor.replace('text-', 'text-')} transition-colors`}>
                          {category.title}
                        </h3>
                        <ArrowRight className={`w-4 h-4 text-zinc-500 group-hover:${category.textColor.replace('text-', 'text-')} transition-colors`} />
                      </div>
                      
                      <p className={`${category.textColor} text-sm font-medium mb-3`}>
                        {category.subtitle}
                      </p>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {category.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {category.tags.map((tag, index) => (
                          <span key={index} className="bg-zinc-700/30 border border-zinc-600/30 text-zinc-300 px-2 py-1 text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-12 bg-zinc-950/50 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm p-6">
              <div className="grid lg:grid-cols-12 gap-4 items-center mb-4">
                <div className="lg:col-span-5 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search articles, guides, tutorials..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zinc-900/60 border border-zinc-700/40 text-white placeholder-zinc-400 focus:border-blue-400/60 focus:outline-none"
                  />
                </div>

                <div className="lg:col-span-4 flex flex-wrap gap-2">
                  {categories.slice(0, 4).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-2 text-xs font-medium transition-all ${
                        activeCategory === category.id
                          ? 'bg-blue-500/20 border border-blue-400/60 text-blue-300'
                          : 'bg-zinc-700/30 border border-zinc-600/30 text-zinc-300 hover:bg-zinc-600/30'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-3 flex items-center justify-end space-x-3">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-zinc-900/60 border border-zinc-700/40 px-3 py-2 text-white text-sm focus:border-blue-400/60 focus:outline-none"
                  >
                    <option value="date">Latest</option>
                    <option value="downloads">Popular</option>
                    <option value="readTime">Quick Read</option>
                    <option value="title">Alphabetical</option>
                  </select>
                  
                  <div className="flex bg-zinc-900/60 border border-zinc-700/40">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500/20 text-blue-300' : 'text-zinc-400'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-500/20 text-blue-300' : 'text-zinc-400'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="text-zinc-400">
                  <span className="text-blue-400 font-medium">{filteredAndSortedPosts.length}</span> articles found
                  {searchTerm && <span> for "{searchTerm}"</span>}
                </div>
                
                <div className="flex items-center space-x-4 text-zinc-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Updated daily</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="w-3 h-3" />
                    <span>Quality assured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        {featuredPosts.length > 0 && (
          <section className="py-12 bg-zinc-900/30 backdrop-blur-sm">
            <div className="container mx-auto px-6">
              <div className="flex items-center mb-8">
                <div className="flex items-center bg-zinc-800/40 border border-zinc-700/40 px-4 py-2 backdrop-blur-sm">
                  <Star className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-sm font-medium text-amber-400">FEATURED CONTENT</span>
                </div>
                <div className="h-px bg-gradient-to-r from-amber-400/50 to-transparent flex-1 ml-4"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {featuredPosts.slice(0, 2).map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group bg-zinc-800/30 border border-zinc-700/30 hover:border-amber-400/50 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                  >
                    <div className="flex h-40">
                      <div className="w-40 relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-amber-500/90 text-zinc-950 px-2 py-1 text-xs font-bold">
                            FEATURED
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="bg-zinc-700/40 border border-zinc-600/30 text-amber-400 px-2 py-1 text-xs font-medium">
                              {post.type}
                            </span>
                            <span className="text-zinc-500 text-xs">•</span>
                            <span className="text-zinc-400 text-xs">{post.category.toUpperCase()}</span>
                          </div>
                          
                          <h3 className="font-bold text-white mb-2 group-hover:text-amber-300 transition-colors line-clamp-2 leading-tight">
                            {post.title}
                          </h3>
                          
                          <p className="text-zinc-400 text-sm line-clamp-2 mb-3">
                            {post.excerpt}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-3 text-zinc-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <User className="w-3 h-3" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-amber-400">
                              <Download className="w-3 h-3" />
                              <span className="font-medium">{post.downloads}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {filteredAndSortedPosts.length === 0 ? (
              <div className="text-center py-20 bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm">
                <div className="text-6xl mb-6">📚</div>
                <h3 className="text-2xl font-bold text-white mb-4">No content found</h3>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                  Try adjusting your search terms or filters to find the content you're looking for.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="bg-blue-500/20 border border-blue-400/60 text-blue-300 px-6 py-3 font-medium hover:bg-blue-500/30 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                {regularPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className={`group bg-zinc-800/30 border border-zinc-700/30 hover:border-blue-400/50 transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                      viewMode === 'list' ? 'flex h-28' : 'hover:scale-[1.02]'
                    }`}
                  >
                    <div className={`relative ${viewMode === 'list' ? 'w-28 h-28' : 'h-48'}`}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-zinc-900/90 text-zinc-300 px-2 py-1 text-xs font-medium backdrop-blur-sm">
                          {post.type}
                        </span>
                      </div>
                      
                      {viewMode === 'grid' && post.difficulty && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-blue-500/90 text-white px-2 py-1 text-xs">
                            {post.difficulty}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-blue-400 text-xs font-medium">{post.category.toUpperCase()}</span>
                          {post.gameRelated && (
                            <>
                              <span className="text-zinc-500 text-xs">•</span>
                              <Gamepad2 className="w-3 h-3 text-emerald-400" />
                            </>
                          )}
                        </div>
                        
                        <h3 className="text-white font-bold mb-2 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                          {post.title}
                        </h3>
                        
                        {viewMode === 'grid' && (
                          <p className="text-zinc-400 text-sm mb-3 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-zinc-500">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        {post.downloads && (
                          <div className="flex items-center space-x-1 text-blue-400">
                            <Download className="w-3 h-3" />
                            <span className="font-medium">{post.downloads}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Navigation Links - Homepage Style */}
        <section className="py-16 bg-zinc-900/50 backdrop-blur-sm border-t border-zinc-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-white mb-4">
                Explore More <span className="text-blue-400">Areas</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Discover our full range of services and projects across different expertise areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                to="/#games"
                className="bg-zinc-800/30 border border-zinc-700/30 hover:border-emerald-400/50 p-8 transition-all backdrop-blur-sm group text-center hover:scale-[1.02]"
              >
                <Gamepad2 className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2 group-hover:text-emerald-300">Game Universe</h3>
                <p className="text-zinc-400 text-sm mb-4">Interactive games and development content</p>
                <div className="flex items-center justify-center text-emerald-400 text-sm">
                  <span>Explore Games</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/#services"
                className="bg-zinc-800/30 border border-zinc-700/30 hover:border-blue-400/50 p-8 transition-all backdrop-blur-sm group text-center hover:scale-[1.02]"
              >
                <Code className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2 group-hover:text-blue-300">Our Services</h3>
                <p className="text-zinc-400 text-sm mb-4">Professional development services</p>
                <div className="flex items-center justify-center text-blue-400 text-sm">
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/#about"
                className="bg-zinc-800/30 border border-zinc-700/30 hover:border-purple-400/50 p-8 transition-all backdrop-blur-sm group text-center hover:scale-[1.02]"
              >
                <Users className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2 group-hover:text-purple-300">Our Team</h3>
                <p className="text-zinc-400 text-sm mb-4">Meet the developers and creators</p>
                <div className="flex items-center justify-center text-purple-400 text-sm">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>

              <Link 
                to="/#contact"
                className="bg-zinc-800/30 border border-zinc-700/30 hover:border-orange-400/50 p-8 transition-all backdrop-blur-sm group text-center hover:scale-[1.02]"
              >
                <Rocket className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2 group-hover:text-orange-300">Get Started</h3>
                <p className="text-zinc-400 text-sm mb-4">Start your project with us</p>
                <div className="flex items-center justify-center text-orange-400 text-sm">
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
