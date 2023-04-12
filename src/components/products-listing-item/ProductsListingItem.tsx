import { Tooltip, Typography } from "@mui/material";
import styled from "styled-components";
import { CATEGORIES, ProductProp } from "../../models/models";
import { filterByCategorie } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { NAV_TAB_DATA } from "../../mocks/mocks";

const ProductsListingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 350px;
  padding: 2px 16px;
  padding-bottom: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ProductsListingItemImage = styled.img`
  max-width: 200px;
  max-height: 240px;
  margin-bottom: 16px;
`;

const ProductsListingItemPrice = styled(Typography)`
  display: flex;
  text-align: center;
`;

const ProductsListingItemText = styled(Typography)`
  display: flex;
  text-align: center;
`;

const ProductsListingItem = (props: { productsData: ProductProp[] }) => {
  const navigate = useNavigate();

  const handleProductNavigation = (productId: string) => {
    navigate(`../${productId}`, { replace: true });
  };
  return (
    <>
      {props.productsData.map((item) => (
        <ProductsListingItemContainer
          key={item.id}
          onClick={() => handleProductNavigation(item.id)}
        >
          <Tooltip title="Saznaj više" arrow>
            <ProductsListingItemImage src={item.img} />
          </Tooltip>
          <ProductsListingItemPrice variant="h6">
            Cena: {item.price} RSD
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
