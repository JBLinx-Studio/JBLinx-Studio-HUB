
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
      <a href={href} className="relative group">
        <span className="text-slate-300 hover:text-emerald-400 font-bold text-sm font-mono tracking-wider transition-all duration-300">
          {name}
        </span>
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
      </a>
    );
  }

  return (
    <div className="relative">
      <button
        className="flex items-center group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-slate-300 hover:text-emerald-400 font-bold text-sm font-mono tracking-wider transition-all duration-300">
          {name}
        </span>
        <ChevronDown 
          size={14} 
          className={`ml-1 text-slate-400 group-hover:text-emerald-400 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
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
