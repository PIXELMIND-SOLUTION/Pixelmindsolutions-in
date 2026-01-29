import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Rocket,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Clock,
  Sparkles,
  Shield,
  Zap,
  ChevronRight,
  ArrowUpRight,
  Globe,
  Send
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-24 pb-12 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#06cabc]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#06a6c4]/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #06cabc 1px, transparent 1px),
                             linear-gradient(to bottom, #06cabc 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-32 left-10 w-32 h-32 bg-[#06cabc]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        className="absolute bottom-32 right-10 w-40 h-40 bg-[#06a6c4]/10 rounded-full blur-3xl"
      />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-6">
              <motion.img
                src="/lightlogo.png"
                alt="PixelMindSolutions Logo"
                className="h-12 w-auto object-contain"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-lg">
              We transform businesses through cutting-edge digital strategies that deliver measurable growth and sustainable success.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { icon: MapPin, text: '123 Innovation Drive, San Francisco, CA' },
                { icon: Phone, text: '+1 (555) 123-4567' },
                { icon: Clock, text: 'Mon - Fri: 9:00 AM - 6:00 PM PST' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-[#06cabc]" />
                  <span className="text-gray-400">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#06cabc]/20 to-[#06a6c4]/20 rounded-2xl blur-xl" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#06cabc] to-[#06a6c4] flex items-center justify-center">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Stay Ahead</h3>
                  <p className="text-gray-400">Get exclusive insights & updates</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#06cabc] focus:border-transparent"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#06cabc] to-[#06a6c4] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <Sparkles className="h-5 w-5" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Subscribe Now</span>
                      <ChevronRight className="h-5 w-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-700/50">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'SEO Optimization',
                'Social Media Marketing',
                'PPC Advertising',
                'Content Strategy',
                'Email Marketing',
                'Web Analytics',
                'Brand Development',
                'Conversion Optimization'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-700/50">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { text: 'Home', href: '/' },
                { text: 'Services', href: '/services' },
                { text: 'Case Studies', href: '/portfolio' },
                { text: 'About Us', href: '/about' },
                { text: 'Team', href: '/team' },
                { text: 'Careers', href: '/careers' },
                { text: 'Blog', href: '/blog' },
                { text: 'Contact', href: '/contact' }
              ].map((link, index) => (
                <motion.li
                  key={link.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-700/50">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Team',
                'Careers',
                'Press',
                'Partners',
                'Legal',
                'Privacy Policy',
                'Terms of Service'
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href="#"
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-3 border-b border-gray-700/50">
              Connect With Us
            </h3>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {[
                { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                { icon: Twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
                { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                { icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
                { icon: Globe, label: 'Website', color: 'hover:bg-[#06cabc]' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className={`p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">SSL Secured</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-xl">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              <p>&copy; {currentYear} PixelMindSolutions. All rights reserved.</p>
            </div>

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 bg-gradient-to-r from-[#06cabc]/20 to-[#06a6c4]/20 text-[#06cabc] rounded-xl hover:from-[#06cabc]/30 hover:to-[#06a6c4]/30 transition-all flex items-center gap-2"
            >
              <span>Back to Top</span>
              <ArrowUpRight className="h-4 w-4 rotate-90" />
            </motion.button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center text-gray-500 text-xs">
            <p>PixelMindSolutions is a registered trademark. All other trademarks are the property of their respective owners.</p>
            <p className="mt-2">Made with ❤️ for digital excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;