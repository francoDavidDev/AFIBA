import React from 'react';
//import banner
import banner from '../../imgs/calendar/calendar.jpg'
//IMAGE CALENDAR
import image1 from '../../imgs/calendar/7_julio.jpg'
import image2 from '../../imgs/calendar/12_mayo.jpg'
import image3 from '../../imgs/calendar/13_octubre.jpg'
import image4 from '../../imgs/calendar/21_julio.jpg'
import image5 from '../../imgs/calendar/24 _febrero.jpg'



const Calendar = () => {
  // Ejemplo de datos de torneos
  const TOURNAMENTS_2024 = [
    { name: "Copa independencia", date: "07-07-2024", location: "San Andres de Giles Bs.As", hour: '14:00 hs', info:'+54 92325 47-9243',image:image1 ,status:'presente'},
    { name: "Campeonato Apertura", date: "12-05-2024", location: "Colon 600 -MERLO", info:'2204081490', hour: '14:00 hs',image:image2 ,status:'terminado'},
    { name: "Campeonato Bonaerense", date: "13-10-2024", location: "La Plata Bs.As ", info:'+54 92281 58-9117' ,image:image3,status:'presente' },
    { name: "Copa Provincia", date: "21-07-2024", location: "Arieta 2917 - San justo - Bs.As",  info:'1127796576 o 1125193782 ' ,image:image4,status:'presente'},
    { name: "Sanson Cup", date: "24-02-2024", location: "Palacio de depoertes mar del plata",info:'2266440219', image:image5,status:'terminado'}
  ];

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-3xl font-bold text-center mb-8">CALENDARIO DE TORNEOS 2024</h1>

      {/* Introducción */}
      <p className="text-lg text-gray-700 mb-8">
        Bienvenido al calendario de torneos. Aquí encontrarás una lista de próximos torneos de AFIBA que podrían interesarte.
      </p>

      {/* Información sobre cómo participar */}
      <div className="bg-primary-300 rounded-lg p-6 mb-8  text-primary-200 "
    
      >
        <h2 className="text-xl font-bold mb-4">¿Cómo participar?</h2>
        <p className=" mb-2">
          Participar en nuestros torneos es fácil. Solo necesitas seguir estos pasos:
        </p>
        <ol className="list-decimal pl-6">
       
          <li className="">Consulta el calendario y elige el torneo en el que deseas participar.</li>
          <li className="">Inscríbete en el torneo seleccionado.</li>
          <li className="">¡Prepárate y disfruta del torneo!</li>
        </ol>
      </div>

      {/* Calendario de Torneos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Mapeo de torneos */}
        {TOURNAMENTS_2024.map((tournament, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="p-4">
              <h2 className="text-xl text-primary-100 font-bold mb-2 ">{tournament.name}</h2>
              <p className="text-gray-600 mb-2"><span className="font-bold">Fecha:</span> {tournament.date}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Ubicación:</span> {tournament.location}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Participantes:</span> {tournament.participants}</p>
              <p className="text-gray-600 mb-2"><span  className={`${tournament.status === 'terminado' ? 'text-red-500' : 'text-primary-100'} font-bold`}>Premio:</span  > {tournament.stat}</p>
            </div>
            <div className="bg-gray-100 px-4 py-2 flex justify-end">
              <a href="#" className="text-blue-600 hover:underline">Ver detalles</a>
            </div>
          </div>
        ))}
      </div>

      {/* Enlaces útiles */}
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">¿Necesitas ayuda o tienes alguna pregunta?</p>
        <a href="#" className="text-blue-600 hover:underline inline-block mt-2">Contáctanos</a>
      </div>
    </div>
  );
};

export default Calendar;
