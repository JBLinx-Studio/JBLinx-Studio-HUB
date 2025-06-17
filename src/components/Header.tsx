
import React from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center text-gray-300">
                <Phone size={14} className="mr-2 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={14} className="mr-2 text-blue-400" />
                <span>hello@jblinxstudio.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={14} className="mr-2 text-blue-400" />
                <span>123 Tech Street, Digital City</span>
              </div>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock size={14} className="mr-2 text-blue-400" />
              <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://zrtechsolutions.com/demo/html/technoit/assets/images/logo.png" 
                alt="JBLinx Studio" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div className="text-2xl font-bold" style={{display: 'none'}}>
                <span className="text-blue-600">JBLinx</span>
                <span className="text-gray-900">Studio</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#portfolio" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg transform hover:scale-105">
                Get Free Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
              <div className="px-4 py-6 space-y-4">
                <a 
                  href="#home" 
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="#about" 
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </a>
                <a 
                  href="#portfolio" 
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a 
                  href="#contact" 
                  className="block py-3 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold mt-4">
                  Get Free Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
