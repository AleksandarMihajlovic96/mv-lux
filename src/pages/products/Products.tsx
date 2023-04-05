import styled from "styled-components";
import ProductsNav from "../../components/products-nav/ProductsNav";
import { Typography } from "@mui/material";

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
        <Typography variant="h5">NAŠA PONUDA</Typography>
      </ProductsTitleContainer>
      <ProductsNav />
      Some text products.
    </ProductsContainer>
  );
};

export default Products;
