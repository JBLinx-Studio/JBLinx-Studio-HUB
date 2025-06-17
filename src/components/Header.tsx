
import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold">
              <span className="text-blue-600">techno</span>
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm ml-1">IT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Portfolio
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Testimonials
            </a>
            <a 
              href="#team" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              Team
            </a>
            
            {/* Menu Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 flex items-center"
                onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
              >
                Menu
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isMenuDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <a href="#about" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">About</a>
                  <a href="#pricing" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pricing</a>
                  <a href="#faqs" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">FAQs</a>
                  <a href="#terms" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Terms & Conditions</a>
                  <a href="#privacy" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Privacy Policy</a>
                  <a href="#blog" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Blogs</a>
                  <a href="#blog-detail" className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50">Blog Detail Page</a>
                </div>
              )}
            </div>
            
            <a 
              href="#news" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
            >
              News
            </a>
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Get Quotes
            </button>
            
            {/* Theme Toggle */}
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.5c3.038 0 5.5-2.462 5.5-5.5S15.038 6.5 12 6.5 6.5 8.962 6.5 12s2.462 5.5 5.5 5.5zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm-.5-10V2.5h1V5h-1zm-5.207 1.793l-.707-.707 1.768-1.768.707.707-1.768 1.768zm11.414 0l-1.768-1.768.707-.707 1.768 1.768-.707.707zM2.5 11.5h2.5v1H2.5v-1zm17 0H22v1h-2.5v-1zm-16.207 7.207l1.768-1.768.707.707-1.768 1.768-.707-.707zm14.414 0l-.707-.707 1.768-1.768.707.707-1.768 1.768zM11.5 19v2.5h1V19h-1z"/>
              </svg>
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
                href="#testimonials" 
                className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#team" 
                className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a 
                href="#news" 
                className="block py-3 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </a>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-4">
                Get Quotes
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
