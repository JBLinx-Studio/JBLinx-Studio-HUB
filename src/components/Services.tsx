
import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Users, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mainServices } from '../data/servicesData';
import ServiceCard from './services/ServiceCard';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-4">
            <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Our Services</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What We
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Build</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional development solutions from games to enterprise applications.
          </p>
        </div>

        {/* Compact Trust Indicators */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="flex items-center space-x-1 bg-white rounded-lg px-3 py-2 shadow-sm">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-700">250+ Clients</span>
          </div>
          <div className="flex items-center space-x-1 bg-white rounded-lg px-3 py-2 shadow-sm">
            <Target className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-700">500+ Projects</span>
          </div>
          <div className="flex items-center space-x-1 bg-white rounded-lg px-3 py-2 shadow-sm">
            <Clock className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700">24/7 Support</span>
          </div>
        </div>

        {/* Streamlined Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
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

        {/* Compact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
