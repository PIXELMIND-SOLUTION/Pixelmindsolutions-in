import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Filter,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Target,
  BarChart,
  ArrowRight,
  Sparkles,
  Zap,
  ChevronRight,
  Search,
  Share2,
  Mail,
  Globe,
  Rocket,
  MessageSquare,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredCase, setHoveredCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Global E-commerce Transformation',
      category: 'SEO & PPC',
      client: 'FashionForward Inc.',
      industry: 'Fashion Retail',
      duration: '12 Months',
      challenge: 'Low organic visibility and inefficient ad spend resulting in high customer acquisition costs.',
      solution: 'Comprehensive SEO overhaul combined with data-driven PPC strategy and conversion optimization.',
      results: [
        { icon: TrendingUp, label: 'Revenue Growth', value: '+325%', color: 'from-emerald-500 to-teal-500' },
        { icon: Users, label: 'New Customers', value: '45K+', color: 'from-cyan-500 to-teal-400' },
        { icon: DollarSign, label: 'ROI', value: '480%', color: 'from-teal-500 to-cyan-400' },
        { icon: BarChart, label: 'Traffic', value: '+280%', color: 'from-teal-400 to-cyan-500' },
      ],
      timeline: [
        { month: 'Month 1-3', task: 'Technical SEO Audit' },
        { month: 'Month 4-6', task: 'PPC Campaign Launch' },
        { month: 'Month 7-9', task: 'Conversion Optimization' },
        { month: 'Month 10-12', task: 'Scaling & Automation' },
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200',
      color: 'from-teal-500 to-cyan-500',
      tags: ['E-commerce', 'International', 'Growth'],
      featured: true,
    },
    {
      id: 2,
      title: 'SaaS Market Domination',
      category: 'Content Marketing',
      client: 'CloudTech Solutions',
      industry: 'SaaS',
      duration: '8 Months',
      challenge: 'Low brand authority and poor content engagement in a competitive B2B market.',
      solution: 'Authority-driven content strategy with technical SEO and data storytelling.',
      results: [
        { icon: TrendingUp, label: 'Organic Traffic', value: '+420%', color: 'from-emerald-500 to-teal-500' },
        { icon: Users, label: 'Enterprise Sign-ups', value: '12K+', color: 'from-cyan-500 to-teal-400' },
        { icon: DollarSign, label: 'MRR Growth', value: '+200%', color: 'from-teal-500 to-cyan-400' },
        { icon: Target, label: 'Keyword Ranked', value: 'Top 10', color: 'from-teal-400 to-cyan-500' },
      ],
      timeline: [
        { month: 'Month 1-2', task: 'Content Audit & Strategy' },
        { month: 'Month 3-4', task: 'Technical SEO Implementation' },
        { month: 'Month 5-6', task: 'Content Production' },
        { month: 'Month 7-8', task: 'Performance Scaling' },
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200',
      color: 'from-teal-500 to-cyan-500',
      tags: ['B2B', 'SaaS', 'Content'],
    },
    {
      id: 3,
      title: 'Local to National Growth',
      category: 'Social Media',
      client: 'UrbanBrew Coffee',
      industry: 'Food & Beverage',
      duration: '6 Months',
      challenge: 'Limited brand reach and low social engagement affecting store foot traffic.',
      solution: 'Influencer-driven social campaigns with user-generated content strategy.',
      results: [
        { icon: TrendingUp, label: 'Social Engagement', value: '+650%', color: 'from-emerald-500 to-teal-500' },
        { icon: Users, label: 'Instagram Followers', value: '85K+', color: 'from-cyan-500 to-teal-400' },
        { icon: DollarSign, label: 'Store Sales', value: '+180%', color: 'from-teal-500 to-cyan-400' },
        { icon: Share2, label: 'Brand Mentions', value: '+320%', color: 'from-teal-400 to-cyan-500' },
      ],
      timeline: [
        { month: 'Month 1-2', task: 'Influencer Partnerships' },
        { month: 'Month 3-4', task: 'Content Calendar Launch' },
        { month: 'Month 5-6', task: 'UGC Campaign' },
      ],
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200',
      color: 'from-teal-500 to-cyan-500',
      tags: ['Local Business', 'Retail', 'Influencer'],
      featured: true,
    },
    {
      id: 4,
      title: 'B2B Lead Generation',
      category: 'Email Marketing',
      client: 'EnterpriseSoft Corp',
      industry: 'Enterprise Software',
      duration: '9 Months',
      challenge: 'Low email engagement and poor lead quality in enterprise sales funnel.',
      solution: 'Personalized automated email flows with advanced segmentation and AI optimization.',
      results: [
        { icon: TrendingUp, label: 'Lead Quality', value: '+85%', color: 'from-emerald-500 to-teal-500' },
        { icon: Users, label: 'SQLs Generated', value: '2.4K', color: 'from-cyan-500 to-teal-400' },
        { icon: DollarSign, label: 'Avg. Deal Size', value: '+60%', color: 'from-teal-500 to-cyan-400' },
        { icon: Mail, label: 'Email Open Rate', value: '42%', color: 'from-teal-400 to-cyan-500' },
      ],
      timeline: [
        { month: 'Month 1-3', task: 'Email Strategy & Segmentation' },
        { month: 'Month 4-6', task: 'Automation Setup' },
        { month: 'Month 7-9', task: 'AI Optimization' },
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200',
      color: 'from-teal-500 to-cyan-500',
      tags: ['Enterprise', 'B2B', 'Automation'],
    },
    {
      id: 5,
      title: 'Mobile App Growth Hack',
      category: 'Growth Marketing',
      client: 'FitLife Mobile',
      industry: 'Fitness Tech',
      duration: '10 Months',
      challenge: 'Low app store visibility and poor user retention rates.',
      solution: 'ASO optimization combined with referral programs and retention automation.',
      results: [
        { icon: TrendingUp, label: 'App Downloads', value: '+550%', color: 'from-emerald-500 to-teal-500' },
        { icon: Users, label: 'Active Users', value: '150K+', color: 'from-cyan-500 to-teal-400' },
        { icon: DollarSign, label: 'Revenue', value: '+320%', color: 'from-teal-500 to-cyan-400' },
        { icon: Target, label: 'Retention Rate', value: '+45%', color: 'from-teal-400 to-cyan-500' },
      ],
      timeline: [
        { month: 'Month 1-3', task: 'ASO Optimization' },
        { month: 'Month 4-6', task: 'Referral Program Launch' },
        { month: 'Month 7-10', task: 'Retention Automation' },
      ],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200',
      color: 'from-teal-500 to-cyan-500',
      tags: ['Mobile', 'Tech', 'Growth'],
    },
    {
      id: 6,
      title: 'Brand Awareness Campaign',
      category: 'Brand Strategy',
      client: 'LuxeHome Decor',
      industry: 'Home Decor',
      duration: '7 Months',
      challenge: 'Minimal brand recognition in competitive luxury market.',
      solution: 'Integrated brand storytelling across digital channels with premium content.',
      results: [
        { icon: TrendingUp, label: 'Brand Recall', value: '+280%', color: 'from-emerald-500 to-teal-500' },
        { icon: Users, label: 'Social Following', value: '65K+', color: 'from-cyan-500 to-teal-400' },
        { icon: DollarSign, label: 'Sales Growth', value: '+150%', color: 'from-teal-500 to-cyan-400' },
        { icon: Globe, label: 'Market Share', value: '+25%', color: 'from-teal-400 to-cyan-500' },
      ],
      timeline: [
        { month: 'Month 1-2', task: 'Brand Identity Development' },
        { month: 'Month 3-4', task: 'Content Production' },
        { month: 'Month 5-7', task: 'Multi-channel Campaign' },
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200',
      color: 'from-teal-500 to-cyan-500',
      tags: ['Luxury', 'Branding', 'Content'],
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: caseStudies.length },
    { id: 'featured', name: 'Featured', count: caseStudies.filter(c => c.featured).length },
    { id: 'seo', name: 'SEO', count: 2 },
    { id: 'social', name: 'Social Media', count: 2 },
    { id: 'content', name: 'Content', count: 3 },
    { id: 'email', name: 'Email', count: 2 },
    { id: 'growth', name: 'Growth', count: 2 },
    { id: 'brand', name: 'Brand', count: 2 },
  ];

  const filteredCases = activeFilter === 'all'
    ? caseStudies
    : activeFilter === 'featured'
      ? caseStudies.filter(c => c.featured)
      : caseStudies.filter(c => c.tags?.some(tag => tag.toLowerCase().includes(activeFilter)));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

          {/* Grid Pattern */}
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
            className="text-center max-w-6xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-600 dark:text-teal-400 mb-6">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Proven Success</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="block text-gray-900 dark:text-white mb-4">
                Impactful
              </span>
              <span className="block bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                Case Studies
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
              Real-world success stories showcasing how we've transformed businesses through data-driven digital strategies.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { icon: DollarSign, value: '$42M+', label: 'Revenue Generated' },
                { icon: Users, value: '250+', label: 'Happy Clients' },
                { icon: TrendingUp, value: '98%', label: 'Success Rate' },
                { icon: Rocket, value: '450%', label: 'Avg. ROI' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg"
                >
                  <stat.icon className="h-8 w-8 text-teal-500 mx-auto mb-3" />
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
            >
              <MessageSquare size={20} />
              <span>Start Your Success Story</span>
              <ArrowRight size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Header */}
          <div className=" top-24 z-30 mb-12 pt-6 pb-8 bg-gradient-to-b from-white/95 via-white/90 to-transparent dark:from-gray-900/95 dark:via-gray-900/90 dark:to-transparent backdrop-blur-md -mx-4 px-4 sm:mx-0 sm:px-0 sm:rounded-2xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-lg">
                  <Filter size={20} className="text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Featured Case Studies
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Filter by category
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredCases.length} of {caseStudies.length} projects
                </span>

                <motion.div
                  layoutId="activeFilter"
                  className="hidden sm:block px-3 py-1.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-medium rounded-full"
                >
                  {categories.find(c => c.id === activeFilter)?.name}
                </motion.div>
              </div>
            </motion.div>

            {/* Category Filter */}
            <div className="mt-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
              <div className="flex gap-2 min-w-max">
                {categories.map((category) => {
                  const isActive = activeFilter === category.id;

                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveFilter(category.id)}
                      className={`group relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${isActive
                          ? 'text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl z-[-1]"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span>{category.name}</span>
                      <span className={`px-2 py-0.5 text-xs rounded-full ${isActive
                          ? 'bg-white/20'
                          : 'bg-gray-300 dark:bg-gray-700 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30'
                        }`}>
                        {category.count}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredCases.map((study) => (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10 }}
                  onMouseEnter={() => setHoveredCase(study.id)}
                  onMouseLeave={() => setHoveredCase(null)}
                  className="relative group"
                >
                  {/* Featured Badge */}
                  {study.featured && (
                    <div className="absolute -top-3 -left-3 z-10">
                      <div className="px-3 py-1.5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                        <Zap size={10} />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className="relative h-full overflow-hidden rounded-3xl border border-teal-300">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 p-1 bg-gradient-to-r ${study.color} rounded-3xl`}>
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl h-full flex flex-col">

                      {/* Image Container */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Category & Tags */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-xs font-semibold rounded-full">
                              {study.category}
                            </span>
                            {study.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/70 dark:bg-gray-800/70 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow">
                        {/* Title & Client */}
                        <div className="mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                            {study.title}
                          </h3>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                              {study.client}
                            </span>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                              <Calendar size={14} />
                              <span>{study.duration}</span>
                            </div>
                          </div>
                        </div>

                        {/* Challenge Preview */}
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                          <span className="font-semibold">Challenge:</span> {study.challenge}
                        </p>

                        {/* Results */}
                        <div className="mb-6">
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-3">Key Results</div>
                          <div className="grid grid-cols-2 gap-3">
                            {study.results.slice(0, 4).map((result, idx) => (
                              <div key={idx} className="text-center p-2 bg-gradient-to-b from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                  <result.icon size={14} className="text-teal-500" />
                                  <div className="text-sm font-bold text-gray-900 dark:text-white">
                                    {result.value}
                                  </div>
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {result.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="mb-6">
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA Section */}
                      <div className="p-6 pt-0 mt-auto">
                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Industry</div>
                            <div className="text-sm font-semibold text-gray-900 dark:text-white">{study.industry}</div>
                          </div>
                          <Link to={`/portfolio/${study.id}`}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                            >
                              <span className="text-sm">View Details</span>
                              <ChevronRight size={16} />
                            </motion.button>
                          </Link>
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCase === study.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-teal-500/10 via-transparent to-transparent pointer-events-none rounded-3xl"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* No Results */}
          {filteredCases.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search size={40} className="text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                No Projects Found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try selecting a different category or view all projects
              </p>
              <button
                onClick={() => setActiveFilter('all')}
                className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
              >
                View All Projects
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Measurable results across all our client projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '$42M+', label: 'Revenue Generated', color: 'from-teal-500 to-cyan-500' },
              { value: '98%', label: 'Client Satisfaction', color: 'from-teal-500 to-emerald-500' },
              { value: '450%', label: 'Average ROI', color: 'from-cyan-500 to-teal-500' },
              { value: '250+', label: 'Projects Delivered', color: 'from-teal-400 to-cyan-400' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity`} />
                <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-center">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-500" />

        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                y: [0, -40, 0],
                x: [0, Math.sin(i) * 30, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Rocket size={16} className="text-white" />
                <span className="text-sm font-medium text-white">Ready to Start?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Start Your Success Story
              </h2>

              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Let's create your own success story. Schedule a free strategy session with our experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-teal-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3"
                >
                  <MessageSquare size={20} />
                  <span>Book Free Consultation</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Play size={20} />
                  <span>Watch Success Stories</span>
                </motion.button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-16">
                {[
                  { value: '24/7', label: 'Dedicated Support' },
                  { value: '30-day', label: 'Money Back Guarantee' },
                  { value: 'Free', label: 'Strategy Session' },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-2">{item.value}</div>
                    <div className="text-sm text-white/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;