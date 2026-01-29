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

export const services = [
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