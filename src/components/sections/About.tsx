import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Building2, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: <Building2 className="h-6 w-6 text-primary" />,
    title: 'Cutting-Edge Architecture',
    description: 'Our properties feature revolutionary designs that blend aesthetics with functional innovation.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Smart Security Systems',
    description: 'Advanced AI-powered security solutions providing peace of mind with 24/7 monitoring.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Future-Proof Investment',
    description: 'Properties designed to appreciate in value with sustainable features and adaptable spaces.'
  }
];

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="section relative z-10"
      data-section="about"
    >
      {/* Background gradient */}
      <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.span
              className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              About NeoEstate
            </motion.span>
            
            <motion.h2
              className="text-gradient mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Redefining Real Estate for the Future
            </motion.h2>
            
            <motion.p
              className="text-light/80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Founded in 2023, NeoEstate is at the forefront of revolutionary real estate development. 
              We combine cutting-edge architecture, sustainable technologies, and immersive virtual 
              experiences to transform how properties are designed, viewed, and purchased.
            </motion.p>
            
            <motion.p
              className="text-light/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our mission is to create living and working spaces that anticipate the needs of 
              tomorrow while providing exceptional experiences today. Every property in our portfolio 
              is designed with innovation, sustainability, and human-centered principles in mind.
            </motion.p>
            
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {['Sustainable Design', 'Smart Home Integration', 'Virtual Property Tours', 'Blockchain Transactions'].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <CheckCircle2 className="text-primary h-5 w-5 flex-shrink-0" />
                  <span className="text-light/90">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Main image */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl shadow-primary/10"
              whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(7, 102, 255, 0.25)' }}
            >
              <img 
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Futuristic building"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Stats overlay */}
            <motion.div
              className="absolute -bottom-10 -left-10 glass rounded-xl p-5 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-primary text-2xl font-bold">120+</p>
                  <p className="text-light/70 text-sm">Properties</p>
                </div>
                <div>
                  <p className="text-primary text-2xl font-bold">15</p>
                  <p className="text-light/70 text-sm">Cities</p>
                </div>
                <div>
                  <p className="text-primary text-2xl font-bold">3K+</p>
                  <p className="text-light/70 text-sm">Clients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Features */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(7, 102, 255, 0.1), 0 10px 10px -5px rgba(7, 102, 255, 0.04)' }}
            >
              <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-light/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;