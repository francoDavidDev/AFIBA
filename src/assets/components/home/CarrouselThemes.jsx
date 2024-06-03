import React from "react";
// Import react-slick
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  CARROUSEL_THEMES, NOTICES } from "../../data/home";
import { Link } from "react-router-dom";
import { TOURNAMENTS } from "../../data/tournaments";

const CarrouselThemes = () => {
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
          breakpoint: 650,
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
      <div className="p-5 flex w-full  justify-between items-center ">
        <h4 className="h4" >TORNEOS</h4>
        <h5 className="h5 text-sky-500 underline">
          <Link to={`/Tournaments`}>
          VER TODOS</Link>
        </h5>
      </div>
      <div>
        <Slider {...settings} className="slick-slide_themes">
          {TOURNAMENTS.map((item, i) => (
            <Link
            to={`/TournamentsViews/${item.id}`}
            key={i} > 
                <div className="rounded-xl m-1 overflow-hidden w-[90%] h-[350px] cursor-pointer bg-no-repeat bg-cover bg-center  "  style={{backgroundImage:`url('${item.image}')` }}>
              
                <div className=" w-full h-full   flex justify-center items-center hover:bg-black/50 rounded-xl  "></div>

                </div>
                <div className="w-[90%] ">
                    <p className="line-clamp-1">{item.title} </p>
                </div>
             
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarrouselThemes;
