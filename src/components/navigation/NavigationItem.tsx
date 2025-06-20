
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import MegaDropdown from './MegaDropdown';

interface NavigationItemProps {
  name: string;
  href: string;
  type: 'link' | 'dropdown';
  categories?: any[];
}

const NavigationItem: React.FC<NavigationItemProps> = ({ name, href, type, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 'link') {
    return (
      <a href={href} className="nav-link relative group">
        <span>{name}</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
      </a>
    );
  }

  return (
    <div className="relative">
      <button
        className="nav-link flex items-center group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{name}</span>
        <ChevronDown 
          size={16} 
          className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
      </button>
      
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <MegaDropdown
          categories={categories || []}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default NavigationItem;
