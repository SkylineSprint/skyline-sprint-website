'use client';
import React from 'react';
import Image from 'next/image';

const BrandPhilosophyCard = ({
  title = 'Our Development Approach',
  paragraph = "We believe in the power of authentic connections and data-driven decisions.</br> Our marketing strategies are built on deep audience insights, creative excellence, and continuous optimization to ensure your brand not only reaches but resonates with your ideal customers.",
  image = '/images/SLIDER-1.jpg',
  label = 'Skyline Sprint'
}) => {
  return (
    // <div style={{ backgroundColor: '#080808' }} className="text-white min-h-screen py-16 px-4">
     <div className="relative  text-white py-16 px-4 overflow-hidden text-white min-h-screen py-16 px-4 ">
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold">{title}</h1>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Block */}
          <div>
            <div
              className="p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              style={{
                background: 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
                boxShadow: '0 10px 5px -1px rgba(177, 30, 155, 0.15)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <button
                  className="group relative px-6 py-2 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-white/10"
                  style={{
                    background: 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
                    boxShadow: '0 10px 5px -1px rgba(177, 30, 155, 0.15)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{label}</span>
                </button>
               
              </div>

              <p className="text-gray-300 text-base leading-relaxed transition-colors duration-300 group-hover:text-gray-200">
                {paragraph}
              </p>
            </div>
          </div>

          {/* Right - Static Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-xl">
            <Image
              src={image}
              alt="Development"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPhilosophyCard;
