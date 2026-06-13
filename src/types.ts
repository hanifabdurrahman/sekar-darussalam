export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NearbyFacility {
  name: string;
  distance: string;
  category: 'education' | 'healthcare' | 'mosque' | 'transport' | 'shopping';
  minutes: number;
}

export interface Specifications {
  pondasi: string;
  dinding: string;
  pintu: string;
  lantai: string;
  atap: string;
  sanitair: string;
  listrik: string;
  air: string;
}

export interface HouseTypeData {
  name: string;
  type: string;
  landArea: number; // 72 m2
  buildingArea: number; // 36 m2
  priceStarting: number; // 300 Million IDR
  bedrooms: number;
  bathrooms: number;
  carports: number;
  specifications: Specifications;
}

export interface ConstructionMilestone {
  phase: string;
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  description: string;
  progressPercentage: number;
}

export interface PaymentOption {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  points: string[];
  isPopular?: boolean;
}

export interface LegalityDocument {
  name: string;
  statusLabel: string;
  description: string;
  isVerified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'payment' | 'construction' | 'legal';
}
