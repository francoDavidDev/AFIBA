import React from "react";
import { useParams } from "react-router-dom";

import { ICONS_NETWORKING } from "../../../data/header";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import motiopn
import { motion, useCycle } from "framer-motion";
//import image/videos
import rules from "../../../imgs/notice/reglas.png";
import registration from "../../../imgs/notice/registration.png";//import video
import afibaGif from '../../../videos/afibaGif.gif'

import { TOURNAMENTS } from "../../../data/tournaments";
import SponsorsCarrousel from "../../home/SponsorsCarrousel";
import Sponsors from "../../Sponsors";
import BannerSecondary2 from "../../home/BannerSecondary2";
import BannerSecondary from "../../home/BannerSecondary";

const TournamentsViews = () => {
  const { id } = useParams();

  const item = TOURNAMENTS.find((item) => item.id === id);
  const { title, image, description } = item;
  const [animation, cycleAnimation] = useCycle("initial", "animate");
  const [animation2, cycleAnimation2] = useCycle("initial", "animate");

  const  btn_animation = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
    },
  };
  const  btn_animation2 = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
    },
  };

 

  const anime = (v) => {
    v === 1 ? cycleAnimation():
   
    cycleAnimation2()
  };
  

 
  return (
    <section className="w-full flex flex-col justify-center h-auto items-center m-auto gap-y-10">
      <div className="w-[90%] h-auto py-20 flex flex-col justify-center items-center gap-y-7 ">
        <div className="w-full m-auto  text-center ">
          <h2 className="h2"> {title} </h2>
        </div>

        <div className="h-[600px] w-full  bg-cover bg-center bg-no-repeat rounded-xl  overflow-hidden">
          <img src={image} className="w-full h-[100%] rounded-xl" alt="" />
        </div>
        <div className="w-full  flex justify-between items-start">
          <div className="bg-primary-300 px-4 hover:-translate-y-1 transition-all hover:shadow-black ">
            <a href="#" className="h5 text-neutral-100"> RESULTADOS</a>
          </div>
          <div className="flex gap-5 ">
            {ICONS_NETWORKING.map((item, i) => {
              return (
                <a href="#" className="text-xl text-center bg-neutral-100 rounded-full w-[30px] h-[30px]  flex justify-center items-center hover:scale-110 hover:text-primary-300 hover:text-2xl
              transition-all ">
                  {item.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* informacion */}
      <div className="pb-12  w-[90%]">
        <div className=" mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
              <img className="rounded-lg shadow" src={image} alt="Misión" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">¿QUE ES {title}?</h2>
              <p className="text-neutral-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sit amet nibh eu magna facilisis venenatis. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Mauris sit amet nibh eu
                magna facilisis venenatis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris sit amet nibh eu magna
                facilisis venenatis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris sit amet nibh eu magna facilisis
                venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Mauris sit amet nibh eu magna facilisis venenatis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
                amet nibh eu magna facilisis venenatis.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* sponsors */}

{/* inscription and rules */}
      <div className="  py-20  w-full  mt-1 2 grid  grid-cols-1 sm:grid-cols-3  gap-[2px] m-auto">
        <div
          className=" w-[1fr] h-[300px]   flex flex-col justify-center cursor-pointer bg-center bg-cover  bg-no-repeat  "
          style={{ backgroundImage: `url(${rules}) ` }}
        >
          <motion.div
           
            className="w-full h-full flex flex-col gap-y-5 justify-center items-center  bg-black/50 transition-all "
          >
            <motion.button
             
              transition={{ duration: 0.2 }}
              whileHover={{scale:1.2}}
              className="btn"
            >
              VER REGLAS
            </motion.button>
            <motion.button
           
             whileHover={{scale:1.2}}
             transition={{ duration: 0.2, delay:0.1 }}
            className="btn">DESCARGAR REGLAS</motion.button>
          </motion.div>
        </div>
        <div className="bg-black w-[1fr] h-[300px]   flex flex-col justify-center  bg-center bg-cover bg-no-repeat  ">
        <img src={afibaGif} alt="logo afiba" className="w-[60%] h-full  m-auto " />
        </div>
        <motion.div
          className="bg-violet-500 w-[1fr] h-[300px]   flex flex-col justify-center cursor-pointer bg-center bg-cover bg-no-repeat  "
          style={{ backgroundImage: `url(${registration}) ` }}
        >
           <motion.div
          
            className="w-full h-full flex flex-col gap-y-5 justify-center items-center  bg-black/50 transition-all" 
          >
            <motion.button
           
              transition={{ duration: 0.2 }}
              whileHover={{scale:1.2}}
              className="btn"
            >
              INSCRIBIRSE
            </motion.button>
         
          </motion.div>
        </motion.div>
      </div>
      <Sponsors/>
      <BannerSecondary/>
    </section>
  );
};

export default TournamentsViews;
