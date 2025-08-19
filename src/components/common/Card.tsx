import React, { useState } from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  interactive?: boolean;
};

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  shadow = 'md', 
  hover = true,
  interactive = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  const hoverShadowClasses = {
    sm: 'hover:shadow-md',
    md: 'hover:shadow-lg',
    lg: 'hover:shadow-xl',
  };

  return (
    <div 
      className={`
        bg-white rounded-xl overflow-hidden border border-gray-100
        transition-all duration-300 ease-in-out
        ${shadowClasses[shadow]} 
        ${hover ? hoverShadowClasses[shadow] : ''} 
        ${hover ? 'hover:-translate-y-2' : ''}
        ${interactive ? 'cursor-pointer hover:scale-105' : ''}
        ${isHovered && hover ? 'ring-2 ring-gray-100' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border gradient */}
      {isHovered && hover && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white via-white to-white opacity-20 animate-pulse pointer-events-none"></div>
      )}
      
      {/* Decorative corner accent */}
      <div className="relative">
        <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 transition-opacity duration-300 ${
          isHovered ? 'opacity-20' : 'opacity-10'
        }`}>
          <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-gray-500">
            <circle cx="80" cy="20" r="15"/>
            <circle cx="60" cy="40" r="8"/>
            <circle cx="40" cy="20" r="5"/>
          </svg>
        </div>
        
        {/* Content wrapper */}
        <div className="relative z-10">
          {children}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className={`h-1 bg-gradient-to-r from-white to-white transition-all duration-300 ${
        isHovered && hover ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default Card;