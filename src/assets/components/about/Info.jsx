import React from "react";
//import image
import imageInfo from "../../imgs/about/info/image1.jpg";
import imageInfo2 from "../../imgs/about/info/image2.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      exit={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut",delay:0.3 }}
      className="gap-y-5 flex flex-col py-5"
    >
      {" "}
      {/* INFO informacion */}
      <motion.div 
       initial={{ y: 100, opacity: 0 }}
       exit={{ y: 100, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ ease: "easeOut",delay:0.3 }}
      className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start ">
        <div className="w-[70%]  m-auto">
          <img src={imageInfo} alt="image-info" className="w-full h-full" />
        </div>
        <div className=" w-[100%] md:w-[50%]   justify-end  m-auto  text-left px-5 gap-5 flex flex-col">
          <h2 className=" h3 text-primary-400 ">COMITE DIRECTIVO</h2>
          <p className=" w-[90%] text-lg xl:text-xl tracking-wider font-light tracking-widest  ">
            El Comité Directivo de la Asociación de Fisicoculturismo en
            Argentina es el cuerpo de liderazgo encargado de establecer la
            dirección estratégica y las políticas que guían el desarrollo y la
            promoción del fisicoculturismo en el país.
          </p>
          <Link to={"/moreComite"}>
            <button className="btn-lg  bg-neutral-400 border-none tracking-[3px] font-light hover:bg-primary-300 hover:text-primary-400  hover:rounded-md hover:scale-110 transition-all duration-100 hover:font-bold hover:text-md  ">
              {" "}
              VER MAS
            </button>
          </Link>
        </div>
      </motion.div>{" "}
      {/* INFO informacion */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}

        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut",delay:0.3 }}
        className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start "
      >
        <div className=" w-[100%] md:w-[50%]   justify-end  m-auto  text-left px-5 gap-5 flex flex-col">
          <h2 className=" h3 text-primary-400 ">EVENTOS</h2>
          <p className=" w-[90%] text-lg xl:text-xl font-light  tracking-widest ">
            Desde la planificación inicial hasta la ejecución y el seguimiento
            posterior, este equipo trabajará incansablemente para garantizar que
            cada evento sea un éxito.
          </p>
          <Link to={"/moreEvents"}>
            <button className="btn-lg  bg-neutral-400 border-none tracking-[3px] font-light hover:bg-primary-300 hover:text-primary-400  hover:rounded-md hover:scale-110 transition-all duration-100 hover:font-bold hover:text-md  ">
              {" "}
              VER MAS
            </button>
          </Link>
        </div>
        <div className="w-[70%]  m-auto">
          <img src={imageInfo2} alt="image-info" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Info;
