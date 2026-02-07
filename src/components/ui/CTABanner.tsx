import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTABannerProps {
  title: {
    prefix?: string;
    accent: string;
  };
  description?: string;
  primaryAction?: {
    label: string;
    href: string;
    icon?: LucideIcon;
    external?: boolean;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  accentColor?: 'emerald' | 'purple' | 'blue' | 'orange' | 'green' | 'cyan';
  className?: string;
}

const gradients = {
  emerald: 'from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600',
  purple: 'from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600',
  blue: 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600',
  orange: 'from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600',
  green: 'from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600',
  cyan: 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600',
};

const accentTextColor = {
  emerald: 'text-emerald-400',
  purple: 'text-purple-400',
  blue: 'text-blue-400',
  orange: 'text-orange-400',
  green: 'text-green-400',
  cyan: 'text-cyan-400',
};

const borderColor = {
  emerald: 'border-emerald-400 text-emerald-400 hover:bg-emerald-400',
  purple: 'border-purple-400 text-purple-400 hover:bg-purple-400',
  blue: 'border-blue-400 text-blue-400 hover:bg-blue-400',
  orange: 'border-orange-400 text-orange-400 hover:bg-orange-400',
  green: 'border-green-400 text-green-400 hover:bg-green-400',
  cyan: 'border-cyan-400 text-cyan-400 hover:bg-cyan-400',
};

const CTABanner: React.FC<CTABannerProps> = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  accentColor = 'emerald',
  className = '',
}) => {
  const PrimaryIcon = primaryAction?.icon;

  const renderPrimaryButton = () => {
    const buttonContent = (
      <>
        {PrimaryIcon && <PrimaryIcon className="w-5 h-5" />}
        <span>{primaryAction?.label}</span>
        <ArrowRight className="w-5 h-5" />
      </>
    );

    const buttonClasses = `bg-gradient-to-r ${gradients[accentColor]} text-zinc-950 px-8 py-4 font-black transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-xl hover:scale-105`;

    if (primaryAction?.external) {
      return (
        <a 
          href={primaryAction.href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <Link to={primaryAction?.href || '#'} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  };

  return (
    <div className={`bg-gradient-to-r from-zinc-800 to-zinc-700 border border-zinc-600 p-8 text-center ${className}`}>
      <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 font-mono">
        {title.prefix && <span>{title.prefix} </span>}
        <span className={accentTextColor[accentColor]}>{title.accent}</span>
      </h3>
      
      {description && (
        <p className="text-base text-zinc-400 mb-6 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      
      {(primaryAction || secondaryAction) && (
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && renderPrimaryButton()}
          
          {secondaryAction && (
            <button 
              onClick={secondaryAction.onClick}
              className={`border-2 ${borderColor[accentColor]} hover:text-zinc-950 px-8 py-4 font-black transition-all duration-300 text-base hover:scale-105`}
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CTABanner;
