
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
            <h1 className="heading-primary text-white mb-6">
              Delivering Superior
              <br />
              Services{' '}
              <span className="text-gradient">IT Solutions.</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              You can easily change any design to your own. It is also highly customizable SEO friendly template.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary-template inline-flex items-center justify-center group">
                Get Quotes
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <a href="#services" className="btn-secondary-template inline-flex items-center justify-center">
                Get Started
              </a>
            </div>
          </div>

          {/* Right Side - Hero Image/Illustration */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center animate-on-scroll fade-in-right">
            <div className="relative w-full max-w-lg">
              {/* Main illustration container */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary-gradient rounded-full blur-3xl opacity-20 animate-pulse"></div>
                
                {/* Main circle */}
                <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 rounded-full border border-white/20 backdrop-blur-lg shadow-2xl">
                  {/* Inner content */}
                  <div className="absolute inset-8 bg-gradient-to-br from-white/5 to-transparent rounded-full border border-white/10">
                    {/* Tech pattern */}
                    <svg className="w-full h-full opacity-30" viewBox="0 0 200 200">
                      <defs>
                        <pattern id="tech-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="#ffffff" strokeWidth="0.5" opacity="0.3"/>
                          <circle cx="10" cy="10" r="1.5" fill="#ffffff" opacity="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#tech-pattern)"/>
                    </svg>
                    
                    {/* Central elements */}
                    <div className="absolute inset-16 flex items-center justify-center">
                      <div className="w-20 h-20 bg-primary-gradient rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-8 h-8 bg-primary-gradient rounded-lg opacity-70 animate-float delay-100"></div>
              <div className="absolute bottom-20 right-10 w-6 h-6 bg-white/20 rounded-full opacity-70 animate-float delay-300"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-white/30 rounded-full opacity-70 animate-float delay-500"></div>
              <div className="absolute bottom-10 left-20 w-5 h-5 bg-primary-gradient rounded-lg opacity-70 animate-float delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="chat-widget">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
