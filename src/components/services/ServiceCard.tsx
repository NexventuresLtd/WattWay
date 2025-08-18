import React from 'react';
import { type Service } from '../../types';
import Button from '../common/Button';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="mb-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
          <p className="text-gray-700 mb-6">{service.description}</p>
          
          {service.process && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Process:</h3>
              <ol className="list-decimal list-inside space-y-1">
                {service.process.map((step: string, index: number) => (
                  <li key={index} className="text-gray-700">{step}</li>
                ))}
              </ol>
            </div>
          )}

          {service.features && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">We Provide Guidance On:</h3>
              <ul className="list-disc list-inside space-y-1">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          <Button variant="primary">
            {service.id === 'selling' ? 'View Chargers' : 
             service.id === 'consultation' ? 'Get Started' :
             service.id === 'design' ? 'Contact Us' : 'Book Now'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
