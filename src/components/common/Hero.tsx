import React, { useEffect, useState } from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
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
      {/* Background with video */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => console.log('Video failed to load')}
          >
            {/* Updated video paths - try multiple sources */}
            <source src="/Electric.mp4" type="video/mp4" />
            <source src="./Electric.mp4" type="video/mp4" />
            <source src="/public/Electric.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Fallback background if video doesn't load */}
          {!videoLoaded && (
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
          )}
        </div>
        
        {/* Reduced overlay opacity to make video more visible */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Moving gradient overlay - reduced opacity */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-green-600/30 animate-gradient-x"></div>
      </div>

      {/* Floating particles animation - reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-30 ${
              i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-green-400' : 'bg-purple-400'
            } ${
              i % 4 === 0 ? 'w-1 h-1' : i % 4 === 1 ? 'w-2 h-2' : i % 4 === 2 ? 'w-3 h-3' : 'w-1.5 h-1.5'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              animation: `float-${i % 4} ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Moving geometric shapes - reduced opacity */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className={`absolute border border-white/20 ${
              i % 2 === 0 ? 'rounded-full' : 'rotate-45'
            }`}
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              animation: `drift ${8 + Math.random() * 12}s linear infinite ${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Animated grid pattern - reduced opacity */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}
        />
      </div>

      {/* Main content - increased z-index */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 py-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main heading with typing animation */}
          <h1 className={`text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8 transform transition-all duration-1000 delay-300 drop-shadow-2xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            WattWay, Powering the{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text animate-gradient-x inline-block min-w-fit">
              <span className="animate-pulse">{words[currentWord]}</span>
            </span>
            <br />of your drive
          </h1>

          {/* Subtitle - enhanced visibility */}
          <p className={`text-xl sm:text-2xl text-gray-100 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 drop-shadow-lg ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            From selling and installing EV chargers to full industry consulting and charging station implementation, WattWay is your trusted EV solutions partner.
          </p>

          {/* Action buttons - enhanced styling */}
          <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-6 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button 
              variant="primary" 
              size="lg" 
              className="w-full sm:w-auto group hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
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
              className="w-full sm:w-auto text-white border-white/80 hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300 group shadow-2xl backdrop-blur-sm"
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
              className="w-full sm:w-auto hover:scale-105 transition-all duration-300 group shadow-2xl"
            >
              <span className="flex items-center justify-center sm:justify-start">
                <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get a Consultation
              </span>
            </Button>
          </div>

          {/* Stats section - enhanced visibility */}
          <div className={`mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center group hover:scale-110 transition-all duration-300 p-4 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text mb-2 group-hover:animate-pulse">1000+</div>
              <div className="text-base sm:text-lg text-gray-200 font-medium">Chargers Installed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 p-4 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2 group-hover:animate-pulse">24/7</div>
              <div className="text-base sm:text-lg text-gray-200 font-medium">Customer Support</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 p-4 rounded-lg backdrop-blur-sm bg-white/5 hover:bg-white/10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text mb-2 group-hover:animate-pulse">99%</div>
              <div className="text-base sm:text-lg text-gray-200 font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - enhanced visibility */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float-0 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0px) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(10px) translateX(-5px); }
          50% { transform: translateY(-5px) translateX(-10px); }
          75% { transform: translateY(-10px) translateX(-5px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-15px) translateX(15px) rotate(180deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(8px) translateX(-12px) scale(1.2); }
        }
        
        @keyframes drift {
          0% { transform: translateX(-100px) rotate(0deg); }
          100% { transform: translateX(calc(100vw + 100px)) rotate(360deg); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-gradient-x {
          background-size: 400% 400%;
          animation: gradient-x 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;