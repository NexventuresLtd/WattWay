import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/'},
    { name: 'Services', path: '/services'},
    { name: 'Products', path: '/products'},
    { name: 'About Us', path: '/about'},
    { name: 'Contact', path: '/contact'},
    { name: 'FAQ', path: '/faq'}
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white shadow-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo with animation */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-500 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-200 group-hover:scale-110 transform">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
              WattWay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-3 py-2 text-gray-700 hover:text-gray-600 font-medium transition-all duration-200 rounded-lg group hover:bg-gray-50 text-sm xl:text-base"
              >
                <span className="flex items-center space-x-2">
                  <span className="opacity-60 group-hover:opacity-100"></span>
                  <span>{item.name}</span>
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gray-500 group-hover:w-4/5 transition-all duration-300"></div>
              </Link>
            ))}
            <Button 
              variant="primary" 
              size="sm" 
              className="ml-4 group hover:scale-105 transition-transform duration-200"
            >
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Started
              </span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-0 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-2.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 space-y-2 bg-white border-t border-gray-200 mt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="flex items-center space-x-3 py-3 px-4 text-gray-700 hover:text-gray-600 hover:bg-gray-50 font-medium rounded-lg transition-all duration-200 transform hover:translate-x-2"
                style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 px-4">
              <Button 
                variant="primary" 
                size="sm" 
                className="w-full group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Get Started
                </span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;