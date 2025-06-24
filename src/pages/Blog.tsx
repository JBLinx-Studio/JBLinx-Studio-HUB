
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Gamepad2, Code, BookOpen, Database, FileText, Sparkles, Grid, List, Filter, Star, TrendingUp, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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
        {/* Hero Section - Much Bigger and More Impressive */}
        <section className="py-20 relative overflow-hidden">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10"></div>
            <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/15 rounded-full blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-8 py-3 mb-8 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-lg font-semibold text-cyan-300">Developer Resource Hub</span>
                <div className="ml-3 bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  NEW
                </div>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                Discover. Learn.{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Create.
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
                Explore our comprehensive collection of development guides, tutorials, eBooks, and project insights. 
                Everything you need to level up your development skills.
              </p>
              
              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">{stats.totalPosts}</div>
                  <div className="text-sm lg:text-base text-gray-300">Resources</div>
                  <div className="mt-2 flex items-center text-xs text-cyan-300">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span>Growing</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">{stats.totalDownloads.toLocaleString()}+</div>
                  <div className="text-sm lg:text-base text-gray-300">Downloads</div>
                  <div className="mt-2 flex items-center text-xs text-green-300">
                    <Download className="w-3 h-3 mr-1" />
                    <span>Active</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">{stats.categories}</div>
                  <div className="text-sm lg:text-base text-gray-300">Categories</div>
                  <div className="mt-2 flex items-center text-xs text-purple-300">
                    <Grid className="w-3 h-3 mr-1" />
                    <span>Organized</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">{stats.avgRating}/5</div>
                  <div className="text-sm lg:text-base text-gray-300">Rating</div>
                  <div className="mt-2 flex items-center text-xs text-yellow-300">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    <span>Rated</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for tutorials, eBooks, dev logs, and more..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none text-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg px-4 py-2">
                  <span className="text-white font-medium">Search</span>
                </div>
              </div>

              {/* Enhanced Filter Controls */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Filter className="w-4 h-4 text-cyan-400" />
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-white focus:outline-none"
                  >
                    <option value="date" className="bg-gray-800">Latest First</option>
                    <option value="downloads" className="bg-gray-800">Most Popular</option>
                    <option value="readTime" className="bg-gray-800">Quick Reads</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-xl px-4 py-2 backdrop-blur-sm">
                  <Database className="w-4 h-4 text-purple-400" />
                  <select 
                    value={difficultyFilter} 
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="bg-transparent text-white focus:outline-none"
                  >
                    <option value="all" className="bg-gray-800">All Levels</option>
                    <option value="Beginner" className="bg-gray-800">Beginner</option>
                    <option value="Intermediate" className="bg-gray-800">Intermediate</option>
                    <option value="Advanced" className="bg-gray-800">Advanced</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 border border-white/20 rounded-xl p-1 bg-white/10 backdrop-blur-sm">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'grid' ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all duration-200 ${viewMode === 'list' ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' : 'hover:bg-white/10 text-gray-300'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Enhanced Category Filters */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-2xl text-sm transition-all duration-300 border backdrop-blur-sm ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white scale-105 shadow-lg shadow-cyan-500/25 border-cyan-400'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20 border-white/20 hover:scale-105'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium">{category.name}</span>
                      <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-bold">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Results Info */}
        <section className="py-4 border-y border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="text-gray-300 text-lg">
                <span className="text-cyan-400 font-bold text-xl">{filteredAndSortedPosts.length}</span> amazing resources found
                {searchTerm && <span className="ml-2">for "<span className="text-white font-medium">{searchTerm}</span>"</span>}
              </div>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="py-12 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl font-bold text-white mb-8 text-center">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Featured</span> Content
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article 
                    key={post.id}
                    className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
                  >
                    <div className="relative h-64">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                          ⭐ Featured
                        </span>
                        <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.type}
                        </span>
                      </div>
                      
                      {post.difficulty && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                            {post.difficulty}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm hover:bg-yellow-400/20 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-yellow-400">
                              <Download className="w-4 h-4" />
                              <span>{post.downloads} downloads</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-3 rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 font-bold shadow-lg hover:shadow-yellow-500/25 hover:scale-105 flex items-center justify-center space-x-2">
                        <span>Explore Now</span>
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
                <h3 className="text-3xl font-bold text-white mb-4">No content found</h3>
                <p className="text-gray-400 text-lg">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setDifficultyFilter('all');
                  }}
                  className="mt-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-200 font-medium"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-6'}>
                {regularPosts.map((post) => (
                  <article 
                    key={post.id}
                    className={`group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div className={`relative ${viewMode === 'list' ? 'w-64 h-40' : 'h-48'}`}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3 flex gap-2">
                        {post.featured && (
                          <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                            Featured
                          </span>
                        )}
                        <span className="bg-black/70 text-white px-3 py-1 rounded-full text-xs">
                          {post.type}
                        </span>
                        {post.difficulty && (
                          <span className="bg-purple-500/80 text-white px-2 py-1 rounded-full text-xs">
                            {post.difficulty}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1">
                      <h3 className={`font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors ${
                        viewMode === 'list' ? 'text-lg line-clamp-1' : 'text-xl line-clamp-2'
                      }`}>
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-white/10 text-xs text-gray-300 px-2 py-1 rounded-full hover:bg-cyan-400/20 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-cyan-400">
                              <Download className="w-3 h-3" />
                              <span>{post.downloads}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 font-medium flex items-center justify-center space-x-2 hover:scale-105">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
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
