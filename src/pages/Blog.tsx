
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Filter, Grid, List, Star, TrendingUp, Calendar, Eye, Heart, Share2, Bookmark, ChevronDown, Settings } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogData';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showQuickFilters, setShowQuickFilters] = useState(false);

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

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="pt-20">
        {/* Compact Hero - No Wasted Space */}
        <section className="py-8 border-b border-slate-800">
          <div className="container mx-auto px-6">
            {/* Minimal Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-black text-white mb-2 font-mono tracking-tight">
                  DEV<span className="text-cyan-400">BLOG</span>
                </h1>
                <div className="w-16 h-0.5 bg-cyan-400"></div>
              </div>
              
              {/* Quick Stats - Compact */}
              <div className="hidden md:flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="text-xl font-bold text-cyan-400">{blogPosts.length}</div>
                  <div className="text-slate-400">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">{blogPosts.reduce((sum, post) => sum + (post.downloads || 0), 0)}</div>
                  <div className="text-slate-400">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-400">{categories.length - 1}</div>
                  <div className="text-slate-400">Categories</div>
                </div>
              </div>
            </div>

            {/* Compact Search & Controls */}
            <div className="grid md:grid-cols-12 gap-4 items-center">
              {/* Search */}
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none text-sm"
                />
              </div>

              {/* Category Tabs */}
              <div className="md:col-span-5 flex flex-wrap gap-2">
                {categories.slice(0, 5).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* View Controls */}
              <div className="md:col-span-2 flex items-center justify-end space-x-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-800 border border-slate-700 rounded-md px-2 py-1 text-white text-xs"
                >
                  <option value="date">Latest</option>
                  <option value="downloads">Popular</option>
                  <option value="readTime">Quick Read</option>
                  <option value="title">A-Z</option>
                </select>
                
                <div className="flex bg-slate-800 border border-slate-700 rounded-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-slate-400'}`}
                  >
                    <Grid className="w-3 h-3" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-slate-400'}`}
                  >
                    <List className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-4 text-sm text-slate-400">
              <span className="text-cyan-400 font-medium">{filteredAndSortedPosts.length}</span> posts found
              {searchTerm && <span> for "{searchTerm}"</span>}
            </div>
          </div>
        </section>

        {/* IMMEDIATE CONTENT - No Scrolling Required */}
        <section className="py-8">
          <div className="container mx-auto px-6">
            {/* Featured Posts - Prominent but Compact */}
            {featuredPosts.length > 0 && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-black text-white font-mono">
                    <span className="text-yellow-400">★</span> FEATURED
                  </h2>
                  <div className="h-px bg-gradient-to-r from-yellow-400 to-transparent flex-1 ml-4"></div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <article 
                      key={post.id}
                      className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden"
                      style={{ borderRadius: '8px' }} // Square corners
                    >
                      <div className="flex h-32">
                        <div className="w-32 relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="bg-yellow-400 text-black px-2 py-0.5 text-xs font-bold" style={{ borderRadius: '4px' }}>
                              FEATURED
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-1 p-4 flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors line-clamp-2 font-mono text-sm">
                              {post.title}
                            </h3>
                            <p className="text-slate-400 text-xs mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2 text-slate-500">
                              <span>{post.author}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                            {post.downloads && (
                              <div className="flex items-center space-x-1 text-yellow-400">
                                <Download className="w-3 h-3" />
                                <span className="font-medium">{post.downloads}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts - Immediate Visibility */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-white font-mono">
                  ALL <span className="text-cyan-400">POSTS</span>
                </h2>
                <div className="h-px bg-gradient-to-r from-cyan-400 to-transparent flex-1 ml-4"></div>
              </div>

              {filteredAndSortedPosts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-white mb-2">No posts found</h3>
                  <p className="text-slate-400 mb-4">Try adjusting your search or filters</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('all');
                    }}
                    className="bg-cyan-500 text-white px-4 py-2 text-sm font-medium hover:bg-cyan-600 transition-colors"
                    style={{ borderRadius: '6px' }}
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'space-y-3'}>
                  {regularPosts.map((post) => (
                    <article 
                      key={post.id}
                      className={`group bg-slate-800 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden ${
                        viewMode === 'list' ? 'flex h-24' : 'h-64'
                      }`}
                      style={{ borderRadius: '8px' }} // Square corners
                    >
                      <div className={`relative ${viewMode === 'list' ? 'w-24 h-24' : 'h-32'}`}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-slate-900/80 text-white px-2 py-0.5 text-xs font-medium backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                            {post.type}
                          </span>
                        </div>
                        
                        {viewMode === 'grid' && (
                          <div className="absolute bottom-2 right-2 flex gap-1">
                            <button className="p-1 bg-slate-900/80 text-white hover:bg-slate-800 transition-colors backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                              <Heart className="w-3 h-3" />
                            </button>
                            <button className="p-1 bg-slate-900/80 text-white hover:bg-slate-800 transition-colors backdrop-blur-sm" style={{ borderRadius: '4px' }}>
                              <Bookmark className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 p-3 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors line-clamp-2 font-mono text-sm">
                            {post.title}
                          </h3>
                          
                          {viewMode === 'grid' && (
                            <p className="text-slate-400 text-xs mb-3 line-clamp-2">
                              {post.excerpt}
                            </p>
                          )}

                          {viewMode === 'grid' && (
                            <div className="flex flex-wrap gap-1 mb-3">
                              {post.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-0.5 text-xs" style={{ borderRadius: '4px' }}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2 text-slate-500">
                            <span className="font-medium">{post.author}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-cyan-400">
                              <Download className="w-3 h-3" />
                              <span className="font-medium">{post.downloads}</span>
                            </div>
                          )}
                        </div>
                        
                        {viewMode === 'grid' && (
                          <button className="w-full bg-cyan-500 text-white px-3 py-2 hover:bg-cyan-600 transition-all duration-300 text-xs font-medium flex items-center justify-center space-x-2 mt-3" style={{ borderRadius: '6px' }}>
                            <span>READ MORE</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
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
