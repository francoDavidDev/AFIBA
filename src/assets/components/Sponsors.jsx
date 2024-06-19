import React from 'react';
import { SPONSORS } from '../data/sponsors';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-full lg:w-full">
      <Slider {...settings} className="slick-slider">
        {SPONSORS.map((item, i) => (
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
        ))}
      </Slider>
    </div>
  );
};

export default Sponsors;
