import React from 'react';

const CTASection = ({
  badge = "Become a Part of Us",
  title = "Ready to Elevate Your Brand",
  subtitle = "with Next-Gen Innovation?",
  description = "Ready to take the next step? Join us now and start transforming your vision into reality with expert support.",
  buttonText = "Book an Appointment",
  backgroundColor = '#080808'
}) => {
  return (
    <div 
      className="p-4 sm:p-6 lg:p-8"
      style={{ backgroundColor }}
    >
      <div className="max-w-4xl mx-auto px-4">
        {/* Card Container */}
        <div 
          className="relative rounded-2xl p-6 sm:p-8 lg:p-12 text-center overflow-hidden border border-gray-800"
          style={{
            background: 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
            boxShadow: '0 -4px 20px #B11E9B26'
          }}
        >
          {/* Dotted Background Pattern */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, #666 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
              backgroundPosition: '0 0'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 flex-wrap justify-center">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(180deg, #B11E9B 0%, #7D146D 100%)'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <span 
                className="text-white text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-full border whitespace-nowrap"
                style={{ 
                  backgroundColor: 'transparent',
                  borderColor: '#B11E9B'
                }}
              >
                {badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2 px-2">
              {title}
            </h1>
            <h2 className="text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 sm:mb-8 px-2">
              {subtitle}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
              {description}
            </p>

            {/* CTA Button */}
            <button 
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-0 w-full sm:w-auto justify-center"
              style={{
                background: 'linear-gradient(180deg, #B11E9B 0%, #7D146D 100%)',
                boxShadow: '0 8px 32px rgba(177, 30, 155, 0.3)'
              }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;