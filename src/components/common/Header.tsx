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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-[#0b1d3a] backdrop-blur-lg border-b border-[#0b1d3a]-100'
          : 'bg-[#0b1d3a] backdrop-blur-md border-b border-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <div className="relative flex-shrink-0">
            <img
              src="/enebula.png"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain transform scale-200 sm:scale-150 md:scale-250"
            />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex ml-auto space-x-2 items-center bg-[#0b1d3a]">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 py-2 font-medium text-sm md:text-base rounded-lg transition-all duration-200 ${
                scrolled
                  ? 'text-gray-200 hover:text-white hover:bg-gray-800/50'
                  : 'text-white hover:text-gray-200 hover:bg-white/10'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="primary"
            size="sm"
            className="ml-4 bg-green-600 text-white hover:bg-green-700 shadow-md rounded-lg px-4 py-2"
          >
            <Link to="/contact" className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Contact Us
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden ml-auto p-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
            scrolled
              ? 'hover:bg-gray-100 focus:ring-gray-500'
              : 'hover:bg-white/10 focus:ring-white/50'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <span
              className={`absolute top-0 left-0 w-6 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-200' : 'bg-white'
              } ${isMenuOpen ? 'rotate-45 top-2.5' : ''}`}
            ></span>
            <span
              className={`absolute top-2.5 left-0 w-6 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-200' : 'bg-white'
              } ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`absolute top-5 left-0 w-6 h-0.5 transition-all duration-300 ${
                scrolled ? 'bg-gray-200' : 'bg-white'
              } ${isMenuOpen ? '-rotate-45 top-2.5' : ''}`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className={`py-4 space-y-2 border-t transition-all duration-300 bg-[#0b1d3a]`}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block py-3 px-4 text-white hover:text-gray-200 hover:bg-white/10 font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Button
              variant="primary"
              size="sm"
              className="w-full bg-green-600 text-white hover:bg-green-700 shadow-md rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;