
import React, { useState } from 'react';
import { ArrowRight, Star, TrendingUp, Award, Users, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mainServices, additionalServices } from '../data/servicesData';
import ServiceCard from './services/ServiceCard';
import ServiceFilters from './services/ServiceFilters';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Services', count: mainServices.length + additionalServices.length },
    { id: 'development', label: 'Development', count: 3 },
    { id: 'publishing', label: 'Publishing', count: 2 },
    { id: 'infrastructure', label: 'Infrastructure', count: 3 }
  ];

  const getFilteredServices = () => {
    if (activeFilter === 'all') return mainServices;
    return mainServices.filter(service => {
      switch (activeFilter) {
        case 'development':
          return ['game-development', 'web-applications', 'mobile-development'].includes(service.id);
        case 'publishing':
          return ['digital-publishing', 'content-creation'].includes(service.id);
        case 'infrastructure':
          return ['database-solutions', 'cybersecurity', 'cloud-services'].includes(service.id);
        default:
          return true;
      }
    });
  };

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-float delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="inline-flex items-center bg-white shadow-lg rounded-full px-8 py-4 mb-8 border border-gray-100">
            <TrendingUp className="w-5 h-5 mr-3 text-blue-600" />
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">Premium Digital Services</span>
            <div className="w-2 h-2 bg-green-500 rounded-full ml-3 animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Comprehensive
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
              Tech Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            From innovative games to enterprise applications, we deliver end-to-end digital solutions 
            that drive success, exceed expectations, and transform your business vision into reality.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-gray-700">250+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">500+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Service Filters */}
        <ServiceFilters
          options={filterOptions}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {getFilteredServices().map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isHovered={hoveredService === service.id}
              onHover={setHoveredService}
            />
          ))}
        </div>

        {/* Additional Services */}
        {activeFilter === 'all' && (
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Additional Services
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-white rounded-lg"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.subcategories.slice(0, 2).map((sub, subIndex) => (
                      <div key={subIndex} className="text-xs text-gray-500">
                        • {sub.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action Section */}
        <div className="relative animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-4xl p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold">Ready to Get Started?</span>
              </div>

              <h3 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your Vision Into
                <span className="block text-yellow-300">Digital Reality</span>
              </h3>
              
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how we can bring your creative vision to life with our comprehensive 
                digital solutions and expert development team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="#contact" 
                  className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl inline-flex items-center justify-center group hover:scale-105 transform duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#portfolio" 
                  className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center text-lg backdrop-blur-sm hover:scale-105 transform duration-300"
                >
                  View Portfolio
                </a>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">99%</div>
                  <div className="text-sm text-blue-100 uppercase tracking-wider">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-blue-100 uppercase tracking-wider">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">48h</div>
                  <div className="text-sm text-blue-100 uppercase tracking-wider">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
