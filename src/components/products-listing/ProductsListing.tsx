import { Typography } from "@mui/material";
import styled from "styled-components";
import { CATEGORIES } from "../../models/models";
import ProductsListingItem from "../products-listing-item/ProductsListingItem";

const ProductsListingContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  margin-top: 32px;
`;

const ProductsListingContainerTitle = styled(Typography)`
  && {
    font-weight: bold;
  }
`;

const ProductsListingContainerItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: flex-start;
  gap: 32px;
  margin-top: 48px;
`;

const ProductsListing = (props: {
  selectedCategorie: CATEGORIES;
  categorieLabel: string;
}) => {
  return (
    <ProductsListingContainer>
      <ProductsListingContainerTitle variant="h6">
        {props.categorieLabel.toUpperCase()}
      </ProductsListingContainerTitle>
      <ProductsListingContainerItems>
        <ProductsListingItem categorie={props.selectedCategorie} />
      </ProductsListingContainerItems>
    </ProductsListingContainer>
  );
};

export default ProductsListing;
