import React from "react";
import { IoShareSocial } from "react-icons/io5";
import { NOTICES } from "../../data/home";
import { Link } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

const Notices = () => {
  const [animation, cycleAnimation] = useCycle("initial", "animate");
  const [animation2, cycleAnimation2] = useCycle("initial2", "animate2");
  const [moreAnimation, cycleAnimationMore] = useCycle("initial", "animate");

  const div_top = {
    initial: {
      y: -3000,
      x: 500,
      rotate: 45,
    },
    animate: {
      y: -500,
      x: 450,
      rotate: 45,
    },
  };

  const div_bottom = {
    initial2: {
      y: 0,
      x: -500,
      rotate: 45,
    },
    animate2: {
      y: -300,
      x: -300,
      rotate: 45,
    },
  };

  const buttom_animation = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
  };

  const anime = () => {
    cycleAnimation2();
    cycleAnimation();
    cycleAnimationMore();
  };

  const shareLink = (url) => {
    if (navigator.share) {
      navigator.share({
        title: 'Compartir Noticia',
        url: url,
      })
      .then(() => console.log('Compartido exitosamente'))
      .catch((error) => console.log('Error al compartir:', error));
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert('URL copiada al portapapeles');
      }).catch((error) => console.error('Error al copiar URL:', error));
    }
  };

  return (
    <div className="w-full flex h-auto flex-col lg:flex-row z-10 text-primary-200">
      {/* izquierda */}
      <div className="w-full lg:w-1/2 p-10 gap-y-5 flex flex-col ">
        <h4 className="h4 p">EVENTO PROXIMO</h4>
        {NOTICES.map((item, i) => {
          if (item.id === "3") {
            const itemUrl = `/RegistrationForm`;
            return (
              <div key={i}>
                <Link to={`/RegistrationForm`} className="block">
                  <div className="overflow-hidden rounded-xl">
                    <motion.div
                      onMouseEnter={() => anime()}
                      onMouseLeave={() => anime()}
                      className="w-full bg-green-500 h-[430px] bg-cover bg-no-repeat overflow-hidden bg-top rounded-xl cursor-pointer hover:scale-105 transition-all"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    >
                      {/* Opcional: agregar elementos animados si es necesario */}
                    </motion.div>
                  </div>
                </Link>
                <div className="flex flex-col gap-y-5 mt-3">
                  <div className="flex justify-between">
                    <h5 className="h5">{item.title}</h5>
                    <IoShareSocial
                      className="text-4xl cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        shareLink(window.location.origin + itemUrl);
                      }}
                    />
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {/* derecha */}
      <div className="w-full lg:w-1/2 p-10 gap-y-5 flex flex-col ">
        <h4 className="h4 pr-10 text-right">NOTICIAS</h4>
        <div className="w-full flex gap-0 lg:gap-4 gap-y-4 justify-around lg:justify-center items-center flex-wrap">
          {NOTICES.map((item, i) => {
            if (item.id !== "3") {
              const itemUrl = `#/NoticesViews/${item.id}`;
              return (
                <div key={i} className="relative w-full md:w-[45%] sm:w-full h-[200px] md:h-[400px] overflow-hidden rounded-xl flex flex-col justify-end cursor-pointer hover:scale-105 duration-200 hover:rounded-xl bg-bottom bg-cover bg-no-repeat" style={{ backgroundImage: `url('${item.image}')` }}>
                  {item.pdf ? (
                    <a href={item.pdf} download className="h-full w-full bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                      <p className="text-white transition-colors duration-300 hover:text-[#0f457]">{item.description}</p>
                    </a>
                  ) : (
                    <Link to={`/NoticesViews/${item.id}`} className="h-full w-full bg-black bg-opacity-50 p-4 flex flex-col justify-end">
                      <p className="text-white transition-colors duration-300 hover:text-[#0f457]">{item.description}</p>
                    </Link>
                  )}
                  {!item.pdf && item.id !== "3" && (
                    <IoShareSocial
                      className="absolute top-2 right-2 text-2xl text-white cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        shareLink(window.location.origin + itemUrl);
                      }}
                    />
                  )}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Notices;
