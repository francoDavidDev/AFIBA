import React from "react";
import { Link, useParams } from "react-router-dom";
import { EVENTS } from "../../../data/home";

const EventsViews = () => {
  const { id } = useParams();

  const item = EVENTS.find((item) => item.id === id);
  const { title, image, description} = item;

  return (
    <section className="py-20 flex flex-col justify-center h-auto items-center w-full">
      <div
        className="w-full h-[300px] sm:h-[400px] bg-cover bg-top bg-no-repeat "
        style={{ backgroundImage: `url('${image}')` }}
      ></div>

      <section className="w-full h-auto   flex flex-col justify-center gap-y-10">
        {/* Contenedor de texto/ */}
        <div className="w-full h-auto  flex">
          {/* Contenido de texto/ */}
          <div className="w-full h-full   flex flex-col justify-center">
            {/* Texto */}
            <div className="text-center my-10 flex flex-col gap-y-10">
              <h1 className="h1 w-[90%] m-auto md:w-[full] text-primary-400">
                {title}
              </h1>
              <p className=" w-[90%] md:w-[70%]  text-md md:text-2xl text-left m-auto leading-relaxed tracking-[4px] font-light">
                <span className="text-primary-400 ">{title}</span> {description}
              </p>
            </div>
            {/* Texto animado */}
            <h5 className="h5 text-start w-[90%] m-auto py-5 tracking-widest text-primary-400 ">
              INFORMACION
            </h5>
            <div className="w-full p-10 h-[auto] m-auto  flex flex-col md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start ">
              <div className="w-[70%]  m-auto">
                <img src={image} alt="image-info" className="w-full h-full" />
              </div>
              <div className=" w-[100%] md:w-[50%]  text-center sm:text-left justify-end  m-auto  md:text-left px-5 gap-5 flex flex-col">
                <h2 className=" h3 text-primary-400 ">REGLAS </h2>
                <p className=" w-[90%]  m-auto text-sm lg:text-lg xl:text-xl tracking-wider  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button className="btn bg-green-800 rounded-3xl  border-none w-[60%] m-auto hover:scale-110 hover:bg-primary-400 transition-all duration-200">
                  DESCARGAR
                </button>
              </div>
            </div>
            {/* parrafo 2 */}
            <div className="w-full p-10 h-[auto] m-auto  flex flex-col-reverse md:flex-row justify-center gap-y-5 md:gap-5 items-center md:items-start ">
              <div className=" w-[100%] md:w-[50%]  text-center sm:text-left justify-end  m-auto  md:text-left px-5 gap-5 flex flex-col">
                <h2 className=" h3 text-primary-400 ">INSCRIPCIÓN</h2>
                <p className=" w-[90%] m-auto text-sm lg:text-lg xl:text-xl tracking-wider  ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <button className="btn bg-green-800 rounded-3xl  border-none w-[60%] m-auto hover:scale-110 hover:bg-primary-400 transition-all duration-200">
                 <Link to={`/EventViews/${id}/RegistrationForm`}>
                  INSCRIBIRSE
                  </Link>
                </button>
              </div>
              <div className="w-[70%]  m-auto">
                <img src={image} alt="image-info" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EventsViews;
