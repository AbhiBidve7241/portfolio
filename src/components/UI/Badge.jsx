import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'rounded-full font-medium inline-flex items-center gap-1';

  const variants = {
    default: 'bg-slate-100/90 dark:bg-white/5 text-text border border-slate-200 dark:border-white/10 shadow-sm',
    accent: 'bg-primary/10 text-primary border border-primary/25 shadow-sm',
    secondary: 'bg-accent/10 text-accent border border-accent/25 shadow-sm',
    success: 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/25 shadow-sm',
    warning: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border border-yellow-500/25 shadow-sm',
    danger: 'bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/25 shadow-sm',
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

