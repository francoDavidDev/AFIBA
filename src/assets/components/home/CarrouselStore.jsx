import React from "react";
// Import react-slick
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { GIMS } from "../../data/gims";

const CarrouselStore = () => {
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
      <Slider {...settings} className="slick-slider">
          {GIMS.map((item, i) => {
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
    </section>
  );
};

export default CarrouselStore;
