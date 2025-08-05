'use client'
import React, { useState, useEffect, useRef } from 'react';
import { BadgeCheck } from 'lucide-react';
import { useScroll, useTransform, motion } from 'framer-motion';
import * as THREE from 'three';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cubeRef = useRef(null);
  const animationFrameRef = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const autoRotationRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  // Framer Motion scroll setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Create zoom transform - scales from 1 to 3 as user scrolls
  const cubeScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2.5, 1]);

  const slides = [
    {
      title: "Transform Your Digital \n Vision Into Reality✨",
      description: "Skyline Sprint delivers cutting-edge software development, digital marketing excellence, and professional training to accelerate your business growth.",
      subtitle: "Helping forward-looking companies thrive with custom AI solutions and automated workflows."
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Handle mouse movement for cube rotation
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const multiplier = 0.9; // Adjust sensitivity
    
    // Normalize mouse position from -0.5 to 0.5
    const x = (clientX / innerWidth - 0.5) * multiplier;
    const y = (clientY / innerHeight - 0.5) * multiplier;
    
    mouseRef.current.x = x;
    mouseRef.current.y = -y; // Invert Y for natural movement
  };

  // Handle cube click - manual rotation
  const handleCubeClick = () => {
    if (rotationRef.current) {
      rotationRef.current.x += Math.PI / 2; // 90 degree rotation
      rotationRef.current.y += Math.PI / 2; // 90 degree rotation
    }
  };


  // Mouse move event listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Three.js setup
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });

    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Make canvas larger and positioned
    const updateSize = () => {
      const canvasSize = window.innerWidth < 768 ? 224 : 288; // 56*4 or 72*4 for retina
      
      renderer.setSize(canvasSize, canvasSize);
      camera.aspect = 1; // Square aspect ratio
      camera.updateProjectionMatrix();
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Create texture loader
    const textureLoader = new THREE.TextureLoader();
    
    // Create main cube geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    
    // Create materials with images for each face
    const materials = [
      new THREE.MeshBasicMaterial({ 
        map: textureLoader.load('/images/cube-face.jpg'),
        transparent: true 
      }), // Right
      new THREE.MeshBasicMaterial({ 
        map: textureLoader.load('/images/cube-face.jpg'),
        transparent: true 
      }), // Left
      new THREE.MeshBasicMaterial({ 
        map: textureLoader.load('/images/cube-face.jpg'),
        transparent: true 
      }), // Top
      new THREE.MeshBasicMaterial({ 
        map: textureLoader.load('/images/cube-face.jpg'),
        transparent: true 
      }), // Bottom
      new THREE.MeshBasicMaterial({ 
        map: textureLoader.load('/images/cube-face.jpg'),
        transparent: true 
      }), // Front
      new THREE.MeshBasicMaterial({ 
        map: textureLoader.load('/images/cube-face.jpg'),
        transparent: true 
      }), // Back
    ];

    // Fallback to colors if images don't load
    const fallbackColors = ['#B11E9B', '#7D146D', '#9D4EDD', '#C77DFF', '#E0AAFF', '#B11E9B'];
    materials.forEach((material, index) => {
      material.map.onError = () => {
        material.map = null;
        material.color.setHex(fallbackColors[index]);
      };
    });

    const cube = new THREE.Mesh(geometry, materials);
    cubeRef.current = cube;
    scene.add(cube);

    camera.position.z = 3;

    // Animation loop with smooth mouse tracking
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      if (cubeRef.current && rotationRef.current && autoRotationRef.current) {
        // Update auto-rotation (continuous slow rotation)
        autoRotationRef.current.x += 0.005; // Slow rotation speed on X axis
        autoRotationRef.current.y += 0.01;  // Slightly faster rotation on Y axis

        // Calculate target rotation combining all sources
        targetRotationRef.current.x = autoRotationRef.current.x + rotationRef.current.x + mouseRef.current.y * Math.PI * 0.3;
        targetRotationRef.current.y = autoRotationRef.current.y + rotationRef.current.y + mouseRef.current.x * Math.PI * 0.3;

        // Larger cube size
        cubeRef.current.scale.set(2, 2, 2);
        cubeRef.current.position.set(0, 0, 0);
        
        // Smooth rotation to target angles with damping
        const dampingFactor = 0.08; // Lower = smoother but slower
        cubeRef.current.rotation.x += (targetRotationRef.current.x - cubeRef.current.rotation.x) * dampingFactor;
        cubeRef.current.rotation.y += (targetRotationRef.current.y - cubeRef.current.rotation.y) * dampingFactor;
        
        materials.forEach(material => {
          material.opacity = 1;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      geometry.dispose();
      materials.forEach(material => {
        if (material.map) material.map.dispose();
        material.dispose();
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-[120vh] overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Sticky Content */}
      <div className="sticky top-0 h-screen">
        {/* 3D Canvas - Positioned below buttons with click interaction and zoom effect */}
        <motion.div 
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-100 cursor-pointer top-3/4"
          onClick={handleCubeClick}
          title="Click to add manual rotation! Move your mouse to control the cube."
          style={{ scale: cubeScale }}
        >
          <canvas 
            ref={canvasRef}
            className="w-56 h-56 md:w-72 md:h-72"
          />
        </motion.div>

        {/* Main Content Container */}
        <div className="relative z-40 h-full flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 md:space-y-8 lg:space-y-10">
              
              {/* Top Button */}
              <div className="flex justify-center mb-4 md:mb-6">
                <button 
                  className="relative px-3 py-2 text-white text-lg font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 mb-8 flex items-center gap-3"
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
                  <div style={{ backgroundColor: '#B11E9B', borderRadius: '4px', padding: '4px', display: 'flex', alignItems: 'start', justifyContent: 'start' }}>
                    <BadgeCheck size={16} color="white" />
                  </div>
                  Skyline Tranomation 
                </button>
              </div>

              {/* Main Title */}
              <div className="px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-bold text-white leading-tight max-w-5xl mx-auto">
                  {slides[currentSlide].title.split('\n').map((line, index) => (
                    <div key={index} className="mb-1 md:mb-2">
                      {line}
                    </div>
                  ))}
                </h1>
              </div>  

              {/* Description */}
              <div className="px-4 sm:px-6 md:px-8">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed max-w-3xl mx-auto">
                  {slides[currentSlide].description}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6 justify-center items-center px-4 sm:px-6 md:px-8 pt-4 md:pt-6 mb-16 md:mb-24">
                
                {/* Primary Button */}
                <button 
                  className="
                    w-full sm:w-auto 
                    text-white 
                    text-sm md:text-base lg:text-lg 
                    rounded-lg 
                    transition-all duration-200 transform hover:scale-105
                    min-w-[160px] md:min-w-[180px]
                    px-6 md:px-8 lg:px-10
                    h-[44px] md:h-[60px] lg:h-[50px]
                  "
                  style={{
                    background: 'linear-gradient(180deg, #B11E9B 0%, #7D146D 100%)',
                    boxShadow: `
                      0px 10px 20px -5px rgba(177, 30, 155, 0.3),
                      0px 6px 12px -2px rgba(0, 0, 0, 0.1)
                    `
                  }}
                >
                  Get Started
                </button>

                {/* Secondary Button */}
                <button 
                  className="
                    w-full sm:w-auto 
                    bg-black 
                    border border-gray-600 hover:border-[#1E061B] 
                    text-gray-300 hover:text-purple-400
                    text-sm md:text-base lg:text-lg 
                    rounded-lg 
                    transition-all duration-200 hover:scale-105
                    min-w-[160px] md:min-w-[180px]
                    px-6 md:px-8 lg:px-10
                    h-[44px] md:h-[60px] lg:h-[50px]
                  "
                >
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mouse Icon - Bottom Center */}
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-50">
          <svg 
            width="24" 
            height="34"
            viewBox="0 0 33 47" 
            fill="white" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8 lg:w-8 lg:h-12 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            <path d="M19.8125 0.726562H13.1875C9.78438 0.730398 6.52173 2.08398 4.11536 4.49036C1.70898 6.89673 0.355398 10.1594 0.351562 13.5625V33.4375C0.355398 36.8406 1.70898 40.1033 4.11536 42.5096C6.52173 44.916 9.78438 46.2696 13.1875 46.2734H19.8125C23.2156 46.2696 26.4783 44.916 28.8846 42.5096C31.291 40.1033 32.6446 36.8406 32.6484 33.4375V13.5625C32.6446 10.1594 31.291 6.89673 28.8846 4.49036C26.4783 2.08398 23.2156 0.730398 19.8125 0.726562ZM30.1641 33.4375C30.1608 36.1819 29.0691 38.8129 27.1285 40.7535C25.1879 42.6941 22.5569 43.7858 19.8125 43.7891H13.1875C10.4431 43.7858 7.81205 42.6941 5.87147 40.7535C3.93089 38.8129 2.83922 36.1819 2.83594 33.4375V13.5625C2.83922 10.8181 3.93089 8.18705 5.87147 6.24647C7.81205 4.30589 10.4431 3.21422 13.1875 3.21094H19.8125C22.5569 3.21422 25.1879 4.30589 27.1285 6.24647C29.0691 8.18705 30.1608 10.8181 30.1641 13.5625V33.4375ZM17.7422 10.25V20.1875C17.7422 20.5169 17.6113 20.8329 17.3784 21.0659C17.1454 21.2988 16.8294 21.4297 16.5 21.4297C16.1706 21.4297 15.8546 21.2988 15.6216 21.0659C15.3887 20.8329 15.2578 20.5169 15.2578 20.1875V10.25C15.2578 9.92055 15.3887 9.6046 15.6216 9.37164C15.8546 9.13869 16.1706 9.00781 16.5 9.00781C16.8294 9.00781 17.1454 9.13869 17.3784 9.37164C17.6113 9.6046 17.7422 9.92055 17.7422 10.25Z" />
          </svg>
        </div>

        {/* Horizontal Arrow + Line - Bottom Right */}
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 right-4 md:right-6 lg:right-8 z-50">
          <svg 
            width="45" 
            height="17" 
            viewBox="0 0 68 25" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-2 sm:w-8 sm:h-3 md:w-10 md:h-4 lg:w-12 lg:h-5 xl:w-16 xl:h-6 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer"
          >
            <path d="M12.7833 22.8948C12.8668 22.9726 12.9337 23.0665 12.9802 23.1707C13.0267 23.275 13.0516 23.3875 13.0537 23.5017C13.0557 23.6158 13.0347 23.7292 12.9919 23.835C12.9492 23.9408 12.8855 24.037 12.8048 24.1177C12.7241 24.1984 12.628 24.2621 12.5221 24.3048C12.4163 24.3476 12.3029 24.3685 12.1888 24.3665C12.0747 24.3645 11.9621 24.3395 11.8578 24.2931C11.7536 24.2466 11.6597 24.1796 11.5819 24.0961L0.248586 12.7628C0.0894085 12.6034 0 12.3874 0 12.1621C0 11.9369 0.0894085 11.7208 0.248586 11.5615L11.5819 0.22813C11.743 0.0779864 11.9562 -0.00375288 12.1764 0.000132427C12.3966 0.00401774 12.6067 0.0932244 12.7624 0.248959C12.9182 0.404694 13.0074 0.614797 13.0112 0.835005C13.0151 1.05521 12.9334 1.26833 12.7833 1.42946L2.052 12.1621L12.7833 22.8948Z" fill="white"/>
            <line x1="28.7109" y1="11.5889" x2="67.9998" y2="11.5889" stroke="white"/>
          </svg>
        </div>

        {/* Decorative Elements - Enhanced and Responsive */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
          {/* Large Gradient Orbs */}
          <div 
            className="absolute top-1/4 left-1/6 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full opacity-15 blur-2xl animate-pulse"
            style={{
              background: 'radial-gradient(circle, #B11E9B 0%, transparent 70%)'
            }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/6 w-36 h-36 md:w-52 md:h-52 lg:w-72 lg:h-72 rounded-full opacity-10 blur-2xl animate-pulse delay-1000"
            style={{
              background: 'radial-gradient(circle, #7D146D 0%, transparent 70%)'
            }}
          ></div>
          <div 
            className="absolute top-1/2 right-1/4 w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full opacity-8 blur-xl animate-pulse delay-2000"
            style={{
              background: 'radial-gradient(circle, #9D4EDD 0%, transparent 70%)'
            }}
          ></div>
        </div>

        {/* Small Decorative Dots */}
        <div className="absolute top-1/5 right-1/3 w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-purple-500 rounded-full opacity-60 animate-pulse z-20"></div>
        <div className="absolute top-2/3 left-1/5 w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 bg-purple-400 rounded-full opacity-40 animate-pulse delay-1000 z-20"></div>
        <div className="absolute bottom-1/3 right-1/6 w-0.5 h-0.5 md:w-1 md:h-1 lg:w-1.5 lg:h-1.5 bg-purple-300 rounded-full opacity-50 animate-pulse delay-2000 z-20"></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 md:w-1.5 md:h-1.5 bg-purple-600 rounded-full opacity-30 animate-pulse delay-3000 z-20"></div>
        <div className="absolute bottom-2/5 left-1/3 w-0.5 h-0.5 md:w-1 md:h-1 bg-purple-200 rounded-full opacity-40 animate-pulse delay-4000 z-20"></div>
      </div>
    </div>
  );
};

export default HeroSection;