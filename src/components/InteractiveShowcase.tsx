
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Download, Star, Code, Gamepad2, Zap, Eye } from 'lucide-react';

const InteractiveShowcase = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const categories = [
    {
      id: 'games',
      title: 'Premium Games',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'bg-gradient-to-br from-purple-900/20 to-pink-900/20',
      items: [
        {
          title: 'Survival Horror Chronicles',
          subtitle: 'Psychological Horror Experience',
          image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop',
          stats: { downloads: '5.2k', rating: '4.8', players: '1.2k' },
          features: ['Advanced AI', 'VR Ready', 'Multiplayer'],
          description: 'Immersive horror with cutting-edge AI and atmospheric storytelling'
        },
        {
          title: 'Strategic Conquest RTS',
          subtitle: 'Real-Time Strategy',
          image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=500&fit=crop',
          stats: { downloads: '3.1k', rating: '4.9', players: '800' },
          features: ['32 Players', 'Campaign', 'Mod Support'],
          description: 'Massive multiplayer battles with complex AI opponents'
        },
        {
          title: 'Adventure Quest RPG',
          subtitle: 'Open World RPG',
          image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=500&fit=crop',
          stats: { downloads: '2.8k', rating: '4.7', players: '950' },
          features: ['Open World', 'Character Customization', 'Crafting'],
          description: 'Epic adventures with branching storylines and character progression'
        }
      ]
    },
    {
      id: 'webapps',
      title: 'Web Applications',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'bg-gradient-to-br from-blue-900/20 to-cyan-900/20',
      items: [
        {
          title: 'TaskFlow Pro',
          subtitle: 'Productivity Suite',
          image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
          stats: { downloads: '8.5k', rating: '4.9', users: '2.1k' },
          features: ['Real-time Sync', 'Team Workspaces', 'Analytics'],
          description: 'Advanced task management with team collaboration features'
        },
        {
          title: 'DataViz Analytics',
          subtitle: 'Business Intelligence',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
          stats: { downloads: '4.2k', rating: '4.8', users: '1.5k' },
          features: ['Custom Charts', 'Data Pipelines', 'Export Tools'],
          description: 'Powerful data visualization and analytics platform'
        },
        {
          title: 'ShopLink Commerce',
          subtitle: 'E-Commerce Platform',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
          stats: { downloads: '6.7k', rating: '4.9', users: '1.8k' },
          features: ['Payment Gateway', 'Inventory Sync', 'Mobile Optimized'],
          description: 'Complete e-commerce solution with modern checkout'
        }
      ]
    },
    {
      id: 'tools',
      title: 'Developer Tools',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'bg-gradient-to-br from-green-900/20 to-emerald-900/20',
      items: [
        {
          title: 'FastAPI Template',
          subtitle: 'Backend Framework',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop',
          stats: { downloads: '12k', rating: '5.0', stars: '2.3k' },
          features: ['Auto-generated Docs', 'Type Hints', 'Async Support'],
          description: 'Production-ready FastAPI template with best practices'
        },
        {
          title: 'React Component Library',
          subtitle: 'UI Framework',
          image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=500&fit=crop',
          stats: { downloads: '9.3k', rating: '4.8', stars: '1.9k' },
          features: ['TypeScript', 'Storybook', 'Accessibility'],
          description: 'Modern React components with TypeScript and accessibility'
        }
      ]
    }
  ];

  const currentCategory = categories[activeCategory];
  const currentItem = currentCategory.items[currentSlide];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => 
          prev === currentCategory.items.length - 1 ? 0 : prev + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentCategory.items.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide(prev => 
      prev === currentCategory.items.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prev => 
      prev === 0 ? currentCategory.items.length - 1 : prev - 1
    );
  };

  const switchCategory = (index: number) => {
    setActiveCategory(index);
    setCurrentSlide(0);
  };

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/10 to-blue-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-2" style={{ borderRadius: '12px' }}>
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => switchCategory(index)}
                  className={`flex items-center space-x-3 px-6 py-4 font-bold transition-all duration-300 ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                  style={{ borderRadius: '8px' }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Showcase */}
        <div className={`${currentCategory.bgGradient} border border-slate-700/50 backdrop-blur-sm overflow-hidden`} style={{ borderRadius: '16px' }}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <img 
                src={currentItem.image} 
                alt={currentItem.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Navigation */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-all"
                  style={{ borderRadius: '50%' }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-all"
                  style={{ borderRadius: '50%' }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <div className="bg-black/60 text-white px-3 py-1 text-sm backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '6px' }}>
                  <Download className="w-3 h-3" />
                  <span>{currentItem.stats.downloads}</span>
                </div>
                <div className="bg-black/60 text-white px-3 py-1 text-sm backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '6px' }}>
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span>{currentItem.stats.rating}</span>
                </div>
              </div>

              {/* Auto-play toggle */}
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-all ${
                    isAutoPlaying ? 'bg-green-500/80 text-white' : 'bg-black/50 text-gray-400'
                  }`}
                  style={{ borderRadius: '50%' }}
                >
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-sm font-bold text-cyan-400 mb-2 font-mono">
                  {currentItem.subtitle}
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4 font-mono">
                  {currentItem.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {currentItem.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <div className="text-slate-300 text-sm font-bold mb-3">KEY FEATURES</div>
                <div className="grid grid-cols-1 gap-2">
                  {currentItem.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${currentCategory.color}`} style={{ borderRadius: '50%' }}></div>
                      <span className="text-slate-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className={`flex-1 bg-gradient-to-r ${currentCategory.color} text-white px-6 py-4 font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`} style={{ borderRadius: '8px' }}>
                  <Eye className="w-5 h-5" />
                  <span>VIEW</span>
                </button>
                <button className="bg-slate-700 text-white px-6 py-4 font-bold hover:bg-slate-600 transition-all duration-300 flex items-center justify-center space-x-2" style={{ borderRadius: '8px' }}>
                  <Download className="w-5 h-5" />
                  <span>GET</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center py-6 space-x-2">
            {currentCategory.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 transition-all duration-300 ${
                  currentSlide === index 
                    ? `bg-gradient-to-r ${currentCategory.color}` 
                    : 'bg-slate-600'
                }`}
                style={{ borderRadius: '50%' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;
