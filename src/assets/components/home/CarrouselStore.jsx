import React from "react";
// Import react-slick
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CARROUSEL_STORE, NOTICES } from "../../data/home";
import { Link } from "react-router-dom";

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
        <h4 className=" font-black">AFIBA STORE</h4>
      </div>
      <div>
        <Slider {...settings} >
          {CARROUSEL_STORE.map((item, i) => (
            <Link to={`/Store/SingleProduct/${item.id} `} key={i} > 
                <div className="rounded-xl ml-3 overflow-hidden cursor-pointer w-[90%] h-[150px] bg-cover bg-no-repeat bg-top " style={{backgroundImage:`url('${item.image}')` }}>
             
                </div>
                <div>
                    <p className="line-clamp-1  ml-3 ">{item.title} </p>
                </div>
             
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarrouselStore;
