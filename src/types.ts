// src/types.ts

// Theme
export type Theme = 'light' | 'dark';

// Product
export interface Product {
  id: string; // changed to string to match 'hc-7kw' etc.
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  type: 'home' | 'commercial';
  power: number;
}

// Service
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  process?: string[];   // optional
  features?: string[];  // optional
}

// Testimonial
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position?: string; // optional since you conditionally render it
}

// FAQ
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Contact form
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string; // optional
  service: string; // could be a Service ID or name
}
