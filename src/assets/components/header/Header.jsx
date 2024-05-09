import React, { useEffect, useState } from "react";
import image from "../../imgs/logo.png";
import Nav from "./Nav";
// import react icons
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Header = () => {
  //estado del header
  const [isActive, setIsActive] = useState(false);

  //nav mobile estado
  const [navMobile, setNavMobile] = useState(false);

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-primary-100  py-[16px] fixed" : "bg-primary-100  "
      } fixed  max-w-[1440px] z-30 left-0 right-0 mx-auto  flex-col flex justify-start items-center transition-all duration-300 `}
    >
      <div className="flex justify-end items-center w-full gap-10 text-[12px] pr-10 h-10 text-neutral-100 font-semibold tracking-widest  ">
        <Link to={`/Store`} className="hover:text-primary-400 transition-all duration-200">STORE </Link>
        <a href="#" className="hover:text-primary-400 transition-all duration-200"> AFIBA MONSTER </a>
      </div>
      <div className="bg-white w-full h-[1px] "></div>
      <div className="w-full gap-10  flex justify-start items-center  px-[20px] lg:px-[80px] ">
      <div
          onClick={() => setNavMobile(!navMobile)}
          className="sm:hidden    "
        >
          {navMobile ? (
            <RiCloseFill className="text-neutral-100 text-3xl cursor-pointer" />
          ) : (
            <MdMenu className="text-neutral-100 text-3xl cursor-pointer " />
          )}
        </div>
        <div className=" flex items-start justify-start flex-row text-white">
          <Link to={'/'}>
          <h2 className="h3 text-neutral-100 ">
            AFIBA
            </h2>
            </Link>
          <p className="text-[12px] flex items-start justify-start  text-neutral-100">
            &copy;
          </p>
        </div>
        {/*nav initially hidden - show on desktop*/}
        <Nav />
        {/**btns - initially hidden -show on desktop */}

      
        <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
      </div>
    </header>
  );
};

export default Header;
