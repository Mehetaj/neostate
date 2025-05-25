import { Property } from '../types/property';

export const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Crystal Spire Penthouse",
    description: "Experience luxury living at its finest in this stunning penthouse with panoramic city views, smart home automation, and exclusive rooftop access.",
    price: 2850000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3200,
    location: "Downtown, Neo City",
    imageUrl: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "Featured",
    type: "Residential",
    rental: false
  },
  {
    id: 2,
    title: "Helix Tower Apartment",
    description: "Modern apartment in the iconic Helix Tower with state-of-the-art amenities, energy-efficient design, and breathtaking views.",
    price: 5500,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    location: "Skyline District, Neo City",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "New",
    type: "Residential",
    rental: true
  },
  {
    id: 3,
    title: "Quantum Office Complex",
    description: "Next-generation office space with modular design, holographic conference rooms, and integrated AI systems for maximum productivity.",
    price: 4750000,
    bedrooms: 0,
    bathrooms: 4,
    area: 8500,
    location: "Innovation District, Neo City",
    imageUrl: "https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "Sale",
    type: "Commercial",
    rental: false
  }
];

export const allProperties: Property[] = [
  ...featuredProperties,
  {
    id: 4,
    title: "Zenith Eco-Villa",
    description: "Sustainable living in this eco-friendly villa with zero carbon footprint, solar panels, and indoor vertical gardens.",
    price: 1950000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    location: "Green Valley, Neo City",
    imageUrl: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "Sale",
    type: "Luxury",
    rental: false
  },
  {
    id: 5,
    title: "Nova Industrial Complex",
    description: "State-of-the-art industrial facility with automated logistics, modular manufacturing spaces, and advanced security systems.",
    price: 7800000,
    bedrooms: 0,
    bathrooms: 6,
    area: 15000,
    location: "Port District, Neo City",
    imageUrl: "https://images.pexels.com/photos/2883380/pexels-photo-2883380.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "Sale",
    type: "Industrial",
    rental: false
  },
  {
    id: 6,
    title: "Horizon Loft Apartment",
    description: "Stylish loft apartment with open floor plan, smart kitchen, and community access to co-working spaces and fitness center.",
    price: 3200,
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    location: "Arts District, Neo City",
    imageUrl: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "New",
    type: "Residential",
    rental: true
  },
  {
    id: 7,
    title: "Prism Commercial Tower",
    description: "Premium retail and office spaces with interactive storefronts, customer analytics, and integrated digital marketing solutions.",
    price: 12500000,
    bedrooms: 0,
    bathrooms: 12,
    area: 25000,
    location: "Central Business District, Neo City",
    imageUrl: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "Sale",
    type: "Commercial",
    rental: false
  },
  {
    id: 8,
    title: "Infinity Smart Home",
    description: "Cutting-edge smart home with voice-controlled systems, adaptive climate control, and biometric security features.",
    price: 1450000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2100,
    location: "Tech Heights, Neo City",
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "Sale",
    type: "Residential",
    rental: false
  },
  {
    id: 9,
    title: "Aurora Luxury Villa",
    description: "Exquisite villa with infinity pool, private garden, home theater, and personalized concierge service.",
    price: 8900000,
    bedrooms: 5,
    bathrooms: 6.5,
    area: 6500,
    location: "Exclusive Estates, Neo City",
    imageUrl: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    status: "Featured",
    type: "Luxury",
    rental: false
  }
];