
import React from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Unity-powered survival, horror, and strategy games",
      color: "from-purple-500 to-pink-500",
      link: "/game-development"
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "React, Next.js, and modern web solutions",
      color: "from-blue-500 to-cyan-500",
      link: "/web-applications"
    },
    {
      icon: Database,
      title: "Backend APIs",
      description: "FastAPI, MySQL, and scalable architectures",
      color: "from-green-500 to-emerald-500",
      link: "/web-applications"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Flutter cross-platform applications",
      color: "from-orange-500 to-red-500",
      link: "/web-applications"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            What We Build
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From immersive gaming experiences to enterprise-grade applications
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/portfolio"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 space-x-3"
          >
            <span>View Our Work</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
