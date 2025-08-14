
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Filter, Grid, List, Star, TrendingUp, Calendar, Eye, Heart, Share2, Bookmark, ChevronDown, Settings, Sparkles } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      <main className="pt-20">
        {/* Enhanced Background - Match Website Theme */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          {/* Main ambient lighting */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-500/8 to-amber-500/6 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-emerald-500/8 to-teal-500/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          
          {/* Secondary lighting layers */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-400/6 to-orange-400/4 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
          
          {/* Enhanced premium grid overlay */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(251, 146, 60, 0.25) 1px, transparent 1px),
                linear-gradient(90deg, rgba(251, 146, 60, 0.25) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}></div>
          </div>

          {/* Sophisticated geometric accents */}
          <div className="absolute top-1/6 left-1/6 w-3 h-3 bg-orange-400/40 animate-pulse border border-orange-400/30"></div>
          <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse border border-emerald-400/30" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-amber-400/30 animate-pulse border border-amber-400/20" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-1/6 right-1/6 w-3 h-3 bg-teal-400/30 animate-pulse border border-teal-400/20" style={{animationDelay: '6s'}}></div>

          {/* Premium accent lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"></div>
        </div>

        {/* Compact Hero Section */}
        <section className="py-8 border-b border-zinc-800/50 relative z-10">
          <div className="container mx-auto px-6">
            {/* Header with Badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-zinc-800/80 border border-zinc-700/50 px-4 py-2 mb-3 backdrop-blur-sm">
                <Sparkles className="w-3 h-3 mr-2 text-orange-400" />
                <span className="text-xs font-bold text-orange-400 font-mono tracking-wider">LEARNING HUB</span>
              </div>
              
              <h1 className="text-3xl font-black text-white mb-2 font-mono tracking-tight">
                DEV<span className="text-orange-400">BLOG</span>
              </h1>
              <div className="w-16 h-0.5 bg-orange-400 mx-auto mb-3"></div>
              <p className="text-sm text-zinc-400 leading-relaxed font-mono max-w-md mx-auto">
                Technical insights, development guides, and behind-the-scenes content
              </p>
            </div>

            {/* Quick Stats - Compact Grey Panels */}
            <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
              <div className="bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm p-3 text-center">
                <div className="text-lg font-bold text-orange-400 font-mono">{blogPosts.length}</div>
                <div className="text-xs text-zinc-400 font-mono">Posts</div>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm p-3 text-center">
                <div className="text-lg font-bold text-emerald-400 font-mono">{blogPosts.reduce((sum, post) => sum + (post.downloads || 0), 0)}</div>
                <div className="text-xs text-zinc-400 font-mono">Downloads</div>
              </div>
              <div className="bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm p-3 text-center">
                <div className="text-lg font-bold text-amber-400 font-mono">{categories.length - 1}</div>
                <div className="text-xs text-zinc-400 font-mono">Categories</div>
              </div>
            </div>

            {/* Compact Search & Controls Panel */}
            <div className="bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm p-4 mb-4">
              <div className="grid md:grid-cols-12 gap-3 items-center">
                {/* Search */}
                <div className="md:col-span-5 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-zinc-900/50 border border-zinc-700/50 text-white placeholder-zinc-400 focus:border-orange-400/50 focus:outline-none text-sm font-mono"
                  />
                </div>

                {/* Category Pills */}
                <div className="md:col-span-5 flex flex-wrap gap-1">
                  {categories.slice(0, 5).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-1 text-xs font-bold font-mono transition-all ${
                        activeCategory === category.id
                          ? 'bg-orange-500/20 border border-orange-400/50 text-orange-300'
                          : 'bg-zinc-700/50 border border-zinc-600/50 text-zinc-300 hover:bg-zinc-600/50'
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
                    className="bg-zinc-900/50 border border-zinc-700/50 px-2 py-1 text-white text-xs font-mono"
                  >
                    <option value="date">Latest</option>
                    <option value="downloads">Popular</option>
                    <option value="readTime">Quick Read</option>
                    <option value="title">A-Z</option>
                  </select>
                  
                  <div className="flex bg-zinc-900/50 border border-zinc-700/50">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-1.5 ${viewMode === 'grid' ? 'bg-orange-500/20 text-orange-300' : 'text-zinc-400'}`}
                    >
                      <Grid className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-1.5 ${viewMode === 'list' ? 'bg-orange-500/20 text-orange-300' : 'text-zinc-400'}`}
                    >
                      <List className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="mt-3 text-xs text-zinc-400 font-mono">
                <span className="text-orange-400 font-bold">{filteredAndSortedPosts.length}</span> posts found
                {searchTerm && <span> for "{searchTerm}"</span>}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-6">
            {/* Featured Posts - Grey Panel Style */}
            {featuredPosts.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-zinc-800/50 border border-zinc-700/50 px-3 py-1 backdrop-blur-sm">
                    <Star className="w-3 h-3 mr-2 text-amber-400" />
                    <span className="text-xs font-bold text-amber-400 font-mono">FEATURED</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-amber-400/50 to-transparent flex-1 ml-4"></div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-4">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="group bg-zinc-800/50 border border-zinc-700/50 hover:border-amber-400/50 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                    >
                      <div className="flex h-28">
                        <div className="w-28 relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="bg-amber-500/90 text-zinc-950 px-2 py-0.5 text-xs font-bold font-mono">
                              FEATURED
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-1 p-3 flex flex-col justify-between">
                          <div>
                            <h3 className="font-bold text-white mb-1 group-hover:text-amber-300 transition-colors line-clamp-2 font-mono text-sm">
                              {post.title}
                            </h3>
                            <p className="text-zinc-400 text-xs mb-2 line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2 text-zinc-500 font-mono">
                              <span>{post.author}</span>
                              <span>•</span>
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
            )}

            {/* All Posts Section */}
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center bg-zinc-800/50 border border-zinc-700/50 px-3 py-1 backdrop-blur-sm">
                  <span className="text-xs font-bold text-orange-400 font-mono">ALL POSTS</span>
                </div>
                <div className="h-px bg-gradient-to-r from-orange-400/50 to-transparent flex-1 ml-4"></div>
              </div>

              {filteredAndSortedPosts.length === 0 ? (
                <div className="text-center py-12 bg-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-mono">No posts found</h3>
                  <p className="text-zinc-400 mb-4 text-sm">Try adjusting your search or filters</p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setActiveCategory('all');
                    }}
                    className="bg-orange-500/20 border border-orange-400/50 text-orange-300 px-4 py-2 text-sm font-bold font-mono hover:bg-orange-500/30 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3' : 'space-y-2'}>
                  {regularPosts.map((post) => (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className={`group bg-zinc-800/50 border border-zinc-700/50 hover:border-orange-400/50 transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                        viewMode === 'list' ? 'flex h-20' : 'h-56'
                      }`}
                    >
                      <div className={`relative ${viewMode === 'list' ? 'w-20 h-20' : 'h-28'}`}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-zinc-900/90 text-zinc-300 px-2 py-0.5 text-xs font-bold font-mono backdrop-blur-sm">
                            {post.type}
                          </span>
                        </div>
                        
                        {viewMode === 'grid' && (
                          <div className="absolute bottom-2 right-2 flex gap-1">
                            <button className="p-1 bg-zinc-900/90 text-white hover:bg-zinc-800 transition-colors backdrop-blur-sm">
                              <Heart className="w-3 h-3" />
                            </button>
                            <button className="p-1 bg-zinc-900/90 text-white hover:bg-zinc-800 transition-colors backdrop-blur-sm">
                              <Bookmark className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 p-3 flex flex-col justify-between">
                        <div>
                          <h3 className="font-bold text-white mb-1 group-hover:text-orange-300 transition-colors line-clamp-2 font-mono text-sm">
                            {post.title}
                          </h3>
                          
                          {viewMode === 'grid' && (
                            <>
                              <p className="text-zinc-400 text-xs mb-2 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex flex-wrap gap-1 mb-2">
                                {post.tags.slice(0, 2).map((tag, index) => (
                                  <span key={index} className="bg-zinc-700/50 text-orange-400 px-2 py-0.5 text-xs font-mono">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2 text-zinc-500 font-mono">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-orange-400">
                              <Download className="w-3 h-3" />
                              <span className="font-bold font-mono">{post.downloads}</span>
                            </div>
                          )}
                        </div>
                        
                        {viewMode === 'grid' && (
                          <button className="w-full bg-orange-500/20 border border-orange-400/50 text-orange-300 px-3 py-2 hover:bg-orange-500/30 transition-all duration-300 text-xs font-bold font-mono flex items-center justify-center space-x-2 mt-2">
                            <span>READ MORE</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </Link>
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
