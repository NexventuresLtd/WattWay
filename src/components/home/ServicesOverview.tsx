import React from 'react';
import { SERVICES } from '../../utils/constants';
import Card from '../common/Card';
import Button from '../common/Button';

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-green-50/30 to-green-50/40 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-400/10 to-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-600 rounded-2xl mb-6 shadow-lg shadow-green-500/25">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-green-900 to-green-900 bg-clip-text text-transparent mb-4">
            Our Services at a Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of solutions designed to elevate your business and drive success
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <Card 
              key={service.id} 
              className="group hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-2 bg-white/70 backdrop-blur-sm border-0 shadow-lg"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Image Container with Overlay */}
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-lg">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Action Button */}
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-green-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 font-medium"
                    >
                      <a href='/services' className="flex items-center justify-center gap-2">
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
            <div className="text-center sm:text-left">
              <p className="text-gray-700 font-medium mb-1">Ready to get started?</p>
              <p className="text-sm text-gray-600">Let's discuss how we can help your business grow</p>
            </div>
            <Button className="bg-gradient-to-r from-green-600 to-green-600 hover:from-green-700 hover:to-green-700 text-white px-8 py-2.5 shadow-lg transition-all duration-300">
              <a href="tel:+250787570975" className="flex items-center gap-2">
              Contact Us Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;