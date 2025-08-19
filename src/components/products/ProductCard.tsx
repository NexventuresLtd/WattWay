import React, { useState } from 'react';
import type { Product } from '../../types';
import Button from '../common/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
if (!isNaN(value)) {
      setQuantity(Math.max(1, value));
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
            {product.power}kW
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        
        {product.features && (
          <ul className="mb-4 space-y-1">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-4 h-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">${product.price.toLocaleString()}</span>
          
          {product.type === 'home' ? (
            <div className="flex items-center space-x-4">
              <input 
                type="number" 
                min="1" 
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 px-2 py-1 border rounded text-center"
              />
              <Button variant="primary" size="sm">
                Add to Cart
              </Button>
            </div>
          ) : (
            <Button variant="primary" size="sm">
              Request Quote
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;