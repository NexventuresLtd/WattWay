import React, { useState } from 'react';
import { type Testimonial } from '../../types';

interface TestimonialProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden ${
        isHovered ? 'scale-105' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-green-500">
          <circle cx="50" cy="20" r="8"/>
          <circle cx="20" cy="50" r="8"/>
          <circle cx="80" cy="50" r="8"/>
          <circle cx="50" cy="80" r="8"/>
        </svg>
      </div>

      {/* Quote icon with animation */}
      <div className="mb-6 relative">
        <div className={`w-12 h-12 bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'bg-green-500 text-white' : 'text-green-500'
        }`}>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
      </div>

      {/* Star rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i}
            className={`w-5 h-5 transition-colors duration-300 ${
              isHovered ? 'text-yellow-400' : 'text-green-500'
            }`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote text with improved typography */}
      <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative">
        <span className="text-3xl text-green-500 absolute -top-2 -left-2 opacity-20">"</span>
        <p className="italic font-medium">{testimonial.quote}</p>
        <span className="text-3xl text-green-500 absolute -bottom-4 right-2 opacity-20">"</span>
      </blockquote>

      {/* Author info with avatar placeholder */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
          {testimonial.author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
          {testimonial.position && (
            <div className="text-green-600 font-medium text-sm">{testimonial.position}</div>
          )}
        </div>
      </div>

      {/* Animated border on hover */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-green-500 opacity-0 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

export default TestimonialCard;