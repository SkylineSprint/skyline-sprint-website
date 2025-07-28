// components/Navigation.js
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to check if current route is active
  const isActiveRoute = (path) => {
    return pathname === path;
  };

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },

  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-48 h-48 mr-3 relative">
                  <Image 
                    src="/images/skyline_logo.png" 
                    alt="Skyline Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-md font-medium transition-colors duration-200 ${
                    isActiveRoute(link.href)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-purple-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
          
            <Link 
              href="/signup"
              className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            >
              Get Started 
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 rounded-lg mt-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                    isActiveRoute(link.href)
                      ? 'text-white bg-gray-800'
                      : 'text-gray-400 hover:text-purple-400 hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex flex-col space-y-2">
                  <Link 
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-400 hover:text-white px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-transparent border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 text-center"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;