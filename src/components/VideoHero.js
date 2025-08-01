'use client'

import React, { useState, useEffect, useRef } from 'react';

const VideoSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Video auto-reload fix
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  // Calculate parallax effects
  const translateY = Math.min(scrollY * 0.5, 100);
  
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black z-40 transition-all duration-300 ease-out m-0 p-0"
      style={{
        transform: `translateY(-${translateY}px)`,
        margin: 0,
        padding: 0,
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="videos/background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Left-aligned Glass Card with Text */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-2xl z-20">
        <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl px-8 py-10 md:px-12 md:py-14">
          {/* Inner Glow Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 rounded-2xl pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-3xl lg:text-3xl text-white mb-6 leading-tight">
              <span className="block">WE ARE A FULL SERVICE AI</span>
              <span className="block">AUTOMATION AGENCY.</span>
            </h2>

            <div className="flex items-start space-x-4">
              <div className="text-gray-200">
                <p className="text-base md:text-lg leading-relaxed">
                  <span className="font-medium text-white">Meta Advertising Management:</span> Strategic 
                  campaign development and optimization across 
                  Facebook, Instagram, and Meta platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mouse Icon - Bottom Center */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30">
        <svg 
          width="20" 
          height="28" 
          viewBox="0 0 33 47" 
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[33px] md:h-[47px] w-5 h-7"
        >
          <path d="M19.8125 0.726562H13.1875C9.78438 0.730398 6.52173 2.08398 4.11536 4.49036C1.70898 6.89673 0.355398 10.1594 0.351562 13.5625V33.4375C0.355398 36.8406 1.70898 40.1033 4.11536 42.5096C6.52173 44.916 9.78438 46.2696 13.1875 46.2734H19.8125C23.2156 46.2696 26.4783 44.916 28.8846 42.5096C31.291 40.1033 32.6446 36.8406 32.6484 33.4375V13.5625C32.6446 10.1594 31.291 6.89673 28.8846 4.49036C26.4783 2.08398 23.2156 0.730398 19.8125 0.726562ZM30.1641 33.4375C30.1608 36.1819 29.0691 38.8129 27.1285 40.7535C25.1879 42.6941 22.5569 43.7858 19.8125 43.7891H13.1875C10.4431 43.7858 7.81205 42.6941 5.87147 40.7535C3.93089 38.8129 2.83922 36.1819 2.83594 33.4375V13.5625C2.83922 10.8181 3.93089 8.18705 5.87147 6.24647C7.81205 4.30589 10.4431 3.21422 13.1875 3.21094H19.8125C22.5569 3.21422 25.1879 4.30589 27.1285 6.24647C29.0691 8.18705 30.1608 10.8181 30.1641 13.5625V33.4375ZM17.7422 10.25V20.1875C17.7422 20.5169 17.6113 20.8329 17.3784 21.0659C17.1454 21.2988 16.8294 21.4297 16.5 21.4297C16.1706 21.4297 15.8546 21.2988 15.6216 21.0659C15.3887 20.8329 15.2578 20.5169 15.2578 20.1875V10.25C15.2578 9.92055 15.3887 9.6046 15.6216 9.37164C15.8546 9.13869 16.1706 9.00781 16.5 9.00781C16.8294 9.00781 17.1454 9.13869 17.3784 9.37164C17.6113 9.6046 17.7422 9.92055 17.7422 10.25Z" />
        </svg>
      </div>

      {/* Horizontal Arrow + Line - Bottom Right */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-30">
        <svg 
          width="45" 
          height="17" 
          viewBox="0 0 68 25" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[68px] md:h-[25px] w-[45px] h-[17px]"
        >
          <path d="M12.7833 22.8948C12.8668 22.9726 12.9337 23.0665 12.9802 23.1707C13.0267 23.275 13.0516 23.3875 13.0537 23.5017C13.0557 23.6158 13.0347 23.7292 12.9919 23.835C12.9492 23.9408 12.8855 24.037 12.8048 24.1177C12.7241 24.1984 12.628 24.2621 12.5221 24.3048C12.4163 24.3476 12.3029 24.3685 12.1888 24.3665C12.0747 24.3645 11.9621 24.3395 11.8578 24.2931C11.7536 24.2466 11.6597 24.1796 11.5819 24.0961L0.248586 12.7628C0.0894085 12.6034 0 12.3874 0 12.1621C0 11.9369 0.0894085 11.7208 0.248586 11.5615L11.5819 0.22813C11.743 0.0779864 11.9562 -0.00375288 12.1764 0.000132427C12.3966 0.00401774 12.6067 0.0932244 12.7624 0.248959C12.9182 0.404694 13.0074 0.614797 13.0112 0.835005C13.0151 1.05521 12.9334 1.26833 12.7833 1.42946L2.052 12.1621L12.7833 22.8948Z" fill="white"/>
          <line x1="28.7109" y1="11.5889" x2="67.9998" y2="11.5889" stroke="white"/>
        </svg>
      </div>
    </div>
  );
};

export default VideoSection;