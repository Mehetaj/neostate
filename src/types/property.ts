export interface Property {
  id: number;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  location: string;
  imageUrl: string;
  status?: 'Featured' | 'New' | 'Sale';
  type: 'Residential' | 'Commercial' | 'Industrial' | 'Luxury';
  rental: boolean;
  virtualTour?: string;
}