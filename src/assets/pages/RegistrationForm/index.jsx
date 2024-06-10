import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

const InputField = ({ label, type, ...rest }) => (
  <div className="mb-4">
    <label className="block text-neutral-500 font-bold mb-2">{label}</label>
    <input
      type={type}
      className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
      {...rest}
    />
  </div>
);

const SelectField = ({ label, options, ...rest }) => (
  <div className="mb-4">
    <label className="block text-neutral-500 font-bold mb-2">{label}</label>
    <select className="w-full px-3 py-2 border border-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300" {...rest}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const RegistrationForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    nombre: "",
    fecha_nacimiento: "",
    dni: "",
    provincia: "",
    modalidad: "",
    categoria: "",
    peso_competencia: "",
    talla: "",
    telefono: "",
    entrenador: ""
  });

  const [loading, setLoading] = useState(false);

  const provincias = ["CABA", "BUENOS AIRES", "CATAMARCA", "CHACO", "CHUBUT", "CÓRDOBA", "CORRIENTES", "ENTRE RÍOS", "FORMOSA", "JUJUY", "LA PAMPA", "LA RIOJA", "MENDOZA", "MISIONES", "NEUQUÉN", "RÍO NEGRO", "SALTA", "SAN JUAN", "SAN LUIS", "SANTA CRUZ", "SANTA FE", "SANTIAGO DEL ESTERO", "TIERRA DEL FUEGO", "TUCUMÁN"];
  const modalidades = ["FISICOCULTURISMO", "FISICOCULTURISMO CLÁSICO", "CLASSIC PHYSIQUE", "MEN´S PHYSIQUE", "MUSCULAR MEN´S PHYSIQUE", "GAMES CLASSIC", "FITMODEL", "BIKINI", "WELLNESS", "BODY FITNESS", "WOMEN´S PHYSIQUE", "FITNESS COREOGRÁFICO", "PAREJA"];
  const categorias = ["JUNIOR", "SENIOR", "MÁSTER MAS DE 30 AÑOS (SOLO BIKINI)", "MÁSTER MÁS DE 35 ANOS (SOLO BODY FITNESS, BIKINI Y WELLNESS)", "MÁSTER MÁS DE 40 AÑOS (SOLO BIKINI, WELLNESS, FISICOCULTURISMO, MEN´S PHYSIQUE, CULTURISMO CLÁSICO Y CLASSIC PHYSIQUE)", "MÁSTER MÁS DE 45 AÑOS (SOLO FISICOCULTURISMO Y BODY FITNESS)", "MÁSTER MÁS DE 50 AÑOS (SOLO FISICOCULTURISMO)", "MÁSTER MÁS DE 55 AÑOS (SOLO FISICOCULTURISMO Y BODY FITNESS)", "MÁSTER MAS DE 60 (SOLO FISICOCULTURISMO)", "OLÍMPICA (SOLO PARA BIKINI, WELLNESS, MEN´S PHYSIQUE Y GAMES CLASSIC)", "MASCULINO (SOLO FITMODEL Y FITNESS COREOGRÁFICO)", "FEMENINO (SOLO FITMODEL Y FITNESS COREOGRÁFICO)", "INFANTIL (FOLO FITNESS COREOGRÁFICO)", "CHALLENGE (SOLO FISICOCULTURISMO, BIKINI, WELLNESS Y MEN´S PHYSIQUE)", "FITNESS (SOLO PARA PAREJAS)", "CULTURISTA (SOLO PARA PAREJAS)"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_vnkzh6r',
        'template_1fqy5mx',
        {
          nombre: form.nombre,
          fecha_nacimiento: form.fecha_nacimiento,
          dni: form.dni,
          provincia: form.provincia,
          modalidad: form.modalidad,
          categoria: form.categoria,
          peso_competencia: form.peso_competencia,
          talla: form.talla,
          telefono: form.telefono,
          entrenador: form.entrenador
        },
        '7-MGEkvWiUORZGWZE'
      )
      .then(
        () => {
          setLoading(false);
          alert("Formulario enviado correctamente.");

          setForm({
            nombre: "",
            fecha_nacimiento: "",
            dni: "",
            provincia: "",
            modalidad: "",
            categoria: "",
            peso_competencia: "",
            talla: "",
            telefono: "",
            entrenador: ""
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Error al enviar el formulario. Por favor, inténtelo de nuevo.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto p-8 bg-neutral-100 shadow-md rounded-lg mt-10"
    >
      <h1 className="text-2xl font-bold mb-6 text-center text-primary-300">COMPLETAR SU FORMULARIO 
      <br/>
      <span className="text-primary-400 "> (EN MAYUSCULA) </span> </h1>
      <form ref={formRef} onSubmit={handleSubmit}>
        <InputField label="NOMBRE Y APELLIDO *" type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        <InputField label="FECHA DE NACIMIENTO *" type="date" name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={handleChange} />
        <InputField label="DNI *" type="text" name="dni" value={form.dni} onChange={handleChange} />
        <SelectField label="PROVINCIA *" options={provincias} name="provincia" value={form.provincia} onChange={handleChange} />
        <SelectField label="MODALIDAD *" options={modalidades} name="modalidad" value={form.modalidad} onChange={handleChange} />
        <SelectField label="CATEGORÍA *" options={categorias} name="categoria" value={form.categoria} onChange={handleChange} />
        <InputField label="PESO DE COMPETENCIA *" type="text" name="peso_competencia" value={form.peso_competencia} onChange={handleChange} />
        <InputField label="TALLA (ALTURA) EN CENTÍMETROS *" type="text" name="talla" value={form.talla} onChange={handleChange} />
        <InputField label="TELÉFONO *" type="tel" name="telefono" value={form.telefono} onChange={handleChange} />
        <InputField label="ENTRENADOR *" type="text" name="entrenador" value={form.entrenador} onChange={handleChange} />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-primary-300 text-neutral-100 py-2 rounded-md font-bold hover:bg-primary-100 transition duration-200"
        >
                 {loading ? "Enviando..." : "ENVIAR"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
