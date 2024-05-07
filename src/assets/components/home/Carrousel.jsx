import React from "react";
// Import react-slick
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import DATA
import { CARROUSEL } from "../../data/home";

const Carrousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className=" w-[60%] h-full m-auto  bg-violet-500   ">
      <Slider {...settings}>
        {CARROUSEL.map((item, i) => (
          <div className="">
            <div
              key={i}
              className="h5 text-black flex justify-center items-center  w-full  flex-col m-auto  bg-green-400  text-lg "
            >
              <h4 className="text-center m-auto">{item.title}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
