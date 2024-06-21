import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import imagen from '../../imgs/gimns/evolutionGym.jpeg'

const provinces = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];

const modalities = [
  "FISICOCULTURISMO",
  "FISICOCULTURISMO CLÁSICO",
  "CLASSIC PHYSIQUE",
  "MEN´S PHYSIQUE",
  "MUSCULAR MEN´S PHYSIQUE",
  "GAMES CLASSIC",
  "FITMODEL",
  "BIKINI",
  "WELLNESS",
  "BODY FITNESS",
  "WOMEN´S PHYSIQUE",
  "FITNESS COREOGRÁFICO",
  "PAREJA",
];

const categories = [
  "JUNIOR",
  "SENIOR",
  "MÁSTER MAS DE 30 AÑOS (SOLO BIKINI)",
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
  "CULTURISTA (SOLO PARA PAREJAS)",
];

const TournamentsForm = () => {
  const [form, setForm] = useState({
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
    trainer: "",
    photo: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [photoCarnet, setPhotoCarnet] = useState(null);
  const fileInputRef = useRef(); // Referencia para el input de archivo
  const formRef = useRef();



  const handleChange = (e) => {
    const { name, value, files } = e.target;

    // Si el cambio viene del input de archivo, actualiza 'photo' con el archivo seleccionado
    if (name === "photo") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dniPattern = /^[0-9]+$/;
    const phonePattern = /^\+?[\d\s]+$/;
    const weightPattern = /^[0-9]+$/;
    const heightPattern = /^[0-9]+(\.[0-9]+)?$/;

    if (!form.email) {
      tempErrors.email = "Correo Electrónico es requerido";
    } else if (!emailPattern.test(form.email)) {
      tempErrors.email = "Correo Electrónico no es válido";
    }

    if (!form.fullName) tempErrors.fullName = "Nombre y Apellido es requerido";

    if (!form.birthDate) {
      tempErrors.birthDate = "Fecha de Nacimiento es requerida";
    } else {
      const birthDate = new Date(form.birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18 || age > 100) {
        tempErrors.birthDate = "Debes tener entre 18 y 100 años";
      }
    }

    if (!form.dni) {
      tempErrors.dni = "DNI es requerido";
    } else if (!dniPattern.test(form.dni)) {
      tempErrors.dni = "DNI debe contener solo números";
    }

    if (!form.province) tempErrors.province = "Provincia es requerida";

    if (!form.modality) tempErrors.modality = "Modalidad es requerida";

    if (!form.category) tempErrors.category = "Categoría es requerida";

    if (!form.competitionWeight) {
      tempErrors.competitionWeight = "Peso de Competencia es requerido";
    } else if (!weightPattern.test(form.competitionWeight)) {
      tempErrors.competitionWeight = "Peso de Competencia debe ser un número";
    }

    if (!form.height) {
      tempErrors.height = "Altura es requerida";
    } else if (!heightPattern.test(form.height)) {
      tempErrors.height = "Altura debe ser un número (por ejemplo, 1.80)";
    }

    if (!form.phone) {
      tempErrors.phone = "Teléfono es requerido";
    } else if (!phonePattern.test(form.phone)) {
      tempErrors.phone = "Teléfono no es válido";
    }

    if (!form.trainer) tempErrors.trainer = "Entrenador es requerido";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e,canvas) => {
    e.preventDefault();
    setLoading(true);
    var base64 = canvas.toDataURL();


    console.log('imagen: ', form.photo);
    if (validateForm()) {
      emailjs
        .send(
          "service_df596ny",
          "template_ylbg0bb",
          {
            form_name: form.fullName,
            to_name: form.fullName,
            to_email: form.email,
            to_birthDate: form.birthDate,
            to_dni: form.dni,
            to_province: form.province,
            to_modality: form.modality,
            to_category: form.category,
            to_competitionWeight: form.competitionWeight,
            to_height: form.height,
            to_phone: form.phone,
            to_trainer: form.trainer,
            content: base64,

            message: "Formulario de Inscripción",
          },
          "7-MGEkvWiUORZGWZE"
        )
        .then(
          () => {
            setLoading(false);
            setModalOpen(true);
            setForm({
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
              trainer: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
          }
        );
    } else {
      setLoading(false);
    }
  };

  return (
    <section className="w-full flex flex-col items-center text-gray-800 py-12 bg-primary-300">
      <div className="w-full max-w-5xl mx-auto flex flex-col justify-between items-start">
        <div className="w-full bg-white p-8 rounded-lg shadow-lg">
          <h3 className="h3 text-primary-100 text-2xl font-semibold mb-6 text-center">
            INSCRIPCIÓN TORNEO DE INDEPENDENCIA
          </h3>
          <form className="space-y-6" ref={formRef} onSubmit={handleSubmit} enctype="multipart/form-data" method="post">
            {/* email - correo */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>

            {/* name - nombre y apellido */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="fullName"
              >
                Nombre y Apellido:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName}</p>
              )}
            </div>

            {/* fecha de nacimiento - date day */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="birthDate"
              >
                Fecha de Nacimiento:
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={form.birthDate}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.birthDate ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.birthDate && (
                <p className="text-red-600">{errors.birthDate}</p>
              )}
            </div>

            {/* dni */}
            <div>
              <label className="block text-lg font-semibold mb-2" htmlFor="dni">
                DNI:
              </label>
              <input
                type="text"
                id="dni"
                name="dni"
                value={form.dni}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.dni ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.dni && <p className="text-red-600">{errors.dni}</p>}
            </div>

            {/* provincia */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="province"
              >
                Provincia:
              </label>
              <select
                id="province"
                name="province"
                value={form.province}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.province ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              >
                <option value="">Seleccionar Provincia</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
              {errors.province && (
                <p className="text-red-600">{errors.province}</p>
              )}
            </div>

            {/* modalidad */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="modality"
              >
                Modalidad:
              </label>
              <select
                id="modality"
                name="modality"
                value={form.modality}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.modality ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              >
                <option value="">Seleccionar Modalidad</option>
                {modalities.map((modality) => (
                  <option key={modality} value={modality}>
                    {modality}
                  </option>
                ))}
              </select>
              {errors.modality && (
                <p className="text-red-600">{errors.modality}</p>
              )}
            </div>

            {/* categoria */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="category"
              >
                Categoría:
              </label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.category ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              >
                <option value="">Seleccionar Categoría</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-600">{errors.category}</p>
              )}
            </div>

            {/* peso de competencia */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="competitionWeight"
              >
                Peso de Competencia:
              </label>
              <input
                type="text"
                id="competitionWeight"
                name="competitionWeight"
                value={form.competitionWeight}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.competitionWeight
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.competitionWeight && (
                <p className="text-red-600">{errors.competitionWeight}</p>
              )}
            </div>

            {/* altura */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="height"
              >
                Altura:
              </label>
              <input
                type="text"
                id="height"
                name="height"
                value={form.height}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.height ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.height && <p className="text-red-600">{errors.height}</p>}
            </div>

            {/* teléfono */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="phone"
              >
                Teléfono:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.phone && <p className="text-red-600">{errors.phone}</p>}
            </div>

            {/* entrenador */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="trainer"
              >
                Entrenador:
              </label>
              <input
                type="text"
                id="trainer"
                name="trainer"
                value={form.trainer}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.trainer ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.trainer && (
                <p className="text-red-600">{errors.trainer}</p>
              )}
            </div>

            {/* campo de subida de imagen */}
            <div>
              <label
                className="block text-lg font-semibold mb-2"
                htmlFor="profileImage"
              >
                Subir Imagen de Perfil:
              </label>
              <input
                type="file"
                id="profileImage"
                name="profileImage"
                accept="image/*"
                onChange={handleChange}
             
                className={`w-full px-4 py-2 border ${
                  errors.profileImage ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
              />
              {errors.profileImage && (
                <p className="text-red-600">{errors.profileImage}</p>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-primary-100 mb-4">
                Formulario enviado
              </h2>
              <p className="mb-4 text-primary-100">
                Gracias, estamos procesando tu información.
              </p>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TournamentsForm;
