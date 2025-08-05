'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Monitor, RotateCcw, Building2, Database, Eye, Palette, TrendingUp } from 'lucide-react';
import Image from 'next/image';
const LearningFormats = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Stack cards data - replace with your actual image sources
  const stackCards = [
    { id: 1, src: '/images/SLIDER-1.jpg', alt: 'Learning Image 1' },
    { id: 2, src: '/images/SLIDER-2.jpg', alt: 'Learning Image 2' },
    { id: 3, src: '/images/SLIDER-3.png', alt: 'Learning Image 3' },
    { id: 4, src: '/images/SLIDER-1.jpg', alt: 'Learning Image 4' },
    { id: 5, src: '/images/SLIDER-2.jpg', alt: 'Learning Image 5' },
    { id: 6, src: '/images/SLIDER-3.png', alt: 'Learning Image 6' }
  ];

  const learningFormats = [
    {
      title: "In-Person Classes",
      description: "Interactive classroom sessions with direct instructor access",
      icon: Users
    },
    {
      title: "Online Courses",
      description: "Flexible learning with recorded lectures and live Q&A sessions",
      icon: Monitor
    },
    {
      title: "Hybrid Programs",
      description: "Combination of online theory and in-person practical sessions",
      icon: RotateCcw
    },
    {
      title: "Corporate Training",
      description: "Customized programs for business teams and organizations",
      icon: Building2
    }
  ];

  const features = [
    {
      title: "Real-Time Data",
      description: "Industry-recognized certificates upon completion",
      icon: Database
    },
    {
      title: "Vision Capabilities",
      description: "Practical project portfolios",
      icon: Eye
    },
    {
      title: "Optimized UX/UI",
      description: "Job placement assistance",
      icon: Palette
    },
    {
      title: "Predictive Analytics",
      description: "Ongoing alumni support and networking",
      icon: TrendingUp
    }
  ];

  // Auto-rotate cards with proper animation
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentCard((prev) => (prev + 1) % stackCards.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [stackCards.length, isHovered]);

  return (
    // <div className="min-h-screen bg-[#080808] text-white p-4 md:p-8">
       <div className="relative  overflow-hidden min-h-screen bg-[#080808] text-white p-4 md:p-8">
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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-16">Learning Formats</h1>
          
          {/* Cards Section */}
          <div className="relative flex items-center justify-center mb-24 ">
           
            {/* Stack of Cards - With Image Animation */}
            <div 
              className="relative w-64 h-48 md:w-[500px] md:h-64"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {stackCards.map((card, index) => {
                const totalCards = stackCards.length;
                const middleIndex = Math.floor(totalCards / 2);
                const relativeIndex = index - middleIndex;
                const rotationAngle = relativeIndex * 6; // Reduced rotation for better stacking
                const xOffset = relativeIndex * 12; // Reduced offset
                const zIndex = totalCards - Math.abs(relativeIndex);
                
                // Animation logic for cycling through images
                const isActiveCard = index === currentCard;
                const nextCard = (currentCard + 1) % totalCards;
                const isNextCard = index === nextCard;
                
                return (
                  <motion.div
                    key={card.id}
                    className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden"
                    style={{
                      zIndex: isActiveCard ? totalCards + 1 : zIndex,
                    }}
                    animate={{
                      rotateZ: isActiveCard ? 0 : rotationAngle,
                      x: isActiveCard ? 0 : xOffset,
                      y: isActiveCard ? 0 : Math.abs(relativeIndex) * 3,
                      scale: isActiveCard ? 1.05 : 1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                  >
                    <Image 
                      src={card.src} 
                      alt={card.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                      width={500}
                      height={500}
                    />
                    {/* Fallback placeholder */}
                    <div 
                      className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center absolute inset-0"
                      style={{ display: 'none' }}
                    >
                      <span className="text-gray-400 text-sm">Image {card.id}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Learning Formats Grid - Clean Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {learningFormats.map((format, index) => {
            const IconComponent = format.icon;
            return (
              
              <motion.div
                key={format.title}
               className="bg-[#080808] rounded-lg p-6 text-center  border-t-4 border-t-[#B11E9B]  border-l border-r border-b border-white/10"

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1 }}
              >
                <div className="w-16 h-16 bg-[#B11E9B] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{format.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {format.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1.5 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                </div>
                <p className="text-gray-400 text-sm ml-6">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-2 h-2 bg-[#B11E9B] rounded-full opacity-50"></div>
        <div className="absolute bottom-20 left-10 w-3 h-3 bg-[#B11E9B] rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-5 w-1 h-1 bg-white rounded-full opacity-40"></div>
      </div>
    </div>
  );
};

export default LearningFormats;