import React from 'react';
import { motion } from 'framer-motion';

const GradientText = ({ 
  children, 
  className = '', 
  from = 'from-primary-600', 
  via = 'via-purple-600', 
  to = 'to-pink-600',
  animate = true 
}) => {
  return (
    <motion.span
      className={`bg-gradient-to-r ${from} ${via} ${to} bg-clip-text text-transparent ${animate ? 'bg-size-200 animate-gradient' : ''} ${className}`}
      initial={animate ? { opacity: 0, y: 20 } : {}}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.span>
  );
};

export default GradientText;