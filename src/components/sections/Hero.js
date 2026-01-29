import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight, Sparkles, Zap, Target, BarChart3, Rocket, Shield, Users } from 'lucide-react';

// BANNER 1: MODERN DASHBOARD HERO
const Banner1 = () => {
  return (
    <section className="relative mt-8 pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #06cabc 1px, transparent 1px),
                           linear-gradient(to bottom, #06cabc 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black 55%, transparent 90%)'

        }} />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 w-32 h-32 bg-[#06cabc]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-[#06cabc]/10 rounded-full blur-3xl"
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#06cabc]/10 dark:bg-[#06cabc]/20 text-[#06cabc] dark:text-[#06cabc]/90 mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">AI-Powered Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white mb-2">
                Data-Driven
              </span>
              <span className="block bg-gradient-to-r from-[#06cabc] via-[#06a6c4] to-[#0699c4] bg-clip-text text-transparent">
                Marketing Intelligence
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Unlock growth with predictive analytics, automated insights, and real-time performance tracking.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 transition-all"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:bg-white dark:hover:bg-gray-800"
              >
                <Play size={20} />
                <span>View Demo</span>
              </motion.button>
            </div>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3">
              {['Real-time Analytics', 'AI Predictions', 'Multi-channel', 'ROI Tracking'].map((feature, i) => (
                <div key={i} className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gray-900 rounded-3xl p-1 shadow-2xl">
              {/* Mock dashboard */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray-400 ml-2 text-sm">Analytics Dashboard</span>
                  </div>
                  <div className="text-xs text-gray-400">Live Data • Updated now</div>
                </div>
                
                {/* Chart grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[65, 42, 89, 56].map((value, i) => (
                    <div key={i} className="bg-gray-900 rounded-xl p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="text-gray-400 text-xs">KPI {i+1}</div>
                          <div className="text-2xl font-bold text-white">{value}%</div>
                        </div>
                        <BarChart3 size={20} className="text-[#06cabc]" />
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="h-full bg-gradient-to-r from-[#06cabc] to-[#06a6c4] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24.5K</div>
                    <div className="text-xs text-gray-400">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">89%</div>
                    <div className="text-xs text-gray-400">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">3.2x</div>
                    <div className="text-xs text-gray-400">ROI Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// BANNER 2: CARD-BASED HERO
const Banner2 = () => {
  return (
    <section className="relative mt-8 py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Abstract background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06cabc]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06a6c4]/5 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#06cabc]/10 to-[#06a6c4]/10 dark:from-[#06cabc]/20 dark:to-[#06a6c4]/20 text-[#06cabc] dark:text-[#06cabc]/90 mb-6">
              <Zap size={16} />
              <span className="text-sm font-medium">Next Generation Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">
                Elevate Your
              </span>
              <span className="block bg-gradient-to-r from-[#06cabc] to-[#06a6c4] bg-clip-text text-transparent">
                Digital Strategy
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Comprehensive solutions that transform how you connect with customers and drive measurable results.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Target,
              title: "Precision Targeting",
              description: "Reach your ideal audience with AI-powered segmentation and behavioral analysis.",
              color: "from-[#06cabc] to-[#06a6c4]",
              delay: 0
            },
            {
              icon: Rocket,
              title: "Rapid Scaling",
              description: "Grow your campaigns efficiently with automated optimization and scaling tools.",
              color: "from-[#06cabc] to-[#0699c4]",
              delay: 0.1
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level security with SOC2 compliance and data protection guarantees.",
              color: "from-[#06cabc] to-[#06b4c4]",
              delay: 0.2
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl blur-xl" />
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${card.color}`}>
                  <card.icon size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 mt-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {card.description}
                </p>
                <button className="text-[#06cabc] dark:text-[#06cabc]/90 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] text-white font-semibold rounded-2xl shadow-xl flex items-center justify-center space-x-2"
            >
              <Users size={20} />
              <span>Join 2,000+ Companies</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl font-semibold flex items-center justify-center space-x-2 hover:border-[#06cabc] dark:hover:border-[#06cabc]"
            >
              <Play size={20} />
              <span>Watch Case Study</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// BANNER 3: MINIMAL IMAGE-FOCUSED HERO
const Banner3 = () => {
  return (
    <section className="relative min-h-screen pt-24 mt-8 flex items-center overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(6,202,188,0.1)_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-20 w-64 h-64 bg-[#06cabc]/10 rounded-full blur-3xl"
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Subtle badge */}
            <div className="absolute -top-6 -left-6">
              <div className="px-4 py-2 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] text-white rounded-full text-sm font-semibold rotate-[-4deg] shadow-lg">
                Premium Partner
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block text-gray-900 dark:text-white">
                Where
              </span>
              <span className="block text-gray-900 dark:text-white">
                Creativity
              </span>
              <span className="block bg-gradient-to-r from-[#06cabc] to-[#06a6c4] bg-clip-text text-transparent">
                Meets Results
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg">
              We blend artistic vision with data-driven strategies to create digital experiences that convert.
            </p>

            <div className="space-y-6">
              <motion.button
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full max-w-md px-8 py-5 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-2xl shadow-2xl flex items-center justify-between hover:shadow-3xl transition-all"
              >
                <span className="text-lg">Book Strategy Session</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
              </motion.button>

              {/* Stats row */}
              <div className="flex items-center gap-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                {[
                  { value: '4.9/5', label: 'Rating' },
                  { value: '48h', label: 'Response Time' },
                  { value: '200%', label: 'Avg. ROI' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                  alt="Creative workspace"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating card 1 */}
              <motion.div
                initial={{ x: -20, y: -20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] rounded-full" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Sarah Chen</div>
                    <div className="text-sm text-gray-500">Marketing Director</div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  "Increased our conversion rate by 300% in just 3 months."
                </p>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                initial={{ x: 20, y: 20 }}
                animate={{ x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] rounded-2xl p-6 shadow-2xl max-w-xs"
              >
                <div className="text-white">
                  <div className="text-2xl font-bold mb-2">89%</div>
                  <div className="text-sm opacity-90">Client Retention Rate</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Navigation Controls Component
const NavigationControls = ({ currentBanner, totalBanners, onNext, onPrev, onSelect, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all"
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onPrev}
        className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
        aria-label="Previous banner"
      >
        <ChevronLeft size={18} className="text-gray-700 dark:text-gray-300" />
      </motion.button>
      
      <div className="flex items-center gap-2">
        {Array.from({ length: totalBanners }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className="relative group"
            aria-label={`Go to banner ${index + 1}`}
          >
            <div className={`w-2 h-2 rounded-full transition-all ${
              index === currentBanner 
                ? 'bg-[#06cabc]' 
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`} />
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Banner {index + 1}
            </div>
          </button>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onNext}
        className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-shadow"
        aria-label="Next banner"
      >
        <ChevronRight size={18} className="text-gray-700 dark:text-gray-300" />
      </motion.button>
    </motion.div>
  );
};

// Banner Counter Component
const BannerCounter = ({ currentBanner, totalBanners, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-8 right-8 z-40 hidden lg:block"
    >
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">Banner</span>
          <span className="font-semibold text-[#06cabc] dark:text-[#06cabc]/90">
            {currentBanner + 1}/{totalBanners}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Keyboard Hint Component
const KeyboardHint = ({ isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 0.5 : 0,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
    >
      <div className="text-xs text-gray-500 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-3 py-1 rounded-full">
        Use ← → arrow keys to navigate
      </div>
    </motion.div>
  );
};

// MAIN HERO COMPONENT WITH CAROUSEL
const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isHeroInView, setIsHeroInView] = useState(false);
  const heroRef = useRef(null);
  
  const banners = [<Banner1 />, <Banner2 />, <Banner3 />];
  const totalBanners = banners.length;

  // Use Framer Motion's useInView hook to detect visibility
  const isInView = useInView(heroRef, {
    amount: 0.1, // Trigger when 10% of hero is visible
    once: false // Check every time it enters/exits view
  });

  // Update state when hero enters/exits viewport
  useEffect(() => {
    setIsHeroInView(isInView);
  }, [isInView]);

  // Auto-play functionality (only when hero is in view)
  useEffect(() => {
    if (!isHeroInView) return; // Don't auto-play when not visible
    
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % totalBanners);
    }, 8000);

    return () => clearInterval(interval);
  }, [isHeroInView, totalBanners]);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % totalBanners);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + totalBanners) % totalBanners);
  };

  const selectBanner = (index) => {
    setCurrentBanner(index);
  };

  // Keyboard navigation (only when hero is in view)
  useEffect(() => {
    if (!isHeroInView) return; // Don't listen to keyboard when not in view
    
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevBanner();
      if (e.key === 'ArrowRight') nextBanner();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isHeroInView]);

  return (
    <div className="relative" ref={heroRef}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {banners[currentBanner]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls (only shown when hero is in view) */}
      <NavigationControls
        currentBanner={currentBanner}
        totalBanners={totalBanners}
        onNext={nextBanner}
        onPrev={prevBanner}
        onSelect={selectBanner}
        isVisible={isHeroInView}
      />

      {/* Banner Counter (only shown when hero is in view) */}
      {/* <BannerCounter
        currentBanner={currentBanner}
        totalBanners={totalBanners}
        isVisible={isHeroInView}
      /> */}

      {/* Keyboard Hint (only shown when hero is in view) */}
      <KeyboardHint isVisible={isHeroInView} />

      {/* Scroll down hint (only when hero is in view) */}
      <motion.div
        animate={{ 
          opacity: isHeroInView ? 1 : 0,
          pointerEvents: isHeroInView ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-gray-400 dark:text-gray-500"
        >
          Scroll down
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;