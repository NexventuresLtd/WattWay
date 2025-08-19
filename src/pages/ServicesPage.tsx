import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Clock, Users } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ServiceCard from '../components/services/ServiceCard';
import { SERVICES } from '../utils/constants';

const ServicesPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Installation",
      description: "Quick and efficient setup by certified professionals"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Warranty Protected",
      description: "Comprehensive warranty coverage for peace of mind"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Certified technicians with years of experience"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 bg-slate-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={{itemVariants}}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="text-gray-600">Services</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive EV solutions tailored to your needs — from installation to full-scale implementation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="group inline-flex items-center px-8 py-4 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16 bg-white"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group p-6 bg-white border border-slate-200 rounded-xl hover:border-gray-300 transition-all duration-300 hover:transform hover:scale-105"
                variants={{itemVariants}}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-600 group-hover:bg-gray-600 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <main className="flex-grow py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Service Categories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our comprehensive range of EV charging solutions designed for every requirement.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-6xl mx-auto space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={{itemVariants}}
                className="transform hover:scale-[1.02] transition-all duration-300"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-slate-900 text-white"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your EV charging needs and get a custom solution.
            </p>
            <motion.button 
              className="group inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
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