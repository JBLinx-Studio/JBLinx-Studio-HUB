
import React from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Phone size={14} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={14} className="mr-2" />
                <span>hello@jblinxstudio.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Welcome to JBLinx Studio - Your Technology Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <span className="text-blue-600">JBLinx</span>
                <span className="text-gray-900">Studio</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Team</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#portfolio" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
                <a href="#team" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Team</a>
                <a href="#blog" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
                <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <button className="w-full bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold">
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
