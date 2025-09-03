import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Grid, List, ArrowRight } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ProductCard from '../components/products/ProductCard';
import ProductFilter from '../components/products/ProductFilter';
import { PRODUCTS } from '../utils/constants';

const ProductsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesFilter = filter === 'all' || product.type === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: "50+", label: "Products Available" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5★", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 bg-[#0b1d3a]-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[#0b1d3a]"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mt-4 mb-6 text-slate-200">
              Our <span className="text-green-600">Products</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
              High-quality EV chargers for every need — from compact home units to powerful commercial stations.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{itemVariants}}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-300 mb-2">{stat.number}</div>
                <div className="text-slate-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <main className="flex-grow py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <motion.div 
            className="mb-12 bg-white border border-slate-200 rounded-2xl p-6 sticky top-4 z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-4">
                {/* Filter Toggle */}
                <motion.button
                  className="flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-xl hover:bg-[#0b1d3a]-50 transition-colors duration-300"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Filter className="w-5 h-5" />
                  Filters
                </motion.button>

                {/* View Mode Toggle */}
                <div className="flex border border-slate-300 rounded-xl overflow-hidden">
                  <motion.button
                    className={`p-3 ${viewMode === 'grid' ? 'bg-white text-white' : 'bg-white text-slate-600 hover:bg-[#0b1d3a]-50'} transition-colors duration-300`}
                    onClick={() => setViewMode('grid')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Grid className="w-5 h-5" />
                  </motion.button>
                  <motion.button
                    className={`p-3 ${viewMode === 'list' ? 'bg-white-600 text-white' : 'bg-white text-slate-600 hover:bg-[#0b1d3a]-50'} transition-colors duration-300`}
                    onClick={() => setViewMode('list')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <List className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Expandable Filter */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-slate-200"
                >
                  <ProductFilter onFilterChange={setFilter} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Results Header */}
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Showing {filteredProducts.length} Products
            </h2>
            {searchTerm && (
              <p className="text-slate-600">
                for "<span className="font-medium text-gray-600">{searchTerm}</span>"
              </p>
            )}
          </motion.div>

          {/* Products Grid/List */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${filter}-${viewMode}-${searchTerm}`}
              className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={{itemVariants}}
                    layout
                    className="transform hover:scale-[1.02] transition-all duration-300"
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-16"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-24 h-24 bg-[#0b1d3a]-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No products found</h3>
                  <p className="text-slate-600 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <motion.button
                    className="px-6 py-3 bg-white-600 text-white rounded-xl hover:bg-white-700 transition-colors duration-300"
                    onClick={() => {
                      setSearchTerm('');
                      setFilter('all');
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Clear Filters
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Load More */}
          {filteredProducts.length > 0 && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.button 
                className="group inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-600 font-semibold rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          )}
        </div>
      </main>

      {/* Featured Section */}
      <motion.section 
        className="py-16 bg-[#0b1d3a]-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Need Help Choosing?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Our experts can help you find the perfect EV charging solution for your specific needs.
            </p>
            <motion.button 
              className="group inline-flex items-center px-8 py-4 bg-white-600 text-white font-semibold rounded-xl hover:bg-white-700 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Expert Advice
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;