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
import product10 from "../assets/products/1147-1-crna.jpg";
import { countCategories } from "../utils/utils";

export const CATEGORIES_DATA: TopCategorieCardProp[] = [
  {
    img: cat1,
    title: "Klasični lusteri",
    url: "/klasicni-lusteri",
  },
  {
    img: cat2,
    title: "LED lusteri",
    url: "/led-lusteri",
  },
  {
    img: cat3,
    title: "Lusteri",
    url: "/lusteri",
  },
  {
    img: cat4,
    title: "Plafonske lampe",
    url: "/plafonske-lampe",
  },
  {
    img: cat5,
    title: "Podne i zidne lampe",
    url: "/podne-zidne-lampe",
  },
  {
    img: cat6,
    title: "Spotovi",
    url: "/spotovi",
  },
];

export const HOME_FEATURES_DATA: HomeFeaturedCardProp[] = [
  {
    id: "16",
    img: featured1,
    description: "Alba",
  },
  {
    id: "15",
    img: featured2,
    description: "Charisma",
  },
  {
    id: "13",
    img: featured3,
    description: "Verona",
  },
  {
    id: "14",
    img: featured4,
    description: "Vespa",
  },
  {
    id: "12",
    img: featured5,
    description: "Zevs",
  },
  {
    id: "11",
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
    power: "12W",
    areaOfUse: "Zatvoren prostor",
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
    power: "12W",
    areaOfUse: "Zatvoren prostor",
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
    power: "12W",
    areaOfUse: "Zatvoren prostor",
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
    power: "12W",
    areaOfUse: "Zatvoren prostor",
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
    power: "12W",
    areaOfUse: "Zatvoren prostor",
  },
  {
    id: "6",
    name: "Arizona 3940BK",
    img: product6,
    categorie: CATEGORIES.FloorWallLamps,
    price: 2000,
    type: "Podna lampa, Moderni dizajn, Pomocno svetlo",
    dimensions: "180x30",
    material: "Metal",
    colors: ["Crna", "Bela"],
    styled: "Moderno",
    lampBase: "E14",
    power: "12W",
    areaOfUse: "Zatvoren prostor",
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
    power: "12W",
    areaOfUse: "Spolja",
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
    power: "12W",
    areaOfUse: "Zatvoren prostor",
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
    power: "12W",
    areaOfUse: "Zatvoren prostor",
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
    colors: ["Crna", "Crvena", "Bela"],
    styled: "Moderno",
    lampBase: "E14",
    power: "12W",
    areaOfUse: "Zatvoren prostor",
  },
  {
    id: "11",
    name: "Hektor 6603-6S+1 BK",
    img: featured6,
    categorie: CATEGORIES.LEDChandelier,
    price: 7690,
    type: "Dekorativni dizajn, Dekorativno svetlo",
    dimensions: "230x80",
    material: "Metal",
    colors: ["Crna"],
    styled: "Moderno",
    lampBase: "E14",
    power: "12W",
    areaOfUse: "Zatvoren prostor",
  },
  {
    id: "12",
    name: "Zevs",
    img: featured5,
    categorie: CATEGORIES.Spots,
    price: 4560,
    type: "Dekorativni dizajn, Dekorativno svetlo",
    dimensions: "130x80",
    material: "Metal",
    colors: ["Siva"],
    styled: "Moderno",
    lampBase: "E14",
    power: "12W",
    areaOfUse: "Zatvoren prostor",
  },
  {
    id: "13",
    name: "Verona",
    img: featured3,
    categorie: CATEGORIES.Spots,
    price: 4560,
    type: "Dekorativni dizajn, Dekorativno svetlo, Drvo",
    dimensions: "130x80",
    material: "Metal, Drvo, Staklo",
    colors: ["Siva"],
    styled: "Moderno",
    lampBase: "E27",
    power: "40W",
    areaOfUse: "Zatvoren prostor",
  },
  {
    id: "14",
    name: "Vespa",
    img: featured4,
    categorie: CATEGORIES.CeilingLamps,
    price: 2560,
    type: "Dekorativni dizajn, Dekorativno svetlo",
    dimensions: "80x80",
    material: "Metal, Drvo, Staklo",
    colors: ["Siva", "Bela"],
    styled: "Moderno",
    lampBase: "E27",
    power: "3x60W",
    areaOfUse: "Zatvoren prostor",
  },
  {
    id: "15",
    name: "Charisma",
    img: featured2,
    categorie: CATEGORIES.Chandelier,
    price: 7680,
    type: "Dekorativni dizajn, Dekorativno svetlo",
    dimensions: "120x120",
    material: "Metal, Staklo",
    colors: ["Bela"],
    styled: "Moderno",
    lampBase: "E27",
    power: "6x60W",
    areaOfUse: "Zatvoren prostor",
  },
  {
    id: "16",
    name: "Alba",
    img: featured1,
    categorie: CATEGORIES.CeilingLamps,
    price: 2500,
    type: "Plafonska lampa, Moderni dizajn, Dekorativno svetlo",
    dimensions: "60x60",
    material: "Drvo, Metal, Staklo",
    colors: ["Crna", "Bela"],
    styled: "Moderno",
    lampBase: "E27",
    power: "4x60W",
    areaOfUse: "Zatvoren prostor",
  },
];

export const NAV_TAB_DATA = [
  { label: "Svi proizvodi", numberOfProducts: PRODUCTS_DATA.length, url: "" },
  {
    label: "Klasični lusteri",
    numberOfProducts: countCategories(CATEGORIES.ClassicChandelier),
    url: "/klasicni-lusteri",
  },
  {
    label: "LED lusteri",
    numberOfProducts: countCategories(CATEGORIES.LEDChandelier),
    url: "/led-lusteri",
  },
  {
    label: "Lusteri",
    numberOfProducts: countCategories(CATEGORIES.Chandelier),
    url: "/lusteri",
  },
  {
    label: "Plafonske lampe",
    numberOfProducts: countCategories(CATEGORIES.CeilingLamps),
    url: "/plafonske-lampe",
  },
  {
    label: "Podne i zidne lampe",
    numberOfProducts: countCategories(CATEGORIES.FloorWallLamps),
    url: "/podne-zidne-lampe",
  },
  {
    label: "Radne lampe",
    numberOfProducts: countCategories(CATEGORIES.WorkLamps),
    url: "/radne-lampe",
  },
  {
    label: "Spoljna rasveta",
    numberOfProducts: countCategories(CATEGORIES.ExternalLighting),
    url: "/spoljna-rasveta",
  },
  {
    label: "Spotovi",
    numberOfProducts: countCategories(CATEGORIES.Spots),
    url: "/spotovi",
  },
  {
    label: "Vintage",
    numberOfProducts: countCategories(CATEGORIES.Vintage),
    url: "/vintage",
  },
  {
    label: "Visilice",
    numberOfProducts: countCategories(CATEGORIES.Hangers),
    url: "/visilice",
  },
];

export const HEADER_NAV_DATA = [
  { text: "Početna", url: "/" },
  { text: "MvLux", url: "/onama" },
  { text: "Proizvodi", url: "/proizvodi" },
  { text: "Katalozi", url: "/katalozi" },
  { text: "Kontakt", url: "/kontakt" },
];
