import React from "react";
//import image
import imageInfo from "../../imgs/about/info/image1.jpg";
import imageInfo2 from "../../imgs/about/info/image3.jpg";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      exit={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", delay: 0.3 }}
      className="gap-y-5 flex flex-col py-5 "
    >
      {" "}
      {/* INFO informacion */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        exit={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.3 }}
        className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start "
      >
        <div className="w-[100%] lg:w-[50%]  m-auto">
          <img src={imageInfo} alt="image-info" className="w-full h-full" />
        </div>
        <div className=" w-[100%] md:w-[60%]   justify-end  m-auto  text-left px-5 gap-5 flex flex-col">
          <h2 className=" h3  ">NUESTRA MISION</h2>
          <p className=" w-[90%] text-lg xl:text-xl tracking-wider font-light   ">
            El foco principal de la Federación será estandarizar las promociones
            de las competiciones de culturismo natural. Al lograr esto, los
            competidores, público, proveedores y cualquier otra persona
            involucrada tendrá una experiencia más agradable y se van con una
            impresión increíble de lo que acaban de ver. También tendrá un
            Director de juzgar. Esa persona será el responsable de la formación
            y la contratación de un grupo de jueces que estarán disponibles para
            juzgar a cualquier muestra.
          </p>
        </div>
      </motion.div>{" "}
      {/* INFO informacion */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.3 }}
        className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start "
      >
        <div className=" w-[100%] md:w-[50%]   justify-end  m-auto  text-left px-5 gap-5 flex flex-col">
          <h2 className=" h3  ">MIRAMOS HACIA EL FUTURO</h2>
          <p className=" w-[90%] text-lg xl:text-xl   tracking-widest ">
            Miramos hacia el futuro AFIBA está abriendo una nueva página en el
            libro del físico culturismo. La nueva norma será el espectáculo, que
            es tan buena como la organización y si usted está compitiendo,
            coaching, a juzgar, espectador o un proveedor en un evento nacional
            de la federación de culturismo, sabe que va a ser una experiencia
            eficiente, justa y agradable para todos los involucrados!
          </p>
        </div>
        <div className="w-[100%] lg:w-[50%]  m-auto">
          <img src={imageInfo2} alt="image-info" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Info;
