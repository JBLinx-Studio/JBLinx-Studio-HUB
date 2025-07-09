
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Phone, MapPin, Terminal, Code, Zap } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const services = [
    "Game Development",
    "Mobile Applications", 
    "Web Development",
    "Custom Software",
    "Database Solutions",
    "Cybersecurity",
    "Cloud Services",
    "Digital Publishing"
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Case Studies", href: "#" },
    { name: "Blog", href: "#blog" },
    { name: "Careers", href: "#" },
    { name: "Support", href: "#" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" }
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-orange-500/5 blur-3xl rounded-full"></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-4xl font-black mb-8 font-mono tracking-wider hover:scale-105 transition-transform duration-300 cursor-pointer">
              <span className="text-emerald-400">JBLINX</span>
              <span className="text-white">STUDIO</span>
            </div>
            
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-8"></div>
            
            <p className="text-slate-300 mb-8 leading-relaxed font-mono text-base">
              Leading technology solutions provider specializing in innovative games, applications, 
              web solutions, and digital services that transform businesses and exceed expectations.
            </p>
            
            <Separator className="bg-emerald-500/30 mb-8" />
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-300 font-mono text-base hover:text-emerald-400 transition-colors group">
                <Phone size={18} className="mr-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300 font-mono text-base hover:text-emerald-400 transition-colors group">
                <Mail size={18} className="mr-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>hello@jblinxstudio.com</span>
              </div>
              <div className="flex items-start text-slate-300 font-mono text-base hover:text-emerald-400 transition-colors group">
                <MapPin size={18} className="mr-4 mt-1 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>123 Innovation Street<br />Tech City, TC 12345</span>
              </div>
            </div>

            <Separator className="bg-emerald-500/20 mb-8" />

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/JBLinx-Studio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110">
                <Github size={22} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110">
                <Linkedin size={22} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110">
                <Twitter size={22} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="mailto:hello@jblinxstudio.com" className="w-12 h-12 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110">
                <Mail size={22} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black mb-8 text-white font-mono tracking-[0.1em] flex items-center">
              <Code className="mr-3 text-emerald-400" size={22} />
              OUR_SERVICES
            </h4>
            <Separator className="bg-emerald-500/20 mb-6" />
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center group font-mono text-base">
                    <Terminal size={16} className="mr-3 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all text-emerald-400" />
                    <span className="group-hover:translate-x-1 transition-transform">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-8 text-white font-mono tracking-[0.1em] flex items-center">
              <Zap className="mr-3 text-emerald-400" size={22} />
              QUICK_LINKS
            </h4>
            <Separator className="bg-emerald-500/20 mb-6" />
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center group font-mono text-base">
                    <Terminal size={16} className="mr-3 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all text-emerald-400" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h4 className="text-xl font-black mb-8 text-white font-mono tracking-[0.1em] flex items-center">
              <Mail className="mr-3 text-emerald-400" size={22} />
              STAY_UPDATED
            </h4>
            <Separator className="bg-emerald-500/20 mb-6" />
            <p className="text-slate-300 mb-6 font-mono text-base leading-relaxed">
              Subscribe to our newsletter for the latest updates on projects, technologies, and industry insights.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-10">
              <div className="flex border border-slate-600/50 hover:border-emerald-400/50 transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 bg-slate-900/60 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-white font-mono text-base placeholder:text-slate-500"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 transition-all duration-300 group hover:scale-105">
                  <Mail size={22} className="text-black group-hover:scale-110 transition-transform" />
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-3 font-mono">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            <Separator className="bg-emerald-500/20 mb-6" />

            {/* Legal Links */}
            <div>
              <h5 className="font-black mb-4 text-white font-mono tracking-[0.1em]">LEGAL</h5>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-slate-300 hover:text-emerald-400 transition-colors font-mono text-sm hover:translate-x-1 inline-block transition-transform">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-base mb-4 md:mb-0 font-mono">
              © 2024 JBLinx Studio. All rights reserved. Built with passion and cutting-edge technology.
            </div>
            <div className="flex items-center text-slate-400 text-base font-mono">
              Made with <Heart className="mx-3 text-emerald-400 animate-pulse" size={18} /> by the JBLinx Studio Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
