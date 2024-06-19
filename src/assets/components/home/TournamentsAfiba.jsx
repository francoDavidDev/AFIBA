import React from "react";
import { motion, useCycle } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import video from "../../videos/home/OverallFisicoCulturismoSenior.mp4";

const TournamentsAfiba = () => {
  const [animation, cycleAnimation] = useCycle("hidden", "visible");

  const variants = {
    hidden: { x: 0 },
    visible: { x: 20 },
  };

  return (
    <section className="h-auto w-full flex flex-col text-neutral-100">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full h-auto bg-gradient-to-t from-black to-primary-300 md:bg-gradient-to-l md:from-black md:to-primary-100">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col text-center gap-y-8 px-5 py-10 lg:py-0">
          <h2 className="text-4xl font-bold text-neutral-100">MODALIDADES</h2>
          <p className="text-2xl text-neutral-100">
          ¡MIRA TODAS LAS MODALIDADES DE AFIBA!
          </p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            onMouseEnter={() => cycleAnimation()}
            onMouseLeave={() => cycleAnimation()}
            className="flex items-center btn bg-primary-00 rounded-3xl bg-gradient-to-r from-black/70  to-primary-300 border-none w-[%] m-auto gap-3 "
          >
            <Link to={`/modalidades`} >
              {" "}
              <p className="p text-primary-200 text-sm"> VER MAS</p>
            </Link>

            <motion.span
              variants={variants}
              animate={animation}
              className=" bg-neutral-500 w-7 h-7 rounded-full flex justify-center items-center "
            >
              <FaArrowRight className="m-auto text-lg  " />
            </motion.span>
          </motion.button>
        </div>
        {/* Video Section */}
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <video className="h-full w-full object-cover" autoPlay muted loop>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default TournamentsAfiba;
