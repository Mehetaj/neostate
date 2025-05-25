import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Star } from 'lucide-react';
import PropertyCard from '../ui/PropertyCard';
import { featuredProperties } from '../../data/properties';

const Featured: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section 
      ref={ref}
      className="section relative z-10 overflow-hidden"
      data-section="featured"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-3xl rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <motion.div
              className="flex items-center gap-2 mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Star className="text-primary h-5 w-5 fill-primary" />
              <span className="text-primary font-medium">Featured Properties</span>
            </motion.div>
            
            <motion.h2
              className="text-gradient max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Architectural Marvels of Tomorrow
            </motion.h2>
          </div>
          
          <motion.button
            className="btn-outline mt-4 md:mt-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ x: 5 }}
          >
            View All Properties
            <ArrowRight size={16} />
          </motion.button>
        </div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {featuredProperties.map((property, index) => (
            <motion.div key={property.id} variants={itemVariants}>
              <PropertyCard property={property} featured={index === 0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;