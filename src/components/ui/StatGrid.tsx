import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  color?: 'emerald' | 'purple' | 'blue' | 'orange' | 'yellow' | 'green' | 'cyan';
  live?: boolean;
  desc?: string;
}

interface StatGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  compact?: boolean;
  className?: string;
}

const colorClasses = {
  emerald: 'border-emerald-500/60 text-emerald-400',
  purple: 'border-purple-500/60 text-purple-400',
  blue: 'border-blue-500/60 text-blue-400',
  orange: 'border-orange-500/60 text-orange-400',
  yellow: 'border-yellow-500/60 text-yellow-400',
  green: 'border-green-500/60 text-green-400',
  cyan: 'border-cyan-500/60 text-cyan-400',
};

const StatGrid: React.FC<StatGridProps> = ({
  stats,
  columns = 4,
  compact = false,
  className = '',
}) => {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-3 ${className}`}>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        const color = stat.color || 'emerald';
        
        return (
          <div 
            key={index} 
            className={`bg-zinc-800/80 border ${colorClasses[color]} backdrop-blur-sm ${compact ? 'p-2' : 'p-3'} text-center transition-all duration-300 hover:bg-zinc-700/80`}
          >
            <IconComponent className={`w-4 h-4 mx-auto mb-1.5 ${colorClasses[color].split(' ')[1]}`} />
            <div className={`${compact ? 'text-sm' : 'text-base'} font-black flex items-center justify-center space-x-1 font-mono`}>
              <span>{stat.value}</span>
              {stat.live && <div className="w-1.5 h-1.5 bg-current rounded-full animate-pulse"></div>}
            </div>
            <div className={`${compact ? 'text-xs' : 'text-sm'} font-bold opacity-90`}>{stat.label}</div>
            {stat.desc && <div className="text-xs opacity-70 mt-0.5">{stat.desc}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default StatGrid;
