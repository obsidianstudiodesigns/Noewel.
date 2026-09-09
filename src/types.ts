export interface ServiceItem {
  id: string;
  name: string;
  category: 'tanning' | 'makeup' | 'retail';
  price: string;
  priceNote?: string;
  duration?: string;
  description: string;
  features: string[];
  popular?: boolean;
  image?: string;
  flyerHighlight?: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Bridal & Occasion' | 'Matric Farewell' | 'Mature Elegance' | 'Red Carpet & Evening';
  image: string;
  description: string;
  tags: string[];
  artistNote: string;
}

export interface BookingFormState {
  serviceId: string;
  serviceName: string;
  clientName: string;
  clientPhone: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
