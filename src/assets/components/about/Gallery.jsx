import React, { useState } from "react";

import { FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";
import { STAFF } from "../../data/about";
const Gallery = () => {
  const [file, setFile] = useState(null);
  console.log(file)
  return (
    <div className="container ">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        exit={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut",delay:0.3 }}
      className=" w-full flex   justify-start items-center gap-5 ">
        <h4 className=" h4 uppercase py-10   text-primary-100  flex  justify-start items-center gap-5">
          GALERIA{" "}
          <span>
            {" "}
            <FaCamera className="h4" />
          </span>
        </h4>

        <div className="w-full h-[2px] bg-primary-200 "></div>
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
       
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut",delay:0.3 }}
      className="media-container  ">
        {STAFF.map((item, i) => (
          <div key={i} onClick={() => setFile(item)} className=" media">
            {item.type === "image" ? (
              <img src={item.url} alt={item.url} />
            ) : (
              <video src={`${file.url}#t=0.001 `} muted preload="metadata" ></video>
            )}
          </div>
        ))}
      </motion.div>
      <div className="popup-media" style={{display:file ? 'block':'none'}} >
        <span  onClick={()=>setFile(null)} >&times; </span>
        {file?.type === "video" ? (
          <video src={file.url} muted autoPlay controls />
        ) : (
          <img src={file?.url} />
        )}
      </div>
    </div>
  );
};

export default Gallery;
