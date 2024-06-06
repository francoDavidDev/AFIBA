import React, { useState } from "react";
import banner from "../../imgs/home/bannerSecondary/BANNER.jpg";
import { Link } from "react-router-dom";

const BannerSecondary3 = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e) => {
    setIsDragging(true);
    e.dataTransfer.setDragImage(e.target, 50, 50); // Ajusta las coordenadas según necesites
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="h-auto w-full flex flex-col md:flex-row justify-center items-center bg-gradient-to-t from-black to-green-900">
      {/* Text Section */}
      <div className="md:w-1/2 w-full py-10 md:py-0 flex flex-col justify-center items-center gap-5">
        <h4 className="text-2xl md:text-4xl text-center text-neutral-100">MODALIDAD MASCULINA</h4>
        <p className="text-lg md:text-base text-center text-neutral-100 line-clamp-5">
          CATEGORÍA DE HOMBRES
        </p>
        <Link to={"/TournamentsViews_masculine"}>
          <button className="bg-transparent border-2 border-neutral-100 text-neutral-100 rounded-3xl py-2 px-6 hover:bg-neutral-100 hover:text-black transition duration-200">
            VER MÁS
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full h-full flex justify-center items-center">
        <div
          className={`w-full h-[250px] overflow-hidden bg-cover bg-center bg-no-repeat transition-transform duration-300 cursor-pointer ${isDragging ? "cursor-grabbing" : "hover:scale-105"}`}
          style={{ backgroundImage: `url('${banner}')` }}
          draggable="true"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {/* Opcional: Puedes añadir más contenido dentro del contenedor de la imagen */}
        </div>
      </div>
    </div>
  );
};

export default BannerSecondary3;
