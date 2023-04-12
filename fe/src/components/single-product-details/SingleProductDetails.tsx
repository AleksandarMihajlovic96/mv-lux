import { useState } from "react";
import styled from "styled-components";
import { Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { ProductProp } from "../../models/models";
import { themeStyled } from "../../theme/theme";

const SingleProductDetailsContainer = styled.div`
  width: 100%;
`;

const ProductsNavTab = styled(Tab)({
  "&&": {
    color: "black !important",
    fontWeight: "bold",
    "&:hover": {
      background: themeStyled.primary,
      color: "white !important",
    },
  },
});

const SingleProductDetailsTabPanel = styled(TabPanel)`
  width: 80%;
  margin-top: 16px;
  background: ${(props) => props.theme.primary};
  border-radius: 25px;
`;
const SingleProductDetailsText = styled(Typography)`
  && {
    color: white;
    font-size: 18px;
  }
`;

const SingleProductDetails = (props: { product: ProductProp }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <SingleProductDetailsContainer>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              background: themeStyled.primary,
            },
          }}
        >
          <ProductsNavTab label="Detalji" value="1" />
          <ProductsNavTab label="Više informacija" value="2" />
        </TabList>
        <SingleProductDetailsTabPanel value="1">
          <SingleProductDetailsText variant="subtitle1">
            <b>Naziv: </b>
            {props.product.name}
          </SingleProductDetailsText>
          <SingleProductDetailsText variant="subtitle1">
            <b>Tip: </b>
            {props.product.type}
          </SingleProductDetailsText>
          <SingleProductDetailsText variant="subtitle1">
            <b>Dimenzije: </b>
            {props.product.dimensions}
          </SingleProductDetailsText>
          <SingleProductDetailsText variant="subtitle1">
            <b>Materijal: </b>
            {props.product.material}
          </SingleProductDetailsText>
          <SingleProductDetailsText variant="subtitle1">
            <b>Stil: </b>
            {props.product.styled}
          </SingleProductDetailsText>
          <SingleProductDetailsText variant="subtitle1">
            <b>Baza: </b>
            {props.product.lampBase}
          </SingleProductDetailsText>
        </SingleProductDetailsTabPanel>
        <SingleProductDetailsTabPanel value="2">
          <SingleProductDetailsText variant="subtitle1">
            <b>Boja: </b>
            {props.product.colors.map((color) => `${color}, `)}
          </SingleProductDetailsText>
          <SingleProductDetailsText variant="subtitle1">
            <b>Snaga: </b>
            {props.product.power}
          </SingleProductDetailsText>
          <SingleProductDetailsText variant="subtitle1">
            <b>Mesto korišćenja: </b>
            {props.product.areaOfUse}
          </SingleProductDetailsText>
        </SingleProductDetailsTabPanel>
      </TabContext>
    </SingleProductDetailsContainer>
  );
};

export default SingleProductDetails;
