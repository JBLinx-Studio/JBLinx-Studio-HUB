
import React, { useState, useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star, Download, Users, Zap, Play, Github, ExternalLink } from 'lucide-react';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const featuredProducts = [
    {
      title: 'TaskFlow Pro Suite',
      category: 'Productivity Platform',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      gradient: 'from-blue-600 to-purple-600',
      stats: { users: '2.1k', rating: '4.9', downloads: '8.5k' },
      description: 'Complete productivity suite with team collaboration, task management, and advanced analytics dashboard.',
      features: ['Real-time Collaboration', 'Advanced Analytics', 'Custom Workflows', 'API Integration'],
      links: { demo: '#', github: '#', live: '#' }
    },
    {
      title: 'Survival Horror VR',
      category: 'Premium Game',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
      gradient: 'from-purple-600 to-pink-600',
      stats: { users: '1.2k', rating: '4.8', downloads: '5.2k' },
      description: 'Immersive VR horror experience with advanced AI, dynamic storytelling, and photorealistic environments.',
      features: ['VR Compatible', 'Advanced AI', 'Dynamic Story', 'Photorealistic Graphics'],
      links: { demo: '#', github: '#', live: '#' }
    },
    {
      title: 'DataViz Analytics',
      category: 'Business Intelligence',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      gradient: 'from-green-600 to-teal-600',
      stats: { users: '1.5k', rating: '4.8', downloads: '4.2k' },
      description: 'Professional data visualization platform with custom charts, real-time dashboards, and export capabilities.',
      features: ['Custom Charts', 'Real-time Data', 'Export Tools', 'API Integration'],
      links: { demo: '#', github: '#', live: '#' }
    },
    {
      title: 'FastAPI Framework',
      category: 'Developer Tool',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      gradient: 'from-orange-600 to-red-600',
      stats: { users: '3.2k', rating: '5.0', downloads: '12k' },
      description: 'Production-ready FastAPI template with authentication, database integration, and auto-generated documentation.',
      features: ['Auto Documentation', 'Type Safety', 'Async Support', 'Authentication'],
      links: { demo: '#', github: '#', live: '#' }
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 px-6 py-3 mb-6" style={{ borderRadius: '8px' }}>
            <Star className="w-5 h-5 text-cyan-400 mr-3" />
            <span className="text-white font-bold font-mono">FEATURED PRODUCTS</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono mb-6">
            SPOTLIGHT <span className="text-cyan-400">SHOWCASE</span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-4">
              {featuredProducts.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden" style={{ borderRadius: '12px' }}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-bold bg-gradient-to-r ${product.gradient} text-white`} style={{ borderRadius: '6px' }}>
                          {product.category}
                        </span>
                      </div>
                      
                      {/* Stats */}
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <div className="bg-black/60 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                          <Users className="w-3 h-3" />
                          <span>{product.stats.users}</span>
                        </div>
                        <div className="bg-black/60 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1" style={{ borderRadius: '4px' }}>
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span>{product.stats.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6">
                      <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors font-mono">
                        {product.title}
                      </h3>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <div className="grid grid-cols-2 gap-1 text-xs">
                          {product.features.slice(0, 4).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-1 text-slate-500">
                              <Zap className="w-2 h-2 text-cyan-400" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-2">
                        <button className={`flex-1 bg-gradient-to-r ${product.gradient} text-white px-4 py-2 text-sm font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-1`} style={{ borderRadius: '6px' }}>
                          <Play className="w-3 h-3" />
                          <span>VIEW</span>
                        </button>
                        <button className="bg-slate-700 text-white px-4 py-2 text-sm hover:bg-slate-600 transition-all duration-300 flex items-center justify-center" style={{ borderRadius: '6px' }}>
                          <Github className="w-3 h-3" />
                        </button>
                        <button className="bg-slate-700 text-white px-4 py-2 text-sm hover:bg-slate-600 transition-all duration-300 flex items-center justify-center" style={{ borderRadius: '6px' }}>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700" />
            <CarouselNext className="right-4 bg-slate-800/80 border-slate-600 text-white hover:bg-slate-700" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
