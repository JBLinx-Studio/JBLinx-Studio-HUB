
import React from 'react';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-600">
                <Phone size={14} className="mr-2 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail size={14} className="mr-2 text-blue-600" />
                <span>hello@jblinxstudio.com</span>
              </div>
            </div>
            <div className="hidden md:block text-gray-600">
              <span>🚀 Ready to transform your business? Let's talk!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-blue-600">JBLinx</span>
                <span className="text-gray-900">Studio</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-blue-600">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-blue-600">Portfolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 border-b-2 border-transparent hover:border-blue-600">Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold shadow-md flex items-center group">
                Get Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100">Home</a>
                <a href="#about" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100">About</a>
                <a href="#services" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100">Services</a>
                <a href="#portfolio" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100">Portfolio</a>
                <a href="#contact" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold mt-4">
                  Get Quote
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
