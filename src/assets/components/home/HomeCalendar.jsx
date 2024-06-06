import React from 'react';
import bannerImage from '../../imgs/calendar/calendario.jpg'; // Ajusta la ruta a tu imagen
import { Link } from 'react-router-dom';

const HomeCalendar = () => {
  return (
    <div className="container mx-auto py-12 px-6">
      <div className=" text-white rounded-lg p-8 shadow-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={bannerImage}
              alt="Calendario de Torneos"
              className="w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className=" font-bold mb-4 h3">Próximos Torneos</h3>
            <p className="text-lg mb-6">
            ¡Bienvenido al calendario de torneos de AFIBA! Aquí podrás consultar los próximos torneos de fisicoculturismo, inscribirte y revisar los reglamentos. ¡No te pierdas la oportunidad de ser parte de estos eventos emocionantes!
            </p>
            <Link to="/calendar" className="bg-primary-100 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-primary-300 hover:text-primary-200 transition duration-300">
              Ver Todo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCalendar;
