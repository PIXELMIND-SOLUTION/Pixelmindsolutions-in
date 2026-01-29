import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  CheckCircle, 
  Users, 
  TrendingUp,
  Sparkles,
  Zap,
  Target,
  Medal,
  Globe
} from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechInnovate',
    content: 'MarketPro transformed our digital presence. Our organic traffic increased by 300% in just 6 months. The team is professional, responsive, and delivers exceptional results.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?auto=format&fit=crop&w=400',
    timeline: 'Q3 2023',
    results: [
      { value: '300%', label: 'Traffic Growth', icon: TrendingUp },
      { value: '45%', label: 'ROI Increase', icon: TrendingUp },
      { value: '98%', label: 'Satisfaction', icon: CheckCircle }
    ],
    color: 'from-[#06cabc] to-[#06a6c4]'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director, RetailPlus',
    content: 'Their PPC strategies cut our CAC by 60% while increasing conversion rates. The data-driven approach and constant optimization are game-changers.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
    timeline: 'Q1 2024',
    results: [
      { value: '60%', label: 'Cost Reduction', icon: TrendingUp },
      { value: '240%', label: 'Conversions', icon: TrendingUp },
      { value: '$500K', label: 'Revenue', icon: TrendingUp }
    ],
    color: 'from-[#06cabc] to-[#0699c4]'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder, EduTech Pro',
    content: 'The content marketing strategy they developed established us as industry leaders. We now rank for 500+ keywords and see consistent monthly growth.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400',
    timeline: 'Q4 2023',
    results: [
      { value: '500+', label: 'Keywords', icon: Target },
      { value: '1.2K', label: 'Backlinks', icon: TrendingUp },
      { value: '150K', label: 'Monthly Traffic', icon: TrendingUp }
    ],
    color: 'from-[#06cabc] to-[#06b4c4]'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'COO, FinTech Solutions',
    content: 'Their social media campaigns generated 50K qualified leads in 3 months. The ROI has been phenomenal, and their team feels like an extension of ours.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
    timeline: 'Q2 2024',
    results: [
      { value: '50K', label: 'Leads', icon: Users },
      { value: '$2.15', label: 'CPL', icon: TrendingUp },
      { value: '87%', label: 'Engagement', icon: TrendingUp }
    ],
    color: 'from-[#06cabc] to-[#06dac4]'
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying || !isInView) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, isInView]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06cabc]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06a6c4]/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Quotes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-[#06cabc]/10 dark:text-[#06cabc]/10"
          initial={{ 
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            rotate: Math.random() * 360,
            scale: 0
          }}
          animate={{ 
            rotate: [0, 360],
            scale: [0, 1, 0],
            x: [null, `calc(${Math.random() * 100}vw + ${Math.random() * 100}px)`],
            y: [null, `calc(${Math.random() * 100}vh + ${Math.random() * 100}px)`],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Quote size={40} />
        </motion.div>
      ))}

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#06cabc]/10 to-[#06a6c4]/10 dark:from-[#06cabc]/20 dark:to-[#06a6c4]/20 text-[#06cabc] dark:text-[#06cabc]/90 mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Client Love</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white">Real</span>
            <span className="block bg-gradient-to-r from-[#06cabc] via-[#06a6c4] to-[#0699c4] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we've helped businesses achieve remarkable growth and transformation.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Timeline Sidebar */}
          <div className="lg:w-1/3 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#06cabc]/30 via-[#06a6c4]/30 to-transparent" />
            
            {/* Timeline Points */}
            <div className="relative space-y-12 pl-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.1, duration: 0.5 }
                  } : {}}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative cursor-pointer group ${
                    currentIndex === index ? 'scale-105' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-gradient-to-r from-[#06cabc] to-[#06a6c4] scale-125 ring-4 ring-[#06cabc]/30'
                      : 'bg-gray-300 dark:bg-gray-600 group-hover:bg-[#06cabc]'
                  }`} />

                  {/* Timeline Card */}
                  <div className={`p-4 rounded-2xl transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700'
                      : 'bg-white/50 dark:bg-gray-800/50 group-hover:bg-white dark:group-hover:bg-gray-800'
                  }`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-700 shadow-lg">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.timeline}
                        </p>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={`${
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Main Testimonial Display */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 30, rotateX: 5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -30, rotateX: -5 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 p-1 bg-gradient-to-r ${currentTestimonial.color} rounded-3xl`}>
                    <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative p-8 md:p-12">
                    {/* Quote Icon */}
                    <div className="mb-8">
                      <Quote className="h-16 w-16 text-[#06cabc]/20 dark:text-[#06cabc]/30" />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 mb-10 leading-relaxed">
                      "{currentTestimonial.content}"
                    </p>

                    {/* Client Info & Results */}
                    <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
                      {/* Client Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                            <img
                              src={currentTestimonial.image}
                              alt={currentTestimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {currentTestimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {currentTestimonial.role}
                          </p>
                          <div className="flex items-center gap-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className="text-yellow-400 fill-current"
                              />
                            ))}
                            <span className="ml-2 font-semibold text-gray-900 dark:text-white">5.0</span>
                          </div>
                        </div>
                      </div>

                      {/* Results Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {currentTestimonial.results.map((result, index) => (
                          <motion.div
                            key={result.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-lg"
                          >
                            <result.icon className="h-6 w-6 text-[#06cabc] mx-auto mb-2" />
                            <div className="text-xl font-bold text-gray-900 dark:text-white">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {result.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </motion.button>
                  
                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentIndex === index
                            ? 'w-8 bg-gradient-to-r from-[#06cabc] to-[#06a6c4]'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className="p-3 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Medal, label: 'Award Winning', value: '15+ Awards', color: 'from-[#06cabc] to-[#06a6c4]' },
              { icon: Users, label: 'Happy Clients', value: '250+', color: 'from-[#06cabc] to-[#0699c4]' },
              { icon: Globe, label: 'Global Reach', value: '45+ Countries', color: 'from-[#06cabc] to-[#06b4c4]' },
              { icon: Zap, label: 'Success Rate', value: '98%', color: 'from-[#06cabc] to-[#06dac4]' },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity`} />
                <div className="relative p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${metric.color} mb-4`}>
                    <metric.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;