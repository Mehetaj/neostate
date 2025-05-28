import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import About from '../components/sections/About';

const AboutUs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <main className="relative z-10 pt-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-gradient text-center text-4xl md:text-5xl font-bold mb-8">About Us</h1>
          <p className="text-light/80 text-center max-w-3xl mx-auto mb-12">
            Learn more about NeoEstate's vision, mission, and the team behind our revolutionary real estate solutions.
          </p>
        </div>
        <About />
      </motion.div>
    </main>
  );
};

export default AboutUs;