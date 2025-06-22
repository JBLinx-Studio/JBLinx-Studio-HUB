
import React, { useState, useMemo } from 'react';
import { Search, Filter, Clock, Download, User, ArrowRight, Gamepad2, Code, BookOpen, Database, FileText, Sparkles, Eye, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [difficultyFilter, setDifficultyFilter] = useState('all');

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
        {/* Compact Hero */}
        <section className="py-12 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Developer <span className="text-cyan-400">Resources</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                Comprehensive collection of development guides, tutorials, eBooks, and project insights.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">{stats.totalPosts}</div>
                  <div className="text-sm text-gray-300">Resources</div>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">{stats.totalDownloads}+</div>
                  <div className="text-sm text-gray-300">Downloads</div>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">{stats.categories}</div>
                  <div className="text-sm text-gray-300">Categories</div>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">{stats.avgRating}/5</div>
                  <div className="text-sm text-gray-300">Avg Rating</div>
                </div>
              </div>
            </div>

            {/* Advanced Search and Filters */}
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, content, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              {/* Filter Controls */}
              <div className="flex flex-wrap justify-center gap-4">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="date">Latest First</option>
                  <option value="downloads">Most Downloaded</option>
                  <option value="readTime">Quick Reads</option>
                </select>

                <select 
                  value={difficultyFilter} 
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => {
                  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        activeCategory === category.id
                          ? 'bg-cyan-500 text-white shadow-lg scale-105'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/20'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="font-medium">{category.name}</span>
                      <span className="bg-white/20 rounded-full px-2 py-1 text-xs">
                        {category.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Results Summary */}
        <section className="py-6 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="text-gray-300">
                Showing <span className="text-cyan-400 font-medium">{filteredAndSortedPosts.length}</span> results
                {searchTerm && (
                  <span> for "<span className="text-white">{searchTerm}</span>"</span>
                )}
              </div>
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear search
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {filteredAndSortedPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-white mb-2">No content found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAndSortedPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="group bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                          {post.type}
                        </span>
                        {post.difficulty && (
                          <span className="bg-purple-500/80 text-white px-2 py-1 rounded-md text-xs font-medium">
                            {post.difficulty}
                          </span>
                        )}
                      </div>
                      {post.featured && (
                        <div className="absolute top-3 right-3">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-white/10 text-xs text-gray-300 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-gray-400 px-2 py-1">
                            +{post.tags.length - 3} more
                          </span>
                        )}
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
                        </div>
                        <span className="text-gray-400">{post.date}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm">
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-cyan-400">
                              <Download className="w-4 h-4" />
                              <span>{post.downloads}</span>
                            </div>
                          )}
                        </div>
                        <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors">
                          <span className="text-sm font-medium">Read</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
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
