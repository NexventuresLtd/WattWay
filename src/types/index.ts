export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  type: 'home' | 'commercial';
  power: number; 
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
  id: string;
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