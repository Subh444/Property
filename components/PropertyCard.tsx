
import React from 'react';
import { Property, ListingType } from '../types';
import { Icons } from '../constants';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onViewDetails }) => {
  const formattedPrice = new Intl.NumberFormat('en-AE').format(property.price);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col group cursor-pointer" onClick={() => onViewDetails(property.id)}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2 py-1 text-xs font-bold rounded ${property.type === ListingType.BUY ? 'bg-red-600 text-white' : 'bg-gray-800 text-white'}`}>
            {property.type}
          </span>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="text-xl font-bold text-gray-900 mb-1">
          {formattedPrice} {property.currency}
        </div>
        <h3 className="text-gray-800 font-semibold text-sm line-clamp-1 mb-2">
          {property.title}
        </h3>
        <div className="flex items-center text-gray-500 text-xs mb-4">
          <Icons.Location />
          <span className="ml-1 truncate">{property.location}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-gray-600 text-sm mt-auto">
          <div className="flex items-center gap-1">
            <Icons.Bed />
            <span>{property.bedrooms > 0 ? property.bedrooms : 'Studio'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icons.Bath />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icons.Area />
            <span>{property.area} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
