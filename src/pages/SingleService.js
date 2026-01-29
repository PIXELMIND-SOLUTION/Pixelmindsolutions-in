import React from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
  Target,
  BarChart,
  Calendar,
  MessageSquare,
  Star,
  Shield,
  Zap,
  Rocket,
  ExternalLink,
  Play,
  Search,
  Share2,
  Mail,
  Cpu,
  PieChart
} from 'lucide-react';

const SingleServicePage = () => {
  const { id } = useParams();
  
  // Service data array
  const services = [
    {
      id: 1,
      title: "SEO Optimization",
      category: "Search Engine Optimization",
      description: "Comprehensive SEO strategies that dramatically improve search rankings and organic traffic.",
      longDescription: "Our SEO Optimization service focuses on sustainable growth by combining technical SEO, content strategy, and authority building to improve visibility and conversions.",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      duration: "3–6 Months",
      price: "$1,500/month",
      popularity: 98,

      features: [
        {
          title: "Technical SEO Audit",
          description: "Website technical health analysis",
          details: ["Site speed", "Mobile optimization", "Indexing", "Crawl errors"],
        },
        {
          title: "Keyword Strategy",
          description: "High-intent keyword targeting",
          details: ["Competitor research", "Intent mapping", "SERP analysis"],
        },
        {
          title: "Content Optimization",
          description: "Content improvements for ranking",
          details: ["On-page SEO", "Internal linking", "Meta optimization"],
        },
        {
          title: "Link Building",
          description: "Authority backlink acquisition",
          details: ["Guest posting", "Outreach", "Digital PR"],
        },
        {
          title: "Local SEO",
          description: "Local search optimization",
          details: ["Google Business", "Local citations", "Reviews"],
        },
        {
          title: "Analytics & Reporting",
          description: "Performance tracking",
          details: ["Custom dashboards", "Monthly reports", "ROI tracking"],
        },
      ],

      results: [
        { metric: "Organic Traffic", value: "+300%", icon: TrendingUp },
        { metric: "Keyword Rankings", value: "+150%", icon: Target },
        { metric: "Conversion Rate", value: "+85%", icon: BarChart },
        { metric: "Bounce Rate", value: "-40%", icon: TrendingUp },
        { metric: "Domain Authority", value: "+25", icon: Shield },
        { metric: "ROI", value: "450%", icon: DollarSign },
      ],

      process: [
        { step: 1, title: "Discovery", duration: "Week 1–2", description: "Audit & analysis" },
        { step: 2, title: "Strategy", duration: "Week 3–4", description: "SEO roadmap" },
        { step: 3, title: "Execution", duration: "Month 1–3", description: "Optimization" },
        { step: 4, title: "Growth", duration: "Month 4–6", description: "Content & links" },
        { step: 5, title: "Optimization", duration: "Ongoing", description: "Testing & scaling" },
      ],

      caseStudy: {
        client: "EcoTech Solutions",
        industry: "Renewable Energy",
        challenge: "Low organic visibility",
        solution: "Technical + content SEO",
        results: ["+450% traffic", "+320% leads", "+280% revenue"],
        timeline: "6 months",
      },

      packages: [
        {
          name: "Starter",
          price: "$1,500/month",
          features: ["SEO audit", "Keyword research", "On-page SEO"],
          bestFor: "Small businesses",
        },
        {
          name: "Professional",
          price: "$2,500/month",
          features: ["Content strategy", "Link building", "Advanced analytics"],
          bestFor: "Growing businesses",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$5,000+/month",
          features: ["Dedicated strategist", "Custom tools", "Priority support"],
          bestFor: "Large enterprises",
        },
      ],
    },
    {
      id: 2,
      title: "Social Media Marketing",
      category: "Social Media",
      description: "Build brand awareness and engagement across all major social platforms.",
      longDescription: "We combine creative content, influencer marketing, and data-driven strategy to grow your social presence and audience loyalty.",
      icon: Share2,
      color: "from-purple-500 to-pink-500",
      duration: "Ongoing",
      price: "$2,000/month",
      popularity: 92,

      features: [
        {
          title: "Platform Strategy",
          description: "Channel-specific planning",
          details: ["Platform selection", "Audience targeting", "Content calendar"],
        },
        {
          title: "Content Creation",
          description: "High-quality social content",
          details: ["Reels", "Graphics", "Copywriting"],
        },
        {
          title: "Community Management",
          description: "Audience engagement",
          details: ["DM handling", "Comment moderation"],
        },
        {
          title: "Paid Social Ads",
          description: "Performance campaigns",
          details: ["Ad creatives", "Audience testing", "Budget optimization"],
        },
        {
          title: "Influencer Marketing",
          description: "Creator collaborations",
          details: ["Influencer outreach", "Campaign execution"],
        },
        {
          title: "Analytics",
          description: "Performance tracking",
          details: ["Engagement metrics", "Growth reports"],
        },
      ],

      results: [
        { metric: "Engagement Rate", value: "+85%", icon: TrendingUp },
        { metric: "Follower Growth", value: "50K+", icon: Users },
        { metric: "Cost per Engagement", value: "-30%", icon: DollarSign },
        { metric: "Brand Awareness", value: "+120%", icon: TrendingUp },
        { metric: "Content Reach", value: "+200%", icon: Share2 },
        { metric: "ROI", value: "380%", icon: DollarSign },
      ],

      process: [
        { step: 1, title: "Audit", duration: "Week 1", description: "Profile analysis" },
        { step: 2, title: "Strategy", duration: "Week 2", description: "Content roadmap" },
        { step: 3, title: "Execution", duration: "Ongoing", description: "Posting & ads" },
        { step: 4, title: "Optimization", duration: "Monthly", description: "Improve performance" },
      ],

      caseStudy: {
        client: "UrbanWear",
        industry: "Fashion",
        challenge: "Low engagement",
        solution: "Short-form video + influencers",
        results: ["+90% engagement", "+120% followers", "+75% sales"],
        timeline: "4 months",
      },

      packages: [
        {
          name: "Starter",
          price: "$2,000/month",
          features: ["3 posts/week", "Analytics"],
          bestFor: "Small brands",
        },
        {
          name: "Professional",
          price: "$3,500/month",
          features: ["Daily posts", "Ads", "Influencer campaigns"],
          bestFor: "Growing brands",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$6,000+/month",
          features: ["Dedicated team", "Advanced ads"],
          bestFor: "Large brands",
        },
      ],
    },
    {
      id: 3,
      title: "PPC Advertising",
      category: "Paid Advertising",
      description: "High-performance PPC campaigns that maximize ROI and conversions.",
      longDescription: "We create and optimize data-driven PPC campaigns across Google, Meta, and LinkedIn to reduce acquisition cost and boost revenue.",
      icon: Target,
      color: "from-orange-500 to-red-500",
      duration: "1–3 Months",
      price: "$1,800/month + ad spend",
      popularity: 95,

      features: [
        {
          title: "Campaign Setup",
          description: "Account & funnel setup",
          details: ["Keyword research", "Audience targeting"],
        },
        {
          title: "Ad Creation",
          description: "High-converting ads",
          details: ["Copywriting", "Creative testing"],
        },
        {
          title: "Landing Page Optimization",
          description: "Conversion-focused pages",
          details: ["UX improvements", "A/B testing"],
        },
        {
          title: "Bid Management",
          description: "Cost optimization",
          details: ["Smart bidding", "Budget scaling"],
        },
        {
          title: "Tracking",
          description: "Performance measurement",
          details: ["Conversion tracking", "ROI reports"],
        },
      ],

      results: [
        { metric: "Conversion Rate", value: "+240%", icon: TrendingUp },
        { metric: "Cost per Acquisition", value: "-60%", icon: DollarSign },
        { metric: "ROI", value: "450%", icon: DollarSign },
        { metric: "Click-through Rate", value: "+35%", icon: TrendingUp },
        { metric: "Quality Score", value: "+40%", icon: BarChart },
        { metric: "Monthly Leads", value: "500+", icon: Users },
      ],

      process: [
        { step: 1, title: "Research", duration: "Week 1", description: "Audience & keywords" },
        { step: 2, title: "Launch", duration: "Week 2", description: "Campaign setup" },
        { step: 3, title: "Optimization", duration: "Ongoing", description: "Scaling winners" },
      ],

      caseStudy: {
        client: "FinTech Pro",
        industry: "Finance",
        challenge: "High acquisition cost",
        solution: "Keyword + funnel optimization",
        results: ["-65% CPA", "+320% ROI", "+280% conversions"],
        timeline: "3 months",
      },

      packages: [
        {
          name: "Starter",
          price: "$1,800/month",
          features: ["Campaign setup", "Basic optimization"],
          bestFor: "Small campaigns",
        },
        {
          name: "Professional",
          price: "$3,000/month",
          features: ["Advanced optimization", "Landing page testing"],
          bestFor: "Scaling brands",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$6,000+/month",
          features: ["Multi-platform ads", "Dedicated strategist"],
          bestFor: "Large ad spenders",
        },
      ],
    },
    {
      id: 4,
      title: "Content Marketing",
      category: "Content Strategy",
      description: "Create valuable content that attracts, engages, and converts.",
      longDescription: "We build content engines that drive organic growth, authority, and long-term customer trust.",
      icon: PieChart,
      color: "from-green-500 to-emerald-500",
      duration: "Ongoing",
      price: "$2,500/month",
      popularity: 90,

      features: [
        {
          title: "Content Strategy",
          description: "Editorial planning",
          details: ["Topic research", "Content calendar"],
        },
        {
          title: "Production",
          description: "High-quality content",
          details: ["Blogs", "Videos", "Infographics"],
        },
        {
          title: "Distribution",
          description: "Maximize reach",
          details: ["SEO", "Social distribution"],
        },
        {
          title: "Measurement",
          description: "Track engagement",
          details: ["Traffic", "Leads", "Shares"],
        },
      ],

      results: [
        { metric: "Content Engagement", value: "+500%", icon: TrendingUp },
        { metric: "Backlinks", value: "120+", icon: Share2 },
        { metric: "Lead Quality", value: "+75%", icon: Users },
        { metric: "Organic Traffic", value: "+350%", icon: TrendingUp },
        { metric: "Time on Page", value: "+45%", icon: Clock },
        { metric: "ROI", value: "420%", icon: DollarSign },
      ],

      process: [
        { step: 1, title: "Research", duration: "Week 1", description: "Audience insights" },
        { step: 2, title: "Creation", duration: "Ongoing", description: "Content production" },
        { step: 3, title: "Optimization", duration: "Monthly", description: "Improve performance" },
      ],

      caseStudy: {
        client: "HealthPlus",
        industry: "Healthcare",
        challenge: "Low content engagement",
        solution: "Educational content strategy",
        results: ["+600% traffic", "+200% leads", "+150% conversions"],
        timeline: "5 months",
      },

      packages: [
        {
          name: "Starter",
          price: "$2,500/month",
          features: ["4 blogs/month", "SEO optimization"],
          bestFor: "Startups",
        },
        {
          name: "Professional",
          price: "$4,000/month",
          features: ["Blogs + video", "Content promotion"],
          bestFor: "Growing brands",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$7,000+/month",
          features: ["Full content team", "Custom assets"],
          bestFor: "Enterprises",
        },
      ],
    },
    {
      id: 5,
      title: "Email Marketing",
      category: "Email Automation",
      description: "Nurture leads and retain customers with personalized email campaigns.",
      longDescription: "We build automated email sequences that convert subscribers into customers and keep them engaged.",
      icon: Mail,
      color: "from-yellow-500 to-amber-500",
      duration: "Ongoing",
      price: "$1,200/month",
      popularity: 88,

      features: [
        {
          title: "Email Strategy",
          description: "Campaign planning",
          details: ["Audience segmentation", "Content planning"],
        },
        {
          title: "Automation",
          description: "Workflow automation",
          details: ["Welcome series", "Abandoned cart", "Re-engagement"],
        },
        {
          title: "Design",
          description: "Beautiful email templates",
          details: ["Mobile-responsive", "Brand alignment"],
        },
        {
          title: "Testing",
          description: "Performance optimization",
          details: ["A/B testing", "Subject line testing"],
        },
        {
          title: "Analytics",
          description: "Performance tracking",
          details: ["Open rates", "Click rates", "Conversion tracking"],
        },
      ],

      results: [
        { metric: "Open Rates", value: "+42%", icon: TrendingUp },
        { metric: "Click-through Rates", value: "+18%", icon: TrendingUp },
        { metric: "Revenue Growth", value: "+35%", icon: DollarSign },
        { metric: "List Growth", value: "+25%", icon: Users },
        { metric: "Unsubscribe Rate", value: "-30%", icon: TrendingUp },
        { metric: "ROI", value: "3800%", icon: DollarSign },
      ],

      process: [
        { step: 1, title: "Audit", duration: "Week 1", description: "Current email analysis" },
        { step: 2, title: "Strategy", duration: "Week 2", description: "Campaign planning" },
        { step: 3, title: "Execution", duration: "Week 3", description: "Setup & testing" },
        { step: 4, title: "Optimization", duration: "Ongoing", description: "Improve performance" },
      ],

      caseStudy: {
        client: "RetailPlus",
        industry: "E-commerce",
        challenge: "Low email engagement",
        solution: "Segmentation + automation",
        results: ["+50% open rate", "+40% revenue", "+25% retention"],
        timeline: "3 months",
      },

      packages: [
        {
          name: "Starter",
          price: "$1,200/month",
          features: ["Basic automation", "Monthly campaigns"],
          bestFor: "Small businesses",
        },
        {
          name: "Professional",
          price: "$2,500/month",
          features: ["Advanced automation", "A/B testing", "Analytics"],
          bestFor: "Growing businesses",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$4,500+/month",
          features: ["Full automation suite", "Dedicated strategist"],
          bestFor: "Large businesses",
        },
      ],
    },
    {
      id: 6,
      title: "AI Marketing",
      category: "Artificial Intelligence",
      description: "Leverage AI for predictive analytics, automation, and personalization.",
      longDescription: "We implement AI solutions that optimize marketing campaigns, predict customer behavior, and automate repetitive tasks.",
      icon: Cpu,
      color: "from-violet-500 to-purple-500",
      duration: "2–4 Months",
      price: "$3,000/month",
      popularity: 96,

      features: [
        {
          title: "Predictive Analytics",
          description: "Data-driven insights",
          details: ["Customer behavior prediction", "Trend analysis"],
        },
        {
          title: "Chatbot Implementation",
          description: "AI-powered support",
          details: ["24/7 customer service", "Lead qualification"],
        },
        {
          title: "Personalization",
          description: "Dynamic content",
          details: ["Product recommendations", "Personalized messaging"],
        },
        {
          title: "Automation",
          description: "Workflow automation",
          details: ["Campaign automation", "Data processing"],
        },
        {
          title: "Sentiment Analysis",
          description: "Brand monitoring",
          details: ["Social listening", "Review analysis"],
        },
        {
          title: "ROI Optimization",
          description: "Performance enhancement",
          details: ["Budget allocation", "Channel optimization"],
        },
      ],

      results: [
        { metric: "Efficiency Gain", value: "+65%", icon: TrendingUp },
        { metric: "Conversion Lift", value: "+40%", icon: BarChart },
        { metric: "Manual Work", value: "-50%", icon: TrendingUp },
        { metric: "Customer Satisfaction", value: "+35%", icon: Users },
        { metric: "Response Time", value: "-80%", icon: Clock },
        { metric: "ROI", value: "520%", icon: DollarSign },
      ],

      process: [
        { step: 1, title: "Assessment", duration: "Week 1-2", description: "AI readiness audit" },
        { step: 2, title: "Strategy", duration: "Week 3-4", description: "AI implementation plan" },
        { step: 3, title: "Development", duration: "Month 1-2", description: "AI model training" },
        { step: 4, title: "Deployment", duration: "Month 3-4", description: "System integration" },
        { step: 5, title: "Optimization", duration: "Ongoing", description: "Continuous learning" },
      ],

      caseStudy: {
        client: "TechInnovate",
        industry: "SaaS",
        challenge: "Inefficient marketing processes",
        solution: "AI automation platform",
        results: ["+70% efficiency", "+45% conversions", "-60% costs"],
        timeline: "4 months",
      },

      packages: [
        {
          name: "Starter",
          price: "$3,000/month",
          features: ["Basic AI analytics", "Chatbot setup"],
          bestFor: "AI beginners",
        },
        {
          name: "Professional",
          price: "$5,000/month",
          features: ["Predictive modeling", "Advanced automation"],
          bestFor: "Growing companies",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "$10,000+/month",
          features: ["Custom AI solutions", "Dedicated AI team"],
          bestFor: "Large enterprises",
        },
      ],
    },
  ];

  // Find the specific service based on id
  const service = services.find(s => s.id === parseInt(id)) || services[0];
  
  // If service not found, show a loading/error state
  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Back to Services
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  // Get the gradient color for CTA buttons
  const gradientColors = {
    'from-blue-500 to-cyan-500': 'from-blue-600 to-cyan-600',
    'from-purple-500 to-pink-500': 'from-purple-600 to-pink-600',
    'from-orange-500 to-red-500': 'from-orange-600 to-red-600',
    'from-green-500 to-emerald-500': 'from-green-600 to-emerald-600',
    'from-yellow-500 to-amber-500': 'from-yellow-600 to-amber-600',
    'from-violet-500 to-purple-500': 'from-violet-600 to-purple-600',
  }[service.color] || 'from-blue-600 to-cyan-600';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color.replace('500', '500/10')}`} />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Link to="/services">
              <motion.button
                whileHover={{ x: -5 }}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 mb-8"
              >
                <ArrowLeft size={20} />
                <span>Back to Services</span>
              </motion.button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Category Badge */}
                <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${service.color.replace('500', '500/20')} rounded-full mb-6`}>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {service.category}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="block text-gray-900 dark:text-white">{service.title}</span>
                  <span className={`block bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    Service
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  {service.description}
                </p>

                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{service.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Starting at</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{service.price}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Popularity</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{service.popularity}%</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`px-8 py-4 bg-gradient-to-r ${gradientColors} text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3`}
                  >
                    <Calendar size={20} />
                    <span>Book Free Consultation</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center justify-center gap-3"
                  >
                    <Play size={20} />
                    <span>Watch Demo</span>
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
                <div className={`relative bg-gradient-to-br ${service.color} rounded-3xl p-8 shadow-2xl`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6">
                    {/* Service Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                        <service.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">Success Rate</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{service.popularity}%</div>
                      </div>
                    </div>
                    
                    {/* Results Preview */}
                    <div className="space-y-4">
                      {service.results.slice(0, 3).map((result, index) => (
                        <div key={index}>
                          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                            <span>{result.metric}</span>
                            <span>{result.value}</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className={`h-full bg-gradient-to-r ${service.color} rounded-full`} style={{ 
                              width: typeof result.value === 'string' && result.value.includes('%') 
                                ? result.value.replace('+', '').replace('-', '').replace('%', '') + '%'
                                : '70%' 
                            }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Comprehensive <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Features</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need for complete {service.title.toLowerCase()} and maximum results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="h-full p-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                    <div className={`w-14 h-14 bg-gradient-to-r ${service.color.replace('500', '500/20')} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <CheckCircle className="h-7 w-7 text-blue-500" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Measurable <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Results</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real outcomes our clients achieve with our {service.title.toLowerCase()} services
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {service.results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                  >
                    <Icon className="h-8 w-8 text-blue-500 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {result.metric}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Left Content */}
                <div className="p-12 text-white">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                    <span className="text-sm font-medium">Case Study</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">
                    {service.caseStudy.client}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    <span className="font-semibold">Industry:</span> {service.caseStudy.industry}<br />
                    <span className="font-semibold">Challenge:</span> {service.caseStudy.challenge}<br />
                    <span className="font-semibold">Timeline:</span> {service.caseStudy.timeline}
                  </p>
                  
                  <h4 className="text-xl font-semibold mb-4">Results Achieved:</h4>
                  <ul className="space-y-3">
                    {service.caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Right Content */}
                <div className={`p-12 bg-gradient-to-br ${gradientColors}`}>
                  <div className="text-white">
                    <h4 className="text-2xl font-bold mb-6">Our Solution</h4>
                    <p className="mb-8">{service.caseStudy.solution}</p>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5" />
                        <span>Dedicated {service.category} Team</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="h-5 w-5" />
                        <span>Custom Strategy Development</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BarChart className="h-5 w-5" />
                        <span>Advanced Analytics Dashboard</span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      <span>View Full Case Study</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Flexible <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>Pricing</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs and budget
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {service.packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`relative rounded-3xl overflow-hidden ${
                    pkg.popular ? 'shadow-2xl' : 'shadow-xl'
                  }`}
                >
                  {pkg.popular && (
                    <div className={`absolute top-0 left-0 right-0 py-2 bg-gradient-to-r ${gradientColors} text-white text-center font-bold`}>
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${
                    pkg.popular 
                      ? 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 pt-12' 
                      : 'bg-white dark:bg-gray-800'
                  }`}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {pkg.name}
                    </h3>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        {pkg.price}
                      </div>
                      <div className="text-gray-500 dark:text-gray-400">per month</div>
                    </div>
                    
                    <div className="mb-8">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Best for:</div>
                      <p className="text-gray-700 dark:text-gray-300">{pkg.bestFor}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold ${
                        pkg.popular
                          ? `bg-gradient-to-r ${gradientColors} text-white`
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      Get Started
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                  Ready to Transform Your {service.category}?
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                  Get a personalized strategy session with our {service.category} experts. No commitment required.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-10 py-5 bg-gradient-to-r ${gradientColors} text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3`}
                  >
                    <MessageSquare size={20} />
                    <span>Schedule Free Consultation</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 transition-all flex items-center justify-center gap-3"
                  >
                    <span>Call Now: (555) 123-4567</span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleServicePage;