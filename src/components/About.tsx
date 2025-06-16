
import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Focused on delivering innovative solutions that solve real-world problems"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with extensive experience in technology and design"
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Commitment to excellence in every project we undertake"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">JBLinx Studio</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              JBLinx Studio is a forward-thinking technology company specializing in creating 
              innovative digital solutions. From games and mobile applications to web platforms 
              and enterprise software, we transform ideas into reality.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Our passion for technology drives us to constantly explore new possibilities, 
              ensuring that every project we deliver exceeds expectations and provides 
              exceptional value to our clients.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-30 transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-30 transform -translate-x-16 translate-y-16"></div>
              
              <div className="relative z-10 space-y-6">
                {/* Team Illustration */}
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900">Our Journey</h4>
                    <div className="text-sm text-gray-500">2019 - 2024</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Founded JBLinx Studio</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">50+ Projects Delivered</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">Industry Recognition</span>
                    </div>
                  </div>
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">100+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
