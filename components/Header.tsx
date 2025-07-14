"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header({ headerData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="z-50 w-full bg-black text-white fixed top-0 left-0 right-0 shadow-md sm:mt-4 sm:rounded-full sm:max-w-[900px] sm:mx-auto">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* DESKTOP HEADER */}
        <div className="hidden sm:flex items-center justify-between h-16">
          {/* Left side: Logo + Title */}
          <Link href="/" className="flex items-center">
            {headerData?.siteLogoUrl ? (
              <img
                className="h-8 w-8"
                src={headerData.siteLogoUrl}
                alt="Site Logo"
              />
            ) : (
              <div className="text-white font-bold text-lg">
                {headerData?.siteTitle || "Default Title"}
              </div>
            )}
            {headerData?.siteTitle && (
              <div className="text-white font-bold text-lg ml-2">
                {headerData.siteTitle}
              </div>
            )}
          </Link>

          {/* Desktop Menu Items */}
          <div className="flex space-x-8 ml-auto">
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

        {/* MOBILE HEADER */}
        <div className="flex sm:hidden items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            {headerData?.siteLogoUrl ? (
              <img
                className="h-8 w-8"
                src={headerData.siteLogoUrl}
                alt="Site Logo"
              />
            ) : (
              <div className="text-white font-bold text-lg">
                {headerData?.siteTitle || "Default Title"}
              </div>
            )}
            {headerData?.siteTitle && (
              <div className="text-white font-bold text-lg ml-2">
                {headerData.siteTitle}
              </div>
            )}
          </Link>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <svg
              className="block h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="sm:hidden mt-2 px-2 pt-2 pb-3 space-y-1" id="mobile-menu">
            {headerData?.headerMenuItems?.length > 0 ? (
              headerData.headerMenuItems.map((item) => (
                <a
                  key={item.ID}
                  href={item.url}
                  className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.title}
                </a>
              ))
            ) : (
              <span className="text-gray-400">No menu items available</span>
            )}
          </div>
        )}
      </div>
    </header>
  );
}