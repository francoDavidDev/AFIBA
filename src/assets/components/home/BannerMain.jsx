import React from "react";
import banner from "../../imgs/home/bannerMain/banner.png";
import { Link } from "react-router-dom";
import video from "../../videos/home/presentacion1.mp4";
import video2 from "../../videos/home/presentacion4.mp4";
import video3 from "../../videos/home/presentacion3.mp4";


const CarrouselMain = () => {
  return (
    <div className="h-[auto]  w-full bg-cover bg-top bg-no-repeat  flex flex-col md:flex-row   justify-center items-center md:bg-gradient-to-l md:from-black  md:to-primary-300 bg-gradient-to-t from-black  to-primary-300 ">
      <div className="w-full h-auto py-10 md:py-0 ">
        <div className="w-[90%]   h-full  m-auto flex  flex-col justify-center items-start gap-y-5 ">
          <h2 className="h2 text-neutral-100  ">AFIBA</h2>

          <p className=" w-[100%] text-lg line-clamp-5  sm:line-clamp-none text-neutral-100 ">
            Los grandes clásicos nunca pasan de moda La nueva colección de FIFA
            Classics ya está disponible en la tienda oficial de la FIFA.
          </p>
          <button className="btn rounded-3xl border-2 border-neutral-100 hover:scale-110 transition-all duration-200 cursor-pointer">
            <Link to={"/Store"}> DESCRUBRELA</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center ">
      <div className="w-1/3 h-full overflow-hidden bg-yellow-500">
        <video
          className="w-full h-full scale-150"
          autoPlay
          loop
          muted
          src={video}
        ></video>
      </div>
      <div className="w-1/3 h-full overflow-hidden bg-yellow-500">
        <video
          className="w-full h-full scale-150"
          autoPlay
          loop
          muted
          src={video2}
        ></video>
      </div>
      <div className="w-1/3 h-full overflow-hidden bg-yellow-500">
        <video
          className="w-full h-full scale-150"
          autoPlay
          loop
          muted
          src={video3}
        ></video>
      </div>
      </div>
    </div>
  );
};

export default CarrouselMain;
