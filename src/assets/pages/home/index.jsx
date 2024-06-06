import React from "react";
import { motion } from "framer-motion";
import Hero from "../../components/home/Hero";
import Notices from "../../components/home/Notices";
import SponsorsCarrousel from "../../components/home/SponsorsCarrousel";
import Mundial from "../../components/home/Mundial";
import CarrouselStore from "../../components/home/CarrouselStore";
import BannerSecondary from "../../components/home/BannerSecondary";

import CarrouselThemes from "../../components/home/CarrouselThemes";
import BannerSecondary3 from "../../components/home/BannerSecondary3";
import BannerMain from "../../components/home/BannerMain";
import Calendar from "../calendar/Calendar";
import HomeCalendar from "../../components/home/HomeCalendar";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <motion.section
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants}>
        <BannerMain />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Notices />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <HomeCalendar />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <SponsorsCarrousel />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <CarrouselStore />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <BannerSecondary />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <CarrouselThemes />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <BannerSecondary3 />
      </motion.div>
    </motion.section>
  );
};

export default Home;
