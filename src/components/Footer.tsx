
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Phone, MapPin, ExternalLink, Terminal, Code, Zap } from 'lucide-react';

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
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-orange-500/5 blur-3xl rounded-full"></div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-black mb-6 font-mono tracking-wider">
              <span className="text-emerald-400">JBLINX</span>
              <span className="text-white">STUDIO</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed font-mono text-sm">
              Leading technology solutions provider specializing in innovative games, applications, 
              web solutions, and digital services that transform businesses and exceed expectations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-slate-400 font-mono text-sm">
                <Phone size={16} className="mr-3 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-400 font-mono text-sm">
                <Mail size={16} className="mr-3 text-emerald-400" />
                <span>hello@jblinxstudio.com</span>
              </div>
              <div className="flex items-start text-slate-400 font-mono text-sm">
                <MapPin size={16} className="mr-3 mt-1 text-emerald-400" />
                <span>123 Innovation Street<br />Tech City, TC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/JBLinx-Studio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800 transition-all group">
                <Github size={20} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800 transition-all group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800 transition-all group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="mailto:hello@jblinxstudio.com" className="w-10 h-10 bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800 transition-all group">
                <Mail size={20} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-black mb-6 text-white font-mono tracking-wider flex items-center">
              <Code className="mr-2 text-emerald-400" size={20} />
              OUR_SERVICES
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center group font-mono text-sm">
                    <Terminal size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6 text-white font-mono tracking-wider flex items-center">
              <Zap className="mr-2 text-emerald-400" size={20} />
              QUICK_LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center group font-mono text-sm">
                    <Terminal size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h4 className="text-lg font-black mb-6 text-white font-mono tracking-wider flex items-center">
              <Mail className="mr-2 text-emerald-400" size={20} />
              STAY_UPDATED
            </h4>
            <p className="text-slate-400 mb-4 font-mono text-sm">
              Subscribe to our newsletter for the latest updates on projects, technologies, and industry insights.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 focus:outline-none focus:border-emerald-400 text-white font-mono text-sm"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 transition-colors">
                  <Mail size={20} className="text-black" />
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2 font-mono">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Legal Links */}
            <div>
              <h5 className="font-black mb-3 text-white font-mono tracking-wider">LEGAL</h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-mono">
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
      <div className="border-t border-slate-800 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0 font-mono">
              © 2024 JBLinx Studio. All rights reserved. Built with passion and cutting-edge technology.
            </div>
            <div className="flex items-center text-slate-400 text-sm font-mono">
              Made with <Heart className="mx-2 text-emerald-400" size={16} /> by the JBLinx Studio Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
