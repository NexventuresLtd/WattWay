import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const ContactPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: '24/7 Support',
      desc: 'Round-the-clock assistance for all your EV needs'
    },
    {
            title: 'Expert Solutions',
      desc: 'Professional EV charging and maintenance services'
    },
    {
            title: 'Eco-Friendly',
      desc: 'Sustainable solutions for a greener future'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Animation */}
        <section className="relative bg-slate-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-green-500 rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 right-1/3 w-12 h-12 bg-yellow-500 rounded-full opacity-20 animate-bounce delay-500"></div>
          </div>
          
          <div className={`container mx-auto px-4 text-center relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center bg-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping"></span>
              Available 24/7
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-green-400 animate-pulse">
              Contact Us
            </h1>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Have a question or need a quote? Our team is ready to assist you with all your 
              <span className="text-blue-400 font-semibold"> EV solutions </span> needs.
            </p>
            
            {/* Animated Call-to-Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <span className="flex items-center">
                  Get Started Today
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className="group border-2 border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`text-center p-8 bg-white rounded-2xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                    activeSection === index ? 'ring-4 ring-blue-200 shadow-xl' : 'shadow-lg'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: isVisible ? 'slideInUp 0.6s ease-out forwards' : ''
                  }}
                >
                  <div className="text-4xl mb-4 animate-bounce"></div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form Section */}
              <div className={`transform transition-all duration-800 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Send Us a Message</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Fill out the form below and we'll get back to you within 24 hours. 
                    Our team is here to help with all your questions and requirements.
                  </p>
                  
                  <div className="relative">
                    <ContactForm />
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-200 rounded-full opacity-50 animate-pulse delay-700"></div>
                  </div>
                </div>
              </div>
              
              {/* Contact Info Section */}
              <div className={`transform transition-all duration-800 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="space-y-8">
                  {/* Contact Information */}
                  <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
                    </div>
                    
                    <ContactInfo />
                  </div>
                  
                  {/* Interactive Map Section */}
                  <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">Find Us on Map</h3>
                    </div>
                    
                    <div className="relative h-80 bg-gray-100 rounded-2xl overflow-hidden group cursor-pointer">
                      {/* Interactive Map Placeholder */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-10"></div>
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 animate-bounce">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-lg font-semibold mb-2">Interactive Map</p>
                        <p className="text-sm text-center px-4">Click to view our location and get directions</p>
                        
                        {/* Animated Grid Background */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="w-full h-full" style={{
                            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                          }}></div>
                        </div>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Quick Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <button className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center group">
                        <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                        </svg>
                        Get Directions
                      </button>
                      <button className="flex-1 bg-green-50 hover:bg-green-100 text-green-700 px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center group">
                        <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className={`transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust us with their EV solutions. 
                Contact us today for a free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="flex items-center">
                    Schedule Consultation
                    <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                </button>
                <button className="group border-2 border-gray-300 hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center">
                    Download Brochure
                    <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;