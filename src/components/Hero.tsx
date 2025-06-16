
import React from 'react';
import { ArrowRight, Play, Star, Users, Award, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-50 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center bg-blue-50 text-blue-600 rounded-full px-6 py-2 mb-8">
              <Star className="w-4 h-4 mr-2 fill-current" />
              <span className="text-sm font-semibold">Top Rated IT Solutions</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Digital
              <span className="block text-blue-600">Innovation</span>
              <span className="block">For Your Business</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
              We create cutting-edge digital solutions that drive growth, enhance user experience, 
              and transform businesses in the modern digital landscape.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold flex items-center justify-center group shadow-lg">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">250+</span>
                </div>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">150+</span>
                </div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="text-3xl font-bold text-gray-900">8+</span>
                </div>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Image/Cards */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-5"></div>
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">JB</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-gray-900">JBLinx Studio</h3>
                    <p className="text-sm text-gray-500">Digital Solutions</p>
                  </div>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4 mb-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">Web Development</span>
                    <span className="text-blue-600">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">Mobile Apps</span>
                    <span className="text-purple-600">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-700">Game Development</span>
                    <span className="text-green-600">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Web Apps</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Mobile</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-green-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Games</p>
                </div>
                <div className="bg-orange-50 rounded-xl p-3 text-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Cloud</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center animate-bounce">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center animate-pulse">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
