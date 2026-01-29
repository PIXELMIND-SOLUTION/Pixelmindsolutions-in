import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  BarChart3,
  Users,
  TrendingUp,
  Search,
  MessageCircle,
  DollarSign,
  FileText,
  Mail,
  Monitor,
  Sparkles,
  Target,
  Zap,
  Globe,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce SEO',
    category: 'SEO',
    description: '300% traffic growth through strategic optimization',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
    color: 'from-blue-500 to-cyan-500',
    metrics: [
      { value: '300%', label: 'Traffic' },
      { value: '450%', label: 'ROI' },
      { value: '6M', label: 'Timeline' },
    ],
  },
  {
    id: 2,
    title: 'Social Campaign',
    category: 'Social',
    description: '50K leads generated through targeted outreach',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800',
    color: 'from-purple-500 to-pink-500',
    metrics: [
      { value: '50K', label: 'Leads' },
      { value: '$2.15', label: 'CPL' },
      { value: '87%', label: 'Engagement' },
    ],
  },
  {
    id: 3,
    title: 'PPC Strategy',
    category: 'PPC',
    description: '60% cost reduction while boosting conversions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800',
    color: 'from-orange-500 to-red-500',
    metrics: [
      { value: '60%', label: 'Cost Down' },
      { value: '+240%', label: 'Conversions' },
      { value: '$25K', label: 'Monthly' },
    ],
  },
  {
    id: 4,
    title: 'Content Strategy',
    category: 'Content',
    description: '500+ keyword rankings through authority content',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800',
    color: 'from-green-500 to-emerald-500',
    metrics: [
      { value: '500+', label: 'Keywords' },
      { value: '1.2K', label: 'Links' },
      { value: '150K', label: 'Monthly' },
    ],
  },
  {
    id: 5,
    title: 'Email Automation',
    category: 'Email',
    description: '35% revenue lift through smart automation',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800',
    color: 'from-yellow-500 to-amber-500',
    metrics: [
      { value: '35%', label: 'Revenue' },
      { value: '42%', label: 'Open Rate' },
      { value: '18%', label: 'Clicks' },
    ],
  },
  {
    id: 6,
    title: 'Analytics Setup',
    category: 'Analytics',
    description: 'Real-time insights for data-driven decisions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
    color: 'from-indigo-500 to-blue-500',
    metrics: [
      { value: '15+', label: 'Sources' },
      { value: '-80%', label: 'Time Saved' },
      { value: '99.8%', label: 'Accuracy' },
    ],
  },
];

const categories = ['All', 'SEO', 'Social', 'PPC', 'Content', 'Email', 'Analytics'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-600 dark:text-primary-400 mb-6">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-gray-900 dark:text-white">Proven</span>
            <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real projects, measurable results. See how we drive growth for our clients.
          </p>
        </motion.div>

        {/* Simple Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Simple & Clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300">
                
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Simple Metrics */}
                  <div className="flex justify-between items-center">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2">
            <Globe size={20} />
            <span>View All Case Studies</span>
          </button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform"
              >
                <span className="text-xl">×</span>
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2">
                {/* Left - Image */}
                <div className="relative h-64 md:h-full">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-30`} />
                </div>

                {/* Right - Details */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${selectedProject.color} text-white text-sm font-semibold rounded-full`}>
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {selectedProject.description}
                  </p>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Results
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl">
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                      View Full Case Study
                    </button>
                    <button className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;