import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, Share2, Target, PenTool, Mail, BarChart3,
  CheckCircle, Clock, Users, Award, Zap, TrendingUp,
  ArrowRight, ChevronRight, Shield, PieChart,
  Calendar, Sparkles, Globe, Rocket, Brain, Monitor,
  BarChart, Cpu, MessageSquare, Filter,
  ExternalLink
} from 'lucide-react';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredService, setHoveredService] = useState(null);

  const allServices = [
    {
      id: 1,
      icon: Search,
      title: 'SEO Optimization',
      category: 'search',
      description: 'Improve your search rankings and drive organic traffic with comprehensive SEO strategies.',
      features: [
        'Keyword Research & Analysis',
        'On-Page SEO Optimization',
        'Technical SEO Audit',
        'Link Building Strategy',
        'Local SEO Optimization',
        'SEO Performance Tracking'
      ],
      results: ['+300% Organic Traffic', '+150% Keyword Rankings', '-40% Bounce Rate'],
      color: 'from-[#06cabc] to-[#06a6c4]',
      duration: '3-6 Months',
      price: 'Starting at $1,500/month',
      popular: true
    },
    {
      id: 2,
      icon: Share2,
      title: 'Social Media Marketing',
      category: 'social',
      description: 'Engage your audience and build brand presence across all major social platforms.',
      features: [
        'Platform Strategy Development',
        'Content Creation & Scheduling',
        'Community Management',
        'Influencer Partnerships',
        'Social Advertising',
        'Performance Analytics'
      ],
      results: ['+85% Engagement Rate', '50K+ Followers Growth', '-30% Cost per Engagement'],
      color: 'from-[#06cabc] to-[#0699c4]',
      duration: 'Ongoing',
      price: 'Starting at $2,000/month',
      popular: true
    },
    {
      id: 3,
      icon: Target,
      title: 'PPC Advertising',
      category: 'ads',
      description: 'Maximize ROI with targeted pay-per-click campaigns on Google, Facebook, and LinkedIn.',
      features: [
        'Campaign Strategy & Setup',
        'Keyword & Audience Research',
        'Ad Copy Creation',
        'Landing Page Optimization',
        'Bid Management',
        'ROI Tracking & Reporting'
      ],
      results: ['+240% Conversion Rate', '-60% Cost per Acquisition', '450% ROI'],
      color: 'from-[#06cabc] to-[#06b4c4]',
      duration: '1-3 Months',
      price: 'Starting at $1,800/month + ad spend',
      popular: true
    },
    {
      id: 4,
      icon: PenTool,
      title: 'Content Marketing',
      category: 'content',
      description: 'Create compelling content that resonates with your audience and drives conversions.',
      features: [
        'Content Strategy Development',
        'Blog Post Creation',
        'Video Content Production',
        'Infographic Design',
        'Content Distribution',
        'Performance Measurement'
      ],
      results: ['+500% Content Engagement', '120+ Backlinks', '75% Lead Quality Improvement'],
      color: 'from-[#06cabc] to-[#06dac4]',
      duration: 'Ongoing',
      price: 'Starting at $2,500/month'
    },
    {
      id: 5,
      icon: Mail,
      title: 'Email Marketing',
      category: 'email',
      description: 'Nurture leads and retain customers with personalized email campaigns.',
      features: [
        'Email Strategy Development',
        'List Segmentation',
        'Automated Workflows',
        'Template Design',
        'A/B Testing',
        'Performance Analytics'
      ],
      results: ['+42% Open Rates', '+35% Revenue Growth', '+18% Click-through Rates'],
      color: 'from-[#06cabc] to-[#06e4c4]',
      duration: 'Ongoing',
      price: 'Starting at $1,200/month'
    },
    {
      id: 6,
      icon: BarChart3,
      title: 'Web Analytics',
      category: 'analytics',
      description: 'Gain insights from your data to make informed marketing decisions.',
      features: [
        'Google Analytics Setup',
        'Custom Dashboard Creation',
        'Conversion Tracking',
        'User Behavior Analysis',
        'KPI Definition & Tracking',
        'Monthly Reporting'
      ],
      results: ['-80% Reporting Time', '+99% Data Accuracy', '15+ Data Sources Integrated'],
      color: 'from-[#06cabc] to-[#06f4c4]',
      duration: '1 Month Setup',
      price: 'Starting at $1,000/month'
    },
    {
      id: 7,
      icon: Shield,
      title: 'Reputation Management',
      category: 'reputation',
      description: 'Build and protect your brand reputation across digital channels.',
      features: [
        'Online Review Management',
        'Brand Monitoring',
        'Crisis Management',
        'Positive Content Promotion',
        'Review Response Strategy',
        'Reputation Score Tracking'
      ],
      results: ['+4.8/5 Avg Rating', '95% Positive Reviews', '-60% Response Time'],
      color: 'from-[#06cabc] to-[#0694c4]',
      duration: 'Ongoing',
      price: 'Starting at $1,500/month'
    },
    {
      id: 8,
      icon: Cpu,
      title: 'AI Marketing',
      category: 'ai',
      description: 'Leverage artificial intelligence for predictive analytics and automation.',
      features: [
        'Predictive Analytics',
        'Chatbot Implementation',
        'Personalization Engines',
        'Automated Campaigns',
        'Sentiment Analysis',
        'ROI Optimization'
      ],
      results: ['+65% Efficiency', '+40% Conversion Lift', '-50% Manual Work'],
      color: 'from-[#06cabc] to-[#0684c4]',
      duration: '2-4 Months',
      price: 'Starting at $3,000/month',
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe, count: allServices.length },
    { id: 'search', name: 'SEO', icon: Search, count: allServices.filter(s => s.category === 'search').length },
    { id: 'social', name: 'Social Media', icon: Share2, count: allServices.filter(s => s.category === 'social').length },
    { id: 'ads', name: 'PPC', icon: Target, count: allServices.filter(s => s.category === 'ads').length },
    { id: 'content', name: 'Content', icon: PenTool, count: allServices.filter(s => s.category === 'content').length },
    { id: 'ai', name: 'AI Marketing', icon: Cpu, count: allServices.filter(s => s.category === 'ai').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, count: allServices.filter(s => s.category === 'analytics').length },
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeTab);

  return (
    <div className="pt-2 min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06cabc]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06a6c4]/10 rounded-full blur-3xl" />
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, #06cabc 1px, transparent 1px),
                               linear-gradient(to bottom, #06cabc 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }} />
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#06cabc]/10 to-[#06a6c4]/10 dark:from-[#06cabc]/20 dark:to-[#06a6c4]/20 text-[#06cabc] dark:text-[#06cabc]/90 mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Premium Solutions</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="block text-gray-900 dark:text-white mb-4">
                Digital
              </span>
              <span className="block bg-gradient-to-r from-[#06cabc] via-[#06a6c4] to-[#0699c4] bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Transform your business with cutting-edge digital marketing strategies that deliver measurable growth and sustainable success.
            </p>

            {/* Floating Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { icon: Rocket, value: '98%', label: 'Success Rate' },
                { icon: TrendingUp, value: '450%', label: 'Avg. ROI' },
                { icon: Users, value: '250+', label: 'Happy Clients' },
                { icon: Award, value: '15+', label: 'Awards' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg"
                >
                  <stat.icon className="h-8 w-8 text-[#06cabc] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
            >
              <Calendar size={20} />
              <span>Book Free Strategy Session</span>
              <ArrowRight size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Fixed Filter */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fixed Filter Header */}
          <div className="top-24 z-30 mb-12 pt-6 pb-8 bg-gradient-to-b from-white/95 via-white/90 to-transparent dark:from-gray-900/95 dark:via-gray-900/90 dark:to-transparent backdrop-blur-md -mx-4 px-4 sm:mx-0 sm:px-0 sm:rounded-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-[#06cabc]/10 to-[#06a6c4]/10 dark:from-[#06cabc]/20 dark:to-[#06a6c4]/20 rounded-lg">
                  <Filter size={20} className="text-[#06cabc] dark:text-[#06cabc]/90" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Our Services
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Filter by category
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredServices.length} of {allServices.length} services
                </span>
                
                {/* Active Category Indicator */}
                <motion.div
                  layoutId="activeIndicator"
                  className="hidden sm:block px-3 py-1.5 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] text-white text-sm font-medium rounded-full"
                >
                  {categories.find(c => c.id === activeTab)?.name}
                </motion.div>
              </div>
            </motion.div>

            {/* Category Chips */}
            <div className="mt-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeTab === category.id;
                  
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveTab(category.id)}
                      className={`group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${
                        isActive
                          ? 'text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:text-[#06cabc] dark:hover:text-[#06cabc]/90 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] rounded-xl z-[-1]"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      <Icon size={18} />
                      <span>{category.name}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        isActive
                          ? 'bg-white/20'
                          : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-[#06cabc]/10 dark:group-hover:bg-[#06cabc]/20'
                      }`}>
                        {category.count}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="relative group"
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <div className="px-3 py-1.5 bg-gradient-to-r from-yellow-500 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg">
                        Popular
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-3xl border border-[#06cabc]/20">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 p-1 bg-gradient-to-r ${service.color} rounded-3xl`}>
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl h-full flex flex-col">
                      
                      {/* Icon & Header */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}
                        >
                          <service.icon className="h-7 w-7 text-white" />
                        </motion.div>
                        
                        {/* Duration */}
                        <div className="text-right">
                          <div className="text-xs text-gray-500 dark:text-gray-400">Duration</div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">{service.duration}</div>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                        {service.description}
                      </p>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-lg"
                            >
                              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div className="mb-6">
                        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Typical Results</div>
                        <div className="grid grid-cols-3 gap-2">
                          {service.results.map((result, idx) => (
                            <div key={idx} className="text-center p-2 bg-gradient-to-b from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-lg">
                              <div className="text-sm font-bold text-gray-900 dark:text-white">{result}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Starting at</div>
                            <div className="text-lg font-bold bg-gradient-to-r from-[#06cabc] to-[#06a6c4] bg-clip-text text-transparent">
                              {service.price}
                            </div>
                          </div>
                          
                          <Link to={`/service/${service.id}`}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-6 py-3 bg-gradient-to-r from-gray-900 to-black dark:from-white dark:to-gray-100 text-white dark:text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                            >
                              <span>Learn More</span>
                              <ArrowRight size={16} />
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-[#06cabc]/10 via-transparent to-transparent pointer-events-none rounded-3xl"
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter size={40} className="text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                No Services Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try selecting a different category or view all services
              </p>
              <button
                onClick={() => setActiveTab('all')}
                className="px-6 py-3 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                View All Services
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#06cabc]/10 to-[#06a6c4]/10 dark:from-[#06cabc]/20 dark:to-[#06a6c4]/20 text-[#06cabc] dark:text-[#06cabc]/90 mb-6">
              <Brain size={16} />
              <span className="text-sm font-medium">Our Methodology</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="block text-gray-900 dark:text-white">The </span>
              <span className="block bg-gradient-to-r from-[#06cabc] to-[#06a6c4] bg-clip-text text-transparent">
                PixelMind Process
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#06cabc] via-[#06a6c4] to-[#0699c4]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: 1,
                  title: 'Discovery & Analysis',
                  description: 'Deep dive into your business, competitors, and market opportunities.',
                  icon: Search,
                  color: 'from-[#06cabc] to-[#06a6c4]'
                },
                {
                  step: 2,
                  title: 'Strategy Development',
                  description: 'Custom strategy crafted for your specific goals and audience.',
                  icon: Target,
                  color: 'from-[#06cabc] to-[#0699c4]'
                },
                {
                  step: 3,
                  title: 'Implementation',
                  description: 'Precision execution with ongoing optimization and monitoring.',
                  icon: Zap,
                  color: 'from-[#06cabc] to-[#06b4c4]'
                },
                {
                  step: 4,
                  title: 'Growth & Scaling',
                  description: 'Continuous optimization and scaling for maximum impact.',
                  icon: TrendingUp,
                  color: 'from-[#06cabc] to-[#06dac4]'
                },
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-xl z-10">
                    <span className="text-lg font-bold bg-gradient-to-r from-[#06cabc] to-[#06a6c4] bg-clip-text text-transparent">
                      {process.step}
                    </span>
                  </div>
                  
                  {/* Card */}
                  <div className="pt-10">
                    <div className={`p-8 rounded-3xl bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-2xl`}>
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                        <process.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-center">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06cabc] via-[#06a6c4] to-[#0699c4]" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-white/90 mb-12">
                Join industry leaders who trust PixelMindSolutions with their digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-[#06cabc] font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center gap-3"
                  >
                    <MessageSquare size={20} />
                    <span>Start Conversation</span>
                  </motion.button>
                </Link>
                
                <Link to="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-3"
                  >
                    <ExternalLink size={20} />
                    <span>View Case Studies</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;