
import React from 'react';
import { Property, ListingType } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Apartment in Downtown Dubai',
    price: 2500000,
    currency: 'AED',
    location: 'Downtown Dubai, UAE',
    type: ListingType.BUY,
    bedrooms: 2,
    bathrooms: 2,
    area: 1250,
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    description: 'A stunning modern apartment with a view of the Burj Khalifa.',
    amenities: ['Pool', 'Gym', 'Parking', '24/7 Security'],
    agencyName: 'Emaar Properties'
  },
  {
    id: '2',
    title: 'Luxury Villa in Palm Jumeirah',
    price: 12000000,
    currency: 'AED',
    location: 'Palm Jumeirah, Dubai',
    type: ListingType.BUY,
    bedrooms: 5,
    bathrooms: 6,
    area: 6500,
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    description: 'Beachfront living at its finest. Private garden and infinity pool.',
    amenities: ['Private Beach', 'Garden', 'Maid Room', 'Study'],
    agencyName: 'Nakheel'
  },
  {
    id: '3',
    title: 'Cozy Studio in Dubai Marina',
    price: 85000,
    currency: 'AED/yr',
    location: 'Dubai Marina, UAE',
    type: ListingType.RENT,
    bedrooms: 0,
    bathrooms: 1,
    area: 550,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-f1d3ac1ef739?auto=format&fit=crop&q=80&w=800',
    description: 'Perfect for young professionals. Fully furnished and ready to move in.',
    amenities: ['Pool', 'Close to Metro', 'Built-in Wardrobes'],
    agencyName: 'Betterhomes'
  },
  {
    id: '4',
    title: 'Family Townhouse in Arabian Ranches',
    price: 3200000,
    currency: 'AED',
    location: 'Arabian Ranches III, Dubai',
    type: ListingType.BUY,
    bedrooms: 3,
    bathrooms: 4,
    area: 2400,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'Located in a gated community, perfect for families with kids.',
    amenities: ['Parks', 'Playground', 'Gym', 'BBQ Area'],
    agencyName: 'Damac'
  },
  {
    id: '5',
    title: 'Spacious Penthouse in JBR',
    price: 450000,
    currency: 'AED/yr',
    location: 'Jumeirah Beach Residence, Dubai',
    type: ListingType.RENT,
    bedrooms: 4,
    bathrooms: 5,
    area: 4200,
    imageUrl: 'https://images.unsplash.com/photo-1567496898731-daec1b36bc41?auto=format&fit=crop&q=80&w=800',
    description: 'Full sea view with massive terrace. High floor.',
    amenities: ['Sea View', 'Terrace', 'Concierge', 'High Floor'],
    agencyName: 'Hamptons International'
  },
  {
    id: '6',
    title: 'Office Space in Business Bay',
    price: 150000,
    currency: 'AED/yr',
    location: 'Business Bay, Dubai',
    type: ListingType.RENT,
    bedrooms: 0,
    bathrooms: 2,
    area: 1100,
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'Professional office space with canal views.',
    amenities: ['Canal View', 'Fitted Office', 'Conference Room'],
    agencyName: 'Savills'
  }
];

export const PRINCIPLES = [
  {
    title: "Think Future First",
    description: "Anticipating the next wave of Dubai's real estate transformation.",
    icon: "🚀"
  },
  {
    title: "Data Beats Opinions, Speed Beats Perfection",
    description: "Using real-time market data to drive fast, informed investment decisions.",
    icon: "📈"
  },
  {
    title: "Optimise for Impact",
    description: "Focusing on high-ROI properties that change living for good.",
    icon: "🎯"
  },
  {
    title: "No Ostriches Allowed",
    description: "Facing market realities head-on with transparency and honesty.",
    icon: "👀"
  },
  {
    title: "Our People, Our Power",
    description: "Connecting you with the best property experts in the MENA region.",
    icon: "🤝"
  },
  {
    title: "The Biggest Risk is Taking no Risk at All",
    description: "Seizing high-growth opportunities in Dubai's dynamic landscape.",
    icon: "⚡"
  }
];

export const Icons = {
  Search: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Location: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Bed: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-2 4v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m16-4V7a2 2 0 00-2-2H5a2 2 0 00-2 2v7" />
    </svg>
  ),
  Bath: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v.01M12 14v.01M16 14v.01M21 12c0 1.657-3.582 3-8 3s-8-1.343-8-3m16 0V5a2 2 0 00-2-2H5a2 2 0 00-2 2v7m16 0h2" />
    </svg>
  ),
  Area: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
    </svg>
  ),
  Robot: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
};
