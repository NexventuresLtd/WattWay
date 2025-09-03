import React from 'react';
import { CheckCircle, Shield, Zap, Users, Award, Headphones } from 'lucide-react';

// Sample data - replace with your actual constants
const WHY_CHOOSE_US = [
  {
    title: "Proven Expertise",
    description: "Over 10 years of experience delivering cutting-edge solutions across various industries",
    icon: Award
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support to ensure your business never stops running",
    icon: Headphones
  },
  {
    title: "Security First",
    description: "Enterprise-grade security measures to protect your data and maintain compliance",
    icon: Shield
  },
  {
    title: "Lightning Fast",
    description: "Optimized performance with 99.9% uptime guarantee for maximum reliability",
    icon: Zap
  },
  {
    title: "Dedicated Team",
    description: "A team of certified professionals committed to your project's success",
    icon: Users
  },
  {
    title: "Quality Assured",
    description: "Rigorous testing and quality assurance processes for flawless delivery",
    icon: CheckCircle
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-600 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-600 rounded-2xl mb-6 ">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-600 to-green-500 bg-clip-text text-transparent mb-6">
              Why Choose Enebula?
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes us the preferred choice for businesses worldwide. 
              Experience excellence through innovation, reliability, and unwavering commitment.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-green-600/30 rounded-2xl p-8  border border-gray-100 hover:scale-105 transition-all duration-300 ease-out hover:bg-white"
                >
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 rounded-2xl hover:border border-green-600 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-600 to-green-600 rounded-xl mb-4">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-green-600 to-green-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-600 text-white font-semibold rounded-xl  hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-600">
                <a href="tel:+250787570975" className="flex items-center gap-2">
                Get Started Today
                </a>
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-green-600 hover:text-green-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200">
                <a href="/contact" className="flex items-center gap-2">
                Learn More
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;