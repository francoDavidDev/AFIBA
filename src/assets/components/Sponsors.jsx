import React from 'react';
import { SPONSORS } from '../data/sponsors';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi'; // Importa el ícono de flecha derecha desde react-icons

const Sponsors = () => {
  const variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { y: -5 } // Mueve el ícono 5 unidades hacia arriba al hacer hover
  };
  return (
    <section className="w-full h-auto section_cards">
      <div className="">
        <h4 className="h4 font-black">GIMNASIOS RECOMENDADOS</h4>
      </div>
      <div className="m-auto container_cards w-full mt-10">
        {SPONSORS.map((item, i) => (
          <motion.div
            key={i}
            className="carrousel-item cursor-pointer"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            variants={variants}
          >
            <div className="relative">
              <img src={item.image} alt="" className="image_cards" />
              <motion.div
                className="click-icon absolute top-1 right-1 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full p-2 opacity-0 transition-opacity duration-300 hover:opacity-100"
                variants={variants}
              >
                <motion.a
                  href={item.href}
                  target='_blank'
                  className="text-white"
                >
                  <FiArrowRight size={24} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
