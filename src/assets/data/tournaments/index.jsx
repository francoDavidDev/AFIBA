import bikiniFitness from "../../imgs/tournaments/bikini_fitness_reglamento_ifbb.jpg";
import body_fitness_reglamento_ifbb from "../../imgs/tournaments/body_fitness_reglamento_ifbb.jpg";
import classicphysiquereglamentoifbb from "../../imgs/tournaments/classicphysiquereglamentoifbb.jpg";
import culturismo_clasico_reglamento_ifbb from "../../imgs/tournaments/culturismo_clasico_reglamento_ifbb.jpg";
import fisico_culturismo_parejas_reglamento_ifbb from "../../imgs/tournaments/fisico_culturismo_parejas_reglamento_ifbb.jpg";
import fisico_culturismo_reglamento_ifbb from "../../imgs/tournaments/fisico_culturismo_reglamento_ifbb.jpg";
import fit_model_masculino_reglamento_ifbb from "../../imgs/tournaments/fit_model_masculino_reglamento_ifbb.jpg";
import fit_modelreglamento_ifbb from "../../imgs/tournaments/fit_modelreglamento_ifbb.jpg";
import FIT_PAIRS_1 from "../../imgs/tournaments/FIT_PAIRS_1.jpg";
import fitness_coreografico_femenino_reglamento_ifbb from "../../imgs/tournaments/fitness_coreografico_femenino_reglamento_fbb.jpg";
import fitness_coreografico_masculino_reglamento_ifbb from "../../imgs/tournaments/fitness_coreografico_masculino_reglamento_ifbb.jpg";

import games_classic_reglamento_ifbb from "../../imgs/tournaments/games_classic_reglamento_ifbb.jpg";
import mens_physique_fitness_reglamento_ifbb from "../../imgs/tournaments/mens_physique_fitness_reglamento_ifbb.jpg";
import muscular_mens_physique_reglamento_ifbb from "../../imgs/tournaments/muscular_mens_physique_reglamento_ifbb.jpg";
import wellness_fitness_reglamento_ifbb from "../../imgs/tournaments/wellness-fitness-reglamento-ifbb.jpg";
import womens_physique_reglamento_ifbb from "../../imgs/tournaments/womens-physique-reglamento-ifbb.jpg";



//PDFS RULES
import manual_de_BIKINI_FITNESS from "../../pdf/tournaments/1-Manual-de-BIKINI-FITNESS.pdf";
import manual_de_WELLNESS_FITNESS from "../../pdf/tournaments/2-Manual-de-WELLNESS-FITNESS.pdf";
import manual_de_WOMENS_FIT_MODEL from "../../pdf/tournaments/3-Manual-de-WOMENS-FIT-MODEL.pdf";
import manual_de_BODY_FITNESS from "../../pdf/tournaments/4-Manual-de-BODY-FITNESS.pdf";
import manual_de_WOMENS_PHYSIQUE from "../../pdf/tournaments/5-Manual-de-WOMENS-PHYSIQUE.pdf";
import manual_de_MENS_PHYSIQUE from "../../pdf/tournaments/6-Manual-de-MENS-PHYSIQUE.pdf";
import manual_de_MUSCULAR_MENS_PHYSIQUE from "../../pdf/tournaments/7-Manual-de-MUSCULAR-MENS-PHYSIQUE.pdf";
import manual_de_FISICOCULTURISMO_MENS_BODYBUILDING from "../../pdf/tournaments/8-Manual-de-FISICOCULTURISMO-MENS-BODYBUILDING.pdf";
import manual_de_CULTURISMO_CLASICO_CLASSIC_BODYBUILDING from "../../pdf/tournaments/9-Manual-de-CULTURISMO-CLASICO-CLASSIC-BODYBUILDING.pdf";
import manual_de_GAMES_CLASSIC_BODYBUILDING from "../../pdf/tournaments/10-Manual-de-GAMES-CLASSIC-BODYBUILDING.pdf";
import manual_de_CLASSIC_PHYSIQUE from "../../pdf/tournaments/11-Manual-de-CLASSIC-PHYSIQUE.pdf";

import manual_de_FISICOCULTURISMO_PAREJAS_MIXED_PAIRS from "../../pdf/tournaments/12-Manual-de-FISICOCULTURISMO-PAREJAS-MIXED-PAIRS.pdf";
import manual_de_FITNESS_COREOGRAFICO_FEMENINO_WOMENS_FITNESS from "../../pdf/tournaments/13-Manual-de-FITNESS-COREOGRAFICO-FEMENINO-WOMENS-FITNESS.pdf";
import manual_de_FITNESS_COREOGRAFICO_MASCULINO_MENS_FITNESS from "../../pdf/tournaments/14-Manual-de-FITNESS-COREOGRAFICO-MASCULINO-MENS-FITNESS.pdf";
import reglamento_fit_model_masculino_ifbb from "../../pdf/tournaments/reglamento-fit-model-masculino-ifbb.pdf";
import REGLAMENTO_FIT_PAIRS_PAREJAS_FITNESS_CSFF from "../../pdf/tournaments/REGLAMENTO-FIT-PAIRS-PAREJAS-FITNESS-CSFF.pdf";

export const TOURNAMENTS = [
  { 
    id:'1',
    title: "BIKINI FITNESS",
    description: "",
    image: bikiniFitness,
    rules: manual_de_BIKINI_FITNESS,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "femenino",
  },

  {
    id:'2',
    title: "WELLNESS FITNESS",
    description: "",
    image: wellness_fitness_reglamento_ifbb,
    rules: manual_de_WELLNESS_FITNESS,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "femenino",
  },
  {
    id:'3',
    title: "WOMEN'S FIT MODEL",
    description: "",
    image: fit_modelreglamento_ifbb,
    rules: manual_de_WOMENS_FIT_MODEL,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "femenino",
  },
  {
    id:'4',
    title: "BODY FITNESS",
    description: "",
    image: body_fitness_reglamento_ifbb,
    rules: manual_de_BODY_FITNESS,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "femenino",
  },
  {
    id:'5',
    title: "WOMENS PHYSIQUE",
    description: "",
    image: womens_physique_reglamento_ifbb,
    rules: manual_de_WOMENS_PHYSIQUE,
 result: [
        {year:'2023', pdf:''}
    ],
    tag: "femenino",
  },
  {
    id:'6',
    title: "MENS PHYSIQUE",
    description: "",
    image: mens_physique_fitness_reglamento_ifbb,
    rules: manual_de_MENS_PHYSIQUE,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },
  {
    id:'7',
    title: "MUSCULAR MENS PHYSIQUE",
    description: "",
    image: muscular_mens_physique_reglamento_ifbb,
    rules: manual_de_MUSCULAR_MENS_PHYSIQUE,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },
  {
    id:'8',
    title: "FISICOCULTURISMO MENS BODYBUILDING",
    description: "",
    image: fisico_culturismo_reglamento_ifbb,
    rules: manual_de_FISICOCULTURISMO_MENS_BODYBUILDING,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },
  {
    id:'9',
    title: "CULTURISMO CLASICO CLASSIC BODYBUILDING",
    description: "",
    image: culturismo_clasico_reglamento_ifbb,
    rules: manual_de_CULTURISMO_CLASICO_CLASSIC_BODYBUILDING,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },
  {
    id:'10',
    title: "GAMES CLASSIC BODYBUILDING",
    description: "",
    image: games_classic_reglamento_ifbb,
    rules: manual_de_GAMES_CLASSIC_BODYBUILDING,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },

  {
    id:'11',
    title: "CLASSIC PHYSIQUE",
    description: "",
    image: classicphysiquereglamentoifbb,
    rules: manual_de_CLASSIC_PHYSIQUE,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },
  {
    id:'12',
    title: "FISICOCULTURISMO PAREJAS MIXED PAIRS",
    description: "",
    image: fisico_culturismo_parejas_reglamento_ifbb,
    rules: manual_de_FISICOCULTURISMO_PAREJAS_MIXED_PAIRS,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "mixed",
  },
  {
    id:'13',
    title: "FITNESS COREOGRAFICO FEMENINO  FITNESS",
    description: "",
    image: fitness_coreografico_femenino_reglamento_ifbb,
    rules: manual_de_FITNESS_COREOGRAFICO_FEMENINO_WOMENS_FITNESS,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },
  {
    id:'14',
    title: "FITNESS COREOGRAFICO MASCULINO FITNESS",
    description: "",
    image: fitness_coreografico_masculino_reglamento_ifbb,
    rules: manual_de_FITNESS_COREOGRAFICO_MASCULINO_MENS_FITNESS,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },
  {
    id:'15',
    title: "FIT MODEL MASCULINO",
    description: "",
    image: fit_model_masculino_reglamento_ifbb,
    rules: reglamento_fit_model_masculino_ifbb,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "masculino",
  },
  {
    id:'16',
    title: "PAREJAS FITNESS",
    description: "",
    image: FIT_PAIRS_1,
    rules: REGLAMENTO_FIT_PAIRS_PAREJAS_FITNESS_CSFF,
    result: [
        {year:'2023', pdf:''}
    ],
    tag: "mixed",
  },
];
