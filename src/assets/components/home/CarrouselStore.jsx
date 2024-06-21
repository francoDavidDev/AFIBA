import React from "react";
// Import react-slick
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { GIMS } from "../../data/gims";
import { motion } from 'framer-motion';

const CarrouselStore = () => {
  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <section className="h-auto py-20">
      <div className="p-5 ">
        <h4 className="h4 font-black">GIMNASIOS RECOMENDADOS</h4>
      </div>
      <div>
      <Slider {...settings} className="slicsk-slider">
          {GIMS.map((item, i) => {
            return (
              <motion.div
              key={i}
              className="overflow-hidden rounded-lg m-2 w-full h-[400px] cursor-pointer transform transition-transform duration-300 shadow-lg relative"
              variants={slideVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center bg-black/40 hover:bg-black/60 bg-no-repeat bg-cover bg-center rounded-lg transition-colors duration-300 p-4"
                style={{ backgroundImage: `url(${item.image})` }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.p
                  className="text-white text-2xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.name}
                </motion.p>
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Ir
                </motion.a>
              </motion.div>
            </motion.div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CarrouselStore;
