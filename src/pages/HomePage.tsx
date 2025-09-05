import React, { useState, useEffect } from 'react';
import {Star, Zap, Shield, Award, Phone, Mail } from 'lucide-react';
import Header from '../components/common/Header';
import Hero from '../components/common/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import TestimonialCard from '../components/common/Testimonial';
import Footer from '../components/common/Footer';
import { TESTIMONIALS } from '../utils/constants';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "24/7", label: "Support Available", icon: Shield },
    { number: "50+", label: "Expert Technicians", icon: Zap }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gray-100 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-gray-100 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Header />
      
      <main className="flex-grow relative z-10">
        <Hero />
        
        {/* Enhanced Stats Section */}
        <section className={`py-16 bg-[#0b1d3a] transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{animationDelay: `${index * 200}ms`}}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full mb-4 group-hover:shadow-lg transition-shadow">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-100 mb-2 group-hover:text-gray-100 transition-colors">
                      {stat.number}
                    </h3>
                    <p className="text-gray-100 font-medium">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        <ServicesOverview />
        
        <WhyChooseUs />
        
        {/* Enhanced Testimonials Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#0b1d3a] mb-4">
                What Our <span className="text-green-600">Clients Say</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
              <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied customers have to say about our EV solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white relative overflow-hidden">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              animation: 'float 6s ease-in-out infinite'
            }}></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0b1d3a] bg-opacity-20 rounded-full mb-6 animate-pulse">
                <Zap className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
                Ready for <span className="text-green-600">EV Solutions?</span>
              </h3>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
                Transform your energy future today. Our experts are standing by to help you make the switch to sustainable electric vehicle solutions.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                <div className="flex items-center gap-3 text-gray-100 bg-green-600 bg-opacity-10 px-6 py-3 rounded-full backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-gray-100" />
                  <a href="tel:+250787570975" className="font-semibold text-gray-100 hover:text-gray-100 transition-colors">
                    +250 787 570 975
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-100 bg-green-600 bg-opacity-10 px-6 py-3 rounded-full backdrop-blur-sm">
                  <a href="mailto:info@enebularw.com" className="flex items-center gap-2 text-gray-100 hover:text-gray-100 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">info@enebularw.com</span>
                </a>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 hover:text-gray-100 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <a href="/contact" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Schedule Consultation
                  </a>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex justify-center items-center gap-8 mt-12 pt-8 border-t border-gray-500 border-opacity-30">
                <div className="text-center">
                  <div className="text-2xl font-bold">5★</div>
                  <div className="text-sm text-gray-100">Rated Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-100">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-gray-100">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;