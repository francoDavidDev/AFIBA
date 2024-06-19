import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Import motion from framer-motion
import { motion, useCycle } from "framer-motion";
// Import image
import image from "../../../imgs/home/female_modality/BANNER.jpg";



import { MODALITIES } from "../../../data/modalities";
import Sponsors from "../../Sponsors";

const FemaleModalities = () => {
  const [filter, setFilter] = useState("femenino");

 

  const filteredTournaments = filter === "All" ? MODALITIES : MODALITIES.filter(tournament => tournament.tag === filter);

  const btn_animation = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
    },
  };

  return (
    <section className="w-full flex flex-col justify-center h-auto items-center m-auto gap-y-10">
      <div className="w-[90%] h-auto py-20 flex flex-col justify-center items-center gap-y-7 ">
        <div className="w-full m-auto text-center">
          <h2 className="h2">TORNEOS AFIBA FEMENINO</h2>
        </div>

        <div className="h-[300px] md:h-[400px] w-full bg-cover bg-top bg-no-repeat rounded-xl overflow-hidden"
          style={{ backgroundImage: `url('${image}')` }}>
        </div>

        <div className="flex justify-center items-center gap-4 mb-10">
          
          <button
            className={`py-2 px-4 rounded-lg ${filter === "femenino" ? "bg-green-500 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setFilter("femenino")}
          >
            Femenino
          </button>
         
       
        </div>

        <div className="py-20 w-full mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 m-auto">
  {filteredTournaments.map((item, i) => (
    <div
      key={i}
      className="bg-black w-full h-[300px] md:h-[400px] rounded-lg flex flex-col justify-center bg-center bg-cover bg-no-repeat shadow-md transition-shadow duration-300 hover:shadow-xl"
      style={{ backgroundImage: `url('${item.image}')` }}
    >
      <h4 className="text-lg md:text-xl text-primary-200 text-center py-4 bg-gradient-to-b from-black to-transparent rounded-t-lg">
        {item.title}
      </h4>
      <div className="w-full h-full p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent rounded-b-lg">
        <div className="w-full flex justify-around items-center mt-4">
     
          <div>
            <Link
              to={`/modalidad/${item.id}`}
              className="text-md text-primary-200 hover:text-primary-400 transition-all cursor-pointer hover:scale-105"
            >
              VER MÁS
            </Link>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* Sponsors */}
      <Sponsors />
    </section>
  );
};

export default FemaleModalities;
