
import React from 'react';
import { ArrowRight, Play, Code, Palette, Globe, Zap, Shield, Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-purple-500/20 rounded-full blur-xl animate-float delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-float delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white order-2 lg:order-1 animate-on-scroll fade-in-left">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/10">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-blue-100">Premium Digital Solutions</span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-white">Create</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Digital Excellence
              </span>
              <br />
              <span className="text-white">Together</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              JBLinx Studio transforms your vision into reality with cutting-edge games, applications, 
              digital publishing, and comprehensive tech solutions that drive innovation and success.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Custom Development</h4>
                  <p className="text-sm text-gray-400">Tailored solutions</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Creative Design</h4>
                  <p className="text-sm text-gray-400">Stunning visuals</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Global Reach</h4>
                  <p className="text-sm text-gray-400">Worldwide solutions</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Fast Delivery</h4>
                  <p className="text-sm text-gray-400">Quick turnaround</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                Start Your Project
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
              </a>
              
              <a 
                href="#portfolio" 
                className="border-2 border-white/30 text-white px-10 py-5 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm text-lg"
              >
                <Play className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Visual */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center animate-on-scroll fade-in-right">
            <div className="relative w-full max-w-2xl">
              {/* Main container */}
              <div className="relative w-96 h-96 mx-auto lg:w-[500px] lg:h-[500px]">
                {/* Outer glow rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse delay-500"></div>
                
                {/* Main glass container */}
                <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-lg shadow-2xl">
                  {/* Inner design elements */}
                  <div className="absolute inset-8 bg-gradient-to-br from-white/5 to-transparent rounded-full border border-white/10">
                    <div className="absolute inset-12 bg-gradient-to-br from-white/5 to-transparent rounded-full border border-white/5">
                      
                      {/* Central logo */}
                      <div className="absolute inset-20 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center shadow-lg transform hover:rotate-12 transition-transform duration-500 group">
                          <div className="text-white font-bold text-3xl group-hover:scale-110 transition-transform">JB</div>
                        </div>
                      </div>
                      
                      {/* Floating tech icons with enhanced positioning */}
                      <div className="absolute top-4 left-12 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl animate-float delay-100">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="absolute top-20 right-8 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl animate-float delay-300">
                        <Palette className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="absolute bottom-16 left-8 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-xl animate-float delay-500">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="absolute bottom-8 right-20 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-xl animate-float delay-200">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="absolute top-1/2 left-2 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-xl animate-float delay-700">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="absolute top-1/2 right-2 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-float delay-400">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute -top-8 left-1/4 w-8 h-8 bg-blue-400/40 rounded-full animate-float delay-800"></div>
              <div className="absolute -bottom-8 right-1/4 w-6 h-6 bg-purple-400/40 rounded-full animate-float delay-1000"></div>
              <div className="absolute top-1/3 -left-12 w-4 h-4 bg-green-400/40 rounded-full animate-float delay-1200"></div>
              <div className="absolute bottom-1/3 -right-12 w-10 h-10 bg-yellow-400/40 rounded-full animate-float delay-600"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
