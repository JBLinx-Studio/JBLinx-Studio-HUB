
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Gamepad2, Code, BookOpen, Database, FileText, Sparkles, Grid, List, Filter, Star, TrendingUp, Calendar, Settings, BarChart3, SortAsc, SortDesc, Eye, Heart, Share2, Bookmark, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const iconMap = {
    FileText,
    Code,
    Gamepad2,
    BookOpen,
    Download,
    Database,
    Sparkles
  };

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDifficulty = difficultyFilter === 'all' || post.difficulty === difficultyFilter;
      return matchesCategory && matchesSearch && matchesDifficulty;
    });

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'downloads':
          comparison = (b.downloads || 0) - (a.downloads || 0);
          break;
        case 'readTime':
          comparison = parseInt(a.readTime) - parseInt(b.readTime);
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'author':
          comparison = a.author.localeCompare(b.author);
          break;
        default:
          comparison = new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

    return filtered;
  }, [activeCategory, searchTerm, sortBy, sortOrder, difficultyFilter]);

  const featuredPosts = filteredAndSortedPosts.filter(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  const stats = {
    totalPosts: blogPosts.length,
    totalDownloads: blogPosts.reduce((sum, post) => sum + (post.downloads || 0), 0),
    categories: categories.length - 1,
    avgRating: 4.8,
    totalViews: "245K+",
    activeUsers: "12.3K"
  };

  const sortOptions = [
    { value: 'date', label: 'Latest First', icon: Calendar },
    { value: 'downloads', label: 'Most Popular', icon: TrendingUp },
    { value: 'readTime', label: 'Quick Reads', icon: Clock },
    { value: 'title', label: 'Alphabetical', icon: BookOpen },
    { value: 'author', label: 'By Author', icon: User }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      
      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/8 via-purple-500/5 to-pink-500/8"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-lg blur-3xl transform rotate-12"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-lg blur-3xl transform -rotate-12"></div>
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
              {/* Floating Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-2xl px-8 py-3 mb-8 backdrop-blur-sm shadow-xl">
                <Sparkles className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-base font-bold text-cyan-300 tracking-wide">DEVELOPER RESOURCES HUB</span>
              </div>
              
              {/* Main Heading with Enhanced Typography */}
              <div className="space-y-4 mb-8">
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                  <span className="block">DEV</span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    CHRONICLES
                  </span>
                </h1>
                
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
                
                <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
                  Comprehensive guides, cutting-edge tutorials, and expert insights 
                  <br />
                  <span className="text-cyan-400 font-bold">for developers by developers</span>
                </p>
              </div>

              {/* Enhanced Search Section */}
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search through our extensive knowledge base..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-16 pr-6 py-5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none backdrop-blur-sm text-lg shadow-xl"
                  />
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="absolute right-6 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Advanced Controls Bar */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {/* Sort Controls */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSortMenu(!showSortMenu)}
                      className="flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-all backdrop-blur-sm text-white"
                    >
                      <SortAsc className="w-4 h-4" />
                      <span>Sort: {sortOptions.find(opt => opt.value === sortBy)?.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {showSortMenu && (
                      <div className="absolute top-full mt-2 w-64 bg-gray-900 border border-gray-700 rounded-xl shadow-xl z-50 backdrop-blur-xl">
                        {sortOptions.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => {
                              setSortBy(option.value);
                              setShowSortMenu(false);
                            }}
                            className={`w-full flex items-center space-x-3 px-4 py-3 hover:bg-gray-800 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                              sortBy === option.value ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300'
                            }`}
                          >
                            <option.icon className="w-4 h-4" />
                            <span>{option.label}</span>
                          </button>
                        ))}
                        <div className="border-t border-gray-700 p-2">
                          <button
                            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                            className="w-full flex items-center justify-center space-x-2 px-3 py-2 hover:bg-gray-800 rounded-lg transition-colors text-gray-300"
                          >
                            {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                            <span>{sortOrder === 'asc' ? 'Ascending' : 'Descending'}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex bg-white/10 border border-white/20 rounded-xl p-1 backdrop-blur-sm">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-3 rounded-lg transition-all ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:text-white'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quick Action Buttons */}
                  <button
                    onClick={() => setShowStats(!showStats)}
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-all backdrop-blur-sm text-white"
                  >
                    <BarChart3 className="w-4 h-4" />
                    <span>Analytics</span>
                  </button>

                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-all backdrop-blur-sm text-white"
                  >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                  </button>
                </div>

                {/* Enhanced Categories */}
                <div className="flex flex-wrap justify-center gap-3">
                  {categories.slice(0, 8).map((category) => {
                    const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center space-x-3 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-xl scale-105'
                            : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/20 hover:scale-105'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-bold">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overlay */}
        {showStats && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 max-w-4xl w-full shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">Platform Analytics</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                </div>
                <button
                  onClick={() => setShowStats(false)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-cyan-400 mb-3">{stats.totalPosts}</div>
                  <div className="text-gray-300 font-medium">Total Resources</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-green-400 mb-3">{stats.totalDownloads.toLocaleString()}+</div>
                  <div className="text-gray-300 font-medium">Downloads</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-purple-400 mb-3">{stats.categories}</div>
                  <div className="text-gray-300 font-medium">Categories</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-yellow-400 mb-3">{stats.avgRating}/5</div>
                  <div className="text-gray-300 font-medium">Average Rating</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-blue-400 mb-3">{stats.totalViews}</div>
                  <div className="text-gray-300 font-medium">Total Views</div>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-pink-400 mb-3">{stats.activeUsers}</div>
                  <div className="text-gray-300 font-medium">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters Overlay */}
        {showFilters && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 max-w-2xl w-full shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">Advanced Filters</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                </div>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-8">
                <div>
                  <label className="block text-white font-bold mb-4 text-lg">Difficulty Level</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['all', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                      <button
                        key={level}
                        onClick={() => setDifficultyFilter(level)}
                        className={`p-4 rounded-xl font-medium transition-all ${
                          difficultyFilter === level
                            ? 'bg-cyan-500 text-white'
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {level === 'all' ? 'All Levels' : level}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setDifficultyFilter('all');
                      setActiveCategory('all');
                      setSearchTerm('');
                    }}
                    className="flex-1 p-4 bg-red-500/20 border border-red-500/50 text-red-400 rounded-xl hover:bg-red-500/30 transition-all font-medium"
                  >
                    Reset Filters
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="flex-1 p-4 bg-cyan-500 text-white rounded-xl hover:bg-cyan-600 transition-all font-medium"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Summary */}
        <section className="py-6 border-y border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="text-gray-300">
                <span className="text-2xl font-black text-cyan-400">{filteredAndSortedPosts.length}</span> 
                <span className="ml-2 text-lg">resources found</span>
                {searchTerm && <span className="ml-2 text-cyan-400">for "{searchTerm}"</span>}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">Sorted by: {sortOptions.find(opt => opt.value === sortBy)?.label}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        {featuredPosts.length > 0 && (
          <section className="py-12 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-b border-white/10">
            <div className="container mx-auto px-6">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-black text-white mb-4">
                  <span className="text-yellow-400">★</span> FEATURED CONTENT <span className="text-yellow-400">★</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article 
                    key={post.id}
                    className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 shadow-2xl"
                  >
                    <div className="relative h-64">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 flex gap-3">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-xl text-sm font-black shadow-lg">
                          ⭐ FEATURED
                        </span>
                        <span className="bg-black/80 text-white px-4 py-2 rounded-xl text-sm font-bold backdrop-blur-sm">
                          {post.type}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-yellow-300 transition-colors">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <p className="text-gray-300 mb-6 text-base leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-4">
                          <span className="font-medium">{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                          {post.downloads && (
                            <>
                              <span>•</span>
                              <span className="text-yellow-400 font-bold">{post.downloads} downloads</span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-4 rounded-2xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 font-black text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl">
                        <span>EXPLORE NOW</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Content Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {filteredAndSortedPosts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-8xl mb-6">📚</div>
                <h3 className="text-4xl font-black text-white mb-4">No Content Found</h3>
                <p className="text-xl text-gray-400 mb-8">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setDifficultyFilter('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-2xl hover:from-cyan-600 hover:to-purple-600 transition-all font-bold text-lg"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                {/* Section Heading */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-black text-white mb-4">
                    ALL <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">RESOURCES</span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full"></div>
                </div>

                <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' : 'space-y-6'}>
                  {regularPosts.map((post) => (
                    <article 
                      key={post.id}
                      className={`group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 shadow-xl ${
                        viewMode === 'list' ? 'flex' : ''
                      }`}
                    >
                      <div className={`relative ${viewMode === 'list' ? 'w-64 h-36' : 'h-48'}`}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        
                        <div className="absolute top-3 left-3 flex gap-2">
                          {post.featured && (
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-xs font-black">
                              FEATURED
                            </span>
                          )}
                          <span className="bg-black/80 text-white px-3 py-1 rounded-lg text-xs font-bold backdrop-blur-sm">
                            {post.type}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3 flex gap-2">
                          <button className="p-2 bg-black/60 text-white rounded-lg hover:bg-black/80 transition-colors backdrop-blur-sm">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-black/60 text-white rounded-lg hover:bg-black/80 transition-colors backdrop-blur-sm">
                            <Bookmark className="w-4 h-4" />
                          </button>
                          <button className="p-2 bg-black/60 text-white rounded-lg hover:bg-black/80 transition-colors backdrop-blur-sm">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1">
                        <h3 className="font-black text-white mb-3 group-hover:text-cyan-300 transition-colors text-lg line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="bg-white/10 text-cyan-400 px-2 py-1 rounded-lg text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-cyan-400 font-bold">
                              <Download className="w-4 h-4" />
                              <span>{post.downloads}</span>
                            </div>
                          )}
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-3 rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-sm font-bold flex items-center justify-center space-x-2 shadow-lg">
                          <span>READ MORE</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
