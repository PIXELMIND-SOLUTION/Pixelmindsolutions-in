import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, TrendingUp, Crown, Star } from 'lucide-react';
import GradientText from '../ui/GradientText';

const plans = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    description: 'Perfect for small businesses starting their digital journey',
    icon: Zap,
    color: 'from-blue-500 to-cyan-500',
    popular: false,
    features: [
      'Basic SEO Audit',
      'Social Media Management (2 platforms)',
      'Monthly Analytics Report',
      'Email Support',
      'Up to 5 Keywords Tracking',
      'Basic Content Creation (2 articles/month)',
      'Google Business Profile Setup',
      'Monthly Strategy Call',
    ],
    notIncluded: [
      'PPC Management',
      'Advanced Analytics',
      'Competitor Analysis',
      'Video Content',
    ]
  },
  {
    name: 'Growth',
    price: '$2,499',
    period: '/month',
    description: 'Ideal for growing businesses wanting to scale',
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
    popular: true,
    features: [
      'Advanced SEO Strategy',
      'Social Media Management (4 platforms)',
      'Weekly Analytics Reports',
      'Priority Support',
      'Up to 25 Keywords Tracking',
      'Premium Content Creation (8 articles/month)',
      'PPC Campaign Management',
      'Competitor Analysis',
      'Monthly Video Content',
      'Weekly Strategy Calls',
      'Conversion Rate Optimization',
      'Email Marketing Campaigns',
    ],
    notIncluded: [
      'Enterprise-level Analytics',
      'Dedicated Account Manager',
      'Custom Software Integration',
    ]
  },
  {
    name: 'Enterprise',
    price: '$4,999',
    period: '/month',
    description: 'Complete solution for large organizations',
    icon: Crown,
    color: 'from-orange-500 to-red-500',
    popular: false,
    features: [
      'Comprehensive SEO Strategy',
      'Full Social Media Management',
      'Real-time Analytics Dashboard',
      '24/7 Dedicated Support',
      'Unlimited Keywords Tracking',
      'Premium Content Creation (20+ articles/month)',
      'Advanced PPC Management',
      'Deep Competitor Analysis',
      'Professional Video Production',
      'Daily Strategy Calls',
      'Advanced CRO',
      'Automated Email Marketing',
      'Dedicated Account Manager',
      'Custom Software Integration',
      'Marketing Automation Setup',
      'Quarterly Business Reviews',
    ],
    notIncluded: []
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Transparent </span>
            <GradientText>Pricing Plans</GradientText>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include a 14-day free trial.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full p-1 shadow-lg">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="px-6 py-1 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className={`h-full rounded-3xl overflow-hidden ${
                plan.popular
                  ? 'border-2 border-primary-500 shadow-2xl'
                  : 'border border-gray-200 dark:border-gray-700 shadow-lg'
              }`}>
                <div className={`h-2 bg-gradient-to-r ${plan.color}`} />
                
                <div className="p-8 bg-white dark:bg-gray-800">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center`}>
                        <plan.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900 dark:text-white">
                        {billingCycle === 'yearly' 
                          ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                          : plan.price
                        }
                      </span>
                      <span className="text-xl text-gray-600 dark:text-gray-300 ml-2">
                        {plan.period}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 mt-2">
                        Save ${parseInt(plan.price.slice(1)) * 0.2 * 12}/year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                          Not included:
                        </h4>
                        <ul className="space-y-3">
                          {plan.notIncluded.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <X className="h-5 w-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white hover:shadow-xl'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need a custom solution?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We'll create a tailored marketing strategy specifically for your business needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow">
              Schedule a Strategy Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;