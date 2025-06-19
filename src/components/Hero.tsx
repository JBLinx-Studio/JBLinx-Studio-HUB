
import React from 'react';
import { ArrowRight, Play, Code, Palette, Globe, Zap, Shield, Database, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.05'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c11.046 0 20-8.954 20-20s-8.954-20-20-20-20 8.954-20 20 8.954 20 20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating geometric shapes inspired by template 2 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-purple-400/10 rounded-full blur-xl animate-float delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl animate-float delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content - taking inspiration from both templates */}
          <div className="lg:col-span-7 order-2 lg:order-1 animate-on-scroll fade-in-left">
            {/* Badge inspired by template 1's clean approach */}
            <div className="inline-flex items-center bg-white shadow-lg rounded-full px-6 py-3 mb-8 border border-gray-100">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Premium Digital Solutions</span>
              <Star className="w-4 h-4 text-yellow-500 ml-2 fill-current" />
            </div>
            
            {/* Hero title combining both template styles */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
              Transform Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                Digital Vision
              </span>
              <br />
              <span className="text-gray-800">Into Reality</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              JBLinx Studio delivers cutting-edge digital solutions that drive innovation. From immersive games 
              to enterprise applications, we create experiences that captivate and convert.
            </p>

            {/* Feature highlights with enhanced styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Development</h4>
                  <p className="text-sm text-gray-500">Tailored solutions for your needs</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Creative Design</h4>
                  <p className="text-sm text-gray-500">Stunning visuals that convert</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Reach</h4>
                  <p className="text-sm text-gray-500">Worldwide deployment</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                  <p className="text-sm text-gray-500">Quick turnaround times</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
              </a>
              
              <a 
                href="#portfolio" 
                className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-2xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center group text-lg shadow-lg"
              >
                <Play className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                View Our Work
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">100+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">50+ Clients</span>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Visual inspired by template 2 */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center animate-on-scroll fade-in-right">
            <div className="relative w-full max-w-lg">
              {/* Main glass container with enhanced styling */}
              <div className="relative w-96 h-96 mx-auto lg:w-[450px] lg:h-[450px]">
                {/* Outer glow rings */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-2xl opacity-15 animate-pulse delay-500"></div>
                
                {/* Main container with glass effect */}
                <div className="relative w-full h-full bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Inner design elements */}
                  <div className="absolute inset-8 bg-gradient-to-br from-white/30 to-transparent rounded-2xl border border-white/10">
                    <div className="absolute inset-8 bg-gradient-to-br from-white/20 to-transparent rounded-xl border border-white/5">
                      
                      {/* Central logo with enhanced styling */}
                      <div className="absolute inset-16 flex items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-500 group">
                          <div className="text-white font-bold text-3xl group-hover:scale-110 transition-transform">JB</div>
                        </div>
                      </div>
                      
                      {/* Floating tech icons with enhanced positioning */}
                      <div className="absolute top-4 left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl animate-float delay-100">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="absolute top-16 right-4 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl animate-float delay-300">
                        <Palette className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="absolute bottom-12 left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-xl animate-float delay-500">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="absolute bottom-4 right-16 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-xl animate-float delay-200">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="absolute top-1/2 left-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-xl animate-float delay-700">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="absolute top-1/2 right-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-xl animate-float delay-400">
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
