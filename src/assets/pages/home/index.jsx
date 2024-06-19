import React from "react";
import { motion } from "framer-motion";
import TournamentsAfiba from "../../components/home/TournamentsAfiba";
import Notices from "../../components/home/Notices";
import SponsorsCarrousel from "../../components/home/SponsorsCarrousel";
import Mundial from "../../components/home/Mundial";
import CarrouselStore from "../../components/home/CarrouselStore";
import FemaleModalityBanner from "../../components/home/FemaleModalityBanner";
import CarrouselThemes from "../../components/home/CarrouselThemes";
import MaleModalityBanner from "../../components/home/MaleModalityBanner";
import BannerMain from "../../components/home/BannerMain";
import Calendar from "../calendar/Calendar";
import HomeCalendar from "../../components/home/HomeCalendar";
import BannerSponsors from "../../components/BannerSponsors";
import SponsorVideos from "../../components/SponsorVideos";


const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <motion.section
      className="home-container "
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <BannerMain />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <Notices />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <HomeCalendar />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <SponsorsCarrousel />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <TournamentsAfiba />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <CarrouselStore />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <MaleModalityBanner />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <CarrouselThemes />
      </motion.div>

      <motion.div variants={itemVariants} className="mb-8">
        <FemaleModalityBanner />
      </motion.div>
    </motion.section>
  );
};

export default Home;
