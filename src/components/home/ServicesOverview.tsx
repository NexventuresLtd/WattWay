import React from 'react';
import { SERVICES } from '../../utils/constants';
import Card from '../common/Card';
import Button from '../common/Button';

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services at a Glance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 h-full flex flex-col">
                <div className="h-40 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Button variant="outline" size="sm" className="mt-auto">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;