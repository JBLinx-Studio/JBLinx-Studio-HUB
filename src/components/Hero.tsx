
import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://zrtechsolutions.com/demo/html/technoit/assets/images/hero-bg.png)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen pt-20">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
              <CheckCircle className="text-green-400 mr-2" size={16} />
              <span className="text-sm font-medium">Professional IT Solutions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              We Provide
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Best IT Solutions
              </span>
              <span className="block">For Business</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              JBLinx Studio delivers innovative technology solutions including games, mobile applications, 
              web development, and comprehensive digital services that drive business growth and success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold flex items-center justify-center group shadow-xl border border-blue-500/50">
                Get Started Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold flex items-center justify-center group backdrop-blur-sm">
                <Play className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                Learn More
              </button>
            </div>

            {/* Experience Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Hero Animation/Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Hero Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  {/* Technology Stack */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-4 text-center border border-blue-500/30">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-3"></div>
                      <div className="text-white font-semibold text-sm">Web Dev</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 text-center border border-purple-500/30">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg mx-auto mb-3"></div>
                      <div className="text-white font-semibold text-sm">Mobile</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-4 text-center border border-green-500/30">
                      <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-3"></div>
                      <div className="text-white font-semibold text-sm">Games</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl p-4 text-center border border-orange-500/30">
                      <div className="w-8 h-8 bg-orange-500 rounded-lg mx-auto mb-3"></div>
                      <div className="text-white font-semibold text-sm">Cloud</div>
                    </div>
                  </div>

                  {/* Progress Indicators */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2 text-white">
                        <span>Project Success Rate</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full w-[98%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 text-white">
                        <span>Client Satisfaction</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400/30 to-cyan-400/30 rounded-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-50 delay-500"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60 delay-1000"></div>
    </section>
  );
};

export default Hero;
