import React, { useEffect, useState } from "react";
import banner from "../../imgs/about/staff/banner.png";
import { motion, useAnimate, useCycle } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaArrowRight } from "react-icons/fa";


import Info from "../../components/about/Info";
import Members from "../../components/about/Members";
import Gallery from "../../components/about/Gallery";
import { Link } from "react-router-dom";

const About = () => {
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
    <motion.section
      
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 100, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ ease: "easeOut", duration:0.5 }}
    className="w-full h-auto   flex flex-col justify-center gpy">
      {/* hero */}
      <div className="h-auto w-full flex flex-col  ">
      <div className="md:bg-gradient-to-l md:from-black  md:to-primary-300 bg-gradient-to-t from-black  to-primary-300   w-full   h-[auto]  flex flex-col-reverse lg:flex-row justify-center items-center   ">
        <div className="w-full  lg:w-[40%] flex flex-col text-center gap-y-8 px-5 py-10 lg:py-0  ">
          <h2 className="h3 font-bold  text-primay-100">
          ¿QUIENES SOMOS? 
          </h2>
        ¿
        
        </div>
        {/* VIDEO */}
        <div className="w-full  lg:w-[60%] m-auto  h-full   overflow-hidden  ">
         <img src={banner} alt="" />
        </div>
        {/* <Carrousel />*/}
      </div>
    </div>

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
            <h1 className="h1 0">AFIBA</h1>
            <h4 className=" w-[90%] h4   text-center m-auto leading-relaxed tracking-[4px]">
              EN 
              <span className="0 ">
              {" "} AFIBA
              </span>{" "}
              SOMOS LÍDERES EN FISICOCULTURISMO, PROMOVIENDO ESTE DEPORTE EN NUESTRA COMUNIDAD Y MÁS ALLÁ. NOS ESFORZAMOS POR CREAR UN AMBIENTE INCLUSIVO Y ACCESIBLE PARA ATLETAS DE TODOS LOS NIVELES.
            </h4>
          </motion.div>
          {/* Texto animado */}
          <h4 className="text-center py-5 tracking-widest">
            SOMOS EL EJEMPLO DE...
          </h4>
          <h4 className="h4 0 text-center">
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
