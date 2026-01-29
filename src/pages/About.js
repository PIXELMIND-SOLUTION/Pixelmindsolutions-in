import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, Award, Clock, Zap, Heart,
  Globe, Rocket, Sparkles, TrendingUp, Shield,
  Brain, MessageSquare, Calendar, Star,
  ArrowRight, ChevronRight, Play, ExternalLink
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400',
      expertise: 'Digital Strategy & Growth',
      description: '15+ years transforming businesses through digital innovation. Former Google executive.',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of SEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b786d4d9?auto=format&fit=crop&w=400',
      expertise: 'SEO & Analytics',
      description: 'Former Google Analytics specialist. Built SEO strategies for Fortune 500 companies.',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-teal-500 to-cyan-400'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
      expertise: 'Brand Strategy & Design',
      description: 'Award-winning creative director with 12+ years in digital storytelling.',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-cyan-500 to-teal-500'
    },
    {
      name: 'Emily Watson',
      role: 'PPC Director',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400',
      expertise: 'Performance Marketing',
      description: 'Managed $50M+ in ad spend. Certified Google & Meta Ads expert.',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-teal-400 to-cyan-500'
    },
    {
      name: 'David Kim',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400',
      expertise: 'Technology & AI',
      description: 'AI and machine learning expert. Built scalable marketing technology platforms.',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-cyan-500 to-teal-400'
    },
    {
      name: 'Jessica Park',
      role: 'Content Director',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400',
      expertise: 'Content Strategy',
      description: 'Former journalist turned content strategist. Specializes in B2B content marketing.',
      social: { linkedin: '#', twitter: '#' },
      color: 'from-teal-500 to-cyan-500'
    },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Data-Driven Intelligence',
      description: 'Every decision is backed by advanced analytics, AI insights, and measurable results.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Your success is our success. We build long-term relationships based on trust and results.',
      color: 'from-teal-400 to-cyan-400'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Constantly evolving with cutting-edge technology and forward-thinking strategies.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Integrity & Transparency',
      description: 'Complete transparency in our processes, pricing, and performance reporting.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Growth Focused',
      description: 'Dedicated to driving sustainable growth and maximizing ROI for every client.',
      color: 'from-cyan-500 to-teal-400'
    },
    {
      icon: Heart,
      title: 'Impact Driven',
      description: 'Committed to making a positive impact on businesses, teams, and communities.',
      color: 'from-teal-400 to-cyan-500'
    },
  ];

  const milestones = [
    { year: '2010', title: 'Founded', description: 'Started as a boutique SEO agency' },
    { year: '2013', title: 'First Award', description: 'Won "Best Digital Agency" award' },
    { year: '2016', title: 'Global Expansion', description: 'Opened offices in 3 countries' },
    { year: '2019', title: 'AI Integration', description: 'Implemented AI-driven marketing' },
    { year: '2022', title: '250+ Clients', description: 'Served over 250 businesses worldwide' },
    { year: '2024', title: 'Market Leader', description: 'Recognized as industry leader' },
  ];

  const stats = [
    { value: '250+', label: 'Happy Clients', icon: Users, color: 'from-teal-500 to-cyan-500' },
    { value: '15+', label: 'Years Experience', icon: Clock, color: 'from-teal-400 to-cyan-400' },
    { value: '98%', label: 'Client Retention', icon: Heart, color: 'from-cyan-500 to-teal-500' },
    { value: '42+', label: 'Awards Won', icon: Award, color: 'from-teal-500 to-cyan-500' },
    { value: '450%', label: 'Avg. ROI', icon: TrendingUp, color: 'from-cyan-500 to-teal-400' },
    { value: '15+', label: 'Countries', icon: Globe, color: 'from-teal-400 to-cyan-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          
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
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-600 dark:text-teal-400 mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-medium">Our Story</span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
                <span className="block text-gray-900 dark:text-white mb-4">
                  Pioneering
                </span>
                <span className="block bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Digital Excellence
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12">
                We're not just a digital marketing agency. We're strategic partners dedicated to transforming businesses through innovation, data, and measurable impact.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all"
              >
                <MessageSquare size={20} />
                <span>Schedule Discovery Call</span>
                <ArrowRight size={20} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <div className="relative text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl rounded-2xl transition-opacity`} />
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 relative">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl" />
                
                <div className="relative">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                    Our Journey to <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Excellence</span>
                  </h2>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Founded in 2010, MarketPro began as a passionate collective of digital innovators with a singular mission: to help businesses not just survive, but thrive in the digital revolution.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      What started as a boutique SEO consultancy has evolved into a global digital transformation partner, serving industry leaders across 15+ sectors and 3 continents.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Our growth is built on a foundation of delivering exceptional results, fostering authentic partnerships, and relentlessly pursuing innovation in an ever-changing digital landscape.
                    </p>
                  </div>

                  <div className="mt-12">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    >
                      <Play size={20} />
                      <span>Watch Our Story</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Timeline */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-600" />
                  
                  <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-24"
                      >
                        {/* Dot */}
                        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full ring-4 ring-white dark:ring-gray-800 z-10" />
                        
                        <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl">
                          <div className="flex items-center gap-4 mb-3">
                            <div className="px-3 py-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full">
                              <span className="text-sm font-bold text-teal-600 dark:text-teal-400">{milestone.year}</span>
                            </div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">{milestone.title}</div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-600 dark:text-teal-400 mb-6">
                <Target size={16} />
                <span className="text-sm font-medium">Our DNA</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                Core Values That <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Drive Us</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that shape our culture, decisions, and partnerships
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <div className="relative h-full p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                      {/* Hover Gradient */}
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 blur-xl rounded-3xl transition-opacity`} />
                      
                      <div className={`relative w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900/30 dark:to-cyan-900/30 text-teal-600 dark:text-teal-400 mb-6">
                <Users size={16} />
                <span className="text-sm font-medium">Leadership Team</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                Meet Our <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Visionaries</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The brilliant minds and passionate professionals driving innovation and success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative rounded-3xl overflow-hidden">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 p-1 bg-gradient-to-r ${member.color} rounded-3xl`}>
                      <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl">
                      {/* Avatar */}
                      <div className="relative mb-6">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg mx-auto">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* Status Indicator */}
                        <div className="absolute bottom-2 right-1/2 transform translate-x-1/2 w-4 h-4 bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-800" />
                      </div>

                      {/* Info */}
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {member.name}
                        </h3>
                        <div className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                          {member.role}
                        </div>
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full inline-block">
                          {member.expertise}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {member.description}
                        </p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-3">
                        <button className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center hover:shadow-lg transition-shadow">
                          <span>in</span>
                        </button>
                        <button className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 text-white flex items-center justify-center hover:shadow-lg transition-shadow">
                          <span>𝕏</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Join our team of innovators and change-makers
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-500 dark:to-cyan-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2 mx-auto"
              >
                <ExternalLink size={20} />
                <span>View Career Opportunities</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture & Impact */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Culture */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                  Our <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Culture</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Continuous Learning</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Weekly training & innovation days</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      We invest in our team's growth with ongoing education, certifications, and innovation sessions to stay ahead of industry trends.
                    </p>
                  </div>

                  <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-xl flex items-center justify-center">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Work-Life Harmony</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Flexible & remote-first culture</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      We believe in sustainable success. Our flexible work arrangements and wellness programs support both professional growth and personal well-being.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                  Our <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Impact</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Community Initiatives</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Giving back to society</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      We dedicate 5% of our profits to digital literacy programs and support local businesses through pro-bono consulting.
                    </p>
                  </div>

                  <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Industry Recognition</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Award-winning excellence</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Recognized by industry leaders for innovation, client satisfaction, and sustainable business practices.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
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
                <span className="text-sm font-medium text-white">Ready to Partner?</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Let's Build Something Extraordinary
              </h2>
              
              <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Join forward-thinking businesses that trust MarketPro to drive their digital transformation and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-teal-600 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-3"
                >
                  <MessageSquare size={20} />
                  <span>Start Partnership</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Calendar size={20} />
                  <span>Book Discovery Call</span>
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-8 mt-16">
                {[
                  { value: '30-Day', label: 'Results Guarantee' },
                  { value: '24/7', label: 'Strategic Support' },
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

export default AboutPage;