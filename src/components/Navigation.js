// components/Navigation.js
'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Landmark,Share2,FolderCode } from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Helper function to check if current route is active
  const isActiveRoute = (path) => {
    return pathname === path;
  };

  // Services data 
  const services = [
    {
      name: 'Custom Softwares ',
      href: '/services/custom-software',
      icon: (
        <FolderCode className="w-6 h-6 text-white-700" />
      ),
      description: 'Custom-built responsive Software that drive conversions.',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      name: 'Digital Marketing',
      href: '/services/digital-marketing',
      icon: (
        <Share2 className="w-6 h-6 text-white-700" />
      ),
      description: 'Engage your audience with compelling content strategies.',
      iconBg: 'bg-gradient-to-br from-pink-500 to-pink-600'
    },
    {
      name: 'Institute Of Tech',
      href: '/services/teaching-institute',
      icon: (
        <Landmark className="w-6 h-6 text-white-700" />
      ),
      description: 'Industry-aligned Tech education and hands-on training.',
      iconBg: 'bg-gradient-to-br from-teal-400 to-teal-500'
    },
    {
      name: 'Leads Generation',
      href: '/services/leads-generation',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
        </svg>
      ),
      description: 'Convert visitors into qualified leads.',
      iconBg: 'bg-gradient-to-br from-orange-400 to-orange-500'
    },
    
  ];

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'About Us', href: '/about' },  
    { name: 'Contact Us', href: '/contact' },
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-48 h-18 mr-3 relative">
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
                <div key={link.name} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleServicesDropdown}
                        className={`px-3 py-2 text-md font-medium transition-colors duration-200 flex items-center ${
                          isActiveRoute(link.href) || pathname.startsWith('/services/')
                            ? 'text-white'
                            : 'text-gray-400 hover:text-purple-400'
                        }`}
                      >
                        {link.name}
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            isServicesDropdownOpen ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Desktop Dropdown Menu  */}
                      {isServicesDropdownOpen && (
                       <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-[#0A0A0F] rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-800/50">

                          <div className="p-8">
                            <div className="grid grid-cols-2 gap-6">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={() => setIsServicesDropdownOpen(false)}
                                  className="group flex items-start space-x-4 p-0 hover:scale-[1.02] transition-all duration-300"
                                >
                                  <div className={`${service.iconBg} rounded-2xl p-4 text-white shadow-lg flex-shrink-0`}>
                                    {service.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-white text-lg leading-tight mb-2 group-hover:text-purple-300 transition-colors duration-200">
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
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`px-3 py-2 text-md font-medium transition-colors duration-200 ${
                        isActiveRoute(link.href)
                          ? 'text-white'
                          : 'text-gray-400 hover:text-purple-400'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#080808] rounded-lg mt-2">
              {navigationLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleMobileServices}
                        className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md  ${
                          isActiveRoute(link.href) || pathname.startsWith('/services/')
                            ? 'text-white bg-gray-800'
                            : 'text-gray-400 hover:text-purple-400 hover:bg-gray-800'
                        }`}
                      >
                        <span>{link.name}</span>
                        <svg 
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Mobile Services Submenu - Exact Match to Your Image */}
                      {isMobileServicesOpen && (
                        <div className="ml-6 mt-2 space-y-1 border-l-2 border-purple-500 pl-4">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center space-x-3 py-3 text-white hover:text-purple-400 transition-colors duration-200"
                            >
                              <div className={`${service.iconBg} rounded-xl p-2.5 text-white shadow-lg flex-shrink-0`}>
                                {service.icon}
                              </div>
                              <span className="text-base font-medium">{service.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
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
                  )}
                </div>
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