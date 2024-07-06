// src/MicLogo.js
import React from 'react';
import { motion } from 'framer-motion';

const MicLogo = ({ isRecording, toggleRecording }) => {
  const variants = {
    rotate: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 1,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer"
      animate={isRecording ? 'rotate' : 'stop'}
      variants={variants}
      onClick={toggleRecording}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14c1.656 0 3-1.344 3-3V7c0-1.656-1.344-3-3-3S9 5.344 9 7v4c0 1.656 1.344 3 3 3zm-5-3v-4a5 5 0 1110 0v4a5 5 0 01-10 0zm8 8.5v-1.5a2 2 0 00-2-2h-2a2 2 0 00-2 2v1.5a7 7 0 0014 0z"
        />
      </svg>
    </motion.div>
  );
};

export default MicLogo;
      





