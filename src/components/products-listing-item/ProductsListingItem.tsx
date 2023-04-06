import { Tooltip, Typography } from "@mui/material";
import styled from "styled-components";
import { CATEGORIES } from "../../models/models";
import { filterByCategorie } from "../../utils/utils";

const ProductsListingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 350px;
  padding: 2px 16px;
  padding-bottom: 64px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ProductsListingItemImage = styled.img`
  width: 256px;
  height: 256px;
`;

const ProductsListingItemPrice = styled(Typography)`
  display: flex;
  text-align: center;
  color: #e34234;
`;

const ProductsListingItemText = styled(Typography)`
  display: flex;
  text-align: center;
`;

const ProductsListingItem = (props: { categorie: CATEGORIES }) => {
  const productsData = filterByCategorie(props.categorie);
  return (
    <>
      {productsData.map((item) => (
        <ProductsListingItemContainer key={item.id}>
          <Tooltip title="Saznaj više" arrow>
            <ProductsListingItemImage src={item.img} />
          </Tooltip>
          <ProductsListingItemPrice variant="h6">
            {item.price} RSD
          </ProductsListingItemPrice>
          <ProductsListingItemText variant="h6" sx={{ fontWeight: "bold" }}>
            {item.name}
          </ProductsListingItemText>
        </ProductsListingItemContainer>
      ))}
    </>
  );
};

export default ProductsListingItem;
