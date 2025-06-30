
import React, { useState, useEffect } from 'react';
import { Search, Filter, Star, Download, Users, Clock, TrendingUp, BookOpen, Play, Code, Smartphone, Globe, Zap, Award, Calendar, Eye, Heart, Share2, ExternalLink, ChevronRight, Bookmark } from 'lucide-react';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('games');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [filterBy, setFilterBy] = useState('all');

  // Enhanced data with blog integration and navigation alignment
  const categories = {
    games: {
      title: 'Games Portfolio',
      subtitle: 'Immersive Gaming Experiences',
      icon: Play,
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      items: [
        {
          id: 1,
          title: 'Nightmare Survival',
          type: 'Horror Survival',
          status: 'Released',
          rating: 4.8,
          downloads: '50K+',
          image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop',
          tags: ['Unity', 'Multiplayer', 'Horror'],
          price: '$19.99',
          featured: true,
          description: 'Psychological horror meets survival mechanics',
          players: '1-4 Players'
        },
        {
          id: 2,
          title: 'Empire Command',
          type: 'RTS Strategy',
          status: 'Beta',
          rating: 4.6,
          downloads: '25K+',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop',
          tags: ['Strategy', 'Real-time', 'Multiplayer'],
          price: 'Free Beta',
          featured: false,
          description: 'Command armies in epic real-time battles',
          players: '1-8 Players'
        },
        {
          id: 3,
          title: 'Mystic Quest',
          type: 'Adventure RPG',
          status: 'Coming Soon',
          rating: 0,
          downloads: 'Pre-order',
          image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=200&fit=crop',
          tags: ['RPG', 'Adventure', 'Story'],
          price: '$24.99',
          featured: true,
          description: 'Epic fantasy adventure with deep storylines',
          players: 'Single Player'
        }
      ]
    },
    content: {
      title: 'Learning Hub',
      subtitle: 'Tutorials, Guides & Resources',
      icon: BookOpen,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      items: [
        {
          id: 1,
          title: 'Unity Horror Game Development',
          type: 'Video Course',
          difficulty: 'Advanced',
          duration: '8 hours',
          rating: 4.9,
          students: '2.1K',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
          tags: ['Unity', 'C#', 'Game Design'],
          price: '$49.99',
          featured: true,
          description: 'Master horror game mechanics and atmosphere',
          format: 'HD Video + Assets'
        },
        {
          id: 2,
          title: 'FastAPI Complete Guide',
          type: 'eBook + Code',
          difficulty: 'Intermediate',
          duration: '120 pages',
          rating: 4.7,
          students: '1.8K',
          image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
          tags: ['Python', 'API', 'Backend'],
          price: '$29.99',
          featured: false,
          description: 'Production-ready FastAPI development',
          format: 'PDF + Source Code'
        },
        {
          id: 3,
          title: 'React Architecture Patterns',
          type: 'Interactive Tutorial',
          difficulty: 'Expert',
          duration: '6 hours',
          rating: 4.8,
          students: '950',
          image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop',
          tags: ['React', 'TypeScript', 'Architecture'],
          price: '$39.99',
          featured: true,
          description: 'Enterprise-grade React patterns and practices',
          format: 'Interactive Labs'
        }
      ]
    },
    tools: {
      title: 'Developer Tools',
      subtitle: 'Professional Development Kits',
      icon: Code,
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      items: [
        {
          id: 1,
          title: 'FastAPI Starter Kit',
          type: 'Backend Template',
          complexity: 'Production Ready',
          stars: '1.2K',
          forks: '340',
          image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&h=200&fit=crop',
          tags: ['FastAPI', 'PostgreSQL', 'Docker'],
          price: 'Open Source',
          featured: true,
          description: 'Complete backend infrastructure template',
          license: 'MIT'
        },
        {
          id: 2,
          title: 'React Component Library',
          type: 'UI Framework',
          complexity: 'Enterprise',
          stars: '890',
          forks: '156',
          image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=300&h=200&fit=crop',
          tags: ['React', 'TypeScript', 'Storybook'],
          price: '$99/license',
          featured: false,
          description: 'Premium React components for enterprise apps',
          license: 'Commercial'
        },
        {
          id: 3,
          title: 'Database Migration Toolkit',
          type: 'DevOps Tool',
          complexity: 'Advanced',
          stars: '567',
          forks: '89',
          image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop',
          tags: ['Database', 'Migration', 'CLI'],
          price: 'Free',
          featured: true,
          description: 'Seamless database migration and versioning',
          license: 'Apache 2.0'
        }
      ]
    },
    enterprise: {
      title: 'Enterprise Solutions',
      subtitle: 'Business Applications',
      icon: Globe,
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      items: [
        {
          id: 1,
          title: 'TaskFlow Enterprise',
          type: 'Project Management',
          scale: 'Enterprise',
          users: '10K+ Active',
          uptime: '99.9%',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
          tags: ['SaaS', 'Analytics', 'Teams'],
          price: 'Custom Pricing',
          featured: true,
          description: 'Advanced project management for large teams',
          deployment: 'Cloud + On-Premise'
        },
        {
          id: 2,
          title: 'DataViz Analytics Pro',
          type: 'Business Intelligence',
          scale: 'Corporate',
          users: '5K+ Users',
          uptime: '99.8%',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
          tags: ['BI', 'Analytics', 'Dashboards'],
          price: '$199/month',
          featured: false,
          description: 'Real-time business intelligence platform',
          deployment: 'Cloud'
        },
        {
          id: 3,
          title: 'Commerce Platform',
          type: 'E-commerce Suite',
          scale: 'Multi-tenant',
          users: '50K+ Customers',
          uptime: '99.95%',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop',
          tags: ['E-commerce', 'Multi-tenant', 'API'],
          price: 'Quote Based',
          featured: true,
          description: 'Complete e-commerce infrastructure solution',
          deployment: 'Global CDN'
        }
      ]
    },
    webapps: {
      title: 'Web Applications',
      subtitle: 'Modern Web Solutions',
      icon: Zap,
      gradient: 'from-violet-600 via-purple-600 to-indigo-600',
      items: [
        {
          id: 1,
          title: 'Portfolio Builder Pro',
          type: 'Website Builder',
          performance: 'A+ Speed',
          seo: '98/100 Score',
          accessibility: 'WCAG 2.1',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
          tags: ['React', 'SEO', 'Performance'],
          price: '$49/month',
          featured: true,
          description: 'Professional portfolio websites with AI optimization',
          features: '50+ Templates'
        },
        {
          id: 2,
          title: 'Event Management Hub',
          type: 'Event Platform',
          performance: 'Real-time',
          seo: '95/100 Score',
          accessibility: 'AA Compliant',
          image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&h=200&fit=crop',
          tags: ['Events', 'Real-time', 'Payments'],
          price: '$29/month',
          featured: false,
          description: 'Complete event management and ticketing solution',
          features: 'Unlimited Events'
        },
        {
          id: 3,
          title: 'Learning Management System',
          type: 'EdTech Platform',
          performance: 'Scalable',
          seo: '92/100 Score',
          accessibility: 'AAA Rated',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=200&fit=crop',
          tags: ['Education', 'Videos', 'Certificates'],
          price: '$99/month',
          featured: true,
          description: 'Advanced learning platform with AI recommendations',
          features: 'Unlimited Courses'
        }
      ]
    },
    mobile: {
      title: 'Mobile Solutions',
      subtitle: 'Cross-Platform Apps',
      icon: Smartphone,
      gradient: 'from-cyan-600 via-blue-600 to-indigo-600',
      items: [
        {
          id: 1,
          title: 'Fitness Tracker Pro',
          type: 'Health & Fitness',
          platforms: 'iOS + Android',
          downloads: '100K+',
          rating: 4.8,
          image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop',
          tags: ['React Native', 'Health', 'Wearables'],
          price: '$4.99',
          featured: true,
          description: 'AI-powered fitness tracking with social features',
          compatibility: 'iOS 14+, Android 8+'
        },
        {
          id: 2,
          title: 'Expense Manager',
          type: 'Finance',
          platforms: 'Cross-Platform',
          downloads: '75K+',
          rating: 4.6,
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop',
          tags: ['Finance', 'AI', 'Sync'],
          price: 'Freemium',
          featured: false,
          description: 'Smart expense tracking with receipt scanning',
          compatibility: 'All Devices'
        },
        {
          id: 3,
          title: 'Recipe Master',
          type: 'Food & Cooking',
          platforms: 'PWA + Native',
          downloads: '60K+',
          rating: 4.7,
          image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop',
          tags: ['PWA', 'AI', 'Social'],
          price: '$2.99',
          featured: true,
          description: 'AI-powered recipe recommendations and meal planning',
          compatibility: 'Universal'
        }
      ]
    }
  };

  // Enhanced blog/tutorial integration
  const featuredContent = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      type: 'Technical Article',
      author: 'JBLinx Team',
      readTime: '12 min read',
      views: '3.2K',
      date: 'Dec 25, 2024',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      featured: true,
      tags: ['React', 'Architecture', 'Performance']
    },
    {
      id: 2,
      title: 'Game Development Psychology',
      type: 'Design Guide',
      author: 'Game Design Team',
      readTime: '8 min read',
      views: '2.1K',
      date: 'Dec 23, 2024',
      category: 'Game Design',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop',
      featured: false,
      tags: ['Psychology', 'UX', 'Gaming']
    },
    {
      id: 3,
      title: 'FastAPI Production Deployment',
      type: 'Tutorial Series',
      author: 'Backend Team',
      readTime: '15 min read',
      views: '1.8K',
      date: 'Dec 20, 2024',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
      featured: true,
      tags: ['FastAPI', 'DevOps', 'Production']
    }
  ];

  const currentCategory = categories[activeTab];
  const currentItems = currentCategory?.items || [];

  // Enhanced filtering and sorting
  const filteredItems = currentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterBy === 'all' || 
                         (filterBy === 'featured' && item.featured) ||
                         (filterBy === 'free' && (item.price === 'Free' || item.price === 'Open Source'));
    return matchesSearch && matchesFilter;
  });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Enhanced Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm">
            <Award className="w-5 h-5 mr-3 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 tracking-wide">PROFESSIONAL DIGITAL SOLUTIONS</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Build. Deploy.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Dominate.
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            From cutting-edge games to enterprise solutions, we craft digital experiences 
            that push boundaries and deliver exceptional results for ambitious projects.
          </p>

          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-3 group">
              <span>Explore Portfolio</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center space-x-3">
              <BookOpen className="w-5 h-5" />
              <span>View Resources</span>
            </button>
          </div>
        </div>

        {/* Enhanced Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(categories).map(([key, category]) => {
            const IconComponent = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 group ${
                  activeTab === key
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl shadow-blue-500/25`
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-gray-700'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${activeTab === key ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Enhanced Search and Filter Bar */}
        <div className="bg-white/5 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${currentCategory.title.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-gray-600 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-gray-600 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="popularity">Popular</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
                <option value="price">Price</option>
              </select>
              
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="bg-white/10 border border-gray-600 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Items</option>
                <option value="featured">Featured</option>
                <option value="free">Free</option>
              </select>
            </div>
          </div>
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">{currentCategory.title}</h2>
                <p className="text-gray-400">{currentCategory.subtitle}</p>
              </div>
              <div className="text-sm text-gray-400">
                {filteredItems.length} items found
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="group bg-white/5 backdrop-blur-xl border border-gray-700 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.featured && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                        <Heart className="w-4 h-4" />
                      </button>
                      <button className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-blue-400 text-sm font-semibold">{item.type}</span>
                      <span className="text-white font-bold text-lg">{item.price}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Dynamic metadata based on category */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      {activeTab === 'games' && (
                        <>
                          <div className="flex items-center text-gray-300">
                            <Star className="w-4 h-4 mr-2 text-yellow-400" />
                            {item.rating}/5
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Download className="w-4 h-4 mr-2 text-green-400" />
                            {item.downloads}
                          </div>
                        </>
                      )}
                      
                      {activeTab === 'content' && (
                        <>
                          <div className="flex items-center text-gray-300">
                            <Clock className="w-4 h-4 mr-2 text-blue-400" />
                            {item.duration}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Users className="w-4 h-4 mr-2 text-purple-400" />
                            {item.students}
                          </div>
                        </>
                      )}
                      
                      {(activeTab === 'enterprise' || activeTab === 'webapps') && (
                        <>
                          <div className="flex items-center text-gray-300">
                            <TrendingUp className="w-4 h-4 mr-2 text-green-400" />
                            {item.uptime || item.performance}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Users className="w-4 h-4 mr-2 text-blue-400" />
                            {item.users || item.seo}
                          </div>
                        </>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {item.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="bg-white/10 text-white p-3 rounded-xl hover:bg-white/20 transition-colors">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Sidebar - Featured Content */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-xl border border-gray-700 rounded-3xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Featured Content</h3>
                <BookOpen className="w-5 h-5 text-blue-400" />
              </div>
              
              <div className="space-y-4">
                {featuredContent.map((content) => (
                  <div key={content.id} className="group border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all">
                    <div className="relative">
                      <img 
                        src={content.image} 
                        alt={content.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {content.featured && (
                        <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-xs font-bold">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-blue-400 text-xs font-semibold">{content.category}</span>
                        <span className="text-gray-500 text-xs">{content.date}</span>
                      </div>
                      
                      <h4 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                        {content.title}
                      </h4>
                      
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {content.readTime}
                        </span>
                        <span className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {content.views}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {content.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button className="w-full text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center justify-center space-x-2">
                  <span>View All Articles</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-xl border border-gray-700 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Platform Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Projects</span>
                  <span className="text-white font-bold">150+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Active Users</span>
                  <span className="text-white font-bold">50K+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Code Downloads</span>
                  <span className="text-white font-bold">1M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-green-400 font-bold">99.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
