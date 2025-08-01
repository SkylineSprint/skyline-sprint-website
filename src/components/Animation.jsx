'use client';

import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './style.module.scss'; // SCSS module

export default function Animation() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { src: '/images/SLIDER-1.jpg', scale: scale4 },
    { src: '/images/SLIDER-1.jpg', scale: scale5 },
    { src: '/images/SLIDER-1.jpg', scale: scale6 },
    { src: '/images/SLIDER-1.jpg', scale: scale5 },
    { src: '/images/SLIDER-1.jpg', scale: scale6 },
    { src: '/images/SLIDER-1.jpg', scale: scale8 },
  ];

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div key={index} style={{ scale }} className={styles.el}>
            <div className={styles.imageContainer}>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                priority
                className={styles.image}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
