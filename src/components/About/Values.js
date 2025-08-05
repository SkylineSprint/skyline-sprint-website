'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const OurValues = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  // Add CSS to hide scrollbar
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      #values-container::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const cards = cardsRef.current;
      const container = containerRef.current;
      
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;
      let minDistance = Infinity;
      let newActiveIndex = activeIndex;
      
      cards.forEach((card, index) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenter - containerCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          newActiveIndex = index;
        }
      });
      
      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const values = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative problem-solving",
      tags: ["AI Design", "Tech Innovation"],
      image: "/images/laptop.png"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality",
      description: "Delivering excellence in every project, no matter the size",
      tags: ["AI Design", "Tech Innovation"],
      image: "/images/SLIDER-3.png"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Transparency",
      description: "Clear communication and honest partnerships",
      tags: ["AI Design", "Tech Innovation"],
      image: "/images/SLIDER-2.jpg"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Growth",
      description: "Fostering continuous learning and improvement",
      tags: ["AI Design", "Tech Innovation"],
      image: "/images/SLIDER-1.jpg"
    }
  ];

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
        <div className="text-center mb-16">
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Values</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Values Cards */}
          <div id="values-container" className="space-y-6 relative" ref={containerRef} style={{ height: '600px', overflowY: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
            {values.map((value, index) => (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`relative p-6 rounded-2xl border border-white/10 transition-all duration-500 ${
                  index === activeIndex ? 'scale-105 opacity-100' : 'scale-95 opacity-50'
                } hover:scale-105 hover:opacity-100`}
                style={{
                  background: 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
                  boxShadow: '0 10px 5px -1px rgba(177, 30, 155, 0.15)',
                  borderRadius: '1rem',
                  transform: `translateY(${index === activeIndex ? '-10px' : '0'})`,
                  overflow: 'hidden',
                  willChange: 'transform'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{value.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {value.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: 'rgba(177, 30, 155, 0.2)', color: '#B11E9B' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="lg:pl-8">
            <div className="relative">
              <div className="rounded-2xl relative h-96" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                {values.map((value, index) => (
                  <Image
                    key={index}
                    src={value.image}
                    alt={value.title}
                    fill
                    style={{ 
                      objectFit: 'contain',
                      willChange: 'transform, opacity'
                    }}
                    priority={index === 0}
                    className={`transition-all duration-500 ${
                      hoveredIndex !== null 
                        ? index === hoveredIndex 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-95'
                        : index === activeIndex 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-95'
                    }`}
                  />
                ))}
                </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-white/20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;