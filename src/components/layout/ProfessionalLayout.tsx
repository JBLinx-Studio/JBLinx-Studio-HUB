
import React from 'react';
import { cn } from '@/lib/utils';

interface ProfessionalLayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'default' | 'gradient' | 'dark' | 'transparent';
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  centered?: boolean;
}

const ProfessionalLayout: React.FC<ProfessionalLayoutProps> = ({
  children,
  className,
  containerClassName,
  background = 'default',
  padding = 'lg',
  fullWidth = true,
  centered = false
}) => {
  const backgroundClasses = {
    default: 'bg-slate-950',
    gradient: 'bg-gradient-to-br from-slate-950 via-slate-900 to-black',
    dark: 'bg-black',
    transparent: 'bg-transparent'
  };

  const paddingClasses = {
    none: '',
    xs: 'py-4',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20'
  };

  return (
    <section className={cn(
      'relative overflow-hidden professional-section',
      fullWidth && 'professional-full-width',
      backgroundClasses[background],
      paddingClasses[padding],
      className
    )}>
      {/* Enhanced professional background effects */}
      <div className="absolute inset-0 pointer-events-none professional-bg-effects">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/8 to-blue-500/8 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-orange-500/8 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/4 to-pink-500/4 blur-3xl rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Enhanced grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] professional-grid">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: 'clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px)'
          }}></div>
        </div>

        {/* Professional accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>
      </div>

      <div className={cn(
        'professional-container w-full relative z-10',
        fullWidth ? 'max-w-none professional-cinematic-padding' : 'max-w-7xl mx-auto px-6 lg:px-8',
        centered && 'flex items-center justify-center min-h-full',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
};

export default ProfessionalLayout;
