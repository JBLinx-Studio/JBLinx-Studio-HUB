
import React, { useState } from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, Sparkles, Zap, Hexagon, Filter, Search, Grid, List, Star, Users, Download, Eye, Heart, Clock, Award, Target, Rocket, Flame, Crown, Diamond, ChevronDown, Play, BookOpen, FileText, Globe, Cpu, Shield, Calendar, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', count: 12, icon: Globe },
    { id: 'development', name: 'Development', count: 4, icon: Code },
    { id: 'gaming', name: 'Gaming', count: 3, icon: Gamepad2 },
    { id: 'consulting', name: 'Consulting', count: 3, icon: Target },
    { id: 'premium', name: 'Premium', count: 2, icon: Crown }
  ];

  const services = [
    {
      id: 1,
      title: "Game Development Suite",
      category: "development",
      subcategory: "Full Development",
      description: "Complete game development from concept to deployment with Unity expertise",
      icon: Gamepad2,
      color: "from-purple-500 to-pink-500",
      features: ["Unity Development", "Multiplayer Systems", "VR/AR Support", "Performance Optimization"],
      price: "Starting at $5,000",
      duration: "3-6 months",
      rating: 4.9,
      clients: "25+",
      status: "Available",
      featured: true,
      tech: ["Unity", "C#", "Blender", "Photon"]
    },
    {
      id: 2,
      title: "Web Application Development",
      category: "development",
      subcategory: "Full Stack Development",
      description: "Modern web applications with React, Next.js, and cutting-edge technologies",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      features: ["React/Next.js", "Backend APIs", "Database Design", "Cloud Deployment"],
      price: "Starting at $3,000",
      duration: "2-4 months",
      rating: 5.0,
      clients: "40+",
      status: "Available",
      featured: true,
      tech: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      id: 3,
      title: "Backend Architecture",
      category: "development",
      subcategory: "System Design",
      description: "Scalable backend systems with FastAPI, databases, and cloud infrastructure",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      features: ["API Development", "Database Optimization", "Cloud Architecture", "Performance Tuning"],
      price: "Starting at $2,500",
      duration: "1-3 months",
      rating: 4.8,
      clients: "30+",
      status: "Available",
      featured: false,
      tech: ["FastAPI", "MySQL", "Redis", "AWS"]
    },
    {
      id: 4,
      title: "Mobile App Development",
      category: "development",
      subcategory: "Cross-Platform",
      description: "Flutter applications for iOS and Android with native performance",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      features: ["Flutter Development", "Native Features", "App Store Deployment", "Maintenance"],
      price: "Starting at $4,000",
      duration: "2-5 months",
      rating: 4.9,
      clients: "18+",
      status: "Available",
      featured: false,
      tech: ["Flutter", "Dart", "Firebase", "Native APIs"]
    },
    {
      id: 5,
      title: "Game Design Consulting",
      category: "consulting",
      subcategory: "Strategic Consulting",
      description: "Expert guidance on game mechanics, monetization, and market positioning",
      icon: Target,
      color: "from-purple-500 to-violet-500",
      features: ["Game Design Analysis", "Market Research", "Monetization Strategy", "User Experience"],
      price: "Starting at $1,500",
      duration: "2-4 weeks",
      rating: 4.9,
      clients: "15+",
      status: "Available",
      featured: false,
      tech: ["Game Design", "Analytics", "User Research", "A/B Testing"]
    },
    {
      id: 6,
      title: "Technical Architecture Review",
      category: "consulting",
      subcategory: "Code Review",
      description: "Comprehensive code review and architecture optimization for existing projects",
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
      features: ["Code Analysis", "Performance Optimization", "Security Audit", "Best Practices"],
      price: "Starting at $1,200",
      duration: "1-2 weeks",
      rating: 4.8,
      clients: "22+",
      status: "Available",
      featured: false,
      tech: ["Code Review", "Performance", "Security", "Architecture"]
    },
    {
      id: 7,
      title: "Premium Game Development",
      category: "premium",
      subcategory: "Elite Service",
      description: "Flagship game development with dedicated team and premium support",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      features: ["Dedicated Team", "Priority Support", "Regular Updates", "Post-Launch Support"],
      price: "Starting at $15,000",
      duration: "6-12 months",
      rating: 5.0,
      clients: "8+",
      status: "Limited Availability",
      featured: true,
      tech: ["Unity Pro", "Advanced AI", "Custom Tools", "Premium Assets"]
    },
    {
      id: 8,
      title: "Gaming Content Creation",
      category: "gaming",
      subcategory: "Content & Media",
      description: "Game trailers, promotional content, and marketing materials",
      icon: Play,
      color: "from-pink-500 to-rose-500",
      features: ["Game Trailers", "Screenshots", "Marketing Materials", "Social Media Content"],
      price: "Starting at $800",
      duration: "1-2 weeks",
      rating: 4.7,
      clients: "35+",
      status: "Available",
      featured: false,
      tech: ["Video Editing", "3D Rendering", "Graphic Design", "Animation"]
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Available': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Limited Availability': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'Waitlist': return 'bg-red-500/20 text-red-400 border-red-500/50';
      default: return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-6 py-3 mb-6">
            <Hexagon className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-white/90 font-black font-mono">PROFESSIONAL SERVICES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-mono">
            What We <span className="text-cyan-400">Deliver</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Premium development services across games, web, mobile, and backend systems with guaranteed results.
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="bg-slate-800/50 border border-slate-700 p-6 mb-8 backdrop-blur-sm rounded-lg">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/80 border border-slate-600 text-white pl-10 pr-4 py-3 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-cyan-500 text-white shadow-lg border border-cyan-400' 
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600 border border-slate-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                  <span className="bg-slate-900/50 text-xs px-2 py-1 rounded">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode */}
          <div className="flex items-center justify-between">
            <div className="text-slate-400 text-sm">
              Showing <span className="text-white font-bold">{filteredServices.length}</span> services
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-slate-400 text-sm font-medium">View:</span>
              <div className="flex border border-slate-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-slate-300'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className={`mb-12 ${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}`}>
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            
            if (viewMode === 'list') {
              return (
                <div key={service.id} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                        {service.featured && <Crown className="w-5 h-5 text-yellow-400" />}
                        <div className={`px-2 py-1 text-xs font-bold border rounded ${getStatusColor(service.status)}`}>
                          {service.status}
                        </div>
                      </div>
                      <p className="text-gray-400 mb-3">{service.description}</p>
                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="flex items-center space-x-1 text-sm">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-slate-300">{service.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                          <Users className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300">{service.clients} clients</span>
                        </div>
                        <div className="flex items-center space-x-1 text-sm">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span className="text-slate-300">{service.duration}</span>
                        </div>
                        <div className="text-green-400 font-bold">{service.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                className="group relative bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                {service.featured && (
                  <div className="absolute -top-2 -right-2 bg-yellow-500 text-black px-3 py-1 text-xs font-black rounded-full flex items-center space-x-1">
                    <Crown className="w-3 h-3" />
                    <span>FEATURED</span>
                  </div>
                )}
                
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <div className={`px-2 py-1 text-xs font-bold border rounded ${getStatusColor(service.status)}`}>
                    {service.status}
                  </div>
                </div>
                
                <div className="text-cyan-400 text-sm font-medium mb-3">{service.subcategory}</div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-slate-300">{service.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{service.clients}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-300">{service.duration}</span>
                  </div>
                  <div className="text-green-400 font-bold">{service.price}</div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {service.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 transform"
          >
            <Rocket className="w-5 h-5 mr-2" />
            <span>View All Our Work</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
