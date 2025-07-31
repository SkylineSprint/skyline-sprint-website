'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const slides = [
    {
      title: "Transform Your Digital Vision Into Reality",
      description: "Skyline Sprint delivers cutting-edge software development, digital marketing excellence, and professional training to accelerate your business growth.",
      subtitle: "Helping forward-looking companies thrive with custom AI solutions and automated workflows."
    },
    // Add more slides here if needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play functionality for slider
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  

  return (
    <div className="relative min-h-[70vh] sm:h-[70vh] overflow-hidden bg-black  ">
      {/* Background Pattern/Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
          '@media (minWidth: 640px)': {
            backgroundSize: '50px 50px'
          }
        }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                {slides[currentSlide].title.split('\n').map((line, index) => (
                  <div key={index}>
                    {line}
                  </div>
                ))}
              </h1>
            </div>

            {/* Right Side - Description and Buttons */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                {slides[currentSlide].description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto  text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 transform hover:scale-105 " 
                style={{
                    background: 'linear-gradient(180deg, #B11E9B 0%, #7D146D 100%)'
                  }}>
                  Get Started
                </button>
                <button className="w-full sm:w-auto bg-transparent border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-purple-400 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Icon - Bottom Center of Container - Mobile Responsive */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
        <svg 
          width="16" 
          height="22"
          viewBox="0 0 33 47" 
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-5 sm:h-7 md:w-[33px] md:h-[47px] w-4 h-6"
        >
          <path d="M19.8125 0.726562H13.1875C9.78438 0.730398 6.52173 2.08398 4.11536 4.49036C1.70898 6.89673 0.355398 10.1594 0.351562 13.5625V33.4375C0.355398 36.8406 1.70898 40.1033 4.11536 42.5096C6.52173 44.916 9.78438 46.2696 13.1875 46.2734H19.8125C23.2156 46.2696 26.4783 44.916 28.8846 42.5096C31.291 40.1033 32.6446 36.8406 32.6484 33.4375V13.5625C32.6446 10.1594 31.291 6.89673 28.8846 4.49036C26.4783 2.08398 23.2156 0.730398 19.8125 0.726562ZM30.1641 33.4375C30.1608 36.1819 29.0691 38.8129 27.1285 40.7535C25.1879 42.6941 22.5569 43.7858 19.8125 43.7891H13.1875C10.4431 43.7858 7.81205 42.6941 5.87147 40.7535C3.93089 38.8129 2.83922 36.1819 2.83594 33.4375V13.5625C2.83922 10.8181 3.93089 8.18705 5.87147 6.24647C7.81205 4.30589 10.4431 3.21422 13.1875 3.21094H19.8125C22.5569 3.21422 25.1879 4.30589 27.1285 6.24647C29.0691 8.18705 30.1608 10.8181 30.1641 13.5625V33.4375ZM17.7422 10.25V20.1875C17.7422 20.5169 17.6113 20.8329 17.3784 21.0659C17.1454 21.2988 16.8294 21.4297 16.5 21.4297C16.1706 21.4297 15.8546 21.2988 15.6216 21.0659C15.3887 20.8329 15.2578 20.5169 15.2578 20.1875V10.25C15.2578 9.92055 15.3887 9.6046 15.6216 9.37164C15.8546 9.13869 16.1706 9.00781 16.5 9.00781C16.8294 9.00781 17.1454 9.13869 17.3784 9.37164C17.6113 9.6046 17.7422 9.92055 17.7422 10.25Z" />
        </svg>
      </div>

      {/* Horizontal Arrow + Line - Bottom Right - Mobile Responsive */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 right-2 sm:right-4 md:right-8 z-20">
        <svg 
          width="35" 
          height="13" 
          viewBox="0 0 68 25" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[45px] sm:h-[17px] md:w-[68px] md:h-[25px] w-[30px] h-[11px]"
        >
          <path d="M12.7833 22.8948C12.8668 22.9726 12.9337 23.0665 12.9802 23.1707C13.0267 23.275 13.0516 23.3875 13.0537 23.5017C13.0557 23.6158 13.0347 23.7292 12.9919 23.835C12.9492 23.9408 12.8855 24.037 12.8048 24.1177C12.7241 24.1984 12.628 24.2621 12.5221 24.3048C12.4163 24.3476 12.3029 24.3685 12.1888 24.3665C12.0747 24.3645 11.9621 24.3395 11.8578 24.2931C11.7536 24.2466 11.6597 24.1796 11.5819 24.0961L0.248586 12.7628C0.0894085 12.6034 0 12.3874 0 12.1621C0 11.9369 0.0894085 11.7208 0.248586 11.5615L11.5819 0.22813C11.743 0.0779864 11.9562 -0.00375288 12.1764 0.000132427C12.3966 0.00401774 12.6067 0.0932244 12.7624 0.248959C12.9182 0.404694 13.0074 0.614797 13.0112 0.835005C13.0151 1.05521 12.9334 1.26833 12.7833 1.42946L2.052 12.1621L12.7833 22.8948Z" fill="white"/>
          <line x1="28.7109" y1="11.5889" x2="67.9998" y2="11.5889" stroke="white"/>
        </svg>
      </div>

      {/* Decorative Elements - Responsive positioning */}
      <div className="absolute top-1/4 right-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-purple-500 rounded-full opacity-60 animate-pulse z-20"></div>
      <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000 z-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-300 rounded-full opacity-50 animate-pulse delay-2000 z-20"></div>
    </div>
  );
};

export default HeroSection;