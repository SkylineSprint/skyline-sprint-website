'use client'
import React,{ useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Image from 'next/image';

const ChooseSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for the slider
  const sliderImages = [
   "/images/SLIDER-1.jpg",
   "/images/SLIDER-2.jpg",
   "/images/SLIDER-3.png",
  ];

  // Key points data
  const keyPoints = [
    {
      title: "Expert Team:",
      description: "Industry professionals with proven track records"
    },
    {
      title: "Full-Stack Solutions:",
      description: "End-to-end services from concept to deployment"
    },
    {
      title: "Results-Driven:",
      description: "Measurable outcomes that drive business growth"
    },
    {
      title: "Continuous Support:",
      description: "Ongoing maintenance and optimization"
    }
  ];

  // Client logos data
  const clientLogos = [
    { name: "Company 1", logo: "/images/company-1.png" },
    { name: "Ipsum", logo: "/images/company-2.png" },
    { name: "Company 3", logo: "/images/company-3.png" },
    { name: "Company 4", logo: "/images/company-2.png" },
    { name: "Company 5", logo: "/images/company-1.png" },
    { name: "Company 6", logo: "/images/company-3.png" },
    { name: "Company 4", logo: "/images/company-2.png" },
    { name: "Company 5", logo: "/images/company-1.png" },
    { name: "Company 6", logo: "/images/company-3.png" }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
      <div 
         className="text-white min-h-screen py-16 px-4" 
          style={{ 
            backgroundImage: "url('/images/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            
            }}
>
      <div className="max-w-7xl mx-auto">

          <button 
            className="relative px-6 py-2 not-even:mb-8 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
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

        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-5xl ">
            Why Choose Skyline Sprint 
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Key Points */}
          <div className="space-y-8">
            <div 
              className="p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/30 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
              style={{ 
                background: 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
                boxShadow: '0 10px 5px -1px rgba(177, 30, 155, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(177, 30, 155, 0.25), 0 10px 10px -5px rgba(177, 30, 155, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 5px -1px rgba(177, 30, 155, 0.15)';
              }}
            >   
              <div className="flex items-center gap-4 mb-8">
                <button
                  className="group relative px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden border border-white/10"
                  style={{ 
                background: 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
                boxShadow: '0 10px 5px -1px rgba(177, 30, 155, 0.15)'
              }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(177, 30, 155, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 5px -1px rgba(177, 30, 155, 0.15)';
                  }}
                >
                  {/* Glossy overlay */}
                   <div
                  className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(43% 50% at 50% 50%, rgba(15, 9, 18, 0.15) 0%, #0C0912 100%)'
                  }}
                ></div>

                  <span className="relative z-10" >Skyline Sprint</span>
                </button>

                <div className="text-lg font-semibold text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                  5-Key Points
                </div>
              </div>

              <div className="space-y-6">
                {keyPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 group hover:transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="mt-1">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ backgroundColor: '#B11E9B' }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
                        {point.title}
                      </span>
                      <span className="text-gray-300 ml-1 transition-colors duration-300 group-hover:text-gray-200">
                        {point.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Image Slider */}
          <div className="relative">
            <div className="relative h-96 lg:h-full rounded-2xl overflow-hidden group">
              {sliderImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'scale-110' 
                        : 'hover:bg-white/70'
                    }`}
                    style={{
                      backgroundColor: index === currentSlide ? '#B11E9B' : 'rgba(255,255,255,0.5)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ChooseSection;