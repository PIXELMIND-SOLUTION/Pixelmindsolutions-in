import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Share2,
  Target,
  PenTool,
  Mail,
  BarChart,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Improve your search rankings and drive organic traffic with our comprehensive SEO strategies.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Engage your audience and build brand presence across all major social platforms.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Target,
    title: 'PPC Advertising',
    description:
      'Maximize ROI with targeted pay-per-click campaigns on Google, Facebook, and LinkedIn.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: PenTool,
    title: 'Content Marketing',
    description:
      'Create compelling content that resonates with your audience and drives conversions.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description:
      'Nurture leads and retain customers with personalized email campaigns.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: BarChart,
    title: 'Web Analytics',
    description:
      'Gain insights from your data to make informed marketing decisions.',
    color: 'from-indigo-500 to-blue-500',
  },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 60,
    x: i % 2 === 0 ? -40 : 40,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Our </span>
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            High-impact digital marketing solutions designed to grow your brand
            and maximize ROI
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ y: -12 }}
              className="relative group"
            >
              {/* Glow Layer */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 blur-xl transition duration-500 rounded-3xl`}
              />

              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-2xl transition-all duration-500 flex flex-col">
                
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center font-semibold text-primary-600 dark:text-primary-400 group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All Services
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
