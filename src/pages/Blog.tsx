
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Gamepad2, Code, BookOpen, Database, FileText, Sparkles, Grid, List, Filter, Star, TrendingUp, Calendar, Settings, BarChart3 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [showStats, setShowStats] = useState(false);

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
      switch (sortBy) {
        case 'downloads':
          return (b.downloads || 0) - (a.downloads || 0);
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [activeCategory, searchTerm, sortBy, difficultyFilter]);

  const featuredPosts = filteredAndSortedPosts.filter(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  const stats = {
    totalPosts: blogPosts.length,
    totalDownloads: blogPosts.reduce((sum, post) => sum + (post.downloads || 0), 0),
    categories: categories.length - 1,
    avgRating: 4.8
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      
      <main className="pt-20">
        {/* Compact Hero Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 via-purple-500/3 to-pink-500/5"></div>
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-6 py-2 mb-4 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-300">Developer Hub</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                  Development <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Resources</span>
                </h1>
                
                <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
                  Comprehensive guides, tutorials, and insights for developers
                </p>
              </div>
              
              {/* Quick Actions */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowStats(!showStats)}
                  className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-colors backdrop-blur-sm"
                  title="View Stats"
                >
                  <BarChart3 className="w-5 h-5 text-gray-300" />
                </button>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/15 transition-colors backdrop-blur-sm"
                  title="Filter Options"
                >
                  <Settings className="w-5 h-5 text-gray-300" />
                </button>
              </div>
            </div>

            {/* Compact Search and Categories */}
            <div className="space-y-4">
              <div className="relative max-w-lg">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none backdrop-blur-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category) => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/15 border border-white/20'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overlay */}
        {showStats && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 max-w-2xl w-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Platform Statistics</h3>
                <button
                  onClick={() => setShowStats(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stats.totalPosts}</div>
                  <div className="text-gray-300">Total Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{stats.totalDownloads.toLocaleString()}+</div>
                  <div className="text-gray-300">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{stats.categories}</div>
                  <div className="text-gray-300">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.avgRating}/5</div>
                  <div className="text-gray-300">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters Overlay */}
        {showFilters && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 max-w-lg w-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Filter Options</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-3">Sort By</label>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="date">Latest First</option>
                    <option value="downloads">Most Popular</option>
                    <option value="readTime">Quick Reads</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">Difficulty Level</label>
                  <select 
                    value={difficultyFilter} 
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="all">All Levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-3">View Mode</label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 p-3 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                    >
                      <Grid className="w-4 h-4 mx-auto" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 p-3 rounded-lg transition-all ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                    >
                      <List className="w-4 h-4 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Header */}
        <section className="py-4 border-y border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="text-gray-300">
                <span className="text-cyan-400 font-bold">{filteredAndSortedPosts.length}</span> resources found
                {searchTerm && <span className="ml-2">for "{searchTerm}"</span>}
              </div>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Featured Posts - Compact */}
        {featuredPosts.length > 0 && (
          <section className="py-8 bg-gradient-to-r from-purple-900/10 to-cyan-900/10">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-400 fill-current" />
                Featured Content
              </h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article 
                    key={post.id}
                    className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Featured
                        </span>
                        <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                          {post.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <div className="flex items-center space-x-3">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                          {post.downloads && (
                            <>
                              <span>•</span>
                              <span className="text-yellow-400">{post.downloads} downloads</span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 font-bold flex items-center justify-center space-x-2">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Content Grid - Immediate Visibility */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            {filteredAndSortedPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-white mb-3">No content found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
                {regularPosts.map((post) => (
                  <article 
                    key={post.id}
                    className={`group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-40'}`}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute top-2 left-2 flex gap-1">
                        {post.featured && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-bold">
                            Featured
                          </span>
                        )}
                        <span className="bg-black/70 text-white px-2 py-1 rounded-md text-xs">
                          {post.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors text-sm line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{post.readTime}</span>
                        {post.downloads && (
                          <div className="flex items-center space-x-1 text-cyan-400">
                            <Download className="w-3 h-3" />
                            <span>{post.downloads}</span>
                          </div>
                        )}
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 text-xs font-medium flex items-center justify-center space-x-1">
                        <span>Read More</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
