import React from "react";
import Carrousel from "./Carrousel";
import Notices from "./Notices";
import Events from "./Events";
import BannerMain from "./BannerMain";
import CarrouselStore from "./CarrouselStore";
import BannerSecondary from "./BannerSecondary";
import BannerSecondary2 from "./BannerSecondary2";
import CarrouselThemes from "./CarrouselThemes";
import BannerSecondary3 from "./BannerSecondary3";
import Footer from "../footer/Footer";
import Mundial from "./Mundial";

const Hero = () => {
  return (
    <section className="h-auto w-full flex flex-col pt-[5rem] text-neutral-100">
      <div className="bg-gradient-to-r from-emerald-900 to-emerald-800 w-full  h-full  flex flex-col-reverse lg:flex-row justify-center items-center  ">
        <div className="w-full  lg:w-[40%] flex flex-col text-center gap-y-8 px-5 py-10 lg:py-0  ">
          <h4 className="text-2xl font-bold  text-neutral-100">Participa de los torneos AFIBA</h4>
          <p className="text-neutral-100">
            Compre o registre su interés en entradas y hospitalidad para los
            próximos torneos AFIBA
          </p>
          <button className="btn bg-green-800 rounded-3xl  border-none w-[60%] m-auto hover:scale-110 transition-all duration-200 "> ENCUENTRA ENTRADAS HOY</button>
        </div>
        <Carrousel />
      </div>

    
      <Notices />
      <Events/>
      <Mundial/>
      <BannerMain/>
      <CarrouselStore/>
      <BannerSecondary/>
      <BannerSecondary2/>
      <CarrouselThemes/>
      <BannerSecondary3/>
      
    </section>
  );
};

export default Hero;
