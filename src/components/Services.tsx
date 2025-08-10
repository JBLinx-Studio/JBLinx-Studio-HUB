
import React from 'react';
import { Gamepad2, Smartphone, Globe, Code, Book, Rss, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Immersive gaming experiences with cutting-edge technology and engaging gameplay mechanics.",
      features: ["Mobile Games", "Web Games", "AR/VR Games"]
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "Cross-Platform"]
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Responsive web applications built with modern frameworks and best practices.",
      features: ["React/Next.js", "Progressive Web Apps", "E-commerce"]
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements.",
      features: ["Enterprise Solutions", "API Development", "System Integration"]
    },
    {
      icon: Book,
      title: "Digital Publishing",
      description: "Comprehensive digital content creation including books, guides, and educational materials.",
      features: ["E-books", "Interactive Content", "Educational Resources"]
    },
    {
      icon: Rss,
      title: "Content & Blogs",
      description: "Engaging content creation, blog development, and digital marketing strategies.",
      features: ["Technical Writing", "Dev Logs", "Content Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of technology services to help your business thrive in the digital landscape
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-blue-600" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="flex items-center text-blue-600 font-semibold group-hover:text-purple-600 transition-colors">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
