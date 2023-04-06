import { PRODUCTS_DATA } from "./../mocks/mocks";
import { CATEGORIES } from "./../models/models";

export function countCategories(categorie: CATEGORIES) {
  return PRODUCTS_DATA.filter((product) => product.categorie === categorie)
    .length;
}

export function filterByCategorie(categorie: CATEGORIES) {
  if (categorie === CATEGORIES.All) return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter((product) => product.categorie === categorie);
}
