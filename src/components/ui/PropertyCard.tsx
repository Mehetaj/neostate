import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Maximize2, MapPin, Bed, Bath, Square } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <motion.div
      className={`property-card glass rounded-xl overflow-hidden ${
        featured ? 'md:col-span-2' : ''
      }`}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"
          animate={{ opacity: isHovered ? 0.9 : 0.6 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Status Badge */}
        {property.status && (
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
            property.status === 'New' ? 'bg-primary text-white' : 
            property.status === 'Sale' ? 'bg-success text-dark' : 
            'bg-warning text-dark'
          }`}>
            {property.status}
          </div>
        )}
        
        {/* Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <motion.button
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart className={`h-4 w-4 ${isFavorite ? 'fill-error text-error' : ''}`} />
          </motion.button>
          
          <motion.button
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
            whileTap={{ scale: 0.9 }}
          >
            <Maximize2 className="h-4 w-4" />
          </motion.button>
        </div>
        
        {/* Location */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs text-white/90">
          <MapPin className="h-3 w-3" />
          <span>{property.location}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-medium mb-2">{property.title}</h3>
        
        <p className="text-light/70 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>
        
        {/* Features */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex items-center gap-1 text-light/70">
            <Bed className="h-4 w-4" />
            <span className="text-sm">{property.bedrooms}</span>
          </div>
          
          <div className="flex items-center gap-1 text-light/70">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{property.bathrooms}</span>
          </div>
          
          <div className="flex items-center gap-1 text-light/70">
            <Square className="h-4 w-4" />
            <span className="text-sm">{property.area} sq.ft</span>
          </div>
        </div>
        
        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary font-heading text-xl font-bold">${property.price.toLocaleString()}</span>
            {property.rental && (
              <span className="text-light/60 text-sm ml-1">/month</span>
            )}
          </div>
          
          <motion.button
            className="btn-primary py-2 px-4 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;