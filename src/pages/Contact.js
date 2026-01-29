import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Clock, Send, Calendar, 
  MessageSquare, ChevronRight, Globe, Users,
  Award, Zap, Sparkles, CheckCircle, ChevronDown,
  Plus, Minus
} from 'lucide-react';
import Card from '../components/ui/Card';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'For general inquiries and support',
      value: 'hello@marketpro.com',
      cta: 'Send Email',
      color: 'from-blue-500 via-cyan-500 to-sky-500',
      gradient: 'bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team directly',
      value: '+1 (555) 123-4567',
      cta: 'Call Now',
      color: 'from-purple-500 via-pink-500 to-rose-500',
      gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500',
    },
    {
      icon: Calendar,
      title: 'Book a Call',
      description: 'Schedule a free consultation',
      value: '30-min strategy session',
      cta: 'Schedule Now',
      color: 'from-emerald-500 via-green-500 to-teal-500',
      gradient: 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500',
    },
  ];

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'We respond to all inquiries within 24 hours. For existing clients, support tickets are addressed within 4 hours during business hours. We pride ourselves on quick and efficient communication to ensure your needs are met promptly.',
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Yes! We create custom marketing packages tailored to your specific business needs, goals, and budget. Contact us for a personalized quote. Our team will work closely with you to design a solution that perfectly fits your requirements.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across 15+ industries including e-commerce, SaaS, healthcare, education, retail, technology, and professional services. Our diverse expertise allows us to adapt our strategies to your specific industry challenges.',
    },
    {
      question: 'How do you measure success?',
      answer: 'We establish clear KPIs and metrics before starting any campaign. You\'ll receive regular reports tracking progress against these goals. Our comprehensive analytics dashboard provides real-time insights into campaign performance.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing based on your specific needs. Options include monthly retainers, project-based pricing, and performance-based models. Schedule a consultation to get a detailed quote for your specific requirements.',
    },
    {
      question: 'How long does it take to see results?',
      answer: 'Results vary based on the service, but most clients see initial improvements within 30 days. Full campaign optimization typically shows significant results within 3-6 months. We provide regular progress updates throughout.',
    },
  ];

  const stats = [
    { value: '24h', label: 'Response Time', icon: Clock },
    { value: '99%', label: 'Client Satisfaction', icon: Award },
    { value: '50+', label: 'Happy Clients', icon: Users },
    { value: '15+', label: 'Industries', icon: Globe },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-5 bg-gradient-to-b from-gray-50 via-white to-primary-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 dark:border-primary-400/20 mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Premium Support Available 24/7
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="block text-gray-900 dark:text-white mb-2">Let's Create</span>
              <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Your vision, our expertise. Connect with our team to transform your digital presence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative inline-flex mb-3">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 blur-xl opacity-30 rounded-full"></div>
                    <stat.icon className="relative w-10 h-10 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl transform group-hover:scale-[1.02] transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-8 h-full">
                    <div className={`w-20 h-20 rounded-2xl ${method.gradient} flex items-center justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <method.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    <div className="text-xl font-semibold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {method.value}
                    </div>
                    <button className={`px-6 py-3 ${method.gradient} text-white font-medium rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2 group/btn`}>
                      <span>{method.cta}</span>
                      <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center mr-4">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      Send Your Message
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300"
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Service Interest
                    </label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="ppc">PPC Advertising</option>
                      <option value="content">Content Marketing</option>
                      <option value="email">Email Marketing</option>
                      <option value="analytics">Web Analytics</option>
                      <option value="custom">Custom Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project goals and challenges..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 group"
                  >
                    <Send className="h-5 w-5 transform group-hover:rotate-12 transition-transform" />
                    <span className="text-lg">Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Info */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                  <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                    Our Headquarters
                  </span>
                </h3>
                <div className="space-y-8">
                  {[
                    {
                      icon: MapPin,
                      title: 'Headquarters',
                      details: ['123 Marketing Avenue', 'Suite 100', 'San Francisco, CA 94107'],
                    },
                    {
                      icon: Clock,
                      title: 'Business Hours',
                      details: ['Monday - Friday: 9:00 AM - 6:00 PM PST', 'Saturday: 10:00 AM - 2:00 PM PST', 'Sunday: Closed'],
                    },
                    {
                      icon: Phone,
                      title: 'Contact Numbers',
                      details: ['Main: +1 (555) 123-4567', 'Support: +1 (555) 123-4568', 'Fax: +1 (555) 123-4569'],
                    },
                  ].map((info, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-5 p-4 rounded-2xl hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-300"
                    >
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-purple-500/10 border border-primary-500/20 dark:border-primary-400/20 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 dark:text-gray-400">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-center space-x-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Click on any question to see the answer
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`rounded-2xl overflow-hidden ${
                        openFaq === index 
                          ? 'bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-800/50' 
                          : 'bg-white dark:bg-gray-800'
                      } border-2 ${
                        openFaq === index 
                          ? 'border-primary-200 dark:border-primary-700' 
                          : 'border-gray-200 dark:border-gray-700'
                      } transition-all duration-300`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl"
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ${
                            openFaq === index 
                              ? 'bg-primary-500 text-white' 
                              : 'bg-primary-500/10 text-primary-600 dark:text-primary-400'
                          } transition-colors duration-300`}>
                            {openFaq === index ? (
                              <Minus className="h-4 w-4" />
                            ) : (
                              <Plus className="h-4 w-4" />
                            )}
                          </div>
                          <h4 className={`font-bold text-lg ${
                            openFaq === index 
                              ? 'text-primary-700 dark:text-primary-400' 
                              : 'text-gray-900 dark:text-white'
                          } transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400`}>
                            {faq.question}
                          </h4>
                        </div>
                        <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ${
                          openFaq === index ? 'rotate-180 text-primary-600' : 'text-gray-400'
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 ml-12">
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {faq.answer}
                              </p>
                              {index === 0 && (
                                <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                                  <p className="text-sm text-blue-700 dark:text-blue-300">
                                    <strong>Pro Tip:</strong> For urgent matters, please mention "URGENT" in your email subject line for prioritized response.
                                  </p>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Additional FAQ CTA */}
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                    Still have questions?
                  </p>
                  <button className="w-full py-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-primary-500 dark:hover:border-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/20 transition-all duration-300 flex items-center justify-center space-x-3 group">
                    <MessageSquare className="h-5 w-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
                    <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                      Ask a Custom Question
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & Final CTA */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">Visit Our</span>
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Innovation Hub
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Experience our collaborative workspace and meet the team behind your success
            </p>
          </motion.div>

          {/* Interactive Map Placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 group">
            <div className="h-[500px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
              {/* Map Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-96 h-96 rounded-full border-2 border-primary-500/30 animate-pulse"></div>
                  <div className="w-80 h-80 rounded-full border-2 border-purple-500/30 absolute top-8 left-8 animate-pulse animation-delay-1000"></div>
                  <MapPin className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-primary-400 drop-shadow-lg" />
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button className="px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl font-semibold text-gray-900 hover:bg-white transition-all duration-300 hover:scale-105">
                  Get Directions
                </button>
                <button className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 hover:scale-105">
                  Street View
                </button>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 text-center shadow-2xl">
              <div className="inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-purple-500/10 border border-primary-500/20 dark:border-primary-400/20 mb-8">
                <Sparkles className="w-4 h-4 mr-2 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                  Limited Time Offer
                </span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="block text-gray-900 dark:text-white">Ready to Accelerate</span>
                <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Your Growth?
                </span>
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                Join 500+ successful businesses that transformed their digital presence with us
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group px-10 py-5 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3">
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Free Strategy Call</span>
                  <ChevronRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 border-2 border-gray-300 dark:border-gray-600 rounded-2xl font-semibold hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                  <Users className="h-5 w-5" />
                  <span>View Case Studies</span>
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
                {[
                  'No contracts required',
                  '30-day money back guarantee',
                  'Dedicated account manager',
                  '24/7 premium support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;