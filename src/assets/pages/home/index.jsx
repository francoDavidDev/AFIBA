import React from "react";
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

const Home = () => {
  return (
    <section className=" ">
      <BannerMain />
      
      <Notices />
      {/* Calendar */}
      <HomeCalendar/>
      {/* carrousel sponsors */}
      <SponsorsCarrousel />

     {/* afiba banner */}
    <Hero />
      {/* gimnasios */}
      <CarrouselStore />
      <BannerSecondary />
 
     {/* torneos */}
      <CarrouselThemes />
      <BannerSecondary3 />
    </section>
  );
};

export default Home;
