import React from 'react'
import { SPONSORS } from '../data/sponsors';
import Slider from 'react-slick';

const Sponsors = () => {

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
   
      <div className="w-full lg:w-full  ">
        <Slider {...settings} className="slick-slider">
          {SPONSORS.map((item, i) => {
            return (
              <div key={i} className="overflow-hidden">
                <div
                  className="rounded-xl m-1overflow-hidden w-[95%] h-[300px] cursor-pointer bg-no-repeat bg-cover bg-center "
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className=" w-full h-full   flex justify-center items-center hover:bg-black/50 rounded-xl  "></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
  )
}

export default Sponsors
