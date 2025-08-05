'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSlider = ({
  subtitle = "Sky Sprint",
  title = "Software Development Training", 
  courses = [],
  images = [
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      alt: "Web Development Training"
    },
    {
      src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&h=600&fit=crop", 
      alt: "Mobile App Development"
    },
    { 
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      alt: "Database Management"
    },
    {
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      alt: "Cloud Computing"
    }
  ],
  backgroundColor = '#080808',
  cardGradient = 'linear-gradient(180deg, #1E0D1C 0%, #0C0912 100%)',
  shadowColor = '#B11E9B26',
  borderColor = '#B11E9B'
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Default courses data from SoftwareTraining
  const defaultCourses = [
    {
      id: 1,
      title: "Frontend Development Mastery",
      description: "Master modern web development with HTML5, CSS3, JavaScript ES6+, and popular frameworks like React and Vue.",
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
      description: "Build robust server-side applications with Node.js, Python, databases, and API development.",
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
      description: "Create native and cross-platform mobile applications for iOS and Android platforms.",
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
      description: "Learn containerization, CI/CD pipelines, and cloud infrastructure management.",
      items: [
        "Container orchestration with Docker and Kubernetes",
        "CI/CD pipelines and automated testing",
        "AWS/Azure cloud services and serverless architecture",
        "Infrastructure as Code and monitoring solutions"
      ]
    },

       
  ];

  const coursesToRender = courses.length > 0 ? courses : defaultCourses;

  // Transform scroll progress to active index
  const transformedIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 1, 2, 3, Math.min(3, coursesToRender.length - 1)]
  );

  useEffect(() => {
    const unsubscribe = transformedIndex.onChange((latest) => {
      const newIndex = Math.round(Math.max(0, Math.min(latest, coursesToRender.length - 1)));
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
    return () => unsubscribe();
  }, [transformedIndex, activeIndex, coursesToRender.length]);

  // Calculate card positions for inline scrolling
  const getCardAnimationProps = (index) => {
    const isActive = index === activeIndex;
    const isAbove = index < activeIndex;
    const isBelow = index > activeIndex;

    if (isActive) {
      return {
        y: 0,
        opacity: 1,
        scale: 1.02,
        zIndex: 10,
        filter: 'blur(0px)'
      };
    } else if (isAbove) {
      return {
        y: 0, // Keep all cards in natural flow
        opacity: 0.4 - (activeIndex - index) * 0.1,
        scale: 0.95,
        zIndex: 5 - (activeIndex - index),
        filter: 'blur(1px)'
      };
    } else if (isBelow) {
      return {
        y: 0, // Keep all cards in natural flow
        opacity: 0.6,
        scale: 0.97,
        zIndex: 5 - (index - activeIndex),
        filter: 'blur(0.5px)'
      };
    }
  };

  const imageVariants = {
    enter: { opacity: 0, scale: 1.1, rotateY: 10 },
    center: { opacity: 1, scale: 1, rotateY: 0 },
    exit: { opacity: 0, scale: 0.9, rotateY: -10 }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor }}>
      <div ref={containerRef} className="relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16 px-4"
        >
          <p className="text-gray-400 text-sm mb-2">{subtitle}</p>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Scroll through our courses and watch the synchronized animations
          </p>
        </motion.div>

        <div className="flex min-h-screen">
          {/* Left Side - Scrolling Cards */}
          <div className="w-full md:w-1/2 p-4 md:p-8 relative overflow-visible">
            {/* Cards container positioned to align with image center */}
            <div className="space-y-4"> {/* Removed flex items-center min-h-screen wrapper */}
                {coursesToRender.map((course, index) => {
                  const animationProps = getCardAnimationProps(index);
                  const isActive = index === activeIndex;
                  
                  return (
                    <motion.div
                      key={course.id}
                      className="relative p-6 md:p-8 rounded-2xl border"
                      animate={animationProps}
                      transition={{ 
                        duration: 0.6,
                        ease: [0.23, 1, 0.32, 1],
                        type: "spring",
                        stiffness: 120,
                        damping: 25
                      }}
                      style={{
                        background: cardGradient,
                        borderColor: isActive ? borderColor : 'rgba(255,255,255,0.1)',
                        boxShadow: isActive ? `0 20px 60px ${shadowColor}, 0 0 40px ${borderColor}40` : `0 8px 30px ${shadowColor}`
                      }}
                    >
                      {/* Enhanced active indicator */}
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-current to-transparent"
                        style={{ color: borderColor }}
                        animate={{ 
                          opacity: isActive ? 1 : 0,
                          scaleY: isActive ? 1 : 0.3,
                          x: isActive ? 0 : -4
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />

                      {/* Glow effect for active card */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-20"
                        style={{
                          background: `linear-gradient(45deg, ${borderColor}20, transparent, ${borderColor}20)`
                        }}
                        animate={{
                          opacity: isActive ? 0.3 : 0,
                          scale: isActive ? 1 : 0.95
                        }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      <div className="relative z-10">
                        {/* Course Header */}
                        <motion.div
                          className="flex items-center mb-4"
                          animate={{
                            x: isActive ? 10 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <motion.div 
                            className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm border mr-4"
                            style={{ 
                              borderColor: isActive ? borderColor : 'gray',
                              backgroundColor: isActive ? borderColor : 'transparent',
                              color: isActive ? 'white' : 'gray'
                            }}
                            animate={{
                              scale: isActive ? 1.2 : 1,
                              rotate: isActive ? 360 : 0,
                              boxShadow: isActive ? `0 0 20px ${borderColor}50` : '0 0 0px transparent'
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          >
                            {course.id}
                          </motion.div>
                          
                          <span className="text-sm font-medium" style={{ color: borderColor }}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </motion.div>
                        
                        <motion.h3 
                          className="text-2xl font-bold text-white mb-4"
                          animate={{
                            scale: isActive ? 1.05 : 1
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {course.title}
                        </motion.h3>
                        
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {course.description}
                        </p>
   
                        {/* Course Items */}
                        <ul className="space-y-3">
                          {course.items.map((item, itemIndex) => (
                            <motion.li 
                              key={itemIndex} 
                              className="flex items-start space-x-3"
                              animate={{ 
                                opacity: isActive ? 1 : 0.7,
                                x: isActive ? 0 : -10
                              }}
                              transition={{ 
                                duration: 0.3,
                                delay: isActive ? itemIndex * 0.05 : 0
                              }}
                            >
                              <motion.div 
                                className="w-2 h-2 rounded-full border mt-2 flex-shrink-0"
                                style={{ 
                                  borderColor: isActive ? borderColor : '#6B7280',
                                  backgroundColor: isActive ? borderColor : 'transparent'
                                }}
                                animate={{ 
                                  scale: isActive ? 1.3 : 1,
                                  boxShadow: isActive ? `0 0 10px ${borderColor}80` : '0 0 0px transparent'
                                }}
                                transition={{ duration: 0.2, delay: itemIndex * 0.03 }}
                              />
                              <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        
                        <motion.div
                          className="mt-6 flex items-center font-medium"
                          style={{ color: borderColor }}
                          animate={{
                            opacity: isActive ? 1 : 0.7
                          }}
                        >
                          <span>Learn More</span>
                          <motion.span
                            className="ml-2"
                            animate={{
                              x: isActive ? 8 : 0
                            }}
                          >
                            →
                          </motion.span>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          {/* Right Side - Inline Image Slider */}
          <div className="hidden md:block w-1/2 p-8">
            {/* Image container that scrolls with cards */}
            <div className="flex items-center min-h-screen">
              <div className="relative w-full max-w-lg h-96 rounded-2xl overflow-hidden">
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 blur-3xl"
                style={{ backgroundColor: `${borderColor}30` }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Image Container */}
              <motion.div
                key={activeIndex}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                style={{ perspective: "1000px" }}
              >
                <img
                  src={images[activeIndex]?.src}
                  alt={images[activeIndex]?.alt}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Image Info */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-white text-xl font-bold mb-2">
                    {coursesToRender[activeIndex]?.title}
                  </h4>
                  <div className="flex items-center text-white/80">
                    <span className="text-sm">
                      {activeIndex + 1} of {coursesToRender.length}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full"
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
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full"
                style={{ backgroundColor: `${borderColor}80` }}
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8
                }}
              />
            </div>
          </div>
        </div>

        {/* Mobile Image Display */}
       
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;