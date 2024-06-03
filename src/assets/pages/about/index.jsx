import React, { useEffect, useState } from "react";
import banner from "../../imgs/about/staff/banner.png";
import { motion, useAnimate } from "framer-motion";
import { ReactTyped } from "react-typed";

import Info from "../../components/about/Info";
import Members from "../../components/about/Members";
import Gallery from "../../components/about/Gallery";

const About = () => {
  // Definimos un componente de función llamado About

  return (
    <motion.section
      
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 100, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeOut", duration:0.5 }}
    className="w-full h-auto   flex flex-col justify-center gpy">
      <div
        className="w-full  h-[100vh] flex flex-col-reverse bg-center bg-no-repeat bg-cover "
        style={{ backgroundImage: `url('${banner}')` }}
      ></div>

      {/* Contenedor de texto/banner */}
      <div className="w-full h-auto  flex">
        {/* Contenido de texto/banner */}
        <div className="w-full h-full   flex flex-col justify-center">
          {/* Texto */}
          <motion.div
           initial={{ y: 100, opacity: 0 }}
        
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ ease: "easeOut" }}
          className="text-center my-10 flex flex-col gap-y-10">
            <h1 className="h1 text-primary-300">AFIBA</h1>
            <p className=" w-[90%] md:w-[70%]  text-md md:text-2xl text-left m-auto leading-relaxed tracking-[4px] font-light">
              <span className="text-primary-300 ">
               AFIBA
              </span>{" "}
              es una organización dedicada al desarrollo y promoción del deporte
              del fisicoculturismo en nuestra comunidad y más allá. Como la
              autoridad líder en el fisicoculturismo en nuestra región, nos
              esforzamos por fomentar un ambiente inclusivo y accesible para
              atletas de todos los niveles de experiencia y habilidad.
            </p>
          </motion.div>
          {/* Texto animado */}
          <h4 className="text-center py-5 tracking-widest">
            SOMOS EL EJEMPLO DE...
          </h4>
          <h4 className="h4 text-primary-300 text-center">
            <ReactTyped
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
              strings={["DEDICACION", "CONTANCIA", "DISCIPLINA"]}
              typeSpeed={120}
              backSpeed={70}
              loop
            />
          </h4>
        </div>
      </div>
<Info />

      {/* Sección de miembros del comité */}
     <Members />
      {/* Galería */}
    <Gallery/>
    </motion.section>
  );
};

export default About;
