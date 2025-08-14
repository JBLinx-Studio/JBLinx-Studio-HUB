
import React from 'react';
import { ArrowRight, Gamepad2, Code, Database, Smartphone, BookOpen, Users } from 'lucide-react';
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
      case 'learning': return BookOpen;
      case 'community': return Users;
      default: return Code;
    }
  };

  return (
    <div className="absolute top-full left-0 w-screen max-w-6xl bg-slate-900 border border-slate-600 shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-200">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => {
            const IconComponent = getCategoryIcon(category.title);
            return (
              <div key={categoryIndex} className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-700">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-black" />
                  </div>
                  <h3 className="font-black text-sm text-emerald-400 font-mono tracking-widest">
                    {category.title.toUpperCase()}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      onClick={onClose}
                      className="block p-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-emerald-400/50 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-sm text-white group-hover:text-emerald-400 transition-colors font-mono">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0 ml-2" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-xs text-slate-400 font-mono">
              NEED GUIDANCE? <span className="text-emerald-400 font-bold">OUR EXPERTS ARE READY</span>
            </p>
            <Link
              to="#contact"
              onClick={onClose}
              className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-6 py-3 font-black text-xs transition-all duration-300 space-x-2 font-mono tracking-wider hover:scale-105"
            >
              <span>GET CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
