
import React from 'react';
import { Gamepad2, Monitor, Smartphone, Book, PenTool, Database, Shield, Cloud, ArrowRight, Star, TrendingUp, Award, Users, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Game Development",
      description: "Create immersive gaming experiences with cutting-edge technology, stunning graphics, and engaging gameplay mechanics that captivate players worldwide.",
      icon: <Gamepad2 className="w-10 h-10 text-white" />,
      gradient: "from-purple-600 via-purple-500 to-indigo-600",
      bgImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop",
      features: ["Unity & Unreal Engine", "Cross-Platform Gaming", "VR/AR Experiences", "Multiplayer Integration"],
      stats: { projects: "25+", rating: "4.9", clients: "15+" },
      link: "/game-development",
      price: "From $5,000",
      duration: "4-8 weeks"
    },
    {
      title: "Web Applications",
      description: "Build responsive, scalable web applications with modern frameworks, exceptional UX/UI design, and robust backend architecture.",
      icon: <Monitor className="w-10 h-10 text-white" />,
      gradient: "from-blue-600 via-blue-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      features: ["React & Next.js", "Full-Stack Solutions", "E-commerce Platforms", "Progressive Web Apps"],
      stats: { projects: "40+", rating: "4.8", clients: "30+" },
      link: "/web-applications",
      price: "From $3,000",
      duration: "3-6 weeks"
    },
    {
      title: "Mobile Development",
      description: "Develop native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android platforms.",
      icon: <Smartphone className="w-10 h-10 text-white" />,
      gradient: "from-green-600 via-green-500 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      features: ["iOS & Android", "Flutter & React Native", "App Store Optimization", "Performance Optimization"],
      stats: { projects: "20+", rating: "4.9", clients: "18+" },
      link: "/mobile-development",
      price: "From $4,000",
      duration: "5-10 weeks"
    },
    {
      title: "Digital Publishing",
      description: "Comprehensive publishing services for books, e-books, and digital content with professional editing, design, and distribution strategies.",
      icon: <Book className="w-10 h-10 text-white" />,
      gradient: "from-orange-600 via-orange-500 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      features: ["Book Writing & Editing", "E-book Creation", "Content Strategy", "Distribution Networks"],
      stats: { projects: "15+", rating: "4.7", clients: "12+" },
      link: "/digital-publishing",
      price: "From $2,000",
      duration: "2-4 weeks"
    },
    {
      title: "Content Creation",
      description: "Engaging blogs, articles, and dev logs that showcase expertise, drive engagement, and connect with your target audience effectively.",
      icon: <PenTool className="w-10 h-10 text-white" />,
      gradient: "from-pink-600 via-pink-500 to-rose-600",
      bgImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      features: ["Technical Writing", "Blog Management", "SEO Optimization", "Content Marketing"],
      stats: { projects: "50+", rating: "4.8", clients: "25+" },
      link: "/content-creation",
      price: "From $500",
      duration: "1-2 weeks"
    },
    {
      title: "Database Solutions",
      description: "Design and implement robust database architectures that ensure data integrity, optimal performance, and scalable infrastructure.",
      icon: <Database className="w-10 h-10 text-white" />,
      gradient: "from-indigo-600 via-indigo-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      features: ["SQL & NoSQL", "Data Migration", "Performance Tuning", "Cloud Databases"],
      stats: { projects: "30+", rating: "4.9", clients: "20+" },
      link: "/database-solutions",
      price: "From $2,500",
      duration: "3-5 weeks"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security audits, penetration testing, and advanced security consulting services.",
      icon: <Shield className="w-10 h-10 text-white" />,
      gradient: "from-red-600 via-red-500 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
      features: ["Security Audits", "Penetration Testing", "Compliance Solutions", "Incident Response"],
      stats: { projects: "18+", rating: "4.9", clients: "15+" },
      link: "/cybersecurity",
      price: "From $1,500",
      duration: "2-3 weeks"
    },
    {
      title: "Cloud Services",
      description: "Leverage cloud technologies for scalable, reliable, and cost-effective infrastructure solutions with expert deployment and management.",
      icon: <Cloud className="w-10 h-10 text-white" />,
      gradient: "from-cyan-600 via-cyan-500 to-blue-600",
      bgImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      features: ["AWS & Azure", "DevOps Solutions", "Cloud Migration", "Infrastructure as Code"],
      stats: { projects: "35+", rating: "4.8", clients: "22+" },
      link: "/cloud-services",
      price: "From $3,500",
      duration: "4-7 weeks"
    }
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-float delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header with more professional styling */}
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
              <span className="text-sm font-semibold text-gray-700">100+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <Target className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">200+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">24/7 Support</span>
            </div>
          </div>
        </div>

        {/* Enhanced Services Grid with better spacing and styling */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image with enhanced overlay */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.bgImage} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}></div>
                
                {/* Enhanced overlay content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10">
                      {service.icon}
                    </div>
                    
                    {/* Enhanced stats badge */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
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
                    <div className="flex justify-between items-center text-white/80 text-sm">
                      <div className="flex space-x-4">
                        <span>{service.stats.projects} Projects</span>
                        <span>{service.stats.clients} Clients</span>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-200 font-semibold">{service.price}</div>
                        <div className="text-white/60 text-xs">{service.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced content section */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Grid with better styling */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enhanced Call to Action */}
                <Link 
                  to={service.link}
                  className="inline-flex items-center justify-between w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 rounded-2xl p-4 group/cta transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:shadow-lg"
                >
                  <span className="font-semibold text-gray-700 group-hover/cta:text-blue-600 transition-colors">
                    Explore {service.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover/cta:text-blue-600 group-hover/cta:translate-x-1 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action Section */}
        <div className="relative animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-4xl p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Enhanced background pattern */}
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

              {/* Additional trust indicators */}
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
