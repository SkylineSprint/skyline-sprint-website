import React from 'react';

const ContactFormHero = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5, // Controls image opacity
          zIndex: 0
        }}
  ></div>
      <div className="text-center max-w-md w-full">
        {/* Contact Info Button */}
        <div className="mb-8 flex justify-center">
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
            Contact Info
          </button>
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
            Skyline Sprint
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Headquarters
          </h2>
        </div>

        {/* Subtitle */}
        <div className="mb-10">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-sm mx-auto">
            Whether you need guidance, support,
            <br />
            or a fresh start, our team is ready to assist you.
          </p>
        </div>

        {/* Main CTA Button */}
        <div className="flex justify-center">
          <button 
            className="relative px-8 py-3 text-white text-base md:text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
            style={{
              background: 'linear-gradient(180deg, #B11E9B 0%, #7D146D 100%)',
              boxShadow: `
                0px 30px 30px -3.75px rgba(0, 0, 0, 0.06),
                0px 13.65px 13.65px -3.13px rgba(0, 0, 0, 0.13),
                0px 6.87px 6.87px -2.5px rgba(0, 0, 0, 0.16),
                0px 3.62px 3.62px -1.88px rgba(0, 0, 0, 0.17),
                0px 1.81px 1.81px -1.25px rgba(0, 0, 0, 0.18),
                0px 0.71px 0.71px -0.63px rgba(0, 0, 0, 0.18)
              `,
              minWidth: '187px',
              height: '46px'
            }}
          >
            Fill Out The Form
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-20 blur-xl"
            style={{
              background: 'radial-gradient(circle, #B11E9B 0%, transparent 70%)'
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full opacity-15 blur-xl"
            style={{
              background: 'radial-gradient(circle, #7D146D 0%, transparent 70%)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormHero;