
import React from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../data/navigationData';
import NavigationItem from './navigation/NavigationItem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top bar with contact info - Enhanced Premium Style */}
      <div className="bg-zinc-950/95 text-cream-dark py-2 px-4 hidden lg:block border-b border-zinc-800 backdrop-blur-xl">
        <div className="container mx-auto flex justify-between items-center text-xs font-mono">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 text-glow-orange" />
              <span className="text-cream-dark">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 text-glow-emerald" />
              <span className="text-cream-dark">hello@jblinxstudio.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-glow-amber" />
              <span className="text-cream-dark">Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-glow-amber" />
            <span className="text-cream-dark">San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Main header - Enhanced Premium Gaming Theme */}
      <header className="sticky top-0 z-50 bg-zinc-900/95 backdrop-blur-2xl shadow-2xl border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-18">
            {/* Logo - Enhanced Premium Style */}
            <Link to="/" className="flex items-center group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border border-orange-400/40">
                    <span className="text-zinc-950 font-black text-lg font-mono">JB</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="text-xl font-black text-cream font-mono">JBLinx</div>
                  <div className="text-xs text-glow-orange -mt-1 font-bold font-mono tracking-widest">STUDIO</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced Premium Style */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="relative group">
                <span className="text-cream-dark hover:text-glow-orange font-bold text-sm font-mono tracking-wider transition-all duration-300">
                  HOME
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300"></div>
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
              <Link to="/blog" className="relative group">
                <span className="text-cream-dark hover:text-glow-orange font-bold text-sm font-mono tracking-wider transition-all duration-300">
                  BLOG
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            </nav>

            {/* CTA Button - Enhanced Premium Style */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#contact" className="btn-primary relative overflow-hidden group">
                <span className="relative z-10">GET STARTED</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
            </div>

            {/* Mobile Menu Button - Enhanced Premium Style */}
            <button 
              className="lg:hidden p-3 bg-zinc-800/50 hover:bg-zinc-700/50 transition-all duration-300 border border-zinc-700 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} className="text-glow-orange" /> : <Menu size={20} className="text-glow-orange" />}
            </button>
          </div>

          {/* Mobile Menu - Enhanced Premium Style */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-900/98 backdrop-blur-2xl shadow-2xl border-t border-zinc-800 z-50 animate-in slide-in-from-top-4 duration-300">
              <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
                <Link 
                  to="/" 
                  className="block py-3 text-cream-dark hover:text-glow-orange transition-colors font-bold text-sm font-mono tracking-wider border-b border-zinc-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.type === 'link' ? (
                      <Link 
                        to={item.href} 
                        className="block py-3 text-cream-dark hover:text-glow-orange transition-colors font-bold text-sm font-mono tracking-wider border-b border-zinc-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    ) : (
                      <div className="border-b border-zinc-800">
                        <div className="py-3 text-glow-orange font-bold text-sm font-mono tracking-wider">{item.name.toUpperCase()}</div>
                        {item.categories?.map((category, catIndex) => (
                          <div key={catIndex} className="ml-4 mb-4">
                            <h4 className="font-bold text-glow-emerald mb-2 text-xs font-mono">{category.title.toUpperCase()}</h4>
                            <div className="space-y-2">
                              {category.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="block py-2 px-3 text-cream-dark hover:text-glow-orange hover:bg-zinc-800/50 transition-all duration-300 text-xs border border-zinc-800/50 hover:border-orange-400/30 backdrop-blur-sm"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div className="font-medium font-mono">
                                    {subItem.name}
                                  </div>
                                  <div className="text-xs text-zinc-500">{subItem.description}</div>
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
                  className="block py-3 text-cream-dark hover:text-glow-orange transition-colors font-bold text-sm font-mono tracking-wider border-b border-zinc-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOG
                </Link>
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <a href="#contact" className="btn-primary w-full text-center block">
                    GET STARTED TODAY
                  </a>
                </div>

                {/* Mobile contact info */}
                <div className="pt-4 space-y-2 text-xs text-cream-dark font-mono">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3 h-3 text-glow-orange" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3 h-3 text-glow-emerald" />
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
