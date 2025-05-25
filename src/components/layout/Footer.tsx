import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Instagram, Twitter, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import { useScroll } from '../../context/ScrollContext';

const Footer: React.FC = () => {
  const { scrollToSection } = useScroll();
  
  const socialLinks = [
    { icon: <Instagram size={18} />, url: '#' },
    { icon: <Twitter size={18} />, url: '#' },
    { icon: <Facebook size={18} />, url: '#' },
    { icon: <Linkedin size={18} />, url: '#' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Building2 className="h-7 w-7 text-primary" />
              <span className="text-xl font-heading font-bold text-gradient">NeoEstate</span>
            </div>
            
            <p className="text-light/70 mb-5">
              Redefining real estate for the future with innovative designs,
              immersive experiences, and sustainable technologies.
            </p>
            
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="p-2 rounded-full bg-white/5 text-light/80 hover:bg-primary/10 hover:text-primary transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Properties', 'About Us', 'Blog', 'Contact', 'Privacy Policy'].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-light/70 hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h3 className="text-lg font-medium mb-5">Property Types</h3>
            <ul className="space-y-3">
              {['Residential', 'Commercial', 'Industrial', 'Luxury Villas', 'Apartments', 'Office Spaces'].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-light/70 hover:text-primary transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-5">Newsletter</h3>
            <p className="text-light/70 mb-4">
              Subscribe to our newsletter for the latest updates on properties and innovations.
            </p>
            
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 p-3 rounded-l-lg bg-white/5 border border-white/10 border-r-0 focus:border-primary/50 focus:ring focus:ring-primary/20 transition-colors text-light outline-none"
              />
              <button className="bg-primary text-white p-3 rounded-r-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/60 text-sm mb-4 md:mb-0">
            © 2025 NeoEstate. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <motion.button
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              onClick={() => scrollToSection('hero')}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;