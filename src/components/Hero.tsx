
import React from 'react';
import { ArrowRight, Play, Code, Palette, Globe, Zap, Shield, Database, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 rounded-full blur-3xl"></div>
        
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, #3b82f6 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll fade-in-left">
            {/* Status Badge */}
            <div className="inline-flex items-center bg-green-50 border border-green-200 text-green-700 rounded-full px-6 py-3 mb-8 shadow-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold">Available for New Projects</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-[1.1]">
              Digital Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
                That Drive Success
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              JBLinx Studio delivers premium games, applications, digital publishing, and comprehensive 
              tech solutions that transform businesses and exceed expectations.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { icon: Code, text: "Custom Development", color: "from-blue-500 to-cyan-500" },
                { icon: Palette, text: "Creative Design", color: "from-purple-500 to-pink-500" },
                { icon: Globe, text: "Global Solutions", color: "from-green-500 to-emerald-500" },
                { icon: Zap, text: "Fast Delivery", color: "from-orange-500 to-red-500" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a 
                href="#portfolio" 
                className="border-2 border-gray-300 text-gray-700 px-12 py-5 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center group text-lg font-semibold"
              >
                <Play className="mr-3 group-hover:scale-110 transition-transform" size={20} />
                View Our Work
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-600 font-medium">100+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-gray-600 font-medium">5+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Visual */}
          <div className="relative animate-on-scroll fade-in-right">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-2xl border border-gray-200">
                {/* Tech Stack Grid */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { icon: Code, label: "Development", color: "from-blue-500 to-cyan-500" },
                    { icon: Palette, label: "Design", color: "from-purple-500 to-pink-500" },
                    { icon: Database, label: "Data", color: "from-green-500 to-emerald-500" },
                    { icon: Shield, label: "Security", color: "from-red-500 to-orange-500" },
                    { icon: Globe, label: "Web", color: "from-indigo-500 to-purple-500" },
                    { icon: Zap, label: "Speed", color: "from-yellow-500 to-orange-500" }
                  ].map((tech, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className={`w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mx-auto mb-3`}>
                        <tech.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-center text-sm font-semibold text-gray-700">{tech.label}</div>
                    </div>
                  ))}
                </div>

                {/* Central Logo */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-xl mb-4">
                    <span className="text-white font-bold text-2xl">JB</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">JBLinx Studio</h3>
                  <p className="text-gray-600">Premium Tech Solutions</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl rotate-12 shadow-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl -rotate-12 shadow-lg"></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg rotate-45 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
