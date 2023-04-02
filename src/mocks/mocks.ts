import { CatalogueCardProp, HomeFeaturedCardProp } from "./../models/models";
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
import catImg1 from "../assets/catalogues/cat1.jpg";
import catImg2 from "../assets/catalogues/cat2.jpg";
import catImg3 from "../assets/catalogues/cat3.jpg";
import catImg4 from "../assets/catalogues/cat4.jpg";
import catImg5 from "../assets/catalogues/cat5.jpg";
import catImg5Plus from "../assets/catalogues/cat5+.jpg";
import catImg6 from "../assets/catalogues/cat6.jpg";
import catPDF1 from "../assets/catalogues/cat1.pdf";
import catPDF2 from "../assets/catalogues/cat2.pdf";
import catPDF3 from "../assets/catalogues/cat3.pdf";
import catPDF4 from "../assets/catalogues/cat4.pdf";
import catPDF5 from "../assets/catalogues/cat5.pdf";
import catPDF5Plus from "../assets/catalogues/cat5+.pdf";
import catPDF6 from "../assets/catalogues/cat6.pdf";

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

export const CATALOGUES_DATA: CatalogueCardProp[] = [
  {
    img: catImg6,
    catalogue: catPDF6,
    description: "MvLux Katalog iz 2016-e godine.",
  },
  {
    img: catImg5Plus,
    catalogue: catPDF5Plus,
    description: "Dodatni MvLux Katalog iz 2015-e godine.",
  },
  {
    img: catImg5,
    catalogue: catPDF5,
    description: "MvLux Katalog iz 2015-e godine.",
  },
  {
    img: catImg4,
    catalogue: catPDF4,
    description: "MvLux Katalog iz 2014-e godine.",
  },
  {
    img: catImg3,
    catalogue: catPDF3,
    description: "Dodatni MvLux Katalog iz 2013-e godine.",
  },
  {
    img: catImg2,
    catalogue: catPDF2,
    description: "MvLux Katalog iz 2013-e godine.",
  },
  {
    img: catImg1,
    catalogue: catPDF1,
    description: "Dodatni MvLux Katalog iz 2012-e godine.",
  },
];
