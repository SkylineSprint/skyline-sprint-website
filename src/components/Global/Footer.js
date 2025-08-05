'use client'
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [email, setEmail] = useState('');

  const locations = [
    {
      city: "London, UK",
      address: "Floor 2, Office Suite 8, Imperial Offices, 2-4 Eastern Road, London"
    },
    {
      city: "Cleveland, USA", 
      address: "15728 Lorain Ave UNIT #132, Cleveland, OH 44111"
    },
    {
      city: "Dubai, UAE",
      address: "Office 28 Building 10, Prodigy Business Center - Bay Square"
    }
  ];

  const contactInfo = {
    phones: [
      { region: "UK", number: "+44-7917-606729" },
      { region: "US", number: "+1-707-348-2504" },
      { region: "UAE", number: "+971-58-670-7557" }
    ],
    emails: [
      { type: "info", email: "info@skylinesprint.com" },
      { type: "support", email: "support@skylinesprint.com" },
      { type: "hr", email: "hr@skylinesprint.com" }
    ]
  };

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Privacy Policy", href: "/privacy" }
  ];

  const services = [
    "Web Development",
    "Digital Marketing",
    "SEO Services",
    "Social Media Management",
    "E-commerce Solutions",
    "Branding & Design"
  ];

  return (
    
       <footer className="relative min-h-screen text-white py-16 px-4 overflow-hidden">
        {/* Background image layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity:0.3
          }}
        > </div>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-16">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center justify-center sm:justify-start mb-6">
              <Image
                src={"/images/skyline_logo.png"} 
                alt="Skyline Logo" 
                width={200} 
                height={150}
                
              />
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed text-center sm:text-left max-w-lg mx-auto sm:mx-0">
              Your digital growth partner specializing in web solutions and digital marketing services.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full lg:w-1/2 lg:max-w-md">
            <h3 className="text-[#B11E9B] text-lg sm:text-xl font-semibold mb-2 text-center lg:text-left">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base text-center lg:text-left">
              Stay updated with our latest news and offers
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#B11E9B] transition-colors text-sm sm:text-base"
              />
              <button className="bg-[#B11E9B] hover:bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm sm:text-base">
                Subscribe
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Global Presence */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 flex items-center justify-center sm:justify-start">
              <span className="h-px bg-[#B11E9B] w-6 sm:w-8 mr-3 sm:mr-4"></span>
              Our Global Presence
            </h3>
            <div className="space-y-6 sm:space-y-8">
              {locations.map((location, index) => (
                <div key={index} className="flex items-start gap-4 text-center sm:text-center">
                  <div className="mt-1 mx-auto sm:mx-0">
                    <MapPin size={18} className="sm:w-5 sm:h-5 text-[#B11E9B]" />
                  </div>
                  <div className="flex-1">
                  <h4 className="text-white font-semibold text-base sm:text-lg mb-2 text-left">
                    {location.city}
                  </h4>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-left">
                    {location.address}
                  </p>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 sm:p-6 lg:p-8">
              {/* Tabs */}
              <div className="flex border-b border-gray-700 mb-6 sm:mb-8 overflow-x-auto">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`pb-3 sm:pb-4 px-3 sm:px-6 font-semibold transition-colors relative whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'contact' 
                      ? 'text-white border-b-2 border-[#B11E9B]' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setActiveTab('links')}
                  className={`pb-3 sm:pb-4 px-3 sm:px-6 font-semibold transition-colors whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'links' 
                      ? 'text-white border-b-2 border-[#B11E9B]' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Quick Links
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`pb-3 sm:pb-4 px-3 sm:px-6 font-semibold transition-colors whitespace-nowrap text-sm sm:text-base ${
                    activeTab === 'services' 
                      ? 'text-white border-b-2 border-[#B11E9B]' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Services
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'contact' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Phone Numbers */}
                  <div>
                    <h4 className="text-[#B11E9B] font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Phone Numbers
                    </h4>
                    <div className="space-y-3">
                      {contactInfo.phones.map((phone, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                          <span className="text-gray-400 text-sm sm:text-base">{phone.region}:</span>
                          <div className="flex items-center gap-2">
                            <a 
                              href={`tel:${phone.number}`}
                              className="text-white hover:text-[#B11E9B] transition-colors cursor-pointer text-sm sm:text-base"
                            >
                              {phone.number}
                            </a>
                            <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px] text-gray-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div>
                    <h4 className="text-[#B11E9B] font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                      Email Addresses
                    </h4>
                    <div className="space-y-3">
                      {contactInfo.emails.map((email, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <a 
                            href={`mailto:${email.email}`}
                            className="text-white hover:text-[#B11E9B] transition-colors cursor-pointer text-sm sm:text-base break-all"
                          >
                            {email.email}
                          </a>
                          <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px] text-gray-500 flex-shrink-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'links' && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-gray-400 hover:text-[#B11E9B] transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}

              {activeTab === 'services' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer text-sm sm:text-base py-1"
                    >
                      • {service}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left text-sm sm:text-base">
              © 2025 Skyline Sprint. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Twitter size={18} className="sm:w-5 sm:h-5 text-gray-400 hover:text-[#B11E9B] cursor-pointer transition-colors" />
              <Facebook size={18} className="sm:w-5 sm:h-5 text-gray-400 hover:text-[#B11E9B] cursor-pointer transition-colors" />
              <Instagram size={18} className="sm:w-5 sm:h-5 text-gray-400 hover:text-[#B11E9B] cursor-pointer transition-colors" />
              <Linkedin size={18} className="sm:w-5 sm:h-5 text-gray-400 hover:text-[#B11E9B] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;