// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );import React from 'react';
// import { motion } from 'framer-motion';

// Card Component
export const Card = ({ children, className = '', hover = false, onClick }) => {
  const baseClasses = "glass rounded-xl shadow-lg shadow-black/20 transition-all duration-200";
  const hoverClasses = hover ? "hover:scale-[1.02] cursor-pointer" : "";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`${baseClasses} ${hoverClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

// Button Component
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg";
  
  const variants = {
    primary: "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20",
    secondary: "glass text-text border border-border",
    ghost: "hover:bg-white/5 text-text",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={18} />}
      {children}
    </button>
  );
};

// Badge Component
export const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  
  const variants = {
    default: "bg-white/5 text-muted border border-border",
    primary: "bg-white/5 text-primary border border-white/10",
    accent: "bg-white/5 text-accent border border-white/10",
  };
  
  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

// Icon Wrapper
// eslint-disable-next-line no-unused-vars
export const IconWrapper = ({ icon: Icon, className = '', size = 20 }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Icon size={size} className="text-muted" />
    </div>
  );
};