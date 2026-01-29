import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, Play, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Research & Discovery',
    description:
      'We analyze your market, audience, and competitors to identify opportunities.',
    color: 'from-[#06cabc] to-[#06a6c4]',
  },
  {
    icon: Target,
    title: 'Strategy Development',
    description:
      'Crafting a customized marketing strategy aligned with your business objectives.',
    color: 'from-[#06cabc] to-[#0699c4]',
  },
  {
    icon: Play,
    title: 'Execution',
    description:
      'Implementing campaigns across all channels with precision and creativity.',
    color: 'from-[#06cabc] to-[#06b4c4]',
  },
  {
    icon: TrendingUp,
    title: 'Optimization',
    description:
      'Continuous monitoring and refinement to maximize performance and ROI.',
    color: 'from-[#06cabc] to-[#06dac4]',
  },
];

const nodeVariants = {
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
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Process = () => {
  return (
    <section
      id="process"
      className="py-24 bg-white dark:bg-gray-900 overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Our Proven </span>
            <span className="bg-gradient-to-r from-[#06cabc] to-[#06a6c4] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A modern, structured workflow designed to deliver consistent growth
            and measurable results
          </p>
        </motion.div>

        {/* FLOWCHART */}
        <div className="relative">

          {/* Desktop Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#06cabc] via-[#0699c4] to-[#06dac4] opacity-30" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                custom={index}
                variants={nodeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Vertical Connector (mobile & tablet) */}
                {index !== processSteps.length - 1 && (
                  <div className="lg:hidden absolute top-full mt-8 w-[2px] h-16 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                )}

                {/* Glow */}
                <div
                  className={`absolute -inset-4 bg-gradient-to-r ${step.color} blur-2xl opacity-0 group-hover:opacity-30 transition duration-500 rounded-full`}
                />

                {/* Node */}
                <div className="relative z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-500 w-full">

                  {/* Step Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#06cabc] to-[#06a6c4] flex items-center justify-center text-white font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;