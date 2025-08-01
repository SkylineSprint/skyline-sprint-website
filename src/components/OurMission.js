'use client'
import React from 'react';
import Image from 'next/image';
const OurMission = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
  {/* Background Image Layer */}
  <div 
    className="absolute inset-0 z-0"
    style={{ 
      backgroundImage: "url('/images/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.3 ,
      zIndex: 0

    }}
  ></div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="space-y-8">
        <button 
            className="relative px-6 py-2 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 mb-8 "
            style={{
              background: 'rgba(177, 30, 155, 0.2)',
              boxShadow: `
                inset 0px 10px 5px -1px rgba(255, 255, 255, 0.08),
                0px 6px 18px -1.5px rgba(177, 30, 155, 0.18),
                0px 1.37px 4.12px -1px rgba(177, 30, 155, 0.1),
                0px 0.36px 1.08px -0.5px rgba(177, 30, 155, 0.08)
              `,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(177, 30, 155, 0.3)'
            }}
          >
            Skyline Sprint 
          </button>
            <div>
              <h2 className="textxl md:text-5xl font-bold text-white mb-8">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses and individuals through innovative technology solutions, strategic digital marketing, and world-class education that drives sustainable growth and success.
              </p>
            </div>
            
            {/* Decorative Line */}
            <div className="w-24 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
            
            {/* Button */}
            <div>
              <button 
                className="group relative px-8 py-4 bg-black text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg overflow-hidden"
                style={{
                  borderTop: '2px solid #B11E9B',
                  borderBottom: '2px solid #B11E9B',
                  borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRight: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(177, 30, 155, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View Our Work</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="lg:pl-8">
            <div className="relative">
              <div 
                className="rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20"
                style={{
                  boxShadow: '0 10px 5px -1px rgba(177, 30, 155, 0.15)'
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                  alt="Team collaboration and innovation"
                  className="w-full h-96 lg:h-[500px] object-cover"
                  height={500}
                  width={800}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full border-2 border-purple-500/30"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-purple-500/20"></div>
              
              {/* Floating accent */}
              <div className="absolute top-6 left-6 w-12 h-12 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;