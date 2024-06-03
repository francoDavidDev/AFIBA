import React, { useEffect, useState } from "react";

//import { Tilt } from "react-tilt";

import { IoShareSocial } from "react-icons/io5";

import { GiBiceps } from "react-icons/gi";

import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from "react-icons/bs";

import { useAnimate ,motion} from "framer-motion";
import { MEMBERS } from "../../data/about";

const Members = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  // Definimos dos variables de estado "scope" y "scope2" utilizando el hook useAnimate de framer-motion

  const [dropdown, setDropdown] = useState("");
  const [dropdownOption, setDropdownOption] = useState(false);
  // Definimos dos variables de estado "dropdown" y "dropdownOption" utilizando el hook useState de React

  useEffect(() => {
    const handleAnimate = async () => {
      dropdownOption
        ? await animate(scope.current, { opacity: 1, x: 0 })
        : await animate(scope.current, { opacity: 0, x: 10 });
    };
    // Definimos un efecto secundario que se ejecuta cuando dropdownOption cambia
    handleAnimate();
  }, [dropdownOption]);

  useEffect(() => {
    const handleAnimate = async () => {
      dropdown
        ? await animate2(scope2.current, { opacity: 1 })
        : await animate2(scope2.current, { opacity: 0 });
    };
    // Definimos un efecto secundario que se ejecuta cuando dropdown cambia
    handleAnimate();
  }, [dropdown]);

  return (
    <div className="w-[95%]  mx-auto  flex flex-col gap-5 h-[auto]  justify-center items-center  py-20">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        exit={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut",delay:0.3 }}
      className=" w-full flex   justify-start items-center gap-5 ">
        <h4 className=" h4 uppercase py-10   text-primary-400  flex  justify-start items-center gap-5">
          MIEMBROS{" "}
          <span>
            {" "}
            <GiBiceps className="h4" />
          </span>
        </h4>

        <div className="w-full h-[2px] bg-primary-200 "></div>
      </motion.div>

      {/* Contenedor de tarjeta */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
     
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut",delay:0.3 }}
      className="w-full h-[400px]  flex justify-center items-center">
        {MEMBERS.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setDropdown("OSCAR")}
            onMouseLeave={() => setDropdown("")}
            className="w-[300px] h-[350px] bg-blue-500 rounded-2xl overflow-hidden  transition-all duration-300 hover:text-primary-400   hover:shadow-primary-400 hover:shadow-md  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            {/* Imagen */}
            <div
              className="object-cover w-full h-full py-2 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center"
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              {/* Iconos de redes sociales */}
              <div
                ref={scope2}
                onMouseEnter={() => setDropdownOption(true)}
                onMouseLeave={() => setDropdownOption(false)}
                className="relative bottom-[67%] right-3 cursor-pointer w-full duration-200 h-10 flex justify-end items-center rounded-full px-3"
              >
                <div
                  ref={scope}
                  className="flex-row w-[80%] justify-center gap-3 flex relative"
                >
                  {/* Mapeo de icon_options */}
                  {item.icon_options.map((item, i) => (
                    <div
                      key={i}
                      className="relative cursor-pointer w-10 h-10 hover:scale-110 flex hover:text-primary-400 text-primary-200 justify-center items-center bg-neutral-400 rounded-full"
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
                {/* Icono de compartir */}
                <div className="w-10 h-10 text-primary-200 flex justify-center items-center bg-neutral-400 rounded-full">
                  <IoShareSocial
                    className={`${
                      dropdownOption ? "text-primary-400" : "text-primary-200"
                    } text-2xl`}
                  />
                </div>
              </div>
              {/* Menú de opciones */}
              <h4 className="text-primary-200 h4">{item.name}</h4>
              <h6
                className={`${
                  dropdown === "OSCAR"
                    ? "text-primary-400 scale-150 shadow-xl"
                    : "text-primary-200"
                } h6 transition-all duration-200`}
              >
                {item.tag}
              </h6>
            </div>
          </div>
        ))}
        {/* Tarjeta */}
      </motion.div>
    </div>
  );
};

export default Members;
