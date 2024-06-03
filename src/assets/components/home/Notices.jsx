import React from "react";
// import image
import image1 from "../../imgs/home/image1.png";
// import icon
import { IoShareSocial } from "react-icons/io5";
import { NOTICES } from "../../data/home";
import { Link } from "react-router-dom";
//import motion
import { motion, transform, useCycle } from "framer-motion";

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
      scale: 0 // Escala inicial 0
    },
    animate: {
      scale: 1 // Escala inicial 0
    },
  };
  const anime = () => {
    cycleAnimation2();
    cycleAnimation();
    cycleAnimationMore();
  };

  return (
    <div className=" w-full flex   h-auto flex-col   lg:flex-row z-10 text-primary-200">
      {/* izquierda */}
      <div className="w-full lg:w-1/2  p-10 gap-y-5 flex flex-col ">
        <h4 className="h4 p ">EVENTO PROXIMO</h4>
        {NOTICES.map((item, i) => {
          if (item.id === "1") {
            return (
              <Link to={`/NoticesViews/${item.id}`} key={i} className=" ">
                <div className=" overflow-hidden rounded-xl">
                <motion.div
                  onMouseEnter={() => anime()}
                  onMouseLeave={() => anime()}
                  className="w-full bg-green-500 h-[430px] bg-cover bg-no-repeat overflow-hidden bg-top rounded-xl  cursor-pointer hover:scale-105  transition-all   "
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                       { /*     <motion.button
                            variants={buttom_animation}
                            animate={moreAnimation}
                            transition={{ duration: 0.2 }}
                         className="w-[200px]  h-[50px] m-auto text-xl font-bold tracking-widest absolute left-[0%] right-[50%] -bottom-[10%] z-50 bg-primary-300 border-[2px] border-primary-200 text">

                          <Link > VER MAS</Link>
                         </motion.button>
              <motion.div
                    variants={div_top}
                    animate={animation}
                    transition={{ duration: 0.2 }}
                    className="bg-primary-300/80  border-2 border-primary-200  w-[100vh]  h-[100vh]  relative  "
                  ></motion.div>
                  
                  <motion.div
                    variants={div_bottom}
                    animate={animation2}
                    transition={{ duration: 0.2 }}
                    className="bg-primary-300/80 border-2 border-primary-200  w-full h-full relative  "
                  ></motion.div>*/}
           
                </motion.div>
                
                </div>
                <div className="flex flex-col gap-y-5 mt-3">
                  <div className="flex justify-between">
                    <h5 className="h5">{item.title}</h5>
                    <IoShareSocial className="text-4xl cursor-pointer" />
                  </div>

                  <p>{item.description} </p>
                </div>
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
      {/* derecha */}
      <div className="w-full lg:w-1/2 p-10  gap-y-5 flex  flex-col">
        <h4 className="h4 pr-10 text-right ">CALENDARIO</h4>
        <div className="w-full  flex gap-0 lg:gap-4 gap-y-4 justify-around lg:justify-center items-center flex-wrap">
          {NOTICES.map((item, i) => {
            if (item.id !== "1") {
              return (
                <Link
                to={`/NoticesViews/${item.id}`}
                  className="w-full  md:w-[45%] sm:w-full  h-[200px]  md:h-[400px] overflow-hidden rounded-xl    flex flex-col justify-center cursor-pointer  hover:-translate-y-1 duration-200  hover:rounded-xl bg-bottom bg-cover bg-no-repeat "
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="  h-full w-[300px] "> </div>
                </Link>
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
