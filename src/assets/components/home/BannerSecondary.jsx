import React from "react";
// import banner image
import banner from "../../imgs/home/bannerSecondary/image1.png";
import { Link } from "react-router-dom";

const BannerSecondary = () => {
  return (
    <div className="h-auto w-full bg-cover bg-top bg-no-repeat  flex flex-col md:flex-row   justify-center items-center md:bg-gradient-to-l md:from-black  md:to-green-900 bg-gradient-to-t from-black  to-green-900 ">
      <div className="w-full h-auto py-10 md:py-0 ">
        <div className="w-[90%]   h-full  m-auto flex  flex-col justify-center items-start gap-y-5 ">
          <h2 className="h2 text-neutral-100  ">AFIBA MASCULINO</h2>

          <p className=" w-[100%] text-lg line-clamp-5  sm:line-clamp-none text-neutral-100 ">
            Los grandes clásicos nunca pasan de moda La nueva colección de FIFA
            Classics ya está disponible en la tienda oficial de la FIFA.
          </p>
          <button className="btn-lg rounded-3xl border-2 border-neutral-100 hover:scale-110 transition-all duration-200 cursor-pointer">
            <Link to={"/Store"}> VER MAS</Link>
          </button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center ">
        <div
          className="w-full h-[550px] overflow-hidden bg-yellow-500 bg-top md:bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url('${banner}')` }}
        ></div>
      </div>
    </div>
  );
};

export default BannerSecondary;
