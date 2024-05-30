import React from "react";
import { useParams } from "react-router-dom";
import { CARROUSEL_THEMES, NOTICES } from "../../../data/home";
import { ICONS_NETWORKING } from "../../../data/header";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NoticesViews = () => {
  const { id } = useParams();

  const item = NOTICES.find((item) => item.id === id);
  const { title, image, description } = item;

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
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="w-[90%] flex flex-col justify-center h-auto items-center m-auto">
      <div className="w-full h-auto py-20 flex flex-col justify-center items-center gap-y-7 ">
        <div className="w-full m-auto  text-center ">
          <h2 className="h2"> {title} </h2>
        </div>

        <div className="h-[700px] w-full  bg-cover bg-top bg-no-repeat rounded-xl  overflow-hidden">
          <img src={image} className="w-full h-[150%] rounded-xl" alt="" />
        </div>
        <div className="w-full  flex justify-between items-start">
          <h5 className="h5 bg-neutral-100 text-neutral-500">RESULTADOS</h5>
          <div className="flex gap-5 ">
            {ICONS_NETWORKING.map((item, i) => {
              return (
                <div className="text-xl text-center bg-neutral-100 rounded-full w-[30px] h-[30px]  flex justify-center items-center ">
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* informacion */}

      {/* Sección 1 */}
      <section className="py-12">
        <div className=" mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:justify-between">
            <div className="w-full lg:w-1/2 lg:pr-8 mb-6 lg:mb-0">
              <img className="rounded-lg shadow" src={image} alt="Misión" />
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-4">¿QUE ES EL TORNEO?</h2>
              <p className="text-neutral-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sit amet nibh eu magna facilisis venenatis. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Mauris sit amet nibh eu
                magna facilisis venenatis. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Mauris sit amet nibh eu magna
                facilisis venenatis. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Mauris sit amet nibh eu magna facilisis
                venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Mauris sit amet nibh eu magna facilisis venenatis. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
                amet nibh eu magna facilisis venenatis.
              </p>
              <div className="w-full lg:w-full bg-red-500 ">
                <Slider {...settings} >
                  {CARROUSEL_THEMES.map((item, i) => {
                    return (
                      <div key={i}>
                        <div
                          className="rounded-xl m-1 overflow-hidden w-[250px] h-[150px] cursor-pointer bg-no-repeat bg-cover bg-center "
                          style={{ backgroundImage: `url('${item.image}')` }}
                        ></div>
                        <div className="w-[90%] ">
                          <p className="line-clamp-1">{item.title} </p>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex w-full flex-col justify-center items-center text-left gap-y-10 p-10">
        <h4 className="h4  text-center">{title}</h4>
        <p className="text-sm sm:text-lg">{description}</p>
      </div>
    </section>
  );
};

export default NoticesViews;
