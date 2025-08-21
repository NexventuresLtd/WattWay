import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-electric-pattern opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-600"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto transform transition-all duration-1000 hover:scale-105">
              <div className="mb-8">
                <svg className="w-20 h-20 mx-auto mb-6 text-green-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 tracking-tight animate-fade-in-up">
                About ENebula
              </h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Powering the future of transportation with accessible, sustainable EV solutions across East Africa.
              </p>
            </div>
          </div>
        </section>
        
        {/* Enhanced Our Story Section */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-green-600 tracking-tight">Our Story</h2>
                <div className="w-24 h-1 bg-gray-600 mx-auto mb-8 transform transition-all duration-500 hover:w-32"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <div className="transform transition-all duration-700 hover:scale-105 hover:-translate-x-2">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p>
                        At ENebula, we believe the future of transportation is electric — and accessible to everyone.
                      </p>
                    </div>
                  </div>
                  
                  <div className="transform transition-all duration-700 hover:scale-105 hover:-translate-x-2 delay-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <p>
                        We are a Rwanda-based EV solutions provider offering charger sales, installation, full EV industry consulting, and complete charging station design and implementation.
                      </p>
                    </div>
                  </div>
                  
                  <div className="transform transition-all duration-700 hover:scale-105 hover:-translate-x-2 delay-200">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <p>
                        Founded in 2020, ENebula has grown from a small startup to a leading provider of EV infrastructure solutions in East Africa. Our team of certified professionals brings together expertise in electrical engineering, renewable energy, and transportation planning.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:rotate-2">
                    <img 
                      src="https://ekoenergetyka.com/wp-content/uploads/2024/11/c46ebcb54e12c38e69ecab6aa5eb0986335215209f546097ffd7c25681aa9338.png"
                      alt="EV Charging Station"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center animate-pulse">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Mission & Vision Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
              <div className="bg-white p-8 rounded-2xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 border-t-4 border-gray-600">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-green-600">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To make EV adoption and charging infrastructure simple, affordable, and future-ready. We strive to remove barriers to electric mobility by providing end-to-end solutions tailored to each client's needs.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 border-t-4 border-gray-600">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-green-600">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  A connected network of EV solutions that keeps Africa moving sustainably. We envision a continent where electric mobility is the norm, supported by reliable, renewable-powered charging infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Team Section */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="mb-16">
              <h2 className="text-4xl font-bold mb-6 text-green-600 tracking-tight">Meet Our Team</h2>
              <div className="w-24 h-1 bg-gray-600 mx-auto mb-8 transform transition-all duration-500 hover:w-32"></div>
              <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
                ENebula is powered by a diverse team of EV specialists, engineers, and sustainability experts committed to advancing clean transportation across Africa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  name: 'Moise N.', 
                  role: 'Founder & CEO', 
                  bio: 'EV industry veteran with 10+ years experience in sustainable transportation solutions.',
                  image: 'https://www.mona.uwi.edu/modlang/sites/default/files/modlang/male-avatar-placeholder.png',
                  icon: 'M12 14l9-5-9-5-9 5 9 5z'
                },
                { 
                  name: 'Moise N.', 
                  role: 'Head of Engineering', 
                  bio: 'Electrical engineer specializing in advanced charging infrastructure and renewable energy integration.',
                  image: 'https://www.mona.uwi.edu/modlang/sites/default/files/modlang/male-avatar-placeholder.png',
                  icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                },
                { 
                  name: 'Moise N.', 
                  role: 'Consulting Director', 
                  bio: 'Former fleet manager with deep expertise in EV transition planning and operational optimization.',
                  image: 'https://www.mona.uwi.edu/modlang/sites/default/files/modlang/male-avatar-placeholder.png',
                  icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className="group bg-white p-8 rounded-2xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-4 border border-gray-100"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'slideInUp 0.8s ease-out forwards'
                  }}
                >
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-gray-500 transition-all duration-500">
                      <img 
                        src={member.image}
                        alt={member.name} 
                        className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={member.icon} />
                      </svg>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-green-600 group-hover:text-green-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-800 font-semibold mb-3 text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;