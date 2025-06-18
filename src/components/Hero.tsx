
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center relative">
      {/* Particles container */}
      <div className="particles-container">
        <div id="particles-js"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1 animate-on-scroll fade-in-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold">We're Creating Digital Excellence</span>
            </div>
            
            <h1 className="heading-primary text-white mb-6">
              Premium Digital Solutions for
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Modern Businesses</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              JBLinx Studio delivers cutting-edge games, applications, web solutions, books, blogs, and comprehensive digital services that transform your business vision into reality.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-200">Game Development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-200">Web Applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-200">Digital Publishing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-200">Custom Software</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#contact" className="btn-primary-template inline-flex items-center justify-center group">
                Get Started Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a href="#portfolio" className="btn-secondary-template inline-flex items-center justify-center group">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">25+</div>
                <div className="text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">5+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Hero Illustration */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center animate-on-scroll fade-in-right">
            <div className="relative w-full max-w-lg">
              {/* Main illustration container */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                
                {/* Main container */}
                <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-lg shadow-2xl">
                  {/* Inner circles */}
                  <div className="absolute inset-4 bg-gradient-to-br from-white/5 to-transparent rounded-full border border-white/10">
                    <div className="absolute inset-8 bg-gradient-to-br from-white/5 to-transparent rounded-full border border-white/5">
                      
                      {/* Central logo area */}
                      <div className="absolute inset-16 flex items-center justify-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
                          <div className="text-white font-bold text-xl">JB</div>
                        </div>
                      </div>
                      
                      {/* Floating tech icons */}
                      <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg animate-float delay-100">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                        </svg>
                      </div>
                      
                      <div className="absolute top-16 right-8 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-300">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      
                      <div className="absolute bottom-12 left-12 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg animate-float delay-500">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                        </svg>
                      </div>
                      
                      <div className="absolute bottom-8 right-16 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-float delay-200">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute -top-4 left-1/4 w-6 h-6 bg-blue-400/30 rounded-full animate-float delay-700"></div>
              <div className="absolute -bottom-4 right-1/4 w-4 h-4 bg-purple-400/30 rounded-full animate-float delay-900"></div>
              <div className="absolute top-1/3 -left-8 w-3 h-3 bg-green-400/30 rounded-full animate-float delay-1100"></div>
              <div className="absolute bottom-1/3 -right-8 w-5 h-5 bg-yellow-400/30 rounded-full animate-float delay-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
