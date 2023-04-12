export enum CATEGORIES {
  All,
  ClassicChandelier,
  LEDChandelier,
  Chandelier,
  CeilingLamps,
  FloorWallLamps,
  WorkLamps,
  ExternalLighting,
  Spots,
  Vintage,
  Hangers,
}

export interface TopCategorieCardProp {
  img: string;
  title: string;
  url: string;
}

export interface HomeFeaturedCardProp {
  id: string;
  img: string;
  description: string;
}

export interface MvLuxMapProp {
  lat: number;
  lng: number;
}

export interface CatalogueCardProp {
  img: string;
  catalogue: string;
  description: string;
}

export interface ProductProp {
  id: string;
  name: string;
  img: string;
  categorie: CATEGORIES | number;
  price: number;
  type: string;
  dimensions: string;
  material: string;
  colors: string[];
  power: string;
  areaOfUse: string;
  styled: string;
  lampBase: string;
}
