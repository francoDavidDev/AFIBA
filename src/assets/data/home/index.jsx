import imageCarrousel1 from "../../imgs/home/carrouselHero/image1.png";
import imageCarrousel2 from "../../imgs/home/carrouselHero/image2.png";
import imageCarrousel3 from "../../imgs/home/carrouselHero/image3.png";

import resultados_independencia2024 from '../../pdf/results/2024/RESULTADO_COPA_INDEPENDENCIA.pdf'


export const CARROUSEL = [
  {
    image: imageCarrousel1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: imageCarrousel2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: imageCarrousel3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];





import ASAMBLEA_AFIBA_MARZO_2024 from '../../imgs/notice/ASAMBLEA_AFIBA_MARZO_2024.jpg';
import resultados_indepencia_img from '../../imgs/notice/resultados_independencia.png';
import banner from '../../imgs/notice/13_octubre.jpg';
import calendario from "../../imgs/home/notices/calendario.jpg";

export const NOTICES = [
 
  {
    id: "1",
    title: "ASAMBLEA AFIBA MARZO 2024",
    description: "El Ultimo 16 Marzo De 2024 Afiba Famf Ifbb Renovó Su Comision Directiva Para El Nuevo Ciclo 2024 / 2028.Presidenta: Maria Mernes Vicepresidente: Leonardo Zarate Secretario: Pablo Roldan Tesorero: Alejandro Maidana.",
    image: ASAMBLEA_AFIBA_MARZO_2024,
    pdf:null,
  },
  {
    id: "2",
    title: "",
    description: "DESCARGA LOS RESULTADOS DE LA COPA INDEPENDENCIA 2024",
    image: resultados_indepencia_img,
    pdf:resultados_independencia2024,
  },
  {
    id: "3",
    title: "CAMPEONATO BONAERENSE.",
    description: "Haz clic en la imagen para poder preinscribirte en el CAMPEONATO BONAERENSE.",
    image: banner,
    pdf:null
  },
];

import imageStore1 from "../../imgs/home/CarrouselStore/image1.png";
import imageStore2 from "../../imgs/home/CarrouselStore/image2.png";
import imageStore3 from "../../imgs/home/CarrouselStore/image3.png";
import imageStore4 from "../../imgs/home/CarrouselStore/image4.png";
import imageStore5 from "../../imgs/home/CarrouselStore/image5.png";
import imageStore6 from "../../imgs/home/CarrouselStore/image6.png";
import imageStore7 from "../../imgs/home/CarrouselStore/image7.png";
import imageStore8 from "../../imgs/home/CarrouselStore/image8.png";

export const CARROUSEL_STORE = [
  {id:'1' ,title: "Musculosa Negra AFIBA", image: imageStore1 ,price: 69.99 , description:'Ropa deportiva AFIBA OFICIAL',category:'Ropa unisex'},
  {id:'2', title: "Top Verde AFIBA", image: imageStore2,price: 69.99 , description:'Ropa deportiva AFIBA OFICIAL' },
  {id:'3', title: "Conjunto Violeta AFIBA", image: imageStore3 ,price: 69.99 , description:'Ropa deportiva AFIBA OFICIAL',category:'Ropa unisex'},
  {id:'4',title: "Conjunto Negro AFIBA", image: imageStore4 ,price: 69.99 , description:'Ropa deportiva AFIBA OFICIAL',category:'Ropa unisex'},
  {id:'5', title: "Conjunto Negro/Naranja AFIBA", image: imageStore5 ,price: 69.99 , description:'Ropa deportiva AFIBA OFICIAL',category:'Ropa unisex'},
  {id:'6' ,title: "Short Oficial AFIBA", image: imageStore6,price: 69.99 , description:'Ropa deportiva AFIBA OFICIAL' ,category:'Ropa unisex'},
  {id:'7', title: "Conjunto Negro AFIBA Femenino ", image: imageStore7,price: 69.99 , description:'Ropa deportiva AFIBA OFICIAL' ,category:'Ropa unisex'},
  {id:'8', title: "Conjunto Negro/Blanco AFIBA Femenino", image: imageStore8,price: 69.99 , description:'Ropa deportiva AFIBA OFICIAL',category:'Ropa unisex' },
];

import imageTheme1 from "../../imgs/home/tremes/arbitraje.jpeg";
import imageTheme2 from "../../imgs/home/tremes/medicina.png";
import imageTheme3 from "../../imgs/home/tremes/clasificacion.jpeg";
import imageTheme4 from "../../imgs/home/tremes/desarrollo.webp";
import imageTheme5 from "../../imgs/home/tremes/tecnologia.png";
import imageTheme6 from "../../imgs/home/tremes/femenino.png";

export const CARROUSEL_THEMES = [
  { title: "Fitness Femenino", image: imageTheme6 },
  { title: "Artitraje", image: imageTheme1 },
  { title: "Tecnologías", image: imageTheme5 },
  { title: "AFIBA Medicina", image: imageTheme2 },
  { title: "Clasificación", image: imageTheme3 },
  { title: "Desarrollo", image: imageTheme4 },
];



import imageMundial1 from '../../imgs/home/mundial/image1.png'
import imageMundial2 from '../../imgs/home/mundial/image2.png'
import imageMundial3 from '../../imgs/home/mundial/image3.png'
import imageMundial4 from '../../imgs/home/mundial/image4.png'


export const MUNDIAL=[
    { id:'1',title: "Nuevo Cinturon para el GANADOR", image: imageMundial1 ,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {id:'2', title: "La lesion de Arnold", image: imageMundial2,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {id:'3', title: "La nueva tecnologia que se implementa en Mendoza", image: imageMundial3,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    {id:'4', title: "Arnold revela su dieta para subir de peso", image: imageMundial4,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },

]