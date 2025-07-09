
import React from 'react';
import { cn } from '@/lib/utils';
import { Hexagon } from 'lucide-react';

interface ProfessionalHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  alignment?: 'left' | 'center' | 'right';
}

const ProfessionalHeader: React.FC<ProfessionalHeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  className,
  alignment = 'center'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={cn(alignmentClasses[alignment], className)}>
      {badge && (
        <div className={cn(
          'inline-flex items-center bg-emerald-500/10 border border-emerald-500/30 rounded-full px-6 py-3 mb-6',
          alignment === 'center' ? 'mx-auto' : ''
        )}>
          <Hexagon className="w-5 h-5 text-emerald-400 mr-2" />
          <span className="text-white/90 font-medium">{badge}</span>
        </div>
      )}
      
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        {title.includes(' ') ? (
          <>
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-emerald-400">{title.split(' ').slice(-1)}</span>
          </>
        ) : (
          <span className="text-emerald-400">{title}</span>
        )}
      </h2>
      
      {subtitle && (
        <h3 className="text-xl text-slate-300 mb-6">{subtitle}</h3>
      )}
      
      {description && (
        <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default ProfessionalHeader;
