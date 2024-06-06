import React, { useEffect, useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { GiBiceps } from "react-icons/gi";
import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from "react-icons/bs";
import { useAnimate, motion } from "framer-motion";
import { MEMBERS } from "../../data/about";

const Members = () => {
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const [dropdown, setDropdown] = useState("");
  const [dropdownOption, setDropdownOption] = useState(false);

  useEffect(() => {
    const handleAnimate = async () => {
      dropdownOption
        ? await animate(scope.current, { opacity: 1, x: 0 })
        : await animate(scope.current, { opacity: 0, x: 10 });
    };
    handleAnimate();
  }, [dropdownOption]);

  useEffect(() => {
    const handleAnimate = async () => {
      dropdown
        ? await animate2(scope2.current, { opacity: 1 })
        : await animate2(scope2.current, { opacity: 0 });
    };
    handleAnimate();
  }, [dropdown]);

  return (
    <div className="w-[95%] mx-auto flex flex-col gap-5 h-auto justify-center items-center py-20">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        exit={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.3 }}
        className="w-full flex justify-start items-center gap-5"
      >
        <h4 className="h4 uppercase py-10 text-primary-100 flex justify-start items-center gap-5">
          MIEMBROS{" "}
          <span>
            <GiBiceps className="h4" />
          </span>
        </h4>
        <div className="w-full h-[2px] bg-primary-200"></div>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", delay: 0.3 }}
        className="w-full h-[400px] flex justify-center items-center"
      >
        {MEMBERS.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setDropdown("OSCAR")}
            onMouseLeave={() => setDropdown("")}
            whileHover={{ scale: 1.05 }}
            className="w-[300px] h-[350px] rounded-2xl overflow-hidden transition-all duration-300 hover:text-primary-100 hover:shadow-primary-100 hover:shadow-md shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          >
            <motion.div
              className="object-cover w-full h-full py-2 bg-cover bg-center bg-no-repeat flex flex-col justify-end items-center"
              style={{ backgroundImage: `url('${item.image}')` }}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                ref={scope2}
                onMouseEnter={() => setDropdownOption(true)}
                onMouseLeave={() => setDropdownOption(false)}
                className="relative pt-5 bottom-[67%] right-3 cursor-pointer w-full duration-200 h-10 flex justify-end items-center rounded-full px-3"
              >
                <motion.div
                  ref={scope}
                  className="flex-row w-[80%]  justify-center gap-3 flex relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: dropdownOption ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon_options.map((iconItem, i) => (
                    <motion.div
                      key={i}
                      className=" relative cursor-pointer w-10 h-10 hover:scale-110 flex hover:text-primary-100 text-primary-200 justify-center items-center bg-neutral-400 rounded-full"
                      whileHover={{ scale: 1.2 }}
                    >
                      {iconItem.icon}
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div
                  className="w-10 h-10 text-primary-200 flex justify-center items-center bg-neutral-400 rounded-full"
                  whileHover={{ scale: 1.2 }}
                >
                  <IoShareSocial
                    className={`${
                      dropdownOption ? "text-primary-100" : "text-primary-200"
                    } text-2xl`}
                  />
                </motion.div>
              </div>
              <motion.h4 className="text-primary-200 h4">{item.name}</motion.h4>
              <motion.h6
                className={`${
                  dropdown === "OSCAR"
                    ? "text-primary-100 scale-150 shadow-xl"
                    : "text-primary-200"
                } h6 transition-all duration-200`}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {item.tag}
              </motion.h6>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Members;
