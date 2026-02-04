import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Phone, Code, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: "Game Development", href: "/game-development" },
    { name: "Web Applications", href: "/web-applications" },
    { name: "Mobile Development", href: "/support" },
    { name: "Backend Systems", href: "/support" },
    { name: "Cloud Services", href: "/support" },
    { name: "Digital Publishing", href: "/blog" }
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
    { name: "Support", href: "/support" },
    { name: "Privacy", href: "/privacy" }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Satisfaction", color: "text-yellow-400" },
    { icon: Code, value: "100+", label: "Projects", color: "text-blue-400" },
    { icon: Heart, value: "150+", label: "Clients", color: "text-purple-400" },
    { icon: Zap, value: "99.9%", label: "Uptime", color: "text-green-400" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-section-title text-foreground mb-4 block hover:opacity-80 transition-opacity">
              <span className="text-primary">JBLINX</span>
              <span>STUDIO</span>
            </Link>
            
            <div className="w-12 h-1 bg-primary mb-4" />
            
            <p className="text-body mb-4">
              Leading technology solutions provider specializing in innovative digital experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-small hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <a href="mailto:hello@jblinxstudio.com" className="flex items-center gap-2 text-small hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@jblinxstudio.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {[
                { icon: Github, href: "https://github.com/JBLinx-Studio" },
                { icon: Linkedin, href: "https://linkedin.com/company/jblinx-studio" },
                { icon: Twitter, href: "https://twitter.com/jblinxstudio" },
                { icon: Mail, href: "mailto:hello@jblinxstudio.com" }
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-9 h-9 panel flex items-center justify-center hover:border-primary transition-all"
                  >
                    <IconComponent className="w-4 h-4 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-panel-title text-foreground mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              OUR_SERVICES
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-small hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-panel-title text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              QUICK_LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-small hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements & Newsletter */}
          <div>
            <h4 className="text-panel-title text-foreground mb-4 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-primary" />
              ACHIEVEMENTS
            </h4>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-8 h-8 panel flex items-center justify-center mx-auto mb-1">
                      <IconComponent className={`w-4 h-4 ${achievement.color}`} />
                    </div>
                    <div className="text-card-title text-foreground">{achievement.value}</div>
                    <div className="text-small">{achievement.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-small mb-2">Stay updated with our latest projects</p>
              <div className="flex border border-border">
                <input 
                  type="email" 
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none"
                />
                <button className="bg-primary px-3 py-2 hover:bg-primary/90 transition-colors">
                  <Mail className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-small">
              © 2024 JBLinx Studio. All rights reserved.
            </div>
            <div className="flex items-center text-small">
              Made with <Heart className="mx-1 w-3 h-3 text-primary animate-pulse" /> by JBLinx Studio
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
