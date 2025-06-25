
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import MegaDropdown from './MegaDropdown';

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface DropdownCategory {
  title: string;
  items: DropdownItem[];
}

interface NavigationItemProps {
  name: string;
  href: string;
  type: 'link' | 'dropdown';
  categories?: DropdownCategory[];
}

const NavigationItem: React.FC<NavigationItemProps> = ({ name, href, type, categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (type === 'link') {
    return (
      <a href={href} className="relative group text-white hover:text-cyan-400 transition-colors font-medium">
        <span>{name}</span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></div>
      </a>
    );
  }

  return (
    <div className="relative">
      <button
        className="flex items-center group text-white hover:text-cyan-400 transition-colors font-medium"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{name}</span>
        <ChevronDown 
          size={16} 
          className={`ml-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:w-full transition-all duration-300"></div>
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
