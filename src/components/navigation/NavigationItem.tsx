
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
      <a href={href} className="relative group px-4 py-2">
        <span className="text-zinc-300 hover:text-orange-400 font-semibold text-sm font-mono tracking-wide transition-all duration-300">
          {name}
        </span>
        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </a>
    );
  }

  return (
    <div className="relative">
      <button
        className="flex items-center group px-4 py-2"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-zinc-300 hover:text-orange-400 font-semibold text-sm font-mono tracking-wide transition-all duration-300">
          {name}
        </span>
        <ChevronDown 
          size={16} 
          className={`ml-2 text-zinc-400 group-hover:text-orange-400 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
        <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-orange-500 to-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      </button>
      
      <div
        className="absolute top-full left-1/2 transform -translate-x-1/2"
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
