
import React from 'react';
import { 
  Gamepad2, 
  Smartphone, 
  Globe, 
  Code, 
  Book, 
  Rss, 
  Database,
  Shield,
  Cloud,
  Zap,
  ArrowRight 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Create immersive gaming experiences with cutting-edge technology and engaging gameplay mechanics for all platforms.",
      features: ["Unity Development", "Mobile Games", "Web Games", "AR/VR Games"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences and drive business growth.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Responsive web applications built with modern frameworks, optimized for performance and user experience.",
      features: ["React/Next.js", "Vue.js", "Progressive Web Apps", "E-commerce"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailored software solutions designed to meet your specific business requirements and operational needs.",
      features: ["Enterprise Solutions", "API Development", "System Integration", "Automation"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management solutions for scalable and secure data handling.",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Cloud Databases"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud migration, deployment, and management services to optimize your infrastructure and reduce costs.",
      features: ["AWS/Azure", "Cloud Migration", "DevOps", "Infrastructure as Code"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Book,
      title: "Digital Publishing",
      description: "Comprehensive digital content creation including books, guides, and educational materials for various platforms.",
      features: ["E-books", "Interactive Content", "Educational Resources", "Technical Documentation"],
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: Rss,
      title: "Content Creation",
      description: "Engaging content creation, blog development, and digital marketing strategies to boost your online presence.",
      features: ["Technical Writing", "Dev Logs", "Content Strategy", "SEO Optimization"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <Zap size={16} className="mr-2" />
            <span className="text-sm font-semibold">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Technology
            <span className="block text-blue-600">Solutions & Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full spectrum of technology services to help your business thrive in the digital landscape, 
            from concept to deployment and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}></div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a customized solution that drives results.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
