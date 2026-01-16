import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Clock, Zap, Heart } from 'lucide-react';
import Card from '../components/ui/Card';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
      expertise: 'Digital Strategy',
      description: '15+ years in digital marketing',
    },
    {
      name: 'Sarah Chen',
      role: 'Head of SEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?auto=format&fit=crop&w=400',
      expertise: 'SEO & Analytics',
      description: 'Former Google Analytics specialist',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
      expertise: 'Content & Design',
      description: 'Award-winning creative director',
    },
    {
      name: 'Emily Watson',
      role: 'PPC Director',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400',
      expertise: 'Performance Marketing',
      description: '$50M+ in ad spend managed',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'Every decision is backed by analytics and measurable results.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We partner with you, not just work for you.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Staying ahead with cutting-edge technology and strategies.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Transparent practices and honest communication always.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">About </span>
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                MarketPro
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're more than a digital marketing agency. We're growth partners dedicated to transforming businesses through innovative strategies and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Founded in 2010, MarketPro started as a small team of passionate marketers with a simple mission: to help businesses thrive in the digital age.
                </p>
                <p>
                  What began as a boutique SEO agency has grown into a full-service digital marketing powerhouse, serving clients across 15+ industries and 3 continents.
                </p>
                <p>
                  Our growth is built on a foundation of delivering exceptional results, fostering long-term partnerships, and constantly innovating to stay ahead of industry trends.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '250+', label: 'Happy Clients', color: 'bg-blue-500' },
                  { value: '15+', label: 'Years Experience', color: 'bg-purple-500' },
                  { value: '98%', label: 'Retention Rate', color: 'bg-green-500' },
                  { value: '42+', label: 'Awards Won', color: 'bg-orange-500' },
                ].map((stat, index) => (
                  <Card key={index} className="text-center">
                    <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The experts behind your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-white dark:border-gray-700 shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <div className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                    {member.role}
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {member.expertise}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {member.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust MarketPro with their digital growth.
            </p>
            <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow">
              Start Your Journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;