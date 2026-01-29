import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, Sparkles, Zap, CheckCircle, ArrowRight,
  Users, Globe, Shield, TrendingUp, Clock,
  Mail, Phone, MessageSquare, Calendar, Award,
  ChevronRight, Star, Target, BarChart, PieChart,
  Settings, Headphones, CreditCard, Gift, Lock
} from 'lucide-react';

const GetStartedPage = () => {
  const [activePlan, setActivePlan] = useState('pro');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    goal: ''
  });
  const [step, setStep] = useState(1);

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small businesses starting out',
      price: '$999',
      period: '/month',
      features: [
        'Basic SEO Audit',
        'Social Media Setup',
        'Monthly Analytics Report',
        'Email Support',
        '5 Campaigns/Month',
        'Basic Content Strategy'
      ],
      color: 'from-teal-500 to-cyan-500',
      icon: Rocket,
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      description: 'Most popular for growing businesses',
      price: '$2,499',
      period: '/month',
      features: [
        'Advanced SEO Strategy',
        'Social Media Management',
        'Weekly Analytics & Reports',
        'Priority Support',
        'Unlimited Campaigns',
        'Content Creation & Strategy',
        'PPC Management',
        'Monthly Strategy Calls'
      ],
      color: 'from-teal-600 to-cyan-600',
      icon: Zap,
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      price: '$4,999',
      period: '/month',
      features: [
        'Full-Service Digital Marketing',
        'Dedicated Account Manager',
        'Real-time Analytics Dashboard',
        '24/7 Premium Support',
        'Custom Campaign Development',
        'Competitor Analysis',
        'Multi-channel Strategy',
        'Weekly Optimization',
        'ROI Tracking & Reporting',
        'Custom Integration'
      ],
      color: 'from-teal-700 to-cyan-700',
      icon: TrendingUp,
      popular: false
    }
  ];

  const successStories = [
    {
      company: 'TechNova',
      industry: 'SaaS',
      result: '300% ROI increase',
      duration: '6 months',
      icon: BarChart,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      company: 'Bloom Boutique',
      industry: 'E-commerce',
      result: '5x traffic growth',
      duration: '4 months',
      icon: PieChart,
      color: 'from-teal-400 to-cyan-400'
    },
    {
      company: 'MediCare Plus',
      industry: 'Healthcare',
      result: '150% lead increase',
      duration: '3 months',
      icon: TrendingUp,
      color: 'from-teal-600 to-cyan-600'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Risk-Free Start',
      description: '30-day money-back guarantee on all plans'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Get started in under 48 hours'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Your personal marketing experts'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Campaigns optimized for worldwide audience'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery Call',
      description: '60-minute strategy session to understand your goals',
      icon: Calendar,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Custom Plan',
      description: 'Tailored strategy proposal based on your needs',
      icon: Target,
      color: 'from-teal-600 to-cyan-600'
    },
    {
      number: '03',
      title: 'Onboarding',
      description: 'Seamless setup and integration process',
      icon: Settings,
      color: 'from-teal-400 to-cyan-400'
    },
    {
      number: '04',
      title: 'Growth',
      description: 'Regular optimization and performance tracking',
      icon: TrendingUp,
      color: 'from-teal-700 to-cyan-700'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-teal-50/20 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 dark:border-teal-400/20 mb-8"
            >
              <Sparkles className="w-5 h-5 mr-2 text-teal-600 dark:text-teal-400" />
              <span className="text-lg font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Join 500+ Successful Brands
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tight">
              <span className="block text-gray-900 dark:text-white mb-2">Launch Your</span>
              <span className="block bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                Digital Revolution
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your business with data-driven marketing strategies that deliver measurable results
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <Rocket className="h-6 w-6" />
                <span>Start Free Trial</span>
                <ArrowRight className="h-6 w-6 transform group-hover:translate-x-2 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass-effect border-2 border-gray-300 dark:border-gray-600 rounded-2xl font-bold hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 flex items-center space-x-3 text-lg"
              >
                <Calendar className="h-6 w-6" />
                <span>Book Demo</span>
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-10 text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="font-semibold">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span className="font-semibold">Industry Leader</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 hidden lg:block">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-2xl flex items-center justify-center"
          >
            <Zap className="h-8 w-8 text-white" />
          </motion.div>
        </div>
        <div className="absolute bottom-20 right-10 hidden lg:block">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-600 to-cyan-600 shadow-2xl flex items-center justify-center"
          >
            <TrendingUp className="h-8 w-8 text-white" />
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">Our 4-Step</span>
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Success Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven framework that guarantees results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-6xl font-bold text-gray-200 dark:text-gray-700 group-hover:text-gray-300 dark:group-hover:text-gray-600 transition-colors">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center text-teal-600 dark:text-teal-400 font-semibold">
                      <span>Learn more</span>
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">Choose Your</span>
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Growth Plan
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Flexible plans designed to scale with your business
            </p>

            {/* Plan Toggle */}
            <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-16">
              <button
                onClick={() => setActivePlan('starter')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activePlan === 'starter'
                    ? 'bg-white dark:bg-gray-700 shadow-lg'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActivePlan('pro')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activePlan === 'pro'
                    ? 'bg-white dark:bg-gray-700 shadow-lg'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setActivePlan('enterprise')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activePlan === 'enterprise'
                    ? 'bg-white dark:bg-gray-700 shadow-lg'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'lg:-translate-y-4' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="px-6 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`relative h-full rounded-3xl overflow-hidden ${
                  plan.popular 
                    ? 'border-2 border-teal-500 dark:border-teal-400 shadow-2xl' 
                    : 'border border-gray-200 dark:border-gray-700 shadow-xl'
                }`}>
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${plan.color} opacity-5`}></div>
                  
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 h-full">
                    {/* Plan Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div>
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                          <plan.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                          {plan.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-8">
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-gray-900 dark:text-white">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">
                          {plan.period}
                        </span>
                      </div>
                      {plan.popular && (
                        <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                          <Gift className="h-4 w-4 mr-1" />
                          <span>Save 20% with annual billing</span>
                        </div>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 mb-10">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:shadow-2xl'
                        : 'border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-teal-500 dark:hover:border-teal-400'
                    }`}>
                      {plan.popular ? 'Get Started Today' : 'Start Free Trial'}
                    </button>

                    {/* Additional Info */}
                    {plan.popular && (
                      <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl border border-teal-100 dark:border-teal-800">
                        <div className="flex items-center text-sm text-teal-700 dark:text-teal-300">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Average ROI: 300% in first 6 months</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20 dark:border-teal-400/20 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">Proven</span>
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See how businesses like yours achieved remarkable growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <motion.div
                key={story.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${story.color} opacity-5`}></div>
                  <div className="relative p-8">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${story.color} flex items-center justify-center mb-6`}>
                      <story.icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                      {story.result}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                      Achieved in {story.duration}
                    </div>
                    <div className="mb-4">
                      <div className="text-lg font-bold text-gray-900 dark:text-white">
                        {story.company}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {story.industry}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <button className="flex items-center text-teal-600 dark:text-teal-400 font-semibold group-hover:underline">
                        <span>Read full case study</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Form */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl blur-3xl opacity-10"></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="max-w-3xl mx-auto"
                  >
                    <div className="text-center mb-12">
                      <h3 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="block text-gray-900 dark:text-white">Ready to</span>
                        <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                          Transform Your Business?
                        </span>
                      </h3>
                      <p className="text-xl text-gray-600 dark:text-gray-300">
                        Answer a few questions to get your personalized strategy
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
                            placeholder="John Smith"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            Business Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
                          placeholder="Your Company Inc."
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Company Size *
                        </label>
                        <select
                          name="size"
                          value={formData.size}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
                          required
                        >
                          <option value="">Select company size</option>
                          <option value="1-10">1-10 employees</option>
                          <option value="11-50">11-50 employees</option>
                          <option value="51-200">51-200 employees</option>
                          <option value="201-500">201-500 employees</option>
                          <option value="501+">501+ employees</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Primary Goal *
                        </label>
                        <select
                          name="goal"
                          value={formData.goal}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300"
                          required
                        >
                          <option value="">Select your primary goal</option>
                          <option value="leads">Generate more leads</option>
                          <option value="sales">Increase online sales</option>
                          <option value="awareness">Build brand awareness</option>
                          <option value="traffic">Drive website traffic</option>
                          <option value="engagement">Improve social media engagement</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                        <button
                          type="submit"
                          className="w-full py-5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 text-lg group"
                        >
                          <Rocket className="h-6 w-6 transform group-hover:rotate-12 transition-transform" />
                          <span>Get My Personalized Strategy</span>
                          <ArrowRight className="h-6 w-6 transform group-hover:translate-x-2 transition-transform" />
                        </button>
                        <p className="text-center text-gray-500 dark:text-gray-400 mt-4 text-sm">
                          By continuing, you agree to our Terms and Privacy Policy
                        </p>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="h-16 w-16 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                      Thank You!
                    </h3>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                      Your personalized strategy proposal is being prepared. Our team will contact you within 24 hours to schedule your free consultation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <button
                        onClick={() => setStep(1)}
                        className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300"
                      >
                        Edit Information
                      </button>
                      <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300">
                        Schedule Call Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
            <div className="relative p-12 text-center">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Start Your Growth Journey Today
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Don't wait for tomorrow. Take the first step towards digital transformation now.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="px-10 py-5 bg-white text-teal-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
                  <Rocket className="h-6 w-6" />
                  <span>Start 14-Day Free Trial</span>
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
                  <Headphones className="h-6 w-6" />
                  <span>Talk to Sales</span>
                </button>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-10 text-white/80">
                <div className="flex items-center space-x-3">
                  <Lock className="h-5 w-5" />
                  <span>Secure & encrypted</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CreditCard className="h-5 w-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5" />
                  <span>30-day money back</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GetStartedPage;