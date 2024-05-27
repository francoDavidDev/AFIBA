import React from "react";
// import image
import image1 from "../../imgs/home/image1.png";
// import icon
import { IoShareSocial } from "react-icons/io5";
import { NOTICES } from "../../data/home";
import { Link } from "react-router-dom";

const Notices = () => {
  return (
    <div className=" w-full flex   h-[800px] flex-col sm:flex-row z-10 text-primary-200">
      {/* izquierda */}
      <div className="w-1/2 p-10 gap-y-10 flex flex-col bg-red-500">
        <h4 className="h4">NOTICIAS</h4>

        {NOTICES.map((item, i) => {
          if (item.id === "1") {
            return (
              <div>
                <div
                  className="w-full bg-green-500 h-[430px] bg-cover bg-no-repeat bg-top rounded-xl cursor-pointer"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="flex flex-col gap-y-5 mt-3">
                  <div className="flex justify-between">
                    <h5 className="h5">{item.title}</h5>
                    <IoShareSocial className="text-4xl cursor-pointer"/>
                  </div>

                  <p>{item.description} </p>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      {/* derecha */}
      <div className="w-1/2 bg-blue-500"></div>
    </div>
  );
};

export default Notices;
