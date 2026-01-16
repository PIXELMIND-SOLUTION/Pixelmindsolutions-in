import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />

      {/* Animated Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
      <div
        className="absolute top-1/3 -right-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SECTION – FROM LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">
                Transform Your
              </span>
              <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Digital Presence
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We drive growth through data-driven marketing strategies,
              cutting-edge technology, and creative excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass-effect border border-gray-300 dark:border-gray-600 rounded-full font-semibold flex items-center justify-center space-x-2"
              >
                <Play size={20} />
                <span>Watch Demo</span>
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { value: '98%', label: 'Client Satisfaction' },
                { value: '250+', label: 'Projects Delivered' },
                { value: '24/7', label: 'Support' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SECTION – FROM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-3xl transform -rotate-3" />

              <div className="absolute inset-0 glass-effect rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=900&q=80"
                  alt="Digital Marketing Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
