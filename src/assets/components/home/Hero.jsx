import React from "react";
import Carrousel from "./Carrousel";
import Notices from "./Notices";
import Events from "./Events";

const Hero = () => {
  return (
    <section className="h-auto w-full flex flex-col  ">
      <div className=" w-full flex h-[300px]  justify-center items-center  ">
        <div className="bg-red-500 w-[40%] flex flex-col text-center gap-y-8 px-5  text-neutral-100">
          <h4 className="h5 ">Participa de los torneos FIFA</h4>
          <p>
            Compre o registre su interés en entradas y hospitalidad para los
            próximos torneos FIFA
          </p>
          <button className="btn"> ENCUENTRA ENTRADAS HOY</button>
        </div>
        <Carrousel />
      </div>

    
      <Notices />
      <Events/>
      <Events/>
    </section>
  );
};

export default Hero;
