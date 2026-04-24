import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'rounded-full font-medium inline-flex items-center gap-1';

  const variants = {
    default: 'bg-white/5 text-text border border-border',
    accent: 'bg-primarySoft text-primary/10 text-accent-primary border border-accent-primary/30',
    secondary: 'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/30',
    success: 'bg-green-500/10 text-green-400 border border-green-500/30',
    warning: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
    danger: 'bg-red-500/10 text-red-400 border border-red-500/30',
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-xs',
    lg: 'px-4 py-2 text-sm',
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};

