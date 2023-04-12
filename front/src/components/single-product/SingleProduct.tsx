import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ProductProp } from "../../models/models";
import { filterByProductId } from "../../utils/utils";
import { Divider, Typography } from "@mui/material";
import SingleProductDetails from "../single-product-details/SingleProductDetails";

const SingleProductContainer = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SingleProductInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const SingleProductImgContainer = styled.div`
  width: 350px;
  margin-right: 64px;
`;

const SingleProductImg = styled.img`
  max-width: 100%;
  max-height: 550px;
`;

const SingleProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

const SingleProductDivider = styled(Divider)`
  && {
    background: ${(props) => props.theme.primary};
    width: 100%;
    height: 3px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

const SingleProduct = () => {
  const { productId } = useParams();
  const selectedProduct: ProductProp = filterByProductId(productId);

  return (
    <SingleProductContainer>
      <SingleProductDivider />
      <SingleProductInfoContainer>
        <SingleProductImgContainer>
          <SingleProductImg src={selectedProduct.img} />
        </SingleProductImgContainer>
        <SingleProductDescriptionContainer>
          <Typography variant="h3">{selectedProduct.name}</Typography>
          <Typography variant="h6">
            Za proveru stanja kontaktirati na:
          </Typography>
          <Typography variant="body1">060/030 27 88 ili 034/205-985</Typography>
          <Typography variant="h5" style={{ fontWeight: "bold" }}>
            Cena: {selectedProduct.price} RSD
          </Typography>
        </SingleProductDescriptionContainer>
      </SingleProductInfoContainer>
      <SingleProductDetails product={selectedProduct} />
    </SingleProductContainer>
  );
};

export default SingleProduct;
