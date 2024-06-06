import React, { useState } from 'react';
import banner from '../../imgs/calendar/calendar.jpg';
import image1 from '../../imgs/calendar/7_julio.jpg';
import image2 from '../../imgs/calendar/12_mayo.jpg';
import image3 from '../../imgs/calendar/13_octubre.jpg';
import image4 from '../../imgs/calendar/21_julio.jpg';
import image5 from '../../imgs/calendar/24 _febrero.jpg';

const Calendar = () => {
  const TOURNAMENTS_2024 = [
    { name: "Copa independencia", date: "2024-07-07", location: "San Andres de Giles Bs.As", hour: '14:00 hs', info: '+54 92325 47-9243', participants: '20 equipos', image: image1, status: 'presente', regulation: '#', registration: '#' },
    { name: "Campeonato Apertura", date: "2024-05-12", location: "Colon 600 -MERLO", info: '2204081490', hour: '14:00 hs', participants: '16 equipos', image: image2, status: 'terminado', regulation: '#', registration: '#' },
    { name: "Campeonato Bonaerense", date: "2024-10-13", location: "La Plata Bs.As", info: '+54 92281 58-9117', hour: '09:00 hs', participants: '24 equipos', image: image3, status: 'presente', regulation: '#', registration: '#' },
    { name: "Copa Provincia", date: "2024-07-21", location: "Arieta 2917 - San justo - Bs.As", info: '1127796576 o 1125193782', hour: '11:00 hs', participants: '18 equipos', image: image4, status: 'presente', regulation: '#', registration: '#' },
    { name: "Sanson Cup", date: "2024-02-24", location: "Palacio de deportes Mar del Plata", info: '2266440219', hour: '10:00 hs', participants: '12 equipos', image: image5, status: 'terminado', regulation: '#', registration: '#' }
  ];

  const [filter, setFilter] = useState('todos');
  const [selectedTournament, setSelectedTournament] = useState(null);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleCardClick = (tournament) => {
    setSelectedTournament(tournament);
  };

  const closeModal = () => {
    setSelectedTournament(null);
  };

  const filteredTournaments = filter === 'todos' ? TOURNAMENTS_2024 : TOURNAMENTS_2024.filter(tournament => tournament.status === filter);

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-3xl font-bold text-center mb-8">CALENDARIO DE TORNEOS 2024</h1>

      <p className="text-lg text-gray-700 mb-8">
        Bienvenido al calendario de torneos. Aquí encontrarás una lista de próximos torneos de AFIBA que podrían interesarte.
      </p>

      <div className="bg-primary-300 rounded-lg p-6 mb-8 text-primary-200">
        <h2 className="text-xl font-bold mb-4">¿Cómo participar?</h2>
        <p className="mb-2">
          Participar en nuestros torneos es fácil. Solo necesitas seguir estos pasos:
        </p>
        <ol className="list-decimal pl-6">
          <li>Consulta el calendario y elige el torneo en el que deseas participar.</li>
          <li>Inscríbete en el torneo seleccionado.</li>
          <li>¡Prepárate y disfruta del torneo!</li>
        </ol>
      </div>

      <div className="flex justify-center mb-6">
        <button className={`mr-2 bg-primary-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${filter === 'presente' ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handleFilterChange('presente')}>Eventos por venir</button>
        <button className={`mr-2 bg-primary-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${filter === 'terminado' ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handleFilterChange('terminado')}>Eventos terminados</button>
        <button className={`bg-primary-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${filter === 'todos' ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={() => handleFilterChange('todos')}>Ver todos</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredTournaments.map((tournament, index) => (
          <div key={index} className={`bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-lg ${tournament.status === 'terminado' ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <img
              src={tournament.image}
              alt={tournament.name}
              className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
              onClick={() => handleCardClick(tournament)}
            />
            <div className="p-6">
              <h2 className="text-xl text-primary-100 font-bold mb-2">{tournament.name}</h2>
              <p className="text-gray-600 mb-2"><span className="font-bold">Fecha:</span> {tournament.date}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Ubicación:</span> {tournament.location}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Hora:</span> {tournament.hour}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Contacto:</span> {tournament.info}</p>
              <p className="text-gray-600 mb-2"><span className="font-bold">Participantes:</span> {tournament.participants}</p>
              <div className="flex justify-end mt-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600" onClick={() => handleCardClick(tournament)}>Ver Detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTournament && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl max-w-5xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-white mb-4">{selectedTournament.name}</h2>
            <p className="text-gray-300 mb-2"><span className="font-bold text-white">Fecha:</span> {selectedTournament.date}</p>
            <p className="text-gray-300 mb-2"><span className="font-bold text-white">Ubicación:</span> {selectedTournament.location}</p>
            <p className="text-gray-300 mb-2"><span className="font-bold text-white">Hora:</span> {selectedTournament.hour}</p>
            <p className="text-gray-300 mb-2"><span className="font-bold text-white">Contacto:</span> {selectedTournament.info}</p>
            <p className="text-gray-300 mb-2"><span className="font-bold text-white">Participantes:</span> {selectedTournament.participants}</p>
            <div className="mt-4">
              <a href={selectedTournament.regulation} className="text-blue-400 hover:underline block mb-2">Ver Reglamento</a>
              <a href={selectedTournament.registration} className="text-blue-400 hover:underline">Inscripción</a>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-red-600 text-white font-bold py-2 px-6 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300" onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">¿Necesitas ayuda o tienes alguna pregunta?</p>
        <a href="#" className="text-blue-600 hover:underline inline-block mt-2">Contáctanos</a>
      </div>
    </div>
  );
};

export default Calendar;
