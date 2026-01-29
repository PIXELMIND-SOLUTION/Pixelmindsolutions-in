import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Target,
  BarChart,
  Clock,
  Globe,
  Share2,
  Mail,
  ExternalLink,
  ChevronRight,
  Play,
  MessageSquare,
  Shield,
  Award,
  Zap,
  Star,
  CheckCircle,
  PieChart,
  Cpu,
  Filter,
  MapPin
} from 'lucide-react';

const SinglePortfolioPage = () => {
  const { id } = useParams();
  
  // Raw portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: 'Global E-commerce Transformation',
      client: 'FashionForward Inc.',
      category: 'SEO & PPC',
      industry: 'Fashion Retail',
      location: 'Global',
      duration: '12 Months',
      budget: '$250,000',
      challenge: 'FashionForward Inc., a mid-sized e-commerce retailer specializing in sustainable fashion, was struggling with low organic visibility and inefficient ad spend. Despite having quality products, they faced high customer acquisition costs and poor search engine rankings in a highly competitive market.',
      solution: 'We implemented a comprehensive digital transformation strategy focusing on three core areas: Technical SEO optimization, data-driven PPC campaigns, and conversion rate optimization. Our approach included site-wide technical improvements, content strategy overhaul, and automated bidding systems.',
      results: [
        { metric: 'Revenue Growth', value: '+325%', change: '+325%', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
        { metric: 'Organic Traffic', value: '+280%', change: '+280%', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
        { metric: 'New Customers', value: '45,000+', change: '+400%', icon: Users, color: 'from-purple-500 to-pink-500' },
        { metric: 'ROI', value: '480%', change: '+480%', icon: BarChart, color: 'from-orange-500 to-red-500' },
        { metric: 'Conversion Rate', value: '4.8%', change: '+120%', icon: Target, color: 'from-indigo-500 to-blue-500' },
        { metric: 'Avg. Order Value', value: '$89', change: '+35%', icon: DollarSign, color: 'from-yellow-500 to-amber-500' },
      ],
      timeline: [
        { phase: 'Phase 1', duration: 'Months 1-3', title: 'Discovery & Audit', tasks: ['Technical SEO audit', 'Competitor analysis', 'Keyword research', 'Conversion funnel analysis'] },
        { phase: 'Phase 2', duration: 'Months 4-6', title: 'Implementation', tasks: ['Site optimization', 'Content strategy', 'PPC campaign setup', 'Automation systems'] },
        { phase: 'Phase 3', duration: 'Months 7-9', title: 'Optimization', tasks: ['A/B testing', 'Performance monitoring', 'Budget optimization', 'Scale successful channels'] },
        { phase: 'Phase 4', duration: 'Months 10-12', title: 'Scaling', tasks: ['International expansion', 'Advanced automation', 'Team training', 'Long-term strategy'] },
      ],
      technologies: ['Google Ads', 'Google Analytics 4', 'SEMrush', 'Ahrefs', 'Hotjar', 'Optimizely', 'Shopify Plus', 'Klaviyo'],
      team: [
        { role: 'Lead Strategist', name: 'Alex Morgan', expertise: 'Digital Strategy' },
        { role: 'SEO Specialist', name: 'Sarah Chen', expertise: 'Technical SEO' },
        { role: 'PPC Manager', name: 'Marcus Lee', expertise: 'Paid Advertising' },
        { role: 'Content Director', name: 'Jessica Park', expertise: 'Content Strategy' },
        { role: 'Data Analyst', name: 'David Kim', expertise: 'Analytics & Reporting' },
      ],
      testimonials: [
        {
          quote: "MarketPro transformed our business. The 325% revenue growth exceeded our wildest expectations. Their data-driven approach and attention to detail were exceptional.",
          author: "Michael Rodriguez",
          position: "CEO, FashionForward Inc.",
          rating: 5
        }
      ],
      metrics: {
        before: {
          organicTraffic: '15,000 monthly',
          conversionRate: '2.2%',
          cpa: '$45',
          roi: '120%'
        },
        after: {
          organicTraffic: '57,000 monthly',
          conversionRate: '4.8%',
          cpa: '$28',
          roi: '480%'
        }
      },
      color: 'from-blue-500 to-cyan-500',
      featuredImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600',
      gallery: [
        'https://images.unsplash.com/photo-1558769132-cb1ceededbc1?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w-800',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w-800'
      ]
    },
    {
      id: 2,
      title: 'SaaS Market Domination Strategy',
      client: 'CloudTech Solutions',
      category: 'Content Marketing',
      industry: 'SaaS',
      location: 'North America',
      duration: '8 Months',
      budget: '$180,000',
      challenge: 'CloudTech Solutions, a B2B SaaS company, was struggling with low brand authority and poor content engagement. Despite having superior technology, they were losing market share to competitors with better content strategies.',
      solution: 'We developed an authority-driven content strategy focusing on thought leadership, technical SEO, and data storytelling. The approach included comprehensive content audits, pillar-cluster models, and technical optimization.',
      results: [
        { metric: 'Organic Traffic', value: '+420%', change: '+420%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
        { metric: 'Enterprise Sign-ups', value: '12,000+', change: '+350%', icon: Users, color: 'from-blue-500 to-cyan-500' },
        { metric: 'MRR Growth', value: '+200%', change: '+200%', icon: DollarSign, color: 'from-purple-500 to-pink-500' },
        { metric: 'Keyword Rankings', value: 'Top 10', change: '+500%', icon: Target, color: 'from-orange-500 to-red-500' },
        { metric: 'Backlinks', value: '2,400+', change: '+800%', icon: Share2, color: 'from-indigo-500 to-blue-500' },
        { metric: 'Lead Quality', value: '+75%', change: '+75%', icon: Award, color: 'from-yellow-500 to-amber-500' },
      ],
      timeline: [
        { phase: 'Phase 1', duration: 'Months 1-2', title: 'Research & Planning', tasks: ['Content audit', 'Competitor analysis', 'Keyword mapping', 'Editorial calendar'] },
        { phase: 'Phase 2', duration: 'Months 3-4', title: 'Content Creation', tasks: ['Pillar content', 'Technical guides', 'Case studies', 'Video production'] },
        { phase: 'Phase 3', duration: 'Months 5-6', title: 'Distribution', tasks: ['SEO optimization', 'Social amplification', 'Email campaigns', 'Influencer outreach'] },
        { phase: 'Phase 4', duration: 'Months 7-8', title: 'Optimization', tasks: ['Performance analysis', 'Content refresh', 'Conversion optimization', 'Scaling strategy'] },
      ],
      technologies: ['WordPress', 'Google Search Console', 'SEMrush', 'Clearscope', 'BuzzSumo', 'Canva', 'Loom', 'HubSpot'],
      team: [
        { role: 'Content Director', name: 'Jessica Park', expertise: 'Content Strategy' },
        { role: 'SEO Manager', name: 'Sarah Chen', expertise: 'Technical SEO' },
        { role: 'Writer', name: 'Emily Wong', expertise: 'Technical Writing' },
        { role: 'Designer', name: 'Chris Evans', expertise: 'Visual Content' },
        { role: 'Analyst', name: 'David Kim', expertise: 'Content Analytics' },
      ],
      testimonials: [
        {
          quote: "The content strategy developed by MarketPro positioned us as industry leaders. Our organic traffic quadrupled and enterprise sign-ups tripled within 8 months.",
          author: "Robert Chen",
          position: "CMO, CloudTech Solutions",
          rating: 5
        }
      ],
      metrics: {
        before: {
          organicTraffic: '8,000 monthly',
          conversionRate: '1.5%',
          mrr: '$45,000',
          backlinks: '300'
        },
        after: {
          organicTraffic: '41,600 monthly',
          conversionRate: '3.8%',
          mrr: '$135,000',
          backlinks: '2,700'
        }
      },
      color: 'from-purple-500 to-pink-500',
      featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600',
      gallery: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800'
      ]
    },
    {
      id: 3,
      title: 'Local to National Expansion',
      client: 'UrbanBrew Coffee',
      category: 'Social Media Marketing',
      industry: 'Food & Beverage',
      location: 'United States',
      duration: '6 Months',
      budget: '$120,000',
      challenge: 'UrbanBrew Coffee, a premium coffee shop chain, had strong local presence but struggled to expand nationally. Limited brand reach and low social engagement were preventing growth beyond their original markets.',
      solution: 'We executed an influencer-driven social media strategy combined with user-generated content campaigns and location-based targeting. The approach focused on building community and leveraging micro-influencers.',
      results: [
        { metric: 'Social Engagement', value: '+650%', change: '+650%', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
        { metric: 'Instagram Followers', value: '85,000+', change: '+420%', icon: Users, color: 'from-blue-500 to-cyan-500' },
        { metric: 'Store Sales Growth', value: '+180%', change: '+180%', icon: DollarSign, color: 'from-purple-500 to-pink-500' },
        { metric: 'Brand Mentions', value: '+320%', change: '+320%', icon: Share2, color: 'from-orange-500 to-red-500' },
        { metric: 'New Locations', value: '12', change: '+300%', icon: MapPin, color: 'from-indigo-500 to-blue-500' },
        { metric: 'Customer Retention', value: '92%', change: '+35%', icon: Star, color: 'from-yellow-500 to-amber-500' },
      ],
      timeline: [
        { phase: 'Phase 1', duration: 'Month 1', title: 'Brand Audit', tasks: ['Social media audit', 'Competitor analysis', 'Target audience research', 'Content strategy'] },
        { phase: 'Phase 2', duration: 'Months 2-3', title: 'Influencer Campaign', tasks: ['Influencer identification', 'Campaign development', 'Content creation', 'Launch'] },
        { phase: 'Phase 3', duration: 'Months 4-5', title: 'Community Building', tasks: ['UGC campaigns', 'Local partnerships', 'Event marketing', 'Social advertising'] },
        { phase: 'Phase 4', duration: 'Month 6', title: 'Scaling', tasks: ['National expansion', 'Franchise support', 'Advanced analytics', 'Team training'] },
      ],
      technologies: ['Instagram', 'TikTok', 'Hootsuite', 'Later', 'Brandwatch', 'Canva', 'Google My Business', 'Facebook Ads'],
      team: [
        { role: 'Social Media Manager', name: 'Taylor Swift', expertise: 'Social Strategy' },
        { role: 'Content Creator', name: 'Jamie Smith', expertise: 'Visual Content' },
        { role: 'Influencer Manager', name: 'Alex Johnson', expertise: 'Influencer Marketing' },
        { role: 'Analyst', name: 'David Kim', expertise: 'Social Analytics' },
        { role: 'Community Manager', name: 'Morgan Lee', expertise: 'Community Building' },
      ],
      testimonials: [
        {
          quote: "MarketPro's social strategy transformed our local coffee shop into a national brand. The 650% engagement increase led to 12 new locations in just 6 months.",
          author: "Sophia Williams",
          position: "Founder, UrbanBrew Coffee",
          rating: 5
        }
      ],
      metrics: {
        before: {
          socialFollowers: '20,000',
          engagementRate: '1.2%',
          monthlySales: '$85,000',
          locations: 4
        },
        after: {
          socialFollowers: '105,000',
          engagementRate: '7.8%',
          monthlySales: '$238,000',
          locations: 16
        }
      },
      color: 'from-orange-500 to-red-500',
      featuredImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600',
      gallery: [
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800',
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800'
      ]
    }
  ];

  // Find the specific portfolio item
  const portfolio = portfolioItems.find(p => p.id === parseInt(id)) || portfolioItems[0];
  const [activeTab, setActiveTab] = useState('overview');

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📊</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The case study you're looking for doesn't exist.</p>
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Back to Portfolio
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${portfolio.color.replace('500', '500/10')}`} />
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Link to="/portfolio">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 mb-8"
              >
                <ArrowLeft size={20} />
                <span>Back to Portfolio</span>
              </motion.button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${portfolio.color.replace('500', '500/20')} rounded-full mb-6`}>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {portfolio.category}
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                  {portfolio.title}
                </h1>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Client</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{portfolio.client}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{portfolio.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Budget</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{portfolio.budget}</div>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  {portfolio.challenge}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                  >
                    <MessageSquare size={20} />
                    <span>Schedule Similar Project</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center justify-center gap-3"
                  >
                    <Play size={20} />
                    <span>Watch Video Case Study</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className={`relative bg-gradient-to-br ${portfolio.color} rounded-3xl p-8 shadow-2xl overflow-hidden`}>
                  <img
                    src={portfolio.featuredImage}
                    alt={portfolio.title}
                    className="w-full h-64 object-cover rounded-2xl mb-6"
                  />
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {portfolio.results.slice(0, 4).map((result, index) => (
                      <div key={index} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <result.icon className="h-5 w-5 text-blue-500" />
                          <div className="text-sm text-gray-500 dark:text-gray-400">{result.metric}</div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{result.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 border-b border-gray-200 dark:border-gray-700">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4">
              {['overview', 'results', 'process', 'team', 'testimonials'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Challenge */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    The Challenge
                  </h2>
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {portfolio.challenge}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">High customer acquisition costs</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Poor search engine rankings</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Limited brand visibility</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Inefficient marketing spend</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Our Solution
                  </h2>
                  <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {portfolio.solution}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Comprehensive technical SEO audit and optimization</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Data-driven PPC campaign management</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Conversion rate optimization strategy</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">Continuous performance monitoring and optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Metrics */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Key Metrics Comparison
                </h2>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        Before MarketPro
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <span className="text-gray-700 dark:text-gray-300">Organic Traffic</span>
                          <span className="text-lg font-bold text-gray-900 dark:text-white">{portfolio.metrics.before.organicTraffic}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <span className="text-gray-700 dark:text-gray-300">Conversion Rate</span>
                          <span className="text-lg font-bold text-gray-900 dark:text-white">{portfolio.metrics.before.conversionRate}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <span className="text-gray-700 dark:text-gray-300">Cost per Acquisition</span>
                          <span className="text-lg font-bold text-gray-900 dark:text-white">{portfolio.metrics.before.cpa}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                          <span className="text-gray-700 dark:text-gray-300">ROI</span>
                          <span className="text-lg font-bold text-gray-900 dark:text-white">{portfolio.metrics.before.roi}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                        After MarketPro
                      </h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl">
                          <span className="text-gray-700 dark:text-gray-300">Organic Traffic</span>
                          <span className="text-lg font-bold text-green-600 dark:text-green-400">{portfolio.metrics.after.organicTraffic}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl">
                          <span className="text-gray-700 dark:text-gray-300">Conversion Rate</span>
                          <span className="text-lg font-bold text-green-600 dark:text-green-400">{portfolio.metrics.after.conversionRate}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl">
                          <span className="text-gray-700 dark:text-gray-300">Cost per Acquisition</span>
                          <span className="text-lg font-bold text-green-600 dark:text-green-400">{portfolio.metrics.after.cpa}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl">
                          <span className="text-gray-700 dark:text-gray-300">ROI</span>
                          <span className="text-lg font-bold text-green-600 dark:text-green-400">{portfolio.metrics.after.roi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Measurable Results
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {portfolio.results.map((result, index) => {
                  const Icon = result.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${result.color} flex items-center justify-center mb-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {result.value}
                      </div>
                      <div className="text-gray-600 dark:text-gray-300 mb-2">
                        {result.metric}
                      </div>
                      <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                        {result.change}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ROI Calculation */}
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white mb-12">
                <h3 className="text-2xl font-bold mb-6">ROI Calculation</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold mb-2">480%</div>
                    <div className="text-gray-300">Total ROI</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold mb-2">3.2x</div>
                    <div className="text-gray-300">Customer Lifetime Value</div>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl">
                    <div className="text-4xl font-bold mb-2">5.4 Months</div>
                    <div className="text-gray-300">Payback Period</div>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {portfolio.gallery.map((image, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={image}
                        alt={`Project ${index + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Process Tab */}
          {activeTab === 'process' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Our Process & Timeline
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />
                
                <div className="space-y-12">
                  {portfolio.timeline.map((phase, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-0 lg:left-8 transform -translate-x-1/2 lg:translate-x-0 lg:-translate-x-1/2 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full ring-4 ring-white dark:ring-gray-800 z-10" />
                      
                      <div className="lg:ml-24">
                        <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                            <div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">{phase.duration}</div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{phase.phase}</h3>
                              <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-1">{phase.title}</div>
                            </div>
                            <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full">
                              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Phase {index + 1}</span>
                            </div>
                          </div>
                          
                          <div className="grid md:grid-cols-2 gap-4">
                            {phase.tasks.map((task, taskIndex) => (
                              <div key={taskIndex} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 dark:text-gray-300">{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {portfolio.technologies.map((tech, index) => (
                    <span key={index} className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Project Team
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {portfolio.team.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl text-center"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <div className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                      {member.role}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      {member.expertise}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Project Management */}
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Project Management Approach
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Weekly Updates</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Detailed progress reports and performance metrics</p>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Direct Communication</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">24/7 access to project leads and specialists</p>
                  </div>
                  <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Data-Driven Decisions</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Real-time analytics and performance tracking</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Client Testimonials
              </h2>
              
              <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl mb-12">
                {portfolio.testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-2xl italic text-gray-700 dark:text-gray-300 mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <div className="text-xl font-bold text-white">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white">{testimonial.author}</div>
                        <div className="text-gray-600 dark:text-gray-400">{testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready for Similar Results?</h3>
                <p className="mb-8 text-blue-100">
                  Let's discuss how we can achieve similar success for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                  >
                    <MessageSquare size={20} />
                    <span>Schedule Free Consultation</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                  >
                    <ExternalLink size={20} />
                    <span>Download Case Study PDF</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Related Projects */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Similar Case Studies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.filter(p => p.id !== portfolio.id).slice(0, 3).map((item) => (
                <Link key={item.id} to={`/portfolio/${item.id}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${item.color.replace('500', '500/20')} rounded-full`}>
                          {item.category}
                        </span>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {item.client} • {item.duration}
                      </p>
                      <div className="flex items-center gap-4">
                        {item.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">
                              {result.value}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {result.metric.split(' ')[0]}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Ready to Transform Your Business?
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                Let's create your own success story. Schedule a free strategy session with our experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                >
                  <MessageSquare size={20} />
                  <span>Start Your Project</span>
                </motion.button>
                
                <Link to="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center justify-center gap-3"
                  >
                    <span>View More Case Studies</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePortfolioPage;