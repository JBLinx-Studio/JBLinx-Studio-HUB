
import React from 'react';
import { ArrowRight, Play, Code, Palette, Globe, Zap, Shield, Database, Star, CheckCircle, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      {/* Enhanced background with animated particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl animate-float delay-700"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-3xl animate-float delay-300"></div>
      <div className="absolute top-1/3 right-1/3 w-36 h-36 bg-pink-400/20 rounded-full blur-3xl animate-float delay-500"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 animate-on-scroll fade-in-left">
            {/* Premium badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8 shadow-2xl">
              <Award className="w-5 h-5 text-yellow-400 mr-3" />
              <span className="text-sm font-semibold text-white">Award-Winning Development Studio</span>
              <div className="w-2 h-2 bg-green-400 rounded-full ml-3 animate-pulse"></div>
            </div>
            
            {/* Hero title with premium styling */}
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight text-white">
              JBLinx
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Studio
              </span>
            </h1>
            
            <div className="text-2xl font-light text-blue-100 mb-6">
              Innovative Game Development & Tech Solutions
            </div>
            
            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-2xl">
              From immersive survival games to enterprise applications, we craft digital experiences 
              that push boundaries. Specializing in Unity development, web applications, and cutting-edge tech solutions.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Game Development</h4>
                  <p className="text-sm text-gray-400">Unity, Unreal & Custom Engines</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Web Applications</h4>
                  <p className="text-sm text-gray-400">React, Node.js & Full-Stack</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Backend Solutions</h4>
                  <p className="text-sm text-gray-400">APIs, Databases & Cloud</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Rapid Prototyping</h4>
                  <p className="text-sm text-gray-400">Fast MVP Development</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center group shadow-2xl border border-blue-500/20"
              >
                Start Your Project
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
              </a>
              
              <a 
                href="#portfolio" 
                className="border-2 border-white/30 text-white px-12 py-6 rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center group text-lg shadow-2xl backdrop-blur-sm transform hover:-translate-y-1"
              >
                <Play className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                View Our Games
              </a>
            </div>

            {/* Trust indicators with enhanced styling */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">5+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Open Source Repos</div>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced 3D Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex items-center justify-center animate-on-scroll fade-in-right">
            <div className="relative w-full max-w-lg">
              <div className="relative w-96 h-96 mx-auto lg:w-[500px] lg:h-[500px]">
                {/* Multiple layered glow effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-2xl opacity-20 animate-pulse delay-500"></div>
                <div className="absolute inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-15 animate-pulse delay-1000"></div>
                
                {/* Main glass container */}
                <div className="relative w-full h-full bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Inner design with multiple layers */}
                  <div className="absolute inset-6 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/5">
                    <div className="absolute inset-6 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/5">
                      
                      {/* Central JBLinx logo with enhanced styling */}
                      <div className="absolute inset-12 flex items-center justify-center">
                        <div className="w-40 h-40 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-all duration-700 group border border-white/20">
                          <div className="text-white font-bold text-4xl group-hover:scale-110 transition-transform">JB</div>
                        </div>
                      </div>
                      
                      {/* Floating tech icons with game development focus */}
                      <div className="absolute top-2 left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float delay-100 border border-white/20">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="absolute top-12 right-2 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl animate-float delay-300 border border-white/20">
                        <Palette className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="absolute bottom-8 left-2 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-2xl animate-float delay-500 border border-white/20">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="absolute bottom-2 right-12 w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-2xl animate-float delay-200 border border-white/20">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="absolute top-1/2 left-0 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-2xl animate-float delay-700 border border-white/20">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="absolute top-1/3 right-0 w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-2xl animate-float delay-400 border border-white/20">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional floating elements */}
              <div className="absolute -top-8 left-1/4 w-8 h-8 bg-blue-400/40 rounded-full animate-float delay-800 shadow-lg"></div>
              <div className="absolute -bottom-8 right-1/4 w-6 h-6 bg-purple-400/40 rounded-full animate-float delay-1000 shadow-lg"></div>
              <div className="absolute top-1/3 -left-12 w-4 h-4 bg-green-400/40 rounded-full animate-float delay-1200 shadow-lg"></div>
              <div className="absolute bottom-1/3 -right-12 w-10 h-10 bg-yellow-400/40 rounded-full animate-float delay-600 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
