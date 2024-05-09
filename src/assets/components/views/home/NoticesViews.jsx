import React from "react";
import { useParams } from "react-router-dom";
import { NOTICES } from "../../../data/home";

const NoticesViews = () => {
  const { id } = useParams();

  const item = NOTICES.find((item) => item.id === id);
  const { title, image, description } = item;

  return (
    <section className="pt-20 flex flex-col justify-center h-auto items-center w-full">
      <div
        className="w-full h-[300px] sm:h-[400px] bg-cover bg-top bg-no-repeat "
        style={{ backgroundImage: `url('${image}')` }}
      ></div>

      <div className="flex w-full flex-col justify-center items-center text-left gap-y-10 p-10">
        <h4 className="h4  text-center">{title}</h4>
        <p className="text-sm sm:text-lg">{description}</p>
      </div>
    </section>
  );
};

export default NoticesViews;
