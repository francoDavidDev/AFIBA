import React from "react";
import Hero from "../../components/home/Hero";
import Notices from "../../components/home/Notices";
import Events from "../../components/home/Events";
import Mundial from "../../components/home/Mundial";
import CarrouselStore from "../../components/home/CarrouselStore";
import BannerSecondary from "../../components/home/BannerSecondary";
import BannerSecondary2 from "../../components/home/BannerSecondary2";
import CarrouselThemes from "../../components/home/CarrouselThemes";
import BannerSecondary3 from "../../components/home/BannerSecondary3";
import BannerMain from "../../components/home/BannerMain";

const Home = () => {
  return (
    <section className=" ">
      <Hero />
      <Notices />
      <Events />
      <Mundial />
      <BannerMain />
      <CarrouselStore />
      <BannerSecondary />
      <BannerSecondary2 />
      <CarrouselThemes />
      <BannerSecondary3 />
    </section>
  );
};

export default Home;
