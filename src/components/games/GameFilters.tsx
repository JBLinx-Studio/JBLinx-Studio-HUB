
import React from 'react';
import { Filter, ArrowUpDown } from 'lucide-react';

interface GameFiltersProps {
  sortBy: string;
  setSortBy: (sort: string) => void;
  categories: Array<{
    id: string;
    name: string;
    icon: React.ComponentType<any>;
    count: number;
  }>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const GameFilters: React.FC<GameFiltersProps> = ({
  sortBy,
  setSortBy,
  categories,
  activeCategory,
  setActiveCategory
}) => {
  return (
    <div className="space-y-4">
      {/* Category Pills */}
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="text-slate-300 text-xs font-medium">CATEGORIES</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.slice(0, 4).map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white border border-white/20'
                }`}
              >
                <IconComponent className="w-3 h-3" />
                <span>{category.name}</span>
                <span className="bg-white/20 text-xs px-1.5 py-0.5 rounded-full">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <ArrowUpDown className="w-4 h-4 text-slate-400" />
          <span className="text-slate-300 text-xs font-medium">SORT BY</span>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-white/10 border border-white/20 text-white px-3 py-2 text-sm rounded-lg focus:border-purple-400 focus:outline-none transition-colors"
        >
          <option value="popular">Most Popular</option>
          <option value="rating">Highest Rated</option>
          <option value="players">Most Players</option>
          <option value="newest">Newest First</option>
          <option value="price">Price: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default GameFilters;
