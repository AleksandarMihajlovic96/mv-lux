import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./core/components/header/Header";
import Products from "./pages/products/Products";
import Footer from "./core/components/footer/Footer";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact-us/ContactUs";
import Catalogues from "./pages/catalogues/Catalogues";
import ProductsListing from "./components/products-listing/ProductsListing";
import { CATEGORIES } from "./models/models";
import SingleProduct from "./components/single-product/SingleProduct";

const Container = styled.div`
  width: 100%;
`;

const Main = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proizvodi" element={<Products />}>
          <Route
            path="/proizvodi"
            element={
              <ProductsListing
                categorieLabel="Svi proizvodi"
                selectedCategorie={CATEGORIES.All}
              />
            }
          />
          <Route
            path="/proizvodi/klasicni-lusteri"
            element={
              <ProductsListing
                categorieLabel="Klasicni lusteri"
                selectedCategorie={CATEGORIES.ClassicChandelier}
              />
            }
          />
          <Route
            path="/proizvodi/led-lusteri"
            element={
              <ProductsListing
                categorieLabel="Led lusteri"
                selectedCategorie={CATEGORIES.LEDChandelier}
              />
            }
          />
          <Route
            path="/proizvodi/lusteri"
            element={
              <ProductsListing
                categorieLabel="Lusteri"
                selectedCategorie={CATEGORIES.Chandelier}
              />
            }
          />
          <Route
            path="/proizvodi/plafonske-lampe"
            element={
              <ProductsListing
                categorieLabel="Plafonske lampe"
                selectedCategorie={CATEGORIES.CeilingLamps}
              />
            }
          />
          <Route
            path="/proizvodi/podne-zidne-lampe"
            element={
              <ProductsListing
                categorieLabel="Podne i zidne lampe"
                selectedCategorie={CATEGORIES.FloorWallLamps}
              />
            }
          />
          <Route
            path="/proizvodi/radne-lampe"
            element={
              <ProductsListing
                categorieLabel="Radne lampe"
                selectedCategorie={CATEGORIES.WorkLamps}
              />
            }
          />
          <Route
            path="/proizvodi/spoljna-rasveta"
            element={
              <ProductsListing
                categorieLabel="Spoljna rasveta"
                selectedCategorie={CATEGORIES.ExternalLighting}
              />
            }
          />
          <Route
            path="/proizvodi/spotovi"
            element={
              <ProductsListing
                categorieLabel="Spotovi"
                selectedCategorie={CATEGORIES.Spots}
              />
            }
          />
          <Route
            path="/proizvodi/vintage"
            element={
              <ProductsListing
                categorieLabel="Vintage"
                selectedCategorie={CATEGORIES.Vintage}
              />
            }
          />
          <Route
            path="/proizvodi/visilice"
            element={
              <ProductsListing
                categorieLabel="Visilice"
                selectedCategorie={CATEGORIES.Hangers}
              />
            }
          />
          <Route path="/proizvodi/:productId" element={<SingleProduct />} />
        </Route>
        <Route path="/onama" element={<AboutUs />} />
        <Route path="/katalozi" element={<Catalogues />} />
        <Route path="/kontakt" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default Main;
