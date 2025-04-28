"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header({ headerData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="max-w-[900px] w-full bg-black text-white mx-auto mt-4 rounded-full shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Site Title + Hamburger */}
          <div className="flex items-center justify-between w-full sm:w-auto">
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
              {headerData?.siteTitle ? (
                <div className="text-white font-bold text-lg ml-2">
                  {headerData.siteTitle}
                </div>
              ) : null}
            </Link>

            {/* Hamburger (only on small screens) */}
            <div className="sm:hidden ml-auto">
              <button
                onClick={toggleMenu}
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md text-gray-400 $
								${isMenuOpen ? "text-gray-500" : "text-white"}`}
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-8 w-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
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
          </div>

          {/* Desktop Nav */}
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

      {/* Mobile Menu */}
      <div
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
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
