import React, { useState } from 'react';
import { motion } from 'framer-motion';
import banner from '../../imgs/calendar/calendar.jpg';
import image1 from '../../imgs/calendar/7_julio.jpg';
import image2 from '../../imgs/calendar/12_mayo.jpg';
import image3 from '../../imgs/calendar/13_octubre.jpg';
import image4 from '../../imgs/calendar/21_julio.jpg';
import image5 from '../../imgs/calendar/24_febrero.jpg';
import { Link } from 'react-router-dom';

const Calendar = () => {
  const TOURNAMENTS_2024 = [
    { name: "Sanson Cup", date: "2024-02-24", location: "Palacio de deportes Mar del Plata", info: '2266440219', hour: '10:00 hs', image: image5, status: 'terminado', registration: '#', inscriptions: false },
    { name: "Campeonato Apertura", date: "2024-05-12", location: "Colon 600 - MERLO", info: '2204081490', hour: '14:00 hs', image: image2, status: 'terminado', registration: '#', inscriptions: false },
    { name: "Copa independencia", date: "2024-07-07", location: "San Andres de Giles Bs.As", hour: '14:00 hs', info: '+54 92325 47-9243', image: image1, status: 'presente', registration: '#', inscriptions: true },
    { name: "Copa Provincia", date: "2024-07-21", location: "Arieta 2917 - San Justo - Bs.As", info: '1127796576 o 1125193782', hour: '11:00 hs', image: image4, status: 'presente', registration: '#', inscriptions: false },
    { name: "Campeonato Bonaerense", date: "2024-10-13", location: "La Plata Bs.As", info: '+54 92281 58-9117', hour: '09:00 hs', image: image3, status: 'presente', registration: '#', inscriptions: false }
  ];
  
  const [filter, setFilter] = useState('presente');
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleCardClick = (tournament) => {
    setSelectedTournament(tournament);
    setShowImage(true);
  };

  const closeModal = () => {
    setSelectedTournament(null);
    setShowImage(false);
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
      <p className="text-gray-700 mb-2"><span className="font-semibold">Fecha:</span> {tournament.date}</p>
      <p className="text-gray-700 mb-2"><span className="font-semibold">Ubicación:</span> {tournament.location}</p>
      <p className="text-gray-700 mb-2"><span className="font-semibold">Hora:</span> {tournament.hour}</p>
      <p className="text-gray-700 mb-4"><span className="font-semibold">Contacto:</span> {tournament.info}</p>
      <div className="flex justify-end">
        <button
          className={`bg-blue-500 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 ${tournament.status === 'terminado' || !tournament.inscriptions ? 'cursor-not-allowed' : 'hover:bg-blue-600'}`}
          onClick={() => tournament.status !== 'terminado' && tournament.inscriptions && handleCardClick(tournament)}
          disabled={tournament.status === 'terminado' || !tournament.inscriptions}
        >
          Ver Detalles
        </button>
      </div>
    </motion.div>
  </motion.div>
))}
      </div>

      {selectedTournament && showImage && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.9 }}
      className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-lg w-full mx-4 sm:mx-auto relative"
      onClick={(e) => e.stopPropagation()}
    >
      <img src={selectedTournament.image} alt={selectedTournament.name} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold text-white mt-4">{selectedTournament.name}</h2>
      <p className="text-gray-300 mb-1"><span className="font-bold text-white">Fecha:</span> {selectedTournament.date}</p>
      <p className="text-gray-300 mb-1"><span className="font-bold text-white">Ubicación:</span> {selectedTournament.location}</p>
      <p className="text-gray-300 mb-1"><span className="font-bold text-white">Hora:</span> {selectedTournament.hour}</p>
      <p className="text-gray-300 mb-1"><span className="font-bold text-white">Contacto:</span> {selectedTournament.info}</p>
      <p className="text-gray-300 mb-1"><span className="font-bold text-white">Inscripciones:</span> {selectedTournament.inscriptions ? 'Abiertas' : 'No Disponible'}</p>
      <div className="mt-2">
        <Link to={`/RegistrationForm`} className={selectedTournament.inscriptions ? "text-blue-400 hover:underline" : "line-through text-gray-500 pointer-events-none block mb-2"}>{selectedTournament.inscriptions ? 'Inscripción' : 'Inscripción no disponible'}</Link>
      </div>
      <div className="mt-2">
        <Link to={`/Tournaments`} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ver Reglas</Link>
      </div>
      <div className="mt-4 flex justify-end">
        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300" onClick={closeModal}>Cerrar</button>
      </div>
    </motion.div>
  </motion.div>
)}





      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">¿Necesitas ayuda o tienes alguna pregunta?</p>
        <a href="mailto:afibaoficialonline@gmail.com" className="text-blue-600 hover:underline inline-block mt-2">Contáctanos</a>
      </div>
    </div>
  );
};

export default Calendar;

