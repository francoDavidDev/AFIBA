import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    age: "",
    weight: "",
    height: "",
    experience: "",
    trainingFrequency: "",
    goal: "",
    dietaryRequirements: "",
    injuries: "",
    supplements: false,
    equipment: [],
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === "select-multiple") {
      const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
      setFormData({
        ...formData,
        [name]: selectedOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="py-20">

    <div className="max-w-4xl mx-auto my-10  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center py-10">Registro para deportistas fisicoculturistas</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Género:</label>
          <div className="flex items-center space-x-4">
            <label htmlFor="male" className="flex items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-sm">Masculino</span>
            </label>
            <label htmlFor="female" className="flex items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
                className="mr-2"
              />
              <span className="text-sm">Femenino</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Edad:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
            required
          />
        </div>
        {/* Otros campos */}
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Peso (kg):</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Altura (cm):</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">Experiencia previa:</label>
          <textarea
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded-lg"
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="trainingFrequency" className="block text-sm font-medium text-gray-700 mb-1">Frecuencia de entrenamiento por semana:</label>
          <input
            type="number"
            id="trainingFrequency"
            name="trainingFrequency"
            value={formData.trainingFrequency}
            onChange={handleInputChange}
            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">Objetivo:</label>
          <textarea
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleInputChange}
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded-lg"
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="dietaryRequirements" className="block text-sm font-medium text-gray-700 mb-1">Requerimientos dietéticos:</label>
          <textarea
            id="dietaryRequirements"
            name="dietaryRequirements"
            value={formData.dietaryRequirements}
            onChange={handleInputChange}
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded-lg"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label htmlFor="injuries" className="block text-sm font-medium text-gray-700 mb-1">Lesiones:</label>
          <textarea
            id="injuries"
            name="injuries"
            value={formData.injuries}
            onChange={handleInputChange}
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded-lg"
            rows="3"
          ></textarea>
        </div>
        <div className="col-span-2">
          <label htmlFor="supplements" className="block text-sm font-medium text-gray-700 mb-1">Suplementos:</label>
          <input
            type="checkbox"
            id="supplements"
            name="supplements"
            checked={formData.supplements}
            onChange={handleInputChange}
            className="mr-2"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="equipment" className="block text-sm font-medium text-gray-700 mb-1">Equipo:</label>
          <select
            id="equipment"
            name="equipment"
            multiple
            value={formData.equipment}
            onChange={handleInputChange}
            className="w-full border border-gray-300 focus:outline-none focus:border-blue-500 px-4 py-2 rounded-lg"
            size="3"
          >
            <option value="dumbbells">Mancuernas</option>
            <option value="barbell">Barra de pesas</option>
            <option value="bench">Banco de ejercicios</option>
            <option value="resistance-bands">Bandas de resistencia</option>
            <option value="jump-rope">Cuerda para saltar</option>
          </select>
        </div>
        <div className="col-span-2">
          <button type="submit" className="bg-primary-100 hover:bg-primary-400 trasition-all duration-300 text-white px-4 py-2 rounded-lg w-full">Enviar</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
