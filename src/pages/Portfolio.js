import React from 'react';
import { motion } from 'framer-motion';
import {
  Filter,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
} from 'lucide-react';
import Card from '../components/ui/Card';

const PortfolioPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Global E-commerce Transformation',
      category: 'SEO & PPC',
      client: 'FashionForward Inc.',
      duration: '12 Months',
      results: [
        { icon: TrendingUp, label: 'Revenue', value: '+325%' },
        { icon: Users, label: 'Customers', value: '45K+' },
        { icon: DollarSign, label: 'ROI', value: '480%' },
      ],
      challenge: 'Low organic visibility and inefficient ad spend.',
      solution: 'SEO overhaul + high-performance PPC strategy.',
      image:
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800',
    },
    {
      id: 2,
      title: 'SaaS Market Domination',
      category: 'Content Marketing',
      client: 'CloudTech Solutions',
      duration: '8 Months',
      results: [
        { icon: TrendingUp, label: 'Traffic', value: '+420%' },
        { icon: Users, label: 'Sign-ups', value: '12K+' },
        { icon: DollarSign, label: 'MRR', value: '+200%' },
      ],
      challenge: 'Low brand authority.',
      solution: 'Authority content + technical SEO.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    },
    {
      id: 3,
      title: 'Local to National Growth',
      category: 'Social Media',
      client: 'UrbanBrew Coffee',
      duration: '6 Months',
      results: [
        { icon: TrendingUp, label: 'Engagement', value: '+650%' },
        { icon: Users, label: 'Followers', value: '85K+' },
        { icon: DollarSign, label: 'Sales', value: '+180%' },
      ],
      challenge: 'Limited brand reach.',
      solution: 'Influencer-driven social campaigns.',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800',
    },
    {
      id: 4,
      title: 'B2B Lead Generation',
      category: 'Email Marketing',
      client: 'EnterpriseSoft Corp',
      duration: '9 Months',
      results: [
        { icon: TrendingUp, label: 'Lead Quality', value: '+85%' },
        { icon: Users, label: 'SQLs', value: '2.4K' },
        { icon: DollarSign, label: 'Deal Size', value: '+60%' },
      ],
      challenge: 'Low email engagement.',
      solution: 'Personalized automated email flows.',
      image:
        'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800',
    },
  ];

  return (
    <div className="pt-32 bg-gray-50 dark:bg-gray-900">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gray-900 dark:text-white">Our </span>
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world case studies showcasing measurable growth and business impact
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24">
        <div className="container mx-auto px-4">

          {/* FILTER */}
          <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Case Studies
            </h2>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <select className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">
                <option>All Categories</option>
                <option>SEO</option>
                <option>Social Media</option>
                <option>PPC</option>
                <option>Email</option>
              </select>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.08 }}
              >
                <Card
                  hover
                  padding="p-0"
                  borderRadius="rounded-3xl"
                  className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  {/* IMAGE */}
                  <div className="relative h-44">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 rounded-full">
                      {study.category}
                    </span>
                  </div>

                  {/* BODY */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {study.title}
                      </h3>
                      <ExternalLink className="h-5 w-5 text-gray-400 hover:text-primary-600 cursor-pointer" />
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-medium">{study.client}</span> • {study.duration}
                    </p>

                    {/* RESULTS */}
                    <div className="grid grid-cols-3 gap-3">
                      {study.results.map((r, i) => (
                        <div
                          key={i}
                          className="bg-gray-100 dark:bg-gray-700 rounded-xl p-3 text-center"
                        >
                          <r.icon className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                          <div className="text-sm font-bold text-gray-900 dark:text-white">
                            {r.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className="w-full py-3 mt-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                      View Case Study
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* FINAL CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="mt-24 text-center"
          >
            <div className="glass-effect rounded-3xl p-14 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Want results like these?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Let’s build your next growth story together.
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
                Start Your Project
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
