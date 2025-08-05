'use client';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: 'Jane',
    lastName: 'Lord',
    email: 'Lord@gmail.com',
    location: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-black flex items-start justify-center py-8 px-4">
      {/* Main Form Container */}
      <div 
        className="relative w-full max-w-6xl bg-black/90 backdrop-blur-xl rounded-3xl p-8 md:p-12"
        style={{
          border: '1px solid rgba(177, 30, 155, 0.4)',
          boxShadow: `
            0 0 20px rgba(177, 30, 155, 0.15),
            0 0 40px rgba(177, 30, 155, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `
        }}
      >
        {/* Subtle Border Glow Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {/* Top edge glow */}
          <div 
            className="absolute -top-px left-1/2 transform -translate-x-1/2 w-96 h-0.5 opacity-40"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #B11E9B 50%, transparent 100%)',
              filter: 'blur(8px)'
            }}
          />
          {/* Bottom edge glow */}
          <div 
            className="absolute -bottom-px left-1/2 transform -translate-x-1/2 w-96 h-0.5 opacity-30"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #7D146D 50%, transparent 100%)',
              filter: 'blur(12px)'
            }}
          />
          {/* Left edge glow */}
          <div 
            className="absolute -left-px top-1/2 transform -translate-y-1/2 w-0.5 h-48 opacity-25"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, #B11E9B 50%, transparent 100%)',
              filter: 'blur(6px)'
            }}
          />
          {/* Right edge glow */}
          <div 
            className="absolute -right-px top-1/2 transform -translate-y-1/2 w-0.5 h-48 opacity-25"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, #B11E9B 50%, transparent 100%)',
              filter: 'blur(6px)'
            }}
          />
        </div>

        {/* Glossy overlay */}
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(177, 30, 155, 0.05) 100%)'
          }}
        />
        
        {/* Form Content */}
        <div className="relative z-10">
          <div className="space-y-8">
            
            {/* Name Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-3">
                <label className="block text-white text-sm font-medium">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full h-16 px-4 bg-[#1C1C1C] text-white rounded-xl border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 hover:bg-[#252525]"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-3">
                <label className="block text-white text-sm font-medium">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-16 px-4 bg-[#1C1C1C] text-white rounded-xl border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 hover:bg-[#252525]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-3">
              <label className="block text-white text-sm font-medium">
                How can we reach you?*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full h-16 px-4 bg-[#1C1C1C] text-white rounded-xl border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 hover:bg-[#252525]"
              />
            </div>

            {/* Location and Company Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Location */}
              <div className="space-y-3">
                <label className="block text-white text-sm font-medium">
                  Where are you from?*
                </label>
                <div className="relative">
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full h-16 px-4 pr-12 bg-[#1C1C1C] text-gray-300 rounded-xl border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 hover:bg-[#252525] appearance-none cursor-pointer"
                  >
                    <option value="">Select</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="jp">Japan</option>
                    <option value="in">India</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Company Type */}
              <div className="space-y-3">
                <label className="block text-white text-sm font-medium">
                  What is the type of your company?*
                </label>
                <div className="relative">
                  <select
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full h-16 px-4 pr-12 bg-[#1C1C1C] text-gray-300 rounded-xl border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 hover:bg-[#252525] appearance-none cursor-pointer"
                  >
                    <option value="">Select</option>
                    <option value="startup">Startup</option>
                    <option value="enterprise">Enterprise</option>
                    <option value="agency">Digital Agency</option>
                    <option value="freelancer">Freelancer</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="saas">SaaS</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-3">
              <label className="block text-white text-sm font-medium">
                Message*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message here..."
                rows={6}
                className="w-full px-4 py-4 bg-[#1C1C1C] text-white rounded-xl border border-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 hover:bg-[#252525] resize-none placeholder:text-gray-500"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full h-10 text-white  rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(180deg, #B11E9B 0%, #7D146D 100%)',
                  boxShadow: '0 8px 32px rgba(177, 30, 155, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
                <span className="relative z-10">Submit Now</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}