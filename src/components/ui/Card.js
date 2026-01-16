import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true, 
  glass = false,
  gradient = false,
  padding = 'p-6',
  borderRadius = 'rounded-2xl'
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`
        ${padding}
        ${borderRadius}
        ${glass ? 'glass-effect' : 'bg-white dark:bg-gray-800'}
        ${gradient ? 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900' : ''}
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;