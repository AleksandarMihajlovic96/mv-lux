import { NAV_TAB_DATA, PRODUCTS_DATA } from "./../mocks/mocks";
import { CATEGORIES } from "./../models/models";

export function countCategories(categorie: CATEGORIES) {
  return PRODUCTS_DATA.filter((product) => product.categorie === categorie)
    .length;
}

export function filterByCategorie(categorie: CATEGORIES) {
  if (categorie === CATEGORIES.All) return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter((product) => product.categorie === categorie);
}

export function filterByProductId(productId: string | undefined) {
  return PRODUCTS_DATA.filter((product) => product.id === productId)[0];
}

export function checkIndexRoute(pathname: string) {
  let index = -1;
  for (let i = 0; i < NAV_TAB_DATA.length; i++) {
    if ("/proizvodi" + NAV_TAB_DATA[i].url === pathname) {
      index = i;
    }
  }
  return index;
}
