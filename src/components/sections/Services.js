import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Share2,
  Target,
  PenTool,
  Mail,
  BarChart,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve search rankings and drive organic traffic with proven SEO strategies.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build brand presence and engage audiences across social platforms.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description:
      "Maximize ROI with targeted PPC campaigns on major ad platforms.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description:
      "Create compelling content that converts and builds trust.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with smart automation.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: BarChart,
    title: "Web Analytics",
    description:
      "Track performance and optimize decisions with actionable insights.",
    color: "from-indigo-500 to-blue-500",
  },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 40,
    x: i % 2 === 0 ? -30 : 30,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Our </span>
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
              Premium Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            High-impact digital solutions crafted to grow your brand and ROI
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-90 blur-xl transition duration-500 rounded-3xl`}
              />

              {/* Card */}
              <div className="relative h-full p-7 rounded-3xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 shadow-md group-hover:shadow-xl transition-all duration-500 flex flex-col">

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-5`}
                >
                  <service.icon className="h-7 w-7 text-white" />
                </div>

                {/* Text */}
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 group/link"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <button className="px-10 py-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All Services
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
