export interface ServiceItem {
  id: string;
  name: string;
  subtitle?: string;
  category: 'tanning' | 'makeup' | 'retail';
  price: string;
  priceNote?: string;
  duration?: string;
  description: string;
  features: string[];
  popular?: boolean;
  image?: string;
  imageFit?: 'cover' | 'contain' | 'full';
  imageHeight?: string;
  imagePosition?: string;
  flyerHighlight?: string;
}

export interface TransformationItem {
  id: string;
  image: string;
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
