export interface Product {
  id: string; // Changed from number to string
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  type: 'home' | 'commercial';
  power: number; // in kW
}

export interface Service {
  id: string;
  title: string;
  description: string;
  process?: string[];
  features?: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position?: string;
}

export interface FAQItem {
  id: string; // Added id field
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type Theme = 'light' | 'dark'; // Added Theme type