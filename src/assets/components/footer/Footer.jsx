import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import {motion} from 'framer-motion'
import { ICONS_NETWORKING } from "../../data/header";

const Footer = () => {
  return (
    <footer className="w-full mt-10  h-auto py-5 bg-primary-300 ">
       <div className=" bg-[#0f4571] flex justify-end items-center w-full gap-10 text-2xl  pr-10 h-10 text-neutral-100 font-semibold tracking-widest  ">
      {ICONS_NETWORKING.map((item,i)=>{
        return(
          <motion.a key={i} initial  animate={{x:20}} target="_blank"  href={item.href}>
            {item.icon}
          </motion.a>
        )
      })}
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
