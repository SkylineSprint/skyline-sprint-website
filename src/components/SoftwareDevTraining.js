'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SoftwareTraining = ({ 
  subtitle = "Sky Sprint",
  title = "Software Development Training",
  courses = [],
  images = [
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      alt: "Web Development Training",
      width: 600,
      height: 400
    },
    {
      src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=400&fit=crop", 
      alt: "Mobile App Development",
      width: 600,
      height: 400
    },
    {
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      alt: "Database Management",
      width: 600,
      height: 400
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      alt: "Cloud Computing",
      width: 600,
      height: 400
    }
  ],
  backgroundColor = '#080808',
  cardGradient = 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
  shadowColor = '#B11E9B26',
  borderColor = '#B11E9B'
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  
  const defaultCourses = [
    {
      id: 1,
      title: "Frontend Development Mastery",
      items: [
        "HTML5, CSS3, and responsive design principles",
        "JavaScript ES6+ and modern frameworks (React, Vue)",
        "UI/UX design implementation and best practices",
        "Version control with Git and collaborative workflows"
      ]
    },
    {
      id: 2,
      title: "Backend Development Excellence", 
      items: [
        "Server-side programming with Node.js and Python",
        "Database design and management (SQL/NoSQL)",
        "RESTful APIs and GraphQL development",
        "Authentication, security, and deployment strategies"
      ]
    },
    {
      id: 3,
      title: "Mobile App Development",
      items: [
        "Native iOS development with Swift",
        "Android development with Kotlin/Java",
        "Cross-platform solutions with React Native/Flutter",
        "App store optimization and deployment"
      ]
    },
    {
      id: 4,
      title: "DevOps & Cloud Computing",
      items: [
        "Container orchesta  tion with Docker and Kubernetes",
        "CI/CD pipelines and automated testing",
        "AWS/Azure cloud services and serverless architecture",
        "Infrastructure as Code and monitoring solutions"
      ]
    }
  ];

  const coursesToRender = courses.length > 0 ? courses : defaultCourses;

  // Enhanced scroll tracking with better container detection
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Transform scroll progress to active index with better bounds
  const transformedIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.min(coursesToRender.length - 1, images.length - 1)]
  );

  // Enhanced scroll detection with intersection observer fallback
  useEffect(() => {
    const unsubscribe = transformedIndex.onChange((latest) => {
      const newIndex = Math.round(Math.max(0, Math.min(latest, images.length - 1)));
      if (newIndex !== activeImageIndex) {
        setActiveImageIndex(newIndex);
      }
    });

    // Fallback intersection observer for better reliability
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = cardRefs.current.findIndex(ref => ref === entry.target);
            if (cardIndex !== -1 && cardIndex < images.length) {
              setActiveImageIndex(cardIndex);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: 0.5
      }
    );

    // Observe all cards
    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      unsubscribe();
      observer.disconnect();
    };
  }, [transformedIndex, activeImageIndex, images.length]);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      boxShadow: `0 -8px 30px ${shadowColor}`,
      transition: { duration: 0.3 }
    }
  };

  // Image transition variants
  const imageVariants = {
    enter: { opacity: 0, scale: 1.1, rotateY: 10 },
    center: { opacity: 1, scale: 1, rotateY: 0 },
    exit: { opacity: 0, scale: 0.9, rotateY: -10 }
  };

  return (
    <div className="min-h-[200vh] p-4 md:p-8" style={{ backgroundColor }} ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 text-sm mb-2">{subtitle}</p>
          <h1 className="text-white text-2xl md:text-3xl font-bold">{title}</h1>
        </motion.div>

        {/* Main Content - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Course Cards */}
          <div className="space-y-6">
            {coursesToRender.map((course, index) => (
              <motion.div
                key={course.id}
                ref={(el) => cardRefs.current[index] = el}
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={cardVariants}
                className="relative rounded-lg border border-gray-800 overflow-hidden min-h-[300px]"
                style={{
                  background: cardGradient,
                  boxShadow: `0 -4px 20px ${shadowColor}`
                }}
              >
                {/* Enhanced active indicator with smooth animation */}
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-current to-transparent"
                  style={{ color: borderColor }}
                  animate={{ 
                    opacity: activeImageIndex === index ? 1 : 0,
                    scaleY: activeImageIndex === index ? 1 : 0.3,
                    x: activeImageIndex === index ? 0 : -4
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Glow effect for active card */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r opacity-20"
                  style={{
                    background: `linear-gradient(45deg, ${borderColor}20, transparent, ${borderColor}20)`
                  }}
                  animate={{
                    opacity: activeImageIndex === index ? 0.2 : 0,
                    scale: activeImageIndex === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Course Header */}
                <div className="flex items-center justify-between p-4 md:p-6 border-b border-gray-800 relative z-10">
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm border"
                      style={{ 
                        borderColor: activeImageIndex === index ? borderColor : 'gray',
                        backgroundColor: activeImageIndex === index ? borderColor : 'transparent',
                        color: activeImageIndex === index ? 'white' : 'gray'
                      }}
                      animate={{
                        scale: activeImageIndex === index ? 1.1 : 1,
                        rotate: activeImageIndex === index ? 360 : 0,
                        boxShadow: activeImageIndex === index ? `0 0 20px ${borderColor}50` : '0 0 0px transparent'
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {course.id}
                    </motion.div>
                    <motion.h2 
                      className="text-white text-lg font-semibold"
                      animate={{
                        x: activeImageIndex === index ? 5 : 0,
                        color: activeImageIndex === index ? '#ffffff' : '#d1d5db'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {course.title}
                    </motion.h2>
                  </div>
                  
                  {/* Enhanced visual sync indicator */}
                  <motion.div
                    className="text-xs px-3 py-1 rounded-full border backdrop-blur-sm font-medium"
                    style={{
                      borderColor: activeImageIndex === index ? borderColor : 'transparent',
                      backgroundColor: activeImageIndex === index ? `${borderColor}20` : 'transparent',
                      color: activeImageIndex === index ? borderColor : 'gray'
                    }}
                    animate={{
                      opacity: activeImageIndex === index ? 1 : 0.3,
                      scale: activeImageIndex === index ? 1 : 0.9,
                      y: activeImageIndex === index ? 0 : 2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeImageIndex === index ? 'Active' : 'Inactive'}
                  </motion.div>
                </div>

                {/* Course Content with enhanced animations */}
                <div className="p-4 md:p-6 relative z-10">
                  <ul className="space-y-3">
                    {course.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0.7, x: -10 }}
                        animate={{ 
                          opacity: activeImageIndex === index ? 1 : 0.7,
                          x: activeImageIndex === index ? 0 : -10
                        }}
                        transition={{ 
                          duration: 0.3,
                          delay: activeImageIndex === index ? itemIndex * 0.05 : 0
                        }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full border mt-2 flex-shrink-0"
                          style={{ 
                            borderColor: activeImageIndex === index ? borderColor : '#6B7280',
                            backgroundColor: activeImageIndex === index ? borderColor : 'transparent'
                          }}
                          animate={{ 
                            scale: activeImageIndex === index ? 1.2 : 1,
                            boxShadow: activeImageIndex === index ? `0 0 10px ${borderColor}80` : '0 0 0px transparent'
                          }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        />
                        <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Enhanced Fixed Position Image Display */}
          <div className="lg:block hidden">
            <div className="lg:sticky lg:top-8 lg:h-screen lg:flex lg:items-center">
              <motion.div 
                className="relative overflow-hidden rounded-lg w-full max-w-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Enhanced visual feedback for image changes */}
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none z-10"
                  style={{
                    boxShadow: `0 0 30px ${borderColor}40`,
                  }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.005, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Enhanced Image Stack with better transitions */}
                <div className="relative w-full h-96" style={{ perspective: "1000px" }}>
                  {images.map((img, index) => (
                    <motion.div
                      key={`image-${index}-${activeImageIndex}`}
                      className="absolute inset-0"
                      variants={imageVariants}
                      animate={activeImageIndex === index ? "center" : "exit"}
                      transition={{ 
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                      style={{
                        zIndex: activeImageIndex === index ? 2 : 1,
                      }}
                    >
                      <img 
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover rounded-lg"
                        width={img.width}
                        height={img.height}
                        style={{ 
                          filter: activeImageIndex === index ? 'brightness(1) saturate(1.1)' : 'brightness(0.7) saturate(0.8)' 
                        }}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Enhanced context overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg pointer-events-none z-20"
                    animate={{ opacity: 0.8 }}
                  />
                </div>
                
                {/* Enhanced sync indicators with better animations */}
                <div className="absolute top-4 right-4 flex space-x-2 z-30">
                  {images.map((_, index) => (
                    <motion.div
                      key={`indicator-${index}-${activeImageIndex}`}
                      className="w-3 h-3 rounded-full border flex items-center justify-center"
                      style={{
                        borderColor: borderColor,
                        backgroundColor: activeImageIndex === index ? borderColor : 'transparent'
                      }}
                      animate={{
                        scale: activeImageIndex === index ? 1.4 : 1,
                        opacity: activeImageIndex === index ? 1 : 0.5,
                        rotate: activeImageIndex === index ? 360 : 0,
                        boxShadow: activeImageIndex === index ? `0 0 15px ${borderColor}80` : '0 0 0px transparent'
                      }}
                      transition={{ 
                        duration: 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {activeImageIndex === index && (
                        <motion.div
                          className="w-1 h-1 rounded-full bg-white"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced current context label */}
                <motion.div 
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm z-30"
                  style={{
                    backgroundColor: `${borderColor}40`,
                    borderColor: borderColor,
                    color: 'white'
                  }}
                  key={`label-${activeImageIndex}`}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.4,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {coursesToRender[activeImageIndex]?.title || `Course ${activeImageIndex + 1}`}
                </motion.div>

                {/* Enhanced floating change indicator */}
                <motion.div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm z-30"
                  style={{
                    backgroundColor: `${borderColor}50`,
                    borderColor: borderColor,
                    color: 'white'
                  }}
                  key={`step-${activeImageIndex}`}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Step {activeImageIndex + 1} of {images.length}
                </motion.div>

                {/* Floating elements similar to ScrollSyncLayout */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full z-20"
                  style={{ backgroundColor: borderColor }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full z-20"
                  style={{ backgroundColor: `${borderColor}80` }}
                  animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5],
                    rotate: [360, 180, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
              </motion.div>
            </div>
          </div>

          {/* Enhanced Mobile Image Display */}
          <div className="lg:hidden mt-8">
            <motion.div 
              className="relative overflow-hidden rounded-lg"
              key={`mobile-image-${activeImageIndex}`}
              variants={imageVariants}
              animate="center"
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-64 w-full">
                <img 
                  src={images[activeImageIndex].src}
                  alt={images[activeImageIndex].alt}
                  className="w-full h-full object-cover rounded-lg"
                  width={images[activeImageIndex].width}
                  height={images[activeImageIndex].height}
                />
                
                {/* Mobile context label */}
                <motion.div 
                  className="absolute bottom-4 left-4 px-4 py-2 rounded-full text-sm font-semibold border backdrop-blur-sm"
                  style={{
                    backgroundColor: `${borderColor}40`,
                    borderColor: borderColor,
                    color: 'white'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {coursesToRender[activeImageIndex]?.title || `Course ${activeImageIndex + 1}`}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Progress Indicator (similar to ScrollSyncLayout) */}
        <motion.div
          className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex flex-col space-y-3">
            {coursesToRender.slice(0, images.length).map((_, index) => (
              <motion.div
                key={index}
                className="w-1 h-8 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor: activeImageIndex === index ? borderColor : 'rgba(255,255,255,0.3)'
                }}
                animate={{
                  scale: activeImageIndex === index ? 1.2 : 1,
                  opacity: activeImageIndex === index ? 1 : 0.5
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SoftwareTraining;