import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContentPanelProps {
  children: React.ReactNode;
  title?: string;
  icon?: LucideIcon;
  accentColor?: 'emerald' | 'purple' | 'blue' | 'orange' | 'green' | 'cyan';
  className?: string;
  compact?: boolean;
}

const colorMap = {
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
  blue: 'text-blue-400',
  orange: 'text-orange-400',
  green: 'text-green-400',
  cyan: 'text-cyan-400',
};

const ContentPanel: React.FC<ContentPanelProps> = ({
  children,
  title,
  icon: Icon,
  accentColor = 'emerald',
  className = '',
  compact = false,
}) => {
  return (
    <div className={`bg-zinc-800/90 border border-zinc-700/70 backdrop-blur-sm ${compact ? 'p-3' : 'p-5'} hover:bg-zinc-800/100 hover:border-zinc-600/70 transition-all duration-300 ${className}`}>
      {(title || Icon) && (
        <div className="flex items-center space-x-2 mb-4">
          {Icon && <Icon className={`w-4 h-4 ${colorMap[accentColor]}`} />}
          {title && (
            <>
              <span className={`${colorMap[accentColor]} font-black text-sm font-mono tracking-wide`}>
                {title}
              </span>
              <div className={`flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-30`}></div>
            </>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default ContentPanel;
