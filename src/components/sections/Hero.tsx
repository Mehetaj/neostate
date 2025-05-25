import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Building, Map } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import PropertyModel from '../3d/PropertyModel';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen relative flex items-center overflow-hidden"
      data-section="hero"
      style={{ opacity, y, scale }}
    >
      {/* 3D Building Visualization */}
      <div className="absolute right-0 top-0 w-full h-full md:w-1/2 md:right-0 opacity-40 md:opacity-70 pointer-events-none">
        <PropertyModel />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="max-w-2xl">
          <motion.span
            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            The Future of Real Estate
          </motion.span>
          
          <motion.h1
            ref={titleRef}
            className="text-gradient mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Experience Properties in a Whole New Dimension
          </motion.h1>
          
          <motion.p
            className="text-light/80 text-lg mb-8 max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Discover cutting-edge architecture and futuristic living spaces designed for the modern visionary. Immerse yourself in our 3D property tours.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Building size={18} />
              Explore Properties
            </motion.button>
            
            <motion.button
              className="btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Map size={18} />
              View on Map
            </motion.button>
          </motion.div>
          
          <motion.div
            className="mt-20 hidden md:flex items-center gap-2 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-transparent pointer-events-none" />
    </motion.section>
  );
};

export default Hero;