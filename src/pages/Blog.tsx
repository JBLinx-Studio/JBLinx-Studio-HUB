
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, Sparkles, BookOpen, Code, Gamepad2, Zap, Filter } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [viewMode, setViewMode] = useState('magazine'); // magazine, grid, list

  const featuredPost = {
    id: 1,
    title: "The Art of Digital Storytelling: Building Immersive Game Worlds",
    excerpt: "Journey into our creative process where code meets artistry. Discover how we craft game worlds that don't just entertain, but transport players into entirely new dimensions of experience.",
    fullExcerpt: "In this comprehensive deep-dive, we explore the intricate balance between technical excellence and creative vision. From the initial spark of an idea to the final polished experience, learn how JBLinx Studio approaches world-building with a philosophy that treats every pixel as a brushstroke and every line of code as poetry.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    author: "JBLinx Creative Team",
    authorRole: "Lead Game Architects",
    date: "Dec 20, 2024",
    readTime: "12 min",
    views: "3.2k",
    category: "Game Development",
    tags: ["Unity", "Game Design", "Storytelling", "World Building"],
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: "FastAPI Alchemy: Transforming Ideas into Production APIs",
      excerpt: "Our battle-tested approach to building scalable backend architectures that grow with your ambitions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      author: "Backend Wizards",
      authorRole: "API Architects",
      date: "Dec 18, 2024", 
      readTime: "8 min",
      views: "2.1k",
      category: "Backend",
      tags: ["FastAPI", "Python", "Architecture", "Scalability"],
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Psychology of Fear: Crafting Horror That Haunts",
      excerpt: "The science and art behind creating genuinely terrifying gaming experiences that linger long after the screen goes dark.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      author: "Horror Specialists",
      authorRole: "Fear Engineers",
      date: "Dec 15, 2024",
      readTime: "10 min", 
      views: "2.8k",
      category: "Game Design",
      tags: ["Horror", "Psychology", "Game Design", "Player Experience"],
      difficulty: "Advanced"
    },
    {
      id: 4,
      title: "RTS Revolution: Real-Time Strategy in the Modern Era",
      excerpt: "Breaking down the complex orchestration of real-time strategy games and the networking wizardry that makes it possible.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      author: "Strategy Masters",
      authorRole: "RTS Architects",
      date: "Dec 12, 2024",
      readTime: "15 min",
      views: "1.9k", 
      category: "Technical",
      tags: ["RTS", "Networking", "Multiplayer", "Performance"],
      difficulty: "Expert"
    },
    {
      id: 5,
      title: "React Patterns That Changed Our Development",
      excerpt: "The unconventional React patterns and techniques that revolutionized our frontend development process.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      author: "Frontend Innovators",
      authorRole: "React Specialists", 
      date: "Dec 10, 2024",
      readTime: "6 min",
      views: "1.7k",
      category: "Frontend",
      tags: ["React", "Patterns", "Best Practices", "Performance"],
      difficulty: "Intermediate"
    },
    {
      id: 6,
      title: "From Concept to Creation: Our Unity Workflow",
      excerpt: "An intimate look at our game development pipeline and the tools that bring our visions to life.",
      image: "https://images.unsplash.com/photo-1596473914697-ce9cb72dd85f?w=400&h=250&fit=crop",
      author: "Game Dev Team",
      authorRole: "Unity Masters",
      date: "Dec 8, 2024",
      readTime: "11 min",
      views: "2.3k",
      category: "Game Development", 
      tags: ["Unity", "Workflow", "Pipeline", "Development"],
      difficulty: "Beginner"
    }
  ];

  const categories = [
    { name: 'All', icon: Sparkles, count: posts.length + 1 },
    { name: 'Game Development', icon: Gamepad2, count: 3 },
    { name: 'Backend', icon: Code, count: 1 },
    { name: 'Technical', icon: Zap, count: 1 },
    { name: 'Frontend', icon: BookOpen, count: 1 }
  ];

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Expert': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      <Header />
      
      <main className="pt-24">
        {/* Revolutionary Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.1),transparent)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent)]"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8">
                <BookOpen className="w-5 h-5 mr-3 text-cyan-400" />
                <span className="text-white/90 font-medium">Digital Chronicles</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-black text-white mb-8 leading-tight">
                Dev
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 ml-4">
                  Stories
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                Raw insights from the digital frontier. Where technical mastery meets creative vision,
                and every line of code tells a story worth sharing.
              </p>

              {/* View mode toggles */}
              <div className="flex justify-center space-x-2">
                {['magazine', 'grid', 'list'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setViewMode(mode)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      viewMode === mode
                        ? 'bg-cyan-500 text-white' 
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-6">
            {/* Advanced Categories with stats */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`group flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-xl' 
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.name ? 'bg-white/20' : 'bg-white/10'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Featured Post - Magazine style */}
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden mb-16 hover:border-cyan-400/50 transition-all duration-500 group">
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-7 relative">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </span>
                    <span className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      {featuredPost.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-5 p-8 lg:p-12">
                  <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight group-hover:text-cyan-400 transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {featuredPost.fullExcerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold">{featuredPost.author}</div>
                        <div className="text-cyan-400 text-sm">{featuredPost.authorRole}</div>
                        <div className="flex items-center text-gray-400 text-sm space-x-2 mt-1">
                          <span>{featuredPost.date}</span>
                          <span>•</span>
                          <span>{featuredPost.readTime}</span>
                          <span>•</span>
                          <span>{featuredPost.views} views</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-3 group">
                    <span>Read Full Story</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Posts Grid - Adaptive layout */}
            <div className={`grid gap-8 ${
              viewMode === 'magazine' ? 'lg:grid-cols-3' :
              viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 
              'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredPosts.map((post) => (
                <article key={post.id} className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 ${
                  viewMode === 'list' ? 'flex' : ''
                }`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}`}>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                        viewMode === 'list' ? 'h-full' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-3 left-3 flex space-x-2">
                      <span className="bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                        {post.category}
                      </span>
                      {post.difficulty && (
                        <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getDifficultyColor(post.difficulty)}`}>
                          {post.difficulty}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1">
                    <h3 className={`font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight ${
                      viewMode === 'list' ? 'text-lg' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="bg-white/10 text-gray-300 px-2 py-1 rounded-md text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <span className="font-medium text-cyan-400">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load more section */}
            <div className="text-center mt-16">
              <button className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                Load More Stories
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
