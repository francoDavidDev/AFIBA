import React from "react";
import { useParams } from "react-router-dom";
import { CARROUSEL_THEMES, NOTICES } from "../../../data/home";
import { ICONS_NETWORKING } from "../../../data/header";
import { SPONSORS } from "../../../data/sponsors";
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
import Sponsors from "../../Sponsors";

const NoticesViews = () => {
  const { id } = useParams();

  const item = NOTICES.find((item) => item.id === id);
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

        <div className="h-[600px] w-full  bg-cover bg-top bg-no-repeat rounded-xl  overflow-hidden"
        style={{backgroundImage:`url('${image}')`}}
        >
     
        </div>
     
      </div>

      {/* informacion */}
      <div className="pb-12  w-[90%]">
        <div className=" mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0 flex justify-center">
              <img className="rounded-lg shadow" src={image} alt="Misión" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
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
     <Sponsors/>
{/* inscription and rules */}
{title !== 'CALENDARIO' ?   <div className="  py-20  w-full  mt-1 2 grid  grid-cols-1 sm:grid-cols-3  gap-[2px] m-auto">
        <div
          className=" w-[1fr] h-[300px]   flex flex-col justify-center cursor-pointer bg-center bg-cover  bg-no-repeat  "
          style={{ backgroundImage: `url(${rules}) ` }}
        >
          <motion.div
            onMouseEnter={() => anime(1)}
            onMouseLeave={() => anime(1)}
            className="w-full h-full flex flex-col gap-y-5 justify-center items-center  hover:bg-black/50 transition-all "
          >
            <motion.button
              variants={btn_animation}
              animate={animation}
              transition={{ duration: 0.2 }}
              whileHover={{scale:1.2}}
              className="btn"
            >
              VER REGLAS
            </motion.button>
            <motion.button
             variants={btn_animation}
             animate={animation}
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
            onMouseEnter={() => anime(2)}
            onMouseLeave={() => anime(2)}
            className="w-full h-full flex flex-col gap-y-5 justify-center items-center  hover:bg-black/50 transition-all" 
          >
            <motion.button
              variants={btn_animation2}
              animate={animation2}
              transition={{ duration: 0.2 }}
              whileHover={{scale:1.2}}
              className="btn"
            >
              INSCRIBIRSE
            </motion.button>
         
          </motion.div>
        </motion.div>
      </div>: null }
    
    </section>
  );
};

export default NoticesViews;
