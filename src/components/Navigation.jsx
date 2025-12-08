import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Signals Trading', path: '/signals' },
    { name: 'Trading Plan', path: '/trading-plan' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="container py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-gradient">Crypto</span>
            <span className="text-blue-400">Trading</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-3 py-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'text-blue-400 bg-blue-900/20'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-400 bg-blue-900/20'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;