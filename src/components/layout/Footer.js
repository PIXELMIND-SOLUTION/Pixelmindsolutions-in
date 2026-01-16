import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Rocket className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold text-white">MarketPro</span>
            </div>
            <p className="mb-6">
              Transforming businesses through innovative digital marketing solutions that drive growth and deliver measurable results.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                'SEO Optimization',
                'Social Media Marketing',
                'PPC Advertising',
                'Content Marketing',
                'Email Marketing',
                'Web Analytics'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Newsletter</h3>
            <p className="mb-4">Subscribe to get updates on our latest offers!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-r-lg hover:opacity-90 transition-opacity">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p>&copy; {currentYear} MarketPro Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;