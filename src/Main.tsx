import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./core/components/header/Header";
import Products from "./pages/products/Products";

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Main = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proizvodi" element={<Products />} />
      </Routes>
    </Container>
  );
};

export default Main;
