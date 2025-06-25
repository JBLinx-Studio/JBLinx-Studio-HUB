
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Filter, Grid, List, Star, TrendingUp, Calendar, Eye, Heart, Share2, Bookmark, ChevronDown, Settings, Zap, Target, Award, Layers, Code2, Database, Gamepad2, BookOpen, Sparkles, FileText } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDifficulty = difficultyFilter === 'all' || post.difficulty === difficultyFilter;
      const matchesType = typeFilter === 'all' || post.type === typeFilter;
      
      return matchesCategory && matchesSearch && matchesDifficulty && matchesType;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'downloads':
          return (b.downloads || 0) - (a.downloads || 0);
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'popularity':
          return (b.downloads || 0) - (a.downloads || 0);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [activeCategory, searchTerm, sortBy, difficultyFilter, typeFilter]);

  const featuredPosts = filteredAndSortedPosts.filter(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  const totalDownloads = blogPosts.reduce((sum, post) => sum + (post.downloads || 0), 0);
  const avgReadTime = Math.round(blogPosts.reduce((sum, post) => sum + parseInt(post.readTime), 0) / blogPosts.length);

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="pt-20">
        {/* Hero Header - Inspired by Orthodox-Echoes */}
        <section className="relative py-12 bg-gradient-to-br from-slate-950 via-indigo-950/30 to-purple-950/30 border-b border-slate-800/50">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-500/5 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/5 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left: Title & Description */}
              <div className="lg:col-span-8">
                <div className="mb-6">
                  <div className="inline-flex items-center bg-slate-800/80 border border-slate-700/50 px-4 py-2 mb-4" style={{ borderRadius: '8px' }}>
                    <BookOpen className="w-4 h-4 mr-2 text-cyan-400" />
                    <span className="text-xs font-bold text-cyan-300 tracking-widest font-mono">DEVELOPMENT CHRONICLES</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight font-mono mb-4">
                    DEV<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">VAULT</span>
                  </h1>
                  
                  <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mb-6"></div>
                  
                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                    Curated collection of development insights, tutorials, and resources crafted by our engineering team.
                  </p>
                </div>

                {/* Advanced Search */}
                <div className="bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm" style={{ borderRadius: '12px' }}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Search Input */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search resources..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none text-sm font-mono"
                        style={{ borderRadius: '8px' }}
                      />
                    </div>

                    {/* Category Filter */}
                    <select
                      value={activeCategory}
                      onChange={(e) => setActiveCategory(e.target.value)}
                      className="bg-slate-900/80 border border-slate-700 text-white px-4 py-3 focus:border-cyan-400 focus:outline-none text-sm font-mono"
                      style={{ borderRadius: '8px' }}
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      ))}
                    </select>

                    {/* Sort Options */}
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-slate-900/80 border border-slate-700 text-white px-4 py-3 focus:border-cyan-400 focus:outline-none text-sm font-mono"
                      style={{ borderRadius: '8px' }}
                    >
                      <option value="date">Latest First</option>
                      <option value="downloads">Most Downloaded</option>
                      <option value="readTime">Quick Reads</option>
                      <option value="title">Alphabetical</option>
                      <option value="popularity">Most Popular</option>
                    </select>

                    {/* View Toggle */}
                    <div className="flex items-center space-x-2">
                      <div className="flex bg-slate-900/80 border border-slate-700 p-1" style={{ borderRadius: '8px' }}>
                        <button
                          onClick={() => setViewMode('grid')}
                          className={`p-2 transition-all ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'}`}
                          style={{ borderRadius: '6px' }}
                        >
                          <Grid className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setViewMode('list')}
                          className={`p-2 transition-all ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400 hover:text-white'}`}
                          style={{ borderRadius: '6px' }}
                        >
                          <List className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                        className="p-3 bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
                        style={{ borderRadius: '8px' }}
                      >
                        <Settings className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Advanced Filters */}
                  {showAdvancedFilters && (
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-cyan-300 mb-2 font-mono tracking-wide">DIFFICULTY</label>
                          <select
                            value={difficultyFilter}
                            onChange={(e) => setDifficultyFilter(e.target.value)}
                            className="w-full bg-slate-900/80 border border-slate-700 text-white px-3 py-2 text-sm font-mono"
                            style={{ borderRadius: '6px' }}
                          >
                            <option value="all">All Levels</option>
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-xs font-bold text-cyan-300 mb-2 font-mono tracking-wide">TYPE</label>
                          <select
                            value={typeFilter}
                            onChange={(e) => setTypeFilter(e.target.value)}
                            className="w-full bg-slate-900/80 border border-slate-700 text-white px-3 py-2 text-sm font-mono"
                            style={{ borderRadius: '6px' }}
                          >
                            <option value="all">All Types</option>
                            <option value="Tutorial">Tutorial</option>
                            <option value="Dev Log">Dev Log</option>
                            <option value="eBook">eBook</option>
                            <option value="Technical Guide">Technical Guide</option>
                            <option value="Article">Article</option>
                            <option value="Game Project">Game Project</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Stats Panel */}
              <div className="lg:col-span-4">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 p-6 backdrop-blur-sm" style={{ borderRadius: '12px' }}>
                  <h3 className="text-lg font-black text-white mb-6 font-mono">
                    <Zap className="w-5 h-5 inline mr-2 text-yellow-400" />
                    VAULT METRICS
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-900/50 border border-slate-700/30" style={{ borderRadius: '8px' }}>
                      <div className="text-2xl font-black text-cyan-400 font-mono">{blogPosts.length}</div>
                      <div className="text-xs text-slate-400 font-mono tracking-wide">RESOURCES</div>
                    </div>
                    
                    <div className="text-center p-4 bg-slate-900/50 border border-slate-700/30" style={{ borderRadius: '8px' }}>
                      <div className="text-2xl font-black text-green-400 font-mono">{totalDownloads}</div>
                      <div className="text-xs text-slate-400 font-mono tracking-wide">DOWNLOADS</div>
                    </div>
                    
                    <div className="text-center p-4 bg-slate-900/50 border border-slate-700/30" style={{ borderRadius: '8px' }}>
                      <div className="text-2xl font-black text-purple-400 font-mono">{categories.length - 1}</div>
                      <div className="text-xs text-slate-400 font-mono tracking-wide">CATEGORIES</div>
                    </div>
                    
                    <div className="text-center p-4 bg-slate-900/50 border border-slate-700/30" style={{ borderRadius: '8px' }}>
                      <div className="text-2xl font-black text-orange-400 font-mono">{avgReadTime}m</div>
                      <div className="text-xs text-slate-400 font-mono tracking-wide">AVG READ</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <div className="text-sm text-slate-400 font-mono">
                      <span className="text-cyan-400 font-bold">{filteredAndSortedPosts.length}</span> resources match your filters
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-black text-white font-mono">
                    <Star className="w-6 h-6 inline mr-3 text-yellow-400" />
                    FEATURED VAULT
                  </h2>
                  <div className="h-px bg-gradient-to-r from-yellow-400 via-orange-400 to-transparent flex-1 ml-6"></div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <article 
                      key={post.id}
                      className="group bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 overflow-hidden"
                      style={{ borderRadius: '12px' }}
                    >
                      <div className="relative h-48">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="bg-yellow-400 text-black px-3 py-1 text-xs font-black font-mono" style={{ borderRadius: '6px' }}>
                            ⭐ FEATURED
                          </span>
                          {post.difficulty && (
                            <span className="bg-purple-500/90 text-white px-3 py-1 text-xs font-bold font-mono backdrop-blur-sm" style={{ borderRadius: '6px' }}>
                              {post.difficulty}
                            </span>
                          )}
                        </div>
                        
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-black text-white mb-2 group-hover:text-yellow-300 transition-colors font-mono">
                            {post.title}
                          </h3>
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-3 text-slate-300">
                              <span className="font-mono">{post.author}</span>
                              <span>•</span>
                              <span className="font-mono">{post.readTime}</span>
                            </div>
                            {post.downloads && (
                              <div className="flex items-center space-x-2 text-yellow-400">
                                <Download className="w-4 h-4" />
                                <span className="font-bold font-mono">{post.downloads}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="bg-slate-700/50 text-cyan-400 px-3 py-1 text-xs font-bold font-mono" style={{ borderRadius: '6px' }}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-3 font-black hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 flex items-center justify-center space-x-2 font-mono" style={{ borderRadius: '8px' }}>
                          <span>EXPLORE RESOURCE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-white font-mono">
                  <Layers className="w-6 h-6 inline mr-3 text-cyan-400" />
                  ALL RESOURCES
                </h2>
                <div className="h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent flex-1 ml-6"></div>
              </div>

              {filteredAndSortedPosts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-2xl font-black text-white mb-4 font-mono">NO RESOURCES FOUND</h3>
                  <p className="text-slate-400 mb-6 max-w-md mx-auto">
                    Try adjusting your search criteria or filters to discover more content.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('all');
                      setDifficultyFilter('all');
                      setTypeFilter('all');
                    }}
                    className="bg-cyan-500 text-white px-6 py-3 font-bold hover:bg-cyan-600 transition-colors font-mono"
                    style={{ borderRadius: '8px' }}
                  >
                    RESET ALL FILTERS
                  </button>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                  {regularPosts.map((post) => (
                    <article 
                      key={post.id}
                      className={`group bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden ${
                        viewMode === 'list' ? 'flex h-32' : 'h-80'
                      }`}
                      style={{ borderRadius: '12px' }}
                    >
                      <div className={`relative ${viewMode === 'list' ? 'w-32 h-32' : 'h-40'}`}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        <div className="absolute top-2 left-2">
                          <span className="bg-slate-900/90 text-white px-2 py-1 text-xs font-bold font-mono backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                            {post.type}
                          </span>
                        </div>
                        
                        {viewMode === 'grid' && (
                          <div className="absolute bottom-2 right-2 flex gap-1">
                            <button className="p-1.5 bg-slate-900/90 text-white hover:bg-slate-800 transition-colors backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                              <Heart className="w-3 h-3" />
                            </button>
                            <button className="p-1.5 bg-slate-900/90 text-white hover:bg-slate-800 transition-colors backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                              <Bookmark className="w-3 h-3" />
                            </button>
                            <button className="p-1.5 bg-slate-900/90 text-white hover:bg-slate-800 transition-colors backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                              <Share2 className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="font-black text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2 font-mono text-sm">
                            {post.title}
                          </h3>
                          
                          {viewMode === 'grid' && (
                            <>
                              <p className="text-slate-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                                {post.excerpt}
                              </p>

                              <div className="flex flex-wrap gap-1 mb-3">
                                {post.tags.slice(0, 2).map((tag, index) => (
                                  <span key={index} className="bg-slate-700/50 text-cyan-400 px-2 py-0.5 text-xs font-bold font-mono" style={{ borderRadius: '4px' }}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2 text-slate-500">
                              <span className="font-bold font-mono">{post.author}</span>
                              <span>•</span>
                              <span className="font-mono">{post.readTime}</span>
                            </div>
                            {post.downloads && (
                              <div className="flex items-center space-x-1 text-cyan-400">
                                <Download className="w-3 h-3" />
                                <span className="font-bold font-mono">{post.downloads}</span>
                              </div>
                            )}
                          </div>
                          
                          {viewMode === 'grid' && (
                            <button className="w-full bg-cyan-500 text-white px-3 py-2 hover:bg-cyan-600 transition-all duration-300 text-xs font-black flex items-center justify-center space-x-2 font-mono" style={{ borderRadius: '6px' }}>
                              <span>READ MORE</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
