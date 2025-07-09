
import React from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone } from 'lucide-react';
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

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'games': return Gamepad2;
      case 'web applications': return Code;
      case 'developer tools': return Database;
      case 'learning': return Code;
      case 'community': return Smartphone;
      default: return Code;
    }
  };

  return (
    <div className="absolute top-full left-0 w-screen max-w-5xl bg-slate-900/98 border border-slate-700 backdrop-blur-xl shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-200">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category, categoryIndex) => {
            const IconComponent = getCategoryIcon(category.title);
            return (
              <div key={categoryIndex} className="space-y-3">
                <div className="flex items-center space-x-2 pb-2 border-b border-slate-700">
                  <IconComponent className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-black text-sm text-emerald-400 font-mono tracking-widest">
                    {category.title.toUpperCase()}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      onClick={onClose}
                      className="block p-2 bg-slate-800/50 hover:bg-slate-700/70 border border-slate-700/50 hover:border-emerald-400/30 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-xs text-white group-hover:text-emerald-400 transition-colors font-mono">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-tight">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all mt-0.5" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-3 border-t border-slate-700">
          <div className="flex justify-between items-center">
            <p className="text-xs text-slate-400 font-mono">
              NEED GUIDANCE? <span className="text-emerald-400">OUR EXPERTS ARE READY</span>
            </p>
            <Link
              to="#contact"
              onClick={onClose}
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-4 py-2 font-black text-xs transition-all duration-300 space-x-1"
            >
              <span>GET CONSULTATION</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
