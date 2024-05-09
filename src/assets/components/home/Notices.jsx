import React from "react";
// import image
import image1 from "../../imgs/home/image1.png";
// import icon
import { IoShareSocial } from "react-icons/io5";
import { NOTICES } from "../../data/home";
import { Link } from "react-router-dom";

const Notices = () => {
  return (
    <div className=" w-full flex  0 h-auto flex-col sm:flex-row z-10 ">
      {NOTICES.map((item, i) => {
        if (item.id === "1") {
          return (
            <div className="w-full md:w-1/2  flex flex-col gap-3  justify-start items-center pt-10 cursor-pointer ">
              <div className=" w-[90%] gap-y-5 flex flex-col  ">
                <h6 className="h6 font-semibold text-xl tracking-widest    ">
                  {" "}
                  HISTORIAS DESTACADAS
                </h6>
                <Link to={`/NoticesViews/${item.id}`}>
                  <div className=" rounded-xl overflow-hidden">
                    <img
                      src={image1}
                      alt=""
                      className=" w-full h-[250px]  transition-all rounded-xl  hover:scale-105   duration-300 "
                    />
                  </div>
                </Link>
              </div>
              <Link
                to={`/NoticesViews/${item.id}`}
                className="w-[90%] flex items-start gap-2 justify-start "
              >
                <h5 className="h5  ">{item.title}</h5>
                <div className="flex justify-center items-start">
                  <IoShareSocial className="text-2xl text-primary-100   " />
                </div>
              </Link>
              <Link
               to={`/NoticesViews/${item.id}`}
                className="w-[90%]  flex gap-5 items-start justify-start"
              >
                <p className="  overflow-hidden overflow-ellipsis">
                  {item.description}
                </p>
              </Link>
            </div>
          );
        } else {
          null;
        }
      })}

      <div className="w-full md:w-1/2  flex flex-col gap-3  justify-start items-center pt-10   ">
        <div className=" w-[90%] flex flex-col  ">
         {/* <h6 className="h6 font-semibold text-xl tracking-widest text-right  hidden sm:block  ">
            {" "}
            VER MAS
          </h6>*/}
        </div>
        <div className="flex justify-center flex-wrap items-start   h-full gap-5  ">
          {NOTICES.map((item, i) => {
            if(item.id !== '1'){
              return(
                <Link
                to={`/NoticesViews/${item.id}`}
                key={i}
                className="overflow-hidden   w-[40%]  h-[30%] rounded-xl  cursor-pointer "
              >
                <div className="w-full h-[60%]  overflow-hidden  rounded-xl">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full  hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="h-[40%] flex justify-start items-start pt-3  ">
                  <h6 className="  w-[80%]  line-clamp-2 ">{item.title}</h6>
                  <div className="flex p-1 ">
                    <IoShareSocial className="text-xl text-primary-100   " />
                  </div>
                </div>
              </Link>
              )
            }else{null}
          })}
        </div>
      </div>
    </div>
  );
};

export default Notices;
