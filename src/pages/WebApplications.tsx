
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Monitor, Smartphone, Database, Cloud, Lock, Zap } from 'lucide-react';

const WebApplications = () => {
  const features = [
    {
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: "Responsive Design",
      description: "Create beautiful, responsive web applications that work perfectly on all devices and screen sizes."
    },
    {
      icon: <Database className="w-8 h-8 text-green-600" />,
      title: "Database Integration",
      description: "Seamlessly integrate with various databases and APIs for robust data management."
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      title: "Cloud Deployment",
      description: "Deploy applications on scalable cloud infrastructure for optimal performance and reliability."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-600" />,
      title: "Security First",
      description: "Implement advanced security measures to protect your application and user data."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Performance Optimization",
      description: "Optimize loading times and user experience with advanced performance techniques."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />,
      title: "Progressive Web Apps",
      description: "Build PWAs that combine the best of web and mobile app experiences."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Monitor className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">Web Application Development</h1>
            <p className="text-xl text-blue-100 mb-8">
              Build powerful, scalable web applications that drive business growth and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Start Your Web Project
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                View Web Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Web Development Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Technology Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <h3 className="font-bold mb-2">React</h3>
              <p className="text-gray-600 text-sm">Modern UI library</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <h3 className="font-bold mb-2">Next.js</h3>
              <p className="text-gray-600 text-sm">Full-stack framework</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <h3 className="font-bold mb-2">Node.js</h3>
              <p className="text-gray-600 text-sm">Backend runtime</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">TS</span>
              </div>
              <h3 className="font-bold mb-2">TypeScript</h3>
              <p className="text-gray-600 text-sm">Type-safe development</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebApplications;
