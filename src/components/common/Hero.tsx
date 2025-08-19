import React, { useEffect, useState } from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Future', 'Innovation', 'Sustainability'];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            poster="../../../public/poster-image.jpg" // Optional: Add a poster image
          >
            <source src="../../../public/Electric car connecting to charger station. 4k 3d animation - U3d Indie Game Developer (1080p, h264).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gray-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main heading with typing animation */}
          <h1 className={`text-3xl xs:text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            WattWay, Powering the{' '}
            <span className="text-gray-400 inline-block min-w-fit">
              <span className="animate-pulse">{words[currentWord]}</span>
            </span>
            <br />of your drive
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            From selling and installing EV chargers to full industry consulting and charging station implementation, WattWay is your trusted EV solutions partner.
          </p>

          {/* Action buttons */}
          <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto group hover:scale-105 transition-transform duration-200"
            >
              <span className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 mr-2 group-hover:animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Shop Chargers
              </span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-200 group"
            >
              <span className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Book Installation
              </span>
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg" 
              className="w-full sm:w-auto hover:scale-105 transition-transform duration-200 group"
            >
              <span className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get a Consultation
              </span>
            </Button>
          </div>

          {/* Stats section */}
          <div className={`mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center group hover:scale-110 transition-transform duration-200">
              <div className="text-2xl sm:text-3xl font-bold text-gray-400 mb-2 group-hover:animate-pulse">1000+</div>
              <div className="text-sm sm:text-base text-gray-300">Chargers Installed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-200">
              <div className="text-2xl sm:text-3xl font-bold text-gray-400 mb-2 group-hover:animate-pulse">24/7</div>
              <div className="text-sm sm:text-base text-gray-300">Customer Support</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-200">
              <div className="text-2xl sm:text-3xl font-bold text-gray-400 mb-2 group-hover:animate-pulse">99%</div>
              <div className="text-sm sm:text-base text-gray-300">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;