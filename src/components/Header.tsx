import React from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../data/navigationData';
import NavigationItem from './navigation/NavigationItem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top bar with contact info - Enhanced Gaming Style */}
      <div className="bg-zinc-950 text-zinc-300 py-1.5 px-4 hidden lg:block border-b border-zinc-800">
        <div className="container mx-auto flex justify-between items-center text-xs font-mono">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3 text-orange-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3 text-emerald-400" />
              <span>hello@jblinxstudio.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Main header - Enhanced Gaming Theme */}
      <header className="sticky top-0 z-50 bg-zinc-950/95 backdrop-blur-xl shadow-2xl border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Enhanced Gaming Style */}
            <Link to="/" className="flex items-center group">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border border-orange-400/30">
                  <span className="text-black font-black text-lg font-mono">JB</span>
                </div>
                <div>
                  <div className="text-xl font-black text-white font-mono">JBLinx</div>
                  <div className="text-xs text-orange-400 -mt-1 font-bold font-mono tracking-widest">STUDIO</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Enhanced Gaming Style */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="relative group">
                <span className="text-zinc-300 hover:text-orange-400 font-bold text-sm font-mono tracking-wider transition-all duration-300 link-hover">
                  HOME
                </span>
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
                <span className="text-zinc-300 hover:text-orange-400 font-bold text-sm font-mono tracking-wider transition-all duration-300 link-hover">
                  BLOG
                </span>
              </Link>
            </nav>

            {/* CTA Button - Enhanced Gaming Style */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#contact" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-black px-4 py-2 font-black text-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg border border-orange-400/30 font-mono group">
                <span className="group-hover:opacity-0 transition-opacity">GET STARTED</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute text-black font-black">
                  &gt;_ GET STARTED
                </span>
                <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
              </a>
            </div>

            {/* Mobile Menu Button - Enhanced Gaming Style */}
            <button 
              className="lg:hidden p-2 bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} className="text-orange-400" /> : <Menu size={20} className="text-orange-400" />}
            </button>
          </div>

          {/* Mobile Menu - Enhanced Gaming Style */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-950/98 backdrop-blur-xl shadow-2xl border-t border-zinc-800 z-50 animate-in slide-in-from-top-4 duration-300">
              <div className="px-4 py-4 space-y-3 max-h-96 overflow-y-auto">
                <Link 
                  to="/" 
                  className="block py-2 text-zinc-300 hover:text-orange-400 transition-colors font-bold text-sm font-mono tracking-wider border-b border-zinc-800 link-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.type === 'link' ? (
                      <Link 
                        to={item.href} 
                        className="block py-2 text-zinc-300 hover:text-orange-400 transition-colors font-bold text-sm font-mono tracking-wider border-b border-zinc-800 link-hover"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    ) : (
                      <div className="border-b border-zinc-800">
                        <div className="py-2 text-orange-400 font-bold text-sm font-mono tracking-wider">{item.name.toUpperCase()}</div>
                        {item.categories?.map((category, catIndex) => (
                          <div key={catIndex} className="ml-3 mb-3">
                            <h4 className="font-bold text-emerald-400 mb-1 text-xs font-mono">{category.title.toUpperCase()}</h4>
                            <div className="space-y-1">
                              {category.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="block py-1 px-2 text-zinc-400 hover:text-orange-400 hover:bg-zinc-900/50 transition-colors text-xs border border-zinc-800/50 hover:border-orange-400/30 link-hover"
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
                  className="block py-2 text-zinc-300 hover:text-orange-400 transition-colors font-bold text-sm font-mono tracking-wider border-b border-zinc-800 link-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOG
                </Link>
                
                {/* Mobile CTA */}
                <div className="pt-3">
                  <a href="#contact" className="bg-gradient-to-r from-orange-500 to-amber-500 text-black px-4 py-3 font-black shadow-lg block text-center hover:shadow-xl transition-all text-sm font-mono group">
                    <span className="group-hover:opacity-0 transition-opacity">GET STARTED TODAY</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute text-black font-black">
                      &gt;_ GET STARTED TODAY
                    </span>
                  </a>
                </div>

                {/* Mobile contact info */}
                <div className="pt-3 space-y-1 text-xs text-zinc-400 font-mono">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-3 h-3 text-orange-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3 h-3 text-emerald-400" />
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
