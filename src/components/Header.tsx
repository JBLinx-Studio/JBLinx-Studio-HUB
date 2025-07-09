
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
      <div className="bg-gray-900 text-white py-2 px-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>hello@jblinxstudio.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="header sticky top-0 z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="logo flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">JB</span>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">JBLinx</div>
                  <div className="text-xs text-gray-500 -mt-1">Digital Studio</div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              {navigationItems.map((item, index) => (
                <NavigationItem
                  key={index}
                  name={item.name}
                  href={item.href}
                  type={item.type}
                  categories={item.categories}
                />
              ))}
              <Link to="/blog" className="nav-link">Blog</Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                <span>Get Started</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50 animate-in slide-in-from-top-4 duration-300">
              <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
                <Link 
                  to="/" 
                  className="block py-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {navigationItems.map((item, index) => (
                  <div key={index}>
                    {item.type === 'link' ? (
                      <a 
                        href={item.href} 
                        className="block py-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <div className="border-b border-gray-100">
                        <div className="py-4 text-gray-700 font-medium">{item.name}</div>
                        {item.categories?.map((category, catIndex) => (
                          <div key={catIndex} className="ml-4 mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">{category.title}</h4>
                            <div className="space-y-2">
                              {category.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.href}
                                  className="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div className="font-medium">{subItem.name}</div>
                                  <div className="text-sm text-gray-500">{subItem.description}</div>
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
                  className="block py-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                
                {/* Mobile CTA */}
                <div className="pt-4">
                  <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg block text-center hover:shadow-xl transition-all">
                    Get Started Today
                  </a>
                </div>

                {/* Mobile contact info */}
                <div className="pt-4 space-y-2 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
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
