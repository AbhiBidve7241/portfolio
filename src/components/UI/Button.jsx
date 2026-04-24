import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses =
    'font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap active:scale-95';

  const variants = {
   primary:
  'bg-primary text-white hover:opacity-90',

secondary:
  'glass text-text border border-border',

ghost:
  'text-text hover:bg-white/5',

    danger:
      'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30',
  };

  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};