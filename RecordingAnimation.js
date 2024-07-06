// src/RecordingAnimation.js
import React from 'react';
import { motion } from 'framer-motion';

const RecordingAnimation = () => {
  return (
    <div className="h-16 bg-gray-100 overflow-hidden rounded-lg flex items-center">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 20"
        className="h-full w-full"
      >
        <motion.path
          fill="none"
          stroke="#3182CE"
          strokeWidth="0.5"
          d="M0 10 Q 20 5, 40 10 T 80 10 T 100 10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </motion.svg>
    </div>
  );
};

export default RecordingAnimation;


