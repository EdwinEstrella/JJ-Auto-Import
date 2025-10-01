export interface FAQItem {
  question: string;
  answer: string;
}

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  imageUrl: string;
  images: string[];
  description: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface NavLink {
    href: string;
    label: string;
}
