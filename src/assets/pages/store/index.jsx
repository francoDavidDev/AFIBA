import React from "react";
import { Link } from "react-router-dom";
// import image
import banner from '../../imgs/store/home/banner/banner.png'
import { CARROUSEL_STORE } from "../../data/home";

const Store = () => {
  return (
    <div className="py-20">
      {/* Banner */}
      <div className="h-[300px] text-white px-4 py-20 text-center bg-cover bg-bottom bg-no-repeat" style={{backgroundImage:`url('${banner}')`}}>
        ¡Oferta especial! ¡Hasta un 50% de descuento en productos seleccionados! <Link to="/ofertas" className="underline">Ver ofertas</Link>
      </div>
      {/* Contenido principal */}
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-semibold text-center mb-8">Bienvenido a nuestra tienda en línea</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Aquí puedes agregar productos destacados */}
            {CARROUSEL_STORE.map((item,i)=>(
               <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          
               <img src={item.image} alt="Producto destacado" className="w-full h-64 object-cover" />
               <div className="p-4">
                 <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                 <p className="text-gray-700 mb-4">{item.description}</p>
                 <Link to={`/Store/SingleProduct/${item.id} `} className="bg-primary-100 hover:bg-primary-400 hover:scale-110 transition-all duration-300 text-white px-4 py-2 rounded-lg">Ver más</Link>
               </div>
             </div>
            ))}
         
         
       
        </div>
      </div>
    </div>
  );
};

export default Store;
