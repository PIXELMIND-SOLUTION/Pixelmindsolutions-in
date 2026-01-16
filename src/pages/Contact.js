import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Calendar, MessageSquare } from 'lucide-react';
import Card from '../components/ui/Card';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'For general inquiries and support',
      value: 'hello@marketpro.com',
      cta: 'Send Email',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team directly',
      value: '+1 (555) 123-4567',
      cta: 'Call Now',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Calendar,
      title: 'Book a Call',
      description: 'Schedule a free consultation',
      value: '30-min strategy session',
      cta: 'Schedule Now',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'We respond to all inquiries within 24 hours. For existing clients, support tickets are addressed within 4 hours during business hours.',
    },
    {
      question: 'Do you offer custom packages?',
      answer: 'Yes! We create custom marketing packages tailored to your specific business needs, goals, and budget. Contact us for a personalized quote.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across 15+ industries including e-commerce, SaaS, healthcare, education, retail, technology, and professional services.',
    },
    {
      question: 'How do you measure success?',
      answer: 'We establish clear KPIs and metrics before starting any campaign. You\'ll receive regular reports tracking progress against these goals.',
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
              <span className="block text-gray-900 dark:text-white">Get in </span>
              <span className="block bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have questions? Ready to grow? We're here to help. Reach out for a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {method.description}
                  </p>
                  <div className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                    {method.value}
                  </div>
                  <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-shadow">
                    {method.cta}
                  </button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                  Send us a message
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Select a service</option>
                      <option>SEO Optimization</option>
                      <option>Social Media Marketing</option>
                      <option>PPC Advertising</option>
                      <option>Content Marketing</option>
                      <option>Email Marketing</option>
                      <option>Web Analytics</option>
                      <option>Custom Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Info */}
              <Card>
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                  Our Office
                </h3>
                <div className="space-y-6">
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
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 dark:text-gray-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* FAQ */}
              <Card>
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="h-6 w-6 text-primary-600" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Frequently Asked Questions
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="pb-6 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map & CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Schedule a meeting at our San Francisco headquarters
            </p>
          </motion.div>

          {/* Map Placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
            <div className="h-96 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary-500 mx-auto mb-4" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Interactive map would appear here
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <Card className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Take the first step towards digital growth. Schedule your free strategy call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow">
                Schedule Free Call
              </button>
              <button className="px-8 py-4 glass-effect border border-gray-300 dark:border-gray-600 rounded-full font-semibold">
                Download Brochure
              </button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;