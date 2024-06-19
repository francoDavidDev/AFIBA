import React from "react";
import { motion } from "framer-motion";
import { FaRegStar } from "react-icons/fa";
import Sponsors from "../Sponsors";

const SponsorsCarrousel = () => {
  return (
    <motion.section
      className="h-[500px] md:h-[600px] pt-10 mb-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="p-5"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h4
          className="h4 font-black flex items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <FaRegStar size={24} color="#f39c12" className="mr-2 animate-bounce" />
          SPONSORS
        </motion.h4>
      </motion.div>
      <Sponsors />
    </motion.section>
  );
};

export default SponsorsCarrousel;
