import React from 'react'
// import banner image 
import banner from '../../imgs/home/bannerSecondary3/image1.png'

const BannerSecondary3 = () => {
  return (
    <div className='h-[400px] w-full bg-cover bg-top bg-no-repeat  flex  flex-col justify-center items-start ' style={{backgroundImage:`url('${banner}')`}} > 
         <div className="w-full pl-5   h-full  m-auto flex  flex-col justify-center items-start gap-y-5 ">
        <h4 className="h4 text-neutral-100 ">AFIBA FEMENINO</h4>
        <p className=" w-[60%]  md:w-[40%] text-lg line-clamp-5  sm:line-clamp-none text-neutral-100 ">
        AFIBA Femenino es la división o categoría dentro de la Asociación de Fisicoculturismo de AFIBA dedicada exclusivamente a las mujeres.
        </p>
        <button className="btn rounded-3xl border-2 border-neutral-100 hover:scale-110 transition-all duration-200 cursor-pointer">
          LEER MAS
        </button>
        </div>
    </div>
  )
}

export default BannerSecondary3