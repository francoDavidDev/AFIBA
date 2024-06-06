import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const textVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <motion.div
        className="loader-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="loader-text" variants={textVariants}>
          AFIBA
        </motion.h1>
      </motion.div>
      <style jsx>{`
        .loading-screen {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #4caf50;
          color: #0073e6;
          font-family: Arial, sans-serif;
        }
        .loader-container {
          text-align: center;
        }
        .loader-text {
          font-size: 3rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
