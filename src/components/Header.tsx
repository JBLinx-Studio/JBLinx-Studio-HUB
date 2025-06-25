
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
      <div className="bg-slate-900 text-white py-2 px-4 hidden lg:block border-b border-slate-800">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>hello@jblinxstudio.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-xl border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">JB</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">JBLinx</div>
                  <div className="text-xs text-cyan-400 -mt-1 font-bold">STUDIO</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => (
                <NavigationItem
                  key={index}
                  name={item.name}
                  href={item.href}
                  type={item.type}
                  categories={item.categories}
                />
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link 
                to="#contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-3 rounded-xl hover:bg-slate-800 transition-colors border border-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-slate-800 z-50">
              <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.type === 'link' ? (
                      <a 
                        href={item.href} 
                        className="block py-4 text-white hover:text-cyan-400 transition-colors border-b border-slate-800 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <div className="border-b border-slate-800">
                        <div className="py-4 text-white font-bold">{item.name}</div>
                        {item.categories?.map((category, catIndex) => (
                          <div key={catIndex} className="ml-4 mb-4">
                            <h4 className="font-bold text-cyan-400 mb-2">{category.title}</h4>
                            <div className="space-y-2">
                              {category.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="block py-2 px-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors rounded-lg"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div className="font-medium">{subItem.name}</div>
                                  <div className="text-sm text-slate-500">{subItem.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <Link 
                    to="#contact" 
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-4 rounded-xl font-bold shadow-lg block text-center hover:shadow-cyan-500/25 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started Today
                  </Link>
                </div>

                {/* Mobile contact info */}
                <div className="pt-4 space-y-2 text-sm text-slate-400 border-t border-slate-800">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
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
