
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Innovative</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tech Solutions
              </span>
              <br />
              <span className="text-gray-900">for Modern</span>
              <br />
              <span className="text-gray-900">Business</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At JBLinx Studio, we create cutting-edge games, applications, web solutions, 
              and digital services that drive innovation and transform businesses in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-semibold flex items-center justify-center group">
                Get Started Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphic */}
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50 transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-50 transform -translate-x-12 translate-y-12"></div>
              
              <div className="relative z-10">
                <div className="bg-white rounded-2xl p-6 shadow-xl mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      JB
                    </div>
                    <div className="ml-4">
                      <div className="font-bold text-gray-900">JBLinx Studio</div>
                      <div className="text-sm text-gray-500">Tech Innovation Hub</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                      <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Games</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <div className="w-4 h-4 bg-purple-600 rounded"></div>
                    </div>
                    <div className="text-sm font-semibold text-gray-900">Apps</div>
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

export default Hero;
