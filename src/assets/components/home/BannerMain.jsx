import React from "react";
import banner from "../../imgs/home/bannerMain/banner.png";
import { Link } from "react-router-dom";

const CarrouselMain = () => {
  return (
    <div className='h-[400px] w-full bg-cover bg-top bg-no-repeat  flex  flex-col justify-center items-start ' style={{backgroundImage:`url('${banner}')`}} > 
    <div className="w-full pl-5   h-full  m-auto flex  flex-col justify-center items-start gap-y-5 ">
     
   <h4 className="2 text-neutral-100  ">AFIBA Store</h4>
   
   <p className=" w-[40%]  md:w-[60%] text-lg line-clamp-5  sm:line-clamp-none text-neutral-100 ">
   Los grandes clásicos nunca pasan de moda La nueva colección de FIFA Classics ya está disponible en la tienda oficial de la FIFA.
   </p>
   <button className="btn rounded-3xl border-2 border-neutral-100 hover:scale-110 transition-all duration-200 cursor-pointer">
   <Link to={'/Store'}>     DESCRUBRELA</Link>

   </button>
   </div>
</div>
  );
};

export default CarrouselMain;
