import React from 'react';
import jsPDF from 'jspdf';
import flyer from '../imgs/calendar/21_julio.jpg';

const EventInfo = () => {

  const generatePDF = () => {
    const doc = new jsPDF();

    // Definir las posiciones y márgenes
    let y = 20;
    const lineHeight = 10;
    const margin = 10;

    // Agregar cada línea de texto al PDF
    doc.text('COPA PROVINCIA 2024', margin, y);
    y += lineHeight;
    doc.text('Fecha: 21 de julio 2024', margin, y);
    y += lineHeight;
    doc.text('Dirección: Arieta 2917', margin, y);
    y += lineHeight;
    doc.text('Partido: San Justo', margin, y);
    y += lineHeight;
    doc.text('Localidad: La Matanza', margin, y);
    y += lineHeight;
    doc.text('Provincia: Buenos Aires', margin, y);
    y += lineHeight * 2;
    doc.text('Hora de inscripción: de 9:00 a 12:00hs', margin, y);
    y += lineHeight;
    doc.text('Inicio de competencia: 14:00hs', margin, y);
    y += lineHeight * 2;
    doc.text('Más información:', margin, y);
    y += lineHeight;
    doc.text('Ruben Tousido: 1125193782', margin, y);
    y += lineHeight;
    doc.text('Paola Garcia: 1127796576', margin, y);

    // Agregar el flyer al PDF
    const imgData = flyer;
    doc.addImage(imgData, 'JPEG', margin, y + 10, 180, 120);

    doc.save('evento.pdf');
  };

  return (
    <section className='bg-primary-300 py-10'>
      <div className="p-6 rounded-lg max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between">
      <div className="md:w-1/2 md:pr-4">
        <h2 className="text-2xl font-bold mb-4">COPA PROVINCIA 2024</h2>
        <p className="mb-2">Dirección: Arieta 2917</p>
        <p className="mb-2">Partido: San Justo</p>
        <p className="mb-2">Localidad: La Matanza</p>
        <p className="mb-2">Provincia: Buenos Aires</p>
        <p className="mb-2"><strong>Fecha:</strong> 21 de julio 2024</p>
        <p className="mb-2"><strong>Hora de inscripción:</strong> de 9:00 a 12:00hs</p>
        <p className="mb-2"><strong>Inicio de competencia:</strong> 14:00hs</p>
        <p className="mb-2"><strong>Más información:</strong></p>
        <ul className="mb-4">
          <li>
            <a href="https://wa.me/1125193782" target='_blank'  className="text-blue-500 underline">Ruben Tousido: 1125193782</a>
          </li>
          <li>
            <a href="https://wa.me/1127796576" target="_blank" className="text-blue-500 underline">Paola Garcia: 1127796576</a>
          </li>
        </ul>
        <div className="mb-4">
          <strong >Ubicación en Google Maps:</strong>
          <div className="mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.331878377562!2d-58.563542784770456!3d-34.71740198042985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7f4e1f7bde5%3A0xe70a2c6cbee75ab!2sArieta%202917%2C%20B1754%20San%20Justo%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1624267008732!5m2!1ses!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:pl-4">
        <div className="mb-4">
          
          <div className="mt-2">
            <img src={flyer} alt="Flyer del evento" className="w-full rounded-lg" />
          </div>
        </div>
        <button
          onClick={generatePDF}
          className="mt-4 bg-red-800 text-white px-4 py-2 rounded hover:bg-primary-400/90"
        >
          Descargar PDF
        </button>
      </div>
    </div>
    </section>
    
  );
};

export default EventInfo;
