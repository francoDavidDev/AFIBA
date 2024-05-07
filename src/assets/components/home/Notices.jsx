import React from "react";
// import image
import image1 from "../../imgs/home/image1.png";
// import icon
import { IoShareSocial } from "react-icons/io5";
import { NOTICES } from "../../data/home";

const Notices = () => {
  return (
    <div className="bg-yellow-500 w-full flex   h-auto flex-col sm:flex-row ">
      <div className="w-full md:w-1/2 bg-blue-400 flex flex-col gap-3  justify-start items-center pt-10 cursor-pointer ">
        <div className=" w-[90%] gap-y-5 flex flex-col  ">
          <h6 className="h6 font-semibold text-xl tracking-widest    ">
            {" "}
            HISTORIAS DESTACADAS
          </h6>
          <div className=" rounded-xl overflow-hidden">
            <img
              src={image1}
              alt=""
              className=" w-full h-[250px]  transition-all rounded-xl  hover:scale-105   duration-300 "
            />
          </div>
        </div>
        <div className="w-[90%] flex items-start gap-2 justify-start ">
          <h5 className="h5  ">
            Luis Enrique y su exito en el mundial de Clubes FIFA
          </h5>
          <div className="flex justify-center items-start">
            <IoShareSocial className="text-2xl text-primary-100   " />
          </div>
        </div>
        <div className="w-[90%] flex gap-5 items-start justify-start   ">
          <p className="   overflow-hidden overflow-ellipsis">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi
            ducimus rerum voluptate doloribus sapiente modi, nobis facere
            dolores impedit nesciunt perferendis laborum, tempore dolore ea
            explicabo aliquam harum. Accusamus?
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-yellow-400 flex flex-col gap-3  justify-start items-center pt-10 cursor-pointer  ">
        <div className=" w-[90%] flex flex-col  ">
          <h6 className="h6 font-semibold text-xl tracking-widest  hidden sm:block  ">
            {" "}
            HISTORIAS DESTACADAS
          </h6>
        </div>
        <div className="flex justify-center flex-wrap items-center   h-full gap-5 bg-red-500 ">
          {NOTICES.map((item, i) => (
            <div className="overflow-hidden   w-[40%]  h-[50%] rounded-xl ">
              <div className="w-full h-[60%]  overflow-hidden  rounded-xl">
                <img src={item.image} alt="" className="w-full h-full " />
              </div>
              <div className="h-[40%] flex justify-start items-start pt-3  ">
                <h6 className="  w-[80%]  line-clamp-2 ">{item.title}</h6>
                <div className="flex p-1 ">
                  <IoShareSocial className="text-xl text-primary-100   " />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notices;
