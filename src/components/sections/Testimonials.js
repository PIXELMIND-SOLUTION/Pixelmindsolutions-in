import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, Award, CheckCircle, Users } from 'lucide-react';
import GradientText from '../ui/GradientText';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechInnovate',
    content: 'MarketPro transformed our digital presence. Our organic traffic increased by 300% in just 6 months. The team is professional, responsive, and delivers exceptional results.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?auto=format&fit=crop&w=400',
    companyLogo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w-200',
    results: ['+300% Traffic', '+150% Leads', '45% ROI Increase']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director, RetailPlus',
    content: 'Their PPC strategies cut our CAC by 60% while increasing conversion rates. The data-driven approach and constant optimization are game-changers.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
    companyLogo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=200',
    results: ['-60% CAC', '+240% Conversions', '$500K Revenue']
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, EduTech Pro',
    content: 'The content marketing strategy they developed established us as industry leaders. We now rank for 500+ keywords and see consistent monthly growth.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400',
    companyLogo: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=200',
    results: ['500+ Keywords', '1.2K Backlinks', '150K Monthly Traffic']
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'COO, FinTech Solutions',
    content: 'Their social media campaigns generated 50K qualified leads in 3 months. The ROI has been phenomenal, and their team feels like an extension of ours.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
    companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=200',
    results: ['50K Leads', '$2.15 CPL', '87% Engagement']
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Client </span>
            <GradientText>Success Stories</GradientText>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative">
            <Quote className="absolute -top-4 -left-4 h-16 w-16 text-primary-100 dark:text-primary-900" />
            
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4 }}
                className="mb-12"
              >
                <div className="glass-effect rounded-3xl p-8 md:p-12">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current"
                      />
                    ))}
                    <span className="ml-2 text-lg font-semibold">5.0</span>
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="hidden lg:flex space-x-4">
                      {testimonials[currentIndex].results.map((result, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-lg"
                        >
                          <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                            {result}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={prevSlide}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                className="p-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Testimonial Thumbnails */}
          <div className="flex justify-center space-x-4 overflow-x-auto pb-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                  currentIndex === index
                    ? 'border-primary-500 scale-110'
                    : 'border-gray-300 dark:border-gray-600 hover:border-primary-300'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, label: 'Award Winning', value: '15+ Awards' },
              { icon: CheckCircle, label: 'Client Satisfaction', value: '98%' },
              { icon: Users, label: 'Active Clients', value: '250+' },
              { icon: Star, label: 'Avg. Rating', value: '4.9/5.0' },
            ].map((badge, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
              >
                <badge.icon className="h-12 w-12 text-primary-500 mx-auto mb-4" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {badge.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {badge.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;