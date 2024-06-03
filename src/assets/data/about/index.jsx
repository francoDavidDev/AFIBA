
import image1 from "../../imgs/about/staff/image1.png";
import image2 from "../../imgs/about/staff/image2.png";
import image3 from "../../imgs/about/staff/image3.png";
import image4 from "../../imgs/about/staff/image4.png";
import image5 from "../../imgs/about/staff/image5.png";
import image6 from "../../imgs/about/staff/image6.png";
import image7 from "../../imgs/about/staff/image7.png";




export const STAFF = [
  { url: image1, type:'image' },
  { url: image2, type:'image' },
  { url: image3, type:'image' },
  { url: image4, type:'image' },
  { url: image5, type:'image' },
  { url: image6, type:'image' },
  { url: image7, type:'image' },

  
];

// Definimos un array de objetos que contienen iconos de redes sociales
import { BsInstagram, BsWhatsapp, BsFacebook, BsYoutube } from "react-icons/bs";
import oscar from '../../imgs/about/members/oscar.png'

export const MEMBERS = [
  {
    name: "OSCAR",
    tag: "PRESIDENTE",
    image: oscar,
    icon_options: [
      { icon: <BsInstagram /> },
      { icon: <BsWhatsapp /> },
      { icon: <BsFacebook /> },
      { icon: <BsYoutube /> },
    ],
  },
  /* {
    name: "MARIA MERNES",
    tag: "PRESIDENTE",
    image: maria,
    icon_options: [{ icon: <BsInstagram /> }, { icon: <BsYoutube /> }],
  },*/
];
