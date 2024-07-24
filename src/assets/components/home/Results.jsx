import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom
import { RESULTS } from '../../data/results';

const Results = () => {
  // Filtra los resultados de 2024 y toma los tres primeros
  const recentResults = RESULTS.filter(result => result.year === '2024').slice(0, 3);

  return (
    <div className="flex flex-col max-h-400px h-400px items-center justify-center py-4">
      <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold uppercase">ÚLTIMOS RESULTADOS</h2>
      <p className="text-sm sm:text-base lg:text-lg mb-4">Haz clic para descargar los resultados</p>
      <div className="flex justify-around w-full max-w-4xl">
        {recentResults.map((result, index) => (
          <div key={index} className="w-1/3 p-1">
            <a href={result.pdf} download>
              <img
                src={result.image}
                alt={`Resultado ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center w-full">
        <Link to="/results">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600">
            Ver todos los resultados
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Results;
