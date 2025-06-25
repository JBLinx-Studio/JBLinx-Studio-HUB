
import React from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface DropdownCategory {
  title: string;
  items: DropdownItem[];
}

interface MegaDropdownProps {
  categories: DropdownCategory[];
  isOpen: boolean;
  onClose: () => void;
}

const MegaDropdown: React.FC<MegaDropdownProps> = ({ categories, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl rounded-2xl border border-slate-800 py-8 z-50 animate-in fade-in-0 zoom-in-95 duration-200 shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="font-bold text-lg text-cyan-400 border-b border-slate-800 pb-2">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    to={item.href}
                    onClick={onClose}
                    className="block p-3 rounded-xl hover:bg-slate-800/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-slate-400 mt-1">
                          {item.description}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex justify-between items-center">
            <p className="text-sm text-slate-400">
              Need help choosing? Our experts are here to guide you.
            </p>
            <Link
              to="#contact"
              onClick={onClose}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
