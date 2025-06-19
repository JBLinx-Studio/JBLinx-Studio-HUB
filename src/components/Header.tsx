
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
    <header className="header sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="logo">
              JBLinx<span className="bg-blue-600 text-white px-2 py-1 rounded text-sm ml-1">Studio</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="nav-link flex items-center"
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
              >
                Services
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2 z-50"
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  {services.map((service, index) => (
                    <Link 
                      key={index}
                      to={service.href} 
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#contact" className="btn-primary-template">
              Get Started
            </a>
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
              <a href="#home" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100">
                Home
              </a>
              
              {/* Mobile Services Menu */}
              <div className="border-b border-gray-100">
                <div className="py-3 text-gray-700 font-medium">Services</div>
                <div className="pl-4 space-y-2 pb-3">
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
              
              <a href="#portfolio" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100">
                Portfolio
              </a>
              <a href="#about" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100">
                About
              </a>
              <a href="#contact" className="block py-3 text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <a href="#contact" className="btn-primary-template block text-center mt-4">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
