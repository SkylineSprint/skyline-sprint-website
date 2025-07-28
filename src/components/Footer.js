'use client'
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Twitter, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import Image  from 'next/image';
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

  return (
    <footer className="bg-[#080808] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16">
          {/* Logo and Description */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <Image src={"/images/skyline_logo.png"} alt="Skyline Logo" width={200} height={150} className="mr-4" />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Your digital growth partner specializing in web solutions and digital marketing services.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:w-1/2 lg:max-w-md">
            <h3 className="text-[#B11E9B] text-xl font-semibold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-6">Stay updated with our latest news and offers</p>
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#B11E9B] transition-colors"
              />
              <button className="bg-[#B11E9B] hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Subscribe
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Global Presence */}
          <div className="lg:w-1/2">
            <h3 className="text-xl font-semibold mb-8 flex items-center">
              <span className="h-px bg-[#B11E9B] w-8 mr-4"></span>
              Our Global Presence
            </h3>
            <div className="space-y-8">
              {locations.map((location, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin size={20} className="text-[#B11E9B]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">{location.city}</h4>
                    <p className="text-gray-400 leading-relaxed">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information Card */}
          <div className="lg:w-1/2">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
              {/* Tabs */}
              <div className="flex border-b border-gray-700 mb-8">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`pb-4 px-6 font-semibold transition-colors relative ${
                    activeTab === 'contact' 
                      ? 'text-white border-b-2 border-[#B11E9B]' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Contact Us
                </button>
                <button
                  onClick={() => setActiveTab('links')}
                  className={`pb-4 px-6 font-semibold transition-colors ${
                    activeTab === 'links' 
                      ? 'text-white border-b-2 border-[#B11E9B]' 
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Quick Links
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`pb-4 px-6 font-semibold transition-colors ${
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
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Phone Numbers */}
                  <div>
                    <h4 className="text-[#B11E9B] font-semibold mb-4 flex items-center gap-2">
                      <Phone size={18} />
                      Phone Numbers
                    </h4>
                    <div className="space-y-3">
                      {contactInfo.phones.map((phone, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-400">{phone.region}:</span>
                          <div className="flex items-center gap-2">
                            <a 
                              href={`tel:${phone.number}`}
                              className="text-white hover:text-[#B11E9B] transition-colors cursor-pointer"
                            >
                              {phone.number}
                            </a>
                            <ExternalLink size={14} className="text-gray-500" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Email Addresses */}
                  <div>
                    <h4 className="text-[#B11E9B] font-semibold mb-4 flex items-center gap-2">
                      <Mail size={18} />
                      Email Addresses
                    </h4>
                    <div className="space-y-3">
                      {contactInfo.emails.map((email, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <a 
                            href={`mailto:${email.email}`}
                            className="text-white hover:text-[#B11E9B] transition-colors cursor-pointer"
                          >
                            {email.email}
                          </a>
                          <ExternalLink size={14} className="text-gray-500" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}


              {activeTab === 'links' && (
                <div className="text-gray-400">
                  <p>Quick Links content would go here...</p>
                </div>
              )}

              {activeTab === 'services' && (
                <div className="text-gray-400">
                  <p>Services content would go here...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Skyline Sprint. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Twitter size={20} className="text-gray-400 hover:text-[#B11E9B] cursor-pointer transition-colors" />
              <Facebook size={20} className="text-gray-400 hover:text-[#B11E9B] cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-[#B11E9B] cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-gray-400 hover:text-[#B11E9B] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;