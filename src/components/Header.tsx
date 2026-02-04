import React from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../data/navigationData';
import NavigationItem from './navigation/NavigationItem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top bar with contact info */}
      <div className="bg-background border-b border-border py-2 px-4 hidden lg:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6 text-small">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-primary" />
              <span>Contact@JBLinxStudio.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-accent" />
              <span>Mon-Thurs: 11:00-17:00</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-small">
            <MapPin className="w-3 h-3 text-accent" />
            <span>South Africa, EC</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-primary-foreground font-black text-sm text-mono">JB</span>
                  </div>
                </div>
                <div>
                  <div className="text-card-title text-foreground">Linx</div>
                  <div className="text-label text-primary -mt-1">STUDIO</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="text-label text-muted-foreground hover:text-primary transition-colors relative group">
                HOME
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </Link>
              {navigationItems.map((item, index) => (
                <NavigationItem 
                  key={index} 
                  name={item.name.toUpperCase()} 
                  href={item.href} 
                  type={item.type} 
                  categories={item.categories} 
                />
              ))}
              <Link to="/blog" className="text-label text-muted-foreground hover:text-primary transition-colors relative group">
                BLOG
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all" />
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#contact" className="btn-primary">
                Dive In
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 panel hover:border-primary transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border z-50 animate-in slide-in-from-top-2">
              <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
                <Link 
                  to="/" 
                  className="block py-3 text-label text-muted-foreground hover:text-primary transition-colors border-b border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.type === 'link' ? (
                      <Link 
                        to={item.href} 
                        className="block py-3 text-label text-muted-foreground hover:text-primary transition-colors border-b border-border"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    ) : (
                      <div className="border-b border-border pb-4">
                        <div className="py-3 text-label text-primary">{item.name.toUpperCase()}</div>
                        {item.categories?.map((category, catIndex) => (
                          <div key={catIndex} className="ml-4 mb-4">
                            <h4 className="text-label text-primary mb-2">{category.title.toUpperCase()}</h4>
                            <div className="space-y-2">
                              {category.items.map((subItem, subIndex) => (
                                <Link 
                                  key={subIndex} 
                                  to={subItem.href} 
                                  className="block py-2 px-3 panel text-small hover:border-primary transition-all"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div className="text-card-title text-foreground">{subItem.name}</div>
                                  <div className="text-small">{subItem.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                <Link 
                  to="/blog" 
                  className="block py-3 text-label text-muted-foreground hover:text-primary transition-colors border-b border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOG
                </Link>
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <a href="#contact" className="btn-primary w-full text-center block" onClick={() => setIsMenuOpen(false)}>
                    GET STARTED TODAY
                  </a>
                </div>

                {/* Mobile contact info */}
                <div className="pt-4 space-y-2 text-small">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3 h-3 text-primary" />
                    <span>hello@jblinxstudio.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
