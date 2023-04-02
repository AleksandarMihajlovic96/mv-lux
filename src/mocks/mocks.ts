import {
  CATEGORIES,
  CatalogueCardProp,
  HomeFeaturedCardProp,
  ProductProp,
} from "./../models/models";
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
import product1 from "../assets/products/1101-RD-Small.jpg";
import product2 from "../assets/products/DA5003B-3-scaled.jpg";
import product3 from "../assets/products/2015256-500R-scaled-480x346.jpg";
import product4 from "../assets/products/Adam-9010-70-05.jpg";
import product5 from "../assets/products/Alba-6531-venge-Small.jpg";
import product6 from "../assets/products/Arizona-3940BK-scaled.jpg";
import product7 from "../assets/products/Adda-DXZ-8004-BK-scaled.jpg";
import product8 from "../assets/products/Admiral-HY-12-CK20273-3.jpg";
import product9 from "../assets/products/Box-scaled.jpg";
import product10 from "../assets/products/1147-1-crna.jpg"

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

export const PRODUCTS_DATA: ProductProp[] = [
  {
    id: "1",
    name: "1101-RD",
    img: product1,
    categorie: CATEGORIES.WorkLamps,
    price: 1000,
    type: "Radna lampa, Dekorativno svetlo, Ambijentalno Osvetljenje",
    dimensions: "20x80",
    material: "Plastika",
    colors: ["Crvena", "Plava", "Crna"],
    styled: "Moderno",
    lampBase: "E14",
  },
  {
    id: "2",
    name: "DA5003B-3",
    img: product2,
    categorie: CATEGORIES.ClassicChandelier,
    price: 5500,
    type: "Klasicni luster, Moderni dizajn, Dekorativno svetlo, Priguseno svetlo",
    dimensions: "120x80",
    material: "Nerdjajuci celik",
    colors: ["Crna", "Bela"],
    styled: "Moderno",
    lampBase: "E14",
  },
  {
    id: "3",
    name: "2015256-500R",
    img: product3,
    categorie: CATEGORIES.LEDChandelier,
    price: 12000,
    type: "LED luster, Moderni dizajn, Dekorativno svetlo, Priguseno svetlo, Svecano",
    dimensions: "120x120",
    material: "Kristal",
    colors: ["Bela"],
    styled: "Moderno",
    lampBase: "E14",
  },
  {
    id: "4",
    name: "Adam 9010-70-05",
    img: product4,
    categorie: CATEGORIES.Chandelier,
    price: 2500,
    type: "Luster, Moderni dizajn, Dekorativno svetlo, Priguseno svetlo",
    dimensions: "80x20",
    material: "Staklo",
    colors: ["Crna"],
    styled: "Moderno",
    lampBase: "E14",
  },
  {
    id: "5",
    name: "Alba",
    img: product5,
    categorie: CATEGORIES.CeilingLamps,
    price: 1500,
    type: "Plafonska lampa, Moderni dizajn, Dekorativno svetlo",
    dimensions: "30x30",
    material: "Plastika",
    colors: ["Crna", "Bela"],
    styled: "Moderno",
    lampBase: "E14",
  },
  {
    id: "6",
    name: "Alba",
    img: product6,
    categorie: CATEGORIES.FloorWallLamps,
    price: 2000,
    type: "Podna lampa, Moderni dizajn, Pomocno svetlo",
    dimensions: "120x30",
    material: "Metal",
    colors: ["Crna", "Bela"],
    styled: "Moderno",
    lampBase: "E14",
  },
  {
    id: "7",
    name: "Adda DXZ 8004 BK",
    img: product7,
    categorie: CATEGORIES.ExternalLighting,
    price: 1250,
    type: "Spoljna rasveta, Dekorativni dizajn, Pomocno svetlo",
    dimensions: "40x30",
    material: "Metal",
    colors: ["Crna", "Bela"],
    styled: "Moderno",
    lampBase: "E14",
  },
  {
    id: "8",
    name: "Admiral",
    img: product8,
    categorie: CATEGORIES.Spots,
    price: 2250,
    type: "Spotovi, Dekorativni dizajn, Dekorativno svetlo",
    dimensions: "75x30",
    material: "Metal",
    colors: ["Crna", "Bela", "Zlatna"],
    styled: "Moderno",
    lampBase: "E14",
  },
  {
    id: "9",
    name: "Box",
    img: product9,
    categorie: CATEGORIES.Vintage,
    price: 6550,
    type: "Vintage, Dekorativni dizajn, Dekorativno svetlo",
    dimensions: "250x80",
    material: "Metal",
    colors: ["Crna"],
    styled: "Vintage",
    lampBase: "E14",
  },
  {
    id: "10",
    name: "1147-1 crna",
    img: product10,
    categorie: CATEGORIES.Hangers,
    price: 2300,
    type: "Visilica, Dekorativni dizajn, Dekorativno svetlo",
    dimensions: "130x80",
    material: "Staklo",
    colors: ["Crna","Crvena","Bela"],
    styled: "Moderno",
    lampBase: "E14",
  },
];
