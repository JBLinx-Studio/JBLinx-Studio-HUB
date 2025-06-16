
import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="7"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <CheckCircle className="text-green-400 mr-2" size={16} />
              <span className="text-sm">Professional IT Solutions Provider</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Innovative
              <span className="block text-blue-300">Technology</span>
              <span className="block">Solutions</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
              We provide cutting-edge games, mobile apps, web applications, and digital services 
              that transform businesses and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group shadow-xl">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold flex items-center justify-center group backdrop-blur-sm">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Watch Our Work
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">100+</div>
                <div className="text-blue-100 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-blue-100 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 mb-2">5+</div>
                <div className="text-blue-100 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Animation */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 relative overflow-hidden border border-white/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                        JB
                      </div>
                      <div className="ml-4">
                        <div className="font-bold text-white">JBLinx Studio</div>
                        <div className="text-sm text-blue-200">Technology Solutions</div>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Services Preview */}
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">Game Development</span>
                        <span className="text-green-400 text-sm">Active</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">Mobile Apps</span>
                        <span className="text-blue-400 text-sm">In Progress</span>
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-medium">Web Solutions</span>
                        <span className="text-purple-400 text-sm">Planning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
