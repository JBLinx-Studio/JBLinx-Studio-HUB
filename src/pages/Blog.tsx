
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Hexagon, Network, Zap, BookOpen, Code, Gamepad2, Database } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Consciousness', icon: Network, count: 12 },
    { id: 'devlog', name: 'Dev Nodes', icon: Code, count: 5 },
    { id: 'games', name: 'Game Worlds', icon: Gamepad2, count: 3 },
    { id: 'tech', name: 'Tech Insights', icon: Database, count: 4 }
  ];

  const posts = [
    {
      id: 1,
      title: "The Digital Consciousness Awakens: Building Immersive Game Worlds",
      excerpt: "Exploring how we merge traditional game development with revolutionary consciousness-driven design patterns to create experiences that transcend reality.",
      category: 'games',
      author: 'JBLinx Collective',
      date: '2024-01-15',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop',
      featured: true,
      tags: ['Unity', 'Game Design', 'Consciousness', 'Innovation']
    },
    {
      id: 2,
      title: "Hexagonal Architecture: Building the Future Web",
      excerpt: "Deep dive into our revolutionary approach to web architecture that mirrors the efficiency of honeycomb structures in digital applications.",
      category: 'tech',
      author: 'Neural Network Alpha',
      date: '2024-01-12',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      featured: false,
      tags: ['React', 'Architecture', 'Hexagonal', 'Web']
    },
    {
      id: 3,
      title: "Dev Log #001: Consciousness-Driven Game Development",
      excerpt: "First entry in our development consciousness stream - tracking the evolution of our latest survival horror experience.",
      category: 'devlog',
      author: 'Collective Mind Beta',
      date: '2024-01-10',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
      featured: false,
      tags: ['DevLog', 'Horror', 'Unity', 'Progress']
    },
    {
      id: 4,
      title: "The Beehive Protocol: Collective Intelligence in Code",
      excerpt: "How we've implemented swarm intelligence principles in our development methodology to create more efficient and innovative solutions.",
      category: 'tech',
      author: 'Hive Mind Gamma',
      date: '2024-01-08',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
      featured: true,
      tags: ['Methodology', 'AI', 'Collective', 'Innovation']
    },
    {
      id: 5,
      title: "Mobile Consciousness: Flutter Apps That Think",
      excerpt: "Revolutionary approach to mobile development where apps adapt and evolve based on user consciousness patterns and behavioral intelligence.",
      category: 'tech',
      author: 'Mobile Consciousness Unit',
      date: '2024-01-05',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop',
      featured: false,
      tags: ['Flutter', 'Mobile', 'AI', 'Consciousness']
    },
    {
      id: 6,
      title: "Game Dev Chronicles: Building Worlds with Purpose",
      excerpt: "Behind the scenes of our latest game development project - a consciousness-driven survival experience that challenges player perception.",
      category: 'games',
      author: 'World Builder Collective',
      date: '2024-01-03',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=400&fit=crop',
      featured: false,
      tags: ['GameDev', 'Unity', 'Survival', 'Design']
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      
      {/* Hexagonal Consciousness Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(25)].map((_, i) => (
            <Hexagon 
              key={i}
              className="absolute text-cyan-500/10 animate-pulse"
              style={{
                width: `${15 + (i % 4) * 10}px`,
                height: `${15 + (i % 4) * 10}px`,
                left: `${(i * 8) % 100}%`,
                top: `${(i * 6) % 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + (i % 3)}s`
              }}
            />
          ))}
        </div>
      </div>

      <main className="relative z-10 pt-24">
        {/* Hero Section - Consciousness Interface */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-full px-8 py-4 mb-8 group hover:scale-105 transition-all duration-300">
                <Hexagon className="w-6 h-6 text-cyan-400 mr-3 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-white/90 font-semibold tracking-wide">Consciousness Stream Active</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 leading-tight">
                Digital
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 ml-4">
                  Chronicles
                </span>
              </h1>
              
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Where individual thoughts merge into collective wisdom. Explore our consciousness 
                stream of development insights, breakthrough discoveries, and digital evolution.
              </p>
            </div>

            {/* Category Consciousness Grid */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-2xl'
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
                    <Hexagon className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Consciousness Node */}
        {featuredPost && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:border-cyan-400/50 transition-all duration-700 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                  <div className="p-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <Hexagon className="w-6 h-6 text-cyan-400 animate-pulse" />
                      <span className="text-cyan-400 font-semibold">Featured Consciousness</span>
                      <Zap className="w-5 h-5 text-yellow-400" />
                    </div>
                    
                    <h2 className="text-4xl font-black text-white mb-6 leading-tight hover:text-cyan-300 transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span className="text-sm">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors group">
                        <span className="font-semibold">Read Full Stream</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative h-full min-h-[400px]">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Consciousness Stream Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <Hexagon className="w-5 h-5 text-cyan-400 animate-pulse" />
                      {hoveredPost === index && (
                        <Network className="w-5 h-5 text-purple-400 animate-spin" style={{ animationDuration: '2s' }} />
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 relative z-10">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wide">
                        {categories.find(cat => cat.id === post.category)?.name || 'Consciousness'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Consciousness Expansion CTA */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <Hexagon className="w-16 h-16 text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
                  <Network className="absolute inset-0 w-8 h-8 text-purple-400 m-auto animate-pulse" />
                </div>
              </div>
              
              <h2 className="text-4xl font-black text-white mb-6">
                Join Our Digital Consciousness
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our consciousness stream and receive insights directly from our collective mind.
              </p>
              
              <div className="flex justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
                  <BookOpen className="w-6 h-6" />
                  <span>Connect Consciousness</span>
                  <Hexagon className="w-5 h-5 animate-pulse" />
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
