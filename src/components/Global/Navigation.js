// components/Navigation.js
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Landmark, Share2, FolderCode, ChevronDown, Menu, X } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect for navbar resizing
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to check if current route is active
  const isActiveRoute = (path) => {
    return pathname === path;
  };

  // Services data 
  const services = [
    {
      name: 'Custom Softwares',
      href: '/services/custom-software',
      icon: <FolderCode className="w-5 h-5" />,
      description: 'Custom-built responsive Software that drive conversions.',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      name: 'Digital Marketing',
      href: '/services/digital-marketing',
      icon: <Share2 className="w-5 h-5" />,
      description: 'Engage your audience with compelling content strategies.',
      iconBg: 'bg-gradient-to-br from-pink-500 to-pink-600'
    },
    {
      name: 'Institute Of Tech',
      href: '/services/teaching-institute',
      icon: <Landmark className="w-5 h-5" />,
      description: 'Industry-aligned Tech education and hands-on training.',
      iconBg: 'bg-gradient-to-br from-teal-400 to-teal-500'
    },
  ];

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'About Us', href: '/about' },  
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdown on mobile menu close
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsMobileServicesOpen(false);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Fixed container for the navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <nav 
          className={`
            relative transition-all duration-500 ease-out
            ${scrolled 
              ? 'w-full max-w-5xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-black/30' 
              : 'w-full max-w-7xl bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/10'
            }
            ${scrolled ? 'rounded-2xl border border-white/30 dark:border-white/20' : 'rounded-3xl border border-white/30 dark:border-white/15'}
            ${scrolled ? 'mx-4' : 'mx-0'}
          `}
        >
          <div className={`transition-all duration-500 ${scrolled ? 'px-4 lg:px-6' : 'px-6 lg:px-8'}`}>
            <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-14' : 'h-16'}`}>
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <div className="w-48 h-14 relative">
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

              {/* Desktop Navigation Links */}
              <div className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? 'space-x-1' : 'space-x-2'}`}>
                {navigationLinks.map((link) => (
                  <div key={link.name} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={toggleServicesDropdown}
                          className={`
                            flex items-center px-4 py-2.5 text-sm font-medium 
                            transition-all duration-300 rounded-xl
                            hover:bg-white/60 dark:hover:bg-white/10
                            hover:shadow-lg hover:shadow-purple-500/10
                            hover:scale-105 active:scale-95
                            ${isActiveRoute(link.href) || pathname.startsWith('/services/')
                              ? 'text-purple-600 dark:text-purple-400 bg-white/70 dark:bg-white/15 shadow-md shadow-purple-500/20'
                              : 'text-gray-700 dark:text-gray-200'
                            }
                          `}
                        >
                          {link.name}
                          <ChevronDown 
                            className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${
                              isServicesDropdownOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Desktop Dropdown Menu */}
                        {isServicesDropdownOpen && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] animate-in fade-in slide-in-from-top-2 duration-300">
                            <div className="bg-black/90 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                              <div className="p-8">
                                <div className="grid grid-cols-1 gap-1">
                                  {services.map((service, index) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      onClick={() => setIsServicesDropdownOpen(false)}
                                      className="group flex items-center space-x-4 p-4 hover:bg-white/10 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                                      style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                      <div className={`${service.iconBg} rounded-2xl p-3.5 text-white shadow-lg flex-shrink-0 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                                        {service.icon}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-white text-base leading-tight mb-1.5 group-hover:text-purple-400 transition-colors duration-300">
                                          {service.name}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                          {service.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`
                          px-4 py-2.5 text-sm font-medium 
                          transition-all duration-300 rounded-xl
                          hover:bg-white/60 dark:hover:bg-white/10
                          hover:shadow-lg hover:shadow-purple-500/10
                          hover:scale-105 active:scale-95
                          ${isActiveRoute(link.href)
                            ? 'text-purple-600 dark:text-purple-400 bg-white/70 dark:bg-white/15 shadow-md shadow-purple-500/20'
                            : 'text-gray-700 dark:text-gray-200'
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className={`hidden md:flex items-center transition-all duration-500 ${scrolled ? 'space-x-2' : 'space-x-3'}`}>
                <Link 
                  href="/login"
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 rounded-xl hover:bg-white/40 dark:hover:bg-white/10 hover:scale-105 active:scale-95"
                >
                  Login
                </Link>
                <Link 
                  href="/signup"
                  className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-sm"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="p-2.5 text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white/50 dark:hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden animate-in fade-in slide-in-from-top-3 duration-300">
              <div className="mx-4 mb-4 p-6 space-y-3 bg-black/90 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20">
                {navigationLinks.map((link, index) => (
                  <div key={link.name} style={{ animationDelay: `${index * 50}ms` }} className="animate-in fade-in slide-in-from-left-2 duration-300">
                    {link.hasDropdown ? (
                      <div>
                        <button
                          onClick={toggleMobileServices}
                          className={`
                            w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium 
                            transition-all duration-300 rounded-2xl
                            hover:bg-white/50 dark:hover:bg-white/10 hover:scale-[1.02]
                            ${isActiveRoute(link.href) || pathname.startsWith('/services/')
                              ? 'text-purple-400 bg-white/15 shadow-lg shadow-purple-500/20'
                              : 'text-white'
                            }
                          `}
                        >
                          <span>{link.name}</span>
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform duration-300 ${
                              isMobileServicesOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Mobile Services Submenu */}
                        {isMobileServicesOpen && (
                          <div className="ml-4 mt-3 space-y-2 border-l-2 border-gradient-to-b from-purple-500 to-pink-500 pl-4 animate-in fade-in slide-in-from-left-2 duration-300">
                            {services.map((service, serviceIndex) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center space-x-3 py-3 px-3 text-white hover:text-purple-400 hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-[1.02] group"
                                style={{ animationDelay: `${serviceIndex * 50}ms` }}
                              >
                                <div className={`${service.iconBg} rounded-xl p-2.5 text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                  {service.icon}
                                </div>
                                <span className="text-sm font-medium">{service.name}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          block px-4 py-3.5 text-sm font-medium 
                          transition-all duration-300 rounded-2xl hover:scale-[1.02]
                          hover:bg-white/50 dark:hover:bg-white/10
                          ${isActiveRoute(link.href)
                            ? 'text-purple-400 bg-white/15 shadow-lg shadow-purple-500/20'
                            : 'text-white'
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Auth Buttons */}
                <div className="pt-4 mt-6 border-t border-white/30 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300" style={{ animationDelay: '200ms' }}>
                  <Link 
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-sm font-medium text-white hover:text-purple-400 hover:bg-white/10 rounded-2xl transition-all duration-300 text-center hover:scale-[1.02]"
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 text-center hover:scale-[1.02] active:scale-95"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className={`transition-all duration-500 ${scrolled ? 'h-20' : 'h-24'}`}></div>
    </>
  );
};

export default Navigation;