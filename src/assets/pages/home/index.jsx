import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Result from "postcss/lib/result";
import Results from "../../components/home/Results";

// Lazy-loaded components
const BannerMain = React.lazy(() => import("../../components/home/BannerMain"));
const Notices = React.lazy(() => import("../../components/home/Notices"));
const HomeCalendar = React.lazy(() => import("../../components/home/HomeCalendar"));
const SponsorsCarrousel = React.lazy(() => import("../../components/home/SponsorsCarrousel"));
const TournamentsAfiba = React.lazy(() => import("../../components/home/TournamentsAfiba"));
const CarrouselStore = React.lazy(() => import("../../components/home/CarrouselStore"));
const MaleModalityBanner = React.lazy(() => import("../../components/home/MaleModalityBanner"));
const CarrouselThemes = React.lazy(() => import("../../components/home/CarrouselThemes"));
const FemaleModalityBanner = React.lazy(() => import("../../components/home/FemaleModalityBanner"));

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
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Suspense fallback={<div>Loading...</div>}>
        <motion.div variants={itemVariants} className="mb-8">
          <BannerMain />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <Notices />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <Results />
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
      </Suspense>
    </motion.section>
  );
};

export default Home;
