import styled from "styled-components";
import ProductsNav from "../../components/products-nav/ProductsNav";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductsTitleContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  h5 {
    font-weight: bold;
  }
`;

const Products = () => {
  return (
    <ProductsContainer>
      <ProductsTitleContainer>
        <Typography variant="h4">NAŠA PONUDA</Typography>
      </ProductsTitleContainer>
      <ProductsNav />
      <Outlet />
    </ProductsContainer>
  );
};

export default Products;
