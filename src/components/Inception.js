import React from 'react';

const PioneeringExcellenceSection = ({
  heading = "Pioneering Digital Excellence\nSince Our Inception",
  paragraph = `At Skyline Sprint, we believe in the transformative power of technology 
and education. Founded with a vision to bridge the gap between 
innovative digital solutions and practical business applications, we have 
grown into a comprehensive technology partner serving businesses of all 
sizes. Our journey began with a simple mission: to deliver exceptional 
software development services that truly understand and solve real 
business challenges. Today, we have expanded our expertise to 
encompass digital marketing mastery and professional education, 
creating a unique ecosystem where technology, marketing, and 
knowledge transfer converge.`,
  buttonText = "Get Started Today",
  ratingText = "200+ Agencies Rated"
}) => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
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
    
      {/* Main content container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Heading */}
            <div className="space-y-8">
                <button 
            className="relative px-6 py-2 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
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
              <h1 className="text-3xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight whitespace-pre-line">
                {heading}
              </h1>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <p className="text-gray-400 text-lg leading-relaxed">
                {paragraph}
              </p>
              
              {/* Button and rating */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button 
                  className="px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#B11E9B' }}
                >
                  {buttonText}
                </button>
                
                {ratingText && (
                  <div className="flex items-center gap-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm">{ratingText}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glossy bottom curved stroke with shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg 
          className="absolute bottom-0 w-full h-16" 
          viewBox="0 0 1200 64" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bottomBorderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#B11E9B', stopOpacity: 0.05 }} />
              <stop offset="50%" style={{ stopColor: '#B11E9B', stopOpacity: 0.15 }} />
              <stop offset="100%" style={{ stopColor: '#B11E9B', stopOpacity: 0.05 }} />
            </linearGradient>
            
            <linearGradient id="shadowGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#B11E9B', stopOpacity: 0.15 }} />
              <stop offset="30%" style={{ stopColor: '#B11E9B', stopOpacity: 0.08 }} />
              <stop offset="100%" style={{ stopColor: '#B11E9B', stopOpacity: 0 }} />
            </linearGradient>
            
            <filter id="bottomGlow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Dispersed shadow */}
          <path 
            d="M0,64 Q0,20 100,20 L1100,20 Q1200,20 1200,64 L1200,64 L0,64 Z"
            fill="url(#shadowGradient)"
            filter="url(#bottomGlow)"
            transform="translate(0, 10)"
          />
          
          {/* Main bright line */}
          <path 
            d="M0,64 Q0,60 100,60 L1100,60 Q1200,60 1200,64"
            fill="none"
            stroke="url(#bottomBorderGradient)"
            strokeWidth="2"
            transform="translate(0, 10)"
            style={{ 
              filter: 'drop-shadow(0 10px 5px rgba(177, 30, 155, 0.15))',
              strokeDasharray: 'none'
            }}
          />
        </svg>
      </div>

      {/* Mouse icon */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20">
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
    </div>
  );
};

export default PioneeringExcellenceSection;
