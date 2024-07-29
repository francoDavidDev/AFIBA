import React, { useState } from 'react';
import { motion } from 'framer-motion';
import banner from '../../imgs/calendar/calendar.jpg';
import image1 from '../../imgs/calendar/7_julio.jpg';
import image2 from '../../imgs/calendar/12_mayo.jpg';
import image3 from '../../imgs/calendar/13_octubre.jpg';
import image4 from '../../imgs/calendar/21_julio.jpg';
import image5 from '../../imgs/calendar/24_febrero.jpg';
import image6 from '../../imgs/calendar/15_diciembre.jpg';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const TOURNAMENTS_2024 = [
    { name: "Sanson Cup", date: "2024-02-24", location: "Palacio de deportes Mar del Plata", info: '2266440219', hour: '10:00 hs', image: image5, status: 'terminado', registration: '#', inscriptions: false },
    { name: "Campeonato Apertura", date: "2024-05-12", location: "Colon 600 - MERLO", info: '2204081490', hour: '14:00 hs', image: image2, status: 'terminado', registration: '#', inscriptions: false },
    { name: "Copa independencia", date: "2024-07-07", location: "San Andres de Giles Bs.As", hour: '14:00 hs', info: '+54 92325 47-9243', image: image1, status: 'presente', registration: '#', inscriptions: false },
    { name: "Copa Provincia", date: "2024-07-21", location: "Arieta 2917 - San Justo - Bs.As", info: '1127796576 o 1125193782', hour: '11:00 hs', image: image4, status: 'terminado', registration: '#', inscriptions: true },
    { name: "Campeonato Bonaerense", date: "2024-10-13", location: "La Plata Bs.As", info: '+54 92281 58-9117', hour: '09:00 hs', image: image3, status: 'presente', registration: '#', inscriptions: false },
    { name: "Campeonato Clausura", date: "2024-12-15", location: "Gregorio De La Ferrere", info: '+54 9 1128729216', hour: '--', image: image6, status: 'presente', registration: '#', inscriptions: false }
  ];

  const [filter, setFilter] = useState('presente');
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

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };

  const sortTournaments = (tournaments) => {
    return tournaments.sort((a, b) => b.inscriptions - a.inscriptions || a.status.localeCompare(b.status));
  };

  const filteredTournaments = filter === 'todos' ? sortTournaments([...TOURNAMENTS_2024]) : sortTournaments(TOURNAMENTS_2024.filter(tournament => tournament.status === filter));

  return (
    <div className="container mx-auto py-12 px-8">
      <h1 className="text-3xl font-bold text-center mb-8">CALENDARIO DE TORNEOS 2024</h1>

      <p className="text-lg text-primary-200 mb-8">
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
          <motion.div
            key={index}
            className={`rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 ${tournament.status === 'terminado' ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div className="relative">
              <motion.img
                src={tournament.image}
                alt={tournament.name}
                className="w-full h-64 object-cover"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              {tournament.inscriptions && (
                <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Inscripciones Abiertas
                </div>
              )}
              {!tournament.inscriptions && tournament.status !== 'terminado' && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  No Disponible
                </div>
              )}
              {tournament.status === 'terminado' && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  No Disponible
                </div>
              )}
            </motion.div>
            <motion.div
              className="p-6 bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl text-primary-100 font-bold mb-3">{tournament.name}</h2>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Fecha:</span> {formatDate(tournament.date)}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Ubicación:</span> {tournament.location}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Hora:</span> {tournament.hour}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">Contacto:</span> {tournament.info}</p>
              <button className="bg-primary-500 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => handleCardClick(tournament)}>Más información</button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {selectedTournament && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
          <motion.div
            className="bg-white rounded-lg p-8 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedTournament.name}</h2>
            <img src={selectedTournament.image} alt={selectedTournament.name} className="w-full h-64 object-cover mb-4" />
            <p className="text-gray-700 mb-2"><span className="font-semibold">Fecha:</span> {formatDate(selectedTournament.date)}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Ubicación:</span> {selectedTournament.location}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Hora:</span> {selectedTournament.hour}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Contacto:</span> {selectedTournament.info}</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
