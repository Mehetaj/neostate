import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Filter, Search, ArrowRight } from 'lucide-react';
import PropertyCard from '../ui/PropertyCard';
import { allProperties } from '../../data/properties';

const filters = [
  'All',
  'Residential',
  'Commercial',
  'Industrial',
  'Luxury'
];

const Properties: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  // Filter properties based on active filter and search term
  const filteredProperties = allProperties.filter(property => {
    const matchesFilter = activeFilter === 'All' || property.type === activeFilter;
    const matchesSearch = 
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  return (
    <section 
      ref={ref}
      className="section bg-dark/50 relative z-10"
      data-section="properties"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-gradient text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Discover Our Properties
        </motion.h2>
        
        <motion.p
          className="text-light/70 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Browse our curated collection of futuristic properties designed for tomorrow's lifestyle.
          Filter by category or search for specific features to find your perfect match.
        </motion.p>
        
        {/* Search and Filters */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass rounded-full flex items-center p-2 mb-4">
            <div className="flex-1 flex items-center pl-4">
              <Search className="h-5 w-5 text-light/50 mr-2" />
              <input
                type="text"
                placeholder="Search properties..."
                className="bg-transparent border-none outline-none text-light w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-light"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
            </button>
          </div>
          
          <AnimatePresence>
            {showFilters && (
              <motion.div
                className="glass rounded-xl p-4 mb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <button
                      key={filter}
                      className={`px-4 py-2 rounded-full text-sm ${
                        activeFilter === filter
                          ? 'bg-primary text-white'
                          : 'bg-white/5 text-light/70 hover:bg-white/10'
                      }`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              },
              hidden: {}
            }}
          >
            {filteredProperties.slice(0, 6).map((property) => (
              <motion.div
                key={property.id}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 }
                }}
                transition={{ duration: 0.5 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-light/70 mb-4">No properties match your current filters.</p>
            <button 
              className="btn-outline" 
              onClick={() => {
                setActiveFilter('All');
                setSearchTerm('');
              }}
            >
              Reset Filters
            </button>
          </motion.div>
        )}
        
        {/* Load More Button */}
        {filteredProperties.length > 6 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <button className="btn-outline">
              Load More
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Properties;