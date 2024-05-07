import React from "react";
// Import react-slick
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NOTICES } from "../../data/home";

const Events = () => {
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
            dots: true
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
    <section className="h-[300px] ">
      <div className="p-5 ">
        <h4>PROXIMOS TORNEOS Y EVENTOS</h4>
      </div>
      <div>
        <Slider {...settings} className="slick-slide2">
          {NOTICES.map((item, i) => (
            <div key={i} >
                <div className="rounded-xl m-1">
                <img
                src={item.image}
                alt="image"
                className="w-[400px] h-[150px]  rounded-lg hover:scale-105 transition-all duration-300"
              />
                </div>
                <div>
                    <p className="line-clamp-1">{item.title} </p>
                </div>
             
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Events;
