
import React from 'react';
import { Gamepad2, Monitor, Smartphone, Book, PenTool, Database, Shield, Cloud } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Game Development",
      description: "Create immersive gaming experiences across multiple platforms with cutting-edge technology and innovative gameplay.",
      icon: <Gamepad2 className="w-8 h-8 text-white" />,
      color: "from-purple-500 to-indigo-600",
      features: ["Unity & Unreal Engine", "Mobile & PC Games", "VR/AR Experiences"]
    },
    {
      title: "Web Applications",
      description: "Build responsive, scalable web applications that deliver exceptional user experiences and drive business growth.",
      icon: <Monitor className="w-8 h-8 text-white" />,
      color: "from-blue-500 to-cyan-600",
      features: ["React & Next.js", "Full-Stack Solutions", "E-commerce Platforms"]
    },
    {
      title: "Mobile Development",
      description: "Develop native and cross-platform mobile applications that engage users and enhance your digital presence.",
      icon: <Smartphone className="w-8 h-8 text-white" />,
      color: "from-green-500 to-emerald-600",
      features: ["iOS & Android", "Flutter & React Native", "App Store Optimization"]
    },
    {
      title: "Digital Publishing",
      description: "Comprehensive publishing services for books, e-books, and digital content with professional editing and design.",
      icon: <Book className="w-8 h-8 text-white" />,
      color: "from-orange-500 to-red-600",
      features: ["Book Writing & Editing", "E-book Creation", "Content Strategy"]
    },
    {
      title: "Content Creation",
      description: "Engaging blogs, articles, and dev logs that showcase expertise and connect with your target audience.",
      icon: <PenTool className="w-8 h-8 text-white" />,
      color: "from-pink-500 to-rose-600",
      features: ["Technical Writing", "Blog Management", "SEO Optimization"]
    },
    {
      title: "Database Solutions",
      description: "Design and implement robust database architectures that ensure data integrity and optimal performance.",
      icon: <Database className="w-8 h-8 text-white" />,
      color: "from-indigo-500 to-purple-600",
      features: ["SQL & NoSQL", "Data Migration", "Performance Tuning"]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security audits, penetration testing, and security consulting.",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "from-red-500 to-pink-600",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions"]
    },
    {
      title: "Cloud Services",
      description: "Leverage cloud technologies for scalable, reliable, and cost-effective infrastructure solutions.",
      icon: <Cloud className="w-8 h-8 text-white" />,
      color: "from-cyan-500 to-blue-600",
      features: ["AWS & Azure", "DevOps Solutions", "Cloud Migration"]
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="section-title">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From innovative games to enterprise applications, we deliver end-to-end digital solutions 
            that drive success and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`icon bg-gradient-to-r ${service.color} mb-6`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <a 
                  href={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center group"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                Get Free Consultation
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
