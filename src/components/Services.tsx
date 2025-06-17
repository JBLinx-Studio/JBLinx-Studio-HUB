
import React from 'react';
import { 
  Gamepad2, 
  Smartphone, 
  Globe, 
  Code, 
  Database,
  Shield,
  Cloud,
  Palette,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Create engaging and immersive gaming experiences with cutting-edge technology and innovative gameplay mechanics.",
      features: ["Unity Development", "Mobile Games", "Web Games", "AR/VR Solutions"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences and drive business growth.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive web applications built with latest technologies, optimized for performance and user experience.",
      features: ["React/Next.js", "Vue.js", "Progressive Web Apps", "E-commerce Solutions"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements and operational efficiency.",
      features: ["Enterprise Solutions", "API Development", "System Integration", "Process Automation"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management for scalable and secure data handling across platforms.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Cloud Databases"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Risk Assessment"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management services to optimize infrastructure and reduce operational costs.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Infrastructure as Code"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and visually appealing digital experiences for your audience.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <CheckCircle size={16} className="mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional IT Solutions
            <span className="block text-blue-600">For Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive technology solutions that drive innovation, enhance productivity, 
            and accelerate your business growth in the digital marketplace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-3 flex-shrink-0`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <button className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors text-sm">
                  Learn More
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a customized solution that drives real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
