import React from 'react';
import { motion } from 'framer-motion';


/* ================= CARD ================= */

export const Card = ({ children, className = '', hover = false, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`
        glass
        rounded-2xl
        border border-black/5 dark:border-white/10
        shadow-lg dark:shadow-2xl
        transition-all duration-300
        ${hover ? 'hover:scale-[1.02] hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)] cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
};


/* ================= CARD PARTS ================= */

export const CardHeader = ({ children, className = '' }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-text ${className}`}>
    {children}
  </h3>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`text-muted text-sm leading-relaxed ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`mt-6 pt-4 border-t border-border flex gap-3 ${className}`}>
    {children}
  </div>
);

/* ================= BUTTON ================= */

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
      'bg-primary text-white shadow-md hover:bg-primary/90 hover:shadow-lg',

    secondary:
      'glass text-text hover:shadow-lg',

    ghost:
      'text-text hover:bg-white/5 hover:shadow-lg',

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

/* ================= BADGE ================= */

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) => {
  const variants = {
    default: 'bg-white/5 text-muted border border-border',
    primary: 'bg-white/5 text-primary border border-white/10',
    accent: 'bg-white/5 text-accent border border-white/10',
    success: 'bg-green-500/10 text-green-400 border border-green-500/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-xs',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};