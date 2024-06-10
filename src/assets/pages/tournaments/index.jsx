import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// Import motion from framer-motion
import { motion, useCycle } from "framer-motion";
// Import image
import image from "../../imgs/tournaments/banner.jpg";
import { TOURNAMENTS } from "../../data/tournaments";
import Sponsors from "../../components/Sponsors";

const Tournaments = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTournaments = TOURNAMENTS.filter(tournament => {
    const matchesFilter = filter === "All" || tournament.tag === filter;
    const matchesSearchTerm = tournament.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearchTerm;
  });

  const btn_animation = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
    },
  };

  return (
    <section className="w-full flex flex-col justify-center h-auto items-center m-auto gap-y-10">
      <div className="w-[90%] h-auto py-20 flex flex-col justify-center items-center gap-y-7">
        <div className="w-full m-auto text-center">
          <h2 className="h2">INFORMACION DE MODALIDADES</h2>
        </div>

        <div className="h-[300px] md:h-[600px] w-full bg-cover bg-bottom bg-no-repeat rounded-xl overflow-hidden"
          style={{ backgroundImage: `url('${image}')` }}>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className={`py-2 px-4 rounded-lg ${filter === "All" ? "bg-[#114232] text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setFilter("All")}
          >
            Todos
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${filter === "femenino" ? "bg-[#114232] text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setFilter("femenino")}
          >
            Femenino
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${filter === "masculino" ? "bg-[#114232] text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setFilter("masculino")}
          >
            Masculino
          </button>
          <button
            className={`py-2 px-4 rounded-lg ${filter === "mixed" ? "bg-[#114232] text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setFilter("mixed")}
          >
            Parejas
          </button>
        </div>

        <div className="py-20 w-full mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 m-auto">
          {filteredTournaments.map((item, i) => (
            <div
              key={i}
              className="bg-black w-full h-[300px] md:h-[400px] rounded-lg flex flex-col justify-center bg-center bg-cover bg-no-repeat shadow-md transition-shadow duration-300 hover:shadow-xl"
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <h4 className="text-lg md:text-xl text-[#EEF7FF] text-center py-4 bg-gradient-to-b from-black to-transparent rounded-t-lg">
                {item.title}
              </h4>
              <div className="w-full h-full p-4 flex flex-col justify-end bg-gradient-to-t from-black to-transparent rounded-b-lg">
                <div className="w-full flex justify-center items-center mt-4">
                  <div>
                    <Link
                      to={`/TournamentsViews/${item.id}`}
                      className="text-md text-[#EEF7FF] hover:text-[#f70808] transition-all cursor-pointer hover:scale-105"
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

export default Tournaments;
