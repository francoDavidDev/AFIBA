import React from 'react';
import jsPDF from 'jspdf';
import flyer from '../imgs/calendar/13_octubre.jpg';

const EventInfo = () => {

  const generatePDF = () => {
    const doc = new jsPDF();

    // Definir las posiciones y márgenes
    let y = 20;
    const lineHeight = 10;
    const margin = 10;

    // Agregar cada línea de texto al PDF
    doc.text('COPA BONAERENSE 2024', margin, y);
    y += lineHeight;
    doc.text('Fecha: 13 de octubre 2024', margin, y);
    y += lineHeight;
    doc.text('Dirección: Calle 4 entre 51 y 53', margin, y);
    y += lineHeight;
    doc.text('Partido: La Plata', margin, y);
    y += lineHeight;
    doc.text('Provincia: Buenos Aires', margin, y);
    y += lineHeight * 2;
    doc.text('Hora de inscripción: de 9:00 a 12:00hs', margin, y);
    y += lineHeight;
    doc.text('Inicio de competencia: 14:00hs', margin, y);
    y += lineHeight * 2;
    doc.text('Más información:', margin, y);
    y += lineHeight;
    doc.text('Roldan Pablo: +54 9 2281 58-4117', margin, y);

    // Agregar el flyer al PDF
    const imgData = flyer;
    doc.addImage(imgData, 'JPEG', margin, y + 10, 180, 120);

    doc.save('evento.pdf');
  };

  return (
    <section className='bg-primary-300 py-10'>
      <div className="p-6 rounded-lg max-w-screen-xl mx-auto flex flex-col md:flex-row md:justify-between">
        <div className="md:w-1/2 md:pr-4">
          <h2 className="text-2xl font-bold mb-4">COPA BONAERENSE 2024</h2>
          <p className="mb-2">Dirección: Teatro Metro - Calle 4 entre 51 y 53</p>
          <p className="mb-2">Partido: La Plata</p>
          <p className="mb-2">Provincia: Buenos Aires</p>
          <p className="mb-2"><strong>Fecha:</strong> 13 de octubre 2024</p>
          <p className="mb-2"><strong>Hora de inscripción:</strong> de 9:00 a 12:00hs</p>
          <p className="mb-2"><strong>Inicio de competencia:</strong> 14:00hs</p>
          <p className="mb-2"><strong>Más información:</strong></p>
          <ul className="mb-4">
            <li>
              <a href="https://wa.me/542281584117" target='_blank' className="text-blue-500 underline">Roldan Pablo: +54 9 2281 58-4117</a>
            </li>
          </ul>
          <div className="mb-4">
            <strong>Ubicación en Google Maps:</strong>
            <div className="mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.076731405743!2d-57.94456908109084!3d-34.91294061414068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63bfb095c73%3A0x90df8fda81a1eb59!2sTeatro%20Metro!5e0!3m2!1ses!2sus!4v1624267008732!5m2!1ses!2sus"
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
