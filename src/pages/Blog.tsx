
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Crown, Star, Zap, BookOpen, Code, Gamepad2, Database, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Sacred Writings', icon: BookOpen, count: 15 },
    { id: 'devlog', name: 'Divine Dev Logs', icon: Code, count: 6 },
    { id: 'games', name: 'Sacred Gaming', icon: Gamepad2, count: 4 },
    { id: 'tech', name: 'Holy Technology', icon: Database, count: 5 }
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
      tags: ['Unity', 'Sacred Design', 'Digital Art', 'Orthodox Gaming'],
      content: "In the realm of digital creation, we approach game development not merely as entertainment, but as sacred craft..."
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
      tags: ['React', 'Orthodox Design', 'Sacred Code', 'Web Sanctuaries'],
      content: "Web development becomes a form of digital monasticism when approached with proper reverence..."
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
      tags: ['DevLog', 'Sacred Process', 'Creation Chronicle', 'Divine Development'],
      content: "Today marks the beginning of our most ambitious sacred digital project..."
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
      tags: ['Clean Code', 'Orthodox Principles', 'Sacred Programming', 'Divine Order'],
      content: "In the tradition of monastic scribes who illuminated manuscripts with divine purpose..."
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
      tags: ['Flutter', 'Mobile Sacred', 'Digital Sanctuary', 'Orthodox Mobile'],
      content: "Every mobile application we create is designed to be a small sanctuary in the user's pocket..."
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
      tags: ['Game Development', 'Unity', 'Sacred Worlds', 'Divine Gaming'],
      content: "Our approach to game world creation begins with prayer and contemplation..."
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      
      {/* Sacred Orthodox Background */}
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
        
        {/* Divine Light Rays */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-yellow-400/20 via-transparent to-transparent transform -translate-x-1/2"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-orange-400/15 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-purple-400/15 via-transparent to-transparent"></div>
      </div>

      <main className="relative z-10 pt-24">
        {/* Sacred Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-full px-8 py-4 mb-8 group hover:scale-105 transition-all duration-300">
                <Crown className="w-6 h-6 text-yellow-400 mr-3 animate-pulse" />
                <span className="text-white/90 font-semibold tracking-wide">Sacred Digital Chronicles</span>
                <Sparkles className="w-5 h-5 text-orange-400 ml-3" />
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
                Sacred
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 ml-4">
                  Writings
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Where divine inspiration meets digital innovation. Explore our sacred chronicles 
                of development wisdom, technological enlightenment, and creative sanctification.
              </p>
            </div>

            {/* Sacred Category Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-2xl'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-5 h-5" />
                    <span>{category.name}</span>
                    <div className="bg-white/20 rounded-full px-2 py-1 text-xs">
                      {category.count}
                    </div>
                  </div>
                  {activeCategory === category.id && (
                    <Crown className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Sacred Articles */}
        {featuredPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-white mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-yellow-400 mr-3" />
                  Featured Sacred Works
                  <Star className="w-8 h-8 text-yellow-400 ml-3" />
                </h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <article 
                    key={post.id}
                    className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-yellow-400/50 transition-all duration-700 transform hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 flex space-x-2">
                        <Crown className="w-6 h-6 text-yellow-400 animate-pulse" />
                        <span className="bg-yellow-500/20 backdrop-blur-sm text-yellow-300 px-3 py-1 rounded-full text-sm font-semibold">
                          Featured Sacred
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-8 relative z-10">
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="text-xs text-yellow-400 font-semibold uppercase tracking-wide">
                          {categories.find(cat => cat.id === post.category)?.name || 'Sacred'}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-yellow-300 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sacred Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">Sacred Chronicle Collection</h2>
              <p className="text-gray-400">Explore our complete library of blessed digital wisdom</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <div className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                        {categories.find(cat => cat.id === post.category)?.name || 'Sacred'}
                      </div>
                      {hoveredPost === index && (
                        <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 relative z-10">
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

        {/* Sacred Newsletter */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Crown className="w-16 h-16 text-yellow-400 animate-pulse" />
                  <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-orange-400 animate-bounce" />
                </div>
              </div>
              
              <h2 className="text-4xl font-black text-white mb-6">
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
                <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Join Sacred Circle</span>
                  <Crown className="w-5 h-5" />
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
