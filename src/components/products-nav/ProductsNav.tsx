import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const ProductsNavContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

const ProductsNavTab = styled(Tab)({
  "&&": {
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      background: "#e34234",
      color: "white",
    },
  },
});

const ProductsNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <ProductsNavContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        TabIndicatorProps={{
          style: {
            background: "#e34234",
            color: "white"
          },
        }}
      >
        <ProductsNavTab label="Svi proizvodi" />
        <ProductsNavTab label="Klasični lusteri" />
        <ProductsNavTab label="Plafonske lampe" />
        <ProductsNavTab label="Podne i zidne lampe" />
        <ProductsNavTab label="Radne lampe" />
        <ProductsNavTab label="Spoljna rasveta" />
        <ProductsNavTab label="Spotovi" />
        <ProductsNavTab label="Vintage" />
        <ProductsNavTab label="Visilice" />
      </Tabs>
    </ProductsNavContainer>
  );
};

export default ProductsNav;
