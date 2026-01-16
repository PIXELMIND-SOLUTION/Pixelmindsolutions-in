import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Share2, Target, PenTool, Mail, BarChart3,
  CheckCircle, Clock, Users, Award, Zap, TrendingUp,
  ArrowRight, ChevronRight, Shield, PieChart
} from 'lucide-react';
import Card from '../components/ui/Card';
import GradientText from '../components/ui/GradientText';
// Add this import at the top if not already there
import { Calendar } from 'lucide-react';


const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');

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
      color: 'from-blue-500 to-cyan-500',
      duration: '3-6 Months',
      price: 'Starting at $1,500/month'
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
      color: 'from-purple-500 to-pink-500',
      duration: 'Ongoing',
      price: 'Starting at $2,000/month'
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
      color: 'from-orange-500 to-red-500',
      duration: '1-3 Months',
      price: 'Starting at $1,800/month + ad spend'
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
      color: 'from-green-500 to-emerald-500',
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
      color: 'from-yellow-500 to-amber-500',
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
      color: 'from-indigo-500 to-blue-500',
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
      color: 'from-red-500 to-pink-500',
      duration: 'Ongoing',
      price: 'Starting at $1,500/month'
    },
    {
      id: 8,
      icon: PieChart,
      title: 'Conversion Rate Optimization',
      category: 'crm',
      description: 'Increase your website conversions through data-driven testing and optimization.',
      features: [
        'Website Audit',
        'User Experience Analysis',
        'A/B Testing',
        'Heatmap & Session Recording',
        'Checkout Flow Optimization',
        'Personalization Strategy'
      ],
      results: ['+75% Conversion Rate', '-40% Cart Abandonment', '+25% Average Order Value'],
      color: 'from-teal-500 to-cyan-500',
      duration: '3-6 Months',
      price: 'Starting at $2,200/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap, count: allServices.length },
    { id: 'search', name: 'SEO & Search', icon: Search, count: allServices.filter(s => s.category === 'search').length },
    { id: 'social', name: 'Social Media', icon: Share2, count: allServices.filter(s => s.category === 'social').length },
    { id: 'ads', name: 'PPC & Ads', icon: Target, count: allServices.filter(s => s.category === 'ads').length },
    { id: 'content', name: 'Content', icon: PenTool, count: allServices.filter(s => s.category === 'content').length },
    { id: 'email', name: 'Email', icon: Mail, count: allServices.filter(s => s.category === 'email').length },
    { id: 'analytics', name: 'Analytics', icon: BarChart3, count: allServices.filter(s => s.category === 'analytics').length },
  ];

  const filteredServices = activeTab === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeTab);

  const serviceProcess = [
    {
      step: 1,
      title: 'Discovery & Analysis',
      description: 'We conduct a thorough analysis of your business, market, and competitors.',
      icon: Search
    },
    {
      step: 2,
      title: 'Strategy Development',
      description: 'Creating a customized marketing strategy tailored to your goals.',
      icon: Target
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Executing the strategy with precision and ongoing optimization.',
      icon: Zap
    },
    {
      step: 4,
      title: 'Reporting & Optimization',
      description: 'Regular reporting and continuous optimization for maximum results.',
      icon: TrendingUp
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">Our Digital</span>
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Marketing Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive solutions designed to accelerate your business growth, increase visibility, and maximize ROI across all digital channels.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { value: '98%', label: 'Client Satisfaction' },
                { value: '250+', label: 'Projects Delivered' },
                { value: '$42M+', label: 'Revenue Generated' },
                { value: '4.9/5', label: 'Average Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                >
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="text-gray-900 dark:text-white">Our </span>
              <GradientText>Comprehensive Services</GradientText>
            </h2>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === category.id
                        ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{category.name}</span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      activeTab === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card
                    className="h-full hover:shadow-2xl transition-all duration-300"
                    glass={false}
                    gradient={true}
                  >
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Typical Results:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.results.map((result, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full"
                          >
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Duration & Price */}
                    <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                        <div className="font-medium text-gray-900 dark:text-white">{service.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Starting at</div>
                        <div className="font-bold text-primary-600 dark:text-primary-400">{service.price}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full mt-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight size={18} />
                    </button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900 dark:text-white">Our </span>
              <GradientText>Proven Process</GradientText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach that ensures consistent results and measurable growth
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="text-center h-full">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-primary-500">
                      <span className="text-sm font-bold text-primary-600">{step.step}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose MarketPro
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              What sets us apart in the digital marketing landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Award-Winning Team',
                description: '15+ industry awards and certifications for excellence in digital marketing.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: CheckCircle,
                title: 'Proven Results',
                description: 'Data-driven strategies that consistently deliver measurable ROI for our clients.',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Clock,
                title: 'Fast Execution',
                description: 'Quick implementation without compromising on quality or strategy.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Users,
                title: 'Dedicated Support',
                description: 'Your own account manager and 24/7 support for all your marketing needs.',
                color: 'from-green-500 to-emerald-500'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-xl">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="text-gray-900 dark:text-white">Frequently Asked </span>
                <GradientText>Questions</GradientText>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'How long does it take to see results?',
                    a: 'Results vary by service and industry. SEO typically shows improvements in 3-6 months, while PPC campaigns can deliver immediate results. We provide detailed timelines during our strategy sessions.',
                  },
                  {
                    q: 'Do you work with small businesses?',
                    a: 'Absolutely! We work with businesses of all sizes, from startups to enterprises. We tailor our services and pricing to match your specific needs and budget.',
                  },
                  {
                    q: 'What makes you different from other agencies?',
                    a: 'Our data-driven approach, transparent reporting, and dedicated account management set us apart. We focus on measurable results and maintain open communication throughout our partnership.',
                  },
                  {
                    q: 'Can I cancel my contract anytime?',
                    a: 'We offer flexible month-to-month contracts for most services. Some long-term strategies may require a minimum commitment, which we discuss upfront.',
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Schedule a free consultation with our experts. We'll analyze your current marketing and create a custom strategy for growth.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      '30-minute strategy session',
                      'Custom marketing plan',
                      'ROI projection',
                      'No obligation commitment'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-shadow flex items-center justify-center space-x-2">
                    <Calendar size={20} />
                    <span>Schedule Free Consultation</span>
                  </button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transform Your Digital Marketing Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust MarketPro with their digital growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default ServicesPage;