
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Gamepad2, Code, BookOpen, Database, FileText, Sparkles, Grid, List } from 'lucide-react';
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
        {/* Compact Hero Section */}
        <section className="py-8 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                Developer <span className="text-cyan-400">Resources Hub</span>
              </h1>
              <p className="text-gray-300 max-w-2xl mx-auto mb-4">
                Explore our comprehensive collection of development guides, tutorials, eBooks, and project insights.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-3 max-w-2xl mx-auto">
                <div className="bg-white/5 border border-white/20 rounded-lg p-3">
                  <div className="text-xl font-bold text-cyan-400">{stats.totalPosts}</div>
                  <div className="text-xs text-gray-300">Resources</div>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-3">
                  <div className="text-xl font-bold text-green-400">{stats.totalDownloads}+</div>
                  <div className="text-xs text-gray-300">Downloads</div>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-3">
                  <div className="text-xl font-bold text-purple-400">{stats.categories}</div>
                  <div className="text-xs text-gray-300">Categories</div>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-3">
                  <div className="text-xl font-bold text-yellow-400">{stats.avgRating}/5</div>
                  <div className="text-xs text-gray-300">Rating</div>
                </div>
              </div>
            </div>

            {/* Compact Search and Filters */}
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none text-sm"
                />
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/5 border border-white/20 rounded-lg px-3 py-1 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="date">Latest</option>
                  <option value="downloads">Popular</option>
                  <option value="readTime">Quick</option>
                </select>

                <select 
                  value={difficultyFilter} 
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="bg-white/5 border border-white/20 rounded-lg px-3 py-1 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                <div className="flex items-center gap-1 border border-white/20 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1 rounded ${viewMode === 'grid' ? 'bg-cyan-500' : 'hover:bg-white/10'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1 rounded ${viewMode === 'list' ? 'bg-cyan-500' : 'hover:bg-white/10'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-cyan-500 text-white scale-105'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                      }`}
                    >
                      <IconComponent className="w-3 h-3" />
                      <span>{category.name}</span>
                      <span className="bg-white/20 rounded-full px-1 text-xs">
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
        <section className="py-3 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between text-sm">
              <div className="text-gray-300">
                <span className="text-cyan-400 font-medium">{filteredAndSortedPosts.length}</span> results
                {searchTerm && <span> for "{searchTerm}"</span>}
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

        {/* Main Content */}
        <section className="py-6">
          <div className="container mx-auto px-6">
            {filteredAndSortedPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-bold text-white mb-2">No content found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
                {filteredAndSortedPosts.map((post) => (
                  <article 
                    key={post.id}
                    className={`group bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-36'}`}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 flex gap-1">
                        {post.featured && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                            Featured
                          </span>
                        )}
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {post.type}
                        </span>
                        {post.difficulty && (
                          <span className="bg-purple-500/80 text-white px-2 py-1 rounded text-xs">
                            {post.difficulty}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-4 flex-1">
                      <h3 className={`font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors ${
                        viewMode === 'list' ? 'text-base line-clamp-1' : 'text-lg line-clamp-2'
                      }`}>
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-white/10 text-xs text-gray-300 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-2">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                          {post.downloads && (
                            <>
                              <span>•</span>
                              <Download className="w-3 h-3" />
                              <span>{post.downloads}</span>
                            </>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </div>
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
