
import React from 'react';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface ServiceFiltersProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

const ServiceFilters: React.FC<ServiceFiltersProps> = ({ options, activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 border-2 ${
            activeFilter === option.id
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg'
              : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600'
          }`}
        >
          {option.label}
          <span className={`ml-2 text-sm ${
            activeFilter === option.id ? 'text-blue-100' : 'text-gray-500'
          }`}>
            ({option.count})
          </span>
        </button>
      ))}
    </div>
  );
};

export default ServiceFilters;
