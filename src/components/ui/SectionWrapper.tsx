import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  badge?: {
    icon: LucideIcon;
    label: string;
    color?: 'emerald' | 'purple' | 'blue' | 'orange' | 'green' | 'cyan';
  };
  title?: {
    main: string;
    accent: string;
    accentColor?: 'emerald' | 'purple' | 'blue' | 'orange' | 'green' | 'cyan';
  };
  subtitle?: string;
  className?: string;
  showBackground?: boolean;
  backgroundVariant?: 'default' | 'gaming' | 'minimal';
}

const colorMap = {
  emerald: {
    border: 'border-emerald-500/50',
    text: 'text-emerald-400',
    bg: 'bg-emerald-400',
  },
  purple: {
    border: 'border-purple-500/50',
    text: 'text-purple-400',
    bg: 'bg-purple-400',
  },
  blue: {
    border: 'border-blue-500/50',
    text: 'text-blue-400',
    bg: 'bg-blue-400',
  },
  orange: {
    border: 'border-orange-500/50',
    text: 'text-orange-400',
    bg: 'bg-orange-400',
  },
  green: {
    border: 'border-green-500/50',
    text: 'text-green-400',
    bg: 'bg-green-400',
  },
  cyan: {
    border: 'border-cyan-500/50',
    text: 'text-cyan-400',
    bg: 'bg-cyan-400',
  },
};

const SectionBackground = ({ variant = 'default' }: { variant?: 'default' | 'gaming' | 'minimal' }) => {
  if (variant === 'minimal') return null;

  return (
    <div className="absolute inset-0 pointer-events-none opacity-50">
      {/* Primary ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-orange-500/8 to-amber-500/6 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/8 to-teal-500/6 blur-3xl rounded-full animate-pulse transform rotate-45" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 146, 60, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 146, 60, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Accent lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent"></div>
    </div>
  );
};

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  badge,
  title,
  subtitle,
  className = '',
  showBackground = true,
  backgroundVariant = 'default',
}) => {
  const badgeColor = badge?.color || 'emerald';
  const titleColor = title?.accentColor || 'emerald';

  return (
    <section 
      id={id}
      className={`relative py-20 bg-gradient-to-br from-zinc-950 via-zinc-900/95 to-zinc-950 border-t border-zinc-800/50 overflow-hidden ${className}`}
    >
      {showBackground && <SectionBackground variant={backgroundVariant} />}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        {(badge || title || subtitle) && (
          <div className="text-center mb-12">
            {badge && (
              <div className={`inline-flex items-center bg-zinc-800/90 border ${colorMap[badgeColor].border} px-4 py-1.5 mb-4 backdrop-blur-sm`}>
                <badge.icon className={`w-4 h-4 mr-2 ${colorMap[badgeColor].text}`} />
                <span className={`${colorMap[badgeColor].text} font-black text-xs font-mono tracking-widest`}>
                  {badge.label}
                </span>
              </div>
            )}
            
            {title && (
              <>
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
                  {title.main} <span className={colorMap[titleColor].text}>{title.accent}</span>
                </h2>
                <div className={`w-20 h-1 ${colorMap[titleColor].bg} mx-auto mb-4`}></div>
              </>
            )}
            
            {subtitle && (
              <p className="text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
