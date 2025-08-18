import React, { useState } from 'react';
import Button from '../common/Button';

interface ProductFilterProps {
  onFilterChange: (filter: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Button 
        variant={activeFilter === 'all' ? 'primary' : 'outline'} 
        size="sm"
        onClick={() => handleFilterClick('all')}
      >
        All Products
      </Button>
      <Button 
        variant={activeFilter === 'home' ? 'primary' : 'outline'} 
        size="sm"
        onClick={() => handleFilterClick('home')}
      >
        Home Chargers
      </Button>
      <Button 
        variant={activeFilter === 'commercial' ? 'primary' : 'outline'} 
        size="sm"
        onClick={() => handleFilterClick('commercial')}
      >
        Commercial Chargers
      </Button>
    </div>
  );
};

export default ProductFilter;