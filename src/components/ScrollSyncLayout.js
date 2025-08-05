    'use client'
    import React, { useState, useEffect, useRef } from 'react';
    import { motion, useScroll, useTransform } from 'framer-motion';

    const ScrollSyncLayout = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Sample data for cards and images
    const cardData = [
        {
        id: 1,
        title: "Digital Innovation",
        description: "Transforming businesses through cutting-edge technology solutions and digital experiences.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
        },
        {
        id: 2,
        title: "Creative Design",
        description: "Crafting beautiful and functional designs that captivate users and drive engagement.",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop"
        },
        {
        id: 3,
        title: "Data Analytics",
        description: "Unlocking insights from data to make informed decisions and optimize performance.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
        },
        {
        id: 4,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure that grows with your business needs and demands.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop"
        },
        {
        id: 5,
        title: "AI & Machine Learning",
        description: "Implementing intelligent systems that learn and adapt to enhance user experiences.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
        },
        {
        id: 6,
        title: "Mobile Development",
        description: "Building native and cross-platform mobile applications for iOS and Android.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop"
        }
    ];

    // Transform scroll progress to active index
    const transformedIndex = useTransform(
        scrollYProgress,
        [0, 1],
        [0, cardData.length - 1]
    );

    useEffect(() => {
        const unsubscribe = transformedIndex.onChange((latest) => {
        setActiveIndex(Math.round(latest));
        });
        return () => unsubscribe();
    }, [transformedIndex]);

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut"
        }
        }),
        hover: {
        scale: 1.02,
        x: 10,
        transition: { duration: 0.2 }
        }
    };

    const imageVariants = {
        enter: { opacity: 0, scale: 1.1, rotateY: 10 },
        center: { opacity: 1, scale: 1, rotateY: 0 },
        exit: { opacity: 0, scale: 0.9, rotateY: -10 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div ref={containerRef} className="relative">
            {/* Header */}
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 px-4"
            >
            <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Synchronized Experience
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Scroll through our services and watch the synchronized animations
            </p>
            </motion.div>

            {/* Main Content */}
            <div className="flex min-h-screen">
            {/* Left Side - Scrolling Cards */}
            <div className="w-1/2 p-8 space-y-8 overflow-y-auto">
                {cardData.map((card, index) => (
                <motion.div
                    key={card.id}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={cardVariants}
                    className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-500 ${
                    activeIndex === index
                        ? 'bg-white/20 border-purple-400 shadow-2xl shadow-purple-500/20'
                        : 'bg-white/10 border-white/20 hover:bg-white/15'
                    }`}
                >
                    <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        scale: activeIndex === index ? 1 : 0.95
                    }}
                    transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                    <motion.div
                        className="flex items-center mb-4"
                        animate={{
                        x: activeIndex === index ? 10 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={`w-3 h-3 rounded-full mr-4 transition-colors duration-300 ${
                        activeIndex === index ? 'bg-purple-400' : 'bg-gray-400'
                        }`} />
                        <span className="text-sm font-medium text-purple-300">
                        {String(index + 1).padStart(2, '0')}
                        </span>
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                        {card.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                        {card.description}
                    </p>
                    
                    <motion.div
                        className="mt-6 flex items-center text-purple-400 font-medium"
                        animate={{
                        opacity: activeIndex === index ? 1 : 0.7
                        }}
                    >
                        <span>Learn More</span>
                        <motion.span
                        className="ml-2"
                        animate={{
                            x: activeIndex === index ? 5 : 0
                        }}
                        >
                        →
                        </motion.span>
                    </motion.div>
                    </div>
                </motion.div>
                ))}
            </div>

            {/* Right Side - Sticky Image Slider */}
            <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center p-8">
                <div className="relative w-full max-w-lg h-96 rounded-2xl overflow-hidden">
                {/* Background Glow */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl"
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
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                    style={{ perspective: "1000px" }}
                >
                    <img
                    src={cardData[activeIndex]?.image}
                    alt={cardData[activeIndex]?.title}
                    className="w-full h-full object-cover"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Image Info */}
                    <motion.div
                    className="absolute bottom-6 left-6 right-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    >
                    <h4 className="text-white text-xl font-bold mb-2">
                        {cardData[activeIndex]?.title}
                    </h4>
                    <div className="flex items-center text-white/80">
                        <span className="text-sm">
                        {activeIndex + 1} of {cardData.length}
                        </span>
                        <div className="ml-4 flex space-x-1">
                        {cardData.map((_, i) => (
                            <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                i === activeIndex ? 'bg-purple-400' : 'bg-white/30'
                            }`}
                            />
                        ))}
                        </div>
                    </div>
                    </motion.div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full"
                    animate={{
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                    }}
                />
                
                <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
                    animate={{
                    y: [0, 10, 0],
                    opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                    }}
                />
                </div>
            </div>
            </div>

            {/* Progress Indicator */}
            <motion.div
            className="fixed top-1/2 right-8 transform -translate-y-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            >
            <div className="flex flex-col space-y-3">
                {cardData.map((_, index) => (
                <motion.div
                    key={index}
                    className={`w-1 h-8 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? 'bg-purple-400' : 'bg-white/30'
                    }`}
                    animate={{
                    scale: activeIndex === index ? 1.2 : 1,
                    backgroundColor: activeIndex === index ? '#a855f7' : 'rgba(255,255,255,0.3)'
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

    export default ScrollSyncLayout;