
export enum ListingType {
  BUY = 'BUY',
  RENT = 'RENT'
}

export interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  type: ListingType;
  bedrooms: number;
  bathrooms: number;
  area: number;
  imageUrl: string;
  description: string;
  amenities: string[];
  agencyName: string;
}

export interface AIResponse {
  recommendation: string;
  suggestedAreas: string[];
  marketInsights: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
