import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, BarChart3, Users, TrendingUp } from 'lucide-react';
import GradientText from '../ui/GradientText';

const projects = [
  {
    id: 1,
    title: 'E-Commerce SEO Transformation',
    category: 'SEO',
    description: 'Increased organic traffic by 300% for a major online retailer',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
    results: [
      { label: 'Traffic Increase', value: '300%' },
      { label: 'ROI', value: '450%' },
      { label: 'Timeframe', value: '6 Months' },
    ]
  },
  {
    id: 2,
    title: 'Social Media Campaign - Tech Startup',
    category: 'Social Media',
    description: 'Generated 50K leads through targeted social campaigns',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800',
    results: [
      { label: 'Leads Generated', value: '50K' },
      { label: 'CPL', value: '$2.15' },
      { label: 'Engagement', value: '87%' },
    ]
  },
  {
    id: 3,
    title: 'PPC Strategy - SaaS Company',
    category: 'PPC',
    description: 'Reduced CAC by 60% while increasing conversions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    results: [
      { label: 'CAC Reduction', value: '60%' },
      { label: 'Conversions', value: '+240%' },
      { label: 'Monthly Spend', value: '$25K' },
    ]
  },
  {
    id: 4,
    title: 'Content Strategy - Education Platform',
    category: 'Content',
    description: 'Built authority content that ranked for 500+ keywords',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800',
    results: [
      { label: 'Keywords Ranked', value: '500+' },
      { label: 'Backlinks', value: '1.2K' },
      { label: 'Monthly Traffic', value: '150K' },
    ]
  },
  {
    id: 5,
    title: 'Email Automation - Retail Brand',
    category: 'Email',
    description: 'Automated customer journey increased revenue by 35%',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800',
    results: [
      { label: 'Revenue Increase', value: '35%' },
      { label: 'Open Rate', value: '42%' },
      { label: 'Click Rate', value: '18%' },
    ]
  },
  {
    id: 6,
    title: 'Analytics Implementation - Enterprise',
    category: 'Analytics',
    description: 'Complete data infrastructure setup for real-time insights',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    results: [
      { label: 'Data Sources', value: '15+' },
      { label: 'Reporting Time', value: '-80%' },
      { label: 'Accuracy', value: '99.8%' },
    ]
  },
];

const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Content', 'Email', 'Analytics'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Our </span>
            <GradientText>Success Stories</GradientText>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real results from real clients. See how we've transformed businesses.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  
                  {/* Results */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold">{result.value}</div>
                          <div className="text-xs text-gray-300">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                      <Eye size={20} />
                    </button>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary-600/90 to-purple-600/90 p-6 flex flex-col justify-end transition-opacity duration-300"
                >
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6">{project.description}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                          <div className="text-xl font-bold">{result.value}</div>
                          <div className="text-xs">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                      <span>View Case Study</span>
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow">
            View All Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;