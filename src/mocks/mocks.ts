import { HomeFeaturedCardProp } from "./../models/models";
import cat1 from "../assets/kat1.jpg";
import cat2 from "../assets/kat2.jpg";
import cat3 from "../assets/kat3.jpg";
import cat4 from "../assets/kat4.jpg";
import cat5 from "../assets/kat5.jpg";
import cat6 from "../assets/kat6.jpg";
import { TopCategorieCardProp } from "../models/models";
import featured1 from "../assets/featured/featured1.png";
import featured2 from "../assets/featured/featured2.png";
import featured3 from "../assets/featured/featured3.png";
import featured4 from "../assets/featured/featured4.png";
import featured5 from "../assets/featured/featured5.png";
import featured6 from "../assets/featured/featured6.png";

export const CATEGORIES_DATA: TopCategorieCardProp[] = [
  {
    img: cat1,
    title: "Klasični lusteri",
  },
  {
    img: cat2,
    title: "LED lusteri",
  },
  {
    img: cat3,
    title: "Lusteri",
  },
  {
    img: cat4,
    title: "Plafonske lampe",
  },
  {
    img: cat5,
    title: "Podne i zidne lampe",
  },
  {
    img: cat6,
    title: "Spotovi",
  },
];

export const HOME_FEATURES_DATA: HomeFeaturedCardProp[] = [
  {
    img: featured1,
    description: "Alba",
  },
  {
    img: featured2,
    description: "Vespa",
  },
  {
    img: featured3,
    description: "Zevs",
  },
  {
    img: featured4,
    description: "Verona",
  },
  {
    img: featured5,
    description: "Charisma",
  },
  {
    img: featured6,
    description: "Hektor",
  },
];
