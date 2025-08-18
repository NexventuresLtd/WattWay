import React from 'react';
import { WHY_CHOOSE_US } from '../../utils/constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose WattWay?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {WHY_CHOOSE_US.map((item, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;