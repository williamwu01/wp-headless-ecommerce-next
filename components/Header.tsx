'use client';

import React, { useState } from 'react';

export default function Header({ headerData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white w-full mx-auto mt-4 rounded-full shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="block h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-between sm:items-center sm:justify-between">
            <div className="flex-shrink-0">
              {headerData?.siteLogoUrl ? (
                <img 
                  className="h-8 w-8" 
                  src={headerData.siteLogoUrl} 
                  alt="Site Logo" 
                />
              ) : (
                <div className="text-white font-bold text-lg">{headerData?.siteTitle || 'Default Title'}</div>
              )}
            </div>
            {/* Navigation Menu for Larger Screens */}
            <div className="hidden sm:flex sm:space-x-8 sm:ml-auto">
              {headerData?.headerMenuItems?.length > 0 ? (
                headerData.headerMenuItems.map((item) => (
                  <a 
                    key={item.ID} 
                    href={item.url} 
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.title}
                  </a>
                ))
              ) : (
                <span className="text-gray-400">No menu items available</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {headerData?.headerMenuItems?.length > 0 ? (
            headerData.headerMenuItems.map((item) => (
              <a 
                key={item.ID} 
                href={item.url} 
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </a>
            ))
          ) : (
            <span className="text-gray-400">No menu items available</span>
          )}
        </div>
      </div>
    </header>
  );
}