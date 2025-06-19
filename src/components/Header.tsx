
import React from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);

  const services = [
    { name: "Game Development", href: "/game-development", description: "Immersive gaming experiences" },
    { name: "Web Applications", href: "/web-applications", description: "Modern web solutions" },
    { name: "Mobile Development", href: "/mobile-development", description: "iOS & Android apps" },
    { name: "Digital Publishing", href: "/digital-publishing", description: "Content & publishing" },
    { name: "Content Creation", href: "/content-creation", description: "Engaging content strategy" },
    { name: "Database Solutions", href: "/database-solutions", description: "Data architecture" },
    { name: "Cybersecurity", href: "/cybersecurity", description: "Security & protection" },
    { name: "Cloud Services", href: "/cloud-services", description: "Cloud infrastructure" }
  ];

  return (
    <>
      {/* Top bar with contact info - inspired by template 1 */}
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
            {/* Enhanced Logo */}
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

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="nav-link relative group">
                <span>Home</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              
              {/* Enhanced Services Dropdown */}
              <div className="relative">
                <button 
                  className="nav-link flex items-center group"
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                >
                  <span>Services</span>
                  <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </button>
                
                {isServicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-4 w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50 animate-in fade-in-0 zoom-in-95"
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-gray-100 mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm">Our Services</h3>
                      <p className="text-xs text-gray-500">Comprehensive digital solutions</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 px-2">
                      {services.map((service, index) => (
                        <Link 
                          key={index}
                          to={service.href} 
                          className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg group"
                          onClick={() => setIsServicesDropdownOpen(false)}
                        >
                          <div className="font-medium text-sm group-hover:text-blue-600">{service.name}</div>
                          <div className="text-xs text-gray-500 group-hover:text-blue-500">{service.description}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 py-3 mt-2 border-t border-gray-100">
                      <Link 
                        to="#contact" 
                        className="block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg py-2 text-sm font-medium hover:shadow-lg transition-all"
                        onClick={() => setIsServicesDropdownOpen(false)}
                      >
                        Get Free Consultation
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <a href="#portfolio" className="nav-link relative group">
                <span>Portfolio</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#shop" className="nav-link relative group">
                <span>Shop</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#blog" className="nav-link relative group">
                <span>Blog</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#about" className="nav-link relative group">
                <span>About</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#contact" className="nav-link relative group">
                <span>Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            </nav>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 shadow-lg">
                <span>Get Started</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </a>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button 
              className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50 animate-in slide-in-from-top-4 duration-300">
              <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
                <a href="#home" className="block py-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 font-medium">
                  Home
                </a>
                
                {/* Enhanced Mobile Services Menu */}
                <div className="border-b border-gray-100">
                  <div className="py-4 text-gray-700 font-medium">Services</div>
                  <div className="grid grid-cols-1 gap-2 pb-4 ml-4">
                    {services.map((service, index) => (
                      <Link 
                        key={index}
                        to={service.href} 
                        className="block py-3 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors rounded-lg"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                <a href="#portfolio" className="block py-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 font-medium">
                  Portfolio
                </a>
                <a href="#shop" className="block py-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 font-medium">
                  Shop
                </a>
                <a href="#blog" className="block py-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 font-medium">
                  Blog
                </a>
                <a href="#about" className="block py-4 text-gray-700 hover:text-blue-600 transition-colors border-b border-gray-100 font-medium">
                  About
                </a>
                <a href="#contact" className="block py-4 text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Contact
                </a>
                
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
