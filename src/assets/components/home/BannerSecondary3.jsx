import React from "react";
// import banner image
import banner from "../../imgs/home/bannerSecondary3/image1.png";
import { Link } from "react-router-dom";

const BannerSecondary3 = () => {
  return (
    <div className="h-auto w-full bg-cover bg-top bg-no-repeat  flex flex-col md:flex-row   justify-center items-center md:bg-gradient-to-l md:from-black  md:to-green-900 bg-gradient-to-t from-black  to-green-900 ">
      <div className="w-full h-auto py-10 md:py-0 ">
        <div className="w-[90%]   h-full  m-auto flex  flex-col justify-center items-start gap-y-5 ">
          <h2 className="h2 text-neutral-100  ">AFIBA FEMENINO</h2>

          <p className=" w-[100%] text-lg line-clamp-5  sm:line-clamp-none text-neutral-100 ">
            Categorias de AFIBA PARA  MUJERES
          </p>
          <Link to={"/TournamentsViews_female"}>
          <button className="btn-lg rounded-3xl border-2 border-neutral-100 hover:scale-110 transition-all duration-200 cursor-pointer">
             VER MAS
          </button>
          </Link>
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

export default BannerSecondary3;
