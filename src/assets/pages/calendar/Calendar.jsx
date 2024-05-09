import React from 'react';

const Calendar = () => {
  // Ejemplo de datos de torneos
  const tournaments = [
    { name: "Torneo de Verano", date: "2024-06-15", location: "Ciudad A", participants: 20, prize: "$1000" },
    { name: "Torneo de Otoño", date: "2024-09-20", location: "Ciudad B", participants: 15, prize: "$800" },
    { name: "Torneo de Invierno", date: "2024-12-10", location: "Ciudad C", participants: 25, prize: "$1200" },
    { name: "Torneo de Primavera", date: "2024-03-25", location: "Ciudad D", participants: 18, prize: "$900" },
    { name: "Torneo de Halloween", date: "2024-10-31", location: "Ciudad E", participants: 30, prize: "$1500" }
  ];

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Calendario de Torneos</h1>

      {/* Introducción */}
      <p className="text-lg text-gray-700 mb-8">
        Bienvenido al calendario de torneos. Aquí encontrarás una lista de próximos torneos de videojuegos que podrían interesarte.
      </p>

      {/* Información sobre cómo participar */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">¿Cómo participar?</h2>
        <p className="text-gray-700 mb-2">
          Participar en nuestros torneos es fácil. Solo necesitas seguir estos pasos:
        </p>
        <ol className="list-decimal pl-6">
          <li className="text-gray-700">Regístrate en nuestra plataforma.</li>
          <li className="text-gray-700">Consulta el calendario y elige el torneo en el que deseas participar.</li>
          <li className="text-gray-700">Inscríbete en el torneo seleccionado.</li>
          <li className="text-gray-700">¡Prepárate y disfruta del torneo!</li>
        </ol>
      </div>

      {/* Calendario de Torneos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Mapeo de torneos */}
        {tournaments.map((tournament, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{tournament.name}</h2>
              <p className="text-gray-600 mb-2"><span className="font-bold">Fecha:</span> {tournament.date}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Ubicación:</span> {tournament.location}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Participantes:</span> {tournament.participants}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Premio:</span> {tournament.prize}</p>
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
