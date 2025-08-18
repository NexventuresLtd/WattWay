import React, { useState } from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const baseClasses = `
    relative overflow-hidden rounded-xl font-semibold 
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-4 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transform active:scale-95
    group
  `;
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const variantClasses = {
    primary: `
      bg-green-600 hover:bg-green-700 text-white 
      focus:ring-green-300 shadow-lg hover:shadow-xl
      before:absolute before:inset-0 before:bg-white before:opacity-0 
      before:transition-opacity before:duration-200 hover:before:opacity-10
    `,
    secondary: `
      bg-blue-600 hover:bg-blue-700 text-white 
      focus:ring-blue-300 shadow-lg hover:shadow-xl
      before:absolute before:inset-0 before:bg-white before:opacity-0 
      before:transition-opacity before:duration-200 hover:before:opacity-10
    `,
    outline: `
      border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white 
      focus:ring-green-300 bg-transparent hover:shadow-lg
      before:absolute before:inset-0 before:bg-green-600 before:opacity-0 
      before:transition-opacity before:duration-200 hover:before:opacity-100
    `,
  };

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ripple effect */}
      <span className={`
        absolute inset-0 rounded-xl opacity-30
        bg-radial-gradient from-white/30 to-transparent
        transform scale-0 group-active:scale-100
        transition-transform duration-200 ease-out
        ${isPressed ? 'animate-ping' : ''}
      `}></span>

      {/* Shimmer effect */}
      <span className="absolute inset-0 rounded-xl">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
      </span>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        
        {icon && !loading && (
          <span className="group-hover:scale-110 transition-transform duration-200">
            {icon}
          </span>
        )}
        
        <span className="group-hover:tracking-wider transition-all duration-200">
          {children}
        </span>
      </span>

      {/* Glow effect for primary and secondary */}
      {(variant === 'primary' || variant === 'secondary') && (
        <span className={`
          absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 pointer-events-none
          ${variant === 'primary' ? 'shadow-green-500/50' : 'shadow-blue-500/50'}
          shadow-2xl blur-xl
        `}></span>
      )}
    </button>
  );
};

export default Button;