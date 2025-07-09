
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Phone, MapPin, Code, Zap, Trophy, ExternalLink, ChevronRight } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: "Game Development", href: "/game-development" },
    { name: "Web Applications", href: "/web-applications" }, 
    { name: "Mobile Development", href: "#services" },
    { name: "Backend Systems", href: "#services" },
    { name: "Cloud Services", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "Digital Publishing", href: "#services" },
    { name: "Content Creation", href: "#services" }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "#contact" },
    { name: "Support", href: "#contact" },
    { name: "Privacy", href: "#contact" }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Satisfaction", color: "text-yellow-400" },
    { icon: Code, value: "100+", label: "Projects", color: "text-blue-400" },
    { icon: Heart, value: "150+", label: "Clients", color: "text-purple-400" },
    { icon: Zap, value: "99.9%", label: "Uptime", color: "text-green-400" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/JBLinx-Studio", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/jblinx-studio", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/jblinxstudio", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@jblinxstudio.com", label: "Email" }
  ];

  return (
    <footer className="bg-black text-white border-t border-slate-800/30 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="group cursor-pointer mb-4">
              <div className="text-2xl font-black font-mono tracking-wider hover:scale-105 transition-all duration-300 flex items-center">
                <span className="text-emerald-400">JBLINX</span>
                <span className="text-white">STUDIO</span>
                <ChevronRight className="w-4 h-4 ml-2 text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 group-hover:w-24 transition-all duration-300"></div>
            </div>
            
            <p className="text-slate-300 mb-4 leading-relaxed font-mono text-sm group hover:text-slate-200 transition-colors cursor-default">
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">&lt;</span>
              Leading technology solutions provider specializing in innovative digital experiences.
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">/&gt;</span>
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <a href="tel:+15551234567" className="flex items-center text-slate-300 font-mono text-sm hover:text-emerald-400 transition-all group cursor-pointer">
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold mr-1">&lt;</span>
                <Phone size={14} className="mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>+1 (555) 123-4567</span>
                <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:hello@jblinxstudio.com" className="flex items-center text-slate-300 font-mono text-sm hover:text-emerald-400 transition-all group cursor-pointer">
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold mr-1">&lt;</span>
                <Mail size={14} className="mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>hello@jblinxstudio.com</span>
                <ExternalLink size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center text-slate-300 font-mono text-sm group cursor-default hover:text-emerald-400 transition-colors">
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold mr-1">&lt;</span>
                <MapPin size={14} className="mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Tech City, Innovation District</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 h-8 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110 relative overflow-hidden"
                    title={social.label}
                  >
                    <span className="absolute -left-full text-emerald-400 font-bold text-xs group-hover:left-0 transition-all duration-300">&lt;</span>
                    <IconComponent size={16} className="group-hover:scale-110 transition-transform text-emerald-400 z-10" />
                    <span className="absolute -right-full text-emerald-400 font-bold text-xs group-hover:right-0 transition-all duration-300">/&gt;</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-black mb-3 text-white font-mono tracking-[0.1em] flex items-center group cursor-default">
              <Code className="mr-2 text-emerald-400 group-hover:rotate-12 transition-transform" size={16} />
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold mr-1">&lt;</span>
              OUR_SERVICES
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold ml-1">/&gt;</span>
            </h4>
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-slate-300 hover:text-emerald-400 transition-all font-mono text-xs hover:translate-x-2 inline-flex items-center group cursor-pointer"
                  >
                    <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold mr-1">&lt;</span>
                    <span className="group-hover:underline underline-offset-2 decoration-emerald-400/50">{service.name}</span>
                    <ChevronRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-3 text-white font-mono tracking-[0.1em] flex items-center group cursor-default">
              <Zap className="mr-2 text-emerald-400 group-hover:rotate-12 transition-transform" size={16} />
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold mr-1">&lt;</span>
              QUICK_LINKS
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold ml-1">/&gt;</span>
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-emerald-400 transition-all font-mono text-xs hover:translate-x-2 inline-flex items-center group cursor-pointer"
                  >
                    <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold mr-1">&lt;</span>
                    <span className="group-hover:underline underline-offset-2 decoration-emerald-400/50">{link.name}</span>
                    <ChevronRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements & Newsletter */}
          <div>
            <h4 className="text-sm font-black mb-3 text-white font-mono tracking-[0.1em] flex items-center group cursor-default">
              <Trophy className="mr-2 text-emerald-400 group-hover:rotate-12 transition-transform" size={16} />
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold mr-1">&lt;</span>
              ACHIEVEMENTS
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold ml-1">/&gt;</span>
            </h4>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer bg-slate-900/30 border border-slate-800/50 p-2 hover:border-emerald-400/30 hover:bg-slate-800/50 transition-all">
                    <div className="w-6 h-6 bg-slate-700/50 border border-slate-600/50 flex items-center justify-center mx-auto mb-1 group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-300 relative">
                      <span className="absolute -top-1 -left-1 text-emerald-400 font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">&lt;</span>
                      <IconComponent className={`w-3 h-3 ${achievement.color} group-hover:text-emerald-400 transition-colors duration-300`} />
                    </div>
                    
                    <div className="text-xs font-black text-white mb-0.5 group-hover:text-emerald-300 transition-colors duration-300 font-mono">
                      {achievement.value}
                    </div>
                    
                    <div className="text-slate-400 font-medium text-xs group-hover:text-slate-300 transition-colors">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter */}
            <div className="bg-slate-900/40 border border-slate-800/50 p-3 hover:border-emerald-400/30 transition-all group">
              <p className="text-slate-300 mb-2 font-mono text-xs group-hover:text-slate-200 transition-colors">
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">&lt;</span>
                Stay updated with latest projects
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">/&gt;</span>
              </p>
              <div className="flex border border-slate-600/50 hover:border-emerald-400/50 transition-colors group">
                <input 
                  type="email" 
                  placeholder="your@email.com"
                  className="flex-1 px-2 py-1 bg-slate-900/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 text-white font-mono text-xs placeholder:text-slate-500 focus:placeholder:text-slate-400 transition-all"
                />
                <button className="bg-emerald-600 hover:bg-emerald-500 px-2 py-1 transition-all duration-300 group hover:scale-105 relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity"></span>
                  <Mail size={12} className="text-black group-hover:scale-110 transition-transform relative z-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-xs mb-2 md:mb-0 font-mono group cursor-default hover:text-slate-300 transition-colors">
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">&lt;</span>
              © 2024 JBLinx Studio. All rights reserved.
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">/&gt;</span>
            </div>
            <div className="flex items-center text-slate-400 text-xs font-mono group cursor-default hover:text-slate-300 transition-colors">
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">&lt;</span>
              Made with <Heart className="mx-2 text-emerald-400 animate-pulse group-hover:scale-110 transition-transform" size={12} /> by JBLinx Studio
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity font-bold">/&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
