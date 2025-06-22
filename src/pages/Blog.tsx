
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Crown, Star, Zap, BookOpen, Code, Gamepad2, Database, Sparkles, Search, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 15 },
    { id: 'devlog', name: 'Dev Logs', icon: Code, count: 6 },
    { id: 'games', name: 'Game Dev', icon: Gamepad2, count: 4 },
    { id: 'tech', name: 'Technology', icon: Database, count: 5 }
  ];

  const posts = [
    {
      id: 1,
      title: "The Sacred Art of Game Development: Creating Divine Digital Realms",
      excerpt: "Journey through our blessed process of crafting immersive gaming experiences that transcend ordinary entertainment and touch the sacred realm of digital artistry.",
      category: 'games',
      author: 'JBLinx Sacred Circle',
      date: '2024-01-15',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop',
      featured: true,
      tags: ['Unity', 'Sacred Design', 'Digital Art', 'Orthodox Gaming']
    },
    {
      id: 2,
      title: "Orthodox Web Architecture: Building with Divine Principles",
      excerpt: "Discover how we apply ancient Orthodox principles to modern web development, creating digital sanctuaries that serve both functionality and spiritual purpose.",
      category: 'tech',
      author: 'Sacred Code Monastery',
      date: '2024-01-12',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      featured: false,
      tags: ['React', 'Orthodox Design', 'Sacred Code', 'Web Sanctuaries']
    },
    {
      id: 3,
      title: "Dev Log #001: The Genesis of Sacred Software",
      excerpt: "First chronicle in our sacred development journey - documenting the birth of our latest Orthodox-inspired digital creation with divine attention to detail.",
      category: 'devlog',
      author: 'Divine Development Circle',
      date: '2024-01-10',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
      featured: false,
      tags: ['DevLog', 'Sacred Process', 'Creation Chronicle', 'Divine Development']
    },
    {
      id: 4,
      title: "The Theology of Clean Code: Writing with Sacred Intent",
      excerpt: "Exploring how Orthodox theological principles can guide us toward writing cleaner, more purposeful code that serves both human needs and divine order.",
      category: 'tech',
      author: 'Code Monastery Fathers',
      date: '2024-01-08',
      readTime: '14 min',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
      featured: true,
      tags: ['Clean Code', 'Orthodox Principles', 'Sacred Programming', 'Divine Order']
    },
    {
      id: 5,
      title: "Mobile Sanctuaries: Flutter Apps for the Sacred Journey",
      excerpt: "Creating mobile applications that serve as portable sanctuaries, bringing peace and purpose to users' daily digital interactions through Orthodox-inspired design.",
      category: 'tech',
      author: 'Mobile Monastery',
      date: '2024-01-05',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop',
      featured: false,
      tags: ['Flutter', 'Mobile Sacred', 'Digital Sanctuary', 'Orthodox Mobile']
    },
    {
      id: 6,
      title: "Game Chronicles: Building Worlds with Sacred Purpose",
      excerpt: "Behind the sacred scenes of our latest game development - creating immersive worlds that not only entertain but inspire and elevate the human spirit.",
      category: 'games',
      author: 'Sacred World Builders',
      date: '2024-01-03',
      readTime: '11 min',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop',
      featured: false,
      tags: ['Game Development', 'Unity', 'Sacred Worlds', 'Divine Gaming']
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      
      {/* Orthodox Sacred Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-20 h-20 border border-yellow-400/20 rotate-45"
              style={{
                left: `${(i * 12) % 100}%`,
                top: `${(i * 8) % 100}%`,
                borderRadius: '20%',
                animation: `pulse ${3 + (i % 3)}s infinite`
              }}
            />
          ))}
        </div>
      </div>

      <main className="relative z-10 pt-24">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-full px-6 py-3 mb-6">
                <Crown className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-white/90 font-medium">Sacred Digital Chronicles</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-white mb-6">
                Sacred <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Blog</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our collection of sacred digital wisdom, development insights, and creative chronicles.
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  {/* Search Input */}
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search sacred chronicles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 transition-colors"
                    />
                  </div>
                  
                  {/* Category Filter */}
                  <div className="flex gap-2 overflow-x-auto">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                          activeCategory === category.id
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white'
                            : 'bg-white/5 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {React.createElement(category.icon, { className: "w-4 h-4" })}
                        <span>{category.name}</span>
                        <span className="bg-white/20 rounded-full px-2 py-1 text-xs">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="flex items-center mb-8">
                <Star className="w-6 h-6 text-yellow-400 mr-3" />
                <h2 className="text-3xl font-bold text-white">Featured Posts</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.slice(0, 2).map((post) => (
                  <article key={post.id} className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <span className="bg-yellow-500/20 backdrop-blur-sm text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="text-xs text-yellow-400 font-semibold uppercase tracking-wide mb-2">
                        {categories.find(cat => cat.id === post.category)?.name || 'Sacred'}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-300 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">All Posts</h2>
              <div className="text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article key={post.id} className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name || 'Sacred'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-yellow-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-white/10 text-white px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 text-yellow-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📜</div>
                <h3 className="text-2xl font-bold text-white mb-2">No Sacred Chronicles Found</h3>
                <p className="text-gray-400 mb-6">Try adjusting your search or category filter</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-12 text-center max-w-4xl mx-auto">
              <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-6 animate-pulse" />
              
              <h2 className="text-3xl font-bold text-white mb-4">
                Join Our Sacred Digital Community
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Receive divine inspiration and sacred development wisdom directly from our blessed digital monastery.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your sacred email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                />
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                  <span>Subscribe</span>
                  <Crown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
