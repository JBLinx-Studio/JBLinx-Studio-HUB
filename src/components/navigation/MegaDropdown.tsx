
import React from 'react';
import { ArrowRight, Code2, Gamepad2, Cloud, BookOpen, Users, Zap } from 'lucide-react';
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
      case 'game development': return Gamepad2;
      case 'web applications': return Code2;
      case 'development services': return Cloud;
      case 'learning hub': return BookOpen;
      case 'community': return Users;
      default: return Zap;
    }
  };

  return (
    <div className="absolute top-full left-0 w-screen max-w-5xl bg-zinc-900/98 backdrop-blur-xl border border-zinc-700/50 shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-300">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const IconComponent = getCategoryIcon(category.title);
            return (
              <div key={categoryIndex} className="space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-zinc-700/30">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                    <IconComponent className="w-5 h-5 text-zinc-900" />
                  </div>
                  <h3 className="font-bold text-lg text-orange-400 font-mono tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      onClick={onClose}
                      className="block p-4 bg-zinc-800/40 hover:bg-zinc-700/60 border border-zinc-700/30 hover:border-orange-400/40 rounded-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-base text-zinc-100 group-hover:text-orange-400 transition-colors font-mono mb-1">
                            {item.name}
                          </div>
                          <div className="text-sm text-zinc-400 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0 ml-3" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-8 pt-6 border-t border-zinc-700/30">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <p className="text-sm text-zinc-300 font-semibold">
                Ready to start your project?
              </p>
              <p className="text-xs text-zinc-500">
                Get a free consultation and project estimate
              </p>
            </div>
            <Link
              to="#contact"
              onClick={onClose}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-zinc-900 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 space-x-2 hover:scale-105 shadow-lg"
            >
              <span>Start Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
