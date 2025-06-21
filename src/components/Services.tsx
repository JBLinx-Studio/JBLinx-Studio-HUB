
import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Clock, Target, Sparkles } from 'lucide-react';
import { mainServices } from '../data/servicesData';
import ServiceCard from './services/ServiceCard';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Unique Header Design */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Sparkles className="w-5 h-5 mr-2 text-blue-600 animate-pulse" />
            <span className="text-sm font-bold text-blue-700 tracking-wide">What We Craft</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 italic font-light">
              Experiences
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            From immersive survival worlds to enterprise-grade web solutions, 
            we blend creativity with cutting-edge technology.
          </p>
        </div>

        {/* Trust Indicators with Personality */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <Users className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-xl font-bold text-gray-900">250+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <Target className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Projects Shipped</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 bg-white rounded-2xl px-6 py-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
            <Clock className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
            <div>
              <div className="text-xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {mainServices.slice(0, 4).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredService === service.id}
              onHover={setHoveredService}
            />
          ))}
        </div>

        {/* Unique CTA Section */}
        <div className="text-center">
          <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white overflow-hidden shadow-2xl">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Create Something Amazing?</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's collaborate and turn your vision into a digital reality. 
                Every great project starts with a conversation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#contact" 
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                
                <a 
                  href="#portfolio" 
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center space-x-2 backdrop-blur-sm"
                >
                  <span>View Our Work</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
