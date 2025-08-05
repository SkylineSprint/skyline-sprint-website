'use client'
import React, { useState, useEffect, useRef } from 'react';

const ScrollViewFeature = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrollHijacked, setIsScrollHijacked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const componentRef = useRef(null);
  const scrollTimeout = useRef(null);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll hijacking
  useEffect(() => {
    const handleScroll = (e) => {
      if (!componentRef.current) return;

      const rect = componentRef.current.getBoundingClientRect();
      const isInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (isInView && !isScrollHijacked) {
        // Entering scroll hijack mode
        setIsScrollHijacked(true);
        document.body.style.overflow = 'hidden';
        e.preventDefault();
      } else if (!isInView && isScrollHijacked) {
        // Exiting scroll hijack mode
        setIsScrollHijacked(false);
        document.body.style.overflow = 'auto';
        setActiveSection(0); // Reset to section 0
      }
    };

    const handleWheel = (e) => {
      if (!isScrollHijacked) return;

      e.preventDefault();
      
      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Debounce scroll events
      scrollTimeout.current = setTimeout(() => {
        const delta = e.deltaY;
        
        if (delta > 0) {
          // Scrolling down
          if (activeSection < 3) {
            setActiveSection(prev => prev + 1);
          } else {
            // Completed all sections, allow normal scroll
            setIsScrollHijacked(false);
            document.body.style.overflow = 'auto';
            setActiveSection(0);
            // Programmatically scroll to next section
            window.scrollBy(0, window.innerHeight);
          }
        } else {
          // Scrolling up
          if (activeSection > 0) {
            setActiveSection(prev => prev - 1);
          } else {
            // At first section, allow normal scroll up
            setIsScrollHijacked(false);
            document.body.style.overflow = 'auto';
            setActiveSection(0);
            // Programmatically scroll to previous section
            window.scrollBy(0, -window.innerHeight);
          }
        }
      }, 50);
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (!isScrollHijacked) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!isScrollHijacked) return;
      e.preventDefault();
      
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      
      if (Math.abs(deltaY) > 50) { // Threshold for touch
        if (deltaY > 0) {
          // Swiping up (scrolling down)
          if (activeSection < 3) {
            setActiveSection(prev => prev + 1);
          } else {
            setIsScrollHijacked(false);
            document.body.style.overflow = 'auto';
            setActiveSection(0);
          }
        } else {
          // Swiping down (scrolling up)
          if (activeSection > 0) {
            setActiveSection(prev => prev - 1);
          } else {
            setIsScrollHijacked(false);
            document.body.style.overflow = 'auto';
            setActiveSection(0);
          }
        }
        touchStartY = touchY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: false });
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isScrollHijacked, activeSection]);

  const handleSectionChange = (index) => {
    setActiveSection(index);
  };

  if (isMobile) {
    // Mobile version - only image slider
    return (
      <div ref={componentRef} className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
        {/* Mobile Image Slider */}
        <div className="relative w-full h-96 mx-4">
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
            {/* Images */}
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeSection === index 
                    ? 'opacity-100 transform translate-x-0' 
                    : activeSection > index
                    ? 'opacity-0 transform -translate-x-full'
                    : 'opacity-0 transform translate-x-full'
                }`}
              >
                <img 
                  src={index % 2 === 0 ? "/images/SLIDER-2.jpg" : "/images/SLIDER-1.jpg"}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => handleSectionChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === index
                    ? 'bg-white scale-125'
                    : 'bg-gray-500 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Background */}
        <div 
          className={`fixed inset-0 pointer-events-none transition-all duration-1000 opacity-10 -z-10 ${
            activeSection === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-600' :
            activeSection === 1 ? 'bg-gradient-to-br from-green-500 to-teal-600' :
            activeSection === 2 ? 'bg-gradient-to-br from-red-500 to-pink-600' :
            'bg-gradient-to-br from-purple-500 to-indigo-600'
          }`}
        />
      </div>
    );
  }

  // Desktop version - full layout
  return (
    <div ref={componentRef} className="h-screen bg-black text-white overflow-hidden flex relative">
      {/* Scroll Hijack Indicator */}
      {isScrollHijacked && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 text-sm text-gray-400 animate-pulse">
          Scroll to navigate sections
        </div>
      )}

      {/* Side Progress Slider */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-6 relative">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              onClick={() => handleSectionChange(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
              }`}
            />
          ))}
          
          {/* Progress Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-800 h-32">
            <div 
              className="w-full bg-gradient-to-b from-blue-400 to-purple-400 transition-all duration-500 ease-out"
              style={{ height: `${(activeSection / 3) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Left Text Section - 50% */}
      <div className="w-1/2 flex flex-col justify-center px-16 space-y-12">
        <div 
          onClick={() => handleSectionChange(0)}
          className="cursor-pointer group"
        >
          <h1 
            className={`text-7xl font-bold transition-all duration-500 hover:scale-105 ${
              activeSection === 0 
                ? 'opacity-100 text-white' 
                : 'opacity-40 text-gray-500 hover:opacity-70'
            }`}
          >
            Text Martin.
          </h1>
        </div>

        <div 
          onClick={() => handleSectionChange(1)}
          className="cursor-pointer group"
        >
          <h1 
            className={`text-7xl font-bold transition-all duration-500 hover:scale-105 ${
              activeSection === 1 
                ? 'opacity-100 text-white' 
                : 'opacity-40 text-gray-500 hover:opacity-70'
            }`}
          >
            Call Martin.
          </h1>
        </div>

        <div 
          onClick={() => handleSectionChange(2)}
          className="cursor-pointer group"
        >
          <h1 
            className={`text-7xl font-bold transition-all duration-500 hover:scale-105 ${
              activeSection === 2 
                ? 'opacity-100 text-white' 
                : 'opacity-40 text-gray-500 hover:opacity-70'
            }`}
          >
            Email Martin.
          </h1>
        </div>

        <div 
          onClick={() => handleSectionChange(3)}
          className="cursor-pointer group"
        >
          <h1 
            className={`text-7xl font-bold transition-all duration-500 hover:scale-105 ${
              activeSection === 3 
                ? 'opacity-100 text-white' 
                : 'opacity-40 text-gray-500 hover:opacity-70'
            }`}
          >
            Slack Martin.
          </h1>
        </div>
        
        {/* Try it now button */}
        <button 
          className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 w-fit mt-12"
        >
          Try it now!
        </button>
      </div>

      {/* Right Image Section - 50% */}
      <div className="w-1/2 flex items-center justify-center px-8">
        <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-2xl">
          {/* Text Message Image */}
          {activeSection === 0 && (
            <img 
              src="/images/SLIDER-2.jpg" 
              alt="Text Messages"
              className="w-full h-full object-cover animate-fadeIn"
            />
          )}
          
          {/* Call Image */}
          {activeSection === 1 && (
            <img 
              src="/images/SLIDER-1.jpg" 
              alt="Voice Calls"
              className="w-full h-full object-cover animate-fadeIn"
            />
          )}
          
          {/* Email Image */}
          {activeSection === 2 && (
            <img 
              src="/images/SLIDER-2.jpg" 
              alt="Email"
              className="w-full h-full object-cover animate-fadeIn"
            />
          )}
          
          {/* Slack Image */}
          {activeSection === 3 && (
            <img 
              src="/images/SLIDER-1.jpg" 
              alt="Slack"
              className="w-full h-full object-cover animate-fadeIn"
            />
          )}
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div 
        className={`fixed inset-0 pointer-events-none transition-all duration-1000 opacity-5 -z-10 ${
          activeSection === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-600' :
          activeSection === 1 ? 'bg-gradient-to-br from-green-500 to-teal-600' :
          activeSection === 2 ? 'bg-gradient-to-br from-red-500 to-pink-600' :
          'bg-gradient-to-br from-purple-500 to-indigo-600'
        }`}
      />
    </div>
  );
};

export default ScrollViewFeature;