
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Filter, Grid, List, Star, TrendingUp, Calendar, Eye, Heart, Share2, Bookmark, ChevronDown, Settings, Sparkles, Gamepad2, Code, BookOpen, Database, Wrench, FileText, Play, Users, Trophy, Zap, Target, Layers, Globe } from 'lucide-react';
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

  // Services-style content sections
  const contentSections = [
    {
      id: 'games',
      title: 'Game Development',
      subtitle: 'Dev Logs & Insights',
      description: 'Behind-the-scenes development content, technical deep-dives, and project updates from our game development journey.',
      icon: Gamepad2,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
      stats: { posts: 12, downloads: 2340, views: '15.2K' },
      tags: ['Unity', 'Game Design', 'Programming', 'Art'],
      link: '/blog?category=devlogs'
    },
    {
      id: 'webapps',
      title: 'Web Development',
      subtitle: 'Technical Guides',
      description: 'Comprehensive tutorials, architecture patterns, and best practices for modern web development and application building.',
      icon: Code,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      stats: { posts: 18, downloads: 3890, views: '28.5K' },
      tags: ['React', 'TypeScript', 'Backend', 'API'],
      link: '/blog?category=technical'
    },
    {
      id: 'tutorials',
      title: 'Learn & Grow',
      subtitle: 'Step-by-Step Tutorials',
      description: 'Educational content designed to help developers master new technologies and improve their skills through practical examples.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      stats: { posts: 24, downloads: 5670, views: '42.8K' },
      tags: ['Tutorials', 'Learning', 'Practice', 'Skills'],
      link: '/blog?category=tutorials'
    },
    {
      id: 'resources',
      title: 'Digital Resources',
      subtitle: 'eBooks & Downloads',
      description: 'Curated collection of eBooks, templates, tools, and downloadable resources to accelerate your development projects.',
      icon: Download,
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      stats: { posts: 8, downloads: 1240, views: '9.7K' },
      tags: ['eBooks', 'Templates', 'Tools', 'Resources'],
      link: '/blog?category=ebooks'
    },
    {
      id: 'insights',
      title: 'Industry Insights',
      subtitle: 'Trends & Analysis',
      description: 'Stay ahead with industry trends, technology analysis, and strategic insights from our development experience.',
      icon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      stats: { posts: 15, downloads: 890, views: '18.3K' },
      tags: ['Trends', 'Analysis', 'Strategy', 'Future'],
      link: '/blog?category=insights'
    },
    {
      id: 'community',
      title: 'Community Hub',
      subtitle: 'Stories & Updates',
      description: 'Community highlights, project showcases, team updates, and collaborative content from our growing developer network.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      stats: { posts: 11, downloads: 450, views: '12.1K' },
      tags: ['Community', 'Stories', 'Updates', 'Network'],
      link: '/blog?category=community'
    }
  ];

  const quickStats = [
    { label: 'Total Articles', value: blogPosts.length, icon: FileText, color: 'text-emerald-400' },
    { label: 'Downloads', value: '14.2K', icon: Download, color: 'text-blue-400' },
    { label: 'Monthly Readers', value: '89.4K', icon: Eye, color: 'text-orange-400' },
    { label: 'Active Categories', value: categories.length - 1, icon: Grid, color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      <main className="pt-20">
        {/* Services-style background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-400/8 to-amber-400/6 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/8 to-teal-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/6 to-purple-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
        </div>

        {/* Hero Section - Services Style */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-zinc-800/40 border border-zinc-700/40 px-6 py-3 mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-3 text-orange-400" />
                <span className="text-sm font-bold text-orange-400 font-mono tracking-wider">KNOWLEDGE CENTER</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-6 font-mono">
                Learning <span className="text-orange-400">Hub</span>
              </h1>
              
              <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Comprehensive resources, tutorials, and insights from our development journey. 
                Everything you need to learn, grow, and build amazing projects.
              </p>

              {/* Quick Stats - Compact Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {quickStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm p-4 text-center">
                      <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                      <div className="text-xl font-black text-white font-mono">{stat.value}</div>
                      <div className="text-zinc-400 text-xs font-mono">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Sections - Services Grid Style */}
        <section className="py-12 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
              {contentSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Link
                    key={section.id}
                    to={section.link}
                    className="group bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm overflow-hidden hover:border-orange-400/50 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4">
                        <div className="bg-zinc-900/80 border border-zinc-700/60 p-2 backdrop-blur-sm">
                          <IconComponent className="w-5 h-5 text-orange-400" />
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-xs text-zinc-300 mb-2">
                          <span className="bg-zinc-900/80 px-2 py-1 font-mono border border-zinc-700/60">
                            {section.stats.posts} POSTS
                          </span>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1">
                              <Download className="w-3 h-3" />
                              <span className="font-mono">{section.stats.downloads}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span className="font-mono">{section.stats.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-black text-white group-hover:text-orange-300 transition-colors font-mono">
                          {section.title}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 transition-colors" />
                      </div>
                      
                      <p className="text-orange-400 text-sm font-bold font-mono mb-3">
                        {section.subtitle}
                      </p>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {section.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {section.tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="bg-zinc-700/40 border border-zinc-600/30 text-zinc-300 px-2 py-1 text-xs font-mono">
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

        {/* Advanced Search & Filter - Compact */}
        <section className="py-8 border-t border-zinc-800/50 relative z-10">
          <div className="container mx-auto px-6">
            <div className="bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm p-6">
              <div className="grid lg:grid-cols-12 gap-4 items-center">
                <div className="lg:col-span-5 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search articles, tutorials, guides..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zinc-900/60 border border-zinc-700/40 text-white placeholder-zinc-400 focus:border-orange-400/60 focus:outline-none text-sm font-mono"
                  />
                </div>

                <div className="lg:col-span-4 flex flex-wrap gap-2">
                  {categories.slice(0, 4).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-2 text-xs font-bold font-mono transition-all ${
                        activeCategory === category.id
                          ? 'bg-orange-500/20 border border-orange-400/60 text-orange-300'
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
                    className="bg-zinc-900/60 border border-zinc-700/40 px-3 py-2 text-white text-xs font-mono focus:border-orange-400/60 focus:outline-none"
                  >
                    <option value="date">Latest</option>
                    <option value="downloads">Popular</option>
                    <option value="readTime">Quick</option>
                    <option value="title">A-Z</option>
                  </select>
                  
                  <div className="flex bg-zinc-900/60 border border-zinc-700/40">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-orange-500/20 text-orange-300' : 'text-zinc-400'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-orange-500/20 text-orange-300' : 'text-zinc-400'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs mt-4">
                <div className="text-zinc-400 font-mono">
                  <span className="text-orange-400 font-bold">{filteredAndSortedPosts.length}</span> articles found
                  {searchTerm && <span> for "{searchTerm}"</span>}
                </div>
                
                <div className="flex items-center space-x-4 text-zinc-500 font-mono">
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>1.2K active</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Updated daily</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts - Compact Row */}
        {featuredPosts.length > 0 && (
          <section className="py-8 border-b border-zinc-800/50 relative z-10">
            <div className="container mx-auto px-6">
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-zinc-800/40 border border-zinc-700/40 px-4 py-2 backdrop-blur-sm">
                  <Star className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 font-mono">FEATURED</span>
                </div>
                <div className="h-px bg-gradient-to-r from-amber-400/50 to-transparent flex-1 ml-4"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-4">
                {featuredPosts.slice(0, 2).map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group bg-zinc-800/30 border border-zinc-700/30 hover:border-amber-400/50 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                  >
                    <div className="flex h-32">
                      <div className="w-32 relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-amber-500/90 text-zinc-950 px-2 py-1 text-xs font-bold font-mono">
                            FEATURED
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-zinc-700/40 border border-zinc-600/30 text-amber-400 px-2 py-1 text-xs font-bold font-mono">
                              {post.type}
                            </span>
                            <span className="text-zinc-500 text-xs font-mono">•</span>
                            <span className="text-zinc-400 text-xs font-mono">{post.category.toUpperCase()}</span>
                          </div>
                          
                          <h3 className="font-bold text-white mb-2 group-hover:text-amber-300 transition-colors line-clamp-2 font-mono text-sm leading-tight">
                            {post.title}
                          </h3>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2 text-zinc-500 font-mono">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-amber-400">
                              <Download className="w-3 h-3" />
                              <span className="font-bold font-mono">{post.downloads}</span>
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

        {/* Articles Grid - Services Style */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-6">
            {filteredAndSortedPosts.length === 0 ? (
              <div className="text-center py-16 bg-zinc-800/30 border border-zinc-700/30 backdrop-blur-sm">
                <div className="text-6xl mb-6">📚</div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">No content found</h3>
                <p className="text-zinc-400 mb-6 text-sm max-w-md mx-auto">
                  Try adjusting your search terms or filters to find the content you're looking for.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="bg-orange-500/20 border border-orange-400/60 text-orange-300 px-6 py-3 text-sm font-bold font-mono hover:bg-orange-500/30 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'space-y-3'}>
                {regularPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className={`group bg-zinc-800/30 border border-zinc-700/30 hover:border-orange-400/50 transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                      viewMode === 'list' ? 'flex h-24' : ''
                    }`}
                  >
                    <div className={`relative ${viewMode === 'list' ? 'w-24 h-24' : 'h-40'}`}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-zinc-900/90 text-zinc-300 px-2 py-1 text-xs font-bold font-mono backdrop-blur-sm">
                          {post.type}
                        </span>
                      </div>
                      
                      {viewMode === 'grid' && post.difficulty && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-orange-500/90 text-white px-2 py-1 text-xs font-mono">
                            {post.difficulty}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-orange-400 text-xs font-bold font-mono">{post.category.toUpperCase()}</span>
                          {post.gameRelated && (
                            <>
                              <span className="text-zinc-500 text-xs">•</span>
                              <Gamepad2 className="w-3 h-3 text-emerald-400" />
                            </>
                          )}
                        </div>
                        
                        <h3 className="text-white font-bold mb-2 group-hover:text-orange-300 transition-colors line-clamp-2 font-mono text-sm leading-tight">
                          {post.title}
                        </h3>
                        
                        {viewMode === 'grid' && (
                          <p className="text-zinc-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-zinc-500 font-mono">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        {post.downloads && (
                          <div className="flex items-center space-x-1 text-orange-400">
                            <Download className="w-3 h-3" />
                            <span className="font-bold font-mono">{post.downloads}</span>
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

        {/* Quick Links - Services Style */}
        <section className="py-12 border-t border-zinc-800/50 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white mb-4 font-mono">
                Explore More <span className="text-orange-400">Sections</span>
              </h2>
              <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
                Discover our full range of services and projects across different areas of expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                to="/#games"
                className="bg-zinc-800/30 border border-zinc-700/30 hover:border-emerald-400/50 p-6 transition-all backdrop-blur-sm group text-center"
              >
                <Gamepad2 className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-emerald-300">Game Projects</h3>
                <p className="text-zinc-400 text-xs mb-4">Interactive games and development logs</p>
                <div className="flex items-center justify-center text-emerald-400 text-xs font-mono">
                  <span>Explore Games</span>
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </Link>

              <Link 
                to="/#services"
                className="bg-zinc-800/30 border border-zinc-700/30 hover:border-blue-400/50 p-6 transition-all backdrop-blur-sm group text-center"
              >
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-blue-300">Web Services</h3>
                <p className="text-zinc-400 text-xs mb-4">Professional development services</p>
                <div className="flex items-center justify-center text-blue-400 text-xs font-mono">
                  <span>View Services</span>
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </Link>

              <Link 
                to="/#about"
                className="bg-zinc-800/30 border border-zinc-700/30 hover:border-orange-400/50 p-6 transition-all backdrop-blur-sm group text-center"
              >
                <Users className="w-8 h-8 text-orange-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-orange-300">Our Team</h3>
                <p className="text-zinc-400 text-xs mb-4">Meet the developers and creators</p>
                <div className="flex items-center justify-center text-orange-400 text-xs font-mono">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 ml-2" />
                </div>
              </Link>

              <Link 
                to="/#contact"
                className="bg-zinc-800/30 border border-zinc-700/30 hover:border-purple-400/50 p-6 transition-all backdrop-blur-sm group text-center"
              >
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-purple-300">Get Started</h3>
                <p className="text-zinc-400 text-xs mb-4">Start your project or get support</p>
                <div className="flex items-center justify-center text-purple-400 text-xs font-mono">
                  <span>Contact Us</span>
                  <ArrowRight className="w-3 h-3 ml-2" />
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
