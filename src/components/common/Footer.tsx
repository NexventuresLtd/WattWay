import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Scroll visibility for back to top
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const quickLinks = [
    { name: 'Home', path: '/'},
    { name: 'Services', path: '/services'},
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' }
  ];

  const supportLinks = [
    { name: 'Contact Us', path: '/contact',},
    { name: 'FAQs', path: '/faq'},
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' }
  ];

  const socialLinks = [
    { name: 'Twitter', url: '#', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', color: 'bg-gray-600 hover:bg-gray-600' },
    { name: 'LinkedIn', url: '#', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-4 0 2 2 0 014 0z', color: 'bg-gray-600 hover:bg-gray-600' },
    { name: 'Instagram', url: '#', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01 M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z', color: 'bg-gray-600 hover:bg-gray-600' },
    { name: 'YouTube', url: '#', icon: 'M23 12s0-3.85-.46-5.58c-.25-.95-.98-1.69-1.94-1.94C18.88 4 12 4 12 4s-6.88 0-8.6.48c-.96.25-1.69.99-1.94 1.94C1 8.15 1 12 1 12s0 3.85.46 5.58c.25.96.98 1.69 1.94 1.94C5.12 20 12 20 12 20s6.88 0 8.6-.48c.96-.25 1.69-.98 1.94-1.94C23 15.85 23 12 23 12zM10 15.5V8.5l6 3.5-6 3.5z', color: 'bg-gray-600 hover:bg-gray-600' }
  ];

  const chargingStations = [
    { location: 'Norrsken Kigali', status: 'online', count: 2 },
    { location: 'Kigali Airport', status: 'Coming soon', count: 2 },
    { location: 'Kimironko', status: 'Coming soon', count: 2 },
    { location: 'Nyarutarama', status: 'Coming soon', count: 3 }
  ];

  return (
    <footer className="bg-[#0b1d3a] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gray-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Electric Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10h5m5 0h5m5 0h5M10 0v5m0 5v5m0 5v5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Real-time Charging Station Status */}
        <div className="mb-12 p-6 bg-[#0b1d3a]/50 rounded-2xl backdrop-blur-sm border border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse mr-3"></div>
              Live Station Status
            </h3>
            <div className="text-sm text-gray-400">
              Updated: {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {chargingStations.map((station) => (
              <div key={station.location} className="bg-[#0b1d3a]/50 rounded-lg p-4 hover:bg-[#0b1d3a]/70 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-medium text-sm">{station.location}</h5>
                  <div className={`w-2 h-2 rounded-full ${
                    station.status === 'online' ? 'bg-gray-500 animate-pulse' : 
                    station.status === 'maintenance' ? 'bg-yellow-500 animate-pulse' : 'bg-red-500'
                  }`}></div>
                </div>
                <div className="text-xs text-gray-400 capitalize">{station.status}</div>
                <div className="text-lg font-bold text-gray-400">{station.count} <span className="text-xs font-normal">stations</span></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4 relative flex flex-col items-start">
            <div className="relative">
            <img
              src="/enebula.png"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ml-8 object-contain transform scale-200 sm:scale-150 md:scale-250"
            />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We're building the future of sustainable transportation with smart charging solutions, renewable energy integration, and cutting edge technology.
            </p>

            {/* Social Links */}
            <div className="space-y-4">
              <h5 className="font-semibold text-sm uppercase tracking-wider text-gray-400">Connect With Us</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <button
                    key={social.name}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={social.icon} />
                    </svg>
                  </button>
                ))}
              </div>
              {hoveredSocial && (
                <p className="text-sm text-gray-400 animate-pulse">Follow us on {hoveredSocial}</p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-3 h-3 bg-gray-500 rounded-full mr-3 animate-pulse"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-3 hover:translate-x-2 group p-2 rounded-lg hover:bg-[#0b1d3a]/50"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                    </svg>
                    <span className="group-hover:font-medium transition-all">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-3 h-3 bg-gray-500 rounded-full mr-3 animate-pulse"></span>
              Support
            </h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-3 hover:translate-x-2 group p-2 rounded-lg hover:bg-[#0b1d3a]/50"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
                    </svg>
                    <span className="group-hover:font-medium transition-all">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3 animate-pulse"></span>
              Contact
            </h4>
            <div className="space-y-6">
              <div className="group hover:translate-x-2 transition-transform duration-200">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#0b1d3a]/50 transition-colors">
                  <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <address className="text-gray-300 not-italic">
                    <p className="font-medium">Norrsken House</p>
                    <p className="text-sm">Kigali, Rwanda</p>
                  </address>
                </div>
              </div>
              
              <div className="group hover:translate-x-2 transition-transform duration-200">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#0b1d3a]/50 transition-colors">
                  <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 font-medium">24/7 Support</p>
                    <p className="text-gray-300 text-sm">+250 787 570 975</p>
                  </div>
                </div>
              </div>
              
              <div className="group hover:translate-x-2 transition-transform duration-200">
                <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#0b1d3a]/50 transition-colors">
                  <svg className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 font-medium">Email Us</p>
                    <a href="mailto:info@enebula.rw" className="text-gray-300 hover:text-gray-400 transition-colors duration-200 text-sm">
                      info@enebula.rw
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Enebula. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
                  <span className="text-gray-400 text-xs">Service Status: Online</span>
                </div>
                <span className="text-gray-600">•</span>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></span>
                  <span className="text-gray-400 text-xs">API: Operational</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-gray-400 text-xs">
                Built by Nexventures Ltd
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Carbon Neutral</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-green-600 to-green-600 text-white rounded-full hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
        </button>
      )}
    </footer>
  );
};

export default Footer;
