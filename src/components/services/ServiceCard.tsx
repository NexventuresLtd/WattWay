import React from 'react';
import { type Service } from '../../types';
import Button from '../common/Button';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="mb-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-2/5 xl:w-1/3">
            <div className="relative h-64 sm:h-72 lg:h-full min-h-[300px]">
              <img 
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 to-transparent lg:hidden"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-3/5 xl:w-2/3 p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {service.title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
            
            {/* Process Section */}
            {service.process && (
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Process
                </h3>
                <div className="bg-slate-50 rounded-xl p-4 sm:p-6">
                  <ol className="space-y-3">
                    {service.process.map((step: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-slate-700 text-white text-sm font-semibold rounded-full flex items-center justify-center mr-3 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
            
            {/* Features Section */}
            {service.features && (
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  We Provide Guidance On
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <svg 
                        className="flex-shrink-0 w-5 h-5 text-green-600 mr-3 mt-0.5" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* CTA Button */}
            <div className="pt-4 border-t border-green-600">
              <Button 
                variant="primary"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 hover:shadow-lg focus:ring-4 focus:ring-green-600 focus:outline-none"
              >
                <a href='/services' className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {service.id === 'selling' ? 'View Chargers' :
                service.id === 'consultation' ? 'Get Started' :
                service.id === 'design' ? 'Contact Us' : 'Book Now'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;