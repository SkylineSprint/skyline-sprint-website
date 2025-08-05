'use client'
import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// ZoomParallax Component
function ZoomParallax() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
            scale: scale4
        },
        {
            src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
            scale: scale5
        },
        {
            src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
            scale: scale6
        },
        {
            src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
            scale: scale5
        },
        {
            src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop",
            scale: scale6
        },
        {
            src: "https://images.unsplash.com/photo-1418065460487-3956ef138763?w=800&h=600&fit=crop",
            scale: scale8
        },
        {
            src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&h=600&fit=crop",
            scale: scale9
        }
    ];

    const getPositionClasses = (idx) => {
        switch (idx) {
            case 0:
                return "w-[25vw] h-[25vh]";
            case 1:
                return "w-[35vw] h-[30vh] -top-[30vh] left-[5vw]";
            case 2:
                return "w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]";
            case 3:
                return "w-[25vw] h-[25vh] left-[27.5vw]";
            case 4:
                return "w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]";
            case 5:
                return "w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]";
            case 6:
                return "w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]";
            default:
                return "w-[25vw] h-[25vh]";
        }
    };

    return (
        <div ref={container} className="h-[300vh] relative">
            <div className="sticky overflow-hidden top-0 h-screen">
                {pictures.map(({ src, scale }, index) => {
                    return (
                        <motion.div 
                            key={index} 
                            style={{ scale }} 
                            className="w-full h-full top-0 absolute flex items-center justify-center"
                        >
                            <div className={`relative ${getPositionClasses(index)}`}>
                                <img
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

// Main Home Component
export default function Home() {
    useEffect(() => {
        // Simulate Lenis smooth scrolling setup
        // Note: In a real Next.js app, you would install @studio-freight/lenis
        // and import it properly. Here we're just showing the structure.
        
        // const lenis = new Lenis()
        // function raf(time) {
        //     lenis.raf(time)
        //     requestAnimationFrame(raf)
        // }
        // requestAnimationFrame(raf)
        
        console.log('Lenis smooth scroll would be initialized here');
    }, []);

    return (
        <main className="mt-[50vh] mb-[100vh]">
            <ZoomParallax />
        </main>
    );
}