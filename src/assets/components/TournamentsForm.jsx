import React, { useState } from "react";
import banner from '../imgs/calendar/7_julio.jpg';
import emailjs from "@emailjs/browser";

const provinces = [
  "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa",
  "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta",
  "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego",
  "Tucumán"
];

const modalities = [
  "FISICOCULTURISMO", "FISICOCULTURISMO CLÁSICO", "CLASSIC PHYSIQUE", "MEN´S PHYSIQUE",
  "MUSCULAR MEN´S PHYSIQUE", "GAMES CLASSIC", "FITMODEL", "BIKINI", "WELLNESS", "BODY FITNESS",
  "WOMEN´S PHYSIQUE", "FITNESS COREOGRÁFICO", "PAREJA"
];

const categories = [
  "JUNIOR", "SENIOR", "MÁSTER MAS DE 30 AÑOS (SOLO BIKINI)",
  "MÁSTER MÁS DE 35 AÑOS (SOLO BODY FITNESS, BIKINI Y WELLNESS)",
  "MÁSTER MÁS DE 40 AÑOS (SOLO BIKINI, WELLNESS, FISICOCULTURISMO, MEN´S PHYSIQUE, CULTURISMO CLÁSICO Y CLASSIC PHYSIQUE)",
  "MÁSTER MÁS DE 45 AÑOS (SOLO FISICOCULTURISMO Y BODY FITNESS)",
  "MÁSTER MÁS DE 50 AÑOS (SOLO FISICOCULTURISMO)",
  "MÁSTER MÁS DE 55 AÑOS (SOLO FISICOCULTURISMO Y BODY FITNESS)",
  "MÁSTER MAS DE 60 (SOLO FISICOCULTURISMO)",
  "OLÍMPICA (SOLO PARA BIKINI, WELLNESS, MEN´S PHYSIQUE Y GAMES CLASSIC)",
  "MASCULINO (SOLO FITMODEL Y FITNESS COREOGRÁFICO)",
  "FEMENINO (SOLO FITMODEL Y FITNESS COREOGRÁFICO)",
  "INFANTIL (SOLO FITNESS COREOGRÁFICO)",
  "CHALLENGE (SOLO FISICOCULTURISMO, BIKINI, WELLNESS Y MEN´S PHYSIQUE)",
  "FITNESS (SOLO PARA PAREJAS)",
  "CULTURISTA (SOLO PARA PAREJAS)"
];

const TournamentsForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    birthDate: "",
    dni: "",
    province: "",
    modality: "",
    category: "",
    competitionWeight: "",
    height: "",
    phone: "",
    trainer: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      email: formData.email,
      fullName: formData.fullName,
      birthDate: formData.birthDate,
      dni: formData.dni,
      province: formData.province,
      modality: formData.modality,
      category: formData.category,
      competitionWeight: formData.competitionWeight,
      height: formData.height,
      phone: formData.phone,
      trainer: formData.trainer,
    };

    emailjs.send(
      'service_vnkzh6r', // Replace with your service ID
      'template_ylbg0bb', // Replace with your template ID
      templateParams,
      '7-MGEkvWiUORZGWZE' // Replace with your user ID
    )
    .then(() => {
      setLoading(false);
      alert('¡Formulario enviado con éxito!');
      setFormData({
        email: "",
        fullName: "",
        birthDate: "",
        dni: "",
        province: "",
        modality: "",
        category: "",
        competitionWeight: "",
        height: "",
        phone: "",
        trainer: ""
      });
    }, (error) => {
      setLoading(false);
      console.error('Error al enviar el formulario:', error);
      alert('Algo salió mal. Intenta de nuevo.');
    });
  };

  return (
    <section className="w-full flex flex-col justify-center items-center m-auto gap-y-20 bg-primary-100">
      {/* Banner Section */}
      <div className="w-[90%] h-auto py-20 flex flex-col justify-center items-center gap-y-7 relative">
        <div 
          className="w-full h-[600px] bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden mb-6 relative"
          style={{ backgroundImage: `url('${banner}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>

      {/* Title Section */}
      <div className="w-full text-center px-4">
        <h2 className="text-4xl font-bold text-white">COPA INDEPENDENCIA 2024</h2>
        <p className="text-lg text-white">
          10/12 - MEDICIÓN Y PESAJE DE 16 A 18HS <br />
          11/12 - COMPETENCIA A PARTIR DE LAS 10HS.
        </p>
      </div>

      <form className="w-[90%] max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-white" htmlFor="email">
            Su Correo:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg text-primary-900"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <h3 className="text-xl font-bold mt-6 text-white">COMPLETAR TODO LO QUE TENGA QUE ESCRIBIR CON MAYÚSCULA</h3>
        <p className="text-lg font-bold mb-4 text-white">
          COMPLETAR SU FORMULARIO UNA VEZ POR CADA CATEGORÍA EN LA QUE QUIERE COMPETIR
        </p>

        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-white" htmlFor="fullName">
            NOMBRE Y APELLIDO:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full px-3 py-2 border rounded-lg text-primary-900"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-white" htmlFor="birthDate">
            FECHA DE NACIMIENTO:
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            className="w-full px-3 py-2 border rounded-lg text-primary-900"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-white" htmlFor="dni">
            DNI:
          </label>
          <input
            type="text"
            id="dni"
            name="dni"
            className="w-full px-3 py-2 border rounded-lg text-primary-900"
            value={formData.dni}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-white" htmlFor="province">
            PROVINCIA:
          </label>
          <select
            id="province"
            name="province"
            className="w-full px-3 py-2 border rounded-lg text-primary-900"
            value={formData.province}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Seleccionar Provincia</option>
            {provinces.map((province, index) => (
              <option key={index} value={province}>
                {province}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-lg font-bold mb-2 text-white" htmlFor="modality">
            MODALIDAD:
          </label>
          <select
           
           id="modality"
           name="modality"
           className="w-full px-3 py-2 border rounded-lg text-primary-900"
           value={formData.modality}
           onChange={handleChange}
           required
         >
           <option value="" disabled>Seleccionar Modalidad</option>
           {modalities.map((modality, index) => (
             <option key={index} value={modality}>
               {modality}
             </option>
           ))}
         </select>
       </div>

       <div className="mb-4">
         <label className="block text-lg font-bold mb-2 text-white" htmlFor="category">
           CATEGORÍA:
         </label>
         <select
           id="category"
           name="category"
           className="w-full px-3 py-2 border rounded-lg text-primary-900"
           value={formData.category}
           onChange={handleChange}
           required
         >
           <option value="" disabled>Seleccionar Categoría</option>
           {categories.map((category, index) => (
             <option key={index} value={category}>
               {category}
             </option>
           ))}
         </select>
       </div>

       <div className="mb-4">
         <label className="block text-lg font-bold mb-2 text-white" htmlFor="competitionWeight">
           PESO DE COMPETENCIA:
         </label>
         <input
           type="text"
           id="competitionWeight"
           name="competitionWeight"
           className="w-full px-3 py-2 border rounded-lg text-primary-900"
           value={formData.competitionWeight}
           onChange={handleChange}
           required
         />
       </div>

       <div className="mb-4">
         <label className="block text-lg font-bold mb-2 text-white" htmlFor="height">
           TALLA (ALTURA) EN CENTÍMETROS:
         </label>
         <input
           type="text"
           id="height"
           name="height"
           className="w-full px-3 py-2 border rounded-lg text-primary-900"
           value={formData.height}
           onChange={handleChange}
           required
         />
       </div>

       <div className="mb-4">
         <label className="block text-lg font-bold mb-2 text-white" htmlFor="phone">
           TELÉFONO:
         </label>
         <input
           type="text"
           id="phone"
           name="phone"
           className="w-full px-3 py-2 border rounded-lg text-primary-900"
           value={formData.phone}
           onChange={handleChange}
           required
         />
       </div>

       <div className="mb-4">
         <label className="block text-lg font-bold mb-2 text-white" htmlFor="trainer">
           ENTRENADOR:
         </label>
         <input
           type="text"
           id="trainer"
           name="trainer"
           className="w-full px-3 py-2 border rounded-lg text-primary-900"
           value={formData.trainer}
           onChange={handleChange}
           required
         />
       </div>

       <button
         type="submit"
         className="w-full px-6 py-2 mt-4 text-white bg-green-600 hover:bg-green-700 rounded-lg"
         disabled={loading}
       >
         {loading ? 'Enviando...' : 'Enviar Formulario'}
       </button>
     </form>
   </section>
 );
};

export default TournamentsForm;
