import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Zap, Shield, Clock, Users } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ServiceCard from '../components/services/ServiceCard';
import { SERVICES } from '../utils/constants';

const ServicesPage: React.FC = () => {
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Installation',
      description: 'Quick and efficient setup by certified professionals',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Warranty Protected',
      description: 'Comprehensive warranty coverage for peace of mind',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Certified technicians with years of experience',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <motion.section
        className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[#0b1d3a]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-slate-200 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="text-green-600">Services</span>
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-slate-400 mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive EV solutions tailored to your needs — from installation to full-scale
              implementation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-4 focus:ring-green-600 focus:outline-none">
                <a href="/contact" className="flex items-center gap-2">
                Get Started Today
                </a>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl hover:border-green-200 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0b1d3a]-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 text-slate-700 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Service Categories */}
      <main className="flex-grow py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-800">
              Service <span className="text-green-600">Categories</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Explore our comprehensive range of EV charging solutions designed for every
              requirement.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8 sm:space-y-12 lg:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="transform hover:scale-[1.01] transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* CTA Section */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 bg-[#0b1d3a] text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern (fixed escaping) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Get <span className="text-green-600">Started?</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Contact us today to discuss your EV charging needs and get a custom solution.
            </p>
            <motion.button
              className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-slate-900 font-semibold rounded-xl hover:bg-green-300 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-green-300 focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact" className="flex items-center gap-2">
              Contact Us Now
              </a>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
              