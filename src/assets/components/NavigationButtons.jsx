import React from "react";
import { Link } from "react-router-dom";

const NavigationButtons = () => {
  return (
    <div className="flex justify-center space-x-4 h-[60vh] items-center ">
      <Link to="/EventInfo">
        <button className="bg-primary-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 transition duration-300">
          INFORMACION DEL EVENTO
        </button>
      </Link>
      <Link to="/registrationForm">
        <button className="bg-primary-100 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-green-600 transition duration-300">
          FORMULARIO DE PREINSCRIPCION
        </button>
      </Link>
    </div>
  );
};

export default NavigationButtons;
