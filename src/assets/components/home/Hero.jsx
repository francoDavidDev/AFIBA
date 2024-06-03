import React from "react";
import Carrousel from "./Carrousel";
import video from "../../videos/home/OverallFisicoCulturismoSenior.mp4";
import { motion, useCycle } from "framer-motion";
//import icons
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const [animation, cycleAnimation] = useCycle("hidden", "visible");

  const variantes = {
    hidden: {
      x: 0,
    },
    visible: {
      x: 20,
    },
  };

  return (
    <section className="h-auto w-full flex flex-col  text-neutral-100">
      <div className="md:bg-gradient-to-l md:from-black  md:to-primary-300 bg-gradient-to-t from-black  to-primary-300   w-full   h-[auto]  flex flex-col-reverse lg:flex-row justify-center items-center   ">
        <div className="w-full  lg:w-[40%] flex flex-col text-center gap-y-8 px-5 py-10 lg:py-0  ">
          <h2 className="h2 font-bold  text-neutral-100">
            PARTICIPA EN LOS TORNEOS AFIBA
          </h2>
          <p className="text-neutral-100 text-2xl ">
            Compre o registre su interés en entradas y hospitalidad para los
            próximos torneos AFIBA
          </p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onMouseEnter={() => cycleAnimation()}
            onMouseLeave={() => cycleAnimation()}
            className="flex items-center btn bg-green-800 rounded-3xl  border-none w-[%] m-auto gap-3 "
          >
            <Link to={`/Tournaments`} >
              {" "}
              <p className="p text-primary-200 text-sm"> VER TORNEOS</p>
            </Link>

            <motion.span
              variants={variantes}
              animate={animation}
              className=" bg-neutral-500 w-7 h-7 rounded-full flex justify-center items-center "
            >
              <FaArrowRight className="m-auto text-lg  " />
            </motion.span>
          </motion.button>
        </div>
        {/* VIDEO */}
        <div className="w-full  lg:w-[60%] m-auto text-neutral-100 h-full   overflow-hidden  ">
          <video className="h-full w-full scale-105" autoPlay muted loop>
            <source src={video} />
          </video>
        </div>
        {/* <Carrousel />*/}
      </div>
    </section>
  );
};

export default Hero;
