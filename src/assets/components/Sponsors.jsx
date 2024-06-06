import React from 'react';
import { SPONSORS } from '../data/sponsors';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const Sponsors = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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

  return (
    <div className="w-full lg:w-full b py-10">
      <h3 className="text-3xl font-bold text-center mb-6">Nuestros Patrocinadores</h3>
      <Slider {...settings} className="slick-slider">
        {SPONSORS.map((item, i) => (
          <motion.div
            key={i}
            className="overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div
              className="rounded-xl m-1 overflow-hidden w-full h-[400px] cursor-pointer bg-no-repeat bg-cover bg-center transform transition-transform duration-500 relative"
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <div className="absolute inset-0 flex justify-center items-center bg-black/50 rounded-xl">
                <p className="text-white text-lg font-semibold">{item.name}</p>
              </div>
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 p-2 rounded-lg">
                <p className="text-sm font-semibold text-gray-800">{item.name}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsors;
