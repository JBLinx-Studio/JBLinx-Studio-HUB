
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen, Code, Gamepad2, Database, FileText, Download } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Content', icon: FileText, count: 24, color: 'text-blue-400' },
    { id: 'devlogs', name: 'Dev Logs', icon: Code, count: 8, color: 'text-green-400' },
    { id: 'games', name: 'Game Projects', icon: Gamepad2, count: 6, color: 'text-purple-400' },
    { id: 'tutorials', name: 'Tutorials', icon: BookOpen, count: 5, color: 'text-orange-400' },
    { id: 'ebooks', name: 'eBooks', icon: Download, count: 3, color: 'text-cyan-400' },
    { id: 'technical', name: 'Technical', icon: Database, count: 2, color: 'text-red-400' }
  ];

  const posts = [
    {
      id: 1,
      title: "Unity Survival Game Development Guide",
      excerpt: "Complete walkthrough of building a survival game from scratch using Unity Engine.",
      category: 'devlogs',
      type: 'Dev Log',
      author: 'JBLinx Team',
      date: '2024-01-15',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop',
      featured: true,
      downloads: 156,
      tags: ['Unity', 'C#', 'Game Development']
    },
    {
      id: 2,
      title: "FastAPI Backend Architecture eBook",
      excerpt: "Comprehensive guide to building scalable backend systems with FastAPI and MySQL.",
      category: 'ebooks',
      type: 'eBook',
      author: 'Backend Team',
      date: '2024-01-12',
      readTime: '45 min',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      featured: false,
      downloads: 89,
      tags: ['FastAPI', 'Python', 'Backend']
    },
    {
      id: 3,
      title: "Horror Game Psychology Tutorial",
      excerpt: "Understanding fear mechanics and implementing them in horror game design.",
      category: 'tutorials',
      type: 'Tutorial',
      author: 'Game Designer',
      date: '2024-01-10',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
      featured: false,
      downloads: 234,
      tags: ['Game Design', 'Psychology', 'Horror']
    },
    {
      id: 4,
      title: "React Component Library",
      excerpt: "Building reusable UI components with React, TypeScript, and Tailwind CSS.",
      category: 'technical',
      type: 'Technical',
      author: 'Frontend Team',
      date: '2024-01-08',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      featured: false,
      downloads: 167,
      tags: ['React', 'TypeScript', 'Components']
    },
    {
      id: 5,
      title: "Mobile Game Development with Flutter",
      excerpt: "Cross-platform mobile game development using Flutter and Dart.",
      category: 'games',
      type: 'Game Project',
      author: 'Mobile Team',
      date: '2024-01-05',
      readTime: '20 min',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop',
      featured: false,
      downloads: 98,
      tags: ['Flutter', 'Mobile', 'Game Dev']
    },
    {
      id: 6,
      title: "RTS Game Multiplayer Systems",
      excerpt: "Implementing real-time strategy multiplayer networking and synchronization.",
      category: 'devlogs',
      type: 'Dev Log',
      author: 'Network Team',
      date: '2024-01-03',
      readTime: '18 min',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop',
      featured: false,
      downloads: 123,
      tags: ['RTS', 'Networking', 'Multiplayer']
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      
      <main className="pt-20">
        {/* Compact Hero */}
        <section className="py-12 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Knowledge <span className="text-cyan-400">Hub</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Development insights, tutorials, eBooks, and project documentation.
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white/5 border border-white/20 px-4 py-2 rounded-lg text-white hover:border-cyan-400 transition-colors"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-cyan-500 text-white shadow-lg'
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
        </section>

        {/* Featured Content */}
        {featuredPost && (
          <section className="py-12">
            <div className="container mx-auto px-6">
              <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                      <span className="text-cyan-400 text-sm font-medium">{featuredPost.type}</span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-white mb-4 hover:text-cyan-300 transition-colors">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <span>{featuredPost.author}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                        <span>•</span>
                        <span>{featuredPost.downloads} downloads</span>
                      </div>
                      
                      <button className="flex items-center space-x-2 bg-cyan-500 text-white px-6 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white/5 border border-white/20 rounded-xl overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs">
                        {post.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 hover:text-cyan-300 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 text-sm font-medium">
                        {post.downloads} downloads
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
