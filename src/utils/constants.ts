import type { Product, Service, Testimonial, FAQItem } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'installation',
    title: 'EV Charger Installation',
    description: 'We install EV chargers for homes, offices, and public spaces. Our certified technicians ensure every installation meets safety standards and operates at peak performance.',
    process: [
      'Site assessment',
      'Installation planning',
      'Electrical work & setup',
      'Testing and training'
    ],
    image: 'https://berqwp-cdn.sfo3.cdn.digitaloceanspaces.com/cache/www.premium-electric.ca/wp-content/uploads/2024/01/EV-home-charging-scaled-1-jpg.webp'
  },
  {
    id: 'selling',
    title: 'Selling Chargers',
    description: 'Whether you need a compact home charger or a powerful commercial unit, ENebula supplies quality chargers with the latest features — from Wi-Fi control to RFID access.',
    image: 'https://www.hjlcharger.com/uploadfile/202307/3799b225414b.jpg'
  },
  {
    id: 'consultation',
    title: 'EV Industry Consultation',
    description: 'ENebula offers expert consulting services across the electric vehicle sector — helping you make informed, future-ready decisions.',
    features: [
      'EV adoption strategies',
      'Fleet electrification planning',
      'Charging infrastructure design',
      'Energy management',
      'Business models for public stations',
      'Navigating EV regulations'
    ],
    image: 'https://img1.wsimg.com/isteam/ip/ab2705b5-533a-456c-9088-73959d48b302/Electric-Cars-Surge-Begins-hero.jpg/:/rs=h:1000,cg:true,m'
  },
  {
    id: 'design',
    title: 'Charging Station Design & Implementation',
    description: 'From small private setups to large public charging hubs, ENebula provides comprehensive design and implementation services.',
    process: [
      'Site survey & feasibility study',
      'Charging point layout planning',
      'Equipment sourcing',
      'Full implementation and testing'
    ],
    image: 'https://www.ecmag.com/images/default-source/bonotom/ec2305-may-2023/adobestock_585977851.tmb-art-detail.jpg'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'hc-7kw',
    name: 'Home Charger 7kW',
    description: 'Ideal for overnight charging at home with compact design and smart features.',
    price: 499,
    features: [
      'Weatherproof, wall-mounted design',
      'Wi-Fi connectivity',
      'Mobile app control',
      'LED status indicators',
      'Type 2 connector'
    ],
    image: 'https://www.teisonev.com/uploads/202220516/7kw-wall-mounted-ev-charger-with-5m-length54192900065.png',
    type: 'home',
    power: 7
  },
  {
    id: 'cc-22kw',
    name: 'Commercial Charger 22kW',
    description: 'Ultra-fast charging solution for fleets and public stations with robust construction.',
    price: 2499,
    features: [
      'RFID access control',
      'OCPP compliant',
      'Load balancing',
      'Dual charging ports',
      'LCD display'
    ],
    image: 'https://image.made-in-china.com/202f0j00SiNqjPrKpycM/Wholesale-3-Phase-7kw-11kw-22kw-EV-Charger-Commercial-Electric-EV-Charging-Station-32A-Car-Charger.webp',
    type: 'commercial',
    power: 22
  },
  {
    id: 'hc-11kw',
    name: 'Home Charger 11kW',
    description: 'Faster home charging solution for EVs with larger batteries.',
    price: 699,
    features: [
      'Weatherproof design',
      'Smart scheduling',
      'Energy monitoring',
      'Compact form factor',
      'Type 2 connector'
    ],
    image: 'https://www.chinaevse.com/uploads/11KW-16A-home-AC-EV-Charger.jpeg',
    type: 'home',
    power: 11
  },
  {
    id: 'cc-50kw',
    name: 'DC Fast Charger 50kW',
    description: 'Rapid charging solution for commercial locations and highway stations.',
    price: 14999,
    features: [
      'DC fast charging',
      'CCS and CHAdeMO connectors',
      'Remote monitoring',
      'Payment system integration',
      'Vandal-resistant'
    ],
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/9/JK/RR/QP/91245011/50-kw-dc-fast-ev-charger.jpg',
    type: 'commercial',
    power: 50
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'ENebula guided our company through the transition to electric vehicles — from selecting the right chargers to planning an entire charging hub.',
    author: 'Joseph M.',
    position: 'Kigali'
  },
  {
    id: 't2',
    quote: 'The installation team was professional and efficient. Our home charger was set up in just a few hours with no issues.',
    author: 'Alice K.',
    position: 'Homeowner'
  },
  {
    id: 't3',
    quote: 'Their consulting services helped us develop a comprehensive EV strategy that aligned with our sustainability goals.',
    author: 'David R.',
    position: 'Fleet Manager'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How long does charger installation typically take?',
    answer: 'Most home installations are completed within 3-5 hours. Commercial installations vary based on complexity but typically take 1-3 days.'
  },
  {
    id: 'faq2',
    question: 'What maintenance do EV chargers require?',
    answer: 'EV chargers require minimal maintenance. We recommend periodic inspections and cleaning. Our team can provide maintenance packages if needed.'
  },
  {
    id: 'faq3',
    question: 'Can I install an EV charger myself?',
    answer: 'We strongly recommend professional installation to ensure safety and compliance with local regulations. Our certified technicians handle all aspects of installation.'
  },
  {
    id: 'faq4',
    question: 'What payment options do you accept?',
    answer: 'We accept bank transfers, credit cards, and mobile money payments. Commercial clients can request invoice billing.'
  },
  {
    id: 'faq5',
    question: 'Do you offer warranty on your products?',
    answer: 'Yes, all our chargers come with a minimum 2-year warranty. Installation work is guaranteed for 1 year against defects.'
  }
];

export const WHY_CHOOSE_US = [
  'Experienced and certified EV specialists',
  'End-to-end solutions for individuals, businesses, and governments',
  'Future-proof, scalable charging solutions',
  'Commitment to sustainable, clean mobility',
  'Local expertise with global standards',
  'Competitive pricing and flexible payment options'
];