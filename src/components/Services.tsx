
import React from 'react';
import { Gamepad2, Monitor, Smartphone, Book, PenTool, Database, Shield, Cloud, ArrowRight, Star, TrendingUp, Award, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Game Development",
      description: "Create immersive gaming experiences with cutting-edge technology and stunning graphics.",
      icon: <Gamepad2 className="w-8 h-8 text-white" />,
      gradient: "from-purple-600 to-indigo-600",
      bgImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      features: ["Unity & Unreal Engine", "Cross-Platform", "VR/AR Ready", "Multiplayer"],
      stats: { projects: "25+", rating: "4.9", clients: "15+" },
      link: "/game-development"
    },
    {
      title: "Web Applications",
      description: "Build responsive, scalable web applications with modern frameworks and exceptional UX.",
      icon: <Monitor className="w-8 h-8 text-white" />,
      gradient: "from-blue-600 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      features: ["React & Next.js", "Full-Stack", "E-commerce", "PWA"],
      stats: { projects: "40+", rating: "4.8", clients: "30+" },
      link: "/web-applications"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps with seamless user experiences.",
      icon: <Smartphone className="w-8 h-8 text-white" />,
      gradient: "from-green-600 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
      features: ["iOS & Android", "Flutter & React Native", "App Store Ready", "Performance"],
      stats: { projects: "20+", rating: "4.9", clients: "18+" },
      link: "/mobile-development"
    },
    {
      title: "Digital Publishing",
      description: "Comprehensive publishing services for books, e-books, and digital content.",
      icon: <Book className="w-8 h-8 text-white" />,
      gradient: "from-orange-600 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop",
      features: ["Writing & Editing", "E-book Creation", "Content Strategy", "Distribution"],
      stats: { projects: "15+", rating: "4.7", clients: "12+" },
      link: "/digital-publishing"
    }
  ];

  return (
    <section id="services" className="theme-section bg-gray-50">
      <div className="theme-container">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-6 py-3 mb-8 shadow-sm">
            <Target className="w-5 h-5 mr-2" />
            <span className="text-sm font-bold uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="theme-heading-secondary mb-8">
            Comprehensive
            <span className="block theme-text-gradient">
              Tech Solutions
            </span>
          </h2>
          
          <p className="theme-body-text max-w-3xl mx-auto">
            From innovative games to enterprise applications, we deliver end-to-end digital solutions 
            that drive success and transform your business vision into reality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="theme-grid-auto mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="theme-card group transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden rounded-t-3xl">
                <img 
                  src={service.bgImage} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-85`}></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 theme-glassmorphism rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    <div className="theme-glassmorphism rounded-xl px-4 py-2">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-300 fill-current" />
                        <span className="text-white font-semibold text-sm">{service.stats.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex space-x-6 text-white/80 text-sm">
                      <span>{service.stats.projects} Projects</span>
                      <span>{service.stats.clients} Clients</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="theme-body-text mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  to={service.link}
                  className="theme-button-secondary w-full justify-center group/cta"
                >
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/cta:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="theme-card p-12 shadow-lg mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "100+", label: "Projects Completed", icon: TrendingUp },
              { number: "50+", label: "Happy Clients", icon: Users },
              { number: "99%", label: "Success Rate", icon: Award },
              { number: "24/7", label: "Support", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="group">
                <stat.icon className="text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="block text-yellow-300">Digital Presence?</span>
            </h3>
            
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our comprehensive 
              digital solutions and expert development team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl inline-flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#portfolio" 
                className="border-2 border-white text-white px-12 py-5 rounded-full hover:bg-white/10 transition-colors inline-flex items-center justify-center text-lg backdrop-blur-sm"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
