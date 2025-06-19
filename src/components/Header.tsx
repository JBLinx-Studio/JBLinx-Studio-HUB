
import React from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);

  const services = [
    { name: "Game Development", href: "/game-development" },
    { name: "Web Applications", href: "/web-applications" },
    { name: "Mobile Development", href: "/mobile-development" },
    { name: "Digital Publishing", href: "/digital-publishing" },
    { name: "Content Creation", href: "/content-creation" },
    { name: "Database Solutions", href: "/database-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Cloud Services", href: "/cloud-services" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="theme-container">
        <div className="theme-flex-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-lg">JB</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">JBLinx</div>
                <div className="text-xs text-gray-500 -mt-1">Studio</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-72 theme-card py-4 z-50"
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.href} 
                      className="block px-6 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#contact" 
              className="theme-button-primary"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-6 space-y-4">
            <a href="#home" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </a>
            
            {/* Mobile Services Menu */}
            <div>
              <div className="py-3 text-gray-700 font-medium">Services</div>
              <div className="pl-4 space-y-2">
                {services.map((service, index) => (
                  <Link 
                    key={index}
                    to={service.href} 
                    className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <a href="#portfolio" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Portfolio
            </a>
            <a href="#about" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
            
            <a 
              href="#contact" 
              className="theme-button-primary text-center mt-4"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
