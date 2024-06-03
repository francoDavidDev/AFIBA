import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full  h-auto py-5 bg-primary-300 ">
      <div className=" w-[90%] m-auto flex  py-1 items-start justify-between flex-row text-white  " >
        <h2 className="h4 text-white ">AFIBA</h2>
        <p className="text-[12px] flex items-start justify-start text-white ">&copy;</p>

        <div className="flex justify-end  items-center w-full text-3xl m-auto  gap-5 text-">
          <FaInstagram  className="hover:text-primary-400 hover:scale-110 transition-all duration-300 cursor-pointer"/>
          <FaTwitter className="hover:text-primary-400 hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaFacebookF className="hover:text-primary-400 hover:scale-110 transition-all duration-300 cursor-pointer" />
          <FaYoutube className="hover:text-primary-400 hover:scale-110 transition-all duration-300 cursor-pointer" />
          <AiFillTikTok className="hover:text-primary-400 hover:scale-110 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
      <div className="w-full h-[2px] bg-primary-400 " ></div>

      <div className="flex justify-center items-center gap-10 py-5 font-semibold text-neutral-100  flex-wrap">
        <a href="#" className="hover:text-primary-400 text-[10px] sm:text-sm  transition-all duration-300 cursor-pointer">POLITICA DE PRIVACIDAD</a>
        <a href="#" className="hover:text-primary-400 text-[10px] sm:text-sm  transition-all duration-300 cursor-pointer">TERMINOS DE SERVICIO</a>
        <a href="#" className="hover:text-primary-400 text-[10px] sm:text-sm transition-all duration-300 cursor-pointer">CONFIGURACION DE COOKIES</a>
      </div>

      <div className="flex justify-center items-center gap-10 text-[10px]   sm:text-s text-neutral-100 ">
      Copyright © 1994 - 2024 AFIBA. Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
