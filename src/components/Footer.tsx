
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Phone, MapPin, ExternalLink } from 'lucide-react';

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
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-bold mb-6">
              <span className="text-blue-400">JBLinx</span>
              <span className="text-white">Studio</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading technology solutions provider specializing in innovative games, applications, 
              web solutions, and digital services that transform businesses and exceed expectations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-3" />
                <span>hello@jblinxstudio.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin size={16} className="mr-3 mt-1" />
                <span>123 Innovation Street<br />Tech City, TC 12345</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/JBLinx-Studio" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Twitter size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:hello@jblinxstudio.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                    <ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group">
                    <ExternalLink size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on projects, technologies, and industry insights.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg transition-colors">
                  <Mail size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>

            {/* Legal Links */}
            <div>
              <h5 className="font-semibold mb-3 text-white">Legal</h5>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
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
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 JBLinx Studio. All rights reserved. Built with passion and cutting-edge technology.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Made with <Heart className="mx-2 text-red-500" size={16} /> by the JBLinx Studio Team
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
