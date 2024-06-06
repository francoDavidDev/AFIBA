import React from "react";
import { Link, useParams } from "react-router-dom";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import motiopn
import { motion, useCycle } from "framer-motion";
//import image/videos
import image from "../../../imgs/home/bannerSecondary3/BANNER.jpg";


import { TOURNAMENTS } from "../../../data/tournaments";
import Sponsors from "../../Sponsors";
import { ICONS_NETWORKING } from "../../../data/header";

const TournamentsViews_female = () => {
  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  const btn_animation = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
    },
  };
  const btn_animation2 = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
    },
  };

  const anime = (v) => {
    v === 1 ? cycleAnimation() : cycleAnimation2();
  };

  return (
    <section className="w-full flex flex-col justify-center h-auto items-center m-auto gap-y-10">
      <div className="w-[90%] h-auto py-20 flex flex-col justify-center items-center gap-y-7 ">
        <div className="w-full m-auto  text-center ">
          <h2 className="h2"> MODALIDAD FEMENINA </h2>
        </div>

        <div className="h-[300px] w-full  bg-cover bg-center bg-no-repeat rounded-xl  overflow-hidden"
         style={{ backgroundImage: `url('${image}')` }}>
       
        </div>
      

        <div className=" py-20  w-full  mt-1 2 grid  grid-cols-1 sm:grid-cols-2  gap-5 m-auto ">
        {TOURNAMENTS.map((item, i) => {
  if (item.tag === 'femenino') {
    return (
      <div
        key={i}
        className="bg-black w-[1fr] h-[400px]  rounded-xl flex flex-col justify-center  bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url('${item.image}')` }}
      >
        {" "}
        <h4 className="h4 h-[100vh] text-primary-200 text-center rounded-xl pt-5 bg-gradient-to-b from-black  to-white/0 ">
          {" "}
          {item.title}{" "}
        </h4>
        <div className="w-full h-[100vh] pb-[50px] gap-y-5 flex rounded-xl justify-end items-center flex-col  bg-gradient-to-t from-black  to-white/0">
          <div className="w-full flex justify-around items-center">
            <div
              className=" "
              onClick={() => {
                downloadFileAtURL(item.rules);
              }}
            >
              <h5 className="h5 hover:text-primary-400 transition-all cursor-pointer  hover:scale-110">
                REGLAS
              </h5>
            </div>
            <div className="   ">
              <Link to={`/TournamentsViews/${item.id}`} className="h5 text-primary-200 hover:text-primary-400 transition-all  cursor-pointer hover:scale-110">
                VER MAS
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
})}
        </div>
      </div>

      {/* sponsors */}
      <Sponsors />
    </section>
  );
};

export default TournamentsViews_female;
